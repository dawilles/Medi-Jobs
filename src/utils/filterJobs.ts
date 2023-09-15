import { JobAd, QueryParams } from '@/types';

export const filterJobs = (jobAds: JobAd[], query: QueryParams): JobAd[] => {
  const filters = buildFilters(query);

  const filterJob = (job: JobAd): boolean => {
    return filters.every((filterFunc) => filterFunc(job));
  };

  const filtered = jobAds.filter(filterJob);
  return filtered;
};

const buildFilters = (query: QueryParams) => [
  (job: JobAd) => filterByKeyword(job, query.keyword),
  (job: JobAd) => filterByLocation(job, query.location),
  (job: JobAd) => filterByContractType(job, query.contractType),
  (job: JobAd) => filterByCategoryKey(job, query.categoryKey),
  (job: JobAd) => filterBySalaryFrom(job, query.salaryFrom),
  (job: JobAd) => filterBySalaryTo(job, query.salaryTo),
];

const filterByKeyword = (job: JobAd, keyword?: string): boolean => {
  if (!keyword) return true;
  return job.title.toLowerCase().includes(keyword.toLowerCase());
};

const filterByLocation = (job: JobAd, location?: string): boolean => {
  if (!location) return true;
  return job.location.toLowerCase() === location.toLowerCase();
};

const filterByContractType = (job: JobAd, contractType?: string): boolean => {
  if (!contractType) return true;
  return job.contractType === contractType;
};

const filterByCategoryKey = (job: JobAd, categoryKey?: string): boolean => {
  if (!categoryKey) return true;
  return job.categoryKey === categoryKey;
};

const filterBySalaryFrom = (job: JobAd, salaryFrom?: number): boolean => {
  if (!salaryFrom) return true;
  return job.salary.from >= salaryFrom && job.salary.to >= salaryFrom;
};

const filterBySalaryTo = (job: JobAd, salaryTo?: number): boolean => {
  if (!salaryTo) return true;
  return job.salary.from <= salaryTo && job.salary.to <= salaryTo;
};
