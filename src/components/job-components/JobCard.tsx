// still working on mobile 
import { JobAd } from '@/types';
import { Paper, Typography, Chip, Grid, Button, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WorkIcon from '@mui/icons-material/Work';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';

type JobCardProps = {
  job: JobAd;
  onApplyClick?: () => void;
};

export const JobCard = ({ job, onApplyClick }: JobCardProps) => {
  return (
    <>
      <Stack p={9}>
        <Paper
          elevation={7}
          sx={{
            padding: '3rem',
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <Typography variant="h3" gutterBottom>
                {job.title}
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{ textAlign: 'right' }}>
              <Chip
                label={job.categoryLabel}
                variant="outlined"
                color="primary"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" gutterBottom>
                <LocationOnIcon
                  color="error"
                  sx={{
                    verticalAlign: 'middle',
                  }}
                />{' '}
                Lokalizacja: {job.location}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                <WorkIcon
                  color="info"
                  sx={{
                    verticalAlign: 'middle',
                  }}
                />{' '}
                Typ umowy: {job.contractType}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                <AttachMoneyIcon
                  color="success"
                  sx={{
                    verticalAlign: 'middle',
                    fontWeight: '700',
                  }}
                />{' '}
                Wynagrodzenie: {job.salary.from} - {job.salary.to}{' '}
                {job.salary.currency}
                {job.salary.negotiable && ' (do negocjacji)'}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" gutterBottom>
                <CalendarTodayIcon
                  color="primary"
                  sx={{
                    verticalAlign: 'middle',
                  }}
                />{' '}
                Dodano: {job.dateAdded}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                <CalendarTodayIcon
                  color="primary"
                  sx={{
                    verticalAlign: 'middle',
                  }}
                />{' '}
                Data wygaśnięcia: {job.expiryDate}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" paragraph>
                {job.description}
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="subtitle2">
                <PersonIcon
                  color="secondary"
                  sx={{
                    verticalAlign: 'middle',
                  }}
                />{' '}
                Kontakt: {job.user.username}
              </Typography>
              <Typography variant="subtitle2">
                <MailOutlineIcon
                  color="error"
                  sx={{
                    verticalAlign: 'middle',
                  }}
                />{' '}
                Email: {job.user.email}
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{ textAlign: 'right' }}>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                onClick={onApplyClick}
              >
                Aplikuj
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Stack>
    </>
  );
};
