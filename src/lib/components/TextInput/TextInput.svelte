<script lang="ts">
	export let placeholder = "";
	export let type: string = "text";
	export let name: string = "";
	export let id: string = "";
</script>

<input
	{type}
	{name}
	{placeholder}
	{id}
	class="rounded-md border-solid border-2 border-black dark:border-white bg-transparent"
/>
