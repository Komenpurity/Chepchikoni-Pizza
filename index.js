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
    });
});



$(document).ready(function(){
    $("#checkout").click(function () {
        let flavour = $("#flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#topping option:selected").val();
        let number = $("#number").val();
        console.log(size);
        
        $("#form-order").hide();
        $("#sum-order").show(function(){
            
        });
         
     })
})
 

 let order = (f,s,c,t,n,total) => {
     this.flavour = f;
     this.size = s;
     this.crust = c;
     this.topping = t;
     this.number = n;
     this.total =total;
      return{f,s,c,t,n,total};
 };

 let newOrder = order(flavour, size, crust, topping, number, totalPrice);
 console.log(newOrder);

 
 $('#list').text(" ");
        $("#list").append("<br>" + "Flavour Chosen is:   " + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust Chosen is:     "
            + newOrder.c + "<br>" + "Toppings Chosen:     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "The Total Price is KSH:  "
            + newOrder.total + "<br><br>").css('font-size', '30px');


            