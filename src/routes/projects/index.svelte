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

<h2>Projects</h2>
<ul>
  <li>
    <a rel="prefetch" href="projects/imdb">
      IMDB Ratings Table Generator 
    </a>
  </li>

  <li>
    <a rel="prefetch" href="projects/algorithms">
      Common Algorithms Library + Optimal Time/Space Complexity Reference
    </a>
  </li>

    <li>
    <a rel="prefetch" href="projects/observer">
      The Observer (WIP)
    </a>
  </li>

  <li>
    <a rel="prefetch" href="projects/minecraft-dungeons-save-editor">
      Dungeons Save Editor
    </a>
  </li>


</ul>


<h2>Exercises</h2>
<ul>

  <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->

  <li>
    <a rel="prefetch" href="projects/statistics">
      Quick Statistics Reference
    </a>
  </li>




  <li>
    <a rel="prefetch" href="projects/osrs-dps-calculator">
      OSRS DPS Calculator
    </a>
  </li>

  <li>
    <a rel="prefetch" href="projects/youtube-blacklist">
      Youtube Blacklisted / Demonetized Word Finder
    </a>
  </li>

    <li>
    <a rel="prefetch" href="projects/rock-paper-scissors">
      Rock, Paper, Scissors
    </a>
  </li>
    <li>
    <a rel="prefetch" href="projects/tic-tac-toe">
      Tic Tac Toe
    </a>
  </li>
</ul>
