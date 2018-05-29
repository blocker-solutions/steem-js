# @blocker/steem-config

Steem-JS Configuration Layer.

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
