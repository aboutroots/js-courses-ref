  
window.onload = function()
{
    var slideShow = document.getElementById('slideShow');
    var imageSrc = ['image1.jpeg','image2.jpeg','image3.jpeg'];
    for (var i = 0; i < imageSrc.length; i++)
    {
        var image = new Image();
        
        image.src = 'images/' + imageSrc[i];
        
        slideShow.appendChild(image);
    }
    
    slideShow.childNodes[0].setAttribute('class', 'current');
    
    var i = 0;
    setInterval(function()
    {
        slideShow.childNodes[i % imageSrc.length].setAttribute('class', '');
        
        slideShow.childNodes[(i+1) % imageSrc.length].setAttribute('class', 'current');
        
        i++;
        
    }, 2000);
};

    
    
    

