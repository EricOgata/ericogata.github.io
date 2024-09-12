<script lang="ts">
	import ThemeToggle from "../ThemeToggle/ThemeToggle.svelte";
	import { Logo, DownloadIcon, LinkButton } from "$lib";

	function scrollInto(id: string) {
		const targetElement = document.getElementById(id);
		targetElement?.scrollIntoView({
			behavior: "smooth",
		});
	}
</script>

<div class="flex w-full justify-between items-center gap-4">
	<Logo />
	<nav class="flex flex-1 items-center">
		<ul class="flex gap-8">
			<li class="flex items-center">
				<a href="#sobre" on:click|preventDefault={() => scrollInto("sobre")}
					>Sobre</a
				>
			</li>
			<li class="flex items-center">
				<a href="#contato" on:click|preventDefault={() => scrollInto("contato")}
					>Contato</a
				>
			</li>
		</ul>
	</nav>
	<ThemeToggle />
	<LinkButton>
		<div slot="icon" class="w-5 flex">
			<DownloadIcon />
		</div>
	</LinkButton>
</div>
