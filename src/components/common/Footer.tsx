// still on work
import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: '#fff',
        padding: '2rem 0',
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Link
                href="#"
                sx={{
                  color: '#fff',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Polityka prywatności
              </Link>
              <Link
                href="#"
                sx={{
                  color: '#fff',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Warunki korzystania
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
