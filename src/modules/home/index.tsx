import React from "react";
import { Navbar } from "../../components/common/Navbar";
import { SpecializationsSidebar } from "./components/SpecializationsSidebar";
import { SearchBar } from "./components/SearchBar";
import { JobBanner } from "../job/components/JobBanner";
import { useLatestJobs } from "./hooks/useLatestJobs";
import { jobAds } from "../../dataJobs";
import { JobAd } from "../../types";

import { Grid, Box } from "@mui/material";

const HomeModule: React.FC = () => {
	const latestJobs = useLatestJobs(jobAds, 3);
	return (
		<div>
			<Navbar />

			<Grid container spacing={2}>
				<Grid
					item
					xs={false}
					sm={4}
					md={3}
					sx={{
						// backgroundColor: "lightblue",
						display: { xs: "none", sm: "flex" },
					}}>
					<SpecializationsSidebar />
				</Grid>
				<Grid item xs={12} sm={8} md={9}>
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
		</div>
	);
};

export default HomeModule;
