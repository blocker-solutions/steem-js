# @blocker/steem-config

[![npm version](https://badge.fury.io/js/%40blocker%2Fsteem-config.svg)](https://badge.fury.io/js/%40blocker%2Fsteem-config)
[![Known Vulnerabilities](https://snyk.io/test/github/blocker-solutions/steem-js/badge.svg?targetFile=packages%2Fconfig%2Fpackage.json)](https://snyk.io/test/github/vinicius73/steem-js?targetFile=packages%2Fconfig%2Fpackage.json)
<!--[![Maintainability](https://api.codeclimate.com/v1/badges/dd68234bd1cd08dfa170/maintainability)](https://codeclimate.com/github/%40blocker%2Fsteem-common/maintainability)-->

Steem-JS Configuration Helpers.

### Install

```bash
yarn add @blocker/steem-config
# or
npm install @blocker/steem-config
```

## Usage

```js
// import classes from the package.
const { Config, Application } = require('@blocker/steem-config')

// application information container.
const app = new Application({
  id: 'utopian',
  version: '2.0.0',
  label: 'Utopian',
  homepage: 'https://utopian.io'
})

// configuration instance.
const config = new Config({
  apiURL: 'https://api.steemit.com',
  cache: true,
  app: app
})
```
