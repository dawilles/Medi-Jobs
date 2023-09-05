//Still on progress with the search page, i plan to do some separate logic there
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Grid } from "@mui/material";
import { Header } from "@/components/common/Header";
import { JobBanner } from "@/modules/job/components/JobBanner";
import { jobAds } from "@/dataJobs";
import { AdvancedSearchBar } from "@/modules/job/components/AdvancedSearchBar";
import { useLoadableData } from "@/hooks/useLoadableData";
import { useSearchJobs } from "@/modules/job/hooks/useSearchJobs";

const loadJobs = async () => {
	// TODO: Fetch jobs from API
	return jobAds;
};

const Search: React.FC = () => {
	const router = useRouter();
	const initialQuery = { keyword: router.query.query as string };
	const [searchParams, setSearchParams] = useState(initialQuery);
	console.log(router.query.query);
	const { state: loadableState, reload } = useLoadableData(loadJobs, {});
	const allJobs = loadableState.type === "loaded" ? loadableState.data : [];
	console.log(loadableState);
	const filteredJobs = useSearchJobs(allJobs, searchParams);
	console.log(filteredJobs);
	useEffect(() => {
		if (router.query.query) {
			setSearchParams({ keyword: router.query.query as string });
		}
	}, [router.query.query]);

	const handleAdvancedSearch = (params: any) => {
		setSearchParams(params);
	};

	const renderContent = () => {
		switch (loadableState.type) {
			case "loading":
				return <div>Loading...</div>;
			case "error":
				return <div>Error: {loadableState.error.message}</div>;
			case "loaded":
				return filteredJobs.map((job) => (
					<Box key={job.id} p={3}>
						<JobBanner job={job} />
					</Box>
				));
			default:
				return null;
		}
	};

	return (
		<>
			<Header />
			<Grid container spacing={2}>
				<Grid item xs={false} sm={4} md={3}>
					<AdvancedSearchBar onSearch={handleAdvancedSearch} />
				</Grid>
				<Grid item xs={12} sm={8} md={9}>
					{renderContent()}
				</Grid>
			</Grid>
		</>
	);
};

export default Search;
