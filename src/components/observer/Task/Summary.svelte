<script lang="typescript">
    import {plates} from '../stores.js'
    export let note;


    const summary = {
        save: ()=>{
            $plates=$plates
        }
    }

</script>

<style>

</style>


<h3>Note: {note.text}</h3>

<h4> Summary:</h4>
<p>
   <textarea name="summary"  cols="30" rows="10"></textarea>

</p>


<div class="summary" >
{JSON.stringify(note)}
</div>
