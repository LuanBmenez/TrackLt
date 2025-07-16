import styled from "styled-components";

const Container = styled.div`
  margin: 15px 0;
`;

const Label = styled.p`
  font-family: 'Lexend Deca', sans-serif;
  font-size: 16px;
  color: #666666;
  margin-bottom: 8px;
`;

const DaysContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const DayButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #D4EDDA;
  border-radius: 5px;
  background-color: ${props => props.$selected ? '#CFCFCF' : '#FFFFFF'};
  color: ${props => props.$selected ? '#FFFFFF' : '#CFCFCF'};
  font-family: 'Lexend Deca', sans-serif;
  font-size: 20px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.6 : 1};

  &:hover {
    background-color: ${props => props.disabled ? '' : props.$selected ? '#AFAFAF' : '#F0F0F0'};
  }
`;

const DaySelector = ({ selectedDays, onDayToggle, disabled = false }) => {
  const daysOfWeek = [
    { letter: 'D', value: 0 },  
    { letter: 'S', value: 1 },  
    { letter: 'T', value: 2 },  
    { letter: 'Q', value: 3 },  
    { letter: 'Q', value: 4 },  
    { letter: 'S', value: 5 },  
    { letter: 'S', value: 6 }   
  ];

  const toggleDay = (dayValue) => {
    if (disabled) return;
    
    if (selectedDays.includes(dayValue)) {
      onDayToggle(selectedDays.filter(day => day !== dayValue));
    } else {
      onDayToggle([...selectedDays, dayValue]);
    }
  };

  return (
    <Container>
      <Label>Quais dias?</Label>
      <DaysContainer>
        {daysOfWeek.map((day, index) => (
          <DayButton
            key={index}
            $selected={selectedDays.includes(day.value)}
            onClick={() => toggleDay(day.value)}
            disabled={disabled}
          >
            {day.letter}
          </DayButton>
        ))}
      </DaysContainer>
    </Container>
  );
};

export default DaySelector;
