<script>
  import TwoFactorSum from "../../components/algorithms/TwoFactorSum.svelte";
  import ThreeFactorSum from "../../components/algorithms/ThreeFactorSum.svelte";

  let state = "";

  const setState = value => {
    state = value;
  };
</script>

<button on:click={() => setState('TwoFactorSum')}>Two Factor Sum</button>
<button on:click={() => setState('ThreeFactorSum')}>Three Factor Sum</button>

<p>
  {#if state == 'TwoFactorSum'}
    <TwoFactorSum />
  {:else if state == 'ThreeFactorSum'}
    <ThreeFactorSum />
  {:else}
    <!-- else content here -->
  {/if}
</p>
