<template>
	<nav>
		<ul>
			<li>
				<router-link to="/">Home page</router-link>
			</li>
			<router-link to="/login">Login</router-link>
			<li>
				<router-link to="/create">Create account</router-link>
			</li>
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
	margin: 0;
}

ul {
	padding-left: 0;
}
li {
	list-style-type: none;
	color: white;
	height: 40px;
	border-bottom: 1px solid #222831;
	display: flex;
	justify-content: center;
	align-items: center;
}

a {
	text-decoration: none;
	color: white;
	font-size: 22px;
}
</style>
