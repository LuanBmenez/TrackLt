import styled from "styled-components";

export const HabitsContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const LoginMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  text-align: center;
  
  h2 {
    color: #126BA5;
    margin-bottom: 20px;
  }
  
  button {
    background-color: #52B6FF;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
