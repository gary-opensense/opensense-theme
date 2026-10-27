<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

	export const buttonVariants = tv({
		base: "focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/25 rounded-md border border-transparent bg-clip-padding text-sm leading-snug font-normal focus-visible:ring-4 aria-invalid:ring-4 [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-colors outline-none select-none disabled:pointer-events-none disabled:opacity-65 aria-disabled:pointer-events-none aria-disabled:opacity-65 [&_svg]:pointer-events-none [&_svg]:shrink-0",
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground border-primary hover:bg-primary-hover hover:border-primary-hover active:bg-primary-active active:border-primary-active aria-pressed:bg-primary-active data-[state=on]:bg-primary-active",
				// White control with a grey border (the Opensense secondary button).
				outline: "bg-control text-control-foreground border-control-border hover:bg-subtle hover:text-control-foreground-hover hover:border-control-border-hover active:bg-control-pressed aria-expanded:bg-control-pressed aria-pressed:bg-control-pressed data-[state=on]:bg-control-pressed focus-visible:ring-control-border/50",
				// Soft neutral surface.
				secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_srgb,var(--secondary),var(--foreground)_8%)] active:bg-[color-mix(in_srgb,var(--secondary),var(--foreground)_8%)] aria-expanded:bg-[color-mix(in_srgb,var(--secondary),var(--foreground)_8%)]",
				ghost: "text-foreground hover:bg-control-pressed active:bg-control-border aria-expanded:bg-control-pressed focus-visible:ring-control-border/50",
				destructive: "bg-destructive text-destructive-foreground border-destructive hover:bg-[color-mix(in_srgb,var(--destructive),black_15%)] active:bg-[color-mix(in_srgb,var(--destructive),black_20%)] focus-visible:ring-destructive/50",
				// Opensense status colours (not in stock shadcn).
				success: "bg-success text-success-foreground border-success hover:bg-[color-mix(in_srgb,var(--success),white_15%)] active:bg-[color-mix(in_srgb,var(--success),white_20%)] focus-visible:ring-success/50",
				info: "bg-info text-info-foreground border-info hover:bg-[color-mix(in_srgb,var(--info),white_15%)] active:bg-[color-mix(in_srgb,var(--info),white_20%)] focus-visible:ring-info/50",
				warning: "bg-warning text-warning-foreground border-warning hover:bg-[color-mix(in_srgb,var(--warning),white_15%)] active:bg-[color-mix(in_srgb,var(--warning),white_20%)] focus-visible:ring-warning/50",
				link: "text-link hover:text-link-hover hover:bg-muted active:bg-control-pressed focus-visible:ring-primary/50",
			},
			size: {
				default: "h-9 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
				xs: "h-6 gap-1 rounded-sm px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
				sm: "h-6 gap-1 rounded-sm px-2 text-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
				lg: "h-11 gap-2 px-4 text-lg has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
				icon: "size-9",
				"icon-xs": "size-6 rounded-sm [&_svg:not([class*='size-'])]:size-3",
				"icon-sm": "size-7 rounded-sm",
				"icon-lg": "size-11",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
	export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
		};
</script>

<script lang="ts">
	let {
		class: className,
		variant = "default",
		size = "default",
		ref = $bindable(null),
		href = undefined,
		type = "button",
		disabled,
		children,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		href={disabled ? undefined : href}
		aria-disabled={disabled}
		role={disabled ? "link" : undefined}
		tabindex={disabled ? -1 : undefined}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		{type}
		{disabled}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
