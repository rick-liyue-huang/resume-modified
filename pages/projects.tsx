import React, {useState} from 'react';
import {motion} from "framer-motion";
import { projects as projectsData} from "../data";
import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar";
import {Category} from "../types";
import {fadeIn, routeAnimation, stagger} from "../animates";
import Head from "next/head";

const Projects = () => {

	const [projects, setProjects] = useState(projectsData);
	const [active, setActive] = useState('all');

	const [showDetail, setShowDetail] = useState<number | null>(null);

	const handleFilterCategory = (category: Category | 'all') => {
		if (category === 'all') {
			setProjects(projectsData);
			setActive(category);
			return
		}

		const filteredProjects = projectsData.filter((project => project.category.includes(category)));
		setProjects(filteredProjects);
		setActive(category);
	}

	return (
		<motion.div
			variants={routeAnimation} initial={'initial'} animate={'animate'} exit={'exit'}
			className={'px-5 py-2 overflow-y-scroll'} style={{height: '65vh'}}>

			<Head>
				<title>
					my projects
				</title>
			</Head>

			<ProjectNavbar handleFilterCategory={handleFilterCategory} active={active} />
			<motion.div
				variants={stagger} initial={'initial'} animate={'animate'}
				className={'grid grid-cols-12 gap-4 my-3 relative'}>
				{
					projects.map(project => (
						<motion.div
							variants={fadeIn}
							key={project.name} className={'col-span-12 sm:col-span-6 lg:col-span-4 p-2 text-amber-400 dark:text-amber-600 bg-green-200 dark:bg-dark-700 rounded-b-2xl'}>
							<ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail} />
						</motion.div>
					))
				}
			</motion.div>
		</motion.div>
	);
};

export default Projects;
