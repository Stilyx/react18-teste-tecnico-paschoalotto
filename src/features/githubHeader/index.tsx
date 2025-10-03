'use client';
import { useTheme } from '@/context/theme';
import Link from 'next/link';
import { GoMoon } from 'react-icons/go';
import { IoMdReturnLeft } from 'react-icons/io';
import { MdOutlineLightMode } from 'react-icons/md';

export default function GithubHeader() {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className="flex flex-row justify-between w-full px-[1.875rem] py-[1.25rem]">
			<div className="flex flex-row gap-3 items-center">
				<Link href={'/'}>
					<IoMdReturnLeft className="desktop:text-[1.6rem] text-[1.25rem] cursor-pointer text-github-light-text dark:text-github-dark-text" />
				</Link>

				<h1 className="text-github-light-text dark:text-github-dark-text font-spacemono text-[1.25rem] desktop:text-[1.8rem] ">
					Github UserSearch
				</h1>
			</div>

			<button
				className="text-[2.5rem] dark:text-github-text cursor-pointer text-black"
				onClick={() => toggleTheme()}
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
