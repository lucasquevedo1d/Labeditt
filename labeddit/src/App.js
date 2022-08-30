import './App.css';
import Router from './pages/routes/Router'
import { ThemeProvider } from '@material-ui/core';
import theme from './constants/Theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
     <Router/>
    </ThemeProvider>
  );
}

export default App;
