
/*
 * GET home page.
 */
 
var mongoose = require( 'mongoose' )
var db = require('../db/db.js');
var todolist = db.todo_list.model( 'todo_list');

exports.index = function(req, res){
     todolist.
        find(function ( err, list ){
            console.log(list)
            res.render('index', {list:list});
        });
        //res.render('index');
};

exports.add = function(req, res){
        console.log(req.body.add_title)
        new todolist({
            item:{
                title:req.body.add_title
            }
        }).save();
        res.redirect( '/');

};

exports.searchList = function(req,res){
    //console.log(req.body.getid)
    todolist.
        findById(req.body.getid, function ( err, info ){
            res.render('search',{info:info});
    });
}

exports.change = function(req,res){
    todolist.
    findByIdAndUpdate(
        req.body.getid,
        {item:{title:req.body.change_title,desc:req.body.change_desc,expire_date:req.body.change_date}},
        //~ {title:req.body.change_title,date:req.body.change_date,content:req.body.change_content},
        {upsert:true},
        function(err){
            console.log(err);    
            res.redirect( '/');
        });
}

exports.del = function(req,res){
    todolist.
    remove(
        {_id:req.body.getid},
        function(err){
            res.redirect( '/');
        });
}

exports.check = function(req,res){
    console.log(req.body.getid)
    todolist.
    findByIdAndUpdate(
        req.body.getid, 
        {done:'Y'},
        {upsert:true},
        function(err){
            console.log(err);    
            res.redirect( '/');
        });
}
