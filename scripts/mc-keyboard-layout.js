/*
    Extend the div all the way to the bottom.
*/
function ExtendTillBottom()
{
    $('.mc-extend-till-bottom').height(function(index, height) {
        return window.innerHeight - $(this).offset().top - 15;
    });
}

