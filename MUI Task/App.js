import './App.css';
import BasicButtons from './BasicButtons';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      }
    },
  });
  return (
    <div className="App" style={{margin : "200px"}}>
      <ThemeProvider theme={theme}>
      <BasicButtons ></BasicButtons>
      </ThemeProvider>
  
    </div>
  );
}

export default App;
