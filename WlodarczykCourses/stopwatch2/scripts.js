

// z wykorzystaniem funkcji setInterval

function stopwatchInterval(uchwytStopera, liczba)
{
    var timeIntervalRef = setInterval(function()
    {
        if (liczba <= 0)
        {
            clearInterval(timeIntervalRef);
            return;
        }
        uchwytStopera.innerHTML = --liczba;
    }, 1000);
    return timeIntervalRef;
}

    
window.onload = function()
{
    var przyciskOdpalStoper = document.getElementById('przyciskOdpalStoper');
    var przyciskZatrzymajStoper = document.getElementById('przyciskZatrzymajStoper');
    var uchwytStopera = document.getElementById('uchwytStopera');
    var timeIntervalRef;
    
    przyciskOdpalStoper.onclick = function()
    {
        var poczatkowaWartosc = document.getElementById('poczatkowaWartosc').value;
        uchwytStopera.innerHTML = poczatkowaWartosc;
        timeIntervalRef = stopwatchInterval(uchwytStopera, poczatkowaWartosc);
    };
    przyciskZatrzymajStoper.onclick = function()
    {
        clearInterval(timeIntervalRef);
    };
   
};




