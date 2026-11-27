import fs from "node:fs";
import { marked } from "marked";

// Input and output file can be passed as arguments, defaults are for this repo
const inputFile = process.argv[2] ?? "README.md";
const outputFile = process.argv[3] ?? "README.html";

const markdown = fs.readFileSync(inputFile, "utf8");
const html = marked.parse(markdown);

fs.writeFileSync(outputFile, html);
console.log(`Converted ${inputFile} to ${outputFile}`);
