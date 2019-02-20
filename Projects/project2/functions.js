$( "#sub1" ).click(function() {
    
    $("#content").hide();
    $("#sub2").show(); 
    $("#resultPage").show();
    // $("#content").empty(); 
    
    var firstName = $("#firstName").val(); 
    var lastName = $("#lastName").val();  
    
    var selectedRadio = $("input[name='education']:checked");
    var selectedNameValue = selectedRadio.val();
    var selectedRadioId = selectedRadio.attr("id");
    var selectedLabelHtml = $("label[for='" + selectedRadioId + "']").html();
    
    
    
    var transportation = $("input[name='transportation']:checked").val(); 
    
    
    
    var emotion = $( "#myselect" ).val();
    
    var hobby = $("#hobby").val(); 
    
    
    var selectedRadio1 = $("input[name='food']:checked");
    var selectedNameValue1 = selectedRadio1.val();
    var selectedRadioId1 = selectedRadio1.attr("id");
    var selectedLabelHtml1 = $("label[for='" + selectedRadioId1 + "']").html();
    console.log(selectedLabelHtml1); 
    
    
    // $("#resultPage").html("<h1> I feel like I already know you " + firstName + " " + lastName + "</h1>");
    if(firstName == "" || lastName == ""){
        $("#resultPage").html("<h1>You didn't tell me your name!</h1>");
    }else{
        
    $("#resultPage").html("<h1>Nice to meet you " + firstName + " " + lastName + "!</h1>");
    }
    if(selectedLabelHtml == "High School Diploma"){
        $("#resultPage").append("<h1>I also only have a High School Diploma so far!</h1>");
    }else if (selectedLabelHtml == "Bachelors"){
        $("#resultPage").append("<h1>I see you have a Bachelors, I  am working towards my Bachelors!</h1>");
    }else if(selectedLabelHtml == "Graduate School"){
        $("#resultPage").append("<h1>Wow Graduate School that must have been hard! I'm impressed!</h1>");
    }else if(selectedLabelHtml == "Other"){
        $("#resultPage").append("<h1>I see you chose other, now I wonder what you have been up to! </h1>");
    }
    
    if(transportation == "Car"){
        $("#resultPage").append("<h1>I also get around in a car! </h1>");
    }else if(transportation == "Walk"){
        $("#resultPage").append("<h1>Wow you walk everywhere! You must be healthy!</h1>");
    }else if(transportation == "Bike"){
        $("#resultPage").append("<h1>Using a bike must get tiring but I'm sure it is good for you and the environment</h1>");
    }else if( transportation == "Another"){
        $("#resultPage").append("<h1>I know you don't use a car so it must mean you get around in a eco friendly way! </h1>");
    }
    
    if(emotion == "neutral"){
        $("#resultPage").append("<h1>I see you are neither sad or happy that could be a good thing! </h1>");
    }else if(emotion == "angry"){
        $("#resultPage").append("<h1>I hope whatever made you angry gets resolved soon! </h1>");
    }else if(emotion == "happy"){
        $("#resultPage").append("<h1>Glass half full? Always nice to be in a good mood! </h1>");
    }else if(emotion == "sad"){
        $("#resultPage").append("<h1>I am sorry you are sad. It does get better.  </h1>");
    }else if(emotion == "..."){
        $("#resultPage").append("");
    }
    if(hobby == ""){
         $("#resultPage").append("<h1>You didn't tell me a hobby!</h1>"); 
    }else{
        
    $("#resultPage").append("<h1>I see your hobby is " + hobby +  ", mine is playing video games.</h1>");
    }
    
    if(selectedLabelHtml1 == "Mexican"){
        $("#resultPage").append("<h1>I see you like Mexican, me too. Tacos are my favorite!</h1>");
    }else if(selectedLabelHtml1 == "Chinese"){
        $("#resultPage").append("<h1> I also like Chinese food. Fried rice is amazing. </h1>")
    }else if(selectedLabelHtml1 == "Japanese"){
        $("#resultPage").append("<h1>The only Japanese food I have had is sushi but I love it!</h1>");
    }else if(selectedLabelHtml1 == "Italian"){
        $("#resultPage").append("<h1>I've never had authentic Italian food so I can't judge it.</h1>");
    }else if(selectedLabelHtml1 == "American"){
        $("#resultPage").append("<h1>I never understood what American food entails but since I live in America I enjoy the food here!</h1>");
    }else if(selectedLabelHtml1=="Korean") {
        $("#resultPage").append("<h1>The only Korean food I'd had is Korean BBQ and that is amazingly good!</h1>");
    }else if(selectedLabelHtml1 == "I love all food!"){
        $("#resultPage").append("<h1>I love all kinds of food too!</h1>");
    }
    
    $("#resultPage").append("<div id='sub3'><input id='sub2' type='button' value='Go Again!' /></div>")
    
    
    $("#sub2").click(function(){
        $("#content").show(); 
        $("#sub2").hide(); 
        $("#resultPage").hide(); 
    }); 
    
});