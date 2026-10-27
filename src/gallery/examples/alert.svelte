<script lang="ts" module>
	export const note = "success, info and warning are Opensense additions; stock shadcn has default and destructive.";
</script>

<script lang="ts">
	import * as Alert from "$lib/components/ui/alert/index.js";
	import CircleAlertIcon from "@lucide/svelte/icons/circle-alert";
	import CircleCheckIcon from "@lucide/svelte/icons/circle-check";
	import InfoIcon from "@lucide/svelte/icons/info";
	import TriangleAlertIcon from "@lucide/svelte/icons/triangle-alert";
</script>

<div class="grid max-w-2xl gap-3">
	<Alert.Root>
		<InfoIcon />
		<Alert.Title>Heads up!</Alert.Title>
		<Alert.Description>You can add components to your app using the CLI.</Alert.Description>
	</Alert.Root>
	<Alert.Root variant="destructive">
		<CircleAlertIcon />
		<Alert.Title>Error</Alert.Title>
		<Alert.Description>Your session has expired. Please log in again.</Alert.Description>
	</Alert.Root>
	<Alert.Root variant="success">
		<CircleCheckIcon />
		<Alert.Title>Saved</Alert.Title>
		<Alert.Description>Your changes have been saved.</Alert.Description>
	</Alert.Root>
	<Alert.Root variant="info">
		<InfoIcon />
		<Alert.Title>New version available</Alert.Title>
		<Alert.Description>Refresh the page to get the latest features.</Alert.Description>
	</Alert.Root>
	<Alert.Root variant="warning">
		<TriangleAlertIcon />
		<Alert.Title>Trial ending</Alert.Title>
		<Alert.Description>Your trial ends in 3 days.</Alert.Description>
	</Alert.Root>
</div>
