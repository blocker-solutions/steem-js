// import html sanitizer.
const sanitizeHTML = require('sanitize-html')
// import stripTags.
const stripHTMLTags = require('striptags')
// import html sanitizer configuration.
import sanitizeConfig from './sanitize-html-config'

export const sanitize = (dirtyHTML = '') => sanitizeHTML(dirtyHTML, sanitizeConfig)
export const stripTags = (dirtyHTML = '') => stripHTMLTags(dirtyHTML)
