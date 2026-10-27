<script lang="ts">
	import { NativeSelect, NativeSelectOption, NativeSelectOptGroup } from "$lib/components/ui/native-select/index.js";
</script>

<div class="grid max-w-xs gap-3">
	<NativeSelect>
		<NativeSelectOption value="">Select a fruit</NativeSelectOption>
		<NativeSelectOptGroup label="Fruits">
			<NativeSelectOption value="apple">Apple</NativeSelectOption>
			<NativeSelectOption value="banana">Banana</NativeSelectOption>
		</NativeSelectOptGroup>
	</NativeSelect>
	<NativeSelect disabled><NativeSelectOption>Disabled</NativeSelectOption></NativeSelect>
</div>
