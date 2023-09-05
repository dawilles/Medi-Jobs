import { createTheme, Theme } from "@mui/material/styles";

import {
	cyan,
	teal,
	green,
	blue,
	orange,
	red,
	grey,
} from "@mui/material/colors";

const colors = {
	grey: {
		50: grey[50],
		100: grey[100],
		200: grey[200],
		300: grey[300],
		400: grey[400],
		500: grey[500],
		600: grey[600],
		700: grey[700],
		800: grey[800],
		900: grey[900],
	},
	primary: {
		50: cyan[50],
		100: cyan[100],
		200: cyan[200],
		300: cyan[300],
		400: cyan[400],
		500: cyan[500],
		600: cyan[600],
		700: cyan[700],
		800: cyan[800],
		900: cyan[900],
	},
	secondary: {
		50: teal[50],
		200: teal[200],
		300: teal[300],
		100: teal[100],
		400: teal[400],
		500: teal[500],
		600: teal[600],
		700: teal[700],
		800: teal[800],
		900: teal[900],
	},
	success: {
		500: green[500],
	},
	warning: {
		500: orange[500],
	},
	info: {
		500: blue[500],
	},
	error: {
		500: red[500],
	},
};

const mode: "light" | "dark" = "light";

export const theme: Theme = createTheme({
	palette: {
		mode: mode,
		...(mode === "light"
			? {
					primary: {
						main: colors.primary[800],
					},
					secondary: {
						main: colors.secondary[400],
					},
					neutral: {
						dark: colors.grey[700],
						main: colors.grey[900],
						light: colors.grey[100],
					},
					success: {
						main: colors.success[500],
					},
					warning: {
						main: colors.warning[500],
					},
					info: {
						main: colors.info[500],
					},
					error: {
						main: colors.error[500],
					},
					background: {
						default: "#ffffff",
					},
			  }
			: {
					primary: {
						main: colors.primary[700],
					},
					secondary: {
						main: colors.secondary[800],
					},
					neutral: {
						dark: colors.grey[700],
						main: colors.grey[500],
						light: colors.grey[100],
					},
					success: {
						main: colors.success[500],
					},
					warning: {
						main: colors.warning[500],
					},
					info: {
						main: colors.info[500],
					},
					error: {
						main: colors.error[500],
					},
					background: {
						default: colors.grey[900],
					},
			  }),
	},
	typography: {
		fontFamily: ['"Segoe UI"'].join(","),
		fontSize: 14,
		h1: {
			fontSize: 40,
			fontWeight: 400,
			color: colors.grey[100],
		},
		h2: {
			fontSize: 36,
			fontWeight: 300,
			color: colors.grey[800],
		},
		h3: {
			fontSize: 24,
			color: colors.primary[800],
		},
		h4: {
			fontSize: 22,
			color: colors.secondary[500],
		},
		h5: {
			fontSize: 18,
			color: colors.grey[700],
		},
		h6: {
			fontSize: 14,
			color: colors.grey[100],
		},
		subtitle1: {
			fontSize: 16,
			color: colors.grey[900],
		},
		subtitle2: {
			fontSize: 14,
			color: colors.grey[900],
		},
	},
});
