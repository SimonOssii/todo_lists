//~ var records = require("mongoose");
//~ 
//~ var records_Schema   = records.Schema;
//~ 
//~ var todolist = new records.Schema({
  //~ title: String,
  //~ date:String,
  //~ content:String,
  //~ done:String
//~ });
//~ 
//~ 
//~ 
//~ records.model( 'todolist', todolist );
//~ records.connect('mongodb://localhost/Todo');
//~ 
//~ exports.todolist = records;





var records = require("mongoose");
var records_Schema   = records.Schema;

//~ var todo_list = new records.Schema({
  //~ title: String,
  //~ date:String,
  //~ content:String,
  //~ done:String
//~ });

var todo_list = new records.Schema({
    user:String,
    item:{
        title:String,
        desc:String,
        expire_date:String
    },
    create_date:String,
    status:String
});

records.model( 'todo_list', todo_list );
records.connect('mongodb://localhost/todo_lists');

exports.todo_list = records;
