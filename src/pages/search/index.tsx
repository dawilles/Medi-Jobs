import React from 'react';
import router, { useRouter } from 'next/router';
import { Grid } from '@mui/material';
import { Header } from '@/components/common/Header';
import { AdvancedSearchBar } from '@/modules/job/components/AdvancedSearchBar';
import { QueryParams } from '@/types';
import { Loader } from '@/modules/job/components/Loader';

const Search = () => {
  const { query, push } = useRouter();
  const searchParams: QueryParams = {
    keyword: query.keyword as string,
    categoryKey: query.categoryKey as string,
    location: query.location as string,
    contractType: query.contractType as string,
    salaryFrom: Number(query.salaryFrom),
    salaryTo: Number(query.salaryTo),
  };

  const handleAdvancedSearch = (params: QueryParams) => {
    push({
      pathname: '/search',
      query: params,
    });
  };
  const handleReset = (resetForm: () => void) => {
    router.push('/search');
    resetForm();
  };

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <AdvancedSearchBar
            onSearch={handleAdvancedSearch}
            onReset={handleReset}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={9} mt={8}>
          <Loader searchParams={searchParams} />
        </Grid>
      </Grid>
    </>
  );
};

export default Search;
