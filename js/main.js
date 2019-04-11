// //slideshow style interval
// var autoSwap = setInterval(swap, 3500);

//pause slideshow and reinstantiate on mouseout
// $('ul, span').hover(
//     function () {
//         clearInterval(autoSwap);
//     },
//     function () {
//         autoSwap = setInterval(swap, 3500);
//     });

//global variables
var items = [];
var startItem = 1;
var position = 0;
var itemCount = $('.carousel-plataformas li.items').length;
var leftpos = itemCount;
var resetCount = itemCount;

//unused: gather text inside items class
$('li.items').each(function (index) {
    items[index] = $(this).text();
});

//swap images function
function swap(action) {
    var direction = action;

    //moving carousel backwards
    if (direction == 'counter-clockwise') {
        var leftitem = $('.left-pos').attr('id') - 1;
        if (leftitem == 0) {
            leftitem = itemCount;
        }

        $('.right-pos').removeClass('right-pos').addClass('back-pos');
        $('.main-pos').removeClass('main-pos').addClass('right-pos');
        $('.left-pos').removeClass('left-pos').addClass('main-pos');
        $('#' + leftitem + '').removeClass('back-pos').addClass('left-pos');

        startItem--;
        if (startItem < 1) {
            startItem = itemCount;
        }
    }

    //moving carousel forward
    if (direction == 'clockwise' || direction == '' || direction == null) {
        function pos(positionvalue) {
            if (positionvalue != 'leftposition') {
                //increment image list id
                position++;

                //if final result is greater than image count, reset position.
                if ((startItem + position) > resetCount) {
                    position = 1 - startItem;
                }
            }

            //setting the left positioned item
            if (positionvalue == 'leftposition') {
                //left positioned image should always be one left than main positioned image.
                position = startItem - 1;

                //reset last image in list to left position if first image is in main position
                if (position < 1) {
                    position = itemCount;
                }
            }

            return position;
        }

        $('#' + startItem + '').removeClass('main-pos').addClass('left-pos');
        $('#' + (startItem + pos()) + '').removeClass('right-pos').addClass('main-pos');
        $('#' + (startItem + pos()) + '').removeClass('back-pos').addClass('right-pos');
        $('#' + pos('leftposition') + '').removeClass('left-pos').addClass('back-pos');

        startItem++;
        position = 0;
        if (startItem > itemCount) {
            startItem = 1;
        }
    }
}

//next button click function
$('#next').click(function () {
    swap('clockwise');
});

//prev button click function
$('#prev').click(function () {
    swap('counter-clockwise');
});

//if any visible items are clicked
$('li').click(function () {
    if ($(this).attr('class') == 'items left-pos') {
        swap('counter-clockwise');
    }
    else {
        swap('clockwise');
    }
});
/******************************** Termina Carousel Plataformas **********************************/

//Menu en X
$('.navbar-toggler').click(function () {
    $(this).toggleClass('active');
})

//Cierre de Menu
$('.collapse').on('click', 'a', function () {
    $('.navbar-collapse').removeClass('show');
    $('.navbar-toggler').removeClass('active');
})

// /* Funcion para numero aleatorio */
function numeroAleatorio() {
    var aleatorio = Math.round(Math.random() * 100);
    var texto = document.querySelector('#random');
    var randomCopia = document.querySelector('#random-copia');
    texto.innerHTML = aleatorio;
    randomCopia.innerHTML = texto.innerHTML;
}

numeroAleatorio();

/* Funcion para numero aleatorio Resp*/
// function numeroAleatorioResp() {
//     var aleatorioresp = Math.round(Math.random() * 100);
//     var textoresp = document.querySelector('#ramdon-resp');

//     textoresp.innerHTML = aleatorioresp;
// }

// numeroAleatorioResp();

/* Smooth scrolling para anclas */
$('a.smooth').on('click', function (e) {
    e.preventDefault();
    var $link = $(this);
    var anchor = $link.attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 100 + 'px'
    }, 1000);
})

/* Menu se Oculta */
// var lastPositionscroll = 0;

// $(window).on('scroll', function () {
//     var position = $(this).scrollTop();
//     if (position < lastPositionscroll) {
//         $('.navbar').fadeIn('slow');
//     } else {
//         $('.navbar').fadeOut('slow');
//     }
//     lastPositionscroll = position;
// })

/* Cabina  */

// var element = $('#element').hide();

// $('.btnPersonalizar').on('click', function (e) {
//     e.preventDefault();
//     $('#player').fadeOut(1000);
//     $('#element').fadeIn(1000);
// })

/*  Tooltip */
var tooltip = $('.tooltip-trader');
var conoce = $('.conoce-trader');

conoce.on('click', function () {
    tooltip.removeClass('hide');
})

tooltip.on('click', function () {
    $('.tooltip-trader').addClass('hide');
    console.log('click');
})

/* Acordeon */
$('#ranking').on('click', function () {
    var table = $('#table');
    var ocultar = $('.ocultar')
    table.slideToggle();
    if ($('#ranking').find('p').text() == 'Ver más') {
        $('#ranking').find('p').text('Ocultar');
        $(ocultar).removeClass('fa-angle-down').addClass('fa-angle-up')
    } else {
        $('#ranking').find('p').text('Ver más');
        $(ocultar).removeClass('fa-angle-up').addClass('fa-angle-down')
    }

});

