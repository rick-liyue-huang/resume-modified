import React from 'react';
import {FiGithub} from 'react-icons/fi';
import {GoLocation} from "react-icons/go";
import {GiTie} from "react-icons/gi";
import {MdOutlineMarkEmailRead} from 'react-icons/md';
import {BiMobileVibration} from 'react-icons/bi';
import {useTheme} from 'next-themes'


const Sidebar = () => {

	const {theme, setTheme} = useTheme();

	const handleToggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	};

	return (
		<div>
			<img className={'w-40 h-40 rounded-full mx-auto'} src="https://avatars.githubusercontent.com/u/20208332?v=4" alt="avatar"/>
			<h3 className={'my-3 text-3xl font-medium tracking-wider font-rick-font text-amber-700'} >
				<span className={'text-amber-600'}>Rick</span> Huang
			</h3>
			<p className={'px-2 py-1 bg-green-100 rounded-full text-amber-400'}>Fullstack Developer</p>
			<a
				className={'px-2 py-1 my-3 bg-green-100 text-amber-400 rounded-full flex items-center justify-center'}
				href={'/assets/Resume-Rick-Huang.pdf'} download={'Resume-Rick-Huang.pdf'}
				aria-label='resume'
			>
				<GiTie className={'w-6 h-6'} />Get Resume
			</a>
			<a className={'px-2 py-1 my-3 bg-green-100 text-amber-400 rounded-full flex items-center justify-center'}
				 href={'https://github.com/rick-liyue-huang'}
				 aria-label={'github'}
			>
				<FiGithub className={'w-6 h-6 mr-1'} /> Know More About Me
			</a>
			{/* address */}
			<div className={'my-5 py-4 bg-amber-50'} style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
				<div className={'flex items-center justify-center my-2 text-green-800'}>
					<GoLocation className={'mr-2'} />
					<span>Melbourne, Australia</span>
				</div>

				<div className={'flex items-center justify-center my-2 text-green-800'}>
					<MdOutlineMarkEmailRead className={'mr-2'} />
					rick.liyue.huang@gmail.com
				</div>
				<div className={'flex items-center justify-center my-2 text-green-800'}>
					<BiMobileVibration className={'mr-2'} />
					0499 059 029
				</div>
			</div>
			{/* Email Button */}
			<button
				className={'focus:outline-none bg-gradient-to-r from-amber-100 to-amber-200 w-8/12 rounded-full py-2 px-5 text-green-600 my-2'}
				onClick={() => window.open('MailTo: rick.liyue.huang@gmail.com')}
			>Email Me</button>
			<button
				className={'bg-gradient-to-r from-amber-100 to-amber-200 w-8/12 rounded-full py-2 px-5 text-green-600 my-2'}
				onClick={handleToggleTheme}
			>
				Change Style</button>
		</div>
	);
};

export default Sidebar;
