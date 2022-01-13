/**
 * Listitem.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'list_items',
  attributes: {
    itemText: {
      type: 'string',
      required: true,
      columnName: 'item_text'
    }
  },

};

