'use client';
import { useTheme } from '@/context/theme';
import Link from 'next/link';
import { GoMoon } from 'react-icons/go';
import { IoMdReturnLeft } from 'react-icons/io';
import { MdOutlineLightMode } from 'react-icons/md';

export default function FeatureMarvelHeader() {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className="flex flex-row justify-between mb-[3.125rem] w-full px-[1.875rem] py-[1.25rem] bg-dark-gradient ">
			<div className="flex flex-row gap-3 items-center">
				<Link href={'/'}>
					<IoMdReturnLeft className="desktop:text-[1.6rem] text-[1.25rem] cursor-pointer text-white " />
				</Link>
				<h1 className=" dark:text-MARVEL-dark-text font-condensed text-[1.25rem] desktop:text-[1.8rem] bg-red-500 text-white px-2 skew-x-[-20deg]">
					MARVEL CHARACTERS
				</h1>
			</div>
			<button
				className="text-[2.5rem] dark:text-marvel-text cursor-pointer text-white"
				onClick={toggleTheme}
			>
				{theme === 'light' ? (
					<GoMoon />
				) : (
					<MdOutlineLightMode className="text-white" />
				)}
			</button>
		</div>
	);
}
