<script lang="ts" module>
	export const note = "success, info and warning are Opensense additions; the other variants are stock shadcn.";
</script>

<script lang="ts">
	import { Button, type ButtonVariant } from "$lib/components/ui/button/index.js";
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import PlusIcon from "@lucide/svelte/icons/plus";

	const variants: ButtonVariant[] = ["default", "secondary", "outline", "ghost", "destructive", "link"];
	const status: ButtonVariant[] = ["success", "info", "warning"];
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-wrap items-center gap-2">
		{#each variants as v (v)}<Button variant={v}>{v}</Button>{/each}
	</div>
	<div class="flex flex-wrap items-center gap-2">
		{#each status as v (v)}<Button variant={v}>{v}</Button>{/each}
		{#each status as v (v)}<Button variant={v} disabled>{v}</Button>{/each}
	</div>
	<div class="flex flex-wrap items-center gap-2">
		<Button size="sm">Small</Button>
		<Button>Default</Button>
		<Button size="lg">Large</Button>
		<Button size="icon" aria-label="Add"><PlusIcon /></Button>
		<Button variant="outline">Next <ArrowRightIcon data-icon="inline-end" /></Button>
		<Button disabled>Disabled</Button>
	</div>
</div>
