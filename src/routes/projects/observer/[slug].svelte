<script context="module">

	export async function preload(page, session) {

		const { slug } = page.params;



		return {slug};
	}
</script>

<script>


    import {onMount,afterUpdate} from 'svelte'
    import { goto } from '@sapper/app';
    export let slug
    
    
    
    onMount(()=>{
        slug = atob(slug)
        localStorage.task = slug
        goto('projects/observer')
    } 
    )
    
</script>


