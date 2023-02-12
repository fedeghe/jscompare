var assert = require('assert')
var jscompare = require('../dist/index.js')

describe('hello', () => {
    it('do the job', () => {
        assert(jscompare('a', 'a'))
    })
})