/**
 * Default content options for MarkdownIt.
 *
 * @type {{html: boolean, breaks: boolean, linkify: boolean, typographer: boolean, maxNesting: number}}
 */
export const defaultOptions = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: false,
  maxNesting: 100
  // quotes: '“”‘’',
}

/**
 * Default options for parsing plain-text, excepts, renders plain, node-less elements.
 *
 * @type {{html: boolean, breaks: boolean, linkify: boolean, typographer: boolean, maxNesting: number}}
 */
export const plainOptions = {
  html: false,
  breaks: false,
  linkify: false,
  typographer: false,
  maxNesting: 2
}
