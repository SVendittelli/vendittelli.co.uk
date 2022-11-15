---
layout: page
title: Version Control
---

## Git Hooks

[Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) are git's system for triggering custom scripts when certain important actions occur. This project uses [husky](https://typicode.github.io/husky/) to automatically install git hooks for developers.

The scripts themselves can be found in the [`.husky`]({{ site.github.repository_url }}/tree/main/.husky) folder. Their actions are summarised here:

### `commit-msg`

Lint the commit message to ensure it matches [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

### `pre-commit`

1. [Generates](https://terraform-docs.io/) a [`README`]({{ site.github.repository_url }}/tree/main/terraform/README.md) for the terraform configuration.
2. Formats all staged files using [prettier](https://prettier.io/)
3. Lints all the terraform configuration using [TFLint](https://github.com/terraform-linters/tflint)
4. Lints source code using each affected project's linter
5. Runs all the unit tests for affected projects

For details on what "affected" projects are, see [Nx](nx.md).

### `pre-push`

Runs the end-to-end tests for all affected projects.

For details on what "affected" projects are, see [Nx](nx.md).

## GitHub

<!-- TODO talk about:
Branch protection
Commit signing
Link to CI/CD -->
