import React from 'react';
import GlobalStyles from './styles/global';
import Routes from './routes'
import Login from './pages/Login';
function App() {
  return (
    <>
      <Routes>
        <Login />
      </Routes>
      <GlobalStyles />
    </>
  );
}
export default App;
