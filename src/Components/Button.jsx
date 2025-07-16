import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 45px;
  background-color: #52B6FF;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-family: 'Lexend Deca', sans-serif;
  color: #FFFFFF;
  cursor: pointer;
  margin-bottom: 25px;
  opacity: ${props => props.disabled ? 0.7 : 1};

  &:hover {
    background-color: ${props => props.disabled ? '#52B6FF' : '#4AA3E6'};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const Button = ({ children, onClick, disabled = false, type = "button" }) => {
  return (
    <StyledButton 
      onClick={onClick} 
      disabled={disabled}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;


