<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
</script>

<Card.Root class="w-full max-w-sm">
	<Card.Header>
		<Card.Title>Login to your account</Card.Title>
		<Card.Description>Enter your email below to login to your account</Card.Description>
		<Card.Action><Button variant="link" class="px-0">Sign up</Button></Card.Action>
	</Card.Header>
	<Card.Content>
		<div class="flex flex-col gap-4">
			<div class="grid gap-1.5">
				<Label for="card-email">Email</Label>
				<Input id="card-email" type="email" placeholder="m@example.com" />
			</div>
			<div class="grid gap-1.5">
				<Label for="card-password">Password</Label>
				<Input id="card-password" type="password" />
			</div>
		</div>
	</Card.Content>
	<Card.Footer class="flex-col gap-2">
		<Button class="w-full">Login</Button>
		<Button variant="outline" class="w-full">Login with Google</Button>
	</Card.Footer>
</Card.Root>
