import test from 'ava'
import { HttpAdapter } from '../../src/adapters'

test('constructor options', t => {
  const uri = 'https://api.steemit.com'
  const fetch = () => {}

  let http
  http = new HttpAdapter({ fetch, uri })

  t.is(http.$fetch, fetch)
  t.is(http.$uri, uri)

  http = new HttpAdapter({ fetch })
  t.is(http.$uri, uri)
})
