import { jobAds } from '@/dataJobs';
import type { JobAd } from '@/types';
import { JobCard } from '@/components/job-components/JobCard';
import { GetStaticPropsContext } from 'next';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';

const JobPage = ({ job }: { job: JobAd }) => {
  return (
    <>
      <Header />
      <JobCard job={job} />
      <Footer />
    </>
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
