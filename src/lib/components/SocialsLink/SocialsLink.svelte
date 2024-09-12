<script lang="ts">
	export let link = "/";
</script>

<div class="size-5">
	<a href={link} class="w-full" target="_blank">
		<slot name="icon">No Icon was provided</slot>
	</a>
</div>
