//declare model
const vocabModel = require('../models/vocabModel')

//declare functions
//Note 1: use "async ... await" technique
//Note 2: use "try ... catch" to handle error (if have)
const viewAllVocabs = async (req, res) => {
   try {
      //retrieve data from DB and save to a variable
      let vocabs = await vocabModel.find({})
      //return data as API (JSON format)
      res.json(vocabs)
   } catch (err) {
      res.send(err)
   }

}

//export functions
module.exports = {
   viewAllVocabs
}
