<template>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap"
		rel="stylesheet"
	/>
	<Header />
	<div class="content">
		<div class="nav" v-if="route != '/login' && route != '/create'">
			<Menu />
		</div>
		<div class="content-router" :class="{'w-100': true}">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Menu from './components/Menu.vue';
import Header from './components/Header.vue';
export default {
	name: 'App',
	components: {
		Menu,
		Header,
	},
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
#app {
	font-family: 'Rajdhani', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: white;
	display: flex;
	flex-direction: column;
}

body {
	background-color: #222831;
	margin: 0;
}

.content {
	display: flex;
}

.nav {
	width: 20%;
	height: 100vh;
}
.content-router {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

.w-80 {
	width: 80%;
}

.w-100 {
	width: 100%;
}
</style>
