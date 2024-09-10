<script>
	export const prerender = true;
	import "../app.css";
	import { Navbar } from "$lib";
</script>

<div class="max-w-screen-md min-h-full m-auto flex flex-col">
	<Navbar />
	<slot />
</div>
