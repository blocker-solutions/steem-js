// ensure string.
import { toString } from 'lodash'
// import html sanitizer configuration.
import sanitizeConfig from './sanitize-html-config'

// import html sanitizer.
const sanitizeHTML = require('sanitize-html')

// html sanitize.
const sanitize = (dirtyHTML = '') => sanitizeHTML(dirtyHTML, sanitizeConfig)
// plain text extractor.
const extractText = (dirtyHTML) => toString(dirtyHTML).replace(/(<([^>]+)>)/ig, '').trim()

export { extractText, sanitize }
