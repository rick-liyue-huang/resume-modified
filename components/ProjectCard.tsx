import React, {useState} from 'react';
import {motion} from "framer-motion";
import {IProject} from "../types";
import {AiFillGithub, AiFillProject} from "react-icons/ai";
import {MdClose} from 'react-icons/md';
import Image from 'next/image'
import {fadeIn, stagger} from "../animates";

const ProjectCard: React.FC<{
	project: IProject
}> = ({project: {name, image_path, category,
	deployed_url,description, github_url, key_techs}}) => {

	const [showDetail, setShowDetail] = useState(false);

	return (
		<div>
			<div>
				<Image
					src={image_path}
					alt={name}
					className={'cursor-pointer'}
					onClick={(e) => {
						setShowDetail(true)
					}}
					width={'300'}
					height={'150'}
					layout={'responsive'}
					quality={'75'}
				/>
			</div>
			<p className={'my-2 text-center'}>{name}</p>
			{
				showDetail && (
					<div className={'grid md:grid-cols-2 ' +
						'absolute top-0 left-0 z-10 h-auto w-full gap-x-12 text-black-700' +
						'dark:text-white dark:bg-dark-700 bg-amber-100 p-2'}
					>
						<motion.div variants={stagger} initial={'initial'} animate={'animate'}>
							<motion.div variants={fadeIn}>
								<Image width={'600'} height={'300'} layout={'responsive'} quality={'100'} src={image_path} alt={name} />
							</motion.div>
							<motion.div variants={fadeIn} className={'flex justify-center my-4 space-x-4'}>
								<a href={github_url} className={'flex items-center px-4 py-2 space-x-3 text-lg bg-green-200 dark:bg-dark-700'}>
									<AiFillGithub />
									<span>GitHub </span>
								</a>
								<a href={deployed_url} className={'flex items-center px-4 py-2 space-x-3 text-lg bg-green-200 dark:bg-dark-700'}>
									<AiFillProject />
									<span>Project</span>
								</a>
							</motion.div>
						</motion.div>

						<motion.div variants={stagger} initial={'initial'} animate={'animate'}>
							<motion.div variants={fadeIn}>
								<h2 className={'mb-3 text-xl font-medium md:text-2xl'}>{name}</h2>
								<h3 className={'mb-3 font-medium'}>{description}</h3>
							</motion.div>

							<motion.div variants={fadeIn} className={'flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'}>
								{
									key_techs.map(tech => (
										<span className={'px-2 py-1 my-2 bg-green-200 dark:bg-dark-700'} key={tech}>{tech}</span>
									))
								}
							</motion.div>

						</motion.div>

						<button className={'absolute top-1 right-3 rounded-full ' +
							'focus:outline-none bg-gray-200 dark:bg-dark-700'}>
							<MdClose size={30} onClick={() => setShowDetail(false)} />
						</button>
					</div>
				)
			}
		</div>
	);
};

export default ProjectCard;
