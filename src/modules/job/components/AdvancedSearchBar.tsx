import React from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
} from '@mui/material';
import { uniqueCategories } from '@/utils/uniqueCategories';

type SearchParams = {
  keyword: string;
  location: string;
  contractType: string;
  categoryKey: string;
  salaryFrom: number;
  salaryTo: number;
};

type AdvancedSearchProps = {
  onSearch: (params: SearchParams) => void;
};

export const AdvancedSearchBar = ({ onSearch }: AdvancedSearchProps) => {
  const formik = useFormik<SearchParams>({
    initialValues: {
      keyword: '',
      location: '',
      contractType: '',
      categoryKey: '',
      salaryFrom: 0,
      salaryTo: 0,
    },
    onSubmit: (values) => {
      onSearch(values);
    },
  });

  const router = useRouter();
  const handleReset = () => {
    router.push('/search');
    formik.resetForm();
  };

  return (
    <>
      <Stack mt={9} sx={{ padding: '1rem' }}>
        <form onSubmit={formik.handleSubmit}>
          <Stack mb={2}>
            <TextField
              label="Nazwa"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps('keyword')}
            />
          </Stack>
          <Stack mb={2}>
            <TextField
              label="Lokalizacja"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps('location')}
            />
          </Stack>
          <Stack mb={2}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Typ kontraktu</InputLabel>
              <Select
                label="Typ kontraktu"
                {...formik.getFieldProps('contractType')}
              >
                <MenuItem value="Pełny etat">Pełny etat</MenuItem>
                <MenuItem value="Pół etatu">Pół etatu</MenuItem>
                <MenuItem value="Kontrakt">Kontrakt</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack mb={2}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Kategoria</InputLabel>
              <Select
                label="Kategoria"
                {...formik.getFieldProps('categoryKey')}
              >
                {uniqueCategories.map((category) => (
                  <MenuItem key={category.key} value={category.key}>
                    {category.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>

          <Stack mb={2}>
            <TextField
              label="Wynagrodzenie od"
              variant="outlined"
              fullWidth
              type="number"
              {...formik.getFieldProps('salaryFrom')}
            />
          </Stack>
          <Stack mb={2}>
            <TextField
              label="Wynagrodzenie do"
              variant="outlined"
              fullWidth
              type="number"
              {...formik.getFieldProps('salaryTo')}
            />
          </Stack>
          <Stack mt={2} spacing={2}>
            <Button variant="contained" type="submit">
              Szukaj
            </Button>
            <Button variant="contained" onClick={handleReset}>
              Resetuj
            </Button>
          </Stack>
        </form>
      </Stack>
    </>
  );
};
