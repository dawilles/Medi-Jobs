import { useFormik } from "formik";
import { useRouter } from "next/router";
import { TextField, Button, Typography, Box } from "@mui/material";

export const SearchBar: React.FC = () => {
	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			query: "",
		},
		onSubmit: (values) => {
			router.push(`/search?query=${values.query}`);
		},
	});

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "center",
					padding: "1rem",
				}}>
				<Typography variant='h2' component='h3' sx={{ padding: "1rem" }}>
					Znajdź swoją wymarzoną pracę właśnie dziś!
				</Typography>
				<form
					onSubmit={formik.handleSubmit}
					style={{ display: "flex", gap: "10px" }}>
					<TextField
						label='Szukaj'
						variant='outlined'
						name='query'
						value={formik.values.query}
						onChange={formik.handleChange}
						style={{ flex: 1 }}
					/>
					<Button variant='contained' color='secondary' type='submit'>
						Szukaj
					</Button>
				</form>
			</Box>
		</>
	);
};
