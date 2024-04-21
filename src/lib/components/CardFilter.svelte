<button id="myButton" class="card-Component card">
  <div class="card-title">
    <div class="cardTitle">Luxe</div>
    <div class="cardDescription">Extraordinary</div>
  </div>
</button>

<style>
  .card-Component {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .card {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
  }

  .card-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }

  .cardTitle {
    font-size: medium;
    font-weight: bold;
  }

  .cardDescription {
    font-size: medium;
  }
</style>
