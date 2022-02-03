const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    // or use the path to the file as the only parameter
    plugins: [
        purgecss({
            content: [
                './src/index.html',
                './src/index.js',
                './src/citas-para-beneficiarios.html',
                './src/consultorias-gratuitas.html',
                './scr/consultoria.js'
            ],
            css: [
                './src/app.css',
                './src/consultoria.css'
            ],
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
                'remove',
                'bg1',
                'bg2',
                'bg3',
                'bg4',
                'bg5',
                'beneficiario',
                'card__container',
                'card',
                'demo-card',
                'card-image',
                'demo-card-image',
                'btn-view',
                'demo-text',
                'col-md-6',
                'h4',

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


                'calendly-inline-widget',
            ]
        }),
    ]
}