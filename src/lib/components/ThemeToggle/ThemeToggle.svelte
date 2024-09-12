<script lang="ts">
	import { browser } from "$app/environment";
	import { darkMode } from "$lib/stores/stores";

	function handleSwitchDarkMode() {
		darkMode.update((value) => !value);
	}
	function updateDarkMode(isDarkMode = false) {
		if (!browser) return;
		isDarkMode
			? document.documentElement.classList.add("dark")
			: document.documentElement.classList.remove("dark");
	}
	darkMode.subscribe((newValue) => updateDarkMode(newValue));
</script>

<label for="dark-toggle" class="flex items-center cursor-pointer">
	<div class="relative">
		<input
			type="checkbox"
			name="dark-mode"
			id="dark-toggle"
			class="checkbox hidden"
			checked={$darkMode}
			on:click={handleSwitchDarkMode}
		/>
		<div
			class="block border-[2px] dark:border-white border-black w-14 h-8 rounded-full"
		></div>
		<div
			class="dot absolute left-1 top-1 dark:bg-white bg-black w-6 h-6 rounded-full transition"
		></div>
	</div>
</label>

<style>
	input:checked ~ .dot {
		transform: translateX(100%);
	}
</style>
