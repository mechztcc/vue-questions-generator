<template>
	<nav v-if="route != '/login' && route != '/create'">
		<ul>
			<router-link to="/" active-class="active">Home page</router-link>

			<router-link to="/questions" active-class="active">Questões</router-link>


		</ul>
	</nav>
</template>
<script>
export default {
	name: 'app-menu',
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
<style scoped>
nav {
	height: inherit;
	background-color: #393e46;
	width: 100%;
	box-shadow: rgba(231, 231, 231, 0.221) 1.95px 1.95px 2.6px;
}

ul {
	display: flex;
	flex-direction: column;
	padding-left: 0;
	margin: 0;
}
li {
	list-style-type: none;
	color: white;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
}

a {
	text-decoration: none;
	color: white;
	font-size: 22px;
	border-bottom: 1px solid #222831;
	padding: 10px;
}
.active {
	background-color: #00adb5;
	border-bottom: 2px white solid;
}
</style>
