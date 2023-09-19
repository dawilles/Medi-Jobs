import { useLoadableData } from '@/hooks/useLoadableData';
import { JobAd, QueryParams } from '@/types';
import { filterJobs } from '@/utils/filterJobs';
import { Stack, Typography } from '@mui/material';
import { JobBanner } from './JobBanner';
import { jobAds } from '@/dataJobs';

const loadJobs = async (): Promise<JobAd[]> => {
  // TODO: Fetch jobs from API
  return jobAds;
};
export const Loader = ({ searchParams }: { searchParams: QueryParams }) => {
  const { state: loadableState } = useLoadableData(loadJobs, []);

  switch (loadableState.type) {
    case 'loading':
      return;
      <Stack m={5}>
        <Typography variant="h5">Loading...</Typography>
      </Stack>;
    case 'error':
      return (
        <Stack m={5}>
          <Typography variant="h5">
            Error: {loadableState.error?.message}
          </Typography>
        </Stack>
      );
    case 'loaded':
      const filteredJobs = filterJobs(loadableState.data, searchParams);
      return filteredJobs.length === 0 ? (
        <Stack m={5}>
          <Typography variant="h5">Brak dopasowanych ofert.</Typography>
        </Stack>
      ) : (
        filteredJobs.map((job) => (
          <Stack key={job.id} p={3}>
            <JobBanner job={job} />
          </Stack>
        ))
      );
    default:
      return null;
  }
};
