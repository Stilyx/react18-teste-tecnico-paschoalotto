'use client';

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';

import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { GitHubUser } from '@/services/github/interfaces';
import { getUser } from '@/services';
import { searchUserSchema, searchUserSchemaType } from './schema';
import UserStatsCard from '@/components/userStatsCard';

export default function GithubSearchCard() {
	const [userData, setUserData] = useState<GitHubUser | null>(null);

	const mutation = useMutation({
		mutationFn: (username: string) => getUser(username),
		onSuccess: (response) => setUserData(response),
	});

	const { register, handleSubmit, reset } = useForm<searchUserSchemaType>({
		resolver: zodResolver(searchUserSchema),
		mode: 'all',
	});

	const onSubmit: SubmitHandler<searchUserSchemaType> = (data) => {
		mutation.mutate(data.name);
		reset();
	};

	return (
		<section className="flex flex-col justify-center items-center gap-14">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="desktop:w-[50%] w-[90%] relative"
			>
				<AiFillGithub className="absolute bottom-5 left-3 text-[1.875rem] text-github-light-text dark:text-white" />

				<input
					type="text"
					placeholder="Digite o Usuário"
					className="w-full pl-[3.125rem] p-[1.25rem] border rounded-[1.25rem] border-github-dark-border shadow-2xs focus:outline-none font-spacemono text-github-light-text dark:text-github-dark-text dark:border-github-light-border bg-github-light-card-background dark:bg-github-dark-card-background"
					{...register('name')}
				/>
				<button className=" absolute dark:bg-github-dark-button-bg bg-github-light-button-bg dark:bg-github-dark-bg bottom-[0.438rem] right-6 darkbg-github-dark-button-bg text-white p-4 rounded-[0.625rem] cursor-pointer hover:opacity-[80%] ">
					<CiSearch className="text-[1.25rem] dark:text-github-light-text" />
				</button>

				{mutation.isError && (
					<p className="absolute left-3 bottom-[-1.875rem] text-status-red">
						Usuário não encontrado
					</p>
				)}
			</form>
			{mutation.isSuccess && userData && (
				<div className="bg-github-light-card-background shadow dark:bg-github-dark-card-background w-[80%] h-full desktop:h-[37.5rem] rounded-[0.625rem] text-github-light-text dark:text-github-dark-text font-spacemono flex flex-col desktop:flex-row relative mb-[5rem]">
					<div className="relative desktop:w-[31.25rem] desktop:h-full w-full items-center justify-center flex h-[12.5rem] desktop:mt-0 mt-[2.5rem] ">
						<Image
							src={userData?.avatar_url}
							alt="Github User Avatar"
							fill
							className="desktop:object-cover rounded-none desktop:rounded-s-[0.625rem] object-contain "
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-30 hidden desktop:block"></div>
					</div>

					<div className="flex flex-col gap-4  p-10 w-full">
						<div className="flex flex-row justify-between w-full items-start">
							<div className="flex flex-col gap-3 items-start">
								<p className=" text-[1.375rem] desktop:text-[2rem]">
									{userData.name}
								</p>
								<p className=" text-[1rem] desktop:text-[1.375rem]">
									@{userData?.login}
								</p>
							</div>
							<p className="self-center">
								{new Date(userData.created_at).toLocaleDateString()}
							</p>
						</div>

						<p className=" w-full text-justify desktop:max-w-[18.75rem]">
							{userData?.bio}
						</p>
						<div className="flex desktop:flex-row flex-col desktop:justify-between gap-10 items-center  justify-center w-full desktop:items-end  h-full">
							<div className="gap-10 flex flex-col rounded-[0.375rem] shadow-xl p-6 bg-github-light-background dark:bg-github-dark-background desktop:w-fit w-full desktop:flex-row">
								<UserStatsCard title="SEGUINDO" value={userData.following} />
								<UserStatsCard title="SEGUIDORES" value={userData.followers} />
								<UserStatsCard
									title="REPOSiTÓRIOS"
									value={userData.public_repos}
								/>
							</div>

							<Link
								className="flex flex-col gap-5"
								href={userData.html_url}
								target="_blank"
							>
								<FaGithub className="text-[3.75rem]" />
							</Link>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
