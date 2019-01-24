

// z wykorzystaniem funkcji setTimeout
var timeOutStoper;

function stopwatch(uchwytStopera, liczba)
{
    uchwytStopera.innerHTML = liczba--;
    if (liczba < 0)
        return;
    timeOutStoper = setTimeout(function()
    {
        stopwatch(uchwytStopera, liczba);
    }, 1000);
    return timeOutStoper;
}
    
window.onload = function()
{
    var przyciskOdpalStoper = document.getElementById('przyciskOdpalStoper');
    var przyciskZatrzymajStoper = document.getElementById('przyciskZatrzymajStoper');
    var uchwytStopera = document.getElementById('uchwytStopera');

    przyciskOdpalStoper.onclick = function()
    {
        var poczatkowaWartosc = document.getElementById('poczatkowaWartosc').value;
        uchwytStopera.innerHTML = poczatkowaWartosc;
        if (timeOutStoper)
            clearTimeout(timeOutStoper);
        timeOutStoper = stopwatch(uchwytStopera, poczatkowaWartosc); 
    };
    przyciskZatrzymajStoper.onclick = function()
    {
        clearTimeout(timeOutStoper);
    };
   
};




