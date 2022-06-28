<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.colr_1
        span 3
      h1 Categorización de inventarios 

    .bg_grad-06
      .row.mb-5.justify-center
        .col-12.col-md-3.mb-3.mb-md-0
          figure
            img(src='@/assets/curso/tema3/t3-1.png', alt='Texto que describa la imagen')
        .col-12.col-md-5.align-items-center
          div
            p El inventario es la metodología aplicada para realizar el recuento exacto de los productos existentes en el almacén, por medio del cual se verifica la cantidad y valor de la mercancía.  
            p.mb-0.text-bold Según normativa se debe realizar la actualización mínima una vez al año y aplicar alguna de las metodologías:
      
      .row.mb-3
        .col-12.col-md-4.col-lg-7.justify-end
          .titulo-sexto.color-acento-contenido  
            h5 Figura 2.
            span Metodologías verificación y control de mercancías.
      
      .row.mb-5.justify-center
        .col-12.col-md-9.col-lg-9
          LineaTiempoE.color-acento-botones.mb-3.modif_25
            .row(titulo="GESTIÓN DE LAS EXISTENCIAS")
              .col-lg-12.mb-0
                p.mb-0 <b>LIFO</b> <em>(Last In First Out)</em>: último que entra es el primero que sale.  Habitualmente para productos que no tienen caducidad.
            .row
              .col-lg-12.mb-0
                p.mb-0 <b>FIFO</b> <em>(First In First Out)</em>: primero que entra es el primero que sale. La mercancía con mayor  es la que primero debe salir.
            .row
              .col-lg-12.mb-4.mb-lg-0
                p <b>FEFO:</b> el primero que caduca es el primero que sale. La mercancía se ubica de acuerdo a la fecha de vencimiento, para que salga primero.
            .row(titulo="METODOLOGÍAS DE CONTEO DE LA MERCANCÍA")
              .col-lg-12.mb-0
                p.mb-0 <b>PERIÓDICO:</b> el conteo se realiza al final del periodo.
            .row
              .col-lg-12.mb-0
                p.mb-0 <b>PERMANENTE:</b> se realiza continuamente la verificación de las existencias. El inventario permanece actualizado.
            .row
              .col-lg-12.mb-4.mb-lg-0
                p <b>FÍSICO:</b> verificación ocular  de las existencias registradas.  Importante realizar en periodos de baja actividad, para no interferir con el proceso.
            .row(titulo="DISTRIBUCIÓN DE INVENTARIOS (ABC)")
              .col-lg-12.mb-0
                p.mb-0 <b>PRODUCTOS A:</b> rotación de productos Alta o Muy Alta.
            .row
              .col-lg-12.mb-0
                p.mb-0 <b>PRODUCTOS B:</b> rotación de productos Media.
            .row
              .col-lg-12.mb-2
                p <b>PRODUCTOS C:</b> rotación de productos Baja o Nula.
          span <b>Nota.</b> Control de inventarios.

    p La gestión de existencias es el área encargada de regular y optimizar los niveles de <em>stock</em> en la instalación. Para ello, se suelen utilizar <b>programas informáticos que hacen un seguimiento preciso de los movimientos de las existencias.</b>
    p.mb-5 Esto se lleva a cabo con las siguientes herramientas:

    .row.mb-5.justify-center
      .col-12.col-md-5.bgr_20.p-5
        figure.mb-5.justify-center
          img.img140(src='@/assets/curso/tema3/t3-3.svg', alt='Texto que describa la imagen')
        h3.mb-5.text-center Dispositivos de lectura y transmisión de datos
        p.text-center.mb-0 Los terminales de radiofrecuencia y otros sistemas, como el <em>picking</em> por voz y el <em>pick-to-light</em>, sirven de enlace entre el sistema informático y el mundo físico.
      .col-12.col-md-5.bgr_21.p-5
        figure.mb-5.justify-center
          img.img140(src='@/assets/curso/tema3/t3-2.svg', alt='Texto que describa la imagen')
        h3.mb-5.text-center Sistema de gestión de almacenes (SGA)
        p.text-center.mb-0 Este <em>software</em> organiza todas las operaciones de la instalación, junto con el ERP (<em>Enterprise Resource Planning</em>) de su empresa, que alberga la base de datos común. Los SGA pueden optimizar la asignación de ubicaciones, la organización de las operaciones de <em>picking</em> y los movimientos, entre otras acciones. También garantizan el inventario en tiempo real y ayudan en todas las tareas de gestión documental.

    p.mb-5 Gracias a estos elementos, es posible establecer un sistema de trazabilidad, el cual  identifica las distintas etapas por las que pasa un producto en el almacén, por tanto, le proporciona un control exhaustivo de los flujos de materiales.

    .row.mb-5
      .col-12.col-md-5.mb-3.mb-md-0
        div.justify-center
          .titulo-sexto.color-acento-contenido.mb-3  
              h5 Figura 3.
              span <em>Stock</em> mercancías
        figure.mb-5.justify-center
          img(src='@/assets/curso/tema3/t3-4.png', alt='Texto que describa la imagen')
      .col-12.col-md-7.align-items-center
        div
          p La calidad y la eficiencia de la logística están totalmente vinculadas al <em>stock</em> de una empresa, ya que este sector representa más del 30 % de los costos totales de una operación. Ajustar las cantidades que se almacenan entre los procesos de distribución es fundamental también para reducir los costes excesivos y no solo facilitar los procedimientos en la cadena de entrega.
          .cajon.bgr_24.px-5.py-3
            .row  
              .col-12.col-md-3
                figure.justify-center
                  img.img100(src='@/assets/curso/tema3/t3-5.svg', alt='Texto que describa la imagen')
              .col-12.col-md-9.align-items-center
                p.mb-0.text-bold El <em>stock</em> es un sector que exige mucha atención ya que sus costes tienen un gran impacto en los resultados financieros de una empresa aunque dependen directamente del nivel de ventas. 

    p.mb-5.text-bold Acciones para organizar <em>stock</em> de manera eficaz

    .row.mb-5.justify-center
      .col-12.col-md-4.align-items-center
        ul.lista-ul--color
          li
            i.fas.fa-paper-plane.colr_3
            | Determinar el nivel de producto almacenado.
          li
            i.fas.fa-paper-plane.colr_3
            | El "reabastecimiento" de materiales.
          li
            i.fas.fa-paper-plane.colr_3
            | El control de las compras.
          li
            i.fas.fa-paper-plane.colr_3
            | Las entregas.
          li
            i.fas.fa-paper-plane.colr_3
            | Estructura del entorno físico.
          li
            i.fas.fa-paper-plane.colr_3
            | La organización del local de almacenamiento.
      .col-12.col-md-4
        figure
          img(src='@/assets/curso/tema3/t3-6.png', alt='Texto que describa la imagen')

    .cajon.bgr_25.px-5.py-3
      p Para ello, la gestión del inventario no debe realizarse por separado. Un buen <em>stock</em> no es más que el reflejo de una empresa organizada que se preocupa por el correcto almacenamiento de sus productos y el nivel de suministros que ofrece. 
      p.text-bold.mb-0 Organizar y gestionar el inventario de una empresa requiere tiempo y dedicación, pero es una tarea que efectivamente generará resultados empresariales.

</template>

<script>
export default {
  name: 'Tema3',
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
