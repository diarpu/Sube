function smothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.scrollY;
    // var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime == null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = easeOutQuad(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animation);
    }


    function easeOutQuad(t, b, c, d) {
        t /= d;
        return -c * t * (t - 2) + b;
    };

    requestAnimationFrame(animation);
}

const anchorLinks = document.querySelectorAll('a[href^="#"]');         
anchorLinks.forEach((link) => {
let scrollTarget = link.getAttribute('href'); 
    link.addEventListener('click', (e) => {
        e.preventDefault();
        smothScroll( scrollTarget ,1000); 
    })   
}); 