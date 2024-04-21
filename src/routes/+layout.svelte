<script>
  import Header from './Header.svelte';
  import '../app.css';
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <footer>
    <p>Terms of Use</p>
    <p>Privacy Policy</p>
    <p>Cookie Information</p>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    align-items: center;
    padding: 12px;
    background-color: beige;
    font-size: small;
    margin-top: 40px;
    flex-direction: row;
    justify-content: space-around;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
