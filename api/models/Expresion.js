
module.exports = {

  attributes: {


    id: { type: 'number', autoIncrement: true },

    nombre: { type: 'string', required: true, unique: true },

    valor: { type: 'string', required: true, unique: true },

    columnas: {collection: 'columna', via: 'expresion'}


  },
  primaryKey: 'id'
};

