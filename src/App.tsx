import { Container, CssBaseline, Grid, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './plugins/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false}>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          sx={{ height: '100vh', border: '1px solid #9eff49' }}
        >
          <Grid item container maxWidth='70vw'>
            <Grid
              item
              xs={6}
              sx={{
                border: '1px solid grey',
                height: 600,
                backgroundColor: '#d6fff9',
              }}
            >
              <Typography variant='h2'>Welcome To</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                border: '1px solid grey',
                height: 600,
                backgroundColor: 'primary.main',
              }}
            >
              <Typography variant='h2'>MUI and React Setup</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;