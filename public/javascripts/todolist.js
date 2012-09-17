$(document).ready( function(){
    

        //~ if($('.check').attr('value') = 'Y'){
            //~ $(this).attr('checked',false)
        //~ }else{
            //~ $(this).attr('checked',true)
        //~ }

    
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
        if($(this).attr('checked')){
            $(this).attr("value","Y")
            $(this).attr('checked',true)
            var id = $(this).attr("name")
            $("#addForm").append('<form method="post" action="/check" id="check"><input name="getid" value='+id+'></form>')
            $("#check").submit();
            $("#addForm").empty();
         }
    })
    
});
