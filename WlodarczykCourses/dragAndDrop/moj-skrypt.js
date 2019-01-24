$(function(){
    
    $('.object').hover(function()
    {
        $(".description", this).fadeIn();
    },
    function()
    {
        $(".description", this).fadeOut();
    })
    .dragstart(function(e)
    {
        e.dataTransfer.setData("text", $(this).attr("id"));
        $("#info").fadeIn();
    }).dragend(function()
    {
        $("#info").fadeOut();
    });
    
    var default_color = $("#basket_container").css("background-color");
    
    $("#basket_container").dragover(function(e)
    {
        e.preventDefault();
        $(this).css("background-color", "teal");
    }).dragleave(function(e)
    {
        $(this).css("background-color", default_color);
    }).drop(function(e)
    {
        e.preventDefault();
        $(this).css("background-color", default_color);
        var id_holidays = e.dataTransfer.getData("text");
        
        var name = $("#" + id_holidays + " .name").text();
        var price = $("#" + id_holidays + " .price").text();
    
        var li = "<li class='products_in_basket'><b>" + name + "</b><span class='price_in_basket'>" + price + " zł</span></li>";
        
        $("#basket").append(li);
        
        var suma = 0;
        
        $("#basket .price_in_basket").each(function()
        {
           suma += parseFloat($(this).text());
        });
        
        $("#price span").text(suma.toFixed(2));
    });
}); 