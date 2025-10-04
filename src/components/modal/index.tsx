'use client';

import { IModal } from '@/components/modal/interfaces';
import { IoMdClose } from 'react-icons/io';

export default function Modal({ modalIsOpen, children, setModalOpen }: IModal) {
	return (
		<div
			className={`${
				modalIsOpen ? 'visible' : 'hidden'
			} w-full h-screen bg-black/[0.7] fixed inset-0 z-40 flex flex-col justify-center items-center `}
		>
			<div className="desktop:w-[37.5rem] w-[20rem] h-[20rem] p-8 items-center   min-h-[50rem]  bg-white rounded-[0.625rem] relative overflow-hidden">
				<div className="flex flex-col w-full gap-[1.25rem] text-[2rem]">
					<button
						className="self-end cursor-pointer z-[100] bg-white rounded-[0.625rem]"
						onClick={() => setModalOpen(false)}
					>
						<IoMdClose />
					</button>
					{children}
				</div>
			</div>
		</div>
	);
}
