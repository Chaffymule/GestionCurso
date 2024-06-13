<template>
  <div class="back-container" @click="volver">
    <span class="material-icons">undo</span>
    <span class="back-text">Regresar</span>
  	</div>
  <main id="Home-page">
    <h1>Instrumentación Didáctica</h1>
    <section class="radioButton">
      <span>REVISION DE DOCUMENTOS</span><br>
      <div class="document-viewer" v-if="fileURL">
        <iframe :src="fileURL" frameborder="0"></iframe>
      </div>
      <div class="forms">
				<form action="" method="post">
					<input type="radio" id="opcion1" name="opciones">
					<label for="opcion1">Correcto</label><br>
					<input type="radio" id="opcion2" name="opciones">
					<label for="opcion2">En revision</label><br>
					<input type="radio" id="opcion3" name="opciones">
					<label for="opcion3">Revisado</label><br>
					<input type="radio" id="opcion4" name="opciones">
					<label for="opcion4">Incorrecto</label><br>
					<label>Observaciones</label><br>
					<textarea name="observaciones" id="observaciones"></textarea>
					<input type="submit" value="Enviar">
				</form>
        
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      fileURL: '/AvanceProgramatico.pdf' 
    }
  },
  methods: {
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
  transition: background-color 0.3s ease;
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

.radioButton{
  margin-top: 1%;
}
.radioButton input[type="radio"] {
    margin: 10px;
    transform: scale(1.5);
}

.radioButton input[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 7px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
}

.radioButton textarea {
  width: 100%;
	height: 60px;
	font-size: 15px;
	resize: none;
	padding-inline: 10px;
}

 .document-viewer {
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .document-viewer iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  #Home-page{
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin-bottom: 3%;  
    margin: 5%;
  }
</style>
