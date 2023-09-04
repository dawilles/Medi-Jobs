import React, { useState } from "react";
import {
	Box,
	TextField,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";

type AdvancedSearchProps = {
	onSearch: (params: any) => void;
};

export const AdvancedSearchBar: React.FC<AdvancedSearchProps> = ({ onSearch }) => {
	const [keyword, setKeyword] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const [contractType, setContractType] = useState<string>("");
	const [salaryFrom, setSalaryFrom] = useState<number | null>(null);
	const [salaryTo, setSalaryTo] = useState<number | null>(null);

	const handleSearch = () => {
		const params = {
			keyword,
			location,
			contractType,
			salaryFrom,
			salaryTo,
		};
		onSearch(params);
	};

	return (
		<Box sx={{ padding: "1rem" }}>
			<TextField
				label='Keyword'
				variant='outlined'
				fullWidth
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
			/>
			<TextField
				label='Location'
				variant='outlined'
				fullWidth
				value={location}
				onChange={(e) => setLocation(e.target.value)}
			/>
			<FormControl variant='outlined' fullWidth>
				<InputLabel>Type of Contract</InputLabel>
				<Select
					label='Type of Contract'
					value={contractType}
					onChange={(e) => setContractType(e.target.value as string)}>
					<MenuItem value='Full-time'>Full-time</MenuItem>
					<MenuItem value='Part-time'>Part-time</MenuItem>
					<MenuItem value='Contract'>Contract</MenuItem>
				</Select>
			</FormControl>
			<TextField
				label='Salary From'
				variant='outlined'
				fullWidth
				type='number'
				value={salaryFrom || ""}
				onChange={(e) => setSalaryFrom(Number(e.target.value))}
			/>
			<TextField
				label='Salary To'
				variant='outlined'
				fullWidth
				type='number'
				value={salaryTo || ""}
				onChange={(e) => setSalaryTo(Number(e.target.value))}
			/>
			<Button variant='contained' color='primary' onClick={handleSearch}>
				Search
			</Button>
		</Box>
	);
};


