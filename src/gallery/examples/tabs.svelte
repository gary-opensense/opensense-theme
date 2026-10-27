<script lang="ts">
	import * as Tabs from "$lib/components/ui/tabs/index.js";
</script>

<div class="grid max-w-md gap-6">
	<Tabs.Root value="account">
		<Tabs.List>
			<Tabs.Trigger value="account">Account</Tabs.Trigger>
			<Tabs.Trigger value="password">Password</Tabs.Trigger>
			<Tabs.Trigger value="disabled" disabled>Disabled</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="account" class="pt-2">Make changes to your account here.</Tabs.Content>
		<Tabs.Content value="password" class="pt-2">Change your password here.</Tabs.Content>
	</Tabs.Root>
	<Tabs.Root value="overview">
		<Tabs.List variant="line">
			<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
			<Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
			<Tabs.Trigger value="reports">Reports</Tabs.Trigger>
		</Tabs.List>
	</Tabs.Root>
</div>
