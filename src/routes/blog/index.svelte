<script context="module" lang="ts">
 import {fade} from 'svelte/transition'
  
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r: { json: () => any; }) => r.json())
      .then((posts: { slug: string; title: string, html: any }[]) => {
        return { posts };
      });
  }
</script>

<script lang="ts">
  export let posts: { slug: string; title: string, html: any }[];
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1 in:fade>Recent Articles</h1>


{#if posts.length > 0}
   
<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->

    <li in:fade>
      <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul>

{:else}
   <p>Nothing here yet.</p>
{/if}
