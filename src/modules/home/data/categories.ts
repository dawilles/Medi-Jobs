import MedicalIcon from '@mui/icons-material/MedicalServices';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import MasksIcon from '@mui/icons-material/Masks';
import PhysiotherapyIcon from '@mui/icons-material/Healing';
import PsychologyIcon from '@mui/icons-material/Psychology';
import NurseIcon from '@mui/icons-material/LocalHospital';
import CaretakerIcon from '@mui/icons-material/AccessibilityNew';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import RestaurantIcon from '@mui/icons-material/Restaurant';

export const categories = {
  doctors: {
    icon: MedicalIcon,
    label: 'Lekarze',
  },
  pharmacists: {
    icon: VaccinesIcon,
    label: 'Farmaceuci',
  },
  dentists: {
    icon: MasksIcon,
    label: 'Dentyści',
  },
  physiotherapists: {
    icon: PhysiotherapyIcon,
    label: 'Fizjoterapeuci',
  },
  psychologists: {
    icon: PsychologyIcon,
    label: 'Psycholodzy',
  },
  nurses: {
    icon: NurseIcon,
    label: 'Pielęgniarki',
  },
  midwives: {
    icon: BabyChangingStationIcon,
    label: 'Położne',
  },
  caretakers: {
    icon: CaretakerIcon,
    label: 'Opiekunowie',
  },
  dieticians: {
    icon: RestaurantIcon,
    label: 'Dietetycy',
  },
};

export type Categories = typeof categories;
