<script>
  import { goto } from '$app/navigation';
  import CardFilter from './CardFilter.svelte';
  export let showModal = false;

  function handlePriceRangeChange(event) {
    const priceValue = event.target.value;
    const minValue = event.target.min;
    const maxValue = event.target.max;
    document.getElementById('priceValue').textContent = `$${priceValue}`;
    document.getElementById('minValue').textContent = `$${minValue}`;
    document.getElementById('maxValue').textContent = `$${maxValue}`;
    // Perform filtering based on the selected price range
    // You can implement your filtering logic here
  }
</script>

{#if showModal}
  <div class="modal">
    <div class="modal-content">
      <div class="modal-title">
        <div></div>
        <div class="title-report">Filters</div>
        <button class="cancelButton" on:click="{() => (showModal = false)}">
          X
        </button>
      </div>
      <hr />
      <div class="scrollable-content">
        <div class="title">Price range</div>
        <div class="description">Select a price range:</div>
        <div>
          <input
            type="range"
            min="0"
            max="8000"
            step="50"
            value="500"
            id="priceRange"
            on:input="{handlePriceRangeChange}"
            style="width: 100%;"
          />

          <span id="priceValue">$500</span>
        </div>
        <div class="title">Top-tier homes</div>
        <CardFilter />
        <div class="title">Amenities</div>
        <div class="checkbox-box">
          <div class="checkbox-title">
            <input type="checkbox" id="private-rooms" name="private-rooms" />
            <label for="private-rooms">Private rooms</label><br />
          </div>
          <div class="checkbox-title">
            <input type="checkbox" id="meal-services" name="meal-services" />
            <label for="meal-services">Meal services</label><br />
          </div>
          <div class="checkbox-title">
            <input type="checkbox" id="housekeeping" name="housekeeping" />
            <label for="housekeeping">Housekeeping</label><br />
          </div>
          <div class="checkbox-title">
            <input
              type="checkbox"
              id="medication-management"
              name="medication-management"
            />
            <label for="medication-management">Medication management</label><br
            />
          </div>
          <div class="checkbox-title">
            <input
              type="checkbox"
              id="personal-care-assistance"
              name="personal-care-assistance"
            />
            <label for="personal-care-assistance"
              >Personal care assistance</label
            ><br />
          </div>
          <div class="checkbox-title">
            <input
              type="checkbox"
              id="transportation-services"
              name="transportation-services"
            />
            <label for="transportation-services">Transportation services</label
            ><br />
          </div>
          <div class="checkbox-title">
            <input
              type="checkbox"
              id="recreational-activities"
              name="recreational-activities"
            />
            <label for="recreational-activities">Recreational activities</label
            ><br />
          </div>
          <div class="checkbox-title">
            <input type="checkbox" id="24-7-staff" name="24-7-staff" />
            <label for="24-7-staff">24/7 staff availability</label><br />
          </div>
          <div class="checkbox-title">
            <input
              type="checkbox"
              id="emergency-call-system"
              name="emergency-call-system"
            />
            <label for="emergency-call-system">Emergency call system</label><br
            />
          </div>
          <div class="checkbox-title">
            <input
              type="checkbox"
              id="social-services"
              name="social-services"
            />
            <label for="social-services">Social services</label><br />
          </div>
          <div class="checkbox-title">
            <input type="checkbox" id="security" name="security" />
            <label for="security">Security</label><br />
          </div>
          <div class="checkbox-title">
            <input
              type="checkbox"
              id="laundry-services"
              name="laundry-services"
            />
            <label for="laundry-services">Laundry services</label><br />
          </div>
          <div class="checkbox-title">
            <input type="checkbox" id="wifi-access" name="wifi-access" />
            <label for="wifi-access">Wi-Fi access</label><br />
          </div>
        </div>
        <div class="title">Accessibility features</div>
        <div class="checkbox-box">
          <div class="checkbox-title">
            <input
              type="checkbox"
              id="wheelchair-accessible"
              name="wheelchair-accessible"
            />
            <label for="wheelchair-accessible">Wheelchair Accessible</label><br
            />
          </div>
          <div class="checkbox-title">
            <input type="checkbox" id="ramps" name="ramps" />
            <label for="ramps">Ramps</label><br />
          </div>
          <div class="checkbox-title">
            <input type="checkbox" id="elevator" name="elevator" />
            <label for="elevator">Elevator</label><br />
          </div>
          <div class="checkbox-title">
            <input type="checkbox" id="grab-bars" name="grab-bars" />
            <label for="grab-bars">Grab Bars</label><br />
          </div>
          <div class="checkbox-title">
            <input type="checkbox" id="wide-doorways" name="wide-doorways" />
            <label for="wide-doorways">Wide Doorways</label><br />
          </div>
          <div class="checkbox-title">
            <input
              type="checkbox"
              id="accessible-parking"
              name="accessible-parking"
            />
            <label for="accessible-parking">Accessible Parking</label><br />
          </div>
        </div>
        <div class="title">Languages</div>
        <div class="checkbox-box">
          <div class="checkbox-title">
            <input type="checkbox" id="private-rooms" name="private-rooms" />
            <label for="private-rooms">German</label><br />
          </div>
          <div class="checkbox-title">
            <input type="checkbox" id="private-rooms" name="private-rooms" />
            <label for="private-rooms">French</label><br />
          </div>
          <div class="checkbox-title">
            <input type="checkbox" id="private-rooms" name="private-rooms" />
            <label for="private-rooms">Spanish</label><br />
          </div>
          <div class="checkbox-title">
            <input type="checkbox" id="private-rooms" name="private-rooms" />
            <label for="private-rooms">Chinese</label><br />
          </div>
          <div class="checkbox-title">
            <input type="checkbox" id="private-rooms" name="private-rooms" />
            <label for="private-rooms">Japanese</label><br />
          </div>
          <div class="checkbox-title">
            <input type="checkbox" id="private-rooms" name="private-rooms" />
            <label for="private-rooms">Hindi</label><br />
          </div>
        </div>
      </div>
      <div class="submit-button">
        <button class="submitButton" on:click="{() => goto(`/filtered`)}">
          Filter
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background-color: white;
    width: 600px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    max-height: 80%; /* Adjust maximum height as needed */
    overflow-y: auto; /* Add vertical scrollbar when content exceeds max height */
  }
  .title-report {
    color: black;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-weight: bold;
  }
  .title {
    font-size: x-large;
    font-weight: bold;
    margin-top: 30px;
  }
  .description {
    margin-left: 2px;
  }
  .modal-title {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0; /* Stick to the top */
    background-color: white; /* Ensure it covers the content */
    z-index: 1; /* Ensure it's above the content */
    padding: 10px 20px; /* Add padding for better appearance */
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Add shadow for separation */
    border-bottom: 1px solid #ccc; /* Add bottom border for separation */
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .cancelButton {
    border: none;
    font-weight: bold;
    background: none;
  }
  .submitButton {
    color: white;
    height: 50px;
    width: 180px;
    background-color: black;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  .submit-button {
    display: flex;
    flex-direction: row;
    justify-content: end;
    padding-right: 20px;
    padding-bottom: 20px;
  }
  /* Increase checkbox size */
  input[type='checkbox'] {
    transform: scale(1.5); /* Adjust the scale value as needed */
    margin-right: 10px; /* Add some space between the checkbox and text */
  }
  .checkbox-box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .checkbox-title {
    padding-left: 2px;
    padding-top: 10px;
  }
  .cancelButton:hover {
    cursor: pointer;
    color: red; /* Change color on hover */
  }
  .submitButton:hover {
    cursor: pointer;
    background-color: grey; /* Darken the background color on hover */
  }
  .scrollable-content {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 40px;
  }
</style>
