<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Teorías del aprendizaje y su relación con el desarrollo psicopedagógico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 Los modelos pedagógicos no solo reflejan las teorías y prácticas educativas, sino que también evidencian cómo estas se adaptan a las necesidades y características de los estudiantes en distintos contextos. La psicopedagogía, al centrarse en el aprendizaje individual y colectivo, encuentra afinidades y contrastes con los diversos modelos pedagógicos. En la siguiente tabla se presentan las principales características de los modelos pedagógicos y su relación con los enfoques psicopedagógicos.
    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Modelo tradicional")
            p.mb-1 - Centrado en el docente como autoridad. 
            p.mb-1 - Aprendizaje pasivo basado en memorización. 
            p.mb-1 - Evaluación cuantitativa.
            p.mb-1 - Limitada adaptación a las necesidades individuales. Contrasta con el énfasis psicopedagógico en la personalización del aprendizaje.
          .div(titulo="Modelo conductista")
            p.mb-1  - Basado en estímulo-respuesta. 
            p.mb-1 - Cambios de conducta observables como indicador de aprendizaje. 
            p.mb-1 - Evaluación cuantitativa centrada en resultados. 
            p.mb-1 - Útil para establecer hábitos, pero no aborda aspectos emocionales y cognitivos complejos.
          .div(titulo="Modelo constructivista")
            p.mb-1 - Fomenta la autonomía del estudiante. 
            p.mb-1 - Centraliza el aprendizaje significativo. 
            p.mb-1 - El error es parte del proceso. 
            p.mb-1 - Evaluación cualitativa enfocada en el progreso individual. Compatible con la psicopedagogía al priorizar el aprendizaje contextualizado.
          .div(titulo="Modelo humanista")
            p.mb-1 - Centrado en el desarrollo integral del estudiante.  
            p.mb-1  - Promueve creatividad, autorrealización y autonomía. 
            p.mb-1  - Evaluación cualitativa basada en la autoevaluación. Alta afinidad con la psicopedagogía por su atención a la diversidad y desarrollo integral.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')

    h2 Definiciones clave: enfoques, teorías y modelos pedagógicos
    p.mb-4 En el ámbito educativo, es esencial distinguir entre enfoques pedagógicos, teorías del aprendizaje y modelos pedagógicos, ya que cada uno tiene un papel específico en la construcción de estrategias de enseñanza. La siguiente tabla presenta estas definiciones, proporcionando ejemplos para aclarar sus diferencias.
    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Enfoque pedagógico")
            p.mb-1 - Guía ideológica y práctica que orienta la enseñanza hacia un propósito específico. 
            p.mb-1 - Ejemplo: Enfoque liberador (fomenta pensamiento crítico y desarrollo ético) y enfoque ejecutivo (docente como facilitador de aprendizajes predefinidos). 
          .div(titulo="Teoría del aprendizaje")
            p.mb-1 - Sistema lógico que explica cómo se adquiere y desarrolla el conocimiento. 
            p.mb-1 - Ejemplo: Conductismo (aprendizaje estímulo-respuesta) y constructivismo (aprendizaje significativo mediante interacción con el entorno).
          .div(titulo="Modelo pedagógico")
            p.mb-1 - Construcción teórica que ajusta la realidad pedagógica a necesidades contextuales. 
            p.mb-1 - Ejemplo: Modelo tradicional (centrado en el docente) y modelo humanista (prioriza el desarrollo integral, incluyendo aspectos emocionales y sociales).

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.text-small
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=Q6Xf9Z4WUEU") Ed Knows & Suss Draws. (14 Diciembre 2021). Teorías del aprendizaje
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/228354?page=136.") Vargas Silva, F. A. (2019). Tendencias, corrientes y modelos pedagógicos: relaciones, semejanzas y diferencias
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/221583") López Díaz, R. A. (2019). Modelos pedagógicos y formación docente: apuntes de clase para su comprensión y resignificaciones en el aula y en las instituciones educativas: (1 ed.). Universidad de La Salle - Ediciones Unisalle. 
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Texto que describa la imagen')

    .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
      .p-4.p-md-5
        #Actividad
          <Actividad :cuestionario='cuestionario'/>


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Psicopedagogía - Unidad 1',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'Si un psicopedagogo se encuentra con un estudiante que presenta barreras en el aprendizaje, ¿cuál sería su enfoque principal según el texto?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Enfocarse únicamente en la evaluación psicológica del estudiante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Adaptar el currículo y crear estrategias pedagógicas para superar las barreras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Derivar al estudiante a un psiquiatra sin intervención.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ignorar las barreras y seguir con el currículo estándar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué características describen el espectro de acción de la psicopedagogía según el texto?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Abarca únicamente el ámbito clínico y terapéutico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se centra en la identificación y superación de barreras de aprendizaje mediante estrategias adaptativas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Es una disciplina científica con una epistemología completamente definida y delimitada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Integra elementos psiquiátricos en su intervención, para generar respuestas adaptativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cómo podría un psicopedagogo utilizar la historia de la psicopedagogía en su práctica?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para justificar la falta de intervención en el aula.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para entender las razones de su importancia en el sistema educativo actual.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Para centrarse únicamente en la teoría sin aplicación práctica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para evitar la colaboración con otras disciplinas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Quién es considerado uno de los máximos exponentes de la Teoría Cognitiva?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Jerome Bruner', esCorrecta: false },
            { id: 'b', texto: 'David Ausubel', esCorrecta: false },
            { id: 'c', texto: 'Jean Piaget', esCorrecta: true },
            { id: 'd', texto: 'Howard Gardner', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Según la Teoría Cognitiva, ¿cuál de los siguientes procesos es fundamental para el aprendizaje?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reproducción memorística', esCorrecta: false },
            { id: 'b', texto: 'Asimilación y acomodación', esCorrecta: true },
            { id: 'c', texto: 'Estímulos estandarizados', esCorrecta: false },
            { id: 'd', texto: 'Respuestas automáticas', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
