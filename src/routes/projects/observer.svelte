<script>
import Task from "../../components/observer/Task.svelte";
import Food from "../../components/observer/Food.svelte";
</script>

<svelte:head>
  <title>The Observer</title>
</svelte:head>

<style>
.container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
}
</style>

<h1>The Observer</h1>


<p>
    The Observer uses local storage, it does not record any of your data. The data is remembered only on this device; however, you may download and load the JSON to new devices.
</p>


<div class="container">

<div ><Task/></div>

<div><Food/></div>

</div>

