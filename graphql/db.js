export const people = [
  {
    id: 0,
    name: "hys",
    age: 30,
    sex: null
  },
  {
    id: 1,
    name: "hjs",
    age: 25,
    sex: null
  },
  {
    id: 2,
    name: "brom",
    age: 33,
    sex: null
  },
  {
    id: 3,
    name: "yumm",
    age: 30,
    sex: null
  }
];

export const getById = id =>
  people[people.findIndex(person => person.id === id)];
