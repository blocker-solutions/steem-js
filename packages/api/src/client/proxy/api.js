import { snakeCase } from 'lodash-es'

const apiHandler = {
  get: (target, prop, receiver) => {
    if (prop in target) {
      return target[prop]
    }

    const { client, api } = target
    return params => client.send(api, snakeCase(prop), params)
  },
  ownKeys: target => {
    return Reflect.ownKeys(target)
  }
}

const factoryApiMethods = (client, api) => {
  return new Proxy({ client, api }, apiHandler)
}

export { factoryApiMethods }
