import React from 'react';
import './Separator.scss';

function Separator(props) {
	const className = `separator ${props.className}`
	return (
		<div className={className} ></div>
	)
}

export default Separator;