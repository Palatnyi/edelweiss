import React from 'react';
import { useTranslations } from '../../hooks';

import Button from '../Button/Button.jsx';
import Separator from '../Separator/Separator.jsx';

import './WhatWeDo.scss';

function WhatWeDo() {
	const translate = useTranslations();
	const label = translate('whatwedo.label');
	const checkReport = translate('whatwedo.report');

	const walkie = translate('whatwedo.walkie.items');
	const nodrone = translate('whatwedo.nodrone.items');
	const equipment = translate('whatwedo.equipment.items');

	const renderList = (list = []) => {
		return (
			<div className="list">
				{list.map(item => {
					return (
						<React.Fragment>
							<div>
								<span className="amount">{item.amount}</span> <span className="label">{item.label}</span>
							</div>
							<br />
						</React.Fragment>
					);
				})}
			</div>

		);
	}

	return (
		<React.Fragment>
			<div className="whatWeDo" id="help">
				<div className="label">
					{label}
				</div>
				<div className="actions">
					<div className="nodrone">
						<div className="image">
						</div>
						<Separator className="separatorDesktop" />
						{renderList(nodrone)}
						<Separator className="separatorMobile" />
					</div>
					<div className="walkitalkie">
						<div className="image">
						</div>
						<Separator className="separatorDesktop" />
						{renderList(walkie)}
						<Separator className="separatorMobile" />

					</div>
					<div className="equipment">
						<div className="image"></div>
						<Separator className="separatorDesktop" />
						{renderList(equipment)}
						<Separator className="separatorMobile" />

					</div>
				</div>
				<Button label={checkReport} onClick={() => {
					window.open('https://drive.google.com/drive/u/0/folders/1nVt8TDxGeinwGxWBRUTLhziMpq2TrLlT', '_blank');
				}} />
			</div>
			<Separator className={'whatSeparator'} />
		</React.Fragment>
	);
}

export default WhatWeDo;