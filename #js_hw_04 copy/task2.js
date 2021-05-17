const obj = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const g = (vagetables) => Object.keys(vagetables).length;

console.log(g({ name: 'Mango', age: 2 }));
