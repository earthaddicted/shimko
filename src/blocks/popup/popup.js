(function() {
    // var wrapPopup = document.querySelector('.popup-block');
    var popup = document.querySelector('.popup-block');
    var close = document.querySelector('.close');
    var prompt = document.querySelector('.order-individual');
    var body = document.querySelector('body');

    if (prompt) {
        prompt.addEventListener('click', showPopup);

        function showPopup() {
            popup.classList.add('visible-popup');
            body.classList.add('no-scroll');
        }

        close.addEventListener('click', hidePopup);

        function hidePopup() {
            popup.classList.remove('visible-popup');
            body.classList.remove('no-scroll');
        }

        window.addEventListener('click', removePopup);

        function removePopup(e) {
            var target = e.target;
            if (target == popup) {
                hidePopup();
            }
        }
    }
})();

(function() {
    // var wrapPopup = document.querySelector('.popup-block');
    var popup = document.querySelector('.popup-block');
    var close = document.querySelector('.close');
    var prompt = document.querySelector('.btn-popup');
    var body = document.querySelector('body');

    if (prompt) {
        prompt.addEventListener('click', showPopup);

        function showPopup() {
            popup.classList.add('visible-popup');
            body.classList.add('no-scroll');
        }

        close.addEventListener('click', hidePopup);

        function hidePopup() {
            popup.classList.remove('visible-popup');
            body.classList.remove('no-scroll');
        }

        window.addEventListener('click', removePopup);

        function removePopup(e) {
            var target = e.target;
            if (target == popup) {
                hidePopup();
            }
        }
    }
})();