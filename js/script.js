
document.addEventListener('DOMContentLoaded', function() {
var navbar = document.getElementById('mainNav');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
});
});


const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

setInterval(() => {
    if (image1.style.opacity === '0') {
        image1.style.opacity = '1';
        image2.style.opacity = '0';
    } else {
        image1.style.opacity = '0';
        image2.style.opacity = '1';
    }
}, 2000); // Change image every 2 seconds

$(document).ready(function() {
    $('#quote-carousel').on('slid.bs.carousel', function () {
        var activeItem = $(this).find('.carousel-inner .active');
        var text = activeItem.attr('data-text');
        $('.text-display').text(text);
    });
});


