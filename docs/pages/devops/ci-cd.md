---
layout: page
title: CI/CD
---

## Continuos Integration (CI)

> Continuous integration (CI) helps developers merge their code changes back to a shared branch, or “trunk,” more frequently—sometimes even daily. Once a developer’s changes to an application are merged, those changes are validated by automatically building the application and running different levels of automated testing, typically unit and integration tests, to ensure the changes haven’t broken the app. - [Red Hat](https://www.redhat.com/en/topics/devops/what-is-ci-cd#continuous-integration)

For automated pipelines, this project uses [GitHub actions](https://github.com/features/actions). When ever code is submitted via pull request, the following actions run against it.

### `ci.yml` (Required)

> [`ci.yml`]({{ site.github.repository_url }}/tree/main/.github/workflows/ci.yml)

This actions is responsible for linting the source code, running the unit and e2e tests, and building the application. This utilises [Nx Cloud](https://cloud.nx.app/) with Distributed Task Execution & Distributed Cache to speed up builds. See also [Nx](../development/nx.md).

For commits on the `main` branch, it also deploys the application.

### `codeql.yml` (Required)

> [`codeql.yml`]({{ site.github.repository_url }}/tree/main/.github/workflows/codeql.yml)

This uses [GitHub's CodeQL](https://codeql.github.com/) to scan the source code for vulnerabilities.

### `commitlint.yml` (Required)

> [`commitlint.yml`]({{ site.github.repository_url }}/tree/main/.github/workflows/commitlint.yml)

Ensure's all commits to the branch match the [conventional commit format](../development/vcs.md).

### `renovate.yml` (Required)

> [`renovate.yml`]({{ site.github.repository_url }}/tree/main/.github/workflows/renovate.yml)

Lint's the project's renovate config. See also [Dependencies](../dependencies.md).

### `terraform.yml` (Required)

> [`terraform.yml`]({{ site.github.repository_url }}/tree/main/.github/workflows/terraform.yml)

Lints the terraform configuration and ensures the [terraform README]({{ site.github.repository_url }}/tree/main/terraform/README.md) is up to date.

## Continuos Delivery (CD)

> Following the automation of builds and unit and integration testing in CI, continuous delivery automates the release of that validated code to a repository. - [Red Hat](https://www.redhat.com/en/topics/devops/what-is-ci-cd#continuous-delivery)

For all code on `main`, the CI pipelines are re-run. Additionally the project's infrastructure is rolled out by [terraform](iac.md) and the built application is deployed by [`ci.yml`](#ciyml-required).

The latest version of this documentation is also deployed to [GitHub Pages](https://pages.github.com/).
