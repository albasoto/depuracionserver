module.exports = {

  attributes: {

    id: { type: 'number', autoIncrement: true },

    nombre: { type: 'string', required: true },

    esRequerido: { type: 'boolean', defaultsTo: true },

    tipo: { type: 'string' , isIn: ['catalogo', 'boolean', 'string', 'number', 'columna', 'expresion']},

    expresion: { model: 'expresion' },

    catalogo: { model: 'catalogo' },

    entidad: {model: 'entidad'},

    versiones: {
      collection: 'version',
      via: 'columna',
      through: 'entidadVersion'
    }

    

  },

  primaryKey: 'id'

};

