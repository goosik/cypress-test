# Cypress framework

e2e tests for app

## Installation

 [link](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements) to check requirements and install documentation.

```bash
yarn add cypress --dev
```

## Test running

```bash
yarn run cypress open
```
*start app project firstly
```bash
yarn install
yarn start
```

## Test running in docker
*make sure [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) installed
```bash
cd e2e
docker-compose up --exit-code-from cypress
```

for CI setting read [docker with CI](https://docs.cypress.io/examples/examples/docker.html#Images) and [CI](https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI)
