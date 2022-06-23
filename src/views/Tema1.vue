<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.colr_1
        span 1
      h1  Características del producto

    .bg_grad-01
      .row.mb-5.justify-center
        .col-12.col-md-6.col-lg-6.mb-3.mb-md-0.mb-lg-0.align-items-center(data-aos="fade-right")
          div
            p El producto o mercancía es el bien que una persona o empresa, puede vender o comprar a través de una transacción, también se define como cualquier elemento que sea posible intercambiarlo o comercializarlo en un mercado, toda mercancía tiene como característica satisfacer una necesidad del comprador o consumidor, con la venta de la mercancía se cubre una demanda específica. 
            p.mb-0.text-bold Para el manejo de mercancías en el almacén, se debe aplicar la normativa vigente de seguridad, la cual es la siguiente:
        .col-12.col-md-4.col-lg-4(data-aos="fade-left")
          figure.mb-5
            img(src='@/assets/curso/tema1/t1-1.png', alt='Texto que describa la imagen')
    
    figure.mb-5(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nyTqy5fuPJ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.text-bold A continuación se presenta la clasificación de mercancías según sus características y su naturaleza

    .bgr
      .row.mb-5.justify-center
        .col-12.col-md-8.col-lg-8(data-aos="fade-right").align-items-center
          p.p-4 Los centros de despacho deben asegurar una correcta manipulación y ubicación de la mercancía, para lo cual se requiere conocer características como: <b>dimensiones, forma, volumen, peso, ubicación, fragilidad, propiedades, estado físico y nivel de rotación.</b> Estas características permiten clasificarlas e identificar los equipos necesarios para las actividades de recepción, manipulación, ubicación y almacenamiento, las cuales se describen a continuación:
        .col-12.col-md-4.col-lg-4(data-aos="fade-left") 
          figure.mb-5x
            img(src='@/assets/curso/tema1/t1-2.png', alt='Texto que describa la imagen')
      
    .row.mb-3(data-aos="fade-right")
      .col-10.col-lg-4.position-relative
        h3.p-3.bgr_2.text-center Según sus características
        img.pst(src='@/assets/curso/tema1/t1-3.svg' alt='AvatarTop')
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/t1-5.png' alt='AvatarTop')
        h4 1. Según volumen y dimensiones
        p.mb-0 Muy voluminosa, Volumen excepcional, Voluminosas, Dimensiones especiales, Pequeñas,Paletizadas.
      .tarjeta.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/t1-6.png' alt='AvatarTop')
        h4 2. Según el peso
        p.mb-0 Ligera, Media, Pesada, Muy pesada.
      .tarjeta.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/t1-7.png' alt='AvatarTop')
        h4 3. Según su ubicación
        p.mb-0 Sencillas, Apilables.
      .tarjeta.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/t1-8.png' alt='AvatarTop')
        h4 4. Según su fragilidad
        p.mb-0 Ligeras, Resistentes, Frágiles.
      .tarjeta.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/t1-9.png' alt='AvatarTop')
        h4 5. Según sus propiedades
        p.mb-0 Duradero, Perecedero.
      .tarjeta.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/t1-10.png' alt='AvatarTop')
        h4 6. Según su estado fisico
        p.mb-0 Líquido, Sólido, Gaseoso.
      .tarjeta.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/t1-11.png' alt='AvatarTop')
        h4 7. Según su rotación
        p.mb-0 Baja, Media, Alta.

    .row.mb-3(data-aos="fade-right")
      .col-10.col-lg-4.position-relative
        h3.p-3.bgr_2.text-center Según su naturaleza
        img.pst(src='@/assets/curso/tema1/t1-4.svg' alt='AvatarTop')
    
    p.mb-5 Clasificación de las mercancías según su naturaleza.

    .row.mb-5
      .col-12.col-md-3.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-up")
        .bgr_3.p-4.h-100
          figure.mb-3.justify-center 
            img.img90(src='@/assets/curso/tema1/t1-12.svg' alt='AvatarTop')
          p.text-bold Mercancías no perecederas
          p.mb-0 Mercancías que a mediano y corto plazo, no se deterioran
          p.mb-0 Baja, Media, Alta.
      .col-12.col-md-3.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-down")
        .bgr_3.p-4.h-100
          figure.mb-3.justify-center 
            img.img90(src='@/assets/curso/tema1/t1-13.svg' alt='AvatarTop')
          p.text-bold Mercancías  perecederas 
          p.mb-0 Son los productos que inician el proceso de descomposición en corto plazo.
      .col-12.col-md-3.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-up")
        .bgr_3.p-4.h-100
          figure.mb-3.justify-center 
            img.img90(src='@/assets/curso/tema1/t1-14.svg' alt='AvatarTop')
          p.text-bold Mercancía frágil 
          p.mb-0 Se daña fácilmente al recibir contactos fuertes como golpes o vibraciones.
      .col-12.col-md-3.col-lg-3(data-aos="zoom-in-down")
        .bgr_3.p-4.h-100
          figure.mb-3.justify-center 
            img.img90(src='@/assets/curso/tema1/t1-15.svg' alt='AvatarTop')
          p.text-bold Mercancías peligrosas
          p.mb-0 Sustancias que, dadas las propiedades físicas y características químicas, disponen peligro o riesgo. 
    
    p.mb-5 Las mercancías peligrosas están catalogadas por tipos de la siguiente manera:  

    .row.mb-2(data-aos="zoom-in-up")
      .col-12.col-lg-6
        .row.justify-center
          hr.pst_1
          .col-12.col-lg-2.mb-3.mb-lg-0.align-items-center
            figure.justify-center
              img.img90(src='@/assets/curso/tema1/t1-16.svg' alt='AvatarTop')
          .col-12.col-lg-10.align-items-center
            div
              p.text-bold Clase 1. Explosivos: 
              | Contienen moléculas que pueden cambiar con rapidez el estado, generalmente a sólido, convirtiéndose en gas caliente y produciendo un efecto violento. 
      .col-12.col-lg-6
        .row.justify-center
          hr.pst_1
          .col-12.col-lg-2.mb-3.mb-lg-0.align-items-center
            figure.justify-center
              img.img90(src='@/assets/curso/tema1/t1-17.svg' alt='AvatarTop')
          .col-12.col-lg-10.align-items-center
            div
              p.text-bold Clase 2. Gases: 
              | Se transportan bajo presión y esta misma supone un peligro si se libera el gas repentinamente.
    .row.mb-3(data-aos="zoom-in-up")
      .col-12.col-lg-6    
        .row.justify-center
          hr.pst_1
          .col-12.col-lg-2.mb-3.mb-lg-0.align-items-center
            figure.justify-center
              img.img90(src='@/assets/curso/tema1/t1-18.svg' alt='AvatarTop')
          .col-12.col-lg-10.align-items-center
            div
              p.text-bold Clase 3. Líquidos inflamables: 
              | Generalmente son derivados del petróleo como por ejemplo la gasolina, otros líquidos inflamables se logran por procesos industriales como los alcoholes. 
      .col-12.col-lg-6    
        .row.justify-center
          hr.pst_1
          .col-12.col-lg-2.mb-3.mb-lg-0.align-items-center
            figure.justify-center
              img.img90(src='@/assets/curso/tema1/t1-19.svg' alt='AvatarTop')
          .col-12.col-lg-10.align-items-center
            div
              p.text-bold Clase 4. Sólidos inflamables: 
              | Son los materiales que pueden sufrir inflamaciones espontáneas, generan gran cantidad de calor como por ejemplo trinitrotolueno.  
    .row.mb-3(data-aos="zoom-in-up")
      .col-12.col-lg-6 
        .row.justify-center
          hr.pst_1
          .col-12.col-lg-2.mb-3.mb-lg-0.align-items-center
            figure.justify-center
              img.img90(src='@/assets/curso/tema1/t1-20.svg' alt='AvatarTop')
          .col-12.col-lg-10.align-items-center
            div
              p.text-bold Clase 5. Sustancias oxidantes: 
              | Son mercancías que por su alto contenido de oxígeno pueden ser muy reactivas.
      .col-12.col-lg-6 
        .row.justify-center
          hr.pst_1
          .col-12.col-lg-2.mb-3.mb-lg-0.align-items-center
            figure.justify-center
              img.img90(src='@/assets/curso/tema1/t1-24.svg' alt='AvatarTop')
          .col-12.col-lg-10.align-items-center
            div
              p.text-bold Clase 6. Sustancias Tóxicas e infecciosas:  
              | Se denominan así los venenos o químicos que pueden afectar al ser humano, en parte o en su totalidad, se debe evitar el contacto con dichos elementos, tragarlos o inhalarlos.  
    .row.mb-3(data-aos="zoom-in-up")
      .col-12.col-lg-6
        .row.justify-center
          hr.pst_1
          .col-12.col-lg-2.mb-3.mb-lg-0.align-items-center
            figure.justify-center
              img.img90(src='@/assets/curso/tema1/t1-21.svg' alt='AvatarTop')
          .col-12.col-lg-10.align-items-center
            div
              p.text-bold Clase 7. Material Radioactivo: 
              | Son mercancías que emiten radiación invisible y puede dañar el cuerpo y los sentidos según el tipo de radiación.
      .col-12.col-lg-6
        .row.justify-center
          hr.pst_1
          .col-12.col-lg-2.mb-3.mb-lg-0.align-items-center
            figure.justify-center
              img.img90(src='@/assets/curso/tema1/t1-22.svg' alt='AvatarTop')
          .col-12.col-lg-10.align-items-center
            div
              p.text-bold Clase 8. Corrosivos:  
              | Son mercancías que destruyen tejidos, pueden ser ácidos o mercancías alcalinas.
    .row.mb-3(data-aos="fade-right") 
      .col-12.col-lg-6
        .row.justify-center
          hr.pst_1
          .col-12.col-lg-2.mb-3.mb-lg-0.align-items-center
            figure.justify-center
              img.img90(src='@/assets/curso/tema1/t1-23.svg' alt='AvatarTop')
          .col-12.col-lg-10.align-items-center
            div
              p.text-bold Clase 9. Otras sustancias y artículos: 
              | Son mercancías peligrosas que no están catalogadas en las anteriores clases, entre ellas podemos contar el dióxido de carbono, las velas con humo de colores, las bengalas explosivas.

    






 

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
