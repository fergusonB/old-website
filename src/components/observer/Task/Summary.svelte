<script lang="typescript">
    import { plates } from "../stores.js";
    export let note;

    let title = ''

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
        },
        updateTitle: ()=>{
            note.text = title
            summ.save()
        }
    };

    if (note.summary){
        summ.text = note.summary
    }
    if (note.text){
        title = note.text
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
        z-index: 2;
    }
    textarea{
        width:100%;
        max-width: 500px;

    }
</style>

<div class="summary" on:click|self={()=>summ.exit()}>
    <div class="summaryPanel card">
        <button style="float:right;" on:click={() => summ.exit()}>❌</button>
        <h3>Note:</h3><input bind:value={title} on:blur={()=>summ.updateTitle()} type="text">

        <h4>Summary:</h4>
        
        <p>
            <textarea bind:value={summ.text} rows="10" name="summary" on:blur={()=>summ.updateSummary()}/>

        </p>
        {JSON.stringify(note)}
    </div>
</div>
