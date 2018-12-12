$(window).on('load resize scroll',function(){
    if ($(window).width() < 1024) {

        if (window.pageYOffset > 200) {
            // $('header').addClass('header-bg');
            $('header .logo').css({'background': 'rgba(255, 255, 255, .8)'});
        }
        else {
            // $('header').removeClass('header-bg');
            $('header .logo').css({'background': 'rgba(255, 255, 255, .3)'});
        }
    } else {
            // $('header').removeClass('header-bg');
            $('header .logo').css({'background': 'rgba(255, 255, 255, .3)'});
    }
});