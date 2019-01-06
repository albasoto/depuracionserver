
module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true },
    nombre: { type: 'string', unique:true, required: true },
    elementos: {collection: 'elementoCatalogo', via: 'catalogo'},
    columnas: {collection: 'columna', via: 'catalogo'}

  },

  primaryKey: 'id'

};

