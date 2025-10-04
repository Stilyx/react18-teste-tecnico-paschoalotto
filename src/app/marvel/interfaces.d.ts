// Interfaces auxiliares
interface Thumbnail {
	path: string;
	extension: string;
}

interface ResourceItem {
	resourceURI: string;
	name: string;
}

interface StoryItem extends ResourceItem {
	type: string;
}

interface ResourceList<T extends ResourceItem = ResourceItem> {
	available: number;
	collectionURI: string;
	items: T[];
	returned: number;
}

interface Url {
	type: string;
	url: string;
}

// Interface principal do personagem
export interface MarvelCharacter {
	id: number;
	name: string;
	description: string;
	modified: string;
	thumbnail: Thumbnail;
	resourceURI: string;
	comics: ResourceList;
	series: ResourceList;
	stories: ResourceList<StoryItem>;
	events: ResourceList;
	urls: Url[];
}
