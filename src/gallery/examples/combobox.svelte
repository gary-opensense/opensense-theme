<script lang="ts" module>
	export const note = "A composition (Popover + Command), as in the docs — not a separate component. Pass disableInitialScroll to Command inside a Popover: otherwise it scrolls the page to the top on open.";
</script>

<script lang="ts">
	import * as Popover from "$lib/components/ui/popover/index.js";
	import * as Command from "$lib/components/ui/command/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import CheckIcon from "@lucide/svelte/icons/check";
	import ChevronsUpDownIcon from "@lucide/svelte/icons/chevrons-up-down";
	import { cn } from "$lib/utils.js";

	const frameworks = [
		{ value: "sveltekit", label: "SvelteKit" },
		{ value: "next.js", label: "Next.js" },
		{ value: "nuxt.js", label: "Nuxt.js" },
		{ value: "remix", label: "Remix" },
		{ value: "astro", label: "Astro" },
	];
	let open = $state(false);
	let value = $state("");
	const selected = $derived(frameworks.find((f) => f.value === value)?.label);
</script>

<Popover.Root bind:open>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button variant="outline" class="w-[200px] justify-between" role="combobox" aria-expanded={open} {...props}>
				{selected || "Select framework..."}
				<ChevronsUpDownIcon class="opacity-50" />
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content class="w-[200px] p-0">
		<Command.Root disableInitialScroll>
			<Command.Input placeholder="Search framework..." />
			<Command.List>
				<Command.Empty>No framework found.</Command.Empty>
				<Command.Group>
					{#each frameworks as f (f.value)}
						<Command.Item value={f.value} onSelect={() => { value = f.value; open = false; }}>
							<CheckIcon class={cn(value !== f.value && "opacity-0")} />
							{f.label}
						</Command.Item>
					{/each}
				</Command.Group>
			</Command.List>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
