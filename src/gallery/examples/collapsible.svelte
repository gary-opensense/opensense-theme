<script lang="ts">
	import * as Collapsible from "$lib/components/ui/collapsible/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import ChevronsUpDownIcon from "@lucide/svelte/icons/chevrons-up-down";

	let open = $state(true);
</script>

<Collapsible.Root bind:open class="flex w-[350px] flex-col gap-2">
	<div class="flex items-center justify-between gap-4 px-4">
		<h4 class="mb-0 text-sm font-medium">@peduarte starred 3 repositories</h4>
		<Collapsible.Trigger>
			{#snippet child({ props })}
				<Button variant="ghost" size="icon-sm" {...props}><ChevronsUpDownIcon /><span class="sr-only">Toggle</span></Button>
			{/snippet}
		</Collapsible.Trigger>
	</div>
	<div class="rounded-md border px-4 py-2 font-mono text-sm">@huntabyte/bits-ui</div>
	<Collapsible.Content class="flex flex-col gap-2">
		<div class="rounded-md border px-4 py-2 font-mono text-sm">@melt-ui/melt-ui</div>
		<div class="rounded-md border px-4 py-2 font-mono text-sm">@sveltejs/svelte</div>
	</Collapsible.Content>
</Collapsible.Root>
