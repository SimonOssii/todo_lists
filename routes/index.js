
/*
 * GET home page.
 */
 
var mongoose = require( 'mongoose' )
var db = require('../db/db.js');
var todolist = db.todo_list.model( 'todo_list');

exports.index = function(req, res){
     todolist.
        find({status:'todo'},function ( err, list ){
            res.render('index', {list:list});
        });
};

exports.add = function(req, res){
        var now = getClock();
        if(req.body.add_date ==""){
            req.body.add_date = "無期限"
        };
        new todolist({
            item:{
                title:req.body.add_title,
                desc:req.body.add_desc,
                expire_date:req.body.add_date
            },
            create_date:now,
            status:"todo"
        }).save();
        res.redirect( '/');

};

exports.page = function(req, res){
    res.render( 'page',{add_title:req.body.add_title});
}

exports.searchList = function(req,res){
    todolist.
        findById(req.body.getid, function ( err, info ){
            res.render('search',{info:info});
    });
}

exports.change = function(req,res){
    if(req.body.change_date ==""){
        req.body.change_date = "無期限"
    };
    todolist.
    findByIdAndUpdate(
        req.body.getid,
        {item:{title:req.body.change_title,desc:req.body.change_desc,expire_date:req.body.change_date}},
        {upsert:true},
        function(err){  
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

exports.todo = function(req,res){
    todolist.
    findByIdAndUpdate(
        req.body.getid,
        {status:'todo'},
        {upsert:true},
        function(err){  
            res.redirect( '/');
        });
}

exports.completed = function(req,res){
    console.log(req.body.getid)
    todolist.
    findByIdAndUpdate(
        req.body.getid,
        {status:'completed'},
        {upsert:true},
        function(err){
            res.redirect( '/');
        });
}

exports.havedone = function(req,res){
    todolist.
    find({status:'completed'},function(err,done){
            res.render('havedone', {done:done});
        });
}

exports.all_lists = function(req,res){
    todolist.
    find(function(err,all_lists){
            res.render('all_lists', {all_lists:all_lists});
        });
}


function getClock(){
    var thetime=new Date();
    var nhours=thetime.getHours();
    var nmins=thetime.getMinutes();
    var nsecn=thetime.getSeconds();
    var nday=thetime.getDay();
    var nmonth=thetime.getMonth();
    var ntoday=thetime.getDate();
    var nyear=thetime.getYear();
    nmonth+=1;
    if (nyear<=99)
    nyear= "19"+nyear;
    if ((nyear>99) && (nyear<2000))
    nyear+=1900;
    var now = ""+nyear+"-"+nmonth+"-"+ntoday+" "+nhours+":"+nmins+""
    return now;
}
