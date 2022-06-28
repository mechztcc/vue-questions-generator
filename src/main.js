import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);

// axios.defaults.headers.common['Authorization'] = 'token'
axios.interceptors.request.use((config) => {
	if (localStorage.getItem('token')) {
		config.headers['Authorization'] = localStorage.getItem('token');
	}
	return config;
});

axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response?.data) {
			alert(error.response.data.message);
		}
		console.log(error.response?.data);
	}
);

app.use(router);
app.use(VueAxios, axios);
app.mount('#app');
