<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";

	export const alertVariants = tv({
		base: "grid gap-0.5 rounded-md border p-4 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-12 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2.5 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-(--alert-accent) *:[svg:not([class*='size-'])]:size-4 [--alert-accent:currentColor] [&_a]:font-bold [&_a]:text-inherit [&_a]:hover:text-inherit group/alert relative w-full",
		variants: {
			variant: {
				default: "bg-card text-card-foreground",
				// Opensense tint: red-tinted surface, neutral body text, red title and icon.
				destructive: "bg-destructive-subtle border-destructive-border text-tinted-foreground [--alert-accent:var(--destructive-emphasis)]",
				// Opensense status colours (not in stock shadcn), tinted like destructive.
				success: "bg-success-subtle border-success-border text-tinted-foreground [--alert-accent:var(--success-emphasis)]",
				info: "bg-info-subtle border-info-border text-tinted-foreground [--alert-accent:var(--info-emphasis)]",
				warning: "bg-warning-subtle border-warning-border text-tinted-foreground [--alert-accent:var(--warning-emphasis)]",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	});

	export type AlertVariant = VariantProps<typeof alertVariants>["variant"];
</script>

<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		variant = "default",
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		variant?: AlertVariant;
	} = $props();
</script>

<div
	bind:this={ref}
	data-slot="alert"
	data-variant={variant}
	role="alert"
	class={cn(alertVariants({ variant }), className)}
	{...restProps}
>
	{@render children?.()}
</div>
