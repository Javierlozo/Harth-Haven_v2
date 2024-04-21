<script>
  export let home;
</script>

<a href="{home.title}" class="card">
  <div class="card-image">
    <img src="{home.imageUrl}" alt="{home.title}" class="image" />
  </div>
  <div class="card-title">
    <div class="cardTitle">
      {home.title}
    </div>
    <div class="cardPrice">
      Starting at: <b>${home.cost}</b>
    </div>
    <div class="cardContent">
      {#each home.living as item}
        <div class="chip">{item}</div>
      {/each}
    </div>
  </div>
</a>

<style>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: inherit;
    width: 100%;
  }

  .card-image {
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden; /* Ensure the image doesn't overflow */
  }

  .image {
    width: 100%; /* Make the image occupy the entire width of its container */
    height: 100%; /* Make the image occupy the entire height of its container */
    object-fit: cover;
  }

  .card-title {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  .cardTitle {
    font-size: medium;
    font-weight: bold;
  }
  .cardPrice {
    font-size: medium;
  }
  .chip {
    display: inline-block;
    font-size: x-small;
    padding: 6px 12px;
    background-color: #4e4040;
    color: white;
    border-radius: 16px;
    margin-right: 5px;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  /* .cardContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */
</style>
