import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useSearchJobs } from "../../modules/job/hooks/useSearchJobs";
import { JobBanner } from "../../modules/job/components/JobBanner";
import type { JobAd } from "@/types";
import { Header } from "@/components/common/Header";
import { Grid } from "@mui/material";
import { jobAds } from "@/dataJobs";
import { AdvancedSearchBar } from "@/modules/job/components/AdvancedSearchBar";

const Search: React.FC = () => {
	const router = useRouter();
	const initialQuery = { keyword: router.query.query as string };
	const [searchParams, setSearchParams] = useState(initialQuery);
	const [searchResults, setSearchResults] = useState<JobAd[]>([]);

	// Aktualizacja wyników wyszukiwania
	useEffect(() => {
		const updatedResults = useSearchJobs(jobAds, searchParams);
		setSearchResults(updatedResults);
	}, [searchParams]);

	const handleAdvancedSearch = (params: any) => {
		setSearchParams(params);
	};

	return (
		<>
			<Header />
			<Grid container spacing={2}>
				<Grid
					item
					xs={false}
					sm={4}
					md={3}
					sx={{ display: { xs: "none", sm: "flex" } }}>
					<AdvancedSearchBar onSearch={handleAdvancedSearch} />
				</Grid>
				<Grid item xs={12} sm={8} md={9}>
					{searchResults.map((job: JobAd) => (
						<Box
							key={job.id}
							p={3}
							sx={{ display: "flex", justifyContent: "center" }}>
							<JobBanner job={job} />
						</Box>
					))}
				</Grid>
			</Grid>
		</>
	);
};
export default Search;
