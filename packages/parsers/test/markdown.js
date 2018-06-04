import test from 'ava'
import { render, renderText } from '../src/markdown'

const input = `
# h1
paragraph
<pre><span>span</span></pre>
## h2
### h3
- 1
- 2
  - 2.1
`

test('render', t => {
  return render(input)
    .then(value => {
      t.is(value,
        `h1
<p>paragraph</p>
<pre>span</pre>
h2
<h3>h3</h3>
<ul>
<li>1</li>
<li>2
<ul>
<li>2.1</li>
</ul>
</li>
</ul>
`)
    })
})

test('renderText', t => {
  return renderText(input)
    .then(value => {
      t.is(value,
        `h1
paragraph
span
h2
h3

1
2

2.1`)
    })
})
