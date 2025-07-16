import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageContainer from "../../Components/PageContainer";
import PageTitle from "../../Components/PageTitle";
import { useAPI } from "../../context/APIContext";
import {EmptyMessage, HabitTodayCard, CheckButton, TodayHabitsContainer, LoginMessage} from "./style";

dayjs.locale('pt-br');


const Today = () => {
  const { todaysHabits, fetchTodaysHabits, toggleHabit, isAuthenticated } = useAPI();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      fetchTodaysHabits();
    }
  }, [isAuthenticated, fetchTodaysHabits]);


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

  const getCurrentDate = () => {
    const today = dayjs();
    
    // Capitalizar primeira letra do dia da semana
    const dayOfWeek = today.format('dddd');
    const capitalizedDay = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
    
    const formattedDate = today.format('DD/MM');
    
    return `${capitalizedDay}, ${formattedDate}`;
  };

  const getSubtitle = () => {
    if (!todaysHabits || todaysHabits.length === 0) {
      return "Nenhum hábito concluído ainda";
    }
    
    const completedHabits = todaysHabits.filter(habit => habit.done).length;
    const totalHabits = todaysHabits.length;
    const percentage = Math.round((completedHabits / totalHabits) * 100);
    
    return `${percentage}% dos hábitos concluídos`;
  };

  const handleToggleHabit = async (habitId, currentStatus) => {
    const result = await toggleHabit(habitId, currentStatus);
    
    if (!result.success) {
      alert(result.message);
    }
  };

  return (
    <PageContainer>
      <Header />
      <PageTitle 
        title={getCurrentDate()} 
        subtitle={getSubtitle()}
        subtitleColor={
          todaysHabits && todaysHabits.some(habit => habit.done) 
            ? "#8FC549" 
            : "#BABABA"
        }
      />
      
      {todaysHabits && todaysHabits.length === 0 && (
        <EmptyMessage>
          Você não tem hábitos para hoje. Vá para a página de hábitos para criar alguns!
        </EmptyMessage>
      )}
      
      {todaysHabits && todaysHabits.length > 0 && (
        <TodayHabitsContainer>
          {todaysHabits.map((habit) => (
            <HabitTodayCard key={habit.id}>
              <h3>{habit.name}</h3>
              <p>Sequência atual: {habit.currentSequence} dias</p>
              <p>Seu recorde: {habit.highestSequence} dias</p>
              <CheckButton 
                done={habit.done}
                onClick={() => handleToggleHabit(habit.id, habit.done)}
              >
                ✓
              </CheckButton>
            </HabitTodayCard>
          ))}
        </TodayHabitsContainer>
      )}
      
      <Footer />
    </PageContainer>
  );
};

export default Today;
