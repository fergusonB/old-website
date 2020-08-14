<script>
    export let segment;

    let screenWideEnough = true;
    if (process.browser) {
        screenWideEnough = screen.width > 350;
    }
</script>

<style>
    nav {
        font-weight: 400;
        padding: 0 1em;
        background-color: #121212;
        color: white;
        box-shadow: 1px 1px 4px 1px rgba(51, 51, 51, 0.2);
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
        height: 3px;
        background-color: white;
        display: block;
        bottom: -1px;
    }

    a {
        text-decoration: none;
        padding: 1em 0.5em;
        display: block;
    }
    a:hover {
        background-color: black;
    }
    img {
        display: flex;
        height: auto;
        width: 24px;
        filter: invert(1);
    }
</style>

<nav>
    <ul>
        <li>
            <a
                aria-current={segment === undefined ? 'page' : undefined}
                href=".">
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

        {#if screenWideEnough}
            <li>
                <a
                    href="https://github.com/fergusonB"
                    target="_blank"
                    rel="noreferrer">
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
        {/if}

    </ul>

</nav>
