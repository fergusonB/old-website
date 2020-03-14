<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
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
<p>
  <strong>
    <h1>Hello! I'm Brenden.</h1>
    <h3>
      I've been making websites for 15 years for fun.
      <br />
      Recently I decided to do it professionally.
    </h3>
  </strong>
</p>

<p>
  <a href="https://github.com/fergusonB" target="_blank">
    <img style="width:64px" src="./assets/gh.png" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/brendenferguson/" target="_blank">
    <img style="width:64px" src="./assets/li.png" alt="LinkedIn" />
  </a>
</p>

<figure>
  <img alt="my face" src="./assets/face.jpg" />
</figure>
