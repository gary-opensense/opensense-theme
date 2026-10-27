<script lang="ts">
	import { Input } from "$lib/components/ui/input/index.js";
</script>

<div class="grid max-w-sm gap-3">
	<Input type="email" placeholder="Email" />
	<Input value="With a value" />
	<Input placeholder="Disabled" disabled />
	<Input placeholder="Read only" readonly />
	<Input value="Invalid" aria-invalid="true" />
	<Input type="file" />
</div>
