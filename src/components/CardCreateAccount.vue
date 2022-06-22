<template>
	<div class="card">
		<div class="card-header">
			<h2>Crie sua conta gratuita</h2>
			<hr />
		</div>
		<div class="card-body">
			<form>
				<label for="name">Nome Completo</label>
				<input type="text" v-model="name" />

				<label for="email">E-mail</label>
				<input type="text" v-model.lazy.trim="email" />
				<span class="error-message" v-if="emailError">{{ emailError }}</span>

				<label for="password">Senha</label>
				<input type="password" v-model.trim="password" />
				<span class="error-message" v-if="passwordError">{{
					passwordError
				}}</span>

				<label for="password">Repita senha</label>
				<input type="password" v-model.trim="repeatPassword" />
				<span class="error-message" v-if="repeatPasswordError">{{
					repeatPasswordError
				}}</span>

				<div class="buttons">
					<button
						class="success"
						type="button"
						v-if="!isLoading"
						@click="validateForm()"
					>
						Enviar
					</button>

					<button class="success" type="button" v-if="isLoading" disabled>
						Enviando
					</button>

					<button class="default" @click="navegateTo()">
						Já sou cadastrado
					</button>
				</div>
			</form>
		</div>
		<div class="card-footer">
			<div class="footer-content">
				<span>
					A criar sua conta você aceita os <b>termos de acesso</b> & nossa
					<b>politica de privacidade</b>
				</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'app-card-create',
	data() {
		return {
			name: '',
			email: '',
			password: '',
			repeatPassword: '',
			emailError: '',
			passwordError: '',
			repeatPasswordError: '',
			hasError: false,
			isLoading: false,
		};
	},
	methods: {
		validateForm() {
			if (!this.email) {
				this.emailError = 'E-mail é obrigatório';
				this.hasError = true;
			}
			if (!this.password) {
				this.passwordError = 'A senha é inválida';
				this.hasError = true;
			}
			if (this.password != this.repeatPassword) {
				this.repeatPasswordError = 'Senhas divergentes';
				this.hasError = true;
			}
			if (this.password && this.email) {
				this.passwordError = '';
				this.emailError = '';
				this.hasError = false;
			}
			if (this.password == this.repeatPassword) {
				this.repeatPasswordError = '';
				this.hasError = false;
			}

			if (!this.hasError) {
				// this.$router.push('/');
				this.createAccount();
			}
		},

		async createAccount() {
			this.isLoading = true;
			await this.axios
				.post('http://localhost:3000/users/signup', {
					email: this.email,
					password: this.password,
					name: this.name,
				})
				.catch(() => {
					this.isLoading = false;
				});

			this.isLoading = false;
			this.navegateTo()
		},
		navegateTo() {
			this.$router.push('/login');
		},
	},
};
</script>
<style scoped>
.card {
	display: flex;
	flex-direction: column;
	width: 50%;
	background-color: #393e46;
	border-radius: 5px;
}
.card-header {
	border-top: 5px solid #00adb5;
}
.card-body {
	display: flex;
	flex-direction: column;
	align-items: center;
}

form {
	display: flex;
	width: 80%;
	flex-direction: column;
	align-items: start;
	margin-top: 5%;
}

label {
	font-size: 15px;
	margin-top: 5%;
	font-weight: bold;
}

input {
	height: 30px;
	border-radius: 5px;
	border: none;
	width: 100%;
	margin-top: 2%;
	outline: none;
}

.buttons {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: space-around;
	align-items: center;
	padding-bottom: 15px;
	padding-top: 15px;
	margin-bottom: 5%;
}

button {
	height: 30px;
	width: 100%;
	color: white;
	border: none;
	padding-right: 15px;
	padding-left: 15px;
	border-radius: 5px;
	margin-top: 1%;
}

.success {
	background-color: #00adb5;
}

.default {
	background-color: transparent;
}

.error-message {
	color: white;
	border: 1px solid orange;
	background-color: orange;
	border-radius: 5px;
	width: 100%;
	margin-top: 1%;
}

.card-footer {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-bottom: 5%;
}
.footer-content {
	width: 80%;
}
</style>
