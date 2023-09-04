import React from "react";
import { Header } from "../../components/common/Header";
import { SpecializationsSidebar } from "@/modules/home/components/SpecializationsSidebar";
import { SearchBar } from "@/modules/home/components/SearchBar";
import { JobBanner } from "@/modules/job/components/JobBanner";
import { useLatestJobs } from "@/modules/home/hooks/useLatestJobs";
import { jobAds } from "../../dataJobs";
import { JobAd } from "../../types";

import { Grid, Box } from "@mui/material";

export const Home: React.FC = () => {
	const latestJobs = useLatestJobs(jobAds, 3);
	return (
		<>
			<Header />

			<Grid container spacing={2}>
				<Grid
					item
					xs={false}
					sm={3}
					md={3}
					sx={{
						display: { xs: "none", sm: "flex" },
					}}>
					<SpecializationsSidebar />
				</Grid>
				<Grid item xs={12} sm={9} md={9}>
					<Box
						mt={6}
						sx={{
							display: "flex",
							justifyContent: "center",
						}}>
						<SearchBar />
					</Box>
					{latestJobs.map((job: JobAd) => (
						<Box key={job.id} p={3}>
							<JobBanner job={job} />
						</Box>
					))}
				</Grid>
			</Grid>
		</>
	);
};
