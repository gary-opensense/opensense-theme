<script lang="ts" module>
	export const note = "success, info and warning are Opensense additions; the other variants are stock shadcn.";
</script>

<script lang="ts">
	import { Badge, type BadgeVariant } from "$lib/components/ui/badge/index.js";
	import BadgeCheckIcon from "@lucide/svelte/icons/badge-check";

	const variants: BadgeVariant[] = ["default", "secondary", "destructive", "success", "info", "warning", "outline", "ghost", "link"];
</script>

<div class="flex flex-wrap items-center gap-2">
	{#each variants as v (v)}<Badge variant={v}>{v}</Badge>{/each}
	<Badge variant="secondary"><BadgeCheckIcon data-icon="inline-start" />Verified</Badge>
	<Badge class="min-w-5 rounded-full px-1 tabular-nums">8</Badge>
</div>
