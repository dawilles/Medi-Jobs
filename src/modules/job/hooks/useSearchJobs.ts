import { useEffect, useState } from "react";
import { JobAd } from "../../../types";

type QueryParams = {
	keyword?: string;
	location?: string;
	salaryFrom?: number;
	salaryTo?: number;
};

export const useSearchJobs = (
	jobAds: JobAd[],
	query: QueryParams = {},
): JobAd[] => {
	const filterJobs = (job: JobAd): boolean => {
		if (query.keyword && !job.title.includes(query.keyword)) return false;
		if (query.location && job.location !== query.location) return false;
		if (
			query.salaryFrom &&
			(job.salary.from < query.salaryFrom || job.salary.to < query.salaryFrom)
		)
			return false;
		if (
			query.salaryTo &&
			(job.salary.from > query.salaryTo || job.salary.to > query.salaryTo)
		)
			return false;
		return true;
	};

	const fetchSearchResults = (): JobAd[] => {
		return [...jobAds].filter(filterJobs);
	};

	return fetchSearchResults();
};
