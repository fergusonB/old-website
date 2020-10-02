<script lang="typescript">
    export let time:number;
    time = time*60

    const initial:number = time;

    let countdown
    const countDown = ()=>{
        countdown = setInterval(()=>{
            if (time > 0){
                time--
            }
            else {
                stop()

                
            }
            
            
        },1000)
    }
    const stop = ()=> clearInterval(countdown)

    const reset = ()=>{
        stop()
        time = initial
    }

    $:convertedTime = `${Math.floor(time/60)}:${Math.floor(time%60) < 10 ? '0' + Math.floor(time%60) : Math.floor(time%60)}`



</script>


<h2>{convertedTime}</h2>

<br>

<button on:click={countDown}>Start</button>

<button on:click={stop}>Pause</button>

<button on:click={reset}>Restart</button>
