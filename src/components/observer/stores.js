import { writable } from 'svelte/store';

export const plates = writable([{ title: "To Do" }, { title: "Doing" }, { title: "Done" }]
);