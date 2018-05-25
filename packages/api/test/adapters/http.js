import test from 'ava'
import { omit } from 'lodash-es'
import { HttpAdapter } from '../../src/adapters'
import { RPCError } from '../../src/adapters/http'

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

test('send', t => {
  const fetch = (uri, payload) => {
    t.deepEqual(omit(JSON.parse(payload.body), ['id']), {
      jsonrpc: '2.0',
      method: 'a.b',
      params: {
        x: 99
      }
    })

    return Promise.resolve({
      ok: true,
      json () {
        return {
          id: 78,
          result: { k: 41 }
        }
      }
    })
  }

  const http = new HttpAdapter({ fetch })

  http.send({
    id: 78,
    method: 'a.b',
    params: { x: 99 }
  })
    .then(data => {
      t.deepEqual(data, { k: 41 })
    })
})

test('$parsePayloadToFetchOptions', t => {
  const http = new HttpAdapter()

  const payload = http.$parsePayloadToFetchOptions({ method: 'x' })

  t.deepEqual(payload, {
    body: '{"jsonrpc":"2.0","method":"x"}',
    method: 'post',
    mode: 'cors',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
})

test('$sendRequest', t => {
  const fetch = (uri, payload) => {
    t.is(payload.body, '{"jsonrpc":"2.0","id":55}')
    return Promise.resolve({
      ok: true,
      json () {
        return {
          id: 55,
          result: { k: 45 }
        }
      }
    })
  }

  const http = new HttpAdapter({ fetch })

  http.$sendRequest({ id: 55 })
    .then(data => {
      t.deepEqual(data, { k: 45 })
    })
})

test('$processFethResponse [success]', t => {
  const http = new HttpAdapter()
  const resMock = {
    ok: true,
    json () {
      return {
        id: 99,
        result: { h: true }
      }
    }
  }

  return http.$processFethResponse(99, resMock)
    .then(data => {
      t.deepEqual(data, { h: true })
    })
})

test('$processFethResponse [ok: false]', t => {
  const http = new HttpAdapter()
  const resMock = {
    ok: false,
    status: '999',
    statusText: 'Bad status'
  }

  return http.$processFethResponse(99, resMock)
    .then(() => {
      t.fail('not receive a rejection')
    })
    .catch(error => {
      t.true(error instanceof Error)
      t.is(error.message, 'HTTP 999: Bad status')
    })
})

test('$processFethResponse [invalid id]', t => {
  const http = new HttpAdapter()
  const resMock = {
    ok: true,
    json () {
      return {
        id: 33,
        result: { h: true }
      }
    }
  }

  return http.$processFethResponse(99, resMock)
    .then(() => {
      t.fail('not receive a rejection')
    })
    .catch(error => {
      t.true(error instanceof Error)
      t.true(error.message.indexOf('Invalid response id:') === 0)
    })
})

test('$processFethResponse [RPCError]', t => {
  const http = new HttpAdapter()
  const resMock = {
    ok: true,
    json () {
      return {
        id: 99,
        error: {
          message: 'bad thinks',
          code: 'xyz',
          data: { x: true }
        }
      }
    }
  }

  return http.$processFethResponse(99, resMock)
    .then(() => {
      t.fail('not receive a rejection')
    })
    .catch(error => {
      t.true(error instanceof RPCError)
      t.is(error.name, 'RPCError')
      t.is(error.message, 'bad thinks')
      t.is(error.code, 'xyz')
      t.deepEqual(error.data, { x: true })
    })
})
