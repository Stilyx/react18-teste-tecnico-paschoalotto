import { IUserStats } from './interfaces';

export default function UserStatsCard({ title, value }: IUserStats) {
	return (
		<div className=" text-github-light-text dark:text-github-dark-text items-center justify-center gap-6 flex flex-col font-spacemono  w-full desktop:w-[7.25rem]">
			<p className="text-[1.375rem]">{title}</p>
			<p className="text-[1.875rem]">{value}</p>
		</div>
	);
}
