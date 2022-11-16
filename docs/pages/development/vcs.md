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

As I am using [GitOps](../infrastructure/iac.md#gitops), it is imperative that all commits on the `main` are in a production ready state.

Using Github's [protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches), any commits directly to the `main` branch are rejected. For a commit to be included on `main` it must be:

1. [A verified signed commit](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification);
2. Committed to a branch other than `main` and merged via pull request;
3. All required [GitHub actions](../devops/ci-cd.md) must have been run against it and pass.

This ensures that, in so far as possible, the `main` branch is production ready.
