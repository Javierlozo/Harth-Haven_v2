// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import { cardsData } from '../lib/data/cards_data';

export function load() {
	return {
		homes: cardsData
	};
}
