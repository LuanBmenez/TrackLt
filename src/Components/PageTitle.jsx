import styled from "styled-components";

const PageTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 17px 20px 17px;
`;

const Title = styled.h2`
  font-family: 'Lexend Deca', sans-serif;
  font-size: 23px;
  color: #126BA5;
  margin: 0;
`;

const AddButton = styled.button`
  width: 40px;
  height: 35px;
  background-color: #52B6FF;
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
  font-size: 27px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #4AA3E6;
  }
`;

const PageTitle = ({ title, onAddClick, showAddButton = false }) => {
  return (
    <PageTitleContainer>
      <Title>{title}</Title>
      {showAddButton && (
        <AddButton onClick={onAddClick}>
          +
        </AddButton>
      )}
    </PageTitleContainer>
  );
};

export default PageTitle;
