import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Abel|Manjari&display=swap"  );
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font: 14px 'Abel', sans-serif;
}
html, body, #root {
  height: 100%;
}
button {
  background: #01A9DB;
}
@media (max-width: 700px) {
  button {
    width: 2px;
  }
}

`;