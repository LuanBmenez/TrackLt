import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 5px;
  margin: 0 17px 10px 17px;
  padding: 13px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HabitInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const HabitName = styled.h3`
  font-family: 'Lexend Deca', sans-serif;
  font-size: 20px;
  color: #666666;
  margin: 0 0 8px 0;
`;

const DaysContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`;

const DayBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #D4EDDA;
  background-color: ${props => props.$selected ? '#CFCFCF' : '#FFFFFF'};
  color: ${props => props.$selected ? '#FFFFFF' : '#CFCFCF'};
  font-family: 'Lexend Deca', sans-serif;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #666666;
  font-size: 15px;
  cursor: pointer;
  
  &:hover {
    color: #FF0000;
  }
`;

const HabitCard = ({ habit, onDelete }) => {
  const daysOfWeek = [
    { letter: 'D', value: 0 }, 
    { letter: 'S', value: 1 },  
    { letter: 'T', value: 2 },  
    { letter: 'Q', value: 3 }, 
    { letter: 'Q', value: 4 },  
    { letter: 'S', value: 5 }, 
    { letter: 'S', value: 6 }   
  ];
  
  const renderDays = () => {
    
    return daysOfWeek.map((day) => {
     
      const isSelected = habit.days && habit.days.includes(day.value);
      
      return (
        <DayBox key={day.value} $selected={isSelected}>
          {day.letter}
        </DayBox>
      );
    });
  };

  return (
    <CardContainer>
      <HabitInfo>
        <HabitName>{habit.name}</HabitName>
        <DaysContainer>{renderDays()}</DaysContainer>
      </HabitInfo>
      <DeleteButton onClick={() => onDelete(habit.id)}>
        🗑️
      </DeleteButton>
    </CardContainer>
  );
};

export default HabitCard;
