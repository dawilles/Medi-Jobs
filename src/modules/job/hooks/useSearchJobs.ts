import { JobAd, QueryParams } from '@/types';

export const useSearchJobs = (
  jobAds: JobAd[],
  query: QueryParams = {},
): JobAd[] => {
  const filterJobs = (job: JobAd): boolean => {
    return [
      () =>
        !query.keyword ||
        job.title.toLowerCase().includes(query.keyword.toLowerCase()),
      () =>
        !query.location ||
        job.location.toLowerCase() === query.location.toLowerCase(),
      () => !query.contractType || job.contractType === query.contractType,
      () =>
        !query.salaryFrom ||
        (job.salary.from >= query.salaryFrom &&
          job.salary.to >= query.salaryFrom),
      () =>
        !query.salaryTo ||
        (job.salary.from <= query.salaryTo && job.salary.to <= query.salaryTo),
    ].every((test) => test());
  };

  return jobAds.filter(filterJobs);
};
