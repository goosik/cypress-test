**Cypress framework** <br>
<h3>run cypress locally:
- installing - https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements<br>
`yarn add cypress --dev`
- run - `yarn run cypress open`<br>
*start app project firstly
`yarn install` `yarn start`
<h3>run on docker:</h3>
- requirements - installed docker and docker-compose<br>
`cd e2e`<br>
`docker-compose up --exit-code-from cypress`



for CI setting read https://docs.cypress.io/examples/examples/docker.html#Images and https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI
