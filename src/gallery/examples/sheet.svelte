<script lang="ts">
	import * as Sheet from "$lib/components/ui/sheet/index.js";
	import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Label } from "$lib/components/ui/label/index.js";

	const sides = ["top", "right", "bottom", "left"] as const;
</script>

<div class="flex flex-wrap gap-2">
	{#each sides as side (side)}
		<Sheet.Root>
			<Sheet.Trigger class={buttonVariants({ variant: "outline" })}>Open {side}</Sheet.Trigger>
			<Sheet.Content {side}>
				<Sheet.Header>
					<Sheet.Title>Edit profile</Sheet.Title>
					<Sheet.Description>Make changes to your profile here.</Sheet.Description>
				</Sheet.Header>
				<div class="grid gap-4 p-4">
					<div class="grid gap-1.5"><Label for="sh-name-{side}">Name</Label><Input id="sh-name-{side}" value="Pedro Duarte" /></div>
				</div>
				<Sheet.Footer>
					<Button>Save changes</Button>
					<Sheet.Close class={buttonVariants({ variant: "outline" })}>Close</Sheet.Close>
				</Sheet.Footer>
			</Sheet.Content>
		</Sheet.Root>
	{/each}
</div>
