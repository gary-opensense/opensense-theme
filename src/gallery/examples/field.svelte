<script lang="ts">
	import * as Field from "$lib/components/ui/field/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Checkbox } from "$lib/components/ui/checkbox/index.js";
	import { Switch } from "$lib/components/ui/switch/index.js";
</script>

<Field.Set class="max-w-md">
	<Field.Legend>Profile</Field.Legend>
	<Field.Description>This information is shown on your public profile.</Field.Description>
	<Field.Group>
		<Field.Field>
			<Field.Label for="f-name">Full name</Field.Label>
			<Input id="f-name" placeholder="Ada Lovelace" />
			<Field.Description>Your name as others will see it.</Field.Description>
		</Field.Field>
		<Field.Field data-invalid="true">
			<Field.Label for="f-user">Username</Field.Label>
			<Input id="f-user" value="ada" aria-invalid="true" />
			<Field.Error>That username is taken.</Field.Error>
		</Field.Field>
		<Field.Separator />
		<Field.Field orientation="horizontal">
			<Checkbox id="f-news" checked />
			<Field.Label for="f-news">Email me product updates</Field.Label>
		</Field.Field>
		<Field.Field orientation="horizontal">
			<Switch id="f-public" />
			<Field.Label for="f-public">Public profile</Field.Label>
		</Field.Field>
	</Field.Group>
</Field.Set>
