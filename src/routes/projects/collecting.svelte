<script lang="typescript">



    let data = [
        {
            user: { name: "Brenden", icon: "icon1.png" },
            title: "Snowy Trees",
            media: "1.png",
            comments: [
                { user: "brenden", text: "These are my favorite trees.", likes: 10 },
                { user: "brenda", text: "I also enjoy these trees.", likes: 3 },
            ],
            likes: 10,
            saved: false,
            tagged: ["Brenden", "Brenda"],
            location: ["Swiss Alps", 46.4776442,8.6307331],
        },
        {
            user: { name: "Brenda", icon: "2.png" },
            title: "Anchor",
            media: "2.png",
            comments: [
                { user: "Gregg", text: "That's a fine anchor.", likes: 1 },
                { user: "Tatiana", text: "Totally nautical.", likes: 8 },
            ],
            likes: 40,
            saved: true,
            tagged: ["Brenda,","Gregg", "Tatiana"],
            location: ["Harbor", 33.461779, -117.698863],
        },
        {
            user: { name: "Caris", icon: "3.png" },
            title: "Leaves",
            media: "3.png",
            comments: [
                { user: "Abby", text: "Great leaves.", likes: 35 },
                { user: "Brenda", text: "I like the bird", likes: 50 },
            ],
            likes: 82,
            saved: false,
            tagged: ["Caris"],
            location: ["Disneyland", 33.805625, -117.920085],
        },
    ];

    // START Infinite scroll
    let scrollY;
    let innerHeight;


    const moreData = () => {
        if (
            (scrollY % innerHeight) / innerHeight > 0.8 ||
            data.length < 5 ||
            scrollY % innerHeight === innerHeight
        ) {
            data = [...data, data[data.length%3]];
        }
    };
    // END Infinite scroll

    // START Check if on our page
    let onPage = true
    const handleMouseenter = ()=>{
        onPage = true
    }
    const handleMouseleave = () =>{
        onPage = false
    }

    // END Check if on our page
</script>

<svelte:window bind:innerHeight bind:scrollY on:scroll={moreData} />

<svelte:body
    on:mouseenter={handleMouseenter}
    on:mouseleave={handleMouseleave} />


<style>

    .post {
        display: grid;
        justify-content: center;
    }
    .postImage {
        width: 400px;
        height: 400px;
    }
    .icon {
        width: 20px;
        height: 20px;
    }
    .onPage{
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

</style>

{#if !onPage}
     <div class="onPage">I see you're losing interest.
         <br> Let me get your attention back.</div>
{/if}


{#each data as post}
    <div class="post">
        <img
            class="postImage"
            src={'collecting/' + post.media}
            alt={post.title} />
        <div>
            <p>
                <img
                    class="icon"
                    src={'collecting/' + post.user.icon}
                    alt={post.user.name} />{post.user.name} | Location: {post.location}
            </p>
            <p>Likes: {post.likes}</p>

            Comments: <br />
            {#each post.comments as comment, i}
                <p>
                    {comment.user}
                    <br />{comment.text}

                    <br /> Likes: {comment.likes}
                </p>
            {/each}
        </div>
    </div>
    <hr />
{/each}
