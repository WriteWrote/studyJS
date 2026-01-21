/**
 * ts files need to be compiled to js with command:
 * tsc <name>.ts
 * this should produce the .js file with the same name, but with the translated version of code from .ts file
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

