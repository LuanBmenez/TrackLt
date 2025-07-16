import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterContainer, Form, SignUpLink } from "./style";
import Logo from "../../Components/Logo";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useAPI } from "../../context/APIContext";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [URL, setUrl] = useState("");
  const { register, loading } = useAPI();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await register(email, password, name, URL);
    
    if (result.success) {
      alert("Cadastro realizado com sucesso!");
      navigate("/");
    } else {
      alert("Erro ao registrar: " + result.message);
    }
  };
  return (
    <RegisterContainer>
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
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <Input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
        />
        <Input
          placeholder="Url da foto"
          type="text"
          value={URL}
          onChange={(e) => setUrl(e.target.value)}
          disabled={loading}
        />
        <Button type="submit" disabled={loading || !email || !password || !name || !URL}>
          {loading ? "Registrando..." : "Registrar"}
        </Button>
      </Form>
      <SignUpLink to="/">Ja tem conta? Faça Login!</SignUpLink>
    </RegisterContainer>
  );
};

export default Register;
