<script lang="ts">
	import { AvatarDark, AvatarLight } from "$lib";
	import { darkMode } from "$lib/stores/stores";
	import { quintInOut } from "svelte/easing";
	import { crossfade } from "svelte/transition";

	let isDarkMode = false;

	darkMode.subscribe((value) => {
		isDarkMode = value;
	});
</script>

<div class="w-20">
	{#if isDarkMode}
		<AvatarDark />
	{:else}
		<AvatarLight />
	{/if}
</div>
