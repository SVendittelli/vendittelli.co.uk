# Personal Website

[![CI workflow](https://github.com/SVendittelli/vendittelli.co.uk/actions/workflows/ci.yml/badge.svg)](https://github.com/SVendittelli/vendittelli.co.uk/actions/workflows/ci.yml)
[![MIT licence](https://img.shields.io/github/license/SVendittelli/vendittelli.co.uk)](https://github.com/SVendittelli/vendittelli.co.uk/blob/main/LICENSE)
[![Production deployment](https://img.shields.io/github/deployments/SVendittelli/vendittelli.co.uk/production?label=deploy)](https://github.com/SVendittelli/vendittelli.co.uk/deployments/activity_log?environment=production)
[![Documentation deployment](https://img.shields.io/github/deployments/SVendittelli/vendittelli.co.uk/github-pages?label=docs-deploy)](https://github.com/SVendittelli/vendittelli.co.uk/deployments/activity_log?environment=github-pages)
[![Website status](https://img.shields.io/website?url=https%3A%2F%2Fvendittelli.co.uk)](https://vendittelli.co.uk/)
[![UptimeRobot](https://img.shields.io/uptimerobot/ratio/m793028518-cb286cb8b65c7c745debebe1)](https://stats.uptimerobot.com/80zk0uXpKG)
[![Mozilla HTTP Observatory](https://img.shields.io/mozilla-observatory/grade/vendittelli.co.uk?publish)](https://observatory.mozilla.org/analyze/vendittelli.co.uk)
![Snyk vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/SVendittelli/vendittelli.co.uk)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> See the live site at [vendittelli.co.uk](https://vendittelli.co.uk/)

My personal website. An [MIT](https://github.com/SVendittelli/vendittelli.co.uk/blob/main/LICENSE) licensed, [React](https://reactjs.org/) application that deploys automatically using [Terraform](https://www.terraform.io/). Built using [TypeScript](https://www.typescriptlang.org/), based on the [Nx](https://nx.dev/) build system with SCSS, [GitHub actions](https://github.com/features/actions), and many other useful technologies.

## Dependencies

The project is rested with [node](https://nodejs.org/) >= v18 and [Yarn 1](https://classic.yarnpkg.com/).

See [`dependencies.md`](docs/pages/dependencies.md) for more information.

## Set up

To download the repository and install dependencies, run the following commands:

```bash
git clone https://github.com/SVendittelli/vendittelli.co.uk.git
cd vendittelli.co.uk
yarn install
```

or, if you have the [GitHub CLI](https://cli.github.com/), run:

```bash
gh repo clone SVendittelli/vendittelli.co.uk
cd vendittelli.co.uk
yarn install
```

## Running locally

Run the following command to build the home application and serve it with fast refresh:

```bash
yarn start
```

## Documentation

> See the live docs at [docs.vendittelli.co.uk](https://docs.vendittelli.co.uk/)

The project's documentation is deployed using GitHub pages from the [`docs`](docs/index.md) folder.
