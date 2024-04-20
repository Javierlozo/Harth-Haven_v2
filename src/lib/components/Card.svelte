<script>
  export let home;
</script>

<a href="{home.id}" class="card">
  <div class="card-image">
    <img src="{home.imageUrl}" alt="{home.title}" class="image" />
  </div>
  <div class="card-title">
    <div class="cardTitle">
      {home.title}
    </div>
    <div class="cardPrice">
      {home.price}
    </div>
    <div class="cardContent">
      {home.content}
    </div>
  </div>
</a>

<style>
  .card {
    text-decoration: none;
    color: inherit;
    width: 100%;
  }

  .card-image {
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: left;
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
    align-items: left;
    justify-content: center;
    gap: 5px;
  }
</style>
