/**
 * ts files need to be compiled to js with command:
 * tsc <name>.ts
 * this should produce the .js file with the same name, but with the translated version of code from .ts file
 *
 * this command watches and auto-recompiles the file after every change:
 * tsc <name>.ts -w
 */

/**
 * while querying elements ts syntax is different
 * document.querySelectorAll(".//div[@class='field']/input")
 * ->
 * document.querySelectorAll<HTMLElement>("div.field input");
 */
const inputs = document.querySelectorAll<HTMLElement>("div.field input")

/**
 * xpath still can be used, but via evaluate():
 *
 * // Define your XPath expression
 * const xpathExpression = "//div[@class='field']/input";
 *
 * // Use document.evaluate to get results
 * const result = document.evaluate(
 *     xpathExpression,
 *     document,
 *     null, // Context node (null means the entire document)
 *     XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, // Result type
 *     null // Result object (null to create a new one)
 * );
 *
 * // Iterate through the results
 * const inputs: HTMLInputElement[] = [];
 * for (let i = 0; i < result.snapshotLength; i++) {
 *     const element = result.snapshotItem(i) as HTMLInputElement;
 *     if (element) {
 *         inputs.push(element);
 *     }
 * }
 */

inputs.forEach(input => {console.log(input)})

let personName = 'name';
const age = 30;
let isPlayable = false;

// personName = 20  -- error
// age = 20  -- error
personName = 'secondName';

// lambda works the same:
const circ = (diameter: number) => {
  return diameter * Math.PI;
}

console.log(circ(21));
// circ("hello"); -- error

let persons = ["person 1", "person 2", "person 3"];
persons.push("person 4");

// persons.push(5); -- error

persons.forEach(person => {
  console.log(person);
})

/**
 * declaration of function in a variable
 */
let greetings: Function;

greetings = (name: string) => {
  console.log("Greetings, " + name);
}

greetings("User");

/**
 * declaration of custom type alias
 */
type StringOrNumber = string | number;

const logDetails = (info: StringOrNumber) => {
  console.log(info);
}

logDetails("User");
logDetails(1);


