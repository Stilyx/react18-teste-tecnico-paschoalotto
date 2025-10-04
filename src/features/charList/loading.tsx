export default function CharactersSkeleton() {
	const skeletonArray = new Array(20).fill(null);
	return (
		<>
			{skeletonArray.map((_, index) => (
				<div key={index} className="relative mx-auto group cursor-pointer">
					<div className="w-[200px] h-[400px]  border bg-marvel-dark-border animate-pulse  object-cover rounded"></div>
				</div>
			))}
		</>
	);
}
