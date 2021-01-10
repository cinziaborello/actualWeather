import React from 'react';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppGrid from './controllerComponents/AppGrid';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00bcd4'
    },
    secondary: {
      main: '#ff6640'
    }
  }
});

const StyledBox = withStyles({
    root: {
      background: '#e0f7fa',
      height: '100vh'
    }
  })(Box);

const App: React.FC = () => (
  <Box>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <StyledBox>
        <AppGrid />
      </StyledBox>
    </ThemeProvider>
  </Box>
);

export default App;
