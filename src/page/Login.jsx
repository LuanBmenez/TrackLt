import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Components/Logo";
import Input from "../Components/Input";
import Button from "../Components/Button";
import axios from "axios";

const LoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 68px 36px;
  background-color: #ffffff;
`;

const Form = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

const SignUpLink = styled(Link)`
  font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
  color: #52b6ff;
  text-decoration: underline;
  text-align: center;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const body = {
      email: email,
      password: password,
    };

    axios
      .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
      .then((response) => {
    
        const { token } = response.data;
        localStorage.setItem("token", token);
        
        console.log("Token salvo no localStorage:", token);
        
        alert("Login realizado com sucesso!");
        setLoading(false);
        
        
        navigate("/habit");
      })
      .catch((err) => {
        console.error("Erro no login:", err);
        alert("Erro ao fazer login: " + (err.response?.data?.message || "Erro desconhecido"));
        setLoading(false);
      });
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
