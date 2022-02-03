(function () {

  var bv = new Bideo();
  bv.init({
    // Video element
    videoEl: document.querySelector('#background_video'),

    // Container element
    container: document.querySelector('.header__container'),

    // Resize
    resize: true,

    autoplay: true,

    // isMobile: window.matchMedia('(max-width: 768px)').matches,

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'video/night.mp4',
        type: 'video/mp4'
      },
      // {
        // src: 'OlyriaRoy3.webm',
        // type: 'video/webm;codecs="vp8, vorbis"'
      // }
    ],

    // What to do once video loads (initial frame)
    // onLoad: function () {
      // document.querySelector('#video_cover').style.display = 'none';
    // }
  });
}());
