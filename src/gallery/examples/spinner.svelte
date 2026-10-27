<script lang="ts">
	import { Spinner } from "$lib/components/ui/spinner/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import { Badge } from "$lib/components/ui/badge/index.js";
</script>

<div class="flex flex-wrap items-center gap-6">
	<Spinner />
	<Spinner class="size-6" />
	<Spinner class="size-8 text-primary" />
	<Button disabled><Spinner />Loading…</Button>
	<Badge variant="secondary"><Spinner />Syncing</Badge>
</div>
