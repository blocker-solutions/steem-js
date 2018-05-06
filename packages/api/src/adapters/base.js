const genareteId = () => Math.ceil(Math.random() * 99999)

class BaseAdapter {
  $makePayload (...args) {
    if (args.length === 1) {
      const payload = args[0]
      return payload.id ? payload : { ...payload, id: genareteId() }
    }

    const id = genareteId()

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
