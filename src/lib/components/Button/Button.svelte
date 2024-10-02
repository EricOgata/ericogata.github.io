<script lang="ts">
	type ButtonType = "button" | "submit" | "reset" | null | undefined;
	export let type: ButtonType = "button";
</script>

<button
	{type}
	class="rounded h-fit py-3 px-4 text-xl bg-black text-white dark:bg-white dark:text-black"
>
	<div class="flex align-middle gap-2">
		<slot name="text" />
		<slot name="icon">Icon</slot>
	</div>
</button>
