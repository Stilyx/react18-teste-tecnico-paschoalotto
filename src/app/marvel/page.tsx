import FeatureCharList from '@/features/charList';
import FeatureMarvelHeader from '@/features/marvelHeader';

export default function MarvelCharacters() {
	return (
		<div className="dark:bg-dark-gradient w-full min-h-screen h-full">
			<FeatureMarvelHeader />
			<FeatureCharList />
		</div>
	);
}
