import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AppGrid from './controllerComponents/AppGrid';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00bcd4',
    },
    secondary: {
      main: '#ffc400',
    },
  },
});

const App: React.FC = () => (
  <div>
    <ThemeProvider theme={theme}>
      <AppGrid />
    </ThemeProvider>
  </div>
);

export default App;
