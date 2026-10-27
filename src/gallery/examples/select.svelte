<script lang="ts">
	import * as Select from "$lib/components/ui/select/index.js";

	const fruits = [
		{ value: "apple", label: "Apple" },
		{ value: "banana", label: "Banana" },
		{ value: "blueberry", label: "Blueberry" },
		{ value: "grapes", label: "Grapes", disabled: true },
		{ value: "pineapple", label: "Pineapple" },
	];
	let value = $state("");
	const label = $derived(fruits.find((f) => f.value === value)?.label ?? "Select a fruit");
</script>

<Select.Root type="single" name="fruit" bind:value>
	<Select.Trigger class="w-[180px]">{label}</Select.Trigger>
	<Select.Content>
		<Select.Group>
			<Select.Label>Fruits</Select.Label>
			{#each fruits as f (f.value)}
				<Select.Item value={f.value} label={f.label} disabled={f.disabled}>{f.label}</Select.Item>
			{/each}
		</Select.Group>
	</Select.Content>
</Select.Root>
