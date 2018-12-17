$(window).on('load resize scroll',function(){
    if ($(window).width() < 1261) {

        if (window.pageYOffset > 200) {
            $('header .logo').css({'background': 'rgba(255, 255, 255, .95)'});
        }
        else {
            $('header .logo').css({'background': 'rgba(255, 255, 255, .3)'});
        }
    }  else if ($(window).width() < 480) {
         if (window.pageYOffset > 30) {
            $('header .logo').css({'background': 'rgba(255, 255, 255, .8)'});
        }
        else {
            $('header .logo').css({'background': 'rgba(255, 255, 255, .3)'});
        }

    }   else {
            $('header .logo').css({'background': 'rgba(255, 255, 255, 0)'});
    }

    if (window.pageYOffset > 100) {
        $('.header').css({'background': 'rgba(255, 255, 255, .8)'});
    } else {
        $('.header').css({'background': 'rgba(255, 255, 255, .1)'});
    }
});