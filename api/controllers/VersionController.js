/**
 * VersionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `VersionController.id()`
   */
  id: async function (req, res) {
    return res.json({
      todo: 'id() is not implemented yet!'
    });
  },

  /**
   * `VersionController.nombre()`
   */
  nombre: async function (req, res) {
    return res.json({
      todo: 'nombre() is not implemented yet!'
    });
  }

};

