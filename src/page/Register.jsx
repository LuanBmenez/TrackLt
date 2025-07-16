import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Components/Logo";
import Input from "../Components/Input";
import Button from "../Components/Button";
import axios from "axios";

const RegisterContainer = styled.div`
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

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [URL, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const body = {
      email: email,
      name: name,
      image: URL,
      password: password,
    };

    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        alert("Erro ao registrar: " + err.response.data.message);
        setLoading(false);
      });
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
