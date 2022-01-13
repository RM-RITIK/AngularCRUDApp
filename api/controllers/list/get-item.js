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


  fn: async function (inputs) {
    try {
      var condition = {};
      if(inputs.listItemId) {
        condition = {
          id: inputs.listItemId
        };
      }

      var listItems = await Listitem.find(condition);
      return listItems;

    }
    catch(error) {
      return error.message;

    }

  }


};
