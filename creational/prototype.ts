// Creates copy of objects without making it dependent on their class

interface PrototypeClone {
  clone(): PrototypeClone;
}

class Person implements PrototypeClone {
  private name: string;
  private age: number;

  constructor(person: { name: string; age: number }) {
    this.name = person.name;
    this.age = person.age;
  }

  clone(): PrototypeClone {
    return new Person({ name: this.name, age: this.age });
  }
}

const person = new Person({ name: 'John', age: 30 });
const clonedPerson = person.clone() as Person;
