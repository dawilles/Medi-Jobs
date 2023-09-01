import React from "react";
import { Box, Paper, CardContent, Typography, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { JobAd } from "@/types";

type JobBannerProps = {
	job: JobAd;
};

export const JobBanner: React.FC<JobBannerProps> = ({ job }) => {
	return (
		<Paper elevation={5}>
			<Box
				sx={{
					display: "flex",
					p: 2,
					// backgroundColor: "lightblue",
				}}>
				<CardContent
					sx={{
						flex: 1,
						// backgroundColor: "yellow",
					}}>
					<Typography variant='h5' component='div'>
						{job.title}
					</Typography>
					<Typography variant='subtitle1' color='text.secondary'>
						{job.user.username}
					</Typography>
					<Typography variant='body2' color='text.secondary' mt={1}>
						{`Dodano: ${job.dateAdded}`}
					</Typography>
				</CardContent>
				<CardContent
					sx={{
						flex: 1,
						// backgroundColor: "orange",
					}}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							mt: 1,
							// backgroundColor: "green",
						}}>
						<LocationOnIcon />
						<Typography variant='body2'>{job.location}</Typography>
					</Box>
					<Box sx={{ display: "flex", alignItems: "center", pt: 1 }}>
						<AttachMoneyIcon />
						<Typography variant='body2'>{`${job.salary.from} - ${job.salary.to} ${job.salary.currency}`}</Typography>
					</Box>
				</CardContent>
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "flex-start",
						// backgroundColor: "red",
						flexShrink: 0,
					}}>
					<IconButton aria-label='save job'>
						<StarBorderIcon />
					</IconButton>
				</Box>
			</Box>
		</Paper>
	);
};
