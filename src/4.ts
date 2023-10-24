class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random();
    }
  
    getSignature(): number {
      return this.signature;
    }
  }
  
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    getKey(): Key {
      return this.key;
    }
  }
  
  abstract class House {
    door: boolean = false;
    tenants: Person[] = [];
  
    constructor(protected key: Key) {
      this.key = key;
    }
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log(`${person.getKey().getSignature()} Hello our new neighbor`);
      } else {
        console.log("wrong door");
      }
    }
  
    abstract openDoor(key: Key): void;
  }
  
  class MyHouse extends House {
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log("Двері відкриті.");
      } else {
        console.log("Неправильний ключ. Двері залишаються зачиненими.");
      }
    }
  }
  const key = new Key();
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  house.comeIn(person);
  
  export {};