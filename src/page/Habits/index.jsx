import { useState } from "react";
import {HabitsContainer, LoginMessage} from "./style";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import PageContainer from "../../Components/PageContainer";
import EmptyMessage from "../../Components/EmptyMessage";
import PageTitle from "../../Components/PageTitle";
import Footer from "../../Components/Footer";
import HabitForm from "../../Components/HabitForm";
import HabitCard from "../../Components/HabitCard";
import { useAPI } from "../../context/APIContext";



const Habits = () => {
  const [showForm, setShowForm] = useState(false);
  const { habits, loading, createHabit, deleteHabit, isAuthenticated } = useAPI();
  const navigate = useNavigate();


  if (!isAuthenticated) {
    return (
      <PageContainer>
        <Header />
        <LoginMessage>
          <h2>Você precisa estar logado para acessar esta página</h2>
          <button onClick={() => navigate("/")}>
            Fazer Login
          </button>
        </LoginMessage>
        <Footer />
      </PageContainer>
    );
  }

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
  };

  const handleSaveHabit = async (habitData) => {
    const result = await createHabit(habitData.name, habitData.days);
    
    if (result.success) {
      setShowForm(false);
    } else {
      alert(result.message);
    }
  };

  const handleDeleteHabit = async (habitId) => {
    if (!window.confirm("Você tem certeza que deseja excluir este hábito?")) {
      return;
    }

    const result = await deleteHabit(habitId);
    
    if (!result.success) {
      alert(result.message);
    }
  };

  return (
    <PageContainer>
      <Header />
      <PageTitle
        title="Meus Hábitos"
        showAddButton
        onAddClick={handleAddClick}
      />
      
      {showForm && (
        <HabitForm
          onCancel={handleCancelForm}
          onSave={handleSaveHabit}
          loading={loading}
        />
      )}
      
      {habits.length === 0 && !showForm && (
        <EmptyMessage message="Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!" />
      )}
      
      {habits.length > 0 && (
        <HabitsContainer>
          {habits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              onDelete={handleDeleteHabit}
            />
          ))}
        </HabitsContainer>
      )}
      
      <Footer />
    </PageContainer>
  );
};

export default Habits;
