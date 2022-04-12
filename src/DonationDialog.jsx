import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import { useTranslations } from './hooks'
import { useParams } from 'react-router-dom';

export default function DonationDialog({ onDonate, onClose }) {
    let { lang } = useParams();
	const translate = useTranslations();
	const [amount, setAmount] = useState(100);
	
	const currency = {
		'uk': "UAH",
		'en': "USD"
	};

	const handleInputChange = (e) => {
		setAmount(e.target.value)
	}

	const renderAmounts = () => {
		let amounts = [10, 20, 50, 100, 200];
		return amounts.map((value) => {
			const variant = value === amount ? "filled" : "outlined"
			return (
				<Box
					key={value}
					sx={{ margin: '10px 0 10px 10px', display: 'inline-block' }}
				>
					<Chip key={value} label={value} onClick={() => setAmount(value)} variant={variant} />
				</Box>);
		});
	}

	const donate = () => {

		console.log('LOG 2022:', {
			amount,
			currency: currency[lang],
			customer_lang: lang.toUpperCase()
		});
		onDonate({
			amount,
			currency: currency[lang],
			customer_lang: lang.toUpperCase()
		});
	};

	return (
		<div>
			<Dialog open>
				<DialogTitle>{translate("donateDialog.title")}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{translate("donateDialog.subtitle")} {currency[lang]}
					</DialogContentText>
					<Stack direction="row" spacing={1}>
						<Box sx={{ margin: '10px 0 10px 0px' }}>
							{renderAmounts()}
						</Box>
					</Stack>
					<Box sx={{ margin: '10px 0 10px 0px' }}>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label={translate("donateDialog.otherAmount")}
							type="number"
							fullWidth
							value={amount}
							variant="standard"
							onChange={handleInputChange}
						/>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={onClose}>{translate("donateDialog.cancel")}</Button>
					<Button variant="contained" disabled={!amount} onClick={donate}>{translate("donateDialog.donate")}</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
