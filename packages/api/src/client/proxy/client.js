import { snakeCase, endsWith } from 'lodash'
import { factoryApiMethods } from './api'

const nornalizeApiName = value => {
  const api = snakeCase(value)
  return endsWith(api, '_api') ? api : `${api}_api`
}

const clientHandler = {
  get: (instance, prop, receiver) => {
    if (prop in instance) {
      return instance[prop]
    }

    return factoryApiMethods(instance, nornalizeApiName(prop))
  }
}

export { clientHandler }
