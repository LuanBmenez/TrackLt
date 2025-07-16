import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Styles/Global";
import Login from "./page/Login";
import Register from "./page/Register";
import Habits from "./page/Habits";
import Today from "./page/Today";
import { APIProvider } from "./context/APIContext";


const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const App = () => {
  return (
    <APIProvider>
      <BrowserRouter> 
        <GlobalStyle />
        <AppContainer>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/habits" element={<Habits />} /> 
            <Route path="/today" element={<Today />} />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </APIProvider>
  );
};

export default App;
