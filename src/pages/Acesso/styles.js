import styled from 'styled-components';
export const StylesAcesso = styled.div`
@media only screen and (max-width: 1024px){
  *{
  display:flex;
  margin: 0 auto;
  height:100%;
}
h1{
  font-size: 40px;
}
label{
  justify-content:center;
}
button{
  margin-top: 40px;
}
a{
  text-decoration:none;
  float: right;
  color: black;
  padding-top: 380px;
  padding-right:10px;
}
}
@media only screen and (min-width: 768px){
    *{
  display:flex;
  margin: 0 auto;
}
h1{
  font-size: 40px;
}
label{
  justify-content:center;
}
button{
  margin-top: 40px;
}
a{
  text-decoration:none;
  float: right;
  color: black;
  padding-top: 380px;
  padding-right:10px;
}
}
`