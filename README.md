# Personal Website

[![CI Workflow](https://github.com/SVendittelli/vendittelli.co.uk/actions/workflows/ci.yml/badge.svg)](https://github.com/SVendittelli/vendittelli.co.uk/actions/workflows/ci.yml)
[![MIT Licence](https://img.shields.io/github/license/SVendittelli/vendittelli.co.uk)](https://github.com/SVendittelli/vendittelli.co.uk/blob/main/LICENSE)
[![Deployment](https://img.shields.io/github/deployments/SVendittelli/vendittelli.co.uk/production?label=deploy)](https://github.com/SVendittelli/vendittelli.co.uk/deployments/activity_log?environment=production)
[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fvendittelli.co.uk)](https://vendittelli.co.uk/)
[![UptimeRobot](https://img.shields.io/uptimerobot/ratio/m793028518-cb286cb8b65c7c745debebe1)](https://stats.uptimerobot.com/80zk0uXpKG)

> See the live site at [vendittelli.co.uk](https://vendittelli.co.uk/)

My personal website. An [MIT](https://github.com/SVendittelli/vendittelli.co.uk/blob/main/LICENSE) licensed, [React](https://reactjs.org/) application that deploys automatically using [Terraform](https://www.terraform.io/). Built using [TypeScript](https://www.typescriptlang.org/), based on the [Nx](https://nx.dev/) build system with SCSS, [GitHub actions](https://github.com/features/actions), and many other useful technologies.

## Dependencies

Tested with [node](https://nodejs.org/) >= v18 and [Yarn 1](https://classic.yarnpkg.com/).

Optionally, using [Volta](https://volta.sh/) for managing node and yarn versions.

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

## Deploying

Any commits to the `main` branch are built and deployed automatically.

The infrastructure is provisioned on [AWS S3](https://aws.amazon.com/s3/) and [Cloudflare](https://www.cloudflare.com/) automatically using [Terraform Cloud](https://app.terraform.io/). See the [`terraform`](./terraform/) folder for more details.

The code itself is built and deployed using the [CI workflow](./.github/workflows/ci.yml). This utilises [Nx Cloud](https://cloud.nx.app/) with Distributed Task Execution & Distributed Cache to speed up builds.

Only modified apps will be rebuilt and deployed.
