<script lang="ts">
	import { RangeCalendar } from "$lib/components/ui/range-calendar/index.js";
	import { getLocalTimeZone, today } from "@internationalized/date";

	const start = today(getLocalTimeZone());
	let value = $state({ start, end: start.add({ days: 7 }) });
</script>

<RangeCalendar bind:value class="w-fit rounded-lg border shadow-sm" />
