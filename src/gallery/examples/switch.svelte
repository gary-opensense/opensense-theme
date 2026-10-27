<script lang="ts">
	import { Switch } from "$lib/components/ui/switch/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
</script>

<div class="flex flex-col gap-3">
	<div class="flex items-center gap-2"><Switch id="sw-air" checked /><Label for="sw-air">Airplane mode</Label></div>
	<div class="flex items-center gap-2"><Switch id="sw-wifi" /><Label for="sw-wifi">Wi-Fi</Label></div>
	<div class="flex items-center gap-2"><Switch id="sw-off" disabled /><Label for="sw-off">Disabled</Label></div>
</div>
