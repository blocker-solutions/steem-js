const { groupMethods, loadInfo } = require('./process')
const { loadMethods } = require('./methods')
const { storeMethods } = require('./store')

loadMethods()
  .then(groupMethods)
  .then(loadInfo)
  .then(storeMethods)
  .then(() => {
    console.log('API methods were loaded and stored.')
  })
  .catch(err => {
    console.error(err)
  })
