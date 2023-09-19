import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Header } from '../../components/common/Header';
import { SpecializationsSidebar } from '@/modules/home/components/SpecializationsSidebar';
import { SearchBar } from '@/modules/home/components/SearchBar';
import { JobBanner } from '@/modules/job/components/JobBanner';
import { jobAds } from '../../dataJobs';
import { JobAd } from '../../types';
import { Grid, Stack } from '@mui/material';
import { categories } from '@/modules/home/data/categories';
import { getLatestJobs } from '@/utils/sortingNevestJobs';

export const Home = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [query, setQuery] = useState('');

  const handleSearch = (query: string) => {
    router.push(`/search?keyword=${query}`);
  };

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        {!isMobile && (
          <Grid item xs={12} sm={3} md={2} mt={10}>
            <SpecializationsSidebar categories={categories} />
          </Grid>
        )}
        <Grid item xs={12} sm={9} md={10}>
          <Stack mt={6} direction="row" justifyContent="center" spacing={2}>
            <SearchBar
              onSearch={handleSearch}
              query={query}
              setQuery={setQuery}
            />
          </Stack>
          {getLatestJobs(jobAds, 4).map((job: JobAd) => (
            <Stack key={job.id} p={3} spacing={1} sx={{ minWidth: '24rem' }}>
              <JobBanner job={job} />
            </Stack>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
