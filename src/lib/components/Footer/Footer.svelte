<script>
	import { GithubIcon, LinkedinIcon, MailIcon } from "../Icons";
	import SocialsLink from "../SocialsLink/SocialsLink.svelte";
</script>

<div class="flex justify-between items-center">
	<div class="flex gap-2">
		<SocialsLink link="https://github.com/EricOgata">
			<GithubIcon slot="icon" />
		</SocialsLink>
		<SocialsLink link="https://www.linkedin.com/in/ogataeric/">
			<LinkedinIcon slot="icon" />
		</SocialsLink>
		<SocialsLink link="mailto:dev.ericogata@gmail.com">
			<MailIcon slot="icon" />
		</SocialsLink>
	</div>
	<span class="text-xs">© 2024 Eric Ogata. Todos os direitos reservados.</span>
</div>
<!-- <ContactContainer /> -->
