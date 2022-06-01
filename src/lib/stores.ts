import { writable, readable } from 'svelte/store';

export const tag = writable<string>('');
export const postsPerPage = readable<number>(4);
