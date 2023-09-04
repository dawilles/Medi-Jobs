import { JobAd } from "@/types";
import { Box, Typography, Paper, Chip } from "@mui/material";

type JobCardProps = {
	job: JobAd;
};

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
	return (
		<>
			<Box p={3}>
				<Paper elevation={3} style={{ padding: "20px" }}>
					<Typography variant='h4' gutterBottom>
						{job.title}
					</Typography>
					<Chip label={job.category} variant='outlined' />
					<Typography variant='subtitle1' gutterBottom>
						Dodano: {job.dateAdded}
					</Typography>
					<Typography variant='subtitle1' gutterBottom>
						Lokalizacja: {job.location}
					</Typography>
					<Typography variant='subtitle1' gutterBottom>
						Typ umowy: {job.contractType}
					</Typography>
					<Typography variant='subtitle1' gutterBottom>
						Wynagrodzenie: {job.salary.from} - {job.salary.to}{" "}
						{job.salary.currency}
						{job.salary.negotiable && " (do negocjacji)"}
					</Typography>
					<Typography variant='subtitle1' gutterBottom>
						Data wygaśnięcia: {job.expiryDate}
					</Typography>
					<Typography variant='body1' paragraph>
						{job.description}
					</Typography>
					<Typography variant='subtitle2'>
						Kontakt: {job.user.username} ({job.user.email})
					</Typography>
				</Paper>
			</Box>
		</>
	);
};

