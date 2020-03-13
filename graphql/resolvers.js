import { people, getById } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (what, { id }) => {
      return getById(id);
    }
  },
  Mutation: {
    addPerson: (__, { name, age, sex }) => {
      const id = people[people.length - 1].id + 1;
      people.push({ id, name, age, sex });
      return people;
    },
    deletePersonById: (__, { id }) => {
      const deleteIndex = people.findIndex(people => people.id === id);
      if (deleteIndex >= 0) {
        people.splice(deleteIndex, 1);
        return true;
      } else {
        return false;
      }
    }
  }
};

export default resolvers;
