// JavaScript File
$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "api/getCategories.php",
    dataType: "json",
    success:function(data,status){
      // console.log(data);
      for(i in data){
        var key = data[i];
        // console.log(key["catId"]);
        $("#category").append("<option value =" + key["catId"] + ">" + key["catName"] + "</option>");
      }
    },
    error: function (error) {
      console.log(error);
    },
  });
  
  $("#searchForm").on("click",function(){
    $.ajax({
      type:"GET",
      url:"api/getSearchResults.php",
      dataType:"json",
      data:{
       "product": $("#product").val(),
       "category": $("#category").val(),
       "priceFrom": $("#from").val(),
       "priceTo" : $("#to").val(),
       "orderBy" : $("[name=orderBy]:checked").val(),
      },
      
      success: function(data,status){
        $("#results").html("<h3>Products Found: </h3>");
       data.forEach(function(key){
         $("#results").append("<a href = '#' class = 'historyLink' id = '" + key['productId'] + "'>History</a>"); 
         $("#results").append( "<div>"+ key['productName'] + " " + key['productDescription'] + " $" + key['price'] + "</div>"); 
       });
      }
    });
  });
  
  $(document).on('click', '.historyLink', function(){
      console.log("displaying history")
    $('#purchaseHistoryModal').modal("show"); 
    $.ajax({
      type: "GET",
      url: "api/getPurchaseHistory.php",
      dataType: "json",
      data: {"productId" : $(this).attr("id")},
      success:function(data, status){

        if(data.length != 0){
          $("#history").html("");
          $("#history").append("<div>" + data[0]['productName'] + "</div>");
          $("#history").append("<div> <img src='" + data[0]['productImage'] + "' width='200' /> </div>");
          data.forEach(function(key){
            $("#history").append("<div>Purchase Date: " + key['purchaseDate'] + "</div>");
            $("#history").append("<div>Unite Price: " + key['unitPrice'] + "</div>");
            $("#history").append("<div>Quantity: " + key['quantity'] + "</div>");
          
          }); 
        }else{
          $("#history").html("No purchase history for this item");
        }
      }
    });
  });
  
});