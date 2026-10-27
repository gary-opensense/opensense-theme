<script lang="ts">
	import { Slider } from "$lib/components/ui/slider/index.js";

	let single = $state(50);
	let range = $state([25, 75]);
</script>

<div class="grid max-w-sm gap-6">
	<Slider type="single" bind:value={single} max={100} step={1} />
	<Slider type="multiple" bind:value={range} max={100} step={1} />
	<Slider type="single" value={40} disabled />
</div>
