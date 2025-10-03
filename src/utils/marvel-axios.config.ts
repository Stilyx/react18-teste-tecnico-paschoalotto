import axios from 'axios';
import md5 from 'md5';

const api = process.env.NEXT_MARVEL_API_URL;

const time = Number(new Date());

const hash = md5(
	`${time}6296ea3186091cca4a908c7c146a6ae7dd41488595173f8c8e5219a7c1d43b5e80fe1090`
);

export const instance = axios.create({
	baseURL:
		process.env.NEXT_MARVEL_API_URL || 'https://gateway.marvel.com/v1/public',
	params: {
		apikey: process.env.NEXT_PUBLIC_KEY || '95173f8c8e5219a7c1d43b5e80fe1090',
		ts: time,
		hash: hash,
	},
	headers: {
		'Content-Type': 'application/json',
	},
});
