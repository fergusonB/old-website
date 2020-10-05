<script lang="typescript">
    import { onMount } from "svelte";
    import { onDestroy } from 'svelte';

    let sound: HTMLAudioElement;
    onMount(() => {
        sound = new Audio("beep.mp3");
    });

    export let time: number;
    time = time * 60;

    const initial: number = time;

    let countdown;
    let beeping;
    const countDown = () => {
        countdown = setInterval(() => {
            if (time > 0) {
                time--;
            } else {
                stop();
                beeping = setInterval(() => sound.play(), 200);
            }
        }, 1000);
    };
    const stop = () => clearInterval(countdown);

    const reset = () => {
        stop();
        time = initial;
    };

    const windowTimerOver = ()=>{
        if (time === 0) {
        clearInterval(beeping)
        reset()
    }
    }

    $: convertedTime = `${Math.floor(time / 60)}:${
        Math.floor(time % 60) < 10
            ? "0" + Math.floor(time % 60)
            : Math.floor(time % 60)
    }`;

    onDestroy(()=>{stop()})
</script>

<svelte:window on:mousemove={windowTimerOver} />

<h2>{convertedTime}</h2>

<br />

<button on:click={countDown}>Start</button>

<button on:click={stop}>Pause</button>

<button on:click={reset}>Reset</button>
