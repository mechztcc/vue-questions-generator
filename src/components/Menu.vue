<template>
	<nav>
		<ul>
			<router-link to="/" active-class="active">Home page</router-link>

			<router-link to="/login" active-class="active">Login</router-link>

			<router-link to="/create" active-class="active">
				Create account
			</router-link>
		</ul>
	</nav>
</template>
<script>
export default {
	name: 'app-menu',
};
</script>
<style scoped>
nav {
	height: 100%;
	background-color: #393e46;
	width: 100%;
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
