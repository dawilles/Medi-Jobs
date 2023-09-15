import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Grid, Stack, Typography } from '@mui/material';

import { Header } from '@/components/common/Header';
import { JobBanner } from '@/modules/job/components/JobBanner';
import { AdvancedSearchBar } from '@/modules/job/components/AdvancedSearchBar';
import { useLoadableData } from '@/hooks/useLoadableData';
import { filterJobs } from '@/utils/filterJobs';

import { jobAds } from '@/dataJobs';
import { JobAd, QueryParams } from '@/types';

const loadJobs = async (): Promise<JobAd[]> => {
  // TODO: Fetch jobs from API
  return jobAds;
};

const Search = () => {
  const { state: loadableState, reload } = useLoadableData(loadJobs, []);
  const { query, push } = useRouter();
  const searchParams: QueryParams = {
    keyword: query.keyword as string,
    categoryKey: query.categoryKey as string,
    location: query.location as string,
    contractType: query.contractType as string,
    salaryFrom: Number(query.salaryFrom),
    salaryTo: Number(query.salaryTo),
  };

  useEffect(() => {
    reload();
  }, [query]);

  const handleAdvancedSearch = (params: QueryParams) => {
    push({
      pathname: '/search',
      query: params,
    });
  };

  const content = (() => {
    switch (loadableState.type) {
      case 'loading':
        return <Typography variant="h5">Loading...</Typography>;
      case 'error':
        return (
          <Typography variant="h5">
            Error: {loadableState.error?.message}
          </Typography>
        );
      case 'loaded':
        const filteredJobs = filterJobs(loadableState.data, searchParams);
        if (filteredJobs.length === 0) {
          return <Typography variant="h5">Brak dopasowanych ofert.</Typography>;
        } else {
          return filteredJobs.map((job) => (
            <Stack key={job.id} p={3}>
              <JobBanner job={job} />
            </Stack>
          ));
        }
      default:
        return null;
    }
  })();

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <AdvancedSearchBar onSearch={handleAdvancedSearch} />
        </Grid>
        <Grid item xs={12} sm={8} md={9} mt={8}>
          {content}
        </Grid>
      </Grid>
    </>
  );
};

export default Search;
