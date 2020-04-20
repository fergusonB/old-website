<script>


if(process.browser){
    if (!localStorage.gold){
        localStorage.gold = 0
        
    }
}

let gold = localStorage.gold

</script>



{#if process.browser}
    {gold}
     <button  on:click={()=>{localStorage.gold = Number(localStorage.gold)+5000}} on:click={()=>gold= localStorage.gold}>hit</button>
{:else}
     Loading...
{/if}

