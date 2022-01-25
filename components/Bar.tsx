import React from 'react';
import {motion} from "framer-motion";
import {Skill} from "../types";

const Bar: React.FC<{data: Skill}> = ({data: {name, level, Icon}}) => {

	const variants = {
		initial: {
			width: 0
		},
		animate: {
			width: '100%',
			transition: {
				duration: 0.5,
				type: 'spring',
				damping: 10,
				stiffness: 100
			}
		}
	};

	return (
		<div className={'text-amber-600 ml-0 mr-2 my-1 bg-gray-200 rounded-full'}>
			<motion.div
				className={'px-4 py-1 w-full flex items-center rounded-full bg-gradient-to-r from-amber-100 to-green-400'}
				variants={variants}
				initial={'initial'}
				animate={'animate'}
			>
				<Icon className={'mr-3'} />
				{name}
			</motion.div>
		</div>
	);
};

export default Bar;
