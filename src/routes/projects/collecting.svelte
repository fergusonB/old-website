<script lang="typescript">
    import { onMount } from "svelte";

    let data = [];

    onMount(async () => {
        if (localStorage.pokeAPIdata) {
            data = JSON.parse(localStorage.pokeAPIdata);
        } else {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon-form/1`);
            data = [await res.json()];
        }
    });

    const eventHandling = {
        doubleClick: (post) => {
            if (post["liked"]) {
                post.likes -= 1;
                post["liked"] = false;
            } else {
                post["liked"] = true;
                post.likes = post.likes + 1;
            }
            return post;
        },
    };

    // START Infinite scroll
    let scrollY;
    let innerHeight;

    $: currentPokemon = data.length + 1;
    let timer;
    let previousScroll = 0;
    const moreData = async () => {
        clearTimeout(timer);
        timer = setTimeout(async () => {
            if (scrollY > previousScroll) {
                const res = await fetch(
                    `https://pokeapi.co/api/v2/pokemon-form/${currentPokemon}`
                );
                data = [...data, await res.json()];
                localStorage.pokeAPIdata = JSON.stringify(data);
                currentPokemon += 1;
                previousScroll = scrollY;
            }
        }, 250);
    };
    // END Infinite scroll

    // START check if on our page
    let onPage = true;
    const handleMouseenter = () => {
        onPage = true;
    };
    const handleMouseleave = () => {
        onPage = false;
    };

    // END Check if on our page
</script>

<style>
    .post {
        display: grid;
        justify-content: center;
    }
    .postImage {
        width: 400px;
        height: 400px;
    }

    .onPage {
        display: flex;
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        z-index: 1;
        align-items: center;
        justify-content: center;
        opacity: 0.8;

        background-color: #ddd;
        font-size: 5em;
        text-align: center;
    }
    .liked {
        background-color: lightgreen;
    }
</style>

<svelte:window bind:innerHeight bind:scrollY on:scroll={moreData} />

<svelte:body
    on:mouseenter={handleMouseenter}
    on:mouseleave={handleMouseleave} />
{#if !onPage}
    <div class="onPage">
        I see you're losing interest. <br /> Let me get your attention back with
        this notification.
    </div>
{/if}

{#if data.length > 0}
    {#each data as post}
        <div
            on:dblclick|preventDefault={() => (post = eventHandling.doubleClick(post))}
            class:liked={post['liked']}
            class="post">
            <img
                class="postImage"
                src={post.sprites.front_default}
                alt={post.name} />
            <div>
                <p>img</p>
                <p>Likes:likes</p>

                Comments: <br />
            </div>
        </div>
        <hr />
    {/each}
{/if}
