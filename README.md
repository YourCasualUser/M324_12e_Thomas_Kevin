# M324_12e_Thomas_Kevin

Demo repository for module M324: a GitHub Actions workflow that turns
`README.md` into `README.html` automatically.

## How it works

1. Someone edits and pushes `README.md`.
2. The workflow `Build README.html` starts.
3. `convert.js` (the exam solution, using the [marked](https://marked.js.org/) library) converts the Markdown to HTML.
4. The bot commits the new `README.html` back to the repository.

## Features

- Runs **only** when `README.md` changes
- Uses the minimal permission `contents: write`
- External action pinned to a full commit SHA
- No credentials in the workflow files

## Try it

Edit this file, commit, and watch the **Actions** tab.

## Edit 10:19
