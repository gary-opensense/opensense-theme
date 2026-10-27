<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
	bind:this={ref}
	data-slot="alert-description"
	class={cn(
		"text-sm text-pretty group-data-[variant=default]/alert:text-muted-foreground [&_p]:mb-0 [&_p:not(:last-child)]:mb-4",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
