// imports.
const MarkdownIt = require('markdown-it')
// markdown plugins.
import plugins from './plugins'
import * as sanitizer from './../sanitizer'

/** @type {MarkdownIt} */
const parser = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: false,
  maxNesting: 100
})

parser.use(plugins.tasksList)
parser.use(plugins.highlight)

const dummy = (v) => (v)

const passThrough = (test = true, whenTrue) => (test === true ? whenTrue : dummy)

export const render = (markdown = '', sanitize = true) => {
  return Promise.resolve(parser.render(markdown))
    .then(passThrough(sanitize, sanitizer.sanitize))
}

export const renderText = (markdown = '') => {
  return Promise.resolve(parser.render(markdown))
    .then(sanitizer.sanitize)
    .then(sanitizer.extractText)
}
