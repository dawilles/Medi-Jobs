import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/material'; // Zaimportuj Stack zamiast Box
import MedicalIcon from '@mui/icons-material/MedicalServices';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import MasksIcon from '@mui/icons-material/Masks';
import PhysiotherapyIcon from '@mui/icons-material/Healing';
import PsychologyIcon from '@mui/icons-material/Psychology';
import NurseIcon from '@mui/icons-material/LocalHospital';
import CaretakerIcon from '@mui/icons-material/AccessibilityNew';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const categories = {
  doctors: MedicalIcon,
  pharmacists: VaccinesIcon,
  dentists: MasksIcon,
  physiotherapists: PhysiotherapyIcon,
  psychologists: PsychologyIcon,
  nurses: NurseIcon,
  midwives: BabyChangingStationIcon,
  caretakers: CaretakerIcon,
  dieticians: RestaurantIcon,
};

export const SpecializationsSidebar: React.FC = () => {
  return (
    <Stack spacing={2}>
      <List>
        {Object.entries(categories).map(([category, Icon], index) => (
          <ListItem key={index} button>
            <ListItemIcon>
              <Icon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={category} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};
