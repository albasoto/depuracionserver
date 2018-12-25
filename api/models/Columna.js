module.exports = {

  attributes: {

    id: { type: 'number', autoIncrement: true },

    nombre: { type: 'string', required: true },

    esRequerido: { type: 'boolean', defaultsTo: false },

    tipo: { type: 'string' ,required: true, isIn: ['catalogo', 'boolean', 'string', 'number', 'columna', 'expresion']},

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

