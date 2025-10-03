import axios from 'axios';

const api = process.env.NEXT_GITHUB_API_URL;
const baseURL = 'https://api.github.com/users';

export const instance = axios.create({
	baseURL: api || baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
});
