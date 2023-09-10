import { filterJobs } from './filterJobs';
import { jobAds } from '@/dataJobs';

test('filter jobs works well', () => {
  console.log(filterJobs(jobAds, { keyword: 'aaaaaa' }));
  expect(filterJobs(jobAds, { keyword: '' })).toEqual([]);
});
test('filter jobs works well', () => {
  console.log(filterJobs(jobAds, { keyword: 'aaaaaa' }));
  expect(filterJobs(jobAds, { keyword: '' })).toEqual([]);
});
