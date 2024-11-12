//import 'axios' library to consume API
import axios from 'axios'

//define backend endpoint (url)
const backEnd = 'http://localhost:3000/vocabs/'

//consume API by methods GET/POST/PUT/DELETE
export const ViewAllVocabs = async () => {
   try {
      let response = await axios.get(backEnd)
      return response.data
   } catch (err) {
      console.error(err)
   }
}

export const DeleteVocab = async (id) => {
   try {
      let response = await axios.delete(backEnd + id)
      return response.data
   } catch (err) {
      console.error(err)
   }
}

export const DeleteAllVocabs = async () => {
   try {
      let response = await axios.delete(backEnd)
      return response.data
   } catch (err) {
      console.error(err)
   }
}

export const ViewVocab = async (id) => {
   try {
      let response = await axios.get(backEnd + id)
      return response.data
   } catch (err) {
      console.error(err)
   }
}