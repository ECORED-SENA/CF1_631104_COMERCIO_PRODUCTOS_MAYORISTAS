<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.colr_1
        span 2
      h1 Maestro de productos
    
    .row.mb-5.justify-center
      .col-12.col-md-4.col-lg-4(data-aos="fade-right")
        figure.mb-5
          img(src='@/assets/curso/tema2/t2-1.png', alt='Texto que describa la imagen')
      .col-12.col-md-6.col-lg-6.align-items-center.bg_grad-02(data-aos="fade-left")
        div
          p El  maestro de productos es una solución de gestión de datos de los inventarios que recopila, valida, enriquece y agrupa todos los datos relacionados con los productos de la organización en una copia completa, precisa y fácil de reportar. 
          p.text-bold Los datos de los productos varían de acuerdo con:
    
  
    SlyderA(tipo="b").bgr_4.modif.modif_2.mb-5
      .row.p-3.p-md-5.p-lg-5
        .col-12.col-md-4.col-lg-4
          h4.mb-md-5.mb-lg-5 Tipos de productos
          p Se clasifican de acuerdo con dos elementos fundamentales; su nivel de transformación física o procesamiento y su tipo de uso o mercado destino.
        .col-12.col-md-8.col-lg-8
          figure
            img(src='@/assets/curso/tema2/t2-2.png', alt='Texto que describa la imagen')
      .row.p-3.p-lg-5
        .col-12.col-md-4.col-lg-4
          h4.mb-md-5.mb-lg-5 Línea de productos
          p Son un grupo de artículos estrechamente relacionados, ya sea porque satisfacen una clase de necesidad o porque se usan conjuntamente.
        .col-12.col-md-8.col-lg-8
          figure
            img(src='@/assets/curso/tema2/t2-3.png', alt='Texto que describa la imagen')
      .row.p-3.p-lg-5
        .col-12.col-md-4.col-lg-4
          h4.mb-md-5.mb-lg-5 Esquemas de precios (facturación)
          p Debe cubrir los costes de la materia prima, insumos, la mano de obra, la tecnología, la maquinaria o equipo que empleas, el alquiler de local, mantenimiento de equipos, sueldos, entre otros factores usados en su elaboración.
        .col-12.col-md-8.col-lg-8
          figure
            img(src='@/assets/curso/tema2/t2-4.svg', alt='Texto que describa la imagen')
      .row.p-3.p-lg-5
        .col-12.col-md-4.col-lg-4
          h4.mb-md-5.mb-lg-5 Jerarquía de productos
          p Es la escala en que ordenamos los productos de acuerdo a la línea a la que pertenecen.
        .col-12.col-md-8.col-lg-8
          figure
            img(src='@/assets/curso/tema2/t2-5.svg', alt='Texto que describa la imagen')
      .row.p-3.p-lg-5
        .col-12.col-md-4.col-lg-4
          h4.mb-md-5.mb-lg-5 Detalles históricos
          p Las ventas de los últimos años, la tendencia de la tasa de expansión del mercado, cuota de participación de los productos, tendencia de los pedidos medios, niveles de rotación de los productos, comportamiento de los precios, el concepto histórico se aplica al menos a los tres últimos años.
        .col-12.col-md-8.col-lg-8
          figure
            img(src='@/assets/curso/tema2/t2-6.png', alt='Texto que describa la imagen')

    p.mb-5 Cualidades de un buen maestro de productos:

    .row.mb-5.justify-center
      .col-12.col-md-6.align-items-center.mb-3.mb-md-0(data-aos="fade-right")
        div
          p.text-bold Un buen maestro de productos establecerá:
          ul.lista-ul--color
            li.mb-4
              i.fas.fa-paper-plane.colr_2
              | Flujos de trabajo adecuado.
            li.mb-4
              i.fas.fa-paper-plane.colr_2
              | Elementos de datos críticos, dentro de los atributos de los productos.
            li.mb-4
              i.fas.fa-paper-plane.colr_2
              | Identifica los procesos mediante los cuales se ingieren y gobiernan los datos de los productos, independientemente de cómo estén definidos dentro de la organización. 
      .col-12.col-md-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/t2-7.png', alt='Texto que describa la imagen')

    p A nivel operativo, las empresas crean gran cantidad de datos, por grupos diferentes, a veces aislados, y con objetivos específicos.
    p.mb-5.text-bold Grupos de datos de los productos: 

    .row.mb-5
      .col-12.col-md-3
        figure
          img(src='@/assets/curso/tema2/t2-8.svg', alt='Texto que describa la imagen')
      .col-12.col-md-8
        .row.bgr_5.p-3.p-md-5
          .col-12.col-md-4.mb-3.mb-md-0
            p.text-bold Primer grupo
            ul.lista-ul--color
              li.mb-2
                i.fas.fa-paper-plane.colr_4
                | Productos nuevos.
              li.mb-2
                i.fas.fa-paper-plane.colr_4
                | Complejos.
              li.mb-2
                i.fas.fa-paper-plane.colr_4
                | Personalizados. 
          .col-12.col-md-4.modif_3.mb-3.mb-md-0
            p.text-bold Segundo grupo
            ul.lista-ul--color
              li.mb-4
                i.fas.fa-paper-plane.colr_4
                | División, sucursal o canal de ventas (es decir, de distribución).
          .col-12.col-md-4.modif_3
            p.text-bold Tercer grupo
            ul.lista-ul--color
              li.mb-4
                i.fas.fa-paper-plane.colr_4
                | Matices, diferencia de color. 

    separador

    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 2.1  Etiquetado de productos
    
    .row.justify-center.mb-5(data-aos="zoom-out-up")
      .col-12.col-lg-10
        .bloque-texto-g.bgr_6.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/t2-9.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p El etiquetado es el proceso de identificación de un producto mediante la adición de una etiqueta que proporciona información sobre el mismo, le da una identidad propia que le permite destacarse en el mercado.
            br
            br 
            p.mb-0 Las etiquetas se colocan en el lugar más visible, de forma que permita su lectura óptica o automática, con medios mecánicos o por el personal encargado de su manipulación.
    
    p.mb-5 Las funciones del etiquetado las vemos a continuación:

    .row.mb-5.justify-between
      .col-12.col-md-4.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/tema2/t2-10.png', alt='Texto que describa la imagen')
      .col-12.col-md-3(data-aos="zoom-in-down").mb-3.mb-md-0
        div.position-relative.mb-3.mb-md-5
          .modif_4
          p #[strong 1. Identificación.]  
            | El etiquetado confiere a un producto una identidad propia que lo distingue de otros en el mercado.
        div.position-relative.mb-3.mb-md-5
          .modif_5
          p #[strong 2. Casificación.] 
            | El etiquetado clasifica las cosas en distintos grados.
        div.position-relative.mb-3.mb-md-5
          .modif_6
          p #[strong 3. Protección del consumidor.]  
            | Protege a los consumidores del engaño de los fabricantes o de la manipulación de los hechos.
        div.position-relative
          .modif_7
          p #[strong 4. Cumplimiento de la ley.]  
            | Permite a la empresa cumplir con todas las normas legales poniendo todas las advertencias reglamentarias en los envases de los productos.
      .col-12.col-md-3(data-aos="zoom-in-up")
        div.position-relative.mb-3.mb-md-5
          .modif_8
          p #[strong 5. Promoción.]  
            | El etiquetado es una herramienta importante en la comercialización del producto. Hace que el producto sea más atractivo y atrae la atención de la gente destacando aspectos cruciales.
        div.position-relative.mb-3.mb-md-5
          .modif_9
          p #[strong 6. Códigos de barras.]  
            | Los códigos de barras, los códigos universales de producto y las etiquetas RFID son habituales para permitir la gestión automatizada de la información en la logística y la venta al por menor.
        div.position-relative
          .modif_10
          p #[strong 7. Especificaciones técnicas.]  
            | Las especificaciones técnicas para las etiquetas  cada sector de la economía las implementa acorde la normatividad y producto.

    separador

    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 2.2  Codificación de productos

    .bg_grad-03.mb-5
      .row.mb-5.justify-center
        .col-12.col-md-5.align-items-center.mb-3.mb-md-0(data-aos="fade-right")
          div
            p Codificar significa fijar un código a un producto; posibilita una buena organización de las existencias, lo cual influye de manera positiva en cada una de las ocupaciones que se desarrollan en la instalación. El proceso de codificación de mercancías se basa en detectar los productos de modo inequívoco con un código o símbolo. 
            p.text-bold.mb-0 Este código se asocia a una etiqueta adherida al producto, que dejará entrar a él electrónicamente.
        .col-12.col-md-3(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema2/t2-11.png', alt='Texto que describa la imagen')
      .row.mb-5.justify-center
        .col-12.col-md-3.mb-3.mb-md-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema2/t2-12.svg', alt='Texto que describa la imagen')
        .col-12.col-md-7(data-aos="fade-left")
          p.text-bold Propiedades primordiales:
          ul.lista-ul--color
            li
              i.fas.fa-paper-plane.colr_2
              | El fabricante del producto.
            li
              i.fas.fa-paper-plane.colr_2
              | Fecha de llegada al depósito.
            li
              i.fas.fa-paper-plane.colr_2
              | Envasado.
            li
              i.fas.fa-paper-plane.colr_2
              | Caducidad.
            li
              i.fas.fa-paper-plane.colr_2
              | Componentes o peligrosidad.
            li
              i.fas.fa-paper-plane.colr_2
              | Detectar la mercancía de forma inequívoca (no puede haber 2 productos con el mismo código).
            li
              i.fas.fa-paper-plane.colr_2
              | El sistema de administración de bodegas juega un papel protagonista en este proceso. 
            li
              i.fas.fa-paper-plane.colr_2
              | El software más común usado en logística para administrar almacenes es conocido como el WMS.
            li
              i.fas.fa-paper-plane.colr_2
              | Almacenamiento de mercancías de menor tamaño.
            li
              i.fas.fa-paper-plane.colr_2
              | Control intensivo de los artículos y registro de movimientos.
            li
              i.fas.fa-paper-plane.colr_2
              | Flujos de mercancía y poder optimizarlos. 
            li
              i.fas.fa-paper-plane.colr_2
              | Debido a la codificación y apoyo de un WMS, los operarios tienen la posibilidad de ubicar y expedir productos con más velocidad y menos errores. 
    
    .row.mb-5.justify-center.pst_2
      .col-12.col-md-6.align-items-center.mb-3.mb-md-0
        div
          p.text-bold Funcionalidad Codificación UNSPSC
          p La metodología uniforme de codificación utilizada para clasificar productos y servicios está fundamentada en un acuerdo jerárquico y en una estructura lógica de la <b>The United Nations Standard Products and Services Code® - UNSPSC –</b> entidad Estándar de Productos y Servicios de Naciones Unidas. La versión implementada en Colombia es la UNSPSC, V.14.080.
      .col-12.col-md-4
        figure
          img(src='@/assets/curso/tema2/t2-13.png', alt='Texto que describa la imagen')

    p.mb-5 La importancia de la codificación de productos, lo detallamos a continuación:

    TabsA.color-acento-botones.modif_11.mb-5(data-aos="zoom-in-down")
      .tarjeta.modif_12.p-4(titulo="Es de manejo simple")
        .row.p-4  
          .col-12.col-md-6
            h4 Es de manejo simple 
            p Es un sistema estándar de codificación de bienes y servicios, elaborado para objetivos comerciales de compras y adquisiciones. Es flexible, versátil, de forma fácil adaptable a las necesidades locales y usado en catálogos electrónicos, motores de consulta en internet y sistemas de aplicación de adquisiciones. 
          .col-12.col-md-6
            figure
              img(src='@/assets/curso/tema2/t2-14.png', alt='Texto que describa la imagen')
      .tarjeta.modif_12.p-4(titulo="Es generalizado y reconocido")
        .row.p-4  
          .col-12.col-md-6
            h4 Es generalizado y reconocido 
            p Es un procedimiento de codificación de vasta difusión y de generalizado conocimiento lo que posibilita a proveedores y consumidores “hablar el mismo lenguaje” al integrar en un solo número el flujo total del proceso de compra.
          .col-12.col-md-6
            figure
              img(src='@/assets/curso/tema2/t2-15.png', alt='Texto que describa la imagen')
      .tarjeta.modif_12.p-4(titulo="Es coherente y completo")
        .row.p-4  
          .col-12.col-md-6
            h4 Es coherente y completo 
            p Es un sistema consistente y completo que posibilita la representación de cada una de las categorías importantes para clasificar y conocer a los proveedores, así como revelar modalidades de añadidura de demanda.  
          .col-12.col-md-6
            figure
              img(src='@/assets/curso/tema2/t2-16.png', alt='Texto que describa la imagen')
      .tarjeta.modif_12.p-4(titulo="Promueve la anticorrupción")
        .row.p-4  
          .col-12.col-md-6
            h4 Promueve la anticorrupción 
            p La selección de un sistema estándar de codificación como el UNSPSC tiene repercusiones significativas para una agenda anticorrupción mediante la promoción de la competencia y la transparencia. 
          .col-12.col-md-6
            figure
              img(src='@/assets/curso/tema2/t2-17.png', alt='Texto que describa la imagen')
      .tarjeta.modif_12.p-4(titulo="Simplifica  la tarea de los consumidores")
        .row.p-4  
          .col-12.col-md-6
            h4 Simplifica  la tarea de los consumidores 
            p Provee un esquema de directrices y límites que agrupa y desagrupa productos semejantes.  Otorga una forma simple para las entidades compradoras de detectar necesidades de productos y servicios y oportunidades de comercio a futuros proveedores. 
          .col-12.col-md-6
            figure
              img(src='@/assets/curso/tema2/t2-18.png', alt='Texto que describa la imagen')
      .tarjeta.modif_12.p-4(titulo="Todos lo tienen la posibilidad de utilizar")
        .row.p-4  
          .col-12.col-md-6
            h4 Todos lo tienen la posibilidad de utilizar 
            p Es de independiente utilización para uso de consumidores y vendedores, quienes lo tienen la posibilidad de integrar en sus sistemas electrónicos de compras y suministros. La utilización del UNSPSC aumenta la eficiencia y la efectividad en el desempeño de los procesos contractuales y disminuye los precios de producir y conservar un sistema de codificación personal.  
          .col-12.col-md-6
            figure
              img(src='@/assets/curso/tema2/t2-19.png', alt='Texto que describa la imagen')
      .tarjeta.modif_12.p-4(titulo="Permite el ahorro")
        .row.p-4  
          .col-12.col-md-6
            h4 Permite el ahorro 
            p Posibilita hacer estudio de costos efectivos que mejoran el suministro estratégico, maximizan el retorno sobre la inversión y aceleran el proceso de hallazgo de oportunidades de ahorro. Su utilización garantiza que la investigación de costos no es un esfuerzo de una única vez, sino una inversión integral y continua en el proceso de racionalización del gasto.
          .col-12.col-md-6
            figure
              img(src='@/assets/curso/tema2/t2-20.png', alt='Texto que describa la imagen') 

    h3.mb-5 Ventajas de la codificación de productos

    p.text-bold La codificación es de enorme utilidad en todos los eslabones de la cadena logística, desde el fabricante hasta el consumidor final. A los empresarios y fabricantes, les ayuda a estar al corriente del estado de sus existencias y a ubicar los artículos con velocidad
    p.mb-5 Los clientes, por su lado, se benefician de las buenas prácticas logísticas que implementan las organizaciones y, por consiguiente, de que haya productos en stock una vez que van a mercar o de recibir rápido y sin errores sus demandas en línea. 

    p A continuación se muestran las siguientes ventajas:

    .row
      .col-12.col-md-6
        figure
          img(src='@/assets/curso/tema2/t2-21.svg', alt='Texto que describa la imagen')
      .col-12.col-md-6
        SlyderA(tipo="b").bgr_8.modif_13.modif_2.mb-5.p-3.p-md-5
          div
            span.bgr_7.text-bold 1. 
            | <b>Velocidad en las recepciones</b>
            p.my-5 Si todos los productos que llegan al depósito permanecen etiquetados, tienen la posibilidad de identificarse más velozmente. En el instante en que se lee su etiqueta por medio de un terminal de radiofrecuencia, el artículo queda registrado automáticamente en el sistema. 
            figure
              img(src='@/assets/curso/tema2/t2-22.png', alt='Texto que describa la imagen')
          div
            span.bgr_9.text-bold 2. 
            | <b>Trazabilidad</b>
            p.my-5 Al tener todos los productos ubicados, es simple hacer un seguimiento de las diferentes fases por las que transita la mercancía.  
            figure
              img(src='@/assets/curso/tema2/t2-23.png', alt='Texto que describa la imagen')
          div
            span.bgr_10.text-bold 3. 
            | <b>Control del <em>stock</em> en tiempo real</b>
            p.my-5 Se puede conocer en todo instante el número preciso de existencias en el depósito.   
            figure
              img(src='@/assets/curso/tema2/t2-24.png', alt='Texto que describa la imagen')
          div
            span.bgr_11.text-bold 4. 
            | <b>Entendimiento más profundo del producto</b>
            p.my-5 Cuantos más datos se tengan, más sencillo va a ser tomar elecciones referente a cómo mejorar las operativas y anticiparse a las novedosas solicitudes de los consumidores.   
            figure
              img(src='@/assets/curso/tema2/t2-25.png', alt='Texto que describa la imagen')
          div
            span.bgr_12.text-bold 5. 
            | <b>Alistamiento de pedidos de manera eficiente</b>
            p.my-5 El <em>picking</em> es una de las operaciones que necesita más tiempo y recursos. Contar con todos los artículos controlados e ubicados aporta velocidad, puesto que el WMS sabe la localización precisa de cada SKU y da las directivas exactas a los operarios referente a cómo localizarlas.    
            figure
              img(src='@/assets/curso/tema2/t2-26.png', alt='Texto que describa la imagen')
          div
            span.bgr_13 6. 
            | <b>Sin errores</b>
            p.my-5 Disponer de la codificación reconocida previene extravíos e equivocaciones en cualquier operativa, lo cual redunda en un mejor servicio logístico, una más grande satisfacción del comprador y un ahorro de precios en los costos.     
            figure
              img(src='@/assets/curso/tema2/t2-27.png', alt='Texto que describa la imagen')

    separador

    #t_2_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 2.3 Conservación de mercancía

    p.mb-5 La gestión de almacenamiento para el manejo de productos, tener fácil acceso al material y capacidad de movimiento desde la posición de almacenamiento hasta los muelles de carga. El uso correcto del equipo permite mejorar la gestión de almacenamiento, para artículos con alta rotación se deben usar equipos que permitan recogerlos de manera fácil. El sitio o espacio físico donde los productos o materias primas son depositados, obtiene el nombre de depósito, es donde aguardan a ser trasladados a la fábrica o bien, a su venta.

    figure.mb-5(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/QaUztOMK6iw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
     
    .row.mb-5
      .col-12.col-md-8.mb-3.mb-md-0
        p.text-bold Técnicas de manipulación de la mercancía
        p Las técnicas de manipulación de productos más favorables de acuerdo a las características del producto son los equipos de manipulación para mover y trasladar mercancías y  los equipos de almacenamiento, como estantes, cajas, armarios, suelos, silos, contenedores, etc.
        p La <b>tecnología de manipulación</b> de las <b>mercancías</b> consiste en el uso de todas aquellas herramientas tecnológicas que nos ayudan a mover las <b>mercancías</b> de un lugar a otro dentro del almacén, reduciendo significativamente el esfuerzo físico del personal, los riesgos, el tiempo de operación para la realización de estas.  Las nuevas tecnologías de manipulación nos ayudan a mover productos de un lugar a otro reduciendo esfuerzo físico, riesgos y tiempo.  De igual forma las actividades de manipulación de mercancías se pueden utilizar sistemas manuales o automatizados, lo cual requiere recursos humanos y materiales. 
      .col-12.col-md-4
        .row.justify-center
          .col-10.col-md-12.col-lg-10
            .titulo-sexto.color-acento-contenido  
              h5 Figura 1.
              span Conservación productos
        figure
          img(src='@/assets/curso/tema2/t2-28.png', alt='Texto que describa la imagen')

    p.mb-5 A continuación, se presenta la clasificación y descripción general de los equipos de manipulación y movimentación:

    .row.mb-5(data-aos="fade-right")
      .col-10.col-lg-4.position-relative
        h3.p-3.bgr_2.text-center Dinámicos sin traslado
        img.pst(src='@/assets/curso/tema2/t2-29.svg' alt='AvatarTop')
    
    p.mb-5 Aquellos equipos que están fijos al piso o techo de la edificación y pueden realizar algún tipo de transporte, como aparece en la siguiente tabla:

    .row.mb-3.justify-center(data-aos="zoom-out-up")
      .col-12.col-md-5
        .titulo-sexto.color-acento-contenido  
          h5 Tabla 1.
          span Clasificación equipos dinámicos (sin traslado)
      .col-12.col-md-11
        .tabla-a.color-acento-contenido.mb-5.modif_17 
          table.bgr_17
            caption.text-center Nota. Características generales de los equipos. 
            thead
              tr
                th(colspan="2") Equipo
                th Características
                th Imagen
            tbody
              tr
                td.bgr_14.text-center.modif_14(rowspan="2")
                  p.mb-0.text-bold Banda 
                  p.mb-0.text-bold transportadora
                td.bgr_15.text-bold.text-center Transportadora de banda
                td.bgr_16.text-small.ps-4 - Plataforma de goma deslizante, sobre conjunto de rodillos.
                  br
                  |- Aplica para embalajes de base irregular.
                  br
                  |- Transporte a granel.
                  br
                  |- Adecuada para trayecto largos, con curvas y diferentes niveles.
                td.justify-center 
                  img.img180(src='@/assets/curso/tema2/t2-30.png' alt='AvatarTop') 
              tr
                td.bgr_15.text-bold.text-center Transportadora de rodillos
                td.bgr_16.text-small.ps-4 - Plataforma de rodillos, sobre rodamientos.
                  br
                  |- Opera en función del tipo de mercancía.
                  br
                  |- Los productos se desplazan como consecuencia de la gravedad.
                td.justify-center 
                  img.img180(src='@/assets/curso/tema2/t2-31.png' alt='AvatarTop')
              tr
                td.bgr_14.text-bold.modif_14 
                  p.mb-0.text-bold.text-center Lanzadera
                td.bgr_15.text-bold.text-center Vehículo que comunica varias áreas del almacén
                td.bgr_16.text-small.ps-4 - Desplazamiento altas velocidades.
                  br
                  |- Movimientos en línea recta.
                  br
                  |- Opera con un sistema neumático.
                  br
                  |- Precisión en la ubicación de carga.
                  br
                  |- Requiere uso de telémetros (láser).

                td.justify-center 
                  img.img180(src='@/assets/curso/tema2/t2-32.png' alt='AvatarTop')
              tr
                td.bgr_14.text-bold.modif_14  
                  p.mb-0.text-bold.text-center Grúa aérea
                td.bgr_15.text-bold.text-center Equipo de transporte fijo al techo
                td.bgr_16.text-small.ps-4 - Permite transporte de mercancía dentro del almacén a diferentes zonas.
                  br
                  |- Mantiene despejado el suelo.
                  br
                  |- Requiere techos muy altos en el almacén.
                  br
                  |- Uso principal del sector automotriz.
                td.justify-center 
                  img.img180(src='@/assets/curso/tema2/t2-33.png' alt='AvatarTop')
              tr
                td.bgr_14.text-bold.modif_14  
                  p.mb-0.text-bold.text-center Transelevadores
                td.bgr_15.text-bold.text-center Equipo que se desplaza por pasillos estrechos a velocidad alta
                td.bgr_16.text-small.ps-4 - Diseñados especialmente para almacenes automatizados.
                  br
                  |- Operan con dos moviemintos: longitudinal sobre rail y otro vertical para extraer o colocar pallets.
                  br
                  |- Desarrollan tareas de picking a gran altura.
                td.justify-center 
                  img(src='@/assets/curso/tema2/t2-34.png' alt='AvatarTop' style="width:  207px")

    .row.mb-5.justify-center
      .col-12.col-md-10
        figure
          img(src='@/assets/curso/tema2/t2-35.png', alt='Texto que describa la imagen')
    
    .row.mb-5(data-aos="fade-right")
      .col-10.col-lg-4.position-relative
        h3.p-3.bgr_2.text-center Dinámicos con traslado
        img.pst(src='@/assets/curso/tema2/t2-40.svg' alt='AvatarTop')
    
    p.mb-5 Aquellos equipos que pueden trasladar mercancías dentro del almacén, a continuación, se describen:

    .row.mb-3.justify-center(data-aos="zoom-out-down")
      .col-12.col-md-5
        .titulo-sexto.color-acento-contenido  
          h5 Tabla 2.
          span Clasificación equipos dinámicos con traslado
      .col-12.col-md-11
        .tabla-a.color-acento-contenido.mb-5.modif_17 
          table.bgr_17
            caption.text-center Nota. Características generales de los equipos. 
            thead
              tr
                th(colspan="2") Equipo
                th Características
                th Imagen
            tbody
              tr
                td.bgr_14.text-center.modif_14
                  p.mb-0.text-bold Transpaletas
                td.bgr_15.text-bold.text-center Equipo mecánico de transporte
                td.bgr_16.text-small.ps-4 - Sirven de apoya a otros equipos.
                  br
                  |- Transportan la carga a distancias cortas.
                  br
                  |- Levantan distancias muy cortas del suelo.
                  br
                  |- Apoyan actividades del muelle.

                td.justify-center 
                  img.img180(src='@/assets/curso/tema2/t2-36.png' alt='AvatarTop') 
              tr
                td.bgr_14.text-center.modif_14
                  p.mb-0.text-bold Apiladores
                td.bgr_15.text-bold.text-center Similar a transpaletas, pero con mástil telescópico
                td.bgr_16.text-small.ps-4 - Plataforma de rodillos, sobre rodamientos.
                  br
                  |- Opera en función del tipo de mercancía.
                  br
                  |- Los productos se desplazan como consecuencia de la gravedad.
                td.justify-center 
                  img.img180(src='@/assets/curso/tema2/t2-37.png' alt='AvatarTop')
              tr
                td.bgr_14.text-bold.modif_14 
                  p.mb-0.text-bold.text-center Carretillas
                td.bgr_15.text-bold.text-center Tipos: Carretilla retráctil, contrabalanceada de toma lateral (bi o trilateral)
                td.bgr_16.text-small.ps-4 - Movimientos vertical y horizontal.
                  br
                  |- Levanta cargas hasta 10m.
                  br
                  |- Necesita pasillos para operar.
                  br
                  |- Recorridos medio-largo.
                  br
                  |- Uso en: ubicación y apilado de mercancía.
                td.justify-center 
                  img.img180(src='@/assets/curso/tema2/t2-38.png' alt='AvatarTop')
              tr
                td.bgr_14.text-bold.modif_14  
                  p.mb-0.text-bold.text-center AGV
                td.bgr_15.text-bold.text-center <em>Automatic Guied Vehicles</em>
                td.bgr_16.text-small.ps-4 - No requieren conductor (inteligentes).
                  br
                  |- Ordenador que comunica con PC.
                  br
                  |- Aplica diferentes técnicas de guía: hilo conductor a poca profundidad del suelo: uso banda magnética sobre el suelo.
                  br
                  |- Sigue un trayecto orientado por demarcación.
                td.justify-center 
                  img.img180(src='@/assets/curso/tema2/t2-39.png' alt='AvatarTop')

    .row.mb-5(data-aos="fade-right")
      .col-10.col-lg-3.position-relative
        h3.p-3.bgr_2.text-center Estáticos
        img.pst(src='@/assets/curso/tema2/t2-41.svg' alt='AvatarTop')
    
    p.mb-5 Se utilizan para almacenar mercancía a granel, tienen un orificio de entrada y uno de salida.  Son muy utilizados para manejar semillas y minerales, pueden ser cilíndricos o poligonales. Los más comunes son los silos de almacenamiento.

    .bg_grad-04
      .row.mb-5.justify-center
        .col-12.col-md-5.p-3.p-md-5
          p.mb-0 Ahora bien, ya conociendo los diferentes equipos para la manipulación de las mercancías se puede iniciar la manipulación de  los productos o pedidos; con el objetivo de reducir recorridos, disminuir tiempos, operaciones, y mantener una rotación de <em>stock</em> precisa; para lograr eficiencia en este proceso es importante el desarrollo de las siguientes tareas:
        .col-12.col-md-3
          figure
            img(src='@/assets/curso/tema2/t2-42.svg', alt='Texto que describa la imagen')
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta-avatar.modif_16
        img.modif_15.img100(src='@/assets/curso/tema2/t2-43.svg' alt='AvatarTop')
        .tarjeta.bgr_18
          .p-4
            h2.text-center Preparación previa
            p.mb-0.text-center Seleccionar toda la información relacionada con los pedidos y organizar los recursos necesarios para la preparación.
      .tarjeta-avatar.modif_16
        img.modif_15.img100(src='@/assets/curso/tema2/t2-44.svg' alt='AvatarTop')
        .tarjeta.bgr_18
          .p-4
            h2.text-center Recogida
            p.mb-0.text-center Recorrido que realiza el operario para seleccionar los productos, desde la zona de operaciones hasta el lugar en donde están las mercancías y objetos postales.
      .tarjeta-avatar.modif_16
        img.modif_15.img100(src='@/assets/curso/tema2/t2-45.svg' alt='AvatarTop')
        .tarjeta.bgr_18
          .p-4
            h2.text-center Extracción
            p.mb-0.text-center Posterior la localización del producto en la bodega, se retira la cantidad relacionada en el pedido y es llevada al sistema de transporte de productos interno (<em>roll</em>, <em>palet</em>, entre otros).
      .tarjeta-avatar.modif_16
        img.modif_15.img100(src='@/assets/curso/tema2/t2-46.svg' alt='AvatarTop')
        .tarjeta.bgr_18
          .p-4
            h2.text-center Verificación
            p.mb-0.text-center El operario vuelve a la zona de operaciones y verifica que retiró los productos correctos.
      .tarjeta-avatar.modif_16
        img.modif_15.img100(src='@/assets/curso/tema2/t2-47.svg' alt='AvatarTop')
        .tarjeta.bgr_18
          .p-4
            h2.text-center Preparación
            p.mb-0.text-center La mercancía continúa hacia la actividad de embalaje o <em>packaging</em>, precintado, pesaje y etiquetado del paquete, para su posterior traslado al lugar de despacho en donde se precisará su ruta de destino y servicio de entrega.

    p.mb-5 Existen <b>tres factores importantes</b> al momento de manipular un producto, como son: número de personas disponibles o sistema de extracción del producto; recorrido o movimiento de las personas, como se describen a continuación: 

    .row.justify-center.mb-3
      .col-12.col-md-5
        .titulo-sexto.color-acento-contenido  
          h5 Tabla 3.
          span Número de personas y la extracción del producto(s):
    .row.mb-3.justify-center(data-aos="zoom-out-up")
      .col-12.col-md-7
        .tabla-a.color-acento-contenido.mb-5.modif_24
          table.bgr_17
            caption.text-center Nota. Relación de factores en la manipulación de productos.  
            thead
              tr
                th(style="width:40%") Equipo
                th(style="width:60%") Características
            tbody
              tr
                td.bgr_15.text-bold.text-center 
                  p.mb-0.text-bold Extracción 
                  p.mb-0.text-bold INDIVIDUAL
                td.ps-3.ps-md-4.bgr_16.text-small UN pedido preparado por UNA persona
              tr
                td.bgr_15.text-bold.text-center 
                  p.mb-0.text-bold Extracción 
                  p.mb-0.text-bold INDIVIDUAL DIVIDIDA
                td.ps-3.ps-md-4.bgr_16.text-small Un pedido preparado por VARIAS personas
              tr
                td.bgr_15.text-bold.text-center 
                  p.mb-0.text-bold Extracción 
                  p.mb-0.text-bold CONJUNTA
                td.ps-3.ps-md-4.bgr_16.text-small VARIOS pedidos preparados por UNA persona
              tr
                td.bgr_15.text-bold.text-center 
                  p.mb-0.text-bold Extracción 
                  p.mb-0.text-bold CONJUNTA DIVIDIDA
                td.ps-3.ps-md-4.bgr_16.text-small VARIOS pedidos preparados por VARIAS personas

    figure.mb-5
      img(src='@/assets/curso/tema2/t2-48.png', alt='Texto que describa la imagen')
    
    .row.justify-center.mb-3
      .col-12.col-md-5
        .titulo-sexto.color-acento-contenido  
          h5 Tabla 4.
          span Recorrido y movimiento de las personas:
    .row.justify-center(data-aos="zoom-out-down")
      .col-12.col-md-10
        .tabla-a.color-acento-contenido.mb-5.modif_24
          table.bgr_17
            caption.text-center Nota. Relación de factores en la manipulación de mercancías o pedidos.   
            thead
              tr
                th(style="width:25%") Equipo
                th(style="width:75%")  Características
            tbody
              tr
                td.bgr_15.text-bold.text-center 
                  p.mb-0.text-bold Persona al Producto
                td.ps-3.ps-md-4.bgr_16.text-small La persona se desplaza a pie hasta el producto.
                  br
                  | <b>Requisito</b>: Cantidad de pedidos baja, almacén pequeño, distancias cortas, uso de equipos manuales. 
              tr
                td.bgr_15.text-bold.text-center 
                  p.mb-0.text-bold Producto a la Persona
                td.ps-3.ps-md-4.bgr_16.text-small Desplazamiento de los pedidos hasta las personas en forma manual o automática.
                  br
                  | <b>Requisito</b>: Cantidad de pedidos medio-alto, salida del producto en unidades o cajas, distancias medio-largas, abastecimiento con palé, utilización de sistemas de gestión informáticos (SGA) en la preparación de pedidos. 
              tr
                td.bgr_15.text-bold.text-center 
                  p.mb-0.text-bold Una persona – varios pedidos
                td.ps-3.ps-md-4.bgr_16.text-small La persona se desplaza hasta el producto; aunque conlleva a una doble planificación y gestión.
                  br
                  | <b>Requisito</b>: Cantidad de pedidos media-alta, cantidad de líneas de pedido medio, los medios para movilizar utilizados normalmente son carretillas de dos niveles, y aplicación de recursos informáticos como el código de barras.
              tr
                td.bgr_15.text-bold.text-center 
                  p.mb-0.text-bold Varias personas – varios pedidos
                td.ps-3.ps-md-4.bgr_16.text-small Las personas se desplazan hasta los productos para prepararlos cuando lo requieran por sus características y a la vez en el mismo pedido se debe aplicar un sistema de producto a la persona.
                  br
                  | <b>Requisito</b>:  Desfragmentar el pedido y separar los productos; por ejemplo: tornillos de 5 cm y tuercas de 5 cm; un producto fresco de uno congelado, etc. Posteriormente se consolida el pedido para realizar un solo envío.
                
    separador

    #t_2_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 2.4  Aplicaciones, usos y  reportes
    
    .row.mb-5
      .col-12.col-md-7.p-5.bg_grad-05(data-aos="fade-right")
        div  
          p La utilización de la tecnología y procesos de información en las empresas facilitan la gestión y control operativo de la mercancía y eficiencia en la prestación del servicio al cliente.
          p.mb-0 Los sistemas de comunicación, programas específicos y elementos o dispositivos necesarios para la comunicación, actualización de la información y registros en las bases de datos, son  elementos necesarios en la preparación de pedidos, varía desde los más básicos como papel y lápiz, hasta más automatizados implementando tecnologías de radiofrecuencia; así mismo la necesidad de recursos humanos podría aumentar o disminuir y los desplazamientos de las mercancías podrían ser horizontal o vertical. 
      .col-12.col-md-5.align-items-center(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/t2-49.png', alt='Texto que describa la imagen')

    p.mb-5 Dentro de los dispositivos más utilizados se encuentran:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").bgr_19
      .row(titulo="PDA").p-4
        .col-md-6.mb-4.mb-md-0.align-items-center
          p.mb-0 Literalmente significa: <em>Personal Digital Assistant</em> (Asistente Personal Digital). Es un equipo muy fácil de utilizar para cualquier operario ya que incluye todas las operaciones logísticas: pedidos, almacenamiento, devoluciones, inventarios y envío, aportando notificación si es urgente o no.
        .col-md-6
          figure
            img(src='@/assets/curso/tema2/t2-50.png', alt='Texto que describa la imagen')
      .row(titulo="<em>Smartphone</em>").p-4
        .col-md-6.mb-4.mb-md-0.align-items-center
          p.mb-0 Dispositivo móvil empresarial: diseñado para servicio, ventas en campo, comercialización, logística y aplicaciones postales. Básicamente, es una minicomputadora o <em>Smartphone</em> pequeño. Actualmente viene integrado con plataformas de radiofrecuencia, el cual brinda cobertura global para satisfacer las necesidades de comunicación 4G de las empresas.
        .col-md-6
          figure
            img(src='@/assets/curso/tema2/t2-51.png', alt='Texto que describa la imagen')
      .row(titulo="Pistolas lectoras").p-4
        .col-md-6.mb-4.mb-md-0.align-items-center
          p.mb-0 Las pistolas de radiofrecuencia son terminales, generalmente inalámbricos, dedicados a la lectura de códigos de barras (u otros tipos de etiquetas, como las QR o las RFID), que se emplean dentro de los almacenes con el fin de conectar las tareas del operario con el <em>software</em> de gestión de almacén.
        .col-md-6
          figure
            img(src='@/assets/curso/tema2/t2-52.png', alt='Texto que describa la imagen')
      .row(titulo="<em>Picking</em> automático").p-4
        .col-md-6.mb-4.mb-md-0.align-items-center
          p.mb-0 <em>Picking</em> automático es la aplicación de sistemas automatizados que cubren por completo las tareas de preparación de pedidos (recogida o extracción de mercancía,  transporte en el almacén y acondicionamiento y expedición de etiquetas).
        .col-md-6
          figure
            img(src='@/assets/curso/tema2/t2-53.png', alt='Texto que describa la imagen')
      .row(titulo="<em>Pick to voice</em>").p-4
        .col-md-6.mb-4.mb-md-0.align-items-center
          p.mb-0 Los sistemas de <em>picking</em> por voz asisten a los trabajadores del almacén a través de instrucciones verbales. Estos dispositivos de <em>voice picking</em> están conectados al sistema de gestión de almacenes y convierten sus órdenes en comandos de voz que el operario escucha en sus auriculares. Una vez ejecutadas, es el operario quien, mediante la voz, confirma sus movimientos y la información queda registrada en el sistema de forma automática.
        .col-md-6
          figure
            img(src='@/assets/curso/tema2/t2-54.png', alt='Texto que describa la imagen')
      .row(titulo="<em>Pick to ligth</em>").p-4
        .col-md-6.mb-4.mb-md-0.align-items-center
          p.mb-0 Dispositivo que funciona a través de un <em>display</em> luminoso y escáner guía. Son sistemas cómodos e intuitivos, los cuales facilitan una preparación de pedidos sin necesidad de papeles, conservando las manos libres, consiste en dar instrucciones directamente en el almacén, <em>in-situ.</em>
        .col-md-6
          figure
            img(src='@/assets/curso/tema2/t2-55.png', alt='Texto que describa la imagen')
      .row(titulo="<em>Pick to visual</em>").p-4
        .col-md-6.mb-4.mb-md-0.align-items-center
          p.mb-0 Dispositivo con gafas de datos que está diseñado para ayudar al recolector a encontrar rápidamente su ubicación en el almacén (ubicación de la ubicación) y guiarlo a través del proceso de <em>picking</em> sin errores.
        .col-md-6
          figure
            img(src='@/assets/curso/tema2/t2-56.png', alt='Texto que describa la imagen')
    
    p.mb-5.text-bold Principios básicos para un eficiente uso de los dispositivos

    .row.mb-5.justify-center
      .col-12.col-md-5.bgr_20.p-5
        figure.mb-5.justify-center
          img.img140(src='@/assets/curso/tema2/t2-57.svg', alt='Texto que describa la imagen')
        h3.mb-5.text-center No duplicidad de la información
        p.text-center.mb-0 Indica que no debe estar repetida la información en diferentes sistemas informáticos o bases de datos.
      .col-12.col-md-5.bgr_21.p-5
        figure.mb-5.justify-center
          img.img140(src='@/assets/curso/tema2/t2-58.svg', alt='Texto que describa la imagen')
        h3.mb-5.text-center Estandarización de la nomenclatura
        p.text-center.mb-0 Unificar la metodología para identificar los productos, almacenar e ingresar la información al sistema.

    p.mb-5 El complemento de los dispositivos, son las diferentes herramientas digitales (a través de los sistemas de información) que gestionan aquellas actividades desarrolladas dentro del almacén, cuya finalidad es apoyar la gestión física de la mercancía desde que ingresa al almacén hasta que sale en los centros de almacenamiento o distribución, e incluso hacer seguimiento a las devoluciones e inconsistencias; algunos son:
    
    figure.mb-5
      img(src='@/assets/curso/tema2/t2-59.svg', alt='Texto que describa la imagen')

    .row.mb-5.justify-center
      .col-12.col-md-10
        .cajon.bgr_22.p-5
          p.mb-0 Se debe tener en cuenta qué se quiere medir, para lograr identificar los datos necesarios en el registro y análisis de la información y presentar reportes; para lo cual es importante tener presente los siguientes conceptos:

    .row.justify-center
      .col-12.col-md-10
        SlyderA(tipo="b").bgr_23.modif_19.modif_18.mb-5.p-4
          .row
            .col-12.col-md-6.col-lg-6.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema2/t2-60.png', alt='Texto que describa la imagen')
            .col-12.col-md-6.col-lg-6
              h4.mb-lg-4 Novedad
              p Condición especial de la mercancía identificada en el envío.
          .row
            .col-12.col-md-6.col-lg-6.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema2/t2-61.png', alt='Texto que describa la imagen')
            .col-12.col-md-6.col-lg-6
              h4.mb-lg-4 Novedad respecto al destino
              p Envío de mercancía para una ciudad diferente a la solicitada.  Con destino a un Apartado Aéreo.  Direcciones cruzadas o confusas. No se hacen entregas en cárceles o guarniciones militares.
          .row
            .col-12.col-md-6.col-lg-6.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema2/t2-62.png', alt='Texto que describa la imagen')
            .col-12.col-md-6.col-lg-6
              h4.mb-lg-4 Novedad respecto al riesgo en seguridad de la mercancía
              p Metales preciosos y otros objetos de valor.  Dinero en efectivo, joyas o piedras finas.  Bonos o tickets pagaderos al portador.  Antigüedades y obras de arte.
          .row
            .col-12.col-md-6.col-lg-6.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema2/t2-63.png', alt='Texto que describa la imagen')
            .col-12.col-md-6.col-lg-6
              h4.mb-lg-4 Novedad respecto al embalaje y empaque
              p Mercancía con empaque y embalaje no adecuados.  Cajas de cartón amarradas o selladas adecuadamente.  Empaques deteriorados o manchados.  Empaques que contengan más de un rótulo diferente.  Unidades de empaque reutilizados.
          .row
            .col-12.col-md-6.col-lg-6.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema2/t2-64.png', alt='Texto que describa la imagen')
            .col-12.col-md-6.col-lg-6
              h4.mb-lg-4 Novedad respecto al diligenciamiento del documento de entrega
              p No se encuentra el valor declarado, lo cual exime responsabilidades.  Falta de información, espacios sin diligenciar, tachones o enmendaduras en el formulario.
          .row
            .col-12.col-md-6.col-lg-6.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema2/t2-65.png', alt='Texto que describa la imagen')
            .col-12.col-md-6.col-lg-6
              h4.mb-lg-4 Inconsistencia
              p Aquellos defectos de la mercancía encontrados al momento de realizar la verificación, según la información registrada en los documentos que lo acompañan; como:  embalaje o entrega de la mercancía inadecuada según solicitud de pedido, cantidad o artículo erróneo, falta de algún artículo, error en los registros, ubicación incorrecta, etc.
          .row
            .col-12.col-md-6.col-lg-6.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema2/t2-66.png', alt='Texto que describa la imagen')
            .col-12.col-md-6.col-lg-6
              h4.mb-lg-4 Indicador de desempeño
              p Aquellos indicadores que se enfocan a cuantificar el desempeño de la gestión logística y cadena de abastecimiento.
          .row
            .col-12.col-md-6.col-lg-6.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema2/t2-67.png', alt='Texto que describa la imagen')
            .col-12.col-md-6.col-lg-6
              h4.mb-lg-4 Logística
              p Conjunto de actividades necesarias para prestar un servicio, desde la compra, empaquetado, transporte, envío y entrega de un producto al cliente final.  Cómo llevar de la manera más eficiente y eficaz la mercancía a los clientes.
          .row
            .col-12.col-md-6.col-lg-6.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema2/t2-68.png', alt='Texto que describa la imagen')
            .col-12.col-md-6.col-lg-6
              h4.mb-lg-4 Abastecimiento
              p Traer todo aquello que requiero para desarrollar una actividad específica.
          
        
</template>

<script>
export default {
  name: 'Tema2',
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
