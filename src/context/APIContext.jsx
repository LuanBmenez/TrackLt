import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const APIContext = createContext();

export const useAPI = () => {
  const context = useContext(APIContext);
  
  return context;
};

export const APIProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [habits, setHabits] = useState([]);
  const [todaysHabits, setTodaysHabits] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_BASE = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

  const getHeaders = () => ({
    Authorization: `Bearer ${token}`
  });

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE}/auth/login`, {
        email,
        password
      });
      
      const { token: newToken, image, name } = response.data;
      
      setToken(newToken);
      setUser({ image, name, email });
      localStorage.setItem("token", newToken);
      
      return { success: true };
    } catch (error) {
      console.error("Erro no login:", error);
      return { 
        success: false, 
        message: error.response?.data?.message || "Erro ao fazer login" 
      };
    } finally {
      setLoading(false);
    }
  };


  const register = async (email, password, name, image) => {
    setLoading(true);
    try {
      await axios.post(`${API_BASE}/auth/sign-up`, {
        email,
        password,
        name,
        image
      });
      
      return { success: true };
    } catch (error) {
      console.error("Erro no registro:", error);
      return { 
        success: false, 
        message: error.response?.data?.message || "Erro ao registrar" 
      };
    } finally {
      setLoading(false);
    }
  };


  const logout = () => {
    setToken(null);
    setUser(null);
    setHabits([]);
    setTodaysHabits([]);
    localStorage.removeItem("token");
  };

  // Criar hábito
  const createHabit = async (name, days) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE}/habits`, {
        name,
        days
      }, {
        headers: getHeaders()
      });
      
      setHabits([...habits, response.data]);
      return { success: true };
    } catch (error) {
      console.error("Erro ao criar hábito:", error);
      if (error.response?.status === 401) {
        logout();
      }
      return { 
        success: false, 
        message: "Erro ao criar hábito" 
      };
    } finally {
      setLoading(false);
    }
  };


  const deleteHabit = async (habitId) => {
    try {
      await axios.delete(`${API_BASE}/habits/${habitId}`, {
        headers: getHeaders()
      });
      
      setHabits(habits.filter(habit => habit.id !== habitId));
      return { success: true };
    } catch (error) {
      console.error("Erro ao deletar hábito:", error);
      if (error.response?.status === 401) {
        logout();
      }
      return { 
        success: false, 
        message: "Erro ao deletar hábito" 
      };
    }
  };

 
  const fetchTodaysHabits = async () => {
    if (!token) return;
    
    try {
      const response = await axios.get(`${API_BASE}/habits/today`, {
        headers: getHeaders()
      });
      setTodaysHabits(response.data);
    } catch (error) {
      console.error("Erro ao buscar hábitos de hoje:", error);
      if (error.response?.status === 401) {
        logout();
      }
    }
  };


  const toggleHabit = async (habitId, currentStatus) => {
    try {
      if (currentStatus) {
        // Se está marcado, desmarcar
        await axios.post(`${API_BASE}/habits/${habitId}/uncheck`, {}, {
          headers: getHeaders()
        });
      } else {
        // Se não está marcado, marcar
        await axios.post(`${API_BASE}/habits/${habitId}/check`, {}, {
          headers: getHeaders()
        });
      }
      
      // Atualizar lista de hábitos de hoje
      fetchTodaysHabits();
      return { success: true };
    } catch (error) {
      console.error("Erro ao marcar/desmarcar hábito:", error);
      if (error.response?.status === 401) {
        logout();
      } else if (error.response?.status === 400) {
        return { 
          success: false, 
          message: "Não é possível marcar este hábito agora" 
        };
      }
      return { 
        success: false, 
        message: "Erro ao atualizar hábito" 
      };
    }
  };

  // Carregar dados iniciais quando há token
  useEffect(() => {
    const loadInitialData = async () => {
      if (!token) return;
      
      const headers = { Authorization: `Bearer ${token}` };
      
      try {
        // Buscar hábitos
        const habitsResponse = await axios.get(`${API_BASE}/habits`, { headers });
        setHabits(habitsResponse.data);

        // Buscar hábitos de hoje
        const todayResponse = await axios.get(`${API_BASE}/habits/today`, { headers });
        setTodaysHabits(todayResponse.data);
      } catch (error) {
        console.error("Erro ao carregar dados iniciais:", error);
        if (error.response?.status === 401) {
          setToken(null);
          setUser(null);
          setHabits([]);
          setTodaysHabits([]);
          localStorage.removeItem("token");
        }
      }
    };

    loadInitialData();
  }, [token]);

 
  const value = {
    // Estados
    user,
    habits,
    todaysHabits,
    loading,
    
    // Funções de autenticação
    login,
    register,
    logout,
    
    // Funções de hábitos
    createHabit,
    deleteHabit,
    
    // Funções de hoje
    fetchTodaysHabits,
    toggleHabit,
    
    // Utilitários
    isAuthenticated: !!token
  };

  return (
    <APIContext.Provider value={value}>
      {children}
    </APIContext.Provider>
  );
};
