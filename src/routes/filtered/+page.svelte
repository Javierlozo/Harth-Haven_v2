<script>
  // @ts-nocheck
  import Card2 from '$lib/components/Card.svelte';
  import FilterModal from '$lib/components/FilterModal.svelte';
  import filter from '$lib/images/filter-32.png';

  // Modal
  let showModal = false;

  // exports
  export let data;

  // const searchProducts = data.homes.map((home) => ({
  //   ...home,
  //   searchTerms: `${home.living} ${home.title} ${home.price}`,
  // }));

  // const searchStore = createSearchStore(searchProducts);

  // const unsubscribe = searchStore.subscribe((model) => {
  //   searchHandler(model);
  // });

  // $: filteredHomes = $searchStore.filtered;

  // onDestroy(() => {
  //   unsubscribe();
  // });
</script>

<!-- SECTION 1 - ABOUT US -->
<section class="section1">
  <div>Finding the best senior care for the people that matter most.</div>
</section>

<!-- SECTION 2 -->
<section class="section2">
  <input
    type="search"
    id="default-search"
    class="search"
    placeholder="Search"
    required
  />

  <button class="filterButton" on:click="{() => (showModal = true)}">
    <img src="{filter}" alt="Welcome" />
    <div>Filters</div>
  </button>
</section>

<!-- SECTION 3 -->
<section class="section3">
  <div class="cardComponent">
    {#each data.homes as home}
      <Card2 home="{home}" />
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
    grid-template-columns: repeat(4, minmax(0, 0.7fr));
    gap: 30px;
    margin-top: 32px;
    justify-content: center;
  }
  .section1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 70px;
    gap: 5px;
    padding-top: 40px;
    padding-bottom: 80px;
    text-align: center; /* Added to center the text */
  }

  .section1 div {
    overflow: hidden; /* Added to prevent overflow */
    text-overflow: ellipsis; /* Added to show ellipsis if overflow occurs */
    max-width: 100%; /* Added to limit the width of the text */
    width: 60%; /* Added to allow text to wrap */
  }
  .section2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  .section3 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
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
  @media only screen and (min-width: 1290px) and (max-width: 1600px) {
    .cardComponent {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 0.7fr));
      gap: 40px;
      margin-top: 32px;
      justify-content: center;
    }
    .section1 div {
      width: 80%;
    }
  }
  @media only screen and (min-width: 1130px) and (max-width: 1289px) {
    .cardComponent {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 0.7fr));
      gap: 40px;
      margin-top: 32px;
      justify-content: center;
    }
    .section1 div {
      width: 90%;
    }
  }
  @media only screen and (min-width: 950px) and (max-width: 1129px) {
    .cardComponent {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 0.7fr));
      gap: 40px;
      margin-top: 32px;
      justify-content: center;
    }
    .section1 div {
      width: 90%;
    }
  }
  @media only screen and (max-width: 949px) {
    .cardComponent {
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 0.7fr));
      gap: 40px;
      margin-top: 32px;
      justify-content: center;
    }
    .section1 {
      font-size: 50px;
    }
    .section1 div {
      display: flex;
      width: 90%;
    }
  }
</style>
