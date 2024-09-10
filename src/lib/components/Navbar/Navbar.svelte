<script>
	import ThemeToggle from "../ThemeToggle/ThemeToggle.svelte";
	import { Logo } from "$lib";
</script>

<div class="flex w-full justify-between align-middle gap-4">
	<Logo />
	<nav class="flex flex-1 align-middle">
		<ul class="flex gap-8">
			<li class="flex items-center">
				<a href="#Sobre">Sobre</a>
			</li>
			<li class="flex items-center">
				<a href="#Contato">Contato</a>
			</li>
		</ul>
	</nav>
	<ThemeToggle />
</div>
