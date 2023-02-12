var assert = require('assert'),
    testone = require('@fedeghe/testone'),
    jscompare = require('../../dist/index.js');

var r = testone(
    [{
        in: ['a', 'a'],
        out: true
    }],
    [jscompare]
)
// console.log(r)
assert(r.passing.jscompare)

