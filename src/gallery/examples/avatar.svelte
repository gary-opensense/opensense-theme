<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar/index.js";
</script>

<div class="flex flex-wrap items-center gap-6">
	<Avatar.Root>
		<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
		<Avatar.Fallback>CN</Avatar.Fallback>
	</Avatar.Root>
	<Avatar.Root>
		<Avatar.Fallback>AL</Avatar.Fallback>
	</Avatar.Root>
	<Avatar.Root size="sm"><Avatar.Fallback>SM</Avatar.Fallback></Avatar.Root>
	<Avatar.Root size="lg"><Avatar.Fallback>LG</Avatar.Fallback></Avatar.Root>
	<Avatar.Group>
		<Avatar.Root><Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" /><Avatar.Fallback>CN</Avatar.Fallback></Avatar.Root>
		<Avatar.Root><Avatar.Fallback>AL</Avatar.Fallback></Avatar.Root>
		<Avatar.Root><Avatar.Fallback>GH</Avatar.Fallback></Avatar.Root>
		<Avatar.GroupCount>+3</Avatar.GroupCount>
	</Avatar.Group>
</div>
