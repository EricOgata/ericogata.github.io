<script lang="ts">
	import ThemeToggle from "../ThemeToggle/ThemeToggle.svelte";
	import { Logo, DownloadIcon, LinkButton } from "$lib";

	function scrollInto(id: string) {
		const targetElement = document.getElementById(id);
		targetElement?.scrollIntoView({
			behavior: "smooth",
		});
	}

	let menuOpen = false;

	const MENU_LINKS = [
		{
			href: "#sobre",
			text: "Sobre",
			onClick: () => scrollInto("sobre"),
		},
		// {
		// 	href: "#experiencias",
		// 	text: "Experiências",
		// 	onClick: () => scrollInto("experiencias"),
		// },
		{
			href: "#projetos",
			text: "Projetos",
			onClick: () => scrollInto("projetos"),
		},
		{
			href: "#contato",
			text: "Contato",
			onClick: () => scrollInto("contato"),
		},
	];
</script>

<nav class="mb-8 mt-7 md:mt-0 md:mb-14" aria-label="navbar-hamburger">
	<div class="flex w-full justify-between items-center gap-4">
		<Logo />
		<div class=" flex-1 items-center hidden md:flex justify-center">
			<ul class="flex gap-8 w-fit">
				{#each MENU_LINKS as link}
					<li class="flex items-center">
						<a
							class="hover:underline"
							href={link.href}
							on:click|preventDefault={link.onClick}>{link.text}</a
						>
					</li>
				{/each}
			</ul>
		</div>
		<div class="gap-4 hidden md:flex">
			<ThemeToggle />
			<LinkButton>
				<div slot="icon" class="w-5 flex">
					<DownloadIcon />
				</div>
			</LinkButton>
		</div>
		<div class="size-[80px] flex justify-center items-center md:hidden">
			<div class="flex w-14 h-10">
				<label for="hamburger-checkbox" class="hamburger-button">
					<input
						bind:checked={menuOpen}
						type="checkbox"
						id="hamburger-checkbox"
					/>
					<span></span>
					<span></span>
					<span></span>
				</label>
			</div>
		</div>
	</div>
	<div class="flex flex-col items-center w-full">
		<div
			id="mobile-navbar"
			class={`md:hidden w-full flex flex-col items-center`}
		>
			<ul
				class={`flex flex-col items-center transition-all duration-300 ease-in-out gap-4 w-full overflow-hidden h-fit ${
					menuOpen ? "max-h-96" : "max-h-0 invisible"
				}`}
			>
				{#each MENU_LINKS as link}
					<li class="flex items-center">
						<a
							class="hover:underline"
							href={link.href}
							on:click|preventDefault={link.onClick}>{link.text}</a
						>
					</li>
				{/each}
				<ThemeToggle />
				<LinkButton>
					<div slot="icon" class="w-5 flex">
						<DownloadIcon />
					</div>
				</LinkButton>
			</ul>
		</div>
	</div>
</nav>
