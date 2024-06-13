<template>
	<main id="Home-page">
		<h1>Seguimiento Departamental</h1>
			<section id="mi-lista">
				<ul>
					<div class="container">
						<li class="maestro-item">
							<span class="maestro-nombre">Maestro: Ana Sánchez</span>
							<button class="maestro-boton" @click="mostrarMaterias('Juan Pérez')">Mostrar materias</button>
						</li>
					</div>
					<div class="container">
						<li class="maestro-item">
							<span class="maestro-nombre">Maestro: Carlos López</span>
							<button class="maestro-boton" @click="mostrarMaterias('Juan Pérez')">Mostrar materias</button>
						</li>
					</div>
					<div class="container">
						<li class="maestro-item">
							<span class="maestro-nombre">Maestro: Luisa Pérez</span>
							<button class="maestro-boton" @click="mostrarMaterias('Juan Pérez')">Mostrar materias</button>
						</li>
					</div>
					<div class="container">
						<li class="maestro-item">
							<span class="maestro-nombre">Maestro: Pedro Gómez</span>
							<button class="maestro-boton" @click="mostrarMaterias('Juan Pérez')">Mostrar materias</button>
						</li>
					</div>
					<div class="container">
						<li class="maestro-item">
							<span class="maestro-nombre">Maestro: María Rodríguez</span>
							<button class="maestro-boton" @click="mostrarMaterias('Juan Pérez')">Mostrar materias</button>
						</li>
					</div>
					<div class="container">
						<li class="maestro-item">
							<span class="maestro-nombre">Maestro: Javier Martínez</span>
							<button class="maestro-boton" @click="mostrarMaterias('Juan Pérez')">Mostrar materias</button>
						</li>
					</div>
					<div class="container">
						<li class="maestro-item">
							<span class="maestro-nombre">Maestro: Isabel García</span>
							<button class="maestro-boton" @click="mostrarMaterias('Juan Pérez')">Mostrar materias</button>
						</li>
					</div>
					<div class="container">
						<li class="maestro-item">
							<span class="maestro-nombre">Maestro: Fernando Torres</span>
							<button class="maestro-boton" @click="mostrarMaterias('Juan Pérez')">Mostrar materias</button>
						</li>
					</div>
				</ul>

				<ul>
					<div class="container">
						<li class="maestro-item">
							<span class="maestro-nombre">Maestro: Laura Ramírez</span>
							<button class="maestro-boton" @click="mostrarMaterias('Juan Pérez')">Mostrar materias</button>
						</li>
					</div><div class="container">
						<li class="maestro-item">
							<span class="maestro-nombre">Maestro: Sergio Morales</span>
							<button class="maestro-boton" @click="mostrarMaterias('Juan Pérez')">Mostrar materias</button>
						</li>
					</div><div class="container">
						<li class="maestro-item">
							<span class="maestro-nombre">Maestro: Patricia Guzmán</span>
							<button class="maestro-boton" @click="mostrarMaterias('Juan Pérez')">Mostrar materias</button>
						</li>
					</div>
					<div class="container">
						<li class="maestro-item">
							<span class="maestro-nombre">Maestro: Miguel Castillo</span>
							<button class="maestro-boton" @click="mostrarMaterias('Juan Pérez')">Mostrar materias</button>
						</li>
					</div>
					<div class="container">
						<li class="maestro-item">
							<span class="maestro-nombre">Maestro: Carmen Herrera</span>
							<button class="maestro-boton" @click="mostrarMaterias('Juan Pérez')">Mostrar materias</button>
						</li>
					</div>
					<div class="container">
						<li class="maestro-item">
							<span class="maestro-nombre">Maestro: Ricardo Peña</span>
							<button class="maestro-boton" @click="mostrarMaterias('Juan Pérez')">Mostrar materias</button>
						</li>
					</div>
					<div class="container">
						<li class="maestro-item">
							<span class="maestro-nombre">Maestro: Teresa Mendoza</span>
							<button class="maestro-boton" @click="mostrarMaterias('Juan Pérez')">Mostrar materias</button>
						</li>
					</div>
					<div class="container">
						<li class="maestro-item">
							<span class="maestro-nombre">Maestro: José Cordero</span>
							<button class="maestro-boton" @click="mostrarMaterias('Juan Pérez')">Mostrar materias</button>
						</li>
					</div>
				</ul>
			</section>
	</main>
</template>
<script>
export default {
  methods: {
    mostrarMaterias(maestro) {
      this.$router.push('/seguimientomaestros');
    }
  }
}
</script>

<style scoped>
.maestro-item {
	display: flex;
	flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    width: 95%;
}

.maestro-nombre {
  flex-grow: 1;
  margin-bottom: 20px;
}

.maestro-boton {
  margin-left: 10px;
  background-color: #43a881;
  color: white;
  border-radius: 10px;
  width: 300px;
  height: 40px;
  transition: background-color 0.3s ease; /* Añade una transición al color de fondo */
}

.maestro-boton:hover {
  background-color: #327358; /* Cambia el color de fondo cuando el mouse está sobre el botón */
}


#mi-lista {
  display: flex;
  justify-content: center;
  margin: 10px 00;
  justify-content: space-around;
}

#mi-lista ul li{
	margin: 40px;
}
</style>