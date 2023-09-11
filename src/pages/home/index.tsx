import React from 'react';
import { Header } from '../../components/common/Header';
import { SpecializationsSidebar } from '@/modules/home/components/SpecializationsSidebar';
import { SearchBar } from '@/modules/home/components/SearchBar';
import { JobBanner } from '@/modules/job/components/JobBanner';
import { jobAds } from '../../dataJobs';
import { JobAd } from '../../types';
import { Grid, Box } from '@mui/material';
import { categories } from '@/modules/home/data/categories';
import { getLatestJobs } from '@/utils/sortingNevestJobs';

export const Home = () => {
  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid
          item
          xs={false}
          sm={3}
          md={2}
          sx={{
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          <SpecializationsSidebar categories={categories} />
        </Grid>
        <Grid item xs={12} sm={9} md={10}>
          <Box
            mt={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <SearchBar />
          </Box>
          {getLatestJobs(jobAds).map((job: JobAd) => (
            <Box key={job.id} p={3} mr={4} ml={4} sx={{ minWidth: '28rem' }}>
              <JobBanner job={job} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
