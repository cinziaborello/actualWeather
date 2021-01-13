import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppGrid from './controllerComponents/AppGrid';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00bcd4'
    },
    secondary: {
      main: '#ff9100'
    }
  }
});

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <AppGrid />
  </ThemeProvider>
);

export default App;
