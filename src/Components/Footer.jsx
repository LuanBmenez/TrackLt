import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
  width: 100%;
  height: 70px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;

const FooterButton = styled.button`
  flex: 1;
  height: 100%;
  border: none;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 18px;
  color: ${props => props.$active ? '#FFFFFF' : '#AFAFAF'};
  background-color: ${props => props.$active ? '#52B6FF' : 'transparent'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: ${props => props.$active ? '#4AA3E6' : '#F0F0F0'};
  }

  svg {
    font-size: 16px;
  }
`;

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <FooterContainer>
      <FooterButton 
        $active={location.pathname === '/habits'} 
        onClick={() => handleNavigation('/habits')}
      >
        <FontAwesomeIcon icon={faCalendarDays} /> Hábitos
      </FooterButton>
      
      <FooterButton 
        $active={location.pathname === '/today'} 
        onClick={() => handleNavigation('/today')}
      >
        <FontAwesomeIcon icon={faCalendarCheck} />Hoje
      </FooterButton>
    </FooterContainer>
  );
};

export default Footer;
