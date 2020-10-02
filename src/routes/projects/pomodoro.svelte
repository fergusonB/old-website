<script lang="typescript">
    import Timer from "../../components/Timer.svelte";

    let state: string = "work";
</script>

<style>
    .pomo {
        display: grid;
        justify-content: center;
        text-align: center;
    }

    .selected {
        color: lightgreen;
    }
</style>

<svelte:head>
    <title>Pomodoro Timer</title>
</svelte:head>
<div class="pomo">
    <p>
        <button
            class:selected={state === 'work'}
            on:click={() => (state = 'work')}>Work</button>
        <button
            class:selected={state === 'break'}
            on:click={() => (state = 'break')}>Break</button>
        <button
            class:selected={state === 'long break'}
            on:click={() => (state = 'long break')}>Long Break</button>
    </p>

    <div>
        {#if state === 'work'}
            <h2>Work</h2>

            <p>
                <Timer time={25} />
            </p>
        {:else if state === 'break'}
            <h2>Short Break</h2>
            <p>
                <Timer time={5} />
            </p>
            
        {:else}
            <h2>Long Break</h2>
            <p><Timer time={10} /></p>
            
        {/if}
    </div>
</div>
