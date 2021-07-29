import './style.css';

document.querySelector('#load').addEventListener('click', load);

function load() {
  const users = 'https://jsonplaceholder.typicode.com/users';
  fetch(users)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const ul = document.querySelector('ul');
      ul.innerHTML = '';
      const html = data.map((elem) => {
        return (
          '<li>' + elem.id + ' ' + elem.name + ' (' + elem.email + ')</li>'
        );
      });
      ul.insertAdjacentHTML('afterbegin', html.join(' '));
    });
}
