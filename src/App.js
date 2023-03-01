import logo from './logo.svg';
import { MyRouter } from './router/MyRouter';
import applicationTheme from './theme/applicationTheme';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HashRouter, useNavigate } from 'react-router-dom';

function App() {
  const muiTheme = createTheme(applicationTheme('purpleRedTheme', 'dark'));
  return (
    <div className="App">
      <ThemeProvider theme={muiTheme}>
        <HashRouter>
          <MyRouter />
        </HashRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
