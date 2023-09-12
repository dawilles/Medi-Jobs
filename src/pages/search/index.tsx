import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Grid, Stack } from '@mui/material';

import { Header } from '@/components/common/Header';
import { JobBanner } from '@/modules/job/components/JobBanner';
import { AdvancedSearchBar } from '@/modules/job/components/AdvancedSearchBar';
import { useLoadableData } from '@/hooks/useLoadableData';
import { filterJobs } from '@/utils/filterJobs';
import { jobAds } from '@/dataJobs';
import { JobAd, JobsContentProps } from '@/types';

const loadJobs = async (): Promise<JobAd[]> => {
  // TODO: Fetch jobs from API
  return jobAds;
};

const JobsContent = ({ loadableState, filteredJobs }: JobsContentProps) => {
  switch (loadableState.type) {
    case 'loading':
      return <div>Loading...</div>;
    case 'error':
      return <div>Error: {loadableState.error?.message}</div>;
    case 'loaded':
      return filteredJobs.map((job) => (
        <Stack key={job.id} p={3}>
          <JobBanner job={job} />
        </Stack>
      ));
    default:
      return null;
  }
};

const Search = () => {
  const { query } = useRouter();
  const initialQuery = {
    keyword: query.query as string,
    categoryKey: query.category as string,
  };

  const [searchParams, setSearchParams] = useState(initialQuery);
  const { state: loadableState } = useLoadableData(loadJobs, undefined);

  useEffect(() => {
    setSearchParams({
      ...searchParams,
      ...(query.query && { keyword: query.query as string }),
      ...(query.category && { categoryKey: query.category as string }),
    });
  }, [query]);

  const handleAdvancedSearch = (params: {
    keyword: string;
    categoryKey: string;
  }) => {
    setSearchParams(params);
  };

  const allJobs = loadableState.type === 'loaded' ? loadableState.data : [];
  const filteredJobs = filterJobs(allJobs, searchParams);

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <AdvancedSearchBar onSearch={handleAdvancedSearch} />
        </Grid>
        <Grid item xs={12} sm={8} md={9} mt={8}>
          <JobsContent
            loadableState={loadableState}
            filteredJobs={filteredJobs}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Search;
