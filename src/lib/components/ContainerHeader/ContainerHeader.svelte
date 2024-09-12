<script lang="ts">
	export let title = "";
	export let prefix = "";
</script>

<!-- 
<div
	class="before:absolute before:bg-black before:content-[' '] before:w-[20px] before:h-[2px] before:translate-y-full"
>
	<h2 class="text-5xl">{title}</h2>
</div> -->
<h2
	class="text-4xl relative before:absolute before:dark:bg-white before:bg-black before:content-[' ']
    before:w-[64px] before:h-[2px] before:bottom-0 before:left-0 before:translate-x-0 before:translate-y-1"
>
	{prefix}
	<span class="font-extrabold">
		{title}
	</span>
</h2>
