$( "#sub1" ).click(function() {
    
    $("#content").hide();
    $("#sub2").show(); 
    $("#resultPage").empty(); 
    $("#resultPage").show();
    // $("#resultPage").empty(); 
    
    var q1 = $("#q1").val(); 
    console.log(q1); 
    
    var selectedRadio = $("input[name='q2']:checked");
    var selectedNameValue = selectedRadio.val();
    var selectedRadioId = selectedRadio.attr("id");
    var q2 = $("label[for='" + selectedRadioId + "']").html();
    // console.log(q2); 
    
    
    var q3 = $("input[name='q3']:checked").val(); 

    var q4 = $( "#myselect" ).val();
    
    var prime = $("#prime").val(); 
    //  console.log(prime); 
    
    
    var selectedRadio1 = $("input[name='geo']:checked");
    var selectedNameValue1 = selectedRadio1.val();
    var selectedRadioId1 = selectedRadio1.attr("id");
    var q6 = $("label[for='" + selectedRadioId1 + "']").html();
    console.log(q6); 
    
    
    // $("#resultPage").html("<h1> I feel like I already know you " + firstName + " " + lastName + "</h1>");
    if(q1 == "Meridian" || q1 == "meridian" || q1 == "meridians" || q1=="Meridians"){
        $("#resultPage").html("<h1>You got the first question correct!</h1>");
    }else{
        $("#resultPage").html("<h1>You got the first question wrong. </h1>");
    }
    
    if(q2 == "Amphibians"){
        $("#resultPage").append("<h1>You got the second question correct!</h1>");
    }else{
         $("#resultPage").append("<h1>You got the second question wrong. </h1>");
    }
    
    if(q3 == "correct"){
        $("#resultPage").append("<h1> You got the third question correct!</h1>");
    }else{
        $("#resultPage").append("<h1>You got the third question wrong. </h1>");
    }
       
       
    if(q4 == "correct"){
        $("#resultPage").append("<h1>You got the fourth question correct! </h1>");
    }else{
        $("#resultPage").append("<h1>You got the fourth question wrong.  </h1>");
    }
    
    
    if(prime == 2){
         $("#resultPage").append("<h1>You got the fifth question correct!</h1>"); 
    }else{
        $("#resultPage").append("<h1>You got fifth questions wrong.</h1>");
    }
    
    if(q6 == "Nevada"){
        $("#resultPage").append("<h1>You got the sixth question corrent! </h1>");
    }else{
        $("#resultPage").append("<h1> You got this sixth question wrong. </h1>")
    }
    
    
    
    $("#resultPage").append("<div id='sub3'><input id='sub2' type='button' value='Take Again!' /></div>")
    
    
    $("#sub2").click(function(){
        $("#content").show(); 
        $("#sub2").hide(); 
        $("#resultPage").hide(); 
    }); 
    
});