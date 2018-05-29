// import html sanitizer.
import sanitizeHTML from 'sanitize-html'
// import stripTags.
import stripHTMLTags from 'striptags'
// import html sanitizer configuration.
import sanitizeConfig from './sanitize-html-config'

// // sanitize method.
// export const sanitizeHTML = (unsafeHTML) => sanitize(unsafeHTML, sanitizeConfig)
//
// // plain text maker.
// export const stripHTMLTags = (html) => stripTags(html)

/**
 * Sanitizer class.
 */
class Sanitizer {
  /**
   * Markdown parser constructor.
   *
   * @param dirtyHTML
   */
  constructor (dirtyHTML) {
    this.dirtyHTML = dirtyHTML
  }

  sanitize () {
    return sanitizeHTML(this.dirtyHTML, sanitizeConfig)
  }

  stripTags () {
    return this.sanitize(stripHTMLTags(this.dirtyHTML))
  }
}

export default Sanitizer
