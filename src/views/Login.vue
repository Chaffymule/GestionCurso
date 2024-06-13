<template>
  <div class="login-container">
    <div class="login-form">
		<img class="Mapache" src="../assets/Mapache.jpg">
      <h1>Iniciar sesión</h1>
      <form>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button @click="redirectToSidebar">Ingresar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import Home from '../views/Home.vue'
const login = () => {
  // Lógica para autenticar al usuario
  // Por ejemplo, enviar una solicitud al servidor
  // y redirigir a la página principal si las credenciales son válidas
};
const redirectToSidebar = () => {
  console.log('Redirigiendo al sidebar...');
  window.location.href = '../views/Home.vue'; // Reemplaza con la ruta correcta
};

</script>

<style lang="scss">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  margin-left: 35%;
  margin-right: 35%;
}

.Mapache{
	width: 40%;
	height: auto;
}

.login-form {
  max-width: 80%;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    width: 100%;
    padding: 0.5rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
