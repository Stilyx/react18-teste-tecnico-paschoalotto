import { instance } from '@/utils/marvel-axios.config';

export const getAllMarvelCharacters = async (offset: number) => {
	try {
		const response = await instance.get(
			`/characters?offset=${offset}&limit=20`
		);
		return response.data;
	} catch (error) {
		console.error('Error fetching Marvel characters with pagination:', error);
		throw error;
	}
};

export const getMarvelCharactersName = async (
	name: string,
	offset = 0,
	limit = 20
) => {
	try {
		const response = await instance.get(`/characters`, {
			params: {
				nameStartsWith: name,
				offset,
				limit,
			},
		});
		return response.data;
	} catch (error) {
		console.error('Error fetching Marvel characters with pagination:', error);
		throw error;
	}
};
export const getMarvelCharacterInfo = async (name: string) => {
	try {
		const response = await instance.get(`/characters?name=${name}`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
