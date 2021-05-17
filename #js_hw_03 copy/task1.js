function Start() {
  let fruits = ['Mango', 'Poly', 'Ajax'];

  for (let result of fruits) {
    console.log(`${fruits.indexOf(result) + 1} -  ${result}`);
  }
}

Start();
