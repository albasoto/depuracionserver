

module.exports.models = {

   migrate: 'alter', 

  attributes: {
    createdAt: { type: 'number', autoCreatedAt: true, },
    updatedAt: { type: 'number', autoUpdatedAt: true, },
    id: { type: 'number', autoIncrement: true, },
  },

  dataEncryptionKeys: {
    default: 'obQbBm3KPEdHU5qzC5+7OK+fIw67IWLZsWuefn+eZIY='
  },


  cascadeOnDestroy: true


};
