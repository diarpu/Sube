const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    // or use the path to the file as the only parameter
    plugins: [
        purgecss({
            content: ['./src/index.html', './src/index.js'],
            css: ['./src/app.css'],
            safelist: [
                'header-sticky',
                'active-link',
                'visible',
                'lazy',
                'lazy-background',
                'show-menu',
                'active',
                'go-top',
                'submenu--active',
                '-webkit-scrollbar-track',
                '-webkit-scrollbar-thumb',

            // FANCYBOX -- SOLO MODAL (VERIFICADO -> añadir: .carousel-button:focus{outline: none})
                'with-fancybox',
                'compensate-for-scrollbar',
                'is-using-mouse',
                'is-closing',
                'fancybox__container',
                'is-animated',
                'fancybox__backdrop',
                'fancybox__carousel',
                'is-draggable',
                'fancybox__viewport',
                'fancybox__track',
                'fancybox__slide',
                'is-selected',
                'has-inline',
                'before',
                'after',
                'fancybox__content',
                'carousel__button',
                'is-close',
                'role',
                'fancybox-5',
            ]
        }),
    ]
}