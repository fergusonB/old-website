<script>
  import {fade} from 'svelte/transition'
</script>

<style>
  h1,
  h2,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Brenden Ferguson</title>
</svelte:head>

<h1 in:fade>Hello! I'm Brenden.</h1>
<h2 in:fade>
  <p>
    Please check out some of my <a rel="prefetch" href="/projects">projects</a> or my <a rel="prefetch" href="/blog">blog</a>.
    <br />
    <br />
    
    <br>
  </p>
</h2>
