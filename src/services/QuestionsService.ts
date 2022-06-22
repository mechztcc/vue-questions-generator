import axios from 'axios';
export async function getQuestions() {
	const questions = await axios.get('/');
	return questions;
}
