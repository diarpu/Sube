if (module.hot) {
    module.hot.accept();
}

import './js/header.js'

import './js/fancybox.js'

import styleBar from 'bundle-text:./css/styleBar.css';

// inject <style> tag
let style = document.createElement('style');
style.textContent = styleBar
document.head.appendChild(style);