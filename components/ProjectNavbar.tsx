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
			<NavItem value={'mongo'} {...props} />
			<NavItem value={'django'} {...props} />
			<NavItem value={'node'} {...props} />
			<NavItem value={'react'} {...props} />
		</div>
	);
};

export default ProjectNavbar;
