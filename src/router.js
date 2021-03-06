import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import CreatePage from './pages/CreateAccountPage';
import QuestionsPage from './pages/QuestionsPage.vue'


import AuthGuard from './guards/AuthGuard.ts';

export const router = createRouter({
	routes: [
		{ path: '/', component: Home, beforeEnter: AuthGuard },
		{ path: '/login', component: Login },
		{ path: '/create', component: CreatePage },
		{ path: '/questions', component: QuestionsPage}
	],
	history: createWebHistory(),
});
