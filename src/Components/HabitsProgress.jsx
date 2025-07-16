import styled from "styled-components";

const ProgressContainer = styled.div`
  padding: 0 17px 20px 17px;
`;

const ProgressText = styled.p`
  font-family: 'Lexend Deca', sans-serif;
  font-size: 18px;
  color: #8FC549;
  margin: 0;
`;

const HabitsProgress = ({ progress }) => {
  return (
    <ProgressContainer>
      <ProgressText>{progress}</ProgressText>
    </ProgressContainer>
  );
};

export default HabitsProgress;
