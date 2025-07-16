import styled from "styled-components";
import logoImage from "../assets/Group 8.png";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

const LogoImage = styled.img`
  width: auto;
  height: 180px;
`;


const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src={logoImage} alt="TrackIt Logo" />
    </LogoContainer>
  );
};

export default Logo;
