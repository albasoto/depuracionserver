
module.exports.routes = {


  '/': { view: 'pages/homepage' },

  'get /catalogo/count': 'Catalogo.count',


  'get /expresion/count': 'Expresion.count',

  'get /entidad/count': 'Entidad.count',

  'get /version/count': 'Version.count'


};