/* News Desktop */
var linksParentNoticias = $('.menu-noticias');
var linksNoticias = linksParentNoticias.find('li');
var itemsNoticias = $('.noticias-content-items');

linksParentNoticias.on('click', 'a', function (e) {
    e.preventDefault();
    var t = $(this);
    var i = t.attr('href');
    // linksNoticias.addClass('news-active').siblings().removeClass('news-active');
    $(i).addClass('noticias-content-items-active').siblings().removeClass('noticias-content-items-active');
})

/* Cookies */

let cookiesBox = document.querySelector('.cookies');
let closeCookies = document.querySelector('#close-cookies');
let aceptarCookies = document.querySelector('.aceptar-cookies');
closeCookies.addEventListener('click', function () {
    cookiesBox.style.display = 'none'
});
aceptarCookies.addEventListener('click', function () {
    cookiesBox.style.display = 'none'
});


/* Boton de usuarios en linea que aparece despues de la seccion cabina */
$(window).scroll(function () {
    var cabina = $('#element').offset().top;
    var ventana = $(window).scrollTop();
    if ($(window).scrollTop() < cabina) {
        $(".users-online").hide();
    } else {
        $(".users-online").fadeIn();
    }

});

/* Funcion de acordeon para noticias en modo responsive */
$('.menu-noticias-mobile').on('click', '.items-noticias', function () {
    var t = $(this);
    var tp = t.next();
    var p = t.parent().siblings().find('.noticias-content-items-mobile');
    tp.slideToggle();
    p.slideUp();
})

/* Validacion ajax en formulario  */
$(".form-contact").bind("submit", function () {
    $.ajax({
        type: $(this).attr("method"),
        url: $(this).attr("action"),
        data: $(this).serialize(),
        success: function () {
            $("#alert-contacto").fadeIn();
            $("#send-contact").addClass("hide");
        },
        error: function () {
            alert("error");
        }
    });

    return false;
});

/* Validacion de formulario de contacto */
$('#btn-enviar').on('click', function () {

    let nombre = $('#name').val();
    let email = $('#email').val();
    let telefono = $('#phone').val();
    let message = $('#message').val();

    if (nombre == '') {
        $('#name').addClass('alert-input').focus();
        return false;
    } else {
        $('#name').removeClass('alert-input');
    }
    if (email.length == 0) {
        $('#email').addClass('alert-input').focus();
        return false;
    } else {
        $('#email').removeClass('alert-input');
    } if (telefono.length == 0) {
        $('#phone').addClass('alert-input').focus();
        return false;
    } else {
        $('#phone').removeClass('alert-input');
    } if (message.length == 0) {
        $('#message').addClass('alert-input').focus();
        return false;
    } else {
        $('#message').removeClass('alert-input');
    }
})


// Imagen de captura de Video
var videos = document.querySelectorAll(".youtube");
for (var i = 0; i < videos.length; i++) {
    var youtube = videos[i];
    // Get function
    getVideos(youtube);
}

// Get videos function
function getVideos(el) {
    var img = document.createElement("img");
    // Get images
    img.setAttribute('src', 'http://i.ytimg.com/vi/' + el.id + '/hqdefault.jpg');
    // Add class to img
    img.setAttribute('class', 'thumb');
    // Make div to embed videos
    var video = document.createElement("div");
    // Remove this if you like
    video.setAttribute("class", "video_here");
    // Insert tags
    el.appendChild(img);
    el.appendChild(video);
    // On click get video
    el.addEventListener('click', function () {
        //        var iframe = document.createElement("iframe");
        //        iframe.setAttribute('class', 'youtube_video');
        //        iframe.setAttribute('src', 'https://www.youtube.com/embed/' +
        //            this.id + '?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1');
        //        // Remplace img for video
        //        this.parentNode.replaceChild(iframe, this);
    }, false);
}

/* Carga diferida de imagenes */
// document.addEventListener("DOMContentLoaded", function () {
//     var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

//     if ("IntersectionObserver" in window) {
//         let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
//             entries.forEach(function (entry) {
//                 if (entry.isIntersecting) {
//                     let lazyImage = entry.target;
//                     lazyImage.src = lazyImage.dataset.src;
//                     lazyImage.srcset = lazyImage.dataset.srcset;
//                     lazyImage.classList.remove("lazy");
//                     lazyImageObserver.unobserve(lazyImage);
//                 }
//             });
//         });

//         lazyImages.forEach(function (lazyImage) {
//             lazyImageObserver.observe(lazyImage);
//         });
//     } else {
//         // Possibly fall back to a more compatible method here
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;

    const lazyLoad = function () {
        if (active === false) {
            active = true;

            setTimeout(function () {
                lazyImages.forEach(function (lazyImage) {
                    if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.srcset = lazyImage.dataset.srcset;
                        lazyImage.classList.remove("lazy");

                        lazyImages = lazyImages.filter(function (image) {
                            return image !== lazyImage;
                        });

                        if (lazyImages.length === 0) {
                            document.removeEventListener("scroll", lazyLoad);
                            window.removeEventListener("resize", lazyLoad);
                            window.removeEventListener("orientationchange", lazyLoad);
                        }
                    }
                });

                active = false;
            }, 200);
        }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
});

