

module.exports = {

  attributes: {

    id: { type: 'number', autoIncrement: true },

    valor: { type: 'string' },

    catalogo: { model: 'catalogo' }

  },

  primaryKey: 'id' 

};

