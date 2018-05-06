const { loadSignatures } = require('./methods')

const groupMethods = list => {
  return list.reduce((acc, raw) => {
    let [ group, name ] = raw.split('.')

    if (!acc[group]) {
      acc[group] = []
    }

    acc[group].push({
      name
    })

    return acc
  }, {})
}

const loadInfo = async groups => {
  const keys = Object.keys(groups)
  const result = {}

  for (const key of keys) {
    result[key] = await loadSignatures(key, groups[key])
  }

  return result
}

module.exports = { groupMethods, loadInfo }
