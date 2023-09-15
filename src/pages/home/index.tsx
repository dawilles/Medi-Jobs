import React from 'react';
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        {!isMobile && (
          <Grid item xs={12} sm={3} md={2}>
            <SpecializationsSidebar categories={categories} />
          </Grid>
        )}
        <Grid item xs={12} sm={9} md={10}>
          <Stack mt={6} direction="row" justifyContent="center" spacing={2}>
            <SearchBar />
          </Stack>
          {getLatestJobs(jobAds, 4).map((job: JobAd) => (
            <Stack key={job.id} p={3} spacing={2} sx={{ minWidth: '24rem' }}>
              <JobBanner job={job} />
            </Stack>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
