if (module.hot) {
    module.hot.accept();
}

import './_components/js/lazyload.js'
import './_components/js/smothscroll.js'
import './js/header.js'
import './js/submitform.js'

import './data.js'
import './_components/_includes/Wa/goto.js'
import './js/fancybox.js'

import styleBar from 'bundle-text:./css/styleBar.css';

// inject <style> tag
let style = document.createElement('style');
style.textContent = styleBar
document.head.appendChild(style);


