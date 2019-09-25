$(document).ready(function(){

    $("button.mrkbutton").click(function(){

        var nut = this;
        var id = $(this).attr("idCate");
        $.post("http://localhost/admin/public/Ajax/ChangeCategoryActive", {idCate:id}, function(data){
            // data mà ajax trả về là CHUOI CHUOI CHUOI CHUOI CHUOI CHUOI nha
            var json = JSON.parse(data);
            if(json.kq==true){
                if( $(nut).attr("class") == "mrkbutton btn btn-warning btn-circle"  ){
                    $(nut).attr("class",  "mrkbutton btn btn-info btn-circle");
                }else{
                    $(nut).attr("class", "mrkbutton btn btn-warning btn-circle");
                }       
            }
        });
    });

});