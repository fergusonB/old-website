<script>
    import { fade } from "svelte/transition";

    let projects = [
        { title: "The Observer", href: "projects/observer" },
        { title: "IMDB Ratings Table Generator", href: "projects/imdb" },
        {
            title: "Dungeons Save Editor",
            href: "projects/minecraft-dungeons-save-editor",
        },
    ];
    let exercises = [
        { title: "Quick Statistics Reference", href: "projects/statistics" },
        { title: "Pomodoro Timer", href: "projects/pomodoro" },
        { title: "OSRS DPS Calc", href: "projects/osrs-dps-calculator" },
    ];
</script>

<style>
    ul {
        margin: 0 0 1em 0;
        line-height: 1.5;
    }
</style>

<svelte:head>
    <title>Projects</title>
</svelte:head>
<div in:fade>
    <h1>Recent Projects</h1>

    <h2>Projects</h2>
    <ul>
        {#each projects as project}
            <li><a rel="prefetch" href={project.href}> {project.title} </a></li>
        {/each}
    </ul>

    <h2>Exercises</h2>
    <ul>
        {#each exercises as exercise}
            <li>
                <a rel="prefetch" href={exercise.href}> {exercise.title} </a>
            </li>
        {/each}
    </ul>
</div>
