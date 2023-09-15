// still working on mobile 
import { Container, Stack, Typography, Link } from '@mui/material';

export const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundColor: 'primary.main',
        color: '#fff',
        padding: '2rem 0',
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}
      direction="row"
      spacing={5}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 1, md: 2 }}
        >
          <Stack spacing={2} maxWidth={{ xs: '50%', md: '33.33%' }}>
            <Typography variant="h6">O nas</Typography>
            <Typography>
              Jesteśmy platformą do wyszukiwania pracy, która pomaga znaleźć
              wymarzoną pracę.
            </Typography>
          </Stack>
          <Stack spacing={2} maxWidth={{ xs: '100%', md: '33.33%' }}>
            <Typography variant="h6">Kontakt</Typography>
            <Typography>Email: info@jobsearch.com</Typography>
            <Typography>Telefon: +48 123 456 789</Typography>
          </Stack>
          <Stack spacing={2} maxWidth={{ xs: '100%', md: '33.33%' }}>
            <Typography variant="h6">Przydatne linki</Typography>
            <Stack direction="column" spacing={1}>
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
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
