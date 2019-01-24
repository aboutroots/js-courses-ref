
var video = $('#video')[0];

$(function(){
    
    $('#playPauseButton').click(function()
    {
        if(video.paused)
        {
            video.play();
            $('#playPauseButton').html('Pause');
        }
        else
        {
            video.pause();
            $('#playPauseButton').html('Play');
        }
    });
    $('#muteUnmuteButton').click(function()
    {
        if(!video.muted)
        {
            video.muted = true;
            $('#muteUnmuteButton').html("Unmute");
        }
        else
        {
            video.muted = false;
            $('#muteUnmuteButton').html("Mute");
        }
    });
    
    $('#resizeplus').click(function()
    {
        video.width += 8;
        video.height += 8; 
    });
    $('#resizeminus').click(function()
    { 
        video.width -= 8;
        video.height -= 8; 
    });
    $("#test").click(function()
    {
        alert($('#video')[0].currentSrc);
    });

}); 