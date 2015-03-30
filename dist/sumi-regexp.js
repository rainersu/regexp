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
    var slice = Array.prototype.slice;
    function am(v) {
        return toStr.call(v).split(/\W+/)[2].toLowerCase();
    }
    function cp(d, o) {
        for (var m in o) if (hasOP.call(o, m)) d[m] = o[m];
    }
    var noop = Function();
    var expressions = {};
    function compile(p, y, g) {
        y = y | 0;
        g = g ? "g" : "";
        if (p.ignoreCase) g += "i";
        p = p.source;
        p = y > 1 ? "^(?:" + p + ")$" : y > 0 ? "(?:^|\\b)(?:" + p + ")(?:$|\\b)" : p;
        y = "/" + p + "/" + g;
        return expressions[y] || (expressions[y] = new RegExp(p, g));
    }
    function Pattern(p, k, f, b) {
        if (!(this instanceof Pattern)) return new Pattern(p, k, f, b);
        var r = am(p) === "regexp";
        b = +b;
        cp(this, {
            ignoreCase: r && b !== b ? p.ignoreCase : !!b,
            source: r ? p.source : p,
            keys: am(k) === "string" ? k.split(/[\s,;|]+/) : k && slice.call(k),
            parser: f || noop
        });
    }
    cp(Pattern, {
        reg: function(n, o) {
            this[n] = new Match(i.pattern, i.keys, i.parser);
        }
    });
    cp(Pattern.prototype, {
        is: function(s) {
            return compile(this, 2).test(s);
        }
    });
    var undef = undefined + "";
    var shell = typeof window !== undef ? window : typeof global !== undef ? global : this || 1;
    shell.Pattern = shell.Pattern || Pattern;
    return Pattern;
});