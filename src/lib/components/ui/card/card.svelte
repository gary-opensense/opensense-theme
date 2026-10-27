<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		children,
		size = "default",
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & { size?: "default" | "sm" } = $props();
</script>

<div
	bind:this={ref}
	data-slot="card"
	data-size={size}
	class={cn("border bg-card text-card-foreground gap-(--card-spacing) overflow-hidden rounded-lg py-(--card-spacing) text-sm [--card-spacing:--spacing(4)] has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] *:[img:first-child]:rounded-t-[calc(var(--radius-lg)-1px)] *:[img:last-child]:rounded-b-[calc(var(--radius-lg)-1px)] group/card flex flex-col", className)}
	{...restProps}
>
	{@render children?.()}
</div>
