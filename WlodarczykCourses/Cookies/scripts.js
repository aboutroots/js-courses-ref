function createCookie(name, value, days)
{
    var expires = '';
    if (days)
    {
    var expirationDateOfCookie = new Date();
    expirationDateOfCookie.setDate(expirationDateOfCookie.getDate() + days);
    expires = ';expires=' + expirationDateOfCookie.toUTCString();
    }                              
    document.cookie = name + '=' + encodeURIComponent(value) + expires + ';path=/';
};

function removeCookie(name)
{
    var expirationDateOfCookie = new Date();
    expirationDateOfCookie.setTime(expirationDateOfCookie.getTime() -1);
    document.cookie = name + '=;expires=' + expirationDateOfCookie.toUTCString() + ';path=/';
};

function getCookieByName(name)
{
    var cookies = document.cookie.split('; ');
    
    for (var i = 0; i < cookies.length; i++)
    {
        var splittedCookie = cookies[i].split('=');
        var cookieName = splittedCookie[0];
        
        if (cookieName === name)
        {
            var cookieValue = splittedCookie[1];
            return decodeURIComponent(cookieValue);
        }
    }
};
window.onload = function()
{
    var stworzCiastko = document.getElementById('stworzCiastko');
    var info = document.getElementById('info');
    var usunCiastko = document.getElementById('usunCiastko');
    
    info.innerHTML = getCookieByName('imie');
    
    stworzCiastko.onclick = function()
    {
       createCookie('imie', 'Adrian', 30);
       createCookie('nazwisko', 'Zawadzki');     
    };
    usunCiastko.onclick = function()
    {
        removeCookie('nazwisko');
    };
};
