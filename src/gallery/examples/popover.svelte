<script lang="ts">
	import * as Popover from "$lib/components/ui/popover/index.js";
	import { buttonVariants } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
</script>

<Popover.Root>
	<Popover.Trigger class={buttonVariants({ variant: "outline" })}>Open popover</Popover.Trigger>
	<Popover.Content class="w-80">
		<Popover.Header>
			<Popover.Title>Dimensions</Popover.Title>
			<Popover.Description>Set the dimensions for the layer.</Popover.Description>
		</Popover.Header>
		<div class="grid gap-2">
			<div class="grid grid-cols-3 items-center gap-4"><Label for="pop-w">Width</Label><Input id="pop-w" value="100%" class="col-span-2 h-8" /></div>
			<div class="grid grid-cols-3 items-center gap-4"><Label for="pop-h">Height</Label><Input id="pop-h" value="25px" class="col-span-2 h-8" /></div>
		</div>
	</Popover.Content>
</Popover.Root>
