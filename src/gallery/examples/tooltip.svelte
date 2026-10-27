<script lang="ts">
	import * as Tooltip from "$lib/components/ui/tooltip/index.js";
	import { buttonVariants } from "$lib/components/ui/button/index.js";
</script>

<div class="flex flex-wrap gap-2">
	{#each ["top", "right", "bottom", "left"] as const as side (side)}
		<Tooltip.Root>
			<Tooltip.Trigger class={buttonVariants({ variant: "outline" })}>{side}</Tooltip.Trigger>
			<Tooltip.Content {side}>Add to library</Tooltip.Content>
		</Tooltip.Root>
	{/each}
</div>
