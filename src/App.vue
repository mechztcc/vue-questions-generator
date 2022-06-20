<template>
	<Header />
	<div class="content">
		<div class="nav">
			<Menu />
		</div>
		<div class="content-router">
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
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
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
	width: 80%;
}
</style>
