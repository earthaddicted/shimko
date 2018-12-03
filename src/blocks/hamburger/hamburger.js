// $('.hamburger__icon').click(function() {
//   $(this).toggleClass('open');
//   $('header').toggleClass('open');
// });


// $(".hamburger__icon").click(function(){
// 	$(this).toggleClass('open');
//     // $(this).next(".nav").slideToggle();
//     $('.nav').slideToggle('slow');
//     $('header').toggleClass('open');
// });

(function() {
    var McButton = $("[data=hamburger-menu]");
    var McBar1 = $(".bar-1");
    var McBar2 = $(".bar-2");
    var McBar3 = $(".bar-3");
    var body = $("body");


    McButton.click(function() {
        $(this).toggleClass("active");

        if (McButton.hasClass("active")) {
            McBar1.velocity({ top: "50%" }, { duration: 100, easing: "swing" });
            McBar3.velocity({ top: "50%" }, { duration: 100, easing: "swing" })
                .velocity({ rotateZ: "90deg" }, { duration: 400, delay: 100, easing: [500, 20] });
            McButton.velocity({ rotateZ: "135deg" }, { duration: 400, delay: 100, easing: [500, 20] });
        } else {
            McButton.velocity("reverse");
            McBar3.velocity({ rotateZ: "0deg" }, { duration: 400, easing: [500, 20] })
                .velocity({ top: "100%" }, { duration: 100, easing: "swing" });
            McBar1.velocity("reverse", { delay: 400 });
        }

        $('.nav').slideToggle('slow');
        $('header').toggleClass('open');
        body.toggleClass('no-scroll');
    });
})();