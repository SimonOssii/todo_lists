$(document).ready( function(){
    
    $('.check').each(function(){
        if($(this).attr('value') == 'completed'){               
            $(this).attr('checked',true);
        }else{
            if($(this).attr('value') == 'todo'){
                $(this).attr('checked',false);
            }
        }   
    });
    
    $('.info').each(function(){
        if($(this).attr('value') == 'completed'){               
            $(this).css('text-decoration','line-through');
        }
    }); 
    
    $(".del").bind('click',function(){
        var id = $(this).attr("name");
        $("#addForm").append('<form method="post" action="/del" id="del"><input name="getid" value='+id+'></form>')
        $("#del").submit();
        $("#addForm").empty();
    });
    
    $(".search").bind('click',function(){
        var id = $(this).attr("name")
        $("#addForm").append('<form method="post" action="/search" id="search"><input name="getid" value='+id+'></form>')
        $("#search").submit();
        $("#addForm").empty();
    });
    
    $(".check").bind('click',function(){
        if($(this).attr('value') == 'todo'){
            var id = $(this).attr("name")
            $("#addForm").append('<form method="post" action="/completed" id="completed"><input name="getid" value='+id+'></form>')
            $("#completed").submit();
            $("#addForm").empty();
        }else{
            if($(this).attr('value') == 'completed'){
                var id = $(this).attr("name")
                $("#addForm").append('<form method="post" action="/todo" id="todo"><input name="getid" value='+id+'></form>')
                $("#todo").submit();
                $("#addForm").empty();
            }
        }
    });
    
    $('.havedone').bind('click',function(){
        $("#addForm").append('<form method="post" action="/havedone" id="havedone"></form>') //~<input name="getid" value='+id+'>
        $("#havedone").submit();
        $("#addForm").empty();
    });
    
    $('.all_lists').bind('click',function(){
        $("#addForm").append('<form method="post" action="/all_lists" id="all_lists"></form>') //~<input name="getid" value='+id+'>
        $("#all_lists").submit();
        $("#addForm").empty();
    })
    
});
