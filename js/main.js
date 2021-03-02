//Animate Smooth Scrolling
$('#view-work').on('click', function() {
    const images = $('#images').position().Top;

    $('html, body').animate(
        {
        scrollTop: images
    }, 
    900
    );
});