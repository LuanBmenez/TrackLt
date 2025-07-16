import { Link } from "react-router-dom";
import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 68px 36px;
  background-color: #ffffff;
`;
export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

export const SignUpLink = styled(Link)`
  font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
  color: #52b6ff;
  text-decoration: underline;
  text-align: center;
`;
