// import html sanitizer.
import sanitizeHTML from 'sanitize-html'
// import stripTags.
import stripHTMLTags from 'striptags'
// import html sanitizer configuration.
import sanitizeConfig from './sanitize-html-config'

export const sanitize = (dirtyHTML = '') => sanitizeHTML(dirtyHTML, sanitizeConfig)
export const stripTags = (dirtyHTML = '') => stripHTMLTags(dirtyHTML)
