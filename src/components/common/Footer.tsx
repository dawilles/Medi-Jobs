import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material';

const styles = {
  footer: {
    backgroundColor: 'primary.main',
    color: '#fff',
    padding: '2rem 0',
    width: '100%',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

export const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">O nas</Typography>
            <Typography>
              Jesteśmy platformą do wyszukiwania pracy, która pomaga znaleźć
              wymarzoną pracę.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Kontakt</Typography>
            <Typography>Email: info@jobsearch.com</Typography>
            <Typography>Telefon: +48 123 456 789</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Przydatne linki</Typography>
            <Stack spacing={0} direction="column">
              <Link href="#" sx={styles.link}>
                Polityka prywatności
              </Link>
              <Link href="#" sx={styles.link}>
                Warunki korzystania
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
