import { jobAds } from '@/dataJobs';

export type Category = {
  key: string;
  label: string;
};

export const uniqueCategories: Category[] = Array.from(
  new Set(jobAds.map((ad) => ad.categoryKey)),
).map((key) => {
  const foundAd = jobAds.find((ad) => ad.categoryKey === key);
  const label = foundAd?.categoryLabel || 'No label: ' + key;

  return {
    key: key,
    label: label,
  };
});
