'use client';
import { getAllMarvelCharacters, getMarvelCharactersName } from '@/services';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { SiMarvelapp } from 'react-icons/si';

import FeaturePagination from '../pagination';
import CharactersSkeleton from './loading';
import FeatureRenderChar from '../renderChar';

export default function FeatureCharList() {
	const [filter, setFilter] = useState('');
	const [page, setPage] = useState(1);
	const itemsPerPage = 20;

	const { data, isFetched, isLoading } = useQuery({
		queryKey: ['marvel-characters', { page, filter }],
		queryFn: () =>
			filter.length > 0
				? getMarvelCharactersName(filter, (page - 1) * itemsPerPage)
				: getAllMarvelCharacters((page - 1) * itemsPerPage),
	});

	const totalPages = Math.ceil((data?.data.total || 0) / itemsPerPage);

	const handleFilterChar = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPage(1);
		setFilter(e.target.value);
	};

	return (
		<>
			<div className="desktop:w-[25rem] ml-[3.125rem] w-[80%] relative mb-[3.125rem]">
				<input
					type="text"
					placeholder="Character Name"
					className="w-full pl-[3.125rem] p-[1.25rem] border skew-x-[-20deg] border-marvel-dark-border shadow-2xs focus:outline-none font-condensed text-marvel-light-text dark:text-marvel-dark-text dark:border-marvel-light-border bg-marvel-light-card-background dark:bg-marvel-dark-card-background"
					onChange={handleFilterChar}
					value={filter}
				/>
				<SiMarvelapp className="absolute bottom-4 right-4 text-[1.875rem] text-red-500 dark:text-black" />
			</div>

			<div className="grid grid-cols-2 desktop:grid-cols-4 mx-auto w-full gap-6 gap-y-10 mb-[3.125rem]">
				{isLoading && <CharactersSkeleton />}
				{isFetched && data?.data.results.length <= 0 && (
					<p className="text-center col-span-4">Nenhum personagem encontrado</p>
				)}
				{isFetched && (
					<FeatureRenderChar characters={data?.data.results || []} />
				)}
			</div>

			{isFetched && totalPages > 1 && (
				<FeaturePagination
					page={page}
					setPage={setPage}
					totalPages={totalPages}
				/>
			)}
		</>
	);
}
