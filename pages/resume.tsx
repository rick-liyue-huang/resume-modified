import React from 'react';
import {motion} from "framer-motion";
import {languages} from "../data";
import Bar from "../components/Bar";
import {fadeIn, routeAnimation} from "../animates";
import Head from "next/head";

const resume = () => {

	return (
		<motion.div
			variants={routeAnimation} initial={'initial'} animate={'animate'} exit={'exit'}
			className={'px-6 py-2'}>
			<Head>
				<title>
					my resume
				</title>
			</Head>
			{/* education */}
			<div className="grid md:grid-cols-2 gap-6">
				<motion.div variants={fadeIn} initial={'initial'} animate={'animate'}>
					<h5 className={'my-3 text-2xl font-bold'}>Education</h5>
					<div>
						<h5 className={'my-2 text-xl font-bold'}>Master of Telecommunication</h5>
						<p className={'font-semibold'}>University of New South Wales</p>
						<p className={'my-3'}>
							Major in telecommunication technology and network design, and completed all the courses with the Distinction scores.
						</p>
					</div>
					<div>
						<h5 className={'my-2 text-xl font-bold'}>Master of Engineering</h5>
						<p className={'font-semibold'}>University of Adelaide</p>
						<p className={'my-3'}>
							Major in Electronic, and completed all the courses with the Distinction scores.
						</p>
					</div>
					<div>
						<h5 className={'my-2 text-xl font-bold'}>Bachelor in Automation</h5>
						<p className={'font-semibold'}>Harbin Institute of Technology, (HIT)</p>
						<p className={'my-3'}>
							Major in Automation Design and Analysis, and specialising in the telecommunication network encryption.
						</p>
					</div>
				</motion.div>
				{/* experiences */}
				<motion.div variants={fadeIn} initial={'initial'} animate={'animate'}>
					<h5 className={'my-3 text-2xl font-bold'}>Experience</h5>
					<div>
						<h5 className={'my-2 text-xl font-bold'}>Full Stack Developer </h5>
						<p className={'font-semibold'}>WebberTech</p>
						<p className={'my-3'}>
							Expanding my software skills from front-end to back-end and cloud database; Paying more attention on SEO by using more SSR based framework; Preferring for MERN fullstack projects; Focusing on building some node.js based BFF layer, by which formats the data between the front-end and back-end and call the relevant microservices APIs and obtain the needed data
						</p>
					</div>
					<div>
						<h5 className={'my-2 text-xl font-bold'}>Front End developer</h5>
						<p className={'font-semibold'}>Haiyi Information Co., (Hefei, China)</p>
						<p className={'my-3'}>
							Taking part in the front end views rendering; Dealing with the whole project with MVC infrastructure; Use the Kendo UI for jQuery framework to realize the multiple terminal layout and user interaction; Reconstruct the Kendo UI components to suite for projects needs; Reconstruct the partial project to Angular based one.
						</p>
					</div>
					<div>
						<h5 className={'my-2 text-xl font-bold'}>Web Designer and Web Developer</h5>
						<p className={'font-semibold'}>24Quan Co.,(24quan.com)(Beijing, China)</p>
						<p className={'my-3'}>
							Encapsulating the common UI components being compatible with the project needs; Design the Admin page used to interact with server MySQL database; Taking part in the whole infrastructure building; Involving in re-encapsulating some agile frameworks with smaller loading size.
						</p>
					</div>
				</motion.div>
			</div>

			{/* language skill */}
			<div className={'grid gap-6 md:grid-cols-2'}>
				<div>
					<h5 className="my-3 text-2xl font-bold">Language and Frameworks</h5>
					<div className={'my-2 grid grid-cols-2'}>
						{
							languages.map((language) => (
								<Bar data={language} key={language.name} />
							))
						}
					</div>
				</div>
			</div>
		</motion.div>

	);
};

export default resume;
