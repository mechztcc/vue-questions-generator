<template>
	<div class="card">
		<div class="card-header">
			<h2>Crie sua conta gratuita</h2>
			<hr />
		</div>
		<div class="card-body">
			<form>
				<label for="email">E-mail</label>
				<input type="text" v-model.lazy.trim="email" />
				<span class="error-message" v-if="emailError">{{ emailError }}</span>

				<label for="password">Senha</label>
				<input type="password" v-model.trim="password" />
				<span class="error-message" v-if="passwordError">{{ passwordError }}</span>

				<label for="password">Repita senha</label>
				<input type="password" v-model.trim="repeatPassword"/>
				<span class="error-message" v-if="repeatPasswordError">{{ repeatPasswordError }}</span>

				<div class="buttons">
					<button class="success" type="button" @click="validateForm()">
						Enviar
					</button>
				</div>
			</form>
		</div>
		<div class="card-footer"></div>
	</div>
</template>
<script>
export default {
	name: 'app-card-create',
	data() {
		return {
			email: '',
			password: '',
            repeatPassword: '',
			emailError: '',
			passwordError: '',
            repeatPasswordError: ''
		};
	},
	methods: {
		validateForm() {
			if(!this.email) {
                this.emailError = 'E-mail é obrigatório'
            }
            if(!this.password) {
                this.passwordError = 'A senha é inválida'
            }
            if(this.password != this.repeatPassword) {
                this.repeatPasswordError = 'Senhas divergentes'
            }
            if(this.password&& this.email) {
               this.passwordError = ''
               this.emailError = ''
            }
            if(this.password == this.repeatPassword) {
                this.repeatPasswordError = ''
            }
            
		},
	},
};
</script>
<style>
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
	margin-bottom: 15%;
}

button {
	height: 30px;
	width: 100%;
	color: white;
	border: none;
	padding-right: 15px;
	padding-left: 15px;
	border-radius: 5px;
}

.success {
	background-color: #00adb5;
}

.error-message {
    color: white;
    border: 1px solid orange;
    background-color: orange;
    border-radius: 5px;
    width: 100%;
    margin-top: 1%;
}
</style>
