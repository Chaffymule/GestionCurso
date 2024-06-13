<template>
	<div class="back-container" @click="volver">
    <span class="material-icons">undo</span>
    <span class="back-text">Regresar</span>
  	</div>
	<main id="Home-page">
		<section id="mi-lista">
		<h1 class="tit">Seguimiento Maestros</h1>
		<ul>
			<li class="container">
				<button class='materias' @click="mostrarDetalles('Matemáticas')">Materia: Matemáticas</button>
			</li>
			<li class="container">
				<button class='materias' @click="mostrarDetalles('Física')">Materia: Física</button>
			</li>
			<li class="container">
				<button class='materias' @click="mostrarDetalles('Química')">Materia: Química</button>
			</li>
			<li class="container">
				<button class='materias' @click="mostrarDetalles('Biología')">Materia: Biología</button>
			</li>
			<li class="container">
				<button class='materias' @click="mostrarDetalles('Programación')">Materia: Programación</button>
			</li>
		</ul>
	</section>
	</main>
</template>
<script>
export default {
  methods: {
    mostrarDetalles(materia) {
      this.$router.push('/carpetas');
    },
	volver() {
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
.back-container {
	display: flex;
	align-items: center;
	cursor: pointer;
	font-size: 20px;
	background-color: #43a881;
	color: white;
	padding: 10px;
	border-radius: 15px;
	position: absolute;
	top: 10px;
	left: 5%;
	overflow: hidden;
	transition: left 0.3s ease-in-out;
}

.back-container .material-icons {
 	margin-right: 10px;
}
.back-container::before {
	content: '';
	position: absolute;
	top: 0;
	left: -100%;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.1);
	transition: left 0.3s ease-in-out;
}

.back-container:hover::before {
  left: 0;
}

.container {
  	border: 1px solid black; 
  	margin-top: 10px;
  	background-color: #43a881;;
	border-radius: 10px;
	list-style-type: none;
}

.materias {
  width: 100%; 
  height: 100%; 
  text-align: left;
  color: white;
  padding: 10px;
  background-color: #43a881; /* Color de fondo del botón */
  border: 1px solid #43a881; /* Color del borde igual al color de fondo */
  border-radius: 10px; /* Borde redondeado */
  transition: background-color 0.3s ease; /* Transición suave del color de fondo */
}

.materias:hover {
  background-color: #327358; /* Cambia el color de fondo cuando el mouse está sobre el botón */
  border-color: #327358; /* Cambia el color del borde al mismo tiempo */
}


.reg{
	font-size: 20px;
}

#mi-lista{
	flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
    padding: 1.30rem;
	width: 95%;
	margin-top: 3%;
	block-size: 90%;
}

.tit{
	margin-bottom: 5%;
}
</style>