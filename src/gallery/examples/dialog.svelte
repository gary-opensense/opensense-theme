<script lang="ts">
	import * as Dialog from "$lib/components/ui/dialog/index.js";
	import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: "outline" })}>Edit profile</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Edit profile</Dialog.Title>
			<Dialog.Description>Make changes to your profile here. Click save when you're done.</Dialog.Description>
		</Dialog.Header>
		<div class="grid gap-4">
			<div class="grid gap-1.5"><Label for="dlg-name">Name</Label><Input id="dlg-name" value="Pedro Duarte" /></div>
			<div class="grid gap-1.5"><Label for="dlg-user">Username</Label><Input id="dlg-user" value="@peduarte" /></div>
		</div>
		<Dialog.Footer>
			<Dialog.Close class={buttonVariants({ variant: "outline" })}>Cancel</Dialog.Close>
			<Button type="submit">Save changes</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
