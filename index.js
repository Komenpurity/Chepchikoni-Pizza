$(document).ready(function(){
    $("#make-delivery").click(function(){
        alert("The delivery charge will be 200ksh across all environs.");
        $(".form-control-cdata").toggle();
        $("#make-delivery").hide();
    });
});

$(document).ready(function(){
    $("#submit").click(function(){
        alert("Your order will be delivered to your location");
    })
})