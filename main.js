
const assert = require('node:assert')
const JSDOM = require('jsdom').JSDOM

const window = (new JSDOM('<html></html>')).window
assert(typeof(window.document), 'object')
console.log('typeof window.document:', typeof(window.document))

try {
    const jQuery3 = require('jquery3')(window)
    assert(typeof(jQuery3), 'function')
    console.log('typeof jQuery3:', typeof(jQuery3))
} catch(err) {
    console.error('jQuery3 not initialized:', err.message)
}

try {
    const jQuery4 = require('jquery4')(window)
    assert(typeof(jQuery4), 'function')
    console.log('typeof jQuery4:', typeof(jQuery4))
} catch(err) {
    console.error('jQuery4 not initialized:', err.message)
}
