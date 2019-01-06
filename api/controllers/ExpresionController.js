/**
 * ExpresionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  count: async function (req, res) {

    //se alamacena los parametros enviados desde el cliente
    var query = req.query


    if(query.where){
      query.where = JSON.parse(query.where)
    }


    var count =  await Expresion.count(query)
    return res.json({count: count});
  },

  

  /**
   * `ExpresionController.id()`
   */
  id: async function (req, res) {
    return res.json({
      todo: 'id() is not implemented yet!'
    });
  },

  /**
   * `ExpresionController.nombre()`
   */
  nombre: async function (req, res) {
    return res.json({
      todo: 'nombre() is not implemented yet!'
    });
  },

  /**
   * `ExpresionController.valor()`
   */
  valor: async function (req, res) {
    return res.json({
      todo: 'valor() is not implemented yet!'
    });
  }

};

