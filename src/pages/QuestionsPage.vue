<template>
	<div class="card">
		<h1>questions page</h1>
		<CardQuestion
			v-for="(question, index) in questions"
			:key="index"
			:question="question"
		/>
	</div>
</template>
<script>
import axios from 'axios';
import CardQuestion from '../components/CardQuestion.vue';

export default {
	name: 'app-questions-page',
	components: {
		CardQuestion,
	},
	data() {
		return {
			isLoading: false,
			questions: [],
		};
	},
	created() {
		this.index();
	},
	methods: {
		async index() {
			this.isLoading = true;
			const response = await axios
				.get('http://localhost:3000/questions')
				.catch(() => {
					this.isLoading = false;
				});
			if (response?.data) {
				this.questions = response.data;
			}
		},
	},
};
</script>
<style scoped>
.card {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	height: inherit;
}

</style>
