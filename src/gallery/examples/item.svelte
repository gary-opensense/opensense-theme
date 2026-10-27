<script lang="ts">
	import * as Item from "$lib/components/ui/item/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import BadgeCheckIcon from "@lucide/svelte/icons/badge-check";
	import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
</script>

<div class="flex max-w-md flex-col gap-4">
	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>Basic item</Item.Title>
			<Item.Description>A simple item with title and description.</Item.Description>
		</Item.Content>
		<Item.Actions><Button variant="outline" size="sm">Action</Button></Item.Actions>
	</Item.Root>
	<Item.Root variant="muted" size="sm">
		{#snippet child({ props })}
			<a href="#/item" {...props}>
				<Item.Media><BadgeCheckIcon class="size-5" /></Item.Media>
				<Item.Content><Item.Title>Your profile has been verified.</Item.Title></Item.Content>
				<Item.Actions><ChevronRightIcon class="size-4" /></Item.Actions>
			</a>
		{/snippet}
	</Item.Root>
</div>
