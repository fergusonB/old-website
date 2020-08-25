<script lang="typescript">
    export let title = "Placeholder"
    export let notes = []

    const newNote = {
        text: 'Add a new note',

        create: ()=>{
            if (newNote.text !== ''){
                notes = [...notes,{text:newNote.text}]

            } 
            else newNote.text = 'Add a new note'
            
        }
    }

</script>
<style>

    
    .plate{
        height:99%;
        min-width:300px;
        max-width:300px;
        flex:1;
        overflow:scroll;
    }
    input{
        width:90%;
    }
    h3{
        background-color:#ddd;
        text-align: center;
    }
    
</style>


<div class ="card plate">
    
    <h3>{title}</h3>

    {#each notes as note}
        <div>{note.text}</div>
        
    {/each}
    <input on:click={()=>newNote.text = ''} on:blur={()=>newNote.create()} bind:value={newNote.text} type="text">



</div>
