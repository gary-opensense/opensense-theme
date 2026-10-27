<script lang="ts">
	import * as Empty from "$lib/components/ui/empty/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import FolderCodeIcon from "@lucide/svelte/icons/folder-code";
</script>

<Empty.Root class="border border-dashed">
	<Empty.Header>
		<Empty.Media variant="icon"><FolderCodeIcon /></Empty.Media>
		<Empty.Title>No projects yet</Empty.Title>
		<Empty.Description>You haven't created any projects yet. Get started by creating your first project.</Empty.Description>
	</Empty.Header>
	<Empty.Content>
		<div class="flex gap-2">
			<Button>Create project</Button>
			<Button variant="outline">Import project</Button>
		</div>
	</Empty.Content>
</Empty.Root>
