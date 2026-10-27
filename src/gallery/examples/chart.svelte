<script lang="ts">
	import * as Chart from "$lib/components/ui/chart/index.js";
	import { BarChart } from "layerchart";

	const chartData = [
		{ month: "January", desktop: 186, mobile: 80 },
		{ month: "February", desktop: 305, mobile: 200 },
		{ month: "March", desktop: 237, mobile: 120 },
		{ month: "April", desktop: 73, mobile: 190 },
		{ month: "May", desktop: 209, mobile: 130 },
		{ month: "June", desktop: 214, mobile: 140 },
	];
	const chartConfig = {
		desktop: { label: "Desktop", color: "var(--chart-1)" },
		mobile: { label: "Mobile", color: "var(--chart-2)" },
	} satisfies Chart.ChartConfig;
</script>

<Chart.Container config={chartConfig} class="min-h-[200px] w-full max-w-xl">
	<BarChart
		data={chartData}
		x="month"
		axis="x"
		seriesLayout="group"
		legend
		series={[
			{ key: "desktop", label: chartConfig.desktop.label, color: chartConfig.desktop.color },
			{ key: "mobile", label: chartConfig.mobile.label, color: chartConfig.mobile.color },
		]}
		props={{ bars: { stroke: "none", radius: 4, rounded: "top" }, xAxis: { format: (d: string) => d.slice(0, 3) } }}
	>
		{#snippet tooltip()}
			<Chart.Tooltip />
		{/snippet}
	</BarChart>
</Chart.Container>
