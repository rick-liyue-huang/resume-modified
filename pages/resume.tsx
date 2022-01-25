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
							ahaskhskhfkjsfhskasdhfkjsd ashkdjhsakj hasfkhdkf sd
						</p>
					</div>
				</motion.div>
				{/* experiences */}
				<motion.div variants={fadeIn} initial={'initial'} animate={'animate'}>
					<h5 className={'my-3 text-2xl font-bold'}>Experience</h5>
					<div>
						<h5 className={'my-2 text-xl font-bold'}>Software Engineer</h5>
						<p className={'font-semibold'}>WebberTech</p>
						<p className={'my-3'}>
							ahaskhskhfkjsfhskasdhfkjsd ashkdjhsakj hasfkhdkf sd
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
