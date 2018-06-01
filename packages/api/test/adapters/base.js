import test from 'ava'
import BaseAdapter from '../../src/adapters/base'
import { omit } from 'lodash'

test('$makePayload two argument', t => {
  const instance = new BaseAdapter()

  let payload, data

  // single
  data = { params: {}, id: 99 }
  payload = instance.$makePayload(data)
  t.is(payload, data)

  // missing id
  data = { params: {} }
  payload = instance.$makePayload(data)

  t.deepEqual(data, omit(payload, ['id']))
  t.is(typeof payload.id, 'number', 'Id generated not is valid')
})

test('$makePayload single argument', t => {
  const instance = new BaseAdapter()

  const payload = instance.$makePayload('x', { p: true })
  t.deepEqual({ method: 'x', params: { p: true } }, omit(payload, ['id']))
  t.is(typeof payload.id, 'number', 'Id generated not is valid')
})

test('$makePayload tree argument', t => {
  const instance = new BaseAdapter()

  const payload = instance.$makePayload('x', 'y', { p: true })
  t.deepEqual({ method: 'x.y', params: { p: true } }, omit(payload, ['id']))
  t.is(typeof payload.id, 'number', 'Id generated not is valid')
})
