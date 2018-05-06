const apis = require('./api-files')
const { writeReadmeFile } = require('./builder')

writeReadmeFile(apis)
  .then(() => {
    console.log('README.md generated')
  })
  .catch(err => {
    console.error(err)
  })
