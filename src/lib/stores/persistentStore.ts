import { browser } from "$app/environment";
import { writable } from "svelte/store";

export function persistent(key = "", initialValue: any | undefined = undefined) {
    const storedValue = browser ? localStorage.getItem(key) : undefined;
    const store = writable(storedValue ? JSON.parse(storedValue) : initialValue);
    store.subscribe(value => {
        if (!browser) return;
        if (value === undefined) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    })
    return store;
}