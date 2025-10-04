import {
	Pagination,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { SetStateAction } from 'react';

interface IPagination {
	setPage: (prev: SetStateAction<number>) => void;
	page: number;
	totalPages: number;
}

export default function FeaturePagination({
	page,
	setPage,
	totalPages,
}: IPagination) {
	return (
		<Pagination className="list-none pb-[3.125rem] dark:text-white">
			<PaginationPrevious
				onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
				className={
					page === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'
				}
			>
				Previous
			</PaginationPrevious>
			{page > 3 && (
				<>
					<PaginationItem>
						<PaginationLink
							onClick={() => setPage(1)}
							className="cursor-pointer"
						>
							1
						</PaginationLink>
					</PaginationItem>
					{page > 4 && <PaginationEllipsis />}
				</>
			)}
			{Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
				const pageNumber = Math.max(1, page - 2) + i;
				if (pageNumber > totalPages) return null;
				return (
					<PaginationItem key={pageNumber}>
						<PaginationLink
							onClick={() => setPage(pageNumber)}
							isActive={pageNumber === page}
							className="cursor-pointer"
						>
							{pageNumber}
						</PaginationLink>
					</PaginationItem>
				);
			})}
			{page < totalPages - 2 && (
				<>
					{page < totalPages - 3 && <PaginationEllipsis />}
					<PaginationItem>
						<PaginationLink
							onClick={() => setPage(totalPages)}
							className="cursor-pointer"
						>
							{totalPages}
						</PaginationLink>
					</PaginationItem>
				</>
			)}
			<PaginationNext
				onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
				className={
					page >= totalPages
						? 'pointer-events-none opacity-50'
						: 'cursor-pointer'
				}
			>
				Next
			</PaginationNext>
		</Pagination>
	);
}
