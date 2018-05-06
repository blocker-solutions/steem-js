# @vinicius73/steem-js-api

Modern and lightweight JavaScript library to consume the Steem API.

## Get started

### Install

```shell
yarn add @vinicius73/steem-js-api node-fetch
# or
npm install @vinicius73/steem-js-api node-fetch
```

You can use any library that supports the [WHATWG fetch](https://fetch.spec.whatwg.org) specification.  

- [github/fetch](https://github.com/github/fetch)
- [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)
- [node-fetch](https://github.com/bitinn/node-fetch)

### Usage

```js
import fetch from 'node-fetch'
import { HttpAdapter, ApiClient } from '@vinicius73/steem-js-api'

const adapter = new HttpAdapter({ fetch })
const client = new ApiClient({ adapter })

client.tags.getTrendingTags({ limit: 2 })
  .then(data => {

  })
```

## Send requests

*@vinicius73/steem-js-api* uses [Proxy](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy) and [Reflect](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Reflect) to simplify its use.

### Send requests with Proxy feature

Syntax: `client[api_name][method_name](params)`

```js
client.database_api.list_savings_withdrawals({ start: 10, limit: 55 })
  .then(result => {  })
```
You can omit the `_api` suffix in `api_name` and use [camelCase](https://en.wikipedia.org/wiki/Camel_case) in `api_name` and `method_name`.

```js
client.database.listOwnerHistories({ start: 10, limit: 55 })
  .then(result => {  })
```

### Send requests without Proxy feature

However it is possible to send requests without using this feature.

There are 3 ways to use the send method.
```js
client.send(api_name, method_name, params)
client.send(full_method_name, params)
client.send(full_payload)
```

Exemples

```js
client.send('database_api', 'list_savings_withdrawals', { start: 10, limit: 55 })
```
```js
client.send('database_api.list_savings_withdrawals', { start: 10, limit: 55 })
```
```js
client.send({
  method: 'database_api.list_savings_withdrawals',
  params: { start: 10, limit: 55 }
})
```
