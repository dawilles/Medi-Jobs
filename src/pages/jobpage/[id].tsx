import { jobAds } from '@/dataJobs';
import type { JobAd } from '@/types';
import { JobCard } from '@/components/job-components/JobCard';
import { GetStaticPropsContext } from 'next';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Box, Stack } from '@mui/material';

const JobPage = ({ job }: { job: JobAd }) => {
  return (
    <Stack direction="column" spacing={3} sx={{ minHeight: '100vh' }}>
      <Header />
      <Box sx={{ flex: 1 }}>
        <JobCard job={job} />
      </Box>
      <Footer />
    </Stack>
  );
};

export async function getStaticPaths() {
  const paths = jobAds.map((job) => ({
    params: { id: job.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.id;

  if (!id) {
    return { notFound: true };
  }

  const job = jobAds.find((job) => job.id === Number(id));

  if (!job) {
    return { notFound: true };
  }

  return { props: { job } };
}

export default JobPage;
