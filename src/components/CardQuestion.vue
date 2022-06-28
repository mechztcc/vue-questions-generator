<template>
	<div class="card">
		<div class="card-header">
			<div class="tags">
				<span v-for="(item, index) in question.tags" :key="index">
					<b>{{ item }}</b></span
				>
			</div>
		</div>
		<div class="card-body">
			<span>{{ question.description }}</span>
		</div>
		<div class="card-footer">
			<div
				class="question"
				v-for="(alternative, index) in question.alternatives"
				:key="index"
			>
				<input type="checkbox" />
				<span>{{ alternative }}</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'app-card-question',
	props: {
		question: {},
	},
};
</script>
<style scoped>
.card {
	display: flex;
	background-color: white;
	text-align: left;
	color: black;
	height: 100%;
	width: 100%;
	margin: 1%;
	border-radius: 5px;
}

.card-header {
	display: flex;
}
</style>
