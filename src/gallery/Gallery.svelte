<script lang="ts">
	// Every shadcn-svelte component in the Opensense theme, one section each, A–Z.
	// Sections are the files in ./examples (file name = slug); add a file to add a section.
	import type { Component } from "svelte";

	const modules = import.meta.glob<{ default: Component; title?: string; note?: string }>(
		"./examples/*.svelte",
		{ eager: true }
	);

	const titleCase = (slug: string) =>
		slug.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());

	const sections = Object.entries(modules)
		.map(([path, mod]) => {
			const slug = path.split("/").pop()!.replace(".svelte", "");
			return { slug, title: mod.title ?? titleCase(slug), note: mod.note, Example: mod.default };
		})
		.sort((a, b) => a.title.localeCompare(b.title));
</script>

<div class="grid gap-8 lg:grid-cols-[180px_1fr]">
	<nav aria-label="Components" class="hidden lg:block">
		<div class="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
			<p class="mb-2 text-md font-medium tracking-wide text-muted-foreground uppercase">
				{sections.length} components
			</p>
			<ul class="flex flex-col">
				{#each sections as s (s.slug)}
					<li>
						<a
							href="#/{s.slug}"
							class="block rounded-sm px-2 py-1 text-sm text-control-foreground! hover:bg-muted hover:text-foreground!"
							>{s.title}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</nav>

	<div class="flex min-w-0 flex-col gap-6">
		<header>
			<h1 class="mb-1">Components</h1>
			<p class="text-muted-foreground">
				Stock shadcn-svelte components (vega style) in the Opensense theme. Use the header toggle for dark mode.
			</p>
		</header>
		{#each sections as s (s.slug)}
			<section id="components-{s.slug}" class="scroll-mt-20 rounded-lg border">
				<div class="flex items-baseline justify-between gap-4 border-b px-4 py-2.5">
					<h2 class="mb-0 text-lg">{s.title}</h2>
					<a
						href="https://www.shadcn-svelte.com/docs/components/{s.slug}"
						target="_blank"
						rel="noreferrer"
						class="text-md">docs ↗</a
					>
				</div>
				{#if s.note}<p class="border-b bg-subtle px-4 py-2 text-md text-muted-foreground">{s.note}</p>{/if}
				<div class="p-6">
					<s.Example />
				</div>
			</section>
		{/each}
	</div>
</div>
