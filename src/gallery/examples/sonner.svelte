<script lang="ts" module>
	export const note = "Toasts render in the page-level <Toaster />, which follows the light/dark toggle.";
</script>

<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { toast } from "svelte-sonner";
</script>

<div class="flex flex-wrap gap-2">
	<Button variant="outline" onclick={() => toast("Event has been created", { description: "Sunday, December 03, 2023 at 9:00 AM", action: { label: "Undo", onClick: () => {} } })}>Default</Button>
	<Button variant="outline" onclick={() => toast.success("Event has been created")}>Success</Button>
	<Button variant="outline" onclick={() => toast.info("Be at the area 10 minutes before the event time")}>Info</Button>
	<Button variant="outline" onclick={() => toast.warning("Event start time cannot be earlier than 8am")}>Warning</Button>
	<Button variant="outline" onclick={() => toast.error("Event has not been created")}>Error</Button>
</div>
