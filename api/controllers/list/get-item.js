module.exports = {


  friendlyName: 'Get item',


  description: '',


  inputs: {
    listItemId: {
      type: 'number',
      required: false
    }

  },


  exits: {
    success: {
      description: 'The list items were retrieved successfully'
    },
    error: {
      description: 'Some Error Occured :('
    } 

  },


  fn: async function (inputs, exits) {
    try {
      var condition = {};
      if(inputs.listItemId) {
        condition = {
          id: inputs.listItemId
        };
      }

      var listItems = await Listitem.find(condition);
      return exits.success({
        description: 'The list items were retrieved successfully',
        response: {
          message: 'The list items were retrieved successfully',
          data: listItems
        }
      })

    }
    catch(error) {
      return exits.error({
        description: 'Some Error Occured :(',
        response: {
          message: error.message
        }
      })

    }

  }


};
