<template>
	<div class="nav">
		<Menu />
	</div>
	<div class="content">
		<router-view></router-view>
	</div>
</template>

<script>
import Menu from './components/Menu.vue';
export default {
	name: 'App',
	components: {
		Menu,
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
}

body {
	background-color: #222831;
	margin: 0;
}

.nav {
	width: 20%;
	height: 100vh;

}
.content {
	width: 80%;
}
</style>
