<script lang="ts">
	export let placeholder = "";
	export let type: string = "text";
	export let name: string = "";
</script>

<input
	{type}
	{name}
	{placeholder}
	class="rounded-md border-solid border-2 border-black dark:border-white bg-transparent"
/>
