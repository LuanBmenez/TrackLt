import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Styles/Global";
import Login from "./page/Login";
import Register from "./page/Register";
import Habit from "./page/Habits"; 


const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/habit" element={<Habit />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
