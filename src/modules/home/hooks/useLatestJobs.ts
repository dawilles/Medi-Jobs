import { useEffect, useState } from "react";
import { JobAd } from "../../../types"; // Importing types from a separate file

/**
 * Custom hook to fetch the latest job ads based on the date added.
 *
 * @param jobAds - The array of job ads to sort and filter.
 * @param limit - The maximum number of latest job ads to return.
 * @returns - The latest job ads up to the specified limit.
 */
export const useLatestJobs = (jobAds: JobAd[], limit: number = 5): JobAd[] => {
	const [latestJobs, setLatestJobs] = useState<JobAd[]>([]);

	useEffect(() => {
		const sortByDateAdded = (a: JobAd, b: JobAd) =>
			new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
		const fetchLatestJobs = (): JobAd[] => {
			const sortedJobAds = [...jobAds].sort(sortByDateAdded);
			return sortedJobAds.slice(0, limit);
		};
		setLatestJobs(fetchLatestJobs());
	}, [jobAds, limit]);

	return latestJobs;
};
