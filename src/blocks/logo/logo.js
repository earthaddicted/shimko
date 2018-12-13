$(window).on('load resize scroll',function(){
    if ($(window).width() < 1025) {

        if (window.pageYOffset > 200) {
            // $('header').addClass('header-bg');
            $('header .logo').css({'background': 'rgba(255, 255, 255, .8)'});
        }
        else {
            // $('header').removeClass('header-bg');
            $('header .logo').css({'background': 'rgba(255, 255, 255, .1)'});
        }
    }  else if ($(window).width() < 480) {
         if (window.pageYOffset > 50) {
            // $('header').addClass('header-bg');
            $('header .logo').css({'background': 'rgba(255, 255, 255, .8)'});
        }
        else {
            // $('header').removeClass('header-bg');
            $('header .logo').css({'background': 'rgba(255, 255, 255, .1)'});
        }

    }   else {
            // $('header').removeClass('header-bg');
            $('header .logo').css({'background': 'rgba(255, 255, 255, 0)'});
    }
});