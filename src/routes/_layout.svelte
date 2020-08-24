<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";


  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 95em;

    padding:1em;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .main-container {
 min-height: 100vh; /* will cover the 100% of viewport */
 overflow: hidden;
 display: block;
 position: relative;
 padding-bottom: 100px; /* height of your footer */
}
</style>
<div class="main-container">
<Nav {segment} />

<main>
  <div class>
    <slot />
  </div>

</main>

</div>