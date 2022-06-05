<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info.colr
      h1 Introducción

    p La gestión de inventarios se refiere al proceso de pedir, almacenar, utilizar y vender el inventario de una empresa. Incluye la gestión de las materias primas, los componentes y los productos acabados, así como el almacenamiento y el procesamiento de dichos artículos.
    p El control de inventario permite a las empresas comprar la cantidad correcta de existencias en el momento adecuado, reduce los costes de almacenamiento y evita la falta de existencias. El cumplimiento de los pedidos es fundamental para todas las operaciones comerciales.
    p.mb-5.text-bold En el siguiente video se detalla como es el proceso de control de inventarios en una empresa.

     figure.mb-5(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
