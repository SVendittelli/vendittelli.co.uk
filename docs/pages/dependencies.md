---
layout: page
title: Dependencies
---

## Tooling

The following tools are outside of npm ecosystem and must be installed manually.

### Infrastructure

- [TFLint](https://github.com/terraform-linters/tflint)
- [terraform-docs](https://github.com/terraform-docs/terraform-docs)

## Tooling (Optional)

### Commitizen

I use [commitizen](https://github.com/commitizen/cz-cli) for an interactive commit writing experience that will comply with the linter.

### Deployment

If you need to deploy manually, use the [AWS CLI](https://aws.amazon.com/cli/)

### Documentation

For see the documentation site locally, you can use jekyll. See the [GitHub docs](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll).

### GitHub Actions

To run GitHub Actions locally, you can use [act](https://github.com/nektos/act).

### Node & Yarn

I use [Volta](https://volta.sh/) for automatically managing `node` and `yarn` versions.

## Renovate

[Renovate](https://github.com/renovatebot/renovate) is a tool that automatically checks for out of date dependencies and updates them to the latest version. It will create a pull request for each update, runs all the CI pipelines against it, and if they all pass, merge it. The configuration can be found in [`.github/renovate.json`]({{ site.github.repository_url }}/tree/main/.github/renovate.json).

All the update commits are from [renovate[bot]]({{ site.github.repository_url }}/commits?author=renovate%5Bbot%5D).
