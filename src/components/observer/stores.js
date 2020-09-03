import { writable } from 'svelte/store';

export let plates = writable([{ title: "To Do", notes:[{clicked:false,text:'Click me',summary:'Now try making a new plate'}] }]);

export let note1 = writable([]);
export let note2 = writable([]);

export let dragTask = writable(true)
