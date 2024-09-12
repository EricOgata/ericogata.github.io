<script>
	import { MeetingIllustration } from "$lib";
	import {
		ContainerHeader,
		TextInput,
		TextAreaInput,
		MailboxIcon,
	} from "$lib/components";
	import Button from "$lib/components/Button/Button.svelte";
</script>

<div class="flex flex-col items-start gap-2" id="contato">
	<ContainerHeader prefix="Vamos" title="Conversar" />
	<div class="flex gap-4">
		<form action="https://formspree.io/f/xjkbdger" method="POST">
			<div class="flex flex-col gap-5">
				<!-- <label>
					Your email:
					<input type="email" name="email" />
					</label>
					<label>
						Your message:
						<textarea name="message"></textarea>
						</label> -->
				<TextInput placeholder="Qual o seu nome?" name="name" />
				<TextInput placeholder="Email" name="email" type="email" />
				<TextInput placeholder="Seu site (mas só se você tiver)" name="site" />
				<TextAreaInput placeholder="Como eu posso te ajudar?" name="message" />
				<!-- your other form fields go here -->
				<Button type="submit">
					<span slot="text">Enviar</span>
					<div slot="icon" class="w-7 flex">
						<MailboxIcon />
					</div>
				</Button>
			</div>
		</form>
	</div>
</div>
