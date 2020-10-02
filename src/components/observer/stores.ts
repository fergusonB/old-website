import { writable } from 'svelte/store';

export let plates = writable([{"title":"To Do","notes":[{"text":"Click me","clicked":false,"summary":"Look at the checklist below","checklist":[{"name":"click me","checked":false},{"name":"select a color","checked":false},{"name":"make a new plate","checked":false},{"name":"make some new tasks","checked":false},{"name":"drag a plate around","checked":false},{"name":"drag some tasks around","checked":false}]}]}]);

export let note1 = writable([]);
export let note2 = writable([]);

export let dragTask = writable(true)
