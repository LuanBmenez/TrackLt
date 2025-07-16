import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "../Components/Header";
import PageContainer from "../Components/PageContainer";
import EmptyMessage from "../Components/EmptyMessage";
import PageTitle from "../Components/PageTitle";
import Footer from "../Components/Footer";
import HabitForm from "../Components/HabitForm";
import HabitCard from "../Components/HabitCard";

const HabitsContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Habits = () => {
  const [showForm, setShowForm] = useState(false);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

   console.log("Token encontrado:", token);

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
  };

  const handleSaveHabit = async (habitData) => {
    if (!token) {
      alert("Token não encontrado. Faça login novamente.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        {
          name: habitData.name,
          days: habitData.days,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setHabits([...habits, response.data]);
      setShowForm(false);
    } catch (error) {
      console.error("Erro ao criar hábito:", error);
      alert("Erro ao criar hábito. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteHabit = async (habitId) => {
    if (!window.confirm("Você tem certeza que deseja excluir este hábito?")) {
      return;
    }

    if (!token) {
      alert("Token não encontrado. Faça login novamente.");
      return;
    }

    try {
      await axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setHabits(habits.filter((habit) => habit.id !== habitId));
    } catch (error) {
      console.error("Erro ao excluir hábito:", error);
      alert("Erro ao excluir hábito. Tente novamente.");
    }
  };

  useEffect(() => {
    const fetchHabits = async () => {
      if (!token) {
        console.log("Token não encontrado");
        return;
      }

      try {
        const response = await axios.get(
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setHabits(response.data);
      } catch (error) {
        console.error("Erro ao buscar hábitos:", error);
        if (error.response?.status === 401) {
          alert("Token inválido. Faça login novamente.");
        }
      }
    };

    fetchHabits();
  }, [token]);

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
