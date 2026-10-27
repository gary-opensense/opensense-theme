<script lang="ts">
	import * as Menubar from "$lib/components/ui/menubar/index.js";
</script>

<Menubar.Root class="w-fit">
	<Menubar.Menu>
		<Menubar.Trigger>File</Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item>New Tab<Menubar.Shortcut>⌘T</Menubar.Shortcut></Menubar.Item>
			<Menubar.Item>New Window<Menubar.Shortcut>⌘N</Menubar.Shortcut></Menubar.Item>
			<Menubar.Item disabled>New Incognito Window</Menubar.Item>
			<Menubar.Separator />
			<Menubar.Sub>
				<Menubar.SubTrigger>Share</Menubar.SubTrigger>
				<Menubar.SubContent>
					<Menubar.Item>Email link</Menubar.Item>
					<Menubar.Item>Messages</Menubar.Item>
				</Menubar.SubContent>
			</Menubar.Sub>
			<Menubar.Separator />
			<Menubar.Item>Print...<Menubar.Shortcut>⌘P</Menubar.Shortcut></Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
	<Menubar.Menu>
		<Menubar.Trigger>Edit</Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item>Undo<Menubar.Shortcut>⌘Z</Menubar.Shortcut></Menubar.Item>
			<Menubar.Item>Redo<Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut></Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
	<Menubar.Menu>
		<Menubar.Trigger>View</Menubar.Trigger>
		<Menubar.Content>
			<Menubar.CheckboxItem>Always Show Bookmarks Bar</Menubar.CheckboxItem>
			<Menubar.CheckboxItem checked>Always Show Full URLs</Menubar.CheckboxItem>
		</Menubar.Content>
	</Menubar.Menu>
</Menubar.Root>
