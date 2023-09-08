import { useRouter } from 'next/router';
import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

export const SearchBar: React.FC = () => {
  const router = useRouter();

  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?query=${query}`);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '1rem',
        }}
      >
        <Typography variant="h2" component="h3" sx={{ padding: '1rem' }}>
          Znajdź swoją wymarzoną pracę właśnie dziś!
        </Typography>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
          <TextField
            label="Szukaj"
            variant="outlined"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ flex: 1 }}
          />
          <Button variant="contained" color="secondary" type="submit">
            Szukaj
          </Button>
        </form>
      </Box>
    </>
  );
};
