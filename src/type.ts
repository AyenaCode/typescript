const a: number = 13;
type User = { firstName: string; lastName: string };
console.log(a);
const bart: User = { firstName: "coucou", lastName: "test" };
console.log(bart);

// Types génériques
function identity<ArgType>(arg: ArgType): ArgType {
  return arg;
}

console.log(identity<number>(3));

// -- Tableau à générique :
let myArray: Array<string | number> = ["coucu", 12];
console.log(myArray);

//Gérérique dans un type
type Identity<ArgType> = (arg: ArgType) => ArgType;

//Type à partir d'une variable objet :
const b = { age: 12, nom: "boba" };
type person = typeof b;
const momo: person = { age: 26, nom: "momo" };
console.log(momo);

//héritage de type
type UserName = User["firstName"];

// readonly pour ne pas modifier les paramètre des fontions
function reverse<T>(arr: readonly T[]): T[] {
  return [...arr].reverse();
}
const test: number[] = [1, 3, 4];
console.log(reverse(test));
console.log(test);
