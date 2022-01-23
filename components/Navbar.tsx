import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {useRouter} from "next/router";

type ActiveEnum =
	'About' | 'Resume' | 'Projects';

const NavItem: React.FC<{
	activeItem: ActiveEnum,
	setActiveItem: (activeItem: ActiveEnum) => void,
	name: ActiveEnum,
	route: string
}> = ({name, setActiveItem, activeItem, route}) => {
	return (
		activeItem !== name
		? (
			<Link href={route}>
				<a><span className={'hover:text-green-600'} onClick={() => setActiveItem(name)}>{name}</span></a>
			</Link>
		) : null
	)
}


const Navbar = () => {

	const [activeItem, setActiveItem] = useState<ActiveEnum>('About');

	const {pathname} = useRouter()

	useEffect(() => {
		if (pathname === '/') {
			setActiveItem('About')
		} else if (pathname === '/projects') {
			setActiveItem('Projects')
		} else if (pathname === '/resume') {
			setActiveItem('Resume');
		}
	}, [])

	return (
		<div className={'flex justify-between px-5 py-3 my-3'}>
			<span
				className={'font-bold text-amber-600 text-2xl border-b-4 border-green-300 md:text-3xl'}
			>
				{activeItem}</span>
			<div className={'text-green-400 font-lg flex space-x-5 text-xl'}>
				<NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={'About'} route={'/'} />
				<NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={'Resume'} route={'/resume'} />
				<NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={'Projects'} route={'/projects'} />
				{/*
				{
					activeItem !== 'About'
					&& (
							<Link href={'/'}>
								<a><span onClick={() => setActiveItem('About')}>About</span></a>
							</Link>
					)
				}
				{
					activeItem !== 'Projects'
					&& (
						<Link href={'/projects'}>
							<a><span onClick={() => setActiveItem('Projects')}>Projects</span></a>
						</Link>
					)
				}
				{
					activeItem !== 'Resume'
					&& (
						<Link href={'/resume'}>
							<a><span onClick={() => setActiveItem('Resume')}>Resume</span></a>
						</Link>
					)
				}
				*/}
			</div>
		</div>
	);
};

export default Navbar;
