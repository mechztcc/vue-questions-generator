<template>
	<header v-if="route == '/' || route == '/questions'">
		<h1>Questions generator</h1>
		<div class="profile" @click="logout()"></div>
	</header>
</template>
<script>
export default {
	name: 'app-header',
	created() {},
	data() {
		return {
			route: this.$router.currentRoute.value.fullPath,
		};
	},
	watch: {
		$route(to) {
			this.route = to.fullPath;
			console.log(to.fullPath);
		},
	},
	methods: {
		logout() {
			localStorage.clear();
			this.$router.push('/login');
		},
	},
};
</script>
<style scoped>
header {
	background-color: #00adb5;
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid white;
	padding-left: 1%;
	padding-right: 1%;
}
.profile {
	background-color: white;
	height: 80%;
	width: 50px;
	border-radius: 50%;
}
</style>
