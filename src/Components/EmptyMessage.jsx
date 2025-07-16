import styled from "styled-components";

const MessageContainer = styled.div`
  padding: 0 17px;
  margin-bottom: 20px;
  width: 85%;
`;

const MessageText = styled.p`
  font-family: 'Lexend Deca', sans-serif;
  font-size: 18px;
  color: #666666;
  line-height: 22px;
  margin: 0;
`;

const EmptyMessage = ({ message }) => {
  return (
    <MessageContainer>
      <MessageText>{message}</MessageText>
    </MessageContainer>
  );
};

export default EmptyMessage;
