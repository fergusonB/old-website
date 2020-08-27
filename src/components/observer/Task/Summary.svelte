<script lang="typescript">
    import { plates } from "../stores.js";
    export let note;

    const summ = {
        text : '',

        save: () => {
            $plates = $plates;
        },
        exit: () => {
            note.clicked = !note.clicked;
            summ.save();
        },
        updateSummary: ()=>{
            note.summary = summ.text
            summ.save()
        }
    };

    if (note.summary){
        summ.text = note.summary
    }
</script>

<style>
    .summary {
        display: flex;
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: #ddd;
        opacity: 0.9;
        height: 100%;
        width: 100%;
        z-index: 1;
        align-items: center;
        justify-content: center;
    }
    .summaryPanel {
        display: block;
        width: 80%;
        max-width: 500px;
    }
    textarea{
        width:100%;
        max-width: 500px;

    }
</style>

<div class="summary">
    <div class="summaryPanel card">
        <button style="float:right;" on:click={() => summ.exit()}>❌</button>
        <h3>Note: {note.text}</h3>

        <h4>Summary:</h4>
        
        <p>
            <textarea bind:value={summ.text} rows="10" name="summary" on:blur={()=>summ.updateSummary()}/>

        </p>
        {JSON.stringify(note)}
    </div>
</div>
