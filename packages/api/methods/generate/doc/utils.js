const normaliseApiName = name => name.replace('_api', '').replace('.json', '')

module.exports = { normaliseApiName }
