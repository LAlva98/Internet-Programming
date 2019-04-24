$(document).ready(function(){
    // console.log("working");
    $("#btn").on("click",function(){
        $("#results").empty();
        $.ajax({
           type:"GET",
           url:"api/pixa.php",
           dataType: "json",
           data:{
               "usrIn":$("#src").val(),
           },
           success:function(data){
            //   console.log(data["hits"][0]["previewURL"]);
            // $("#results").append("<div id = 'flex'></div>");
            // $("#flex").append("<img id = 'temp' src = " + data["hits"][0]["webformatURL"] + "/>");
            for(var i = 0; i < 9; i++){
                  if(i < 3){
                      if(i == 0){
                          $("#results").append("<div id = 'flex'></div>");
                      }
                      $("#flex").append("<img id = 'temp' src = " + data["hits"][i]["webformatURL"] + "/>");
                      $("#flex").append("<input id = 'imgBtn' value = '0' type='image' src='img/favorite.png' />");
                    //   <input type='image' src='img/favorite.png' />
                  }else if(i < 6){
                      if(i == 3){
                          $("#results").append("<div id = 'flex1'></div>");
                      }
                      $("#flex1").append("<img id = 'temp' src = " + data["hits"][i]["webformatURL"] + "/>");
                      $("#flex1").append("<input id = 'imgBtn' value = '1' type='image' src='img/favorite.png' />");
                  }else if(i < 9){
                      if(i == 6){
                          $("#results").append("<div id = 'flex2'></div>");
                      }
                      $("#flex2").append("<img id = 'temp' src = " + data["hits"][i]["webformatURL"] + "/>");
                      $("#flex2").append("<input id = 'imgBtn' value = '2' type='image' src='img/favorite.png' />");
                  }
              }
           },
           error:function(error){
               console.log(error);
           }
        });
    });
})
