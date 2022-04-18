import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
import logEdelweissEvent from './analytics.js';
import translations from './translations.json';

export default function DonationDialog({ onDonate, onClose }) {
	let { lang } = useParams();
	const { CURRENCIES, LANGUAGES } = translations;
	const translate = useTranslations();
	const [amount, setAmount] = useState(500);
	const [currencies, setCurrencies] = useState([]);

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_SERVER_URL}/api/currencies`)
			.then(response => {
				console.log('response', response);
				if (response.data && response.data.data) {
					setCurrencies(response.data.data);
				}
			})
			.catch(error => {
				console.log('error', error);
			});
	}, [])


	const handleInputChange = (e) => {
		const value = e.target.value;
		logEdelweissEvent({
			page: 'DonationDialog',
			amount: value,
		}, 'DONATION-DIALOG_AMOUNT_CHANGE_INPUT')
		setAmount(value);
	}

	const renderAmounts = () => {
		let amounts = [100, 200, 500, 1000, 2000];
		return amounts.map((value) => {
			const variant = value === amount ? "filled" : "outlined"
			const onClick = () => {
				logEdelweissEvent({
					page: 'DonationDialog',
					amount: value
				}, 'DONATION-DIALOG_AMOUNT_CHANGE_PREDEFINED_VALUE');
				setAmount(value);
			}
			return (
				<Box
					key={value}
					sx={{ margin: '10px 0 10px 10px', display: 'inline-block' }}
				>
					<Chip key={value} label={value} onClick={onClick} variant={variant} />
				</Box>);
		});
	}

	const renderCurrencyLabel = () => {
		const usdCode = 840;
		const isNotUA = lang !== LANGUAGES['uk'];

		if (isNotUA && currencies) {
			const currency = currencies.find(currency => currency.currencyCodeA === usdCode);
			return (currency &&
				<DialogContentText>
					{translate("donateDialog.subtitle")} &asymp; {parseFloat(amount / currency.rateBuy).toFixed(2)} {CURRENCIES['en']}
				</DialogContentText>
			)

		}

		return (
			<DialogContentText>
				{translate("donateDialog.subtitle")} {CURRENCIES["uk"]}
			</DialogContentText>
		)
	}

	const donate = () => {
		const data = {
			amount,
			currency: 'UAH',
			customer_lang: lang.toUpperCase()
		};


		console.log('LOG 2022:', data);
		onDonate(data);

		logEdelweissEvent({
			data
		}, 'DONATION-DIALOG_ON_PAY_CLICK');
	};

	const close = () => {
		onClose();
		logEdelweissEvent({
		}, 'DONATION-DIALOG_ON_CANCEL_CLICK');
	}



	return (
		<div>
			<Dialog open>
				<DialogTitle>{translate("donateDialog.title")}</DialogTitle>
				<DialogContent>
					{renderCurrencyLabel()}
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
					<Button onClick={close}>{translate("donateDialog.cancel")}</Button>
					<Button variant="contained" disabled={!amount} onClick={donate}>{translate("donateDialog.donate")}</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
