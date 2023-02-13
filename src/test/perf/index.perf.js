var assert = require('assert'),
    testone = require('@fedeghe/testone'),
    jscompare = require('../../dist/index.js'),
    strat = require('./strat');
var o = [
    {
        a:'s',
        b: o
    },
    {r:1},
    [1,2,3],
    1,
    '2',
    true,
    false,
]
var r = testone(
    [{
        in: ['a', 'a'],
        out: true
    },
    {
        in: [o, o],
        out: true
    }],
    [jscompare, ...strat],
    {
        iterations: 1E6,
        metrics: {fx:({mem, time}) => time*mem}
    }
)
// console.log(JSON.stringify(r, null, 2))
console.log(r)
assert(r.passing.jscompare)
assert(r.passing.object_equals)
assert(r.passing.areEquivalent)

