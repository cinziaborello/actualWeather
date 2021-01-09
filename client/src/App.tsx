import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
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
  <Box>
    <ThemeProvider theme={theme}>
      <Box bgcolor="#f0f0f0">
        <AppGrid />
      </Box>
    </ThemeProvider>
  </Box>
);

export default App;
