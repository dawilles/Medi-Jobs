import { TextField, Button, Typography, Stack } from '@mui/material';

export const SearchBar = ({
  onSearch,
  query,
  setQuery,
}: {
  onSearch: (query: string) => void;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Typography
          variant="h2"
          component="h3"
          textAlign="center"
          sx={{ padding: '2rem' }}
        >
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
      </Stack>
    </>
  );
};
