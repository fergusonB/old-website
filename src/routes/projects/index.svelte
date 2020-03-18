<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<h1>Recent Projects</h1>

<ul>

  <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->

  <li>
    <a rel="prefetch" href="projects/youtube-blacklist">
      Youtube Blacklisted / Demonetized Word Finder
    </a>
  </li>

</ul>
