<script lang="ts">
	import { Checkbox } from "$lib/components/ui/checkbox/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
</script>

<div class="flex flex-col gap-3">
	<div class="flex items-center gap-2"><Checkbox id="cb-terms" checked /><Label for="cb-terms">Accept terms and conditions</Label></div>
	<div class="flex items-center gap-2"><Checkbox id="cb-news" /><Label for="cb-news">Subscribe to the newsletter</Label></div>
	<div class="flex items-center gap-2"><Checkbox id="cb-off" disabled /><Label for="cb-off">Disabled</Label></div>
</div>
