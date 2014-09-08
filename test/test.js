var ModuleTestWMACC = (function(global) {

var _runOnNode = "process" in global;
var _runOnWorker = "WorkerLocation" in global;
var _runOnBrowser = "document" in global;

return new Test("WMACC", {
        disable:    false,
        browser:    true,
        worker:     true,
        node:       true,
        button:     true,
        both:       true, // test the primary module and secondary module
    }).add([
        testWMACC_value,
        testWMACC_isNumber,
        testWMACC_isInteger,
    ]).run().clone();

function testWMACC_value(test, pass, miss) {

    var result = new WMACC(123.4).value();

    if (result === 123.4) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testWMACC_isNumber(test, pass, miss) {

    var result = [
            new WMACC(123.4).isNumber(),  // true
            new WMACC(123.0).isNumber()   // true
        ];

    if (!/false/.test(result.join())) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testWMACC_isInteger(test, pass, miss) {

    var result = [
           !new WMACC(123.4).isInteger(), // !false -> true
            new WMACC(123.0).isInteger()  // true
        ];

    if (!/false/.test(result.join())) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

})((this || 0).self || global);

