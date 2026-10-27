<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";

	export const badgeVariants = tv({
		base: "gap-1 rounded-sm border border-transparent px-2 py-1 text-md leading-none font-normal transition-colors has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:ring-[3px] focus-visible:ring-ring/50 [&>svg]:pointer-events-none",
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground [a]:hover:bg-primary-hover",
				secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-control-pressed",
				destructive: "bg-destructive text-destructive-foreground",
				// Opensense status colours (not in stock shadcn).
				success: "bg-success text-success-foreground",
				info: "bg-info text-info-foreground",
				warning: "bg-warning text-warning-foreground",
				outline: "border-border text-foreground [a]:hover:bg-muted",
				ghost: "hover:bg-muted hover:text-muted-foreground",
				link: "text-link underline-offset-4 hover:underline",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	});

	export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
</script>

<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		href,
		class: className,
		variant = "default",
		children,
		...restProps
	}: WithElementRef<HTMLAnchorAttributes> & {
		variant?: BadgeVariant;
	} = $props();
</script>

<svelte:element
	this={href ? "a" : "span"}
	bind:this={ref}
	data-slot="badge"
	{href}
	class={cn(badgeVariants({ variant }), className)}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
