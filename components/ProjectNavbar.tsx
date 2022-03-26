import React from 'react';
import {Category} from "../types";

const NavItem: React.FC<{
	value: Category | 'all',
	handleFilterCategory: Function,
	active: string
}> = ({value, handleFilterCategory, active}) => {

	let className='cursor-pointer hover:text-green-300 capitalize';
	if (active === value) {
		className += ' text-green-400'
	}

	return (
		<li
			className={className}
			onClick={() => handleFilterCategory(value)}
		>
			{value}
		</li>
	)
}

const ProjectNavbar = (props) => {
	return (
		<div className={'flex space-x-3 px-3 py-s2 list-none overflow-x-auto'}>
			<NavItem value={'all'} {...props} />
			<NavItem value={'javascript'} {...props} />
			<NavItem value={'react'} {...props} />
			<NavItem value={'next'} {...props} />
			<NavItem value={'angular'} {...props} />
			<NavItem value={'express'} {...props} />
			<NavItem value={'mongodb'} {...props} />
			<NavItem value={'mysql'} {...props} />
			<NavItem value={'webpack'} {...props} />
		</div>
	);
};

export default ProjectNavbar;
