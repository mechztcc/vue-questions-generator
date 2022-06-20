<template>
	<div class="card">
		<div class="card-header">
			<h2>Crie sua conta gratuita</h2>
			<hr />
		</div>
		<div class="card-body">
			<form>
				<label for="email">E-mail</label>
				<input type="text" />

				<label for="password">Senha</label>
				<input type="password" />

                <label for="password">Repita senha</label>
				<input type="password" />
                <div class="buttons">
                    <button class="success">Enviar</button>
                </div>
			</form>
		</div>
        <div class="card-footer"></div>
	</div>
</template>
<script>
export default {};
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

</style>
