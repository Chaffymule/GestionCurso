<template>
  <main id="Home-page">
    <h1>Tracking</h1>
    <div class="tab">
      <div class="row hea">
        <div class="cell">Nombre del Maestro</div>
        <div class="cell">Materias</div>
        <div class="cell">Instrumentación Didáctica</div>
        <div class="cell">Planeación del curso</div>
        <div class="cell">Acuse del estudiante</div>
        <div class="cell">Evaluación Diagnóstica</div>
        <div class="cell">Carpetas de evidencias</div>
        <div class="cell">Listas de calificaciones parciales</div>
        <div class="cell">Evidencias de asesorías</div>
      </div>
      <div class="row" v-for="maestro in maestros" :key="maestro.nombre">
        <div class="cell">{{ maestro.nombre }}</div>
        <div class="cell">
          <span v-for="(documentos, materia) in maestro.materias" :key="materia">
            {{ materia }}<br>
          </span>
        </div>
        <div class="cell">
          <span v-for="(documentos, materia) in maestro.materias" :key="materia">
            {{ documentos['Instrumentación Didáctica'] ? '✔️' : '❌' }}<br>
          </span>
        </div>
        <div class="cell">
          <span v-for="(documentos, materia) in maestro.materias" :key="materia">
            {{ documentos['Planeación del curso'] ? '✔️' : '❌' }}<br>
          </span>
        </div>
        <div class="cell">
          <span v-for="(documentos, materia) in maestro.materias" :key="materia">
            {{ documentos['Acuse del estudiante'] ? '✔️' : '❌' }}<br>
          </span>
        </div>
        <div class="cell">
          <span v-for="(documentos, materia) in maestro.materias" :key="materia">
            {{ documentos['Evaluación Diagnóstica, resultados y acciones a tomar'] ? '✔️' : '❌' }}<br>
          </span>
        </div>
        <div class="cell">
          <span v-for="(documentos, materia) in maestro.materias" :key="materia">
            {{ documentos['Carpetas de evidencias'] ? '✔️' : '❌' }}<br>
          </span>
        </div>
        <div class="cell">
          <span v-for="(documentos, materia) in maestro.materias" :key="materia">
            {{ documentos['Listas de calificaciones parciales'] ? '✔️' : '❌' }}<br>
          </span>
        </div>
        <div class="cell">
          <span v-for="(documentos, materia) in maestro.materias" :key="materia">
            {{ documentos['Evidencias de asesorias y atención a alumnos'] ? '✔️' : '❌' }}<br>
          </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      maestros: [
        {
          nombre: 'Ana Sánchez',
          materias: {
            'Matematicas Discretas': {
              'Instrumentación Didáctica': true,
              'Planeación del curso': false,
              'Acuse del estudiante': true,
              'Evaluación Diagnóstica, resultados y acciones a tomar': true,
              'Carpetas de evidencias': false,
              'Listas de calificaciones parciales': true,
              'Evidencias de asesorias y atención a alumnos': true
            },
            'Probabilidad y estadistica': {
              'Instrumentación Didáctica': true,
              'Planeación del curso': true,
              'Acuse del estudiante': false,
              'Evaluación Diagnóstica, resultados y acciones a tomar': true,
              'Carpetas de evidencias': true,
              'Listas de calificaciones parciales': false,
              'Evidencias de asesorias y atención a alumnos': true
            }
          }
        },
        {
          nombre: 'Carlos López',
          materias: {
            'Base de datos': {
              'Instrumentación Didáctica': true,
              'Planeación del curso': true,
              'Acuse del estudiante': true,
              'Evaluación Diagnóstica, resultados y acciones a tomar': false,
              'Carpetas de evidencias': false,
              'Listas de calificaciones parciales': true,
              'Evidencias de asesorias y atención a alumnos': true
            },
            'Taller de base de datos': {
              'Instrumentación Didáctica': false,
              'Planeación del curso': true,
              'Acuse del estudiante': false,
              'Evaluación Diagnóstica, resultados y acciones a tomar': false,
              'Carpetas de evidencias': true,
              'Listas de calificaciones parciales': false,
              'Evidencias de asesorias y atención a alumnos': true
            }
          }
        },
		{
          nombre: 'Teresa Mendoza',
          materias: {
            'Desarrollo Web 2': {
              'Instrumentación Didáctica': false,
              'Planeación del curso': false,
              'Acuse del estudiante': true,
              'Evaluación Diagnóstica, resultados y acciones a tomar': false,
              'Carpetas de evidencias': true,
              'Listas de calificaciones parciales': true,
              'Evidencias de asesorias y atención a alumnos': true
            },
            'Programacion Web': {
              'Instrumentación Didáctica': true,
              'Planeación del curso': true,
              'Acuse del estudiante': false,
              'Evaluación Diagnóstica, resultados y acciones a tomar': true,
              'Carpetas de evidencias': true,
              'Listas de calificaciones parciales': false,
              'Evidencias de asesorias y atención a alumnos': false
            }
          }
        },
        {
          nombre: 'José Cordero',
          materias: {
            'Redes': {
              'Instrumentación Didáctica': false,
              'Planeación del curso': false,
              'Acuse del estudiante': true,
              'Evaluación Diagnóstica, resultados y acciones a tomar': false,
              'Carpetas de evidencias': false,
              'Listas de calificaciones parciales': false,
              'Evidencias de asesorias y atención a alumnos': true
            },
            'Ingeniería en software': {
              'Instrumentación Didáctica': true,
              'Planeación del curso': true,
              'Acuse del estudiante': false,
              'Evaluación Diagnóstica, resultados y acciones a tomar': true,
              'Carpetas de evidencias': true,
              'Listas de calificaciones parciales': false,
              'Evidencias de asesorias y atención a alumnos': false
            }
          }
        },
      ]
    };
  }
};
</script>

<style scoped>
.tab {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
}

.cell {
  flex: 1;
  padding: 10px;
}

.hea {
  font-weight: bold;
}
</style>
