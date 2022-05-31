import { writable, readable } from 'svelte/store';

export const tag = writable<string>('');
export const postCount = writable<number>(0);
export const postsPerPage = readable<number>(2);
