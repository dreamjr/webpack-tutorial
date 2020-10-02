import _join from 'lodash/join'; // reduced bundle sizes
import '../css/common.css';

function component() {
    let element = document.createElement('div');

    element.innerHTML = _join(['Hello', 'WebPack', 'GoGG'], ' ');
    return element;
}

document.body.appendChild(component());