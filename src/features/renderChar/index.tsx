import { MarvelCharacter } from '@/app/marvel/interfaces';
import Image from 'next/image';
import chartNotFound from '@public/assets/char-notfound.jpg';
import charPortrait from '@public/assets/transparent-Photoroom.png';
import { useMutation } from '@tanstack/react-query';
import { getMarvelCharacterInfo } from '@/services';
import { useState } from 'react';
import Modal from '@/components/modal';
import { FaSpinner } from 'react-icons/fa';
import FeatureCharInfo from '../charInfo';
import { IRenderChar } from './interfaces';
import { notFoundCharacter } from '@/hooks/notfoundchar';

export default function FeatureRenderChar({ characters }: IRenderChar) {
	const [charInfo, setCharInfo] = useState<MarvelCharacter>();
	const [openModal, setOpenModal] = useState(false);

	const mutation = useMutation({
		mutationFn: (name: string) => getMarvelCharacterInfo(name),
		onSuccess: ({ data }) => setCharInfo(data.results[0]),
	});

	const handleOpenModal = (name: string) => {
		setOpenModal(true);
		mutation.mutate(name);
	};

	return (
		<>
			<Modal modalIsOpen={openModal} setModalOpen={setOpenModal}>
				<>
					{mutation?.isPending && (
						<FaSpinner className="animate-spin inset-0 justify-center absolute  top-50  w-full  text-[6.25rem]" />
					)}
					{mutation?.isSuccess && charInfo?.id && (
						<FeatureCharInfo charInfo={charInfo} />
					)}
				</>
			</Modal>
			{characters.map((character) => (
				<div
					key={character.id}
					className="relative mx-auto place-items-center group cursor-pointer hover:-rotate-2"
					onClick={() => handleOpenModal(character.name)}
				>
					{!notFoundCharacter(character.thumbnail.path) ? (
						<div className="group-hover:scale-[1.1] duration-400">
							<Image
								src={charPortrait}
								fill
								className="absolute rounded"
								alt="character portrait"
							/>
							<Image
								src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
								alt={`${character.name} thumbnail`}
								width={200}
								height={200}
								className="w-[12.5rem] h-[12.5rem] border border-marvel-dark-border object-cover rounded"
							/>
						</div>
					) : (
						<Image
							src={chartNotFound}
							alt={`${character.name} thumbnail`}
							width={200}
							height={200}
							className="w-[12.5rem] h-[12.5rem] border border-marvel-dark-border object-cover rounded hover:scale-[1.1] duration-400"
						/>
					)}
					<p className="absolute top-[-0.938rem] self-center bg-red-500 text-white skew-x-[-20deg] w-[10.625rem] duration-200 group-hover:rotate-2 text-center">
						{character.name}
					</p>
				</div>
			))}
		</>
	);
}
