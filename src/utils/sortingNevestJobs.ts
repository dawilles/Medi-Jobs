import { JobAd } from '../types';

const sortByDateAdded = (a: JobAd, b: JobAd) =>
  new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();

export const getLatestJobs = (jobAds: JobAd[], limit: number = 3): JobAd[] => {
  const sortedJobAds = [...jobAds].sort(sortByDateAdded);
  return sortedJobAds.slice(0, limit);
};
