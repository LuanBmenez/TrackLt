import styled from "styled-components";


export const TodayHabitsContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const HabitTodayCard = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 13px;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    color: #666666;
    margin-bottom: 7px;
  }

  p {
    font-family: "Lexend Deca", sans-serif;
    font-size: 13px;
    color: #666666;
    margin-bottom: 16px;
  }
`;

export const CheckButton = styled.button`
  width: 69px;
  height: 69px;
  background-color: ${props => props.done ? '#8FC549' : '#EBEBEB'};
  border: 1px solid ${props => props.done ? '#8FC549' : '#E7E7E7'};
  border-radius: 5px;
  position: absolute;
  right: 13px;
  top: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  color: #FFFFFF;

  &:hover {
    filter: brightness(110%);
  }
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

export const EmptyMessage = styled.div`
  color: #BABABA;
  font-family: "Lexend Deca", sans-serif;
  font-size: 18px;
  text-align: center;
  margin: 28px 0;
`;
