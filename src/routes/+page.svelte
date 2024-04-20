<script>
  // @ts-nocheck
  import Counter from './Counter.svelte';
  import welcome from '$lib/images/svelte-welcome.webp';
  import welcome_fallback from '$lib/images/svelte-welcome.png';
  import Card from '$lib/components/Card.svelte';
  import FilterModal from '$lib/components/FilterModal.svelte';
  import filter from '$lib/images/filter-32.png';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { onDestroy } from 'svelte';
  import { createSearchStore, searchHandler } from '$lib/stores/search';

  // Modal
  let showModal = false;

  // exports
  export let data;

  const searchProducts = data.homes.map((home) => ({
    ...home,
    searchTerms: `${home.id} ${home.title} ${home.price}`,
  }));

  const searchStore = createSearchStore(searchProducts);

  const unsubscribe = searchStore.subscribe((model) => {
    searchHandler(model);
  });

  $: filteredHomes = $searchStore.filtered;

  onDestroy(() => {
    unsubscribe();
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- SECTION 1 - ABOUT US -->
<section class="section1">
  <h1>
    WELCOME TO<br /> TO HEARTH HAVEN
  </h1>
</section>

<!-- SECTION 2 -->
<section class="section2">
  <input
    type="search"
    id="default-search"
    class="search"
    placeholder="Search"
    required
    bind:value="{$searchStore.search}"
  />

  <button class="filterButton" on:click="{() => (showModal = true)}">
    <img src="{filter}" alt="Welcome" />
    <div>Filters</div>
  </button>
</section>

<!-- SECTION 3 -->
<section>
  <div class="cardComponent">
    {#each filteredHomes as home (home.id)}
      <Card home="{home}" />
    {/each}
  </div>
</section>

<FilterModal bind:showModal="{showModal}" />

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }
  .search {
    border-radius: 10px;
    height: 30px;
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    height: 40px;
  }
  .cardComponent {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
    align-content: space-evenly;
    margin-top: 100px;
  }
  .section1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  .section2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  .filterButton {
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    height: 40px;
    width: 100px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    gap: 5px;
    transition: background-color 0.3s ease;
    background-color: white;
  }
  .filterButton img {
    height: 26px;
  }
  .filterButton:hover {
    background-color: lightgray;
  }
  /* @media only screen and (min-width: 481px) and (max-width: 1300px) {
    .cardComponent {
      flex-direction: column;
      align-items: center;
    }
  }
  @media only screen and (max-width: 480px) {
    .cardComponent {
      flex-direction: column;
      align-items: center;
    }
  } */
</style>
