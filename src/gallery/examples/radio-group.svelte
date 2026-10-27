<script lang="ts">
	import * as RadioGroup from "$lib/components/ui/radio-group/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
</script>

<RadioGroup.Root value="comfortable">
	<div class="flex items-center gap-2"><RadioGroup.Item value="default" id="rg-1" /><Label for="rg-1">Default</Label></div>
	<div class="flex items-center gap-2"><RadioGroup.Item value="comfortable" id="rg-2" /><Label for="rg-2">Comfortable</Label></div>
	<div class="flex items-center gap-2"><RadioGroup.Item value="compact" id="rg-3" disabled /><Label for="rg-3">Compact (disabled)</Label></div>
</RadioGroup.Root>
