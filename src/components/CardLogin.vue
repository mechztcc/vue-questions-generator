<template>
	<div class="card">
		<div class="card-header">
			<h2>Bem-vindo novamente</h2>
			<hr />
		</div>
		<div class="card-body">
			<form >
				<label for="email">E-mail</label>
				<input type="text" v-model="email"/>
				<span class="error-message" v-if="emailError">{{ emailError }}</span>

				<label for="password">Senha</label>
				<input type="password" v-model="password" />
				<span class="error-message" v-if="passError">{{ passError }}</span>

				<div class="buttons">
					<button type="button" class="success" @click="validateForm()">
						Entrar
					</button>
					<button type="button" class="default">Criar conta gratuita</button>
				</div>
			</form>
		</div>
		<div class="card-footer">
			<div class="footer-content">
				<span>
					A entrar você aceita os <b>termos de acesso</b> & nossa
					<b>politica de privacidade</b>
				</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'app-card-login',
	data() {
		return {
			email: '',
			password: '',
			emailError: '',
			passError: '',
		};
	},
	methods: {
		validateForm() {
			if (!this.email) {
				this.emailError = 'E-mail é obrigatório';
			}

			if (!this.password || this.password.length < 6) {
				this.passError = 'Senha inválida';
			}

            if(this.password && this.password.length >= 6) {
                this.passError = ''
            }

            if(this.email && this.email.includes('@')) {
                this.emailError = ''
            }

            if(!this.emailError && !this.passError) {
                console.log('navegate');
            }
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
