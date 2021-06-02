import './css/index.css';
const Handlebars = require('handlebars');

const pipDiv = document.querySelector('.pipla').innerHTML;
const teimplete = document.querySelector('.frame-work');
const framework = ['Vue', 'React', 'Anjular'];

const templateScript = Handlebars.compile(teimplete);
let murkup = templateScript(framework);
pipDiv.innerHTML = murkup;
