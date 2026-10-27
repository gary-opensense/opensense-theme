<script lang="ts">
	import * as InputGroup from "$lib/components/ui/input-group/index.js";
	import SearchIcon from "@lucide/svelte/icons/search";
	import ArrowUpIcon from "@lucide/svelte/icons/arrow-up";
</script>

<div class="grid max-w-sm gap-4">
	<InputGroup.Root>
		<InputGroup.Input placeholder="Search..." />
		<InputGroup.Addon><SearchIcon /></InputGroup.Addon>
		<InputGroup.Addon align="inline-end">12 results</InputGroup.Addon>
	</InputGroup.Root>
	<InputGroup.Root>
		<InputGroup.Addon><InputGroup.Text>https://</InputGroup.Text></InputGroup.Addon>
		<InputGroup.Input placeholder="example.com" />
		<InputGroup.Addon align="inline-end"><InputGroup.Text>.com</InputGroup.Text></InputGroup.Addon>
	</InputGroup.Root>
	<InputGroup.Root>
		<InputGroup.Textarea placeholder="Ask, search or chat..." />
		<InputGroup.Addon align="block-end">
			<InputGroup.Button variant="outline" size="xs">Auto</InputGroup.Button>
			<InputGroup.Button variant="default" size="icon-xs" class="ml-auto rounded-full" aria-label="Send"><ArrowUpIcon /></InputGroup.Button>
		</InputGroup.Addon>
	</InputGroup.Root>
</div>
