<script lang="ts">
	import { Calendar } from "$lib/components/ui/calendar/index.js";
	import { getLocalTimeZone, today } from "@internationalized/date";

	let value = $state(today(getLocalTimeZone()));
</script>

<Calendar type="single" bind:value class="rounded-lg border shadow-sm w-fit" />
