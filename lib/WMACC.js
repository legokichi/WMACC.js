(function(global) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;

// --- class / interfaces ----------------------------------
function WMACC(value) { // @arg Number|Integer = 0 comment
//{@dev
  //$args(WMACC, arguments);
  //$valid($type(value, "Number|Integer|omit"), WMACC, "value");
//}@dev

    this._value = value || 0;
}

//{@dev
WMACC["repository"] = "https://github.com/legokichi/WMACC.js"; // GitHub repository URL. http://git.io/Help
//}@dev

WMACC["prototype"]["value"]     = WMACC_value;     // WMACC#value():Number|Integer = 0
WMACC["prototype"]["isNumber"]  = WMACC_isNumber;  // WMACC#isNumber():Boolean
WMACC["prototype"]["isInteger"] = WMACC_isInteger; // WMACC#isInteger():Boolean
/* or
WMACC["prototype"] = {
    "constructor":  WMACC,           // new WMACC(value:Number|Integer):WMACC
    "value":        WMACC_value,     // WMACC#value():Number/Integer
    "isNumber":     WMACC_isNumber,  // WMACC#isNumber():Boolean
    "isInteger":    WMACC_isInteger  // WMACC#isInteger():Boolean
};
 */

// --- implements ------------------------------------------
function WMACC_value() { // @ret Number|Integer comment
    return this._value;
}

function WMACC_isNumber() { // @ret Boolean comment
    return typeof this._value === "number";
}

function WMACC_isInteger() { // @ret Boolean comment
    return typeof this._value === "number" &&
           Math.ceil(this._value) === this._value;
}

// --- validate / assertions -------------------------------
//{@dev
function $valid(val, fn, hint) { if (global["Valid"]) { global["Valid"](val, fn, hint); } }
function $type(obj, type) { return global["Valid"] ? global["Valid"].type(obj, type) : true; }
//function $keys(obj, str) { return global["Valid"] ? global["Valid"].keys(obj, str) : true; }
//function $some(val, str, ignore) { return global["Valid"] ? global["Valid"].some(val, str, ignore) : true; }
//function $args(fn, args) { if (global["Valid"]) { global["Valid"].args(fn, args); } }
//}@dev

// --- exports ---------------------------------------------
if ("process" in global) {
    module["exports"] = WMACC;
}
global["WMACC" in global ? "WMACC_" : "WMACC"] = WMACC; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule

