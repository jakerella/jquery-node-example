
const JSDOM = require('jsdom').JSDOM

console.log('Creating DOM...')
const window = (new JSDOM('<html></html>')).window
console.log('  typeof window.document:', typeof(window.document))

try {
    console.log('Requiring jquery v3...')
    const jQuery3 = require('jquery3')(window)
    console.log('  typeof jQuery3:', typeof(jQuery3))
} catch(err) {
    console.error('\x1b[31m', err.stack.split('\n').slice(0, 4).join('\n'), '\n    ...')
}

try {
    console.log('Requiring jquery v4...')
    const { jQueryFactory } = require('jquery4/factory')
    const jQuery4 = jQueryFactory(window)
    console.log('  typeof jQuery4:', typeof(jQuery4))
} catch(err) {
    console.error('\x1b[31m', err.stack.split('\n').slice(0, 4).join('\n'), '\n    ...')
}
