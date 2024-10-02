<script lang="ts">
	import {
		ContainerHeader,
		ContainerWrapper,
		ProjectWrapper,
	} from "$lib/components";

	class Project {
		constructor(
			public title: string = "",
			public description: string = "",
			public link: string = "",
			public thumbnail: string = "",
			public tecnologies: string[] = []
		) {}
	}

	const PROJECTS = [
		new Project(
			"Meu site",
			"Você pode ver o código-fonte do site que você está vendo agora mesmo!",
			"https://github.com/EricOgata/ericogata.github.io",
			"mySite.webp",
			["JavaScript", "Svelte", "Tailwind"]
		),
		new Project(
			"BLACKFRIDAY GuardeAqui 2020/2021",
			"Durante dois anos seguidos, eu desenvolvi um jogo virtual para a empresa de self-storage GuardeAqui, aonde os clientes poderiam estourar balões virtuais para conseguir descontos.",
			"https://github.com/EricOgata/ericogata.github.io",
			"blackfriday.webp",
			["JavaScript", "React", "Laravel"]
		),
		new Project(
			"MeuRetiro",
			"Fiz parte da equipe responsável pelo desenvolvimento do marketplace MeuRetiro.",
			"https://www.meuretiro.com.br",
			"meuretiro.webp",
			["NextJS", "ElasticSearch"]
		),
	];
</script>

<ContainerWrapper id="projetos">
	<ContainerHeader prefix="Alguns" title="Projetos" />
	<div class="flex flex-col gap-28 w-full">
		{#each PROJECTS as project, index}
			<ProjectWrapper
				{index}
				title={project.title}
				description={project.description}
				link={project.link}
				thumbnail={project.thumbnail}
				tecnologies={project.tecnologies}
			/>
		{/each}
	</div>
</ContainerWrapper>
