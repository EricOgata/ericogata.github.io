<script lang="ts">
	export let placeholder = "";
	export let name: string = "";
	export let id: string = "";
</script>

<textarea
	class="rounded-md border-solid border-2 border-black dark:border-white bg-transparent"
	{placeholder}
	{name}
	{id}
/>
