class BaseAdapter {
  $makePayload (...args) {
    if (args.length === 1) {
      const payload = args[0]
      return payload.id ? payload : { ...payload, id: Math.random() }
    }

    const id = Math.random()

    if (args.length === 2) {
      const [ method, params ] = args
      return { method, params, id }
    }

    const [ api, method, params ] = args

    return {
      id,
      params,
      method: `${api}.${method}`
    }
  }
}

export default BaseAdapter
