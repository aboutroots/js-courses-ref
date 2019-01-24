$(function(){
  
    var supportOutput = document.querySelector("#supportOutput"),
        positionOutput = document.querySelector("#positionOutput"),
        findPosition = document.querySelector("#findPosition");
        
        if (!navigator.geolocation)
            supportOutput.innerHTML = "Geolokalizacja nie jest wspierana!";
            
        else
            supportOutput.innerHTML = "Geolokalizacja jest wspierana!";
        
        
        function geoSuccess(position)
        {
            positionOutput.innerHTML = "Twoja lokalizacja to: " + position.coords.latitude + ", " + position.coords.longitude;
        };
        
        function geoError(errorObj)
        {
            var errorMessage;
            
            switch(errorObj.code)
            {
                case errorObj.PERMISSION_DENIED :
                    errorMessage = "Brak pozwolenia na znalezienie lokalizacji!";
                    break
                case errorObj.POSITION_UNAVAILABLE :
                    errorMessage = "Nie można odnaleźć lokalizacji!";
                    break
                case errorObj.TIMEOUT :
                    errorMessage = "Zbyt długi czas oczekiwania na odpowiedź";
                    break
            };
        
        positionOutput.innerHTML = "wystąpił błąd: " + errorMessage;
            
        }
    
        var options = {
            timeout: 5000
        };
        
        findPosition.onclick = function()
        {
            positionOutput.innerHTML = "Czekaj...";
            navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options);
        }; 
}); 
