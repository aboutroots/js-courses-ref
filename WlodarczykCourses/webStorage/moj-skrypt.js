$(function(){
    
    // Funkcja inicjalizująca - przechodzę przez wszystkie inputy
    // i wpisuję w nich wartości.
    
    function init()
    {
        $("form input.stored").each(function()
        {
            var form = $(this).parent();
       
            var idOfForm = form.attr("id");

            var type = $(this).data('type');
    // Jeśli localStorage istnieje.
             if(localStorage.getItem("#" + idOfForm + " input[data-type='" + type + "']"))
    // Ustalam wartość inputa.
                 $(this).val(localStorage.getItem("#" + idOfForm + " input[data-type='" + type + "']"));
        });
    }
    // By wyczyścić wpisany formularz.
    $("form input[type='submit']").click(function(e)
    {
        e.preventDefault();
        
        $("input.stored", e.target.parentNode).each(function()
        {
            var form = $(this).parent();
       
            var idOfForm = form.attr("id");

            var type = $(this).data('type');
    // Usuwam wartości z localStorage.
            localStorage.removeItem("#" + idOfForm + " input[data-type='" + type + "']");
    // Usuwam wartości z inputa.
            $("#" + idOfForm + " input[data-type='" + type + "']").val("");
        });
        
    });
    
    init();

    // Zapisuję wartości do localStorage z wykorzystaniem eventu.

   $("form input.stored").keyup(function()
   {
       var form = $(this).parent();
       
       var idOfForm = form.attr("id");
       
       var type = $(this).data('type');
       
       localStorage.setItem("#" + idOfForm + " input[data-type='" + type + "']", $(this).val());
   });
}); 
