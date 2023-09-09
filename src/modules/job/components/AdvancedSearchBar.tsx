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

type AdvancedSearchProps = {
  onSearch: (params: any) => void;
};

export const AdvancedSearchBar: React.FC<AdvancedSearchProps> = ({
  onSearch,
}) => {
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      keyword: '',
      location: '',
      contractType: '',
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
              label="Type of Contract"
              {...formik.getFieldProps('contractType')}
            >
              <MenuItem value="Pełny etat">Pełny etat</MenuItem>
              <MenuItem value="Pół etatu">Pół etatu</MenuItem>
              <MenuItem value="Kontrakt">Kontrakt</MenuItem>
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
