# Cypress framework

e2e tests for app
## Prerequisites
git, yarn, [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/)

## Test running in docker
*no need to run app"s docker or build e2e docker
```bash
cd e2e
docker-compose up --exit-code-from cypress
```

## Installation

 - clone repo from github

 - [link](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements) to check requirements and install documentation.

```bash
yarn add cypress --dev
```

## Test running locally

change cypress.json file
```bash
{
  "baseUrl": "http://localhost:3000/"
}
```

```bash
yarn run cypress open --project e2e
```
*start app project firstly
```bash
yarn install
yarn start
```

for CI setting read [docker with CI](https://docs.cypress.io/examples/examples/docker.html#Images) and [CI](https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI)
