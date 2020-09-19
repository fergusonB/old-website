<script lang="typescript">


    let data = [
        {
            user: { name: "Brenden", icon: "icon1.png" },
            title: "placeholder",
            media: "1.png",
            comments: [
                { user: 'brenden', text: "first comment", likes: 10 },
                { user: 'brenda', text: "second comment", likes: 3 },
            ],
            likes: 10,
            saved: false,
            tagged: ["John", "Jane"],
            location: ["Disneyland", 33.805625, -117.920085],
        },
        
    ];

    
    const moreData = ()=>{

            data = [...data,data[0]]

        
    }
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
    .icon {
        width: 20px;
        height: 20px;
    }
</style>

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
            <p>
                Likes: {post.likes}
            </p>
            
                Comments: <br />
                {#each post.comments as comment, i}
                <p>
                    {comment.user}
                    <br>{comment.text}
    
                    <br /> Likes: {comment.likes}
                    
                </p>
                {/each}
            
        </div>
    </div>
    <hr >



{/each}
<svelte:window  on:scroll={moreData}/>
