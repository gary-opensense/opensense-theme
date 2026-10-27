<script lang="ts">
	import { cn, type WithElementRef, type WithoutChildren } from "$lib/utils.js";
	import type { HTMLTextareaAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		"data-slot": dataSlot = "textarea",
		...restProps
	}: WithoutChildren<WithElementRef<HTMLTextareaAttributes>> = $props();
</script>

<textarea
	bind:this={ref}
	data-slot={dataSlot}
	class={cn(
		"border-input bg-control text-foreground rounded-sm border text-sm transition-[color,box-shadow] outline-none placeholder:text-subtle-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive data-[valid=true]:border-success data-[valid=true]:focus-visible:ring-success disabled:cursor-not-allowed disabled:bg-muted disabled:text-disabled-foreground disabled:placeholder:text-disabled-foreground read-only:bg-muted px-2.5 py-2 flex field-sizing-content min-h-16 w-full",
		className
	)}
	bind:value
	{...restProps}></textarea>
