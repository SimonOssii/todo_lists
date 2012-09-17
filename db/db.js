var records = require("mongoose");

var records_Schema   = records.Schema;

var todolist = new records.Schema({
  title: String,
  date:String,
  content:String,
  done:String
});

records.model( 'todolist', todolist );
records.connect('mongodb://localhost/Todo');

exports.todolist = records;
