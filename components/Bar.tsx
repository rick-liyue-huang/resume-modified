import React from 'react';
import {Skill} from "../types";

const Bar: React.FC<{data: Skill}> = ({data: {name, level, Icon}}) => {
	return (
		<div className={'text-amber-600 ml-0 mr-2 my-1 bg-gray-200 rounded-full'}>
			<div
				className={'px-4 py-1 w-full flex items-center rounded-full bg-gradient-to-r from-amber-100 to-green-400'}
			>
				<Icon className={'mr-3'} />
				{name}
			</div>
		</div>
	);
};

export default Bar;
