<script lang="ts">
	import { AspectRatio } from "$lib/components/ui/aspect-ratio/index.js";
</script>

<div class="w-[450px] max-w-full">
	<AspectRatio ratio={16 / 9} class="rounded-lg bg-muted">
		<img
			src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
			alt="Gray by Drew Beamer"
			class="size-full rounded-lg object-cover"
		/>
	</AspectRatio>
</div>
