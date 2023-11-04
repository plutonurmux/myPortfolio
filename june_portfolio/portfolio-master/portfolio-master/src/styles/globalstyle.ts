import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior:smooth;
}
body {
  margin:0;
  font-family:"Montserrat","sans-serif";
  font-weight:400;
  line-height:1.5;
  background-color:#4F5257; // theme secondary light
  color:#FFF;
}

* {
  box-sizing: border-box;
  margin:0;
  scroll-margin-top: 100px;
}
h1 {
  font-weight:700;
  line-height:1.2;
}
h2 {
  font-weight:700;
  line-height:1.2;
}
h3 {
  font-weight:500;
  line-height:1.2;
}
h6 {
  font-weight:500;
  line-height:1.2;
}
a {
  text-decoration: none;
  font-family: "Montserrat", "sans-serif";
  font-weight: 500;
}
p {
  font-size:1rem;
  font-family: "Montserrat", "sans-serif";
  font-weight:400;
  line-height:1.5;
}

`