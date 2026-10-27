<script lang="ts">
	import * as Tooltip from "$lib/components/ui/tooltip/index.js";
	import { Toaster } from "$lib/components/ui/sonner/index.js";
	import Gallery from "./gallery/Gallery.svelte";
	import SunIcon from "@lucide/svelte/icons/sun";
	import MoonIcon from "@lucide/svelte/icons/moon";
	import { theme, toggleTheme } from "./theme-mode.svelte.js";

	// #/<slug> scrolls to that component's section (hash routes work on static hosts like GitHub Pages).
	function scrollToHash() {
		const slug = location.hash.match(/^#\/(.+)$/)?.[1];
		requestAnimationFrame(() => {
			if (slug) document.getElementById(`components-${slug}`)?.scrollIntoView();
			else window.scrollTo(0, 0);
		});
	}
	$effect(() => scrollToHash());
</script>

<svelte:window onhashchange={scrollToHash} />

<Tooltip.Provider>
	<header class="fixed inset-x-0 top-0 z-40 bg-primary text-white">
		<div class="mx-auto flex h-12 max-w-[1140px] items-center px-3">
			<a href="#/" class="text-lg text-white! no-underline">Opensense Theme</a>
			<button
				type="button"
				class="ml-auto inline-flex size-9 items-center justify-center rounded-md text-white/85 outline-none hover:bg-white/15 hover:text-white focus-visible:ring-4 focus-visible:ring-white/40"
				aria-label={theme.dark ? "Switch to light mode" : "Switch to dark mode"}
				title={theme.dark ? "Light mode" : "Dark mode"}
				onclick={toggleTheme}
			>
				{#if theme.dark}<SunIcon class="size-5" />{:else}<MoonIcon class="size-5" />{/if}
			</button>
		</div>
	</header>

	<Toaster theme={theme.dark ? "dark" : "light"} />

	<main class="mx-auto max-w-[1140px] px-3 pt-24 pb-24">
		<Gallery />
	</main>
</Tooltip.Provider>
