import React from "react";
import { Box, Paper, CardContent, Typography, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { JobAd } from "@/types";
import Link from "next/link";

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
				}}>
				<CardContent
					sx={{
						flex: 1,
					}}>
					<Link
						href={`/jobpage/${job.id}`}
						passHref
						style={{ textDecoration: "none" }}>
						<Typography variant='h3'>{job.title}</Typography>
					</Link>
					<Typography variant='h4' color='text.secondary'>
						{job.user.username}
					</Typography>
					<Typography variant='body2' color='text.secondary' mt={1}>
						{`Data dodania: ${job.dateAdded}`}
					</Typography>
				</CardContent>
				<CardContent
					sx={{
						flex: 1,
					}}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							mt: 1,
						}}>
						<LocationOnIcon />
						<Typography variant='h5'>{job.location}</Typography>
					</Box>
					<Box sx={{ display: "flex", alignItems: "center", pt: 1 }}>
						<AttachMoneyIcon />
						<Typography variant='h5'>{`${job.salary.from} - ${job.salary.to} ${job.salary.currency}`}</Typography>
					</Box>
				</CardContent>
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "flex-start",
						flexShrink: 0,
					}}>
					<IconButton aria-label='save job'>
						<StarBorderIcon color='secondary' />
					</IconButton>
				</Box>
			</Box>
		</Paper>
	);
};
