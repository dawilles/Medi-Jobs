import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	Box,
	IconButton,
	Typography,
	Button,
	Menu,
	MenuItem,
	// Avatar,
	// Tooltip,
} from "@mui/material";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation"; // Zaimportuj odpowiednią ikonę
import DensityMediumIcon from "@mui/icons-material/DensityMedium"; // Zaimportuj odpowiednią ikonę

const navLinks: string[] = [
	"Strona Główna",
	"Oferty pracy",
	"Wyszukiwanie zaawansowane",
	"Kontakt",
];
// const userOptions: string[] = ["Profil", "Ustawienia", "Wyloguj"];

export const Navbar: React.FC = () => {
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
		<AppBar position='sticky'>
			<Toolbar
				disableGutters
				sx={{ display: "flex", justifyContent: "space-between" }}>
				<Box sx={{ display: "flex" }}>
					<IconButton color='inherit' href='/'>
						<MedicalInformationIcon fontSize='large' />
					</IconButton>
					<Typography
						variant='h1'
						component='a'
						href='/'
						sx={{
							textDecoration: "none",
						}}>
						Medi-Jobs
					</Typography>
				</Box>

				{/* Navigation for larger screens */}
				<Box sx={{ display: { xs: "none", md: "flex" } }}>
					{navLinks.map((link) => (
						<Button key={link} color='inherit'>
							<Typography variant='h6' sx={{ paddingRight: ".6rem" }}>
								{link}
							</Typography>
						</Button>
					))}
				</Box>

				{/* Navigation for smaller screens */}
				<Box sx={{ display: { xs: "flex", md: "none" } }}>
					<IconButton color='inherit' onClick={handleOpenNavMenu}>
						<DensityMediumIcon fontSize='large' />
					</IconButton>
					<Menu
						anchorEl={anchorElNav}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}>
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
