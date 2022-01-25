import React from 'react';
import {motion} from "framer-motion";
import {Service} from "../types";


const ServiceCard: React.FC<{
	service: Service
}> = ({service: {title, about, Icon}}) => {

	const createMarkup = () => {
		return {
			__html: about
		}
	}

	return (
		<div className={'p-2 flex items-center space-x-4'}>
			<Icon className={'w-12 h-12 text-green-600'} />
			<div>
				<h4 className={'font-bold'}>{title}</h4>
				<p dangerouslySetInnerHTML={createMarkup()} />
			</div>
		</div>
	);
};

export default ServiceCard;
