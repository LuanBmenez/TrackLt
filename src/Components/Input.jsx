import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #D4D4D4;
  border-radius: 5px;
  padding: 0 11px;
  font-size: 16px;
  font-family: 'Lexend Deca', sans-serif;
  margin-bottom: 13px;
  background-color: ${props => props.disabled ? '#F2F2F2' : '#FFFFFF'};
  color: ${props => props.disabled ? '#AFAFAF' : '#666666'};

  &::placeholder {
    color: #DBDBDB;
  }

  &:focus {
    outline: none;
    border-color: #52B6FF;
  }
`;

const Input = ({ placeholder, type = "text", value, onChange, disabled = false }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input;
