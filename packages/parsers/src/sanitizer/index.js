// ensure string.
import { toString } from 'lodash'

// import html sanitizer.
const sanitizeHTML = require('sanitize-html')

// import html sanitizer configuration.
import sanitizeConfig from './sanitize-html-config'

// html sanitize.
export const sanitize = (dirtyHTML = '') => sanitizeHTML(dirtyHTML, sanitizeConfig)
// plain text extractor.
export const extractText = (dirtyHTML) => toString(dirtyHTML).replace(/(<([^>]+)>)/ig, '').trim()
