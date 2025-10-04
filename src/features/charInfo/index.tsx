import Image from 'next/image';
import CharStats from '../charStats';
import chartNotFound from '@public/assets/char-notfound.jpg';
import { ICharInfo } from './interfaces';
import { notFoundCharacter } from '@/hooks/notfoundchar';

export default function FeatureCharInfo({ charInfo }: ICharInfo) {
	return (
		<div className="flex flex-col gap-4">
			<div className="absolute rounded-[0.625rem] inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.9)_0%,_rgba(0,0,0,9.9)_100%)]"></div>
			{!notFoundCharacter(charInfo!.thumbnail.path) ? (
				<Image
					src={`${charInfo?.thumbnail.path}.${charInfo?.thumbnail.extension}`}
					alt={`${charInfo?.name} thumbnail`}
					fill
					className=" opacity-70 rounded-[0.625rem]"
				/>
			) : (
				<Image
					src={chartNotFound}
					alt={`${charInfo?.name} thumbnail`}
					fill
					className=" opacity-70 rounded-[0.625rem]"
				/>
			)}

			<div className="flex flex-col gap-12">
				<CharStats
					title="COMICS"
					quantity={charInfo?.comics.available}
					classname="bg-blue-500"
				/>

				<CharStats
					title="SERIES"
					quantity={charInfo?.series.available}
					classname="bg-red-500"
				/>
				<CharStats
					title="STORIES"
					quantity={charInfo?.stories.available}
					classname="bg-yellow-500"
				/>
			</div>
			<div className="absolute bottom-5 w-[90%] border-5 skew-x-[3deg] border-black p-8 rounded-[30px] bg-[#f6f8fa] h-[240px] items-center justify-center flex">
				<div className=" flex-col   items-center justify-center bg-black text-[18px] h-[50px] w-fit  border-4 border-white/20 skew-x-[10deg] p-1  flex shadow-[8px_8px_0px_rgba(0,0,0,1)] place-items-center absolute right-5 top-[-30px]">
					<h1 className="font-comic text-[25px] text-white">
						{charInfo?.name}
					</h1>
				</div>
				<p className="text-[10px] desktop:text-[16px] justify-center text-justify font-bold">
					{charInfo?.description}
				</p>
			</div>
		</div>
	);
}
