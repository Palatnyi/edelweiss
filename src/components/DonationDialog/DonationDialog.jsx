import React, { useState } from 'react';
import urlJoin from 'url-join';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import isEmail from 'validator/lib/isEmail';
import TextField from '@mui/material/TextField';
import ReactCountryFlag from "react-country-flag";
import logEdelweissEvent from '../../firebase-app.js';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslations, useCustomLang, getCurrencyMultiplier } from '../../hooks'
import DialogContentText from '@mui/material/DialogContentText';

import translations from '../../translations.json';

export default function DonationDialog({ onDonate, onClose, currencies }) {
	let { lang } = useCustomLang();
	const { CURRENCIES, FLAG, DEFAULT_LANG, CURRENCY_TO_FLAG } = translations;
	const translate = useTranslations();
	const [amount, setAmount] = useState(500);
	const [customer_email, setEmail] = useState('');
	const [currency, setCurrency] = useState(CURRENCIES[lang]);


	const handleInputChange = e => {
		const value = e.target.value;
		logEdelweissEvent({
			page: 'DonationDialog',
			amount: value,
		}, 'DONATION-DIALOG_AMOUNT_CHANGE_INPUT')
		setAmount(value);
	}

	const handleEmailChange = e => {
		const value = e.target.value;
		setEmail(value);
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
		return (
			<DialogContentText>
				{translate("donateDialog.subtitle")} {currency}
			</DialogContentText>
		)
	}

	const donate = () => {
		let _amount = amount;
		const usdCurrency = getCurrencyMultiplier(currencies, 840);
		if (currency === "USD") {
			_amount = parseFloat(amount * usdCurrency.rateBuy).toFixed(0)
		}

		const data = {
			customer_email,
			currency: 'UAH',
			amount: _amount,
			customer_lang: lang.toUpperCase(),
			result_url: urlJoin(window.location.href, 'confirmation', 'UAH', `${amount}`)
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
					<DialogContentText>
						{translate("donateDialog.selectCurrency")} {currency}  <ReactCountryFlag countryCode={CURRENCY_TO_FLAG[currency]} />
					</DialogContentText>
					<Box sx={{ margin: '15px 0 10px 0px' }}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">
								{translate("donateDialog.currency")}
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={currency}
								label="Age"
								onChange={event => setCurrency(event.target.value)}
							>
								<MenuItem value={CURRENCIES["uk"]}>{translate("donateDialog.uah")}</MenuItem>
								<MenuItem value={CURRENCIES["en"]}>{translate("donateDialog.usd")}</MenuItem>
							</Select>
						</FormControl>
					</Box>
					{renderCurrencyLabel()}
					<Stack direction="row" spacing={1}>
						<Box sx={{ margin: '10px 0 10px 0px' }}>
							{renderAmounts()}
						</Box>
					</Stack>
					<Box sx={{ margin: '10px 0 10px 0px' }}>
						<TextField
							autoFocus
							id="amount"
							label={translate("donateDialog.otherAmount")}
							type="number"
							fullWidth
							value={amount}
							variant="standard"
							onChange={handleInputChange}
						/>
					</Box>
					<Box sx={{ margin: '10px 0 10px 0px' }}>
						<TextField
							id="email"
							label={translate("donateDialog.email")}
							type="email"
							fullWidth
							value={customer_email}
							onChange={handleEmailChange}
							required
						/>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={close}>{translate("donateDialog.cancel")}</Button>
					<Button variant="contained" disabled={!amount || !isEmail(customer_email) || !currencies} onClick={donate}>{translate("donateDialog.donate")}</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
