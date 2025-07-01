class TSPerson {
  private name: string;
  private lastName: string;
  private age: number;
  private country: string;
  private city: string;
  private hobbies: string[];

  constructor(
    name: string,
    lastName: string,
    age: number,
    country: string,
    city: string,
    hobbies: string[]
  ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.hobbies = hobbies;
  }
}

interface TSPersonBuilder {
  reset(): void;
  setName(name: string): TSPersonBuilder;
  setLastName(lastName: string): TSPersonBuilder;
  setAge(age: number): TSPersonBuilder;
  setCountry(country: string): TSPersonBuilder;
  setCity(city: string): TSPersonBuilder;
  addHobby(hobby: string): TSPersonBuilder;
  build(): TSPerson;
}

class NormalPersonBuilder implements TSPersonBuilder {
  name: string;
  lastName: string;
  age: number;
  country: string;
  city: string;
  hobbies: string[];

  constructor() {
    this.name = "";
    this.lastName = "";
    this.age = 0;
    this.country = "";
    this.city = "";
    this.hobbies = [];
  }

  reset(): void {
    this.name = "";
    this.lastName = "";
    this.age = 0;
    this.country = "";
    this.city = "";
    this.hobbies = [];
  }
  setName(name: string): TSPersonBuilder {
    this.name = name;
    return this;
  }
  setLastName(lastName: string): TSPersonBuilder {
    this.lastName = lastName;
    return this;
  }
  setAge(age: number): TSPersonBuilder {
    this.age = age;
    return this;
  }
  setCountry(country: string): TSPersonBuilder {
    this.country = country;
    return this;
  }
  setCity(city: string): TSPersonBuilder {
    this.city = city;
    return this;
  }
  addHobby(hobby: string): TSPersonBuilder {
    this.hobbies.push(hobby);
    return this;
  }

  build(): TSPerson {
    const person = new TSPerson(
      this.name,
      this.lastName,
      this.age,
      this.country,
      this.city,
      this.hobbies
    );

    this.reset();
    return person;
  }
}

class PersonDirector {
  private personBuilder: TSPersonBuilder;

  constructor(personBuilder: TSPersonBuilder) {
    this.personBuilder = personBuilder;
  }

  setPersonBuilder(personBuilder: TSPersonBuilder) {
    this.personBuilder = personBuilder;
  }

  createSimplePerson(name: string, lastName: string) {
    this.personBuilder.setName(name).setLastName(lastName);
  }
}

const normalPersonBuilder = new NormalPersonBuilder();
const luis = normalPersonBuilder
  .setAge(26)
  .setName("Luis")
  .setCity("Valencia")
  .setLastName("Manuel")
  .addHobby("Fisica")
  .setCountry("Spain")
  .build();

console.log(luis);

// utilizando el director
const personDirector = new PersonDirector(normalPersonBuilder);
personDirector.createSimplePerson("John", "Cena");
const johnCena = normalPersonBuilder.build();
console.log(johnCena);
