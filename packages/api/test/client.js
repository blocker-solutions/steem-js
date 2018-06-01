import test from 'ava'
import ApiClient from '../src/client'
import { omit } from 'lodash'
import { HttpAdapter } from '../src/adapters'

test('proxy', t => {
  const client = new ApiClient({ adapter: 99 })

  t.is(typeof client.database.y, 'function')
  t.is(client.databaseApi.api, 'database_api')
  t.is(client.fallow_api.api, 'fallow_api')
  t.is(client['witness-api'].api, 'witness_api')
  t.is(client.tags.api, 'tags_api')
  t.true(client.$adapter === 99)
  t.deepEqual(Object.keys(client.database), ['client', 'api'])
})

test('proxy apis', t => {
  const fetch = (uri, payload) => {
    const body = JSON.parse(payload.body)

    t.deepEqual(omit(body, ['id']), {
      jsonrpc: '2.0',
      params: { limit: 2 },
      method: 'tags_api.get_trending_tags'
    })

    return Promise.resolve({
      ok: true,
      json: () => ({
        id: body.id,
        result: {
          ya: true
        }
      })
    })
  }

  const adapter = new HttpAdapter({ fetch })
  const client = new ApiClient({ adapter })

  return client.tags.getTrendingTags({ limit: 2 })
    .then(data => {
      t.deepEqual(data, { ya: true })
    })
})
