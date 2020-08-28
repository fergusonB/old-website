import { writable } from 'svelte/store';

export let plates = writable([{ title: "To Do", notes:[{clicked:false,text:'Click me',summary:'Now try making a new plate'}] }]
);