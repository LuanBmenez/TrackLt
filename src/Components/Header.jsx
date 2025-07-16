import styled from "styled-components";
import { useAPI } from "../context/APIContext";

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background-color: #126BA5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const Logo = styled.h1`
  font-family: 'Playball', cursive;
  font-size: 38px;
  color: #FFFFFF;
  margin: 0;
`;

const UserImage = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  object-fit: cover;
`;

const Header = () => {
  const { user } = useAPI();
  console.log("User in Header:", user);  
  return (
    <HeaderContainer>
      <Logo>TrackIt</Logo>
      {user?.image ? (
        <UserImage src={user.image} alt="User Profile" />
      ):(
        <UserImage src={'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg'} alt="User Profile" />
      )}
    </HeaderContainer>
  );
};

export default Header;
