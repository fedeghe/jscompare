(function(fn) {
            var root
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = fn();
	} else if (typeof define === "function" && define.amd) {
		define([], fn);
	} else {
		if (typeof window !== "undefined") {
			root = window;
		} else if (typeof global !== "undefined") {
			root = global;
		} else if (typeof self !== "undefined") {
			root = self;
		} else {
			root = this;
		}
		root.jscompare = fn.call(root);
	}
})(function _(){
    return function jscompare(a, b){
        return JSON.stringify(a) === JSON.stringify(b);
    };
});