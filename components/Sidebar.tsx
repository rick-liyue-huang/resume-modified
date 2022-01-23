import React from 'react';
import {FaGithubAlt} from 'react-icons/fa';
import {GoLocation} from "react-icons/go";
import {GiTie} from "react-icons/gi";

const Sidebar = () => {
	return (
		<div>
			<img className={'w-32 h-32 rounded-full mx-auto'} src="https://avatars.githubusercontent.com/u/20208332?v=4" alt="avatar"/>
			<h3 className={'my-3 text-3xl font-medium tracking-wider'} >
				<span className={'text-green-800'}>Rick</span> Huang
			</h3>
			<p className={'px-2 py-1 bg-gray-300 rounded-full'}>Fullstack Developer</p>
			<a className={'px-2 py-1 my-3 bg-gray-300 rounded-full flex items-center justify-center'} href={''} download={'name'} >
				<GiTie className={'w-6 h-6'} />Get Resume
			</a>
			<a className={'px-2 py-1 my-3 bg-gray-300 rounded-full flex items-center justify-center'} href={'https://github.com/rick-liyue-huang'} >
				<FaGithubAlt className={'w-6 h-6'} />Know More About Me
			</a>
			{/* address */}
			<div>
				<div>
					<GoLocation />
					<span>Melbourne, Australia</span>
				</div>
				<div>rick.liyue.huang@gmail.com</div>
				<div>0499059029</div>
			</div>
			{/* Email Button */}
			<button>Email Me</button>
			<button>Change Style</button>
		</div>
	);
};

export default Sidebar;
