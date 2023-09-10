import { JobAd, QueryParams } from '@/types';

export const filterJobs = (
  jobAds: JobAd[],
  query: QueryParams = {},
): JobAd[] => {
  const filterJob = (job: JobAd): boolean => {
    return [
      () =>
        !query.keyword ||
        job.title.toLowerCase().includes(query.keyword.toLowerCase()),
      () =>
        !query.location ||
        job.location.toLowerCase() === query.location.toLowerCase(),
      () => !query.contractType || job.contractType === query.contractType,
      () => !query.categoryKey || job.categoryKey === query.categoryKey,
      () =>
        !query.salaryFrom ||
        (job.salary.from >= query.salaryFrom &&
          job.salary.to >= query.salaryFrom),
      () =>
        !query.salaryTo ||
        (job.salary.from <= query.salaryTo && job.salary.to <= query.salaryTo),
    ].every((test) => test());
  };

  return jobAds.filter(filterJob);
};
