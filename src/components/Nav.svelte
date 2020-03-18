<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid #039be5;
    font-weight: 300;
    padding: 0 1em;
    background-color: white;
    box-shadow: 3px 3px 10px #039be5;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #0277bd;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  img {
    height: 32px;
    float: right;
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        <strong>Home</strong>
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">
        About
      </a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        Blog
      </a>
    </li>

    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'projects' ? 'page' : undefined}
        href="projects">
        Projects
      </a>
    </li>

    <li>
      <a href="https://github.com/fergusonB" target="_blank" rel="noreferrer">
        <img alt="github" src="./github.svg" />
      </a>
    </li>
    <li>

      <a
        href="https://www.linkedin.com/in/brendenferguson/"
        rel="noreferrer"
        target="_blank">
        <img alt="linkedin" src="./linkedin.svg" />
      </a>
    </li>
  </ul>

</nav>
