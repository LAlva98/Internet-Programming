// JavaScript File

$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "api/getMatch.php",
        dataType: "json",
        success:function(data, status){
           data.forEach(function(key){
              console.log(key['picture_url'])
               $("#aboutme").html(""); 
               $("#aboutme").append("<div> About me @" + key['username'] + "</div");
               $("#description").html("");
               $("#description").append(key['about_me']);
               $("pic").html("<img src="+ key['picture_url'] +"alt='user iamge'>")
           });
        }
    })
});