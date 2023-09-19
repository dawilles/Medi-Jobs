import React from 'react';
import Link from 'next/link';
import { Paper, Typography, IconButton, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useMediaQuery, useTheme } from '@mui/material';
import { JobAd } from '@/types';

export const JobBanner = ({ job }: { job: JobAd }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper elevation={5}>
      <Stack direction="row" spacing={2} alignItems="center" p={2}>
        <Stack sx={{ flex: 2 }} spacing={1}>
          <Link href={`/jobpage/${job.id}`} style={{ textDecoration: 'none' }}>
            <Typography variant={isMobile ? 'h5' : 'h3'} color="primary">
              {job.title}
            </Typography>
          </Link>
          <Typography variant="h6" color="text.secondary">
            {job.user.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Data dodania: ${job.dateAdded}`}
          </Typography>
        </Stack>
        <Stack sx={{ flex: 1 }} spacing={2}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <LocationOnIcon color="info" />
            <Typography variant={isMobile ? 'body1' : 'h5'}>
              {job.location}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <AttachMoneyIcon color="success" fontSize="large" />
            <Typography variant={isMobile ? 'h6' : 'h4'} color="text.primary">
              {`${job.salary.from} - ${job.salary.to} ${job.salary.currency}`}
            </Typography>
          </Stack>
        </Stack>
        <IconButton aria-label="save job">
          <StarBorderIcon
            color="secondary"
            fontSize={isMobile ? 'medium' : 'large'}
          />
        </IconButton>
      </Stack>
    </Paper>
  );
};
