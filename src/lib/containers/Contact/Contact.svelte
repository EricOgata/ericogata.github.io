<script lang="ts">
	import { addToast } from "as-toast";

	import { browser } from "$app/environment";
	import {
		ContainerHeader,
		TextInput,
		TextAreaInput,
		ContainerWrapper,
		Button,
		PlaneIcon,
	} from "$lib/components";

	// TODO: Trigger submit event by AJAX;
	function submitForm(event) {
		if (!browser) return;
		console.log(event.target.action);
		let name: string | null =
			document.getElementById("contact_form_name")?.value;
		let email: string | null =
			document.getElementById("contact_form_email")?.value;
		let site: string | null =
			document.getElementById("contact_form_site")?.value;
		let message: string | null = document.getElementById(
			"contact_form_message"
		)?.value;

		let data = {
			name,
			email,
			site,
			message,
		};

		fetch(event.target.action, {
			method: "post",
			body: JSON.stringify(data),
			headers: {
				Accept: "application/json",
			},
		})
			.then((response) => {
				if (response.status === 200) {
					return addToast(
						"Mensagem enviada com sucesso! Agora é só aguardar.",
						"info",
						3000
					);
				}
				return addToast(
					"Opss.. Algo aconteceu. Mas tudo bem, você sempre pode tentar novamente.",
					"warn",
					3000
				);
			})
			.catch(() => {});
	}
</script>

<ContainerWrapper id="contato">
	<ContainerHeader prefix="Vamos" title="Conversar?" />
	<div class="flex mt-4 gap-4 w-full">
		<form
			action="https://formspree.io/f/xjkbdger"
			on:submit|preventDefault={submitForm}
			method="POST"
			class="w-full"
			id="contact_form"
		>
			<div class="flex flex-col gap-5 w-full justify-end">
				<TextInput
					placeholder="Qual o seu nome?"
					name="name"
					id="contact_form_name"
				/>
				<TextInput
					placeholder="Email"
					name="email"
					type="email"
					id="contact_form_email"
				/>
				<TextInput
					placeholder="Seu site (mas só se você tiver)"
					name="site"
					id="contact_form_site"
				/>
				<TextAreaInput
					placeholder="Como eu posso te ajudar?"
					name="message"
					id="contact_form_message"
				/>
				<div class="self-end">
					<Button type="submit">
						<span slot="text">Enviar</span>
						<div slot="icon" class="w-7 flex">
							<PlaneIcon />
						</div>
					</Button>
				</div>
			</div>
		</form>
	</div>
</ContainerWrapper>
