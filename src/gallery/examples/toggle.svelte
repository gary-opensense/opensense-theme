<script lang="ts">
	import { Toggle } from "$lib/components/ui/toggle/index.js";
	import BoldIcon from "@lucide/svelte/icons/bold";
	import ItalicIcon from "@lucide/svelte/icons/italic";
	import UnderlineIcon from "@lucide/svelte/icons/underline";
</script>

<div class="flex flex-wrap items-center gap-2">
	<Toggle aria-label="Toggle bold"><BoldIcon /></Toggle>
	<Toggle aria-label="Toggle italic" pressed><ItalicIcon /></Toggle>
	<Toggle variant="outline" aria-label="Toggle underline"><UnderlineIcon /> Underline</Toggle>
	<Toggle disabled aria-label="Disabled"><BoldIcon /></Toggle>
</div>
