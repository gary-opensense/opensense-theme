<script lang="ts">
	import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";

	const components = [
		{ title: "Alert Dialog", description: "A modal dialog that interrupts the user with important content." },
		{ title: "Hover Card", description: "For sighted users to preview content available behind a link." },
		{ title: "Progress", description: "Displays an indicator showing the completion progress of a task." },
		{ title: "Tooltip", description: "A popup that displays information related to an element." },
	];
</script>

<div class="min-h-[260px]">
	<NavigationMenu.Root viewport={false}>
		<NavigationMenu.List>
			<NavigationMenu.Item>
				<NavigationMenu.Trigger>Getting started</NavigationMenu.Trigger>
				<NavigationMenu.Content>
					<ul class="grid w-[400px] gap-2 p-2">
						<li><NavigationMenu.Link href="#/navigation-menu" class="flex-col items-start gap-1"><div class="font-medium">Introduction</div><p class="mb-0 text-muted-foreground">Re-usable components built with Tailwind CSS.</p></NavigationMenu.Link></li>
						<li><NavigationMenu.Link href="#/navigation-menu" class="flex-col items-start gap-1"><div class="font-medium">Installation</div><p class="mb-0 text-muted-foreground">How to install dependencies and structure your app.</p></NavigationMenu.Link></li>
					</ul>
				</NavigationMenu.Content>
			</NavigationMenu.Item>
			<NavigationMenu.Item>
				<NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
				<NavigationMenu.Content>
					<ul class="grid w-[500px] grid-cols-2 gap-2 p-2">
						{#each components as c (c.title)}
							<li><NavigationMenu.Link href="#/navigation-menu" class="flex-col items-start gap-1"><div class="font-medium">{c.title}</div><p class="mb-0 line-clamp-2 text-muted-foreground">{c.description}</p></NavigationMenu.Link></li>
						{/each}
					</ul>
				</NavigationMenu.Content>
			</NavigationMenu.Item>
			<NavigationMenu.Item>
				<NavigationMenu.Link href="#/navigation-menu">Docs</NavigationMenu.Link>
			</NavigationMenu.Item>
		</NavigationMenu.List>
	</NavigationMenu.Root>
</div>
