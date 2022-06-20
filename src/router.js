import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import CreatePage from './pages/CreateAccountPage';

export const router = createRouter({
	routes: [
		{ path: '/', component: Home },
		{ path: '/login', component: Login },
		{ path: '/create', component: CreatePage },
	],
	history: createWebHistory(),
});