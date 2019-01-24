/*
Hasło powinno zawierać:
- przynajmniej 7 znaków
- jedną małą literę
- jedną dużą literę
- cyfrę
*/


window.onload = function()
{
    var info = document.getElementById('info');
    
    var testButton = document.getElementById('myForm').testButton;
    
    testButton.onclick = function(e)
    {
        e.preventDefault();
        var pw = document.getElementById('myForm').pw.value;
        info.innerHTML = pw;
        
        var regExpPattern = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]){7,}/;
        
        if (regExpPattern.test(pw))
            document.getElementById('myForm').submit();
        else
            info.innerHTML = 'hasło jest niepoprawne';
    };
   
   
};


