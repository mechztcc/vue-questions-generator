import axios from 'axios';

export class UserService {
	url: string = 'http://localhost:3000';

	async signup(email: string, password: string, name: string) {
		const user = await axios.post(this.url, { email, password, name });
        return user;
	}
}
