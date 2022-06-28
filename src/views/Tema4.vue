<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.colr_1
        span 4
      h1 Administración y control de inventarios

    .row.mb-5.justify-center
      .col-12.col-md-5.col-lg-5.align-items-center.bg_grad-07.mb-3.mb-md-0
        p.mb-0 El <b>control de inventario</b> es el proceso por el cual una empresa administra las mercancías que mantiene en almacén. Esto, con el objetivo de recopilar información de la entrada y salida de los productos, buscando además el ahorro de costes.
      .col-12.col-md-5.col-lg-5
        figure
          img(src='@/assets/curso/tema4/t4-1.png', alt='Texto que describa la imagen')
    
    SlyderB.mb-5(:datos="datosSlyder")

    p.mb-5 Aclaramos que algunos autores  no reconocen el MRO como un tipo de inventario.  Relacionamos las mejores.

    .row.mb-5(data-aos="fade-right")
      .col-10.col-lg-4.position-relative
        h3.p-3.bgr_2.text-center Estrategias en la gestión de inventarios
        img.pst_3(src='@/assets/curso/tema4/t4-7.svg' alt='AvatarTop')
    
    p.mb-5 Existen diferentes tipos de inventario: materias primas, trabajos en curso (WIP), productos terminados, inventario de desacoplamiento, existencias de seguridad, materiales de embalaje, inventario de ciclo, inventario de servicio, tránsito, teórico, exceso y mantenimiento, reparación y operaciones (MRO). Aclaramos que algunos autores  no reconocen el MRO como un tipo de inventario.   Relacionamos las mejores estrategias en la gestión de inventarios: 

    .row.mb-5
      .col-12.col-md-4.mb-3.mb-md-0.align-items-center
        figure
          img(src='@/assets/curso/tema4/t4-8.svg', alt='Texto que describa la imagen')
      .col-12.col-md-8
        SlyderA(tipo="b").bgr_4.modif.modif_20.mb-5
          .row.p-3.p-md-5.p-lg-5
            .col-12
              h4 Análisis ABC:
              p.mb-5 Este método funciona identificando los tipos de existencias más y menos populares.
              h4 Seguimiento de lotes:
              p.mb-5 Este método agrupa artículos similares para hacer un seguimiento de las fechas de caducidad y rastrear los artículos defectuosos.
              h4 Envíos a granel:
              p.mb-5 Este método tiene en cuenta los materiales sin embalar que los proveedores cargan directamente en barcos o camiones. Implica comprar, almacenar y enviar el inventario a granel.
              h4 Consignación:
              p.mb-0 Cuando se practica la gestión de inventario en consignación, su empresa no pagará a su proveedor hasta que se venda un determinado producto. Ese proveedor también conserva la propiedad del inventario hasta que su empresa lo venda.
          .row.p-3.p-md-5.p-lg-5
            .col-12
              h4 <em>Cross-Docking:</em>
              p.mb-5 Con este método, usted descargará los artículos directamente del camión de un proveedor al camión de entrega. Se elimina esencialmente el almacenamiento.
              h4 Previsión de la demanda:
              p.mb-5 Esta forma de análisis predictivo ayuda a predecir la demanda de los clientes.
              h4 Envío directo:
              p.mb-5 En esta práctica, el proveedor envía los artículos directamente desde su almacén al cliente.
              h4 Cantidad económica de pedido (EOQ):
              p.mb-5 Esta fórmula muestra exactamente la cantidad de inventario que una empresa debe pedir para reducir los costes de mantenimiento y otros.
              h4 FIFO <em>(Last In First Out)</em> y LIFO <em>(First In First Out)</em>:
              p.mb-0 Primero en entrar, primero en salir (FIFO) significa que se mueven primero las existencias más antiguas. El último en entrar, primero en salir (LIFO) considera que los precios siempre suben, por lo que el inventario comprado más recientemente es el más caro y, por tanto, se vende primero.
          .row.p-3.p-md-5.p-lg-5
            .col-12
              h4 Inventario justo a tiempo (JIT):
              p.mb-5 Las empresas utilizan este método en un esfuerzo por mantener los niveles de <em>stock</em> más bajos posibles antes de una reposición.
              h4 Fabricación ajustada:
              p.mb-5 Esta metodología se centra en eliminar del sistema de fabricación los residuos o cualquier elemento que no aporte valor al cliente.
              h4 Planificación de necesidades de materiales (MRP):
              p.mb-5 Este sistema se encarga de la planificación, la programación y el control del inventario para la fabricación.
              h4 Cantidad mínima de pedido:
              p.mb-0 Una empresa que se basa en la cantidad mínima de pedido pedirá cantidades mínimas de inventario a los mayoristas en cada pedido para mantener los costes bajos.
          .row.p-3.p-md-5.p-lg-5
            .col-12
              h4 Fórmula de punto de pedido:
              p.mb-5 Las empresas utilizan esta fórmula para encontrar la cantidad mínima de existencias que deben tener antes de reordenar, y luego gestionar su inventario en consecuencia.
              h4 <em>Stock</em> de seguridad:
              p.mb-5 Una ética de gestión de inventarios que dé prioridad a las existencias de seguridad garantizará que siempre haya existencias adicionales reservadas en caso de que la empresa no pueda reponer esos artículos.
              h4 Seis <em>Sigma:</em>
              p.mb-5 Se trata de un método basado en datos para eliminar los residuos de las empresas en lo que respecta al inventario.
              h4 <em>Lean Six Sigma:</em>
              p.mb-0 Este método combina la gestión ajustada y las prácticas de <em>Six Sigma</em> para eliminar los residuos y aumentar la eficiencia.

    .row.mb-5(data-aos="fade-right")
      .col-10.col-lg-4.position-relative
        h3.p-3.bgr_2.text-center Las técnicas de gestión de inventarios
        img.pst_3(src='@/assets/curso/tema4/t4-9.svg' alt='AvatarTop')
    
    p.mb-5 La administración de inventarios es la contabilidad de los artículos, componentes y materias primas que una empresa utiliza en la producción o vende.  Un líder empresarial, debe llevar a la práctica la gestión de inventarios para asegurarse de que tiene suficientes existencias a mano y para identificar cuándo hay una escasez. Existen  diferentes tipos de inventario:

    .row.mb-5
      .col-12.col-md-8.mb-3.mb-md-0
        SlyderA(tipo="b").bgr_23.modif_21.modif_18.p-4
          div
            h4 Materias primas:
            p.mb-5 Las materias primas son los materiales que una empresa utiliza para crear y terminar los productos. Cuando el producto está terminado, las materias primas suelen ser irreconocibles respecto a su forma original, como el aceite utilizado para crear el champú.
            h4 Componentes:
            p.mb-5 Los componentes son similares a las materias primas en el sentido de que son los materiales que una empresa utiliza para crear y terminar productos, excepto que siguen siendo reconocibles cuando el producto está terminado, como un tornillo.
            h4 Trabajo en curso (WIP):
            p.mb-5 El inventario WIP se refiere a los artículos en producción e incluye materias primas o componentes, mano de obra, gastos generales e incluso materiales de embalaje.
            h4 Productos terminados:
            p.mb-0 Los productos terminados son artículos que están listos para la venta.
          div
            h4 Bienes de mantenimiento, reparación y operaciones (MRO):
            p.mb-5 los bienes de mantenimiento, reparación y operaciones (MRO) son inventarios - a menudo en forma de suministros - que apoyan la fabricación de un producto o el mantenimiento de una empresa.
            h4 Materiales de empaque y embalaje:
            p.mb-5 Hay tres tipos de materiales de embalaje. El embalaje primario protege el producto y lo hace utilizable. El embalaje secundario es el embalaje del producto terminado y puede incluir etiquetas o información de SKU. El embalaje terciario es el embalaje a granel para el transporte.
            h4 <em>Stock</em> de seguridad y stock de anticipación:
            p.mb-0 El <em>stock</em> de seguridad es el inventario extra que una empresa compra y almacena para cubrir eventos inesperados. El <em>stock</em> de seguridad tiene costes de transporte, pero contribuye a la satisfacción del cliente. Del mismo modo, las existencias de anticipación comprenden las materias primas o los artículos acabados que una empresa adquiere en función de las tendencias de las ventas y la producción. Si el precio de una materia prima está subiendo o se acerca la época de mayores ventas, una empresa puede comprar existencias de seguridad.
          div
            h4 Inventario de desacoplamiento:
            p.mb-5 El inventario de desacoplamiento es el término utilizado para los artículos extra o WIP que se mantienen en cada estación de la línea de producción para evitar las paradas de trabajo. Mientras que todas las empresas pueden tener existencias de seguridad, el inventario de desacoplamiento es útil si las partes de la línea trabajan a diferentes velocidades y sólo se aplica a las empresas que fabrican bienes.
            h4 Inventario de ciclo:
            p.mb-5 Las empresas piden el inventario cíclico en lotes para obtener la cantidad correcta de existencias con el menor coste de almacenamiento. Conozca más sobre las fórmulas de inventario cíclico en la "Guía esencial para la planificación de inventarios".
            h4 Inventario de servicio:
            p.mb-0 El inventario de servicios es un concepto de contabilidad de gestión que se refiere a la cantidad de servicios que una empresa puede prestar en un período determinado. Un hotel con 10 habitaciones, por ejemplo, tiene un inventario de servicio de 70 estancias de una noche en una semana determinada.
          div
            h4 Inventario de tránsito:
            p.mb-5 También conocido como inventario en tránsito, el inventario en tránsito es el <em>stock</em> que se mueve entre el fabricante, los almacenes y los centros de distribución. El inventario en tránsito puede tardar semanas en moverse entre las instalaciones.
            h4 Inventario teórico:
            p.mb-5 También llamado inventario contable, el inventario teórico es la menor cantidad de existencias que una empresa necesita para completar un proceso sin esperar. El inventario teórico se utiliza sobre todo en la producción y en la industria alimentaria. Se mide utilizando la fórmula real frente a la teórica.
            h4 Exceso de inventario:
            p.mb-0 También conocido como inventario obsoleto, el exceso de inventario es la mercancía o materia prima no vencida o no utilizada que una empresa no espera utilizar o vender, pero que aun así debe pagar por almacenar.
      .col-12.col-md-4.align-items-center
        figure
          img(src='@/assets/curso/tema4/t4-10.svg', alt='Texto que describa la imagen')
     
    .cajon.bgr_25.px-5.py-3.mb-5
      p.mb-0 Podemos concluir que el inventario de una organización, que a menudo se describe como el paso entre la fabricación y el cumplimiento de los pedidos, es fundamental para todas sus operaciones comerciales, ya que a menudo sirve como fuente principal de generación de ingresos. Independientemente del hecho de que el inventario puede describirse y clasificarse de numerosas maneras, es en última instancia su gestión la que afecta directamente a las capacidades de cumplimiento de pedidos de una organización.

    .row.justify-center
      .col-12.col-md-6.mb-3.mb-md-0.p-5.bg_grad-08
        p.mb-0 Por ejemplo, al hacer un seguimiento de las materias primas, las existencias de seguridad, los productos acabados o incluso los materiales de embalaje, las empresas están recopilando datos cruciales que influyen en sus futuras operaciones de compra y cumplimiento. Entender las tendencias de compra y el ritmo de venta de los artículos determina la frecuencia con la que las empresas necesitan reponer el inventario y qué artículos son prioritarios para la recompra. Disponer de esta información puede mejorar las relaciones con los clientes, el flujo de caja y la rentabilidad, a la vez que se reduce la cantidad de dinero que se pierde por el desperdicio de inventario, las roturas de <em>stock</em> y los retrasos en las reposiciones.
      .col-12.col-md-4.align-items-center
        figure
          img(src='@/assets/curso/tema4/t4-11.png', alt='Texto que describa la imagen')
    
    separador

    #t_4_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 4.1 Recibo y despacho de mercancía

    .row.mb-5
      .col-12.col-md-8.mb-3.mb-md-0.align-items-center
        div
          p La preparación de pedidos para última milla se denomina <em>picking</em>, esta etapa en el proceso logística es de mucha importancia para todos los centros de distribución, en este proceso se pueden generar reproceso si no se  hace la preparación de los pedidos de forma ordenada y atenta, es la garantía de que la mercancía embalada sea la apropiada para continuar en el recorrido al destino final, es por ello que la etapa de organización y preparación de las mercancías demanda eficiencia para no ver afectada la operación y por consiguiente dar cumplimiento con las promesas de valor a los clientes y no menoscabar la productividad de la empresa. 
          p.mb-0 <b>El <em>picking</em> es la actividad que realiza un equipo de operarios al momento de preparar los pedidos, consiste en la recogida y consolidación de cargas no unitarias que componen el pedido de un cliente.</b> El <em>picking</em> es una de las actividades más costosas en el almacenamiento, puesto que implica desplazamientos y recorridos del personal; representa entre el 45 % y 75 % del costo total de la operación. Por otro lado, la consolidación de mercancía es la combinación de un conjunto de envíos individuales e independientes en un mismo cargamento, para reducir costos generales de transporte. El <em>picking</em>  involucra cuatro (4) etapas; estas son:
      .col-12.col-md-4
        figure
          img(src='@/assets/curso/tema4/t4-12.svg', alt='Texto que describa la imagen')
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta-avatar.modif_16
        img.modif_15.img100(src='@/assets/curso/tema4/t4-13.svg' alt='AvatarTop')
        .tarjeta.bgr_26
          .p-4
            p.text-bold 1. Preparación:
            span <b>a.</b> Recolección de datos y entrega de documentos y órdenes clasificadas.
            br
            | <b>b.</b> Preparación de equipos requeridos.
      .tarjeta-avatar.modif_16
        img.modif_15.img100(src='@/assets/curso/tema4/t4-14.svg' alt='AvatarTop')
        .tarjeta.bgr_26
          .p-4
            p.text-bold 2. Recorrido:
            span <b>a.</b> Desde la zona de operaciones hasta el punto donde se ubica el producto.
            br
            | <b>b.</b> Desde el punto de ubicación al siguiente y así sucesivamente.
            br
            | <b>c.</b> Regreso a la zona de operaciones, se utiliza el concepto de secuenciación para garantizar el tiempo óptimo para este proceso. 
      .tarjeta-avatar.modif_16
        img.modif_15.img100(src='@/assets/curso/tema4/t4-15.svg' alt='AvatarTop')
        .tarjeta.bgr_26
          .p-4
            p.text-bold 3. Extracción:
            span También llamado retiro es  la actividad de  posicionarse donde se encuentra el producto a piso o en altura, hacer su extracción, recuento de producto y, devolución sobrante si es el caso.
      .tarjeta-avatar.modif_16
        img.modif_15.img100(src='@/assets/curso/tema4/t4-16.svg' alt='AvatarTop')
        .tarjeta.bgr_26
          .p-4
            p.text-bold 4. Verificación del pedido preparado:
            span <b>a.</b> Control, embalaje, acondicionado en cajas, precintado, pesaje y etiquetado.
            br
            | <b>b.</b> Traslado a zona de expedición y clasificación por transportistas en destino.
            br
            | <b>c.</b> Elaboración del <em>packing list</em> del transportista.

    separador

    #t_4_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 4.2 Inspección de elementos

    p.mb-5 La inspección técnica de los productos consiste en examinar y medir las características de calidad.

    .bg_grad-09
      .row.mb-5.justify-center.pst_2
        .col-12.col-md-3.mb-3.mb-md-0
          figure
            img(src='@/assets/curso/tema4/t4-17.svg', alt='Texto que describa la imagen')
        .col-12.col-md-5
          p.text.bold Permite identificar y analizar:
          ul.lista-ul--color
            li
              i.fas.fa-paper-plane.colr_2
              | Estado de las mercancías.
            li
              i.fas.fa-paper-plane.colr_2
              | Cumplimiento con la normatividad en operación y seguridad.
            li
              i.fas.fa-paper-plane.colr_2
              | Verifica mercancía almacenada.
            li
              i.fas.fa-paper-plane.colr_2
              | Distribución del almacén.
            li
              i.fas.fa-paper-plane.colr_2
              | Tipos de riesgo (entes de control). 
            li
              i.fas.fa-paper-plane.colr_2
              | Con frecuencias de tiempo diario.
            li
              i.fas.fa-paper-plane.colr_2
              | Por turnos, semanales, mensual, trimestral. 
            li
              i.fas.fa-paper-plane.colr_2
              | De acuerdo a las necesidades y requisitos.
    
    .row.mb-5.pst_2.justify-center
      .col-12.col-md-6.mb-3.mb-md-0 
        p.text-bold Objetivos 
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Inventario del estado general de las mercancías.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Describir las características del estado y condiciones de las instalaciones.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Mantenimiento y operatividad de los equipos.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Identificar, evaluar y categorizar los peligros y riesgos.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Sugerir posibles controles.
      .col-12.col-md-4.align-items-center
        figure
          img(src='@/assets/curso/tema4/t4-18.png', alt='Texto que describa la imagen')
    
    p.mb-5 El desarrollo de las inspecciones debe realizarse por fases, teniendo en cuenta sus características propias; así:

    TabsA.color-acento-botones.modif_22.mb-5(data-aos="zoom-in-down")
      .tarjeta.modif_23.p-4(titulo="Fase 1")
        .row.p-4  
          .col-12.col-lg-8
            h4 Fase 1
            p Planeación de la inspección, teniendo en cuenta quiénes la realizan, tiempo (lugar, fecha y hora), plano de las instalaciones e instrumentos necesarios para el desarrollo (listas de verificación).
          .col-12.col-lg-4
            figure
              img(src='@/assets/curso/tema4/t4-19.png', alt='Texto que describa la imagen') 
      .tarjeta.modif_23.p-4(titulo="Fase 2")
        .row.p-4  
          .col-12.col-lg-8
            h4 Fase 2
            p Desarrollo de la Inspección, aplicando las listas de verificación sobre aspectos clave como: almacenamiento de sustancias peligrosas, almacenamiento de mercancías perecederas, manipulación de cargas, orden y limpieza, manejo y transporte de mercancías, equipos y herramientas (incluye estanterías), riesgos de higiene y seguridad industrial, elementos de protección personal.
          .col-12.col-lg-4
            figure
              img(src='@/assets/curso/tema4/t4-20.png', alt='Texto que describa la imagen') 
      .tarjeta.modif_23.p-4(titulo="Fase 3")
        .row.p-4  
          .col-12.col-lg-8
            h4 Fase 3
            p  Informe, a través del cual se presentan los resultados de la actividad y se proponen las recomendaciones pertinentes y fundamentadas en los hallazgos.
          .col-12.col-lg-4
            figure
              img(src='@/assets/curso/tema4/t4-21.png', alt='Texto que describa la imagen') 

    p La aplicación de los procesos y procedimientos facilita y aporta información de referencia en la verificación de los productos, los errores pueden generar sobrecostos o retrasos en las operaciones, igualmente, reprocesos y pérdida de tiempo.
    p.mb-5.text-bold Variables o criterios de verificación:

    .row.mb-5.justify-center
      .col-12.col-md-5.bgr_20.p-5
        figure.mb-5.justify-center
          img.img140(src='@/assets/curso/tema4/t4-22.svg', alt='Texto que describa la imagen')
        h3.text-center Cualitativos:
        .row.justify-center
          .col-8
            p.mb-0 ●	Calidad 
            p.mb-0 ●	Estado de la mercancía 
      .col-12.col-md-5.bgr_21.p-5
        figure.mb-5.justify-center
          img.img140(src='@/assets/curso/tema4/t4-23.svg', alt='Texto que describa la imagen')
        h3.text-center Cuantitativos: 
        .row.justify-center
          .col-7
            p.mb-0 ●	Peso 
            p.mb-0 ●	Volumen
            p.mb-0 ●	Gramaje
    
    .row.mb-5.justify-center.align-items-center
      .col-12.col-md-4
        p.text-bold La identificación única por artículo o producto facilita:
        ul.lista-ul--color
          li
            i.fas.fa-paper-plane.colr_2
            | Control de los inventarios.
          li
            i.fas.fa-paper-plane.colr_2
            | Tipo de servicio.
          li
            i.fas.fa-paper-plane.colr_2
            span Verificación del <em>stock.</em>
          li
            i.fas.fa-paper-plane.colr_2
            | Verificación y trazabilidad de la mercancía.
          li
            i.fas.fa-paper-plane.colr_2
            | Operatividad en tiempo real. 
          li
            i.fas.fa-paper-plane.colr_2
            | Reducción de costos. 
      .col-12.col-md-4 
        figure
          img(src='@/assets/curso/tema4/t4-24.svg', alt='Texto que describa la imagen')

    p.mb-5 Mecanismos de identificación para los productos: 

    .row.mb-5.justify-center
      .col-12.col-md-3.col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5.p-xl-5.my-5
              p.mb-5.text-bold Código de Barras
              p.mb-0.text-bold Sistema Internacional GS1.
              p.mb-0 Codificación de unidades envasadas
              p.mb-0 Representación de caracteres numéricos o alfabéticos en forma de código.
            .tarjeta-slide__img.d-none.d-md-flex(:style="{'background-image': `url(${require('@/assets/curso/tema4/t4-25.png')})`}")
            .tarjeta-slide__img.d-flex.d-md-none(:style="{'background-image': `url(${require('@/assets/curso/tema4/t4-25-1.png')})`}")
      .col-12.col-md-3.col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5.p-xl-5.my-5
              p.mb-5.text-bold Código Datamatrix
              p.mb-0 <b>Código de barras bidimensionales</b> o código de respuesta rápida. Permiten almacenar información en una matriz de puntos. Reduce los errores en la lectura.
            .tarjeta-slide__img.d-none.d-md-flex(:style="{'background-image': `url(${require('@/assets/curso/tema4/t4-26.png')})`}")
            .tarjeta-slide__img.d-flex.d-md-none(:style="{'background-image': `url(${require('@/assets/curso/tema4/t4-26-1.png')})`}")
      .col-12.col-md-3.col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5.p-xl-5.my-5
              p.mb-5.text-bold Etiquetas electrónicas
              p.mb-0 <b>Etiqueta RFID</b>, permite identificación automática usando ondas radiofrecuencias.  Recurso más sofisticado, basado en circuitos y micropocesadores.
            .tarjeta-slide__img.d-none.d-md-flex(:style="{'background-image': `url(${require('@/assets/curso/tema4/t4-27.png')})`}")
            .tarjeta-slide__img.d-flex.d-md-none(:style="{'background-image': `url(${require('@/assets/curso/tema4/t4-27-1.png')})`}")
    
    .row.mb-5.justify-center
      .col-12.col-lg-8.bgr_27
        p.mt-3 <b>Nota.</b> Sistemas de verificación de mercancías.
    
    p.mb-5 A través de la realización del inventario se podrá realizar un recuento exacto de las mercancías, con el objeto de <b>controlar y verificar</b> las condiciones tanto físicas y de valor; por norma se debe realizar mínimo una vez al año; este ejercicio permitirá establecer el estado general de las mercancías.  Existen principalmente dos tipos de inventarios: los periódicos y los permanentes. Y uno en común que es el inventario físico.

    .row.mb-5
      .col-12.col-md-4
        .tarjeta-avatar.modif_16
          img.modif_15.img100(src='@/assets/curso/tema4/t4-28.svg' alt='AvatarTop')
          .tarjeta.bgr_28
            .p-4
              p.text-bold Inventario periódico
              p.mb-0 Se realiza al finalizar el periodo, el cual realiza el cómputo de toda la mercancía existente en el momento de aplicarlo.
      .col-12.col-md-4
        .tarjeta-avatar.modif_16
          img.modif_15.img100(src='@/assets/curso/tema4/t4-29.svg' alt='AvatarTop')
          .tarjeta.bgr_28
            .p-4
              p.text-bold Inventario permanente
              p.mb-0 Es aquel conteo que se realiza de manera continua tanto de entradas como salidas; es desarrollado con aplicaciones informáticas <em>(software)</em>, lo cual permite establecer diferencias por deterioros, daños, inconsistencias o pérdidas.
      .col-12.col-md-4
        .tarjeta-avatar.modif_16
          img.modif_15.img100(src='@/assets/curso/tema4/t4-30.svg' alt='AvatarTop')
          .tarjeta.bgr_28
            .p-4
              p.text-bold Inventario físico
              p.mb-0 Es realizado en el almacén para determinar las existencias físicas de las mercancías por medio de inspección ocular e ir anotando las unidades, lotes y/o referencias.
    
    .row.justify-center
      .col-12.col-md-4
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=iM7gUJ75_8w" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Video.</b> Control de inventarios.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'ADMINISTRACIÓN Y CONTROL DE INVENTARIOS',
        texto:
          'La administración de inventarios es la contabilidad de los artículos, componentes y materias primas que una empresa utiliza en la producción o venta.  Un líder empresarial, debe llevar a la práctica la gestión de inventarios para asegurarse de que tiene suficientes existencias a mano y para identificar cuándo hay una escasez.',
        imagen: require('@/assets/curso/tema4/t4-2.png'),
      },
      {
        titulo: 'ADMINISTRACIÓN Y CONTROL DE INVENTARIOS',
        texto:
          'El verbo "inventario" se refiere al acto de contar o enumerar artículos. Como término contable, el inventario es un activo corriente y se refiere a todas las existencias en las distintas fases de producción.',
        imagen: require('@/assets/curso/tema4/t4-3.png'),
      },
      {
        titulo: 'ADMINISTRACIÓN Y CONTROL DE INVENTARIOS',
        texto:
          'El inventario es un activo importante en el balance de la mayoría de las empresas; un exceso de inventario puede convertirse en un pasivo práctico.',
        imagen: require('@/assets/curso/tema4/t4-4.png'),
      },
      {
        titulo: 'ADMINISTRACIÓN Y CONTROL DE INVENTARIOS',
        texto:
          'Existen  diferentes tipos de inventario: materias primas, trabajos en curso (WIP), productos terminados, inventario de desacoplamiento, existencias de seguridad, materiales de embalaje, inventario de ciclo, inventario de servicio, tránsito, teórico, exceso y mantenimiento, reparación y operaciones (MRO).',
        imagen: require('@/assets/curso/tema4/t4-5.png'),
      },
      {
        titulo: 'ADMINISTRACIÓN Y CONTROL DE INVENTARIOS',
        texto:
          'Al mantener las existencias, tanto los minoristas como los fabricantes pueden seguir vendiendo y fabricando artículos; tener presente que el exceso de inventarios puede traer problemas financieros, el mismo forma parte de los activos.',
        imagen: require('@/assets/curso/tema4/t4-6.png'),
      },
    ],
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
