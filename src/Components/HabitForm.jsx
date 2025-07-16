import { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import DaySelector from "./DaySelector";

const FormContainer = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 18px;
  margin-bottom: 20px;
`;

const FormTitle = styled.h3`
  font-family: 'Lexend Deca', sans-serif;
  font-size: 20px;
  color: #666666;
  margin-bottom: 18px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 30px;
`;

const CancelButton = styled(Button)`
  background-color: #FFFFFF;
  color: #52B6FF;
  border: 1px solid #52B6FF;
  
  &:hover {
    background-color: #F0F8FF;
  }
`;

const HabitForm = ({ onCancel, onSave, loading = false }) => {
  const [habitName, setHabitName] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);

  const handleSave = () => {
    if (habitName.trim() && selectedDays.length > 0) {
      onSave({
        name: habitName.trim(),
        days: selectedDays
      });
    }
  };

  return (
    <FormContainer>
      <FormTitle>Novo hábito</FormTitle>
      
      <Input
        placeholder="nome do hábito"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        disabled={loading}
      />
      
      <DaySelector
        selectedDays={selectedDays}
        onDayToggle={setSelectedDays}
        disabled={loading}
      />
      
      <ButtonContainer>
        <CancelButton onClick={onCancel} disabled={loading}>
          Cancelar
        </CancelButton>
        
        <Button 
          onClick={handleSave}
          disabled={loading || !habitName.trim() || selectedDays.length === 0}
        >
          {loading ? 'Salvando...' : 'Salvar'}
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default HabitForm;
