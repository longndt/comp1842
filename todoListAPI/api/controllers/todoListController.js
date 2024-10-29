//1. import models
const todoModel = require('../models/todoListModel')

//2. declare funtions
const view_all_tasks = async (req, res) => {
   //get data from "tasks" collection
   const tasks = await todoModel.find({})
   //use try ... catch to handle exception (error)
   try {
      //response this data as JSON format
      res.json(tasks)
   } catch (err) {
      //return error (if have)
      res.send(err)
   }
}

const view_single_task = async (req, res) => {
   //get id from url
   let id = req.params.id
   //get data from task based on this id
   const task = await todoModel.findById(id)
   try {
      //response this data as JSON format
      res.json(task)
   } catch (err) {
      //return error (if have)
      res.send(err)
   }
}

// const delete_single_task = async (req, res) => {

// }

// const delete_all_tasks = async (req, res) => {

// }

//3. export functions
module.exports = {
   view_all_tasks,
   view_single_task
   //delete_single_task,
   //delete_all_tasks
}

//const create_new_task



//const edit_task

//const delete_task



