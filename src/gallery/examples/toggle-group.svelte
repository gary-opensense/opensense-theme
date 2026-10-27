<script lang="ts">
	import * as ToggleGroup from "$lib/components/ui/toggle-group/index.js";
	import BoldIcon from "@lucide/svelte/icons/bold";
	import ItalicIcon from "@lucide/svelte/icons/italic";
	import UnderlineIcon from "@lucide/svelte/icons/underline";
</script>

<div class="flex flex-col items-start gap-4">
	<ToggleGroup.Root type="multiple" value={["bold"]}>
		<ToggleGroup.Item value="bold" aria-label="Toggle bold"><BoldIcon /></ToggleGroup.Item>
		<ToggleGroup.Item value="italic" aria-label="Toggle italic"><ItalicIcon /></ToggleGroup.Item>
		<ToggleGroup.Item value="underline" aria-label="Toggle underline"><UnderlineIcon /></ToggleGroup.Item>
	</ToggleGroup.Root>
	<ToggleGroup.Root type="single" variant="outline" spacing={0} value="center">
		<ToggleGroup.Item value="left">Left</ToggleGroup.Item>
		<ToggleGroup.Item value="center">Center</ToggleGroup.Item>
		<ToggleGroup.Item value="right">Right</ToggleGroup.Item>
	</ToggleGroup.Root>
</div>
