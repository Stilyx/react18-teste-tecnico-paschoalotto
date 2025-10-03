import { instance } from '@/utils/github-axios.config';
import { GitHubUser } from './interfaces';

export const getUser = async (username: string): Promise<GitHubUser> => {
	try {
		const response = await instance.get<GitHubUser>(`/${username}`);
		return response.data;
	} catch (error) {
		console.error('Error fetching user data:', error);
		throw error;
	}
};
