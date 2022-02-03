// Image Observer
function lazyImageObserverFunc(lazyImages) {
    let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                let lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.srcset = lazyImage.dataset.srcset;
                lazyImage.classList.remove("lazy");
                lazyImageObserver.unobserve(lazyImage);
            }
        });
    });

    lazyImages.forEach(function (lazyImage) {
        lazyImageObserver.observe(lazyImage);
    });
}

// Bg Image Observer
function lazyBgImageObserverFunc(lazyBgImages) {
    let lazyBgImageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                lazyBgImageObserver.unobserve(entry.target);
            }
        });
    });

    lazyBgImages.forEach(function (lazyBgImage) {
        lazyBgImageObserver.observe(lazyBgImage);
    });
}

// Video Observer
function lazyVideoObserverFunc(lazyVideos) {
    let lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (video) {
            if (video.isIntersecting) {
                for (var source in video.target.children) {
                    var videoSource = video.target.children[source];
                    if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                        videoSource.src = videoSource.dataset.src;
                    }
                }
                video.target.load();
                video.target.classList.remove("lazy");
                lazyVideoObserver.unobserve(video.target);
            }
        });
    });

    lazyVideos.forEach(function (lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
    });
}


document.addEventListener("DOMContentLoaded", function () {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));
    let lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

    if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {

        if (lazyImages.length) {
            lazyImageObserverFunc(lazyImages);
        }
        if (lazyBackgrounds.length) {
            lazyBgImageObserverFunc(lazyBackgrounds);
        }
        if (lazyVideos.length) {
            lazyVideoObserverFunc(lazyVideos);
        }

    }
});
