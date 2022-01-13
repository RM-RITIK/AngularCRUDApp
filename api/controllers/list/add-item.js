module.exports = {


  friendlyName: 'Add item',


  description: '',


  inputs: {
    itemText: {
      type: 'string',
      requiredL: true
    }

  },


  exits: {
    success: {
      description: 'The item was added successfully to the list'
    },
    error: {
      description: 'Some error occured :('
    }

  },


  fn: async function (inputs, exits) {
    try{
      let newItem = await Listitem.create({
        itemText: inputs.itemText
      }).fetch();

      return exits.success({
        description: 'The item was added successfully to the list',
        response: {
          message: 'The item was added successfully to the list',
          data: newItem
        }
      })

    }
    catch(error){
      return exits.error({
        description: 'Some error occured :(',
        response: {
          message: error.message,
        }
      })
    }


  }


};
