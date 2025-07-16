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

const HabitDays = styled.p`
  font-family: 'Lexend Deca', sans-serif;
  font-size: 13px;
  color: #666666;
  margin: 0;
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
  const daysOfWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  
  const getDaysText = (days) => {
    if (!days || days.length === 0) return '';
    
    const dayNames = days.map(day => daysOfWeek[day]).join(', ');
    return dayNames;
  };

  return (
    <CardContainer>
      <HabitInfo>
        <HabitName>{habit.name}</HabitName>
        <HabitDays>{getDaysText(habit.days)}</HabitDays>
      </HabitInfo>
      <DeleteButton onClick={() => onDelete(habit.id)}>
        🗑️
      </DeleteButton>
    </CardContainer>
  );
};

export default HabitCard;
