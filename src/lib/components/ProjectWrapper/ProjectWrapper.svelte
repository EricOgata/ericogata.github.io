<script lang="ts">
	import { ExportIcon } from "../Icons";

	export let index: number = 0;
	export let title: string = "";
	export let description: string = "";
	export let link: string = "";
	export let thumbnail: string = "";
	export let tecnologies: string[] = [];
</script>

<div
	class={`flex gap-16 flex-col-reverse  ${index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
>
	<div class="flex flex-col gap-4 h-full flex-1 text-left justify-center">
		<h1 class="text-xl font-bold">0{index + 1}.</h1>
		<h1 class="text-xl font-bold">{title}</h1>
		<p class="text-base">{description}</p>
		<p class="text-base">
			Tecnologias utilizadas: {tecnologies.join(", ")}
		</p>
		<a href={link} target="_blank" class="w-8"><ExportIcon /></a>
	</div>
	<img
		class="border-solid border object-cover w-full md:max-w-80 h-72 rounded-md border-black dark:border-white"
		src={thumbnail}
		alt={title}
	/>
</div>
