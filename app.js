const fs = require('fs');

const genders = ['M', 'F'];

const maleNames = ['Harvey', 'Marcus', 'Nicholas', 'Ambrose', 'Edward', 'Martin', 'Emmet', 'George', 'James', 'Biff'];
const femaleNames = ['Rosie', 'Kate', 'Rachel', 'Monica', 'Phoebe', 'Jennifer', 'Emma', 'Lilly', 'Diana', 'Victoria'];

const lastNames = ['Nickolson', 'Pitt', 'Freeman', 'Clooney', 'Cage', 'Gibson', 'Crowe', 'Hanks', 'Blanchett', 'Monroe'];

const randChoice = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

let people = [];

for (let i = 0; i < 20; i++) {
  let person = {};
  person.gender = randChoice(genders);
  if (person.gender === 'M') {
    person.firstName = randChoice(maleNames);
  } else {
    person.firstName = randChoice(femaleNames);
  }
  person.lastName = randChoice(lastNames);
  person.age = Math.floor(Math.random() * 60 + 18);

  people.push(person);
}

fs.writeFile('people.json', JSON.stringify(people), (err) => {
  if (err) {
    console.log('Something went wrong');
  } else {
    console.log('File has been successfully generated! Check people.json');
  }
});

