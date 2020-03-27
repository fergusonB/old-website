<script>
  import TwoFactorSum from "../../components/algorithms/TwoFactorSum.svelte";
  import ThreeFactorSum from "../../components/algorithms/ThreeFactorSum.svelte";

  let selector = 0;
</script>

<button on:click={(selector = 1)} />

{#if selector === 1}
  <TwoFactorSum />
{:else if selector === 2}
  <ThreeFactorSum />
{:else}Waiting for selection.{/if}
