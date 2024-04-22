// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
export const ssr = true;

import { cardsDataFiltered } from '../../lib/data/cards_data_filtered';

export function load() {
  return {
    homes: cardsDataFiltered,
  };
}
