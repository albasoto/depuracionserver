/**
 * CatalogoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  /**
   * `CatalogoController.id()`
   */
  count: async function (req, res) {
    var query = req.query
    if(query.where){
      query.where = JSON.parse(query.where)
    }
    var count =  await Catalogo.count(query)
    return res.json({count: count});
  },

  countsearch: async function (req, res) {
   var nombre =  req.query.nombre;

    var count =  await Catalogo.count({
      nombre : {
        'contains' : nombre
      }
    })
    return res.json({count: count});
  },


};

