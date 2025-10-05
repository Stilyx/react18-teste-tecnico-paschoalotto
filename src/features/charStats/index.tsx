import { ICharStats } from './interfaces';

export default function CharStats({ title, quantity, classname }: ICharStats) {
	return (
		<div className="bg-black w-[7.5rem] h-[4.375rem] self-start relative left-[-3.125rem] border-white border-3 skew-x-[-20deg] shadow-[8px_8px_0px_rgba(0,0,0,1)] ">
			<p className="text-white font-bold text-[1rem] absolute bottom-0 right-[0.625rem]">
				{title}
			</p>
			<div
				className={`absolute right-1 w-20 z-[0] h-20 top-[-2.5rem] rotate-5 rounded-full border-white border-3 ${classname}`}
			>
				<p className="text-center text-[2.813rem] font-bold text-white">
					{quantity}
				</p>
			</div>
		</div>
	);
}
