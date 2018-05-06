# @vinicius73/steem-js-api

```js
import fetch from 'node-fetch'
import { HttpAdapter, ApiClient } from '@vinicius73/steem-js-api'

const adapter = new HttpAdapter({ fetch })
const api = new ApiClient({ adapter })

return client.tags.getTrendingTags({ limit: 2 })
  .then(data => {

  })
```
