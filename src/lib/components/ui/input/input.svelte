<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLInputAttributes, HTMLInputTypeAttribute } from "svelte/elements";

	type InputType = Exclude<HTMLInputTypeAttribute, "file">;

	type Props = WithElementRef<
		Omit<HTMLInputAttributes, "type"> &
			({ type: "file"; files?: FileList } | { type?: InputType; files?: undefined })
	>;

	let {
		ref = $bindable(null),
		value = $bindable(),
		type,
		files = $bindable(),
		class: className,
		"data-slot": dataSlot = "input",
		...restProps
	}: Props = $props();
</script>

{#if type === "file"}
	<input
		bind:this={ref}
		data-slot={dataSlot}
		class={cn(
			"border-input bg-control text-foreground rounded-sm border text-sm transition-[color,box-shadow] outline-none placeholder:text-subtle-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive data-[valid=true]:border-success data-[valid=true]:focus-visible:ring-success disabled:cursor-not-allowed disabled:bg-muted disabled:text-disabled-foreground disabled:placeholder:text-disabled-foreground h-9 w-full min-w-0 overflow-hidden p-0 pr-2.5 file:mr-2.5 file:h-full file:border-0 file:border-r file:border-solid file:border-input file:bg-muted file:px-2.5 file:text-sm file:text-foreground hover:file:bg-control-pressed",
			className
		)}
		type="file"
		bind:files
		bind:value
		{...restProps}
	/>
{:else}
	<input
		bind:this={ref}
		data-slot={dataSlot}
		class={cn(
			"border-input bg-control text-foreground rounded-sm border text-sm transition-[color,box-shadow] outline-none placeholder:text-subtle-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive data-[valid=true]:border-success data-[valid=true]:focus-visible:ring-success disabled:cursor-not-allowed disabled:bg-muted disabled:text-disabled-foreground disabled:placeholder:text-disabled-foreground read-only:bg-muted read-only:placeholder:text-disabled-foreground h-9 w-full min-w-0 px-2.5 py-1",
			className
		)}
		{type}
		bind:value
		{...restProps}
	/>
{/if}
