// z wykorzystaniem funkcji konstrukcyjnej

                // funkcja konstrukcyjna
function Stopwatch(uchwytStopera)
{
    this.uchwytStopera = uchwytStopera;
    this.poczatkowaWartosc;
    this.timeOutRef = undefined;
                // funkcja odpalająca stoper
    this.odpal = function(poczatkowaWartosc)
    {
        this.poczatkowaWartosc = poczatkowaWartosc;
                // do zatrzymania przejścia
        if (this.timeOutRef)
            this.zatrzymaj();
        
        this.startStoper();
    };
                // metoda wykonywana cały czas
    this.startStoper = function()
    {
        if (this.poczatkowaWartosc < 0)
            return;
        
        this.uchwytStopera.innerHTML = this.poczatkowaWartosc--;
                // z wykorzystaniem self dostęp do fukcji z innych miejsc
        var self = this;
        
        this.timeOutRef = setTimeout(function()
        {
            self.startStoper();
        }, 1000);
    };
                // funkcja zatrzymuje stoper
    this.zatrzymaj = function()
    {
        clearTimeout(this.timeOutRef);
    };
                // funkcja kontynuująca
    this.kontynuuj = function()
    {
        this.startStoper();
    };
}

window.onload = function()
{
    var przyciskOdpalStoper = document.getElementById("przyciskOdpalStoper");
    var przyciskZatrzymajStoper = document.getElementById("przyciskZatrzymajStoper");
    var przyciskKontynuujStoper = document.getElementById("przyciskKontynuujStoper");
    var uchwytStopera = document.getElementById("uchwytStopera");
                // obiekt do funkcji konstrukcyjnej
    var stoper = new Stopwatch(uchwytStopera);
    
    przyciskOdpalStoper.onclick = function()
    {
        var poczatkowaWartosc = document.getElementById("poczatkowaWartosc").value; 
        stoper.odpal(poczatkowaWartosc);
    };
    przyciskZatrzymajStoper.onclick = function()
    {
        stoper.zatrzymaj();
    };
    przyciskKontynuujStoper.onclick = function()
    {
        stoper.kontynuuj();
    };
};
