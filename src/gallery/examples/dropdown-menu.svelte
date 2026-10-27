<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import { buttonVariants } from "$lib/components/ui/button/index.js";

	let showStatus = $state(true);
	let position = $state("bottom");
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={buttonVariants({ variant: "outline" })}>Open menu</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56" align="start">
		<DropdownMenu.Label>My Account</DropdownMenu.Label>
		<DropdownMenu.Group>
			<DropdownMenu.Item>Profile<DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut></DropdownMenu.Item>
			<DropdownMenu.Item>Billing<DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut></DropdownMenu.Item>
			<DropdownMenu.Item disabled>Settings<DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut></DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.CheckboxItem bind:checked={showStatus}>Status bar</DropdownMenu.CheckboxItem>
		<DropdownMenu.Separator />
		<DropdownMenu.RadioGroup bind:value={position}>
			<DropdownMenu.RadioItem value="top">Top</DropdownMenu.RadioItem>
			<DropdownMenu.RadioItem value="bottom">Bottom</DropdownMenu.RadioItem>
		</DropdownMenu.RadioGroup>
		<DropdownMenu.Separator />
		<DropdownMenu.Sub>
			<DropdownMenu.SubTrigger>Invite users</DropdownMenu.SubTrigger>
			<DropdownMenu.SubContent>
				<DropdownMenu.Item>Email</DropdownMenu.Item>
				<DropdownMenu.Item>Message</DropdownMenu.Item>
			</DropdownMenu.SubContent>
		</DropdownMenu.Sub>
		<DropdownMenu.Separator />
		<DropdownMenu.Item variant="destructive">Log out<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut></DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
