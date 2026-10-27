<script lang="ts">
	import * as HoverCard from "$lib/components/ui/hover-card/index.js";
	import * as Avatar from "$lib/components/ui/avatar/index.js";
</script>

<HoverCard.Root>
	<HoverCard.Trigger href="https://github.com/sveltejs" target="_blank" rel="noreferrer" class="text-link underline-offset-4 hover:underline">@sveltejs</HoverCard.Trigger>
	<HoverCard.Content class="w-80">
		<div class="flex gap-4">
			<Avatar.Root><Avatar.Image src="https://github.com/sveltejs.png" alt="@sveltejs" /><Avatar.Fallback>SK</Avatar.Fallback></Avatar.Root>
			<div class="flex flex-col gap-1">
				<h4 class="mb-0 text-sm font-medium">@sveltejs</h4>
				<p class="mb-0 text-sm">Cybernetically enhanced web apps.</p>
				<p class="mb-0 text-md text-muted-foreground">Joined September 2022</p>
			</div>
		</div>
	</HoverCard.Content>
</HoverCard.Root>
