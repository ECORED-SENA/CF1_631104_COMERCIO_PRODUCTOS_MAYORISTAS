export default {
  global: {
    componenteFormativo: 'Gestión de inventarios',
    descripcionCurso:
      'La gestión de inventarios ayuda a las empresas a identificar qué existencias hay, qué pedir y en qué momento hacer los pedidos. Realiza un seguimiento del inventario desde la compra, como el etiquetado, la codificación, la conservación, hasta la venta de la mercancía; la revisión de los inventarios garantiza que las empresas tengan suficientes existencias y avisar adecuadamente de una escasez.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Características del producto',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Maestro de productos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Etiquetado de productos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Codificación de productos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Conservación de mercancía',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Aplicaciones, usos y reportes',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Categorización de inventarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Administración y control de inventarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Recibo y despacho inventarios',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Inspección de elementos',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Maestro de productos',
      referencia:
        'S/4 HANA MM - Maestro de Materiales - Visión General. (2020, 28  de mayo)',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=D-fiNrHIikQ',
    },
    {
      tema: 'Codificación Productos',
      referencia:
        'Guía para la codificación de bienes y servicios de acuerdo con el código estándar de productos y servicios de Naciones Unidas, V.14.080',
      tipo: 'Guía',
      descarga: '/downloads/manualclasificador.pdf',
    },
    {
      tema: 'Inspecciones planeadas',
      referencia:
        'Inspecciones planeadas	ICONTEC (1997) Norma Técnica Colombiana- NTC 4114. Seguridad Industrial: Realización de Inspecciones planeadas',
      tipo: 'Norma Técnica Colombiana',
      descarga: '/downloads/NTC_4114_ICONTEC.pdf',
    },
    {
      tema: 'Inventarios',
      referencia:
        'Qué es un Inventario, Oracle netsuite. (2021). Oracle / NetSuite.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qF4H7f9EvhY&t=21s',
    },
  ],
  glosario: [
    {
      termino: 'Carga',
      significado:
        'Conjunto de mercancías que son objeto de una operación de transporte desde un puerto, aeropuerto, terminal terrestre o lugar de entrega, con destino a otro puerto, aeropuerto, terminal o lugar de destino, amparadas en un documento de transporte.',
    },
    {
      termino: 'Código de barras',
      significado:
        'Código basado en la representación de un conjunto de líneas paralelas de distinto grosor y espaciado que en su conjunto contienen una determinada información',
    },
    {
      termino: 'Equipo de almacenamiento',
      significado:
        'Medios disponibles para guardar o almacenar productos y mercancías; como estanterías, armarios o cestas.',
    },
    {
      termino: 'Equipo de manipulación',
      significado:
        'Vehículos y equipos capaces de transportar artículos, bultos, paletas y cajas dentro del almacén; son necesarios para trasladar cargas y que el operario no realice sobreesfuerzo físico.',
    },
    {
      termino: '<em>Packing</em>',
      significado:
        'La actividad que realiza un equipo de operarios al momento de preparar los pedidos, consiste en la recogida y consolidación de cargas no unitarias que componen el pedido de un cliente.',
    },
    {
      termino: '<em>Picking</em>',
      significado: 'Acondicionamiento y empaque de pedidos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Campo Varela, A. (2013). Operaciones de almacenaje. España: McGraw-Hill',
      link:
        'https://kupdf.net/download/operaciones-de-almacenaje_5c96f9e6e2b6f55d2e9fe98a_pdf',
    },
    {
      referencia:
        'Flamarique, S. (2017). Gestión de operaciones de almacenaje. Barcelona: Marge Books. Disponible en:',
      link:
        'https://www.marcialpons.es/libros/gestion-de-operaciones-de-almacenaje/9788416171873/',
    },
    {
      referencia:
        'Fernández Valero,  G. (2016)  Manual: operaciones auxiliares de almacenaje. Madrid: Editorial CEP, S.L. ',
      link:
        'https://www.buscalibre.com.co/libro-manual-operaciones-auxiliares-de-almacenaje-mf1325-1-certificados-gonzalo-fernandez-valero-cep/9788468151939/p/46445151',
    },
    {
      referencia:
        'Gómez Aparicio,  J. M.(2013). Gestión logística y comercial. Aravaca, Madrid: McGraw-Hill España.',
      link:
        'http://190.116.26.93:2171/mdv-biblioteca-virtual/libro/documento/8zdvWxHm4ut8z7BGJQqtLK_GESTION_LOGISTICA_Y_COMERCIAL.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelly Parra Guarín',
        cargo: 'Experta temática',
        centro:
          'Centro de la Industria, la empresa y los Servicios Regional - Huila',
      },
      {
        nombre: 'Diego E. Acevedo Guevara',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - CIES - Norte de Santander',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
