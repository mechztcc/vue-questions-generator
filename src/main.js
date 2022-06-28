import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);

axios.interceptors.request.use((config) => {
	console.log(`REQUEST`, config);
	if (localStorage.getItem('token')) {
		config.headers['Authorization'] = localStorage.getItem('token');
	}
	return config;
});

axios.interceptors.response.use((config) => {
	console.log(`RESPONSE`, config.status);
	return config;
});

app.use(router);
app.use(VueAxios, axios);
app.mount('#app');
