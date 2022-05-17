import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
body {
  background: #ddd;
  font-family: sans-serif;
}
html, border-style, #root {
  height: 100%;
}
button {
  cursor: pointer;
  background-color: ${colors.primaryColor};
  border: none;
  border-radius: 4px;
  color: #fff;
  padding: 10px 20px;
  font-weight: 700;
  transition: all 300ms;
}
button:hover {
  filter: brightness(120%);
}
a {
  text-decoration: none;
  color: ${colors.primaryColor};
}
`;

export const Container = styled.section`
  background: white;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
