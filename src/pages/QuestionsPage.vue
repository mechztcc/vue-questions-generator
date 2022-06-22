<template>
	<div>
		<h1>questions page</h1>
	</div>
</template>
<script>
import axios from 'axios';

export default {
	name: 'app-questions-page',
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
<style></style>
