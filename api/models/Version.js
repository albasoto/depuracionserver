

module.exports = {

  attributes: {

    id: { type: 'number', autoIncrement: true },
    nombre: { type: 'string', unique: true },
    columnas: {
      collection: 'columna',
      via: 'version',
      through: 'entidadVersion'
    }

  },

  primaryKey: 'id'

};

