const critical = require('critical');

critical.generate({
    base: 'public/',
    src: './index.html',
    target: {
        html: 'index.html',
        // css: 'critical.css',
        uncritical: 'index.min.css'
    },
    inline: true,
    dimensions: [{
            height: 500,
            width: 300,
        },
        {
            height: 720,
            width: 1280,
        },
    ]
    
}, (err, output) => {
    if (err) {
        console.error(err);
    } else if (output) {
        console.log('Generated critical CSS');
    }
});

critical.generate({
    base: 'public/',
    src: './citas-para-beneficiarios.html',
    target: {
        html: 'citas-para-beneficiarios.html',
        // css: 'critical.css',
        uncritical: 'citas.min.css'
    },
    inline: true,
    dimensions: [{
            height: 500,
            width: 300,
        },
        {
            height: 720,
            width: 1280,
        },
    ]
    
}, (err, output) => {
    if (err) {
        console.error(err);
    } else if (output) {
        console.log('Generated critical CSS');
    }
});

critical.generate({
    base: 'public/',
    src: './consultorias-gratuitas.html',
    target: {
        html: 'consultorias-gratuitas.html',
        // css: 'critical.css',
        uncritical: 'citas.min.css'
    },
    inline: true,
    dimensions: [{
            height: 500,
            width: 300,
        },
        {
            height: 720,
            width: 1280,
        },
    ]
    
}, (err, output) => {
    if (err) {
        console.error(err);
    } else if (output) {
        console.log('Generated critical CSS');
    }
});