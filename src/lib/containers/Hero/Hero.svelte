<script lang="ts">
	import { ContainerHeader, ContainerWrapper } from "$lib/components";
	import PictureWrapper from "$lib/components/PictureWrapper/PictureWrapper.svelte";

	function scrollInto(id: string) {
		const targetElement = document.getElementById(id);
		targetElement?.scrollIntoView({
			behavior: "smooth",
		});
	}
</script>

<ContainerWrapper id="hero">
	<div
		class="flex items-center gap-5 justify-between w-full flex-col md:flex-row"
	>
		<div class="flex flex-1 flex-col gap-6">
			<div class="text-left">
				<ContainerHeader prefix="Olá, eu sou" title="Eric Ogata" />
			</div>
			<div class="flex flex-1 flex-col items-start gap-2">
				<p class="text-left">
					Sou um desenvolvedor full-stack paulistano com +10 anos de
					experiência. Minhas especialidades são React & Laravel.
				</p>
				<p>
					Vamos <a
						class="underline"
						href={"#contato"}
						on:click|preventDefault={() => scrollInto("contato")}>conversar</a
					>!
				</p>
			</div>
		</div>
		<PictureWrapper imgUrl="/profile.webp" />
	</div>
</ContainerWrapper>
