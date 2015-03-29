/*!
sumi-regexp v1.0.0
http://rainersu.github.io/regexp
A wrapper for the JavaScript RegExp object to make regular expressions simple and smart.
(c) 2015 Rainer Su( rainersu@foxmail.com | http://cn.linkedin.com/in/rainersu | QQ: 2627001536 )
*/
(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root["sumiRegExp"] = factory();
    }
})(this, function() {
    var undefined = void 0;
    var object = Object;
    var hasOP = object.prototype.hasOwnProperty;
    var toStr = object.prototype.toString;
    var mod = {};
    var udf = "" + undefined, win = typeof window !== udf ? window : typeof global !== udf ? global : this;
    function reg(m, n) {
        if (win) {
            win[n] = win[n] || m;
        }
        return mod[n] = m;
    }
    function am(v) {
        return toStr.call(v).split(/\W+/)[2].toLowerCase();
    }
    function cp(d, o) {
        for (var m in o) if (hasOP.call(o, m)) d[m] = o[m];
    }
    function Pattern() {}
    reg(Pattern, "Pattern");
    return mod;
});