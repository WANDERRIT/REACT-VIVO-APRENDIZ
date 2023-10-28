import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: #556ff5;
`;

export const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    padding: 10px; 
  }
`;

export const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      padding: 10px;
      a:any-link {
        color: #fff;
        text-decoration: none;
        padding: 8px;
        &:hover{
          background: #fff;
            color: #07076E;
            cursor: pointer;
            transition: 350ms;
            border-radius: 5px;
      }
      }
      button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        i{
          font-size: 2rem;
          color: #fff;
        }
      }
    }
  }
`;
