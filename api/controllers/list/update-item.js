module.exports = {


  friendlyName: 'Update item',


  description: '',


  inputs: {
    listItemId: {
      type: 'number',
      required: true
    },
    itemText: {
      type: 'string',
      required: true
    }

  },


  exits: {
    success: {
      description: 'The item was updated successfully.'
    },
    error: {
      description: 'Some error occured :('
    } 

  },


  fn: async function (inputs, exits) {
    try {
      let updatedItem = await Listitem.updateOne({id: inputs.listItemId}).set({
        itemText: inputs.itemText
      });

      return exits.success({
        description: 'The item was updated successfully.',
        response: {
          message: 'The item was updated successfully.',
          data: updatedItem
        }
      })
      

    }
    catch(error) {
      return exits.error({
        description: 'Some error occured :(',
        response: {
          message: error.message
        }
      })

    }

  }


};
