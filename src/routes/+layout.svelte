<script>
	import "../app.css";
	import { Navbar } from "$lib";

	export const prerender = true;
	export const trailingSlash = "always";
</script>

<div class="max-w-screen-md min-h-full m-auto flex flex-col">
	<Navbar />
	<slot />
</div>
