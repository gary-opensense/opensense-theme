<script lang="ts">
	import * as Drawer from "$lib/components/ui/drawer/index.js";
	import { Button, buttonVariants } from "$lib/components/ui/button/index.js";

	let goal = $state(350);
</script>

<Drawer.Root>
	<Drawer.Trigger class={buttonVariants({ variant: "outline" })}>Open drawer</Drawer.Trigger>
	<Drawer.Content>
		<div class="mx-auto w-full max-w-sm">
			<Drawer.Header>
				<Drawer.Title>Move goal</Drawer.Title>
				<Drawer.Description>Set your daily activity goal.</Drawer.Description>
			</Drawer.Header>
			<div class="flex items-center justify-center gap-4 p-4">
				<Button variant="outline" size="icon" onclick={() => (goal = Math.max(200, goal - 10))} aria-label="Decrease">−</Button>
				<div class="text-center">
					<div class="text-4xl leading-none font-medium tabular-nums">{goal}</div>
					<div class="text-md text-muted-foreground uppercase">Calories/day</div>
				</div>
				<Button variant="outline" size="icon" onclick={() => (goal = Math.min(400, goal + 10))} aria-label="Increase">+</Button>
			</div>
			<Drawer.Footer>
				<Button>Submit</Button>
				<Drawer.Close class={buttonVariants({ variant: "outline" })}>Cancel</Drawer.Close>
			</Drawer.Footer>
		</div>
	</Drawer.Content>
</Drawer.Root>
