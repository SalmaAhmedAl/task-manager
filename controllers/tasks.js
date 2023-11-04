const Task = require("../models/Task");
 
const getAllTasks = async (req, res) => {
  try{
    const tasks = await Task.find({});
    res.status(200).json({tasks});
  } catch(error){
    res.status(500).json({msg : error})
  }};

const createTask = async (req, res) => {
  try{
    const task = await Task.create(req.body);
  res.status(201).json({task});
  } catch(error){
    res.status(500).json({msg : error})
  }};

const getTask = async (req, res) => {
  try{
    //pram name : alias name
    const taskID = req.params.id;
    const task = await Task.findById(taskID);
    if(!task){
      return res.status(404).json({msg: `No task with id ${taskID}`});
    }
    res.status(200).json({task});
  } catch(error){
    res.status(500).json({msg : error})
  }};

const updateTask = async (req, res) => {
  try{
    const taskID = req.params.id;
    const task = await Task.findById(taskID);
    if(!task){
      return res.status(404).json({msg: `No task with id ${taskID}`});
    }
    task.name = req.body.name;
    
    res.status(200).json({task});
  } catch(error){
    res.status(500).json({msg : error})
  }
};

const deleteTask = async (req, res) => {
  try{
    const taskID = req.params.id;
    const task = await Task.findOneAndDelete(taskID);
    if(!task){
      return res.status(404).json({msg: `No task with id ${taskID}`});
    }
    res.status(200).json({task});

  } catch(error){
    res.status(500).json({msg : error})
  } 
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
