<script lang="ts" module>
	export const note = "The docs build this with TanStack Table; this is the same visual composition (Table + Checkbox + DropdownMenu + Badge) without the data layer.";
</script>

<script lang="ts">
	import * as Table from "$lib/components/ui/table/index.js";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import { Checkbox } from "$lib/components/ui/checkbox/index.js";
	import { Badge, type BadgeVariant } from "$lib/components/ui/badge/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import ArrowUpDownIcon from "@lucide/svelte/icons/arrow-up-down";
	import EllipsisIcon from "@lucide/svelte/icons/ellipsis";

	const rows = [
		{ id: "m5gr84i9", email: "ken99@example.com", status: "success", amount: 316 },
		{ id: "3u1reuv4", email: "abe45@example.com", status: "success", amount: 242 },
		{ id: "derv1ws0", email: "monserrat44@example.com", status: "processing", amount: 837 },
		{ id: "5kma53ae", email: "silas22@example.com", status: "success", amount: 874 },
		{ id: "bhqecj4p", email: "carmella@example.com", status: "failed", amount: 721 },
	];
	const statusVariant: Record<string, BadgeVariant> = { success: "secondary", processing: "outline", failed: "destructive" };
	let selected = $state<string[]>(["derv1ws0"]);
	const toggle = (id: string, on: boolean) => (selected = on ? [...selected, id] : selected.filter((s) => s !== id));
	const fmt = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
</script>

<div class="flex flex-col gap-3">
	<Input placeholder="Filter emails..." class="max-w-sm" />
	<div class="rounded-md border">
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-10">
						<Checkbox
							checked={selected.length === rows.length}
							indeterminate={selected.length > 0 && selected.length < rows.length}
							onCheckedChange={(v) => (selected = v ? rows.map((r) => r.id) : [])}
							aria-label="Select all"
						/>
					</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head><Button variant="ghost" size="sm" class="-ml-2">Email <ArrowUpDownIcon /></Button></Table.Head>
					<Table.Head class="text-right">Amount</Table.Head>
					<Table.Head class="w-10"></Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each rows as r (r.id)}
					<Table.Row data-state={selected.includes(r.id) ? "selected" : undefined}>
						<Table.Cell><Checkbox checked={selected.includes(r.id)} onCheckedChange={(v) => toggle(r.id, !!v)} aria-label="Select row" /></Table.Cell>
						<Table.Cell><Badge variant={statusVariant[r.status]}>{r.status}</Badge></Table.Cell>
						<Table.Cell class="lowercase">{r.email}</Table.Cell>
						<Table.Cell class="text-right font-medium">{fmt.format(r.amount)}</Table.Cell>
						<Table.Cell>
							<DropdownMenu.Root>
								<DropdownMenu.Trigger>
									{#snippet child({ props })}
										<Button variant="ghost" size="icon-sm" aria-label="Open menu" {...props}><EllipsisIcon /></Button>
									{/snippet}
								</DropdownMenu.Trigger>
								<DropdownMenu.Content align="end">
									<DropdownMenu.Label>Actions</DropdownMenu.Label>
									<DropdownMenu.Item>Copy payment ID</DropdownMenu.Item>
									<DropdownMenu.Separator />
									<DropdownMenu.Item>View customer</DropdownMenu.Item>
									<DropdownMenu.Item>View payment details</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<div class="flex items-center justify-between text-sm text-muted-foreground">
		<span>{selected.length} of {rows.length} row(s) selected.</span>
		<div class="flex gap-2"><Button variant="outline" size="sm" disabled>Previous</Button><Button variant="outline" size="sm">Next</Button></div>
	</div>
</div>
