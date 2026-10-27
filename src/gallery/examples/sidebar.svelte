<script lang="ts" module>
	export const note = "Shown inline (collapsible=\"none\") so it fits on the page; in an app it docks to the viewport edge. Colours are the --sidebar tokens (Opensense app navy).";
</script>

<script lang="ts">
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import HouseIcon from "@lucide/svelte/icons/house";
	import InboxIcon from "@lucide/svelte/icons/inbox";
	import CalendarIcon from "@lucide/svelte/icons/calendar";
	import SearchIcon from "@lucide/svelte/icons/search";
	import SettingsIcon from "@lucide/svelte/icons/settings";

	const items = [
		{ title: "Home", icon: HouseIcon, active: true },
		{ title: "Inbox", icon: InboxIcon, badge: "24" },
		{ title: "Calendar", icon: CalendarIcon },
		{ title: "Search", icon: SearchIcon },
		{ title: "Settings", icon: SettingsIcon },
	];
</script>

<Sidebar.Provider class="min-h-0 w-fit overflow-hidden rounded-lg border">
	<Sidebar.Root collapsible="none" class="h-[360px]">
		<Sidebar.Header>
			<Sidebar.Input placeholder="Search..." />
		</Sidebar.Header>
		<Sidebar.Content>
			<Sidebar.Group>
				<Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						{#each items as item (item.title)}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton isActive={item.active}>
									{#snippet child({ props })}
										<a href="#/sidebar" {...props}><item.icon /><span>{item.title}</span></a>
									{/snippet}
								</Sidebar.MenuButton>
								{#if item.badge}<Sidebar.MenuBadge>{item.badge}</Sidebar.MenuBadge>{/if}
							</Sidebar.MenuItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		</Sidebar.Content>
		<Sidebar.Footer><div class="px-2 text-md opacity-70">Ada Lovelace · Acme</div></Sidebar.Footer>
	</Sidebar.Root>
</Sidebar.Provider>
