<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { ButtonGroup, ButtonGroupText } from "$lib/components/ui/button-group/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
</script>

<div class="flex flex-col items-start gap-4">
	<ButtonGroup>
		<Button variant="outline">Archive</Button>
		<Button variant="outline">Report</Button>
		<Button variant="outline">Snooze</Button>
	</ButtonGroup>
	<ButtonGroup orientation="vertical">
		<Button variant="outline">Top</Button>
		<Button variant="outline">Middle</Button>
		<Button variant="outline">Bottom</Button>
	</ButtonGroup>
	<ButtonGroup class="w-80">
		<ButtonGroupText>https://</ButtonGroupText>
		<Input placeholder="example.com" />
		<Button variant="outline">Go</Button>
	</ButtonGroup>
</div>
