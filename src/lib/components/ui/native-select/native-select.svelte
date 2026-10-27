<script lang="ts">
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLSelectAttributes } from "svelte/elements";

	type NativeSelectProps = Omit<WithElementRef<HTMLSelectAttributes, HTMLSelectElement>, "size"> & {
		size?: "sm" | "default";
	};

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		size = "default",
		children,
		...restProps
	}: NativeSelectProps = $props();
</script>

<div
	class={cn(
		"group/native-select relative w-full",
		className
	)}
	data-slot="native-select-wrapper"
	data-size={size}
>
	<select
		bind:value
		bind:this={ref}
		data-slot="native-select"
		data-size={size}
		class="border-input bg-control text-foreground rounded-sm border text-sm transition-[color,box-shadow] outline-none placeholder:text-subtle-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive data-[valid=true]:border-success data-[valid=true]:focus-visible:ring-success disabled:cursor-not-allowed disabled:bg-muted disabled:text-disabled-foreground disabled:placeholder:text-disabled-foreground selection:bg-primary selection:text-primary-foreground h-9 w-full min-w-0 appearance-none py-1 pr-8 pl-2.5 select-none data-[size=sm]:h-8"
		{...restProps}
	>
		{@render children?.()}
	</select>
	<ChevronDownIcon class="text-muted-foreground top-1/2 right-2.5 size-4 -translate-y-1/2 pointer-events-none absolute select-none" aria-hidden data-slot="native-select-icon" />
</div>
