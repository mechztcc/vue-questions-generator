<template>
	<header v-if=" route == '/'">
        <h1>Questions generator</h1>
    </header>
</template>
<script>
export default {
	name: 'app-header',
    created() {
        console.log(this.$router.currentRoute.value);
    },
    data() {
        return {
            route: this.$router.currentRoute.value.fullPath
        }
    },
    watch: {
        $route(to, from) {
            this.route = to.fullPath
            console.log(to);
            console.log(from);
        }
    }
};
</script>
<style>
header {
    background-color: #00ADB5;
    height: 60px;
    display: flex;
    justify-content: start;
    align-items: center;
    border-bottom: 2px solid white;
}
</style>
