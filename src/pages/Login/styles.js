import styled from "styled-components";
export const StylesLogin = styled.div`
@media only screen and (max-width: 1024px){
  *{
  display: flex;
  height: 100%;
  flex-direction: column;
  margin: 0 auto;
  }
label{
  text-align:center;
  margin-top: 40px;
}
button{
  margin-top: 40px;
}
a{
  text-decoration:none;
  float: right;
  color: black;
  padding-top: 10px;
}
}
@media only screen and (min-width: 768px)
{
*{
  display: flex;
  height: 100%;
  flex-direction: column;
  margin: 0 auto;
  }
  label{
  padding-top:50px;
  padding-left: 620px;
  float: center;
  }
  button{
  margin-top: 40px;
  text-align: center;
  }
  a{
  text-decoration:none;
  float: right;
  color: black;
  padding-top: 10px;
  }
  }`