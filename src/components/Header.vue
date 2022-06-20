<template>
	<header v-if="route == '/'">
		<h1>Questions generator</h1>
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
		},
	},
};
</script>
<style>
header {
	background-color: #00adb5;
	height: 60px;
	display: flex;
	justify-content: start;
	align-items: center;
	border-bottom: 2px solid white;
}
</style>
