import { filterJobs } from './filterJobs';
import { jobAds } from '@/dataJobs';

test('filter jobs works well', () => {
  expect(filterJobs(jobAds, { keyword: '' })).toEqual([]);
});
