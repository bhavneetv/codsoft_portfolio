
$(function(){
    $('#menu').slicknav({
        'label':'',
        
        // 'brand':'Bhavdet Verdfma',
        'brand':'<i class="fa-solid fa-code" id="x"></i> Bhavneet Verma'
    });
});





$(document).ready(function(){
    $("#close").click(function(){
       $("#rate_black").css("display","none")
       
    })
    
    $("#rate_main_btn").click(function(){
        $("#rate_black").css("display","block")
        
    })
    $("#rate_t").click(function(){
        $("#rate_black").css("display","block")
        
    })
    $("#rate_l").click(function(){
        $("#rate_black").css("display","block")
        
    })


    $("#star1").click(function(){
        $("#star_txt").html("1 Star")
      
    })
    $("#star2").click(function(){
        $("#star_txt").html("2 Star")
      
    })
    $("#star3").click(function(){
        $("#star_txt").html("3 Star")
      
    })
    $("#star4").click(function(){
        $("#star_txt").html("4 Star")
      
    })
    $("#star5").click(function(){
        $("#star_txt").html("5 Star")
      
    })

        // alert($("#star_txt").html())

        $("#star1,#star2,#star3,#star4,#star5").change(function(){

        

    if ($("#star_txt").html() == "3 Star" || $("#star_txt").html() == "2 Star" ) {
        // alert("fdas")
        $("#smile").css("display","none")
        $("#sad").css("display","none")
        $("#normal").css("display","block")
        
    }
   else if ($("#star_txt").html() == "1 Star" ) {
    // alert("fdas")
        $("#smile").css("display","none")
        $("#sad").css("display","block")
        $("#normal").css("display","none")
        
    }
    else{
        $("#smile").css("display","block")
        $("#sad").css("display","none")
        $("#normal").css("display","none")

    }
})





})

// var txt = document.getElementById("star_txt").innerHTML;
// var smile = document.getElementById("smile")
// var normal = document.getElementById("normal")
// var sad = document.getElementById("sad")


// alert(txt)
// txt.innerHTML("dsa")
// if(txt.innerHTML == "3 star" || txt.innerHTML == "2 Star" ){
//     normal.style.display="block"
//     smile.style.display="none"
//     sad.style.display= "none"
// }
// alert("d")


