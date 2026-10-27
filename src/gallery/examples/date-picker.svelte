<script lang="ts" module>
	export const note = "A composition (Popover + Calendar), as in the docs — not a separate component.";
</script>

<script lang="ts">
	import * as Popover from "$lib/components/ui/popover/index.js";
	import { Calendar } from "$lib/components/ui/calendar/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import CalendarIcon from "@lucide/svelte/icons/calendar";
	import { DateFormatter, getLocalTimeZone, type DateValue } from "@internationalized/date";

	const df = new DateFormatter("en-US", { dateStyle: "long" });
	let value = $state<DateValue | undefined>();
	let open = $state(false);
</script>

<Popover.Root bind:open>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button variant="outline" class="w-[240px] justify-start font-normal {value ? '' : 'text-muted-foreground'}" {...props}>
				<CalendarIcon />
				{value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date"}
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content class="w-auto p-0" align="start">
		<Calendar type="single" bind:value onValueChange={() => (open = false)} />
	</Popover.Content>
</Popover.Root>
