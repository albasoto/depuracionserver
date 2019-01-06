/**
 * EntidadController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  count: async function (req, res) {
    var query = req.query
    if(query.where){
      query.where = JSON.parse(query.where)
    }
    var count =  await Entidad.count(query)
    return res.json({count: count});
  },

};

