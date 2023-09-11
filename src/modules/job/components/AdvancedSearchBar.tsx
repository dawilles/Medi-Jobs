import React from 'react';
import { useFormik } from 'formik';
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { jobAds } from '@/dataJobs';

type AdvancedSearchProps = {
  onSearch: (params: any) => void;
};

const uniqueCategories = Array.from(
  new Set(jobAds.map((ad) => ad.categoryKey)),
).map((key) => {
  return {
    key: key,
    label: jobAds.find((ad) => ad.categoryKey === key)?.categoryLabel,
  };
});

export const AdvancedSearchBar = ({ onSearch }: AdvancedSearchProps) => {
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      keyword: '',
      location: '',
      contractType: '',
      category: '',
      salaryFrom: '',
      salaryTo: '',
    },
    onSubmit: (values) => {
      onSearch(values);
    },
  });

  return (
    <Box
      sx={{ padding: '1rem', backgroundColor: theme.palette.background.paper }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Nazwa"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps('keyword')}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Lokalizacja"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps('location')}
          />
        </Box>
        <Box mb={2}>
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
        </Box>
        <Box mb={2}>
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
        </Box>

        <Box mb={2}>
          <TextField
            label="Wynagrodzenie od"
            variant="outlined"
            fullWidth
            type="number"
            {...formik.getFieldProps('salaryFrom')}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Wynagrodzenie do"
            variant="outlined"
            fullWidth
            type="number"
            {...formik.getFieldProps('salaryTo')}
          />
        </Box>
        <Box mt={2}>
          <Button variant="contained" color="primary" type="submit">
            Szukaj
          </Button>
        </Box>
      </form>
    </Box>
  );
};
