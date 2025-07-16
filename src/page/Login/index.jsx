import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Components/Logo";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useAPI } from "../../context/APIContext";
import { LoginContainer, Form, SignUpLink } from "./style";




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useAPI();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await login(email, password);
    
    if (result.success) {
      alert("Login realizado com sucesso!");
      navigate("/habits");
    } else {
      alert(result.message);
    }
  };

  return (
    <LoginContainer>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <Button type="submit" disabled={loading || !email || !password}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
      </Form>
      <SignUpLink to="/Register">Não tem uma conta? Cadastre-se!</SignUpLink>
    </LoginContainer>
  );
};

export default Login;
