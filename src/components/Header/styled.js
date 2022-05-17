import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #000000;
  padding: 20px 20px 0px 20px;
  height: 100px;
  align-content: center;
  display: flex;
  justify-content: center;

  a {
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 16pt;
    margin: 15px 25px 0 0;
    transition: all 400ms;
    height: 20px;
  }
  a:hover {
    color: #5e74ff;
  }
  .user {
    justify-content: center;
    display: flex;
    margin-left: auto;
  }
  h1 {
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 30pt;
    margin: 5px 25px 0 20px;
  }
`;
