import { writable } from 'svelte/store';
export { createSearchStore, searchHandler };

// @ts-ignore
const createSearchStore = (data) => {
	const { subscribe, set, update } = writable({
		data: data,
		filtered: data,
		search: ''
	});

	return {
		subscribe,
		set,
		update
	};
};

// @ts-ignore
const searchHandler = (store) => {
	const searchTerm = store.search.toLowerCase() || '';
	// @ts-ignore
	store.filtered = store.data.filter((item) => {
		return item.searchTerms.toLowerCase().includes(searchTerm);
	});
};
