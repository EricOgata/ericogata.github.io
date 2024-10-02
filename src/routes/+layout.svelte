<script lang="ts">
	import "../app.css";
	import { Navbar, Footer } from "$lib";
	import { Toasts } from "as-toast";
</script>

<div class="max-w-screen-md min-h-full mx-auto flex flex-col px-2 pb-2">
	<Navbar />
	<div class="flex flex-1">
		<slot />
	</div>
	<Footer />
</div>

<Toasts />
