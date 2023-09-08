import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Link,
  // Avatar,
  // Tooltip,
} from '@mui/material';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const navLinks: string[] = [
  'Strona Główna',
  'Oferty pracy',
  'Wyszukiwanie zaawansowane',
  'Kontakt',
];
// const userOptions: string[] = ["Profil", "Ustawienia", "Wyloguj"];

export const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  // const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="sticky">
      <Toolbar
        disableGutters
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Box sx={{ display: 'flex' }}>
          <IconButton href="/">
            <MedicalInformationIcon fontSize="large" />
          </IconButton>
          <Link href="/">
            <Typography variant="h1" component="h1">
              Medi-Jobs
            </Typography>
          </Link>
        </Box>

        {/* Navigation for larger screens */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navLinks.map((link) => (
            <Button key={link}>
              <Typography variant="h6" sx={{ paddingRight: '.2rem' }}>
                {link}
              </Typography>
            </Button>
          ))}
        </Box>

        {/* Navigation for smaller screens */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton onClick={handleOpenNavMenu}>
            <DensityMediumIcon fontSize="large" />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {navLinks.map((link) => (
              <MenuItem key={link} onClick={handleCloseNavMenu} divider={true}>
                {link}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* User options */}
        {/* <Tooltip title='User Options'>
            <IconButton color='inherit' onClick={handleOpenUserMenu}>
              <Avatar alt='User Avatar' src='/path-to-avatar.jpg' />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}>
            {userOptions.map((option) => (
              <MenuItem key={option} onClick={handleCloseUserMenu}>
                {option}
              </MenuItem>
            ))}
          </Menu> */}
      </Toolbar>
    </AppBar>
  );
};
