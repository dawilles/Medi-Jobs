import React from 'react';
import { useFormik } from 'formik';
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
  onReset: (resetForm: () => void) => void;
};

export const AdvancedSearchBar = ({
  onSearch,
  onReset,
}: AdvancedSearchProps) => {
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


  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={2} mt={10} sx={{ padding: '1rem' }}>
        <TextField
          label="Nazwa"
          variant="outlined"
          fullWidth
          {...formik.getFieldProps('keyword')}
        />

        <TextField
          label="Lokalizacja"
          variant="outlined"
          fullWidth
          {...formik.getFieldProps('location')}
        />

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

        <FormControl variant="outlined" fullWidth>
          <InputLabel>Kategoria</InputLabel>
          <Select label="Kategoria" {...formik.getFieldProps('categoryKey')}>
            {uniqueCategories.map((category) => (
              <MenuItem key={category.key} value={category.key}>
                {category.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Wynagrodzenie od"
          variant="outlined"
          fullWidth
          type="number"
          {...formik.getFieldProps('salaryFrom')}
        />

        <TextField
          label="Wynagrodzenie do"
          variant="outlined"
          fullWidth
          type="number"
          {...formik.getFieldProps('salaryTo')}
        />

        <Stack mt={2} spacing={2}>
          <Button variant="contained" type="submit">
            Szukaj
          </Button>
          <Button variant="contained" onClick={() => onReset(formik.resetForm)}>
            Resetuj
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};
