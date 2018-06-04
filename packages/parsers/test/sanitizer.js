import test from 'ava'
import { extractText } from '../src/sanitizer'

test('extractText', t => {
  t.is(
    extractText('<p>This is a <span>paragraph</span>%20'),
    'This is a paragraph%20'
  )

  t.is(
    extractText('<p>This is a paragraph. </p> <a href="https://blog.codecasts.com.br">This is a link</a> <button>Click me</button>  '),
    'This is a paragraph.  This is a link Click me'
  )

  t.is(
    extractText('<p>This is a paragraph. <img src="blocker-solutions.jpg" alt="blocker-solutions" width="104" height="142"> </p>  '),
    'This is a paragraph.'
  )

  t.is(
    extractText(`<h1>This is heading 1</h1>
    <h2>This is heading 2</h2>
    <h3>This is heading 3</h3>`),
    `This is heading 1
    This is heading 2
    This is heading 3`
  )
})
