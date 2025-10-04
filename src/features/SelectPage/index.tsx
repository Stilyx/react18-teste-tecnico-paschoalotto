'use client';

import { useRouter } from 'next/navigation';
import { FiGithub } from 'react-icons/fi';

export default function FeatureSelectPage() {
	const router = useRouter();
	return (
		<div className="w-screen h-screen flex-row flex items-center justify-cente bg-black ">
			<div
				className="w-[50%] h-screen bg-gradient-to-br bg-github-background to-black flex flex-col gap-10 items-center justify-center shadow-xl cursor-pointer hover:w-[60%]  transition-all duration-300"
				onClick={() => router.push('/github')}
			>
				<FiGithub className="desktop:text-[7.5rem] text-[3.125rem] text-white" />
			</div>

			<div
				className="bg-gray-200 w-[50%] h-screen items-center justify-center flex flex-col gap-10 cursor-pointer hover:w-[60%]  duration-300 transition-all"
				onClick={() => router.push('/marvel')}
			>
				<h1 className="bg-red-500 desktop:text-[7.5rem] text-[3.125rem] text-white skew-x-[-20deg]">
					MARVEL
				</h1>
			</div>
		</div>
	);
}
