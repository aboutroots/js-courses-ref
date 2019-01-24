function Clock(elementHandler)
{
    this.elementHandler = elementHandler;
    this.actualDate = new Date();
    this.start = function()
    {
        this.updateElementHandlerContent();
        var self = this;
        setInterval(function(){self.addSecond(); self.updateElementHandlerContent();}, 1000);
        
    };
    this.addSecond = function()
    {
        this.actualDate = new Date();
    };
    this.updateElementHandlerContent = function()
    {
        this.elementHandler.innerHTML = this.getFormattedDate();
    };
    this.getFormattedDate = function()
    {
        var hours = this.actualDate.getHours();
        var minutes = this.actualDate.getMinutes();
        var seconds = this.actualDate.getSeconds();
        
        if (hours < 10)
            hours = '0' + hours;
        if (minutes < 10)
            minutes = '0' + minutes;
        if (seconds < 10)
            seconds = '0' + seconds;
        
        var suffix = '';
        if (hours < 12)
            suffix = 'AM';
        else
            hours -= 12;
            suffix = 'PM';
        
        return hours + ':' + minutes + ':' + seconds + ' ' + suffix;
    };
}

window.onload = function()
{
    var info = document.getElementById('info');
    
    var clock = new Clock(info);
    
    clock.start();
    
};
