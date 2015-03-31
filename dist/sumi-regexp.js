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
        return d;
    }
    var noop = Function();
    function Pattern(p, k, f, b) {
        var n;
        if (!(this instanceof Pattern)) return new Pattern(p, k, f, b);
        if (p && hasOP.call(patterns, n = p.toLowerCase())) return patterns[n];
        if (am(p) === "regexp") {
            if (isNaN(b)) b = p.ignoreCase;
            p = p.source;
        }
        cp(this, {
            ignoreCase: b,
            source: p,
            keys: am(k) === "string" ? k.split(/[\s,;|]+/) : k && slice.call(k),
            parser: f || noop
        });
    }
    var patterns = {};
    var expressions = {};
    function compile(p, y, g) {
        y = y | 0;
        g = g ? "g" : "";
        if (p.ignoreCase && !/i/i.test(g)) g += "i";
        p = p.source;
        p = y > 1 ? "^(?:" + p + ")$" : y > 0 ? "(?:^|\\b)(?:" + p + ")(?:$|\\b)" : p;
        y = "/" + p + "/" + g;
        return expressions[y] || (expressions[y] = new RegExp(p, g));
    }
    function reg(o) {
        if (am(o) !== "array") o = [ o ];
        var l = o.length, i;
        while (l--) {
            i = o[l];
            patterns[i.name.toLowerCase()] = new Pattern(i.source, i.keys, i.parser, i.ignoreCase);
        }
    }
    reg({
        name: "color",
        source: "#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])(?:([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9]))?" + "|hsla?\\(\\s*(\\d+(?:\\.\\d+)?)\\s*,\\s*(\\d+(?:\\.\\d+)?)\\%\\s*,\\s*(\\d+(?:\\.\\d+)?)\\%\\s*(?:,\\s*(\\d+(?:\\.\\d+)?)\\s*)?\\)" + "|rgba?\\(\\s*(\\d+(?:\\.\\d+)?)(\\%?)\\s*,\\s*(\\d+(?:\\.\\d+)?)(\\%?)\\s*,\\s*(\\d+(?:\\.\\d+)?)(\\%?)\\s*(?:,\\s*(\\d+(?:\\.\\d+)?)\\s*)?\\)",
        keys: "x1,x2,x3,x4,x5,x6,h,s,l,a,r,p,g,p,b,p,a",
        parser: function(o) {
            var c = new String(o), p = parseInt, h = Math.round;
            if (o.h) {
                c.h = +o.h;
                c.s = +o.s;
                c.l = +o.l;
            } else if (o.r) {
                c.r = o.p ? Math.round(o.r * 2.55) : +o.r;
                c.g = o.p ? Math.round(o.g * 2.55) : +o.g;
                c.b = o.p ? Math.round(o.b * 2.55) : +o.b;
            } else if (o.x1) {
                c.r = p(o.x6 ? o.x1 + o.x2 : o.x1 + o.x1, 16);
                c.g = p(o.x6 ? o.x3 + o.x4 : o.x2 + o.x2, 16);
                c.b = p(o.x6 ? o.x5 + o.x6 : o.x3 + o.x3, 16);
            }
            c.a = o.a === undefined ? 1 : +o.a;
            return c;
        }
    });
    reg({
        name: "url",
        source: "(?:([A-Za-z]+):)?(\\/{0,3})([0-9.\\-A-Za-z]+)(?::(\\d+))?(?:\\/([^?#]*))?(?:\\?([^#]*))?(?:#(.*))?",
        keys: "scheme,slash,host,port,path,query,hash"
    });
    reg({
        name: "email",
        source: "([-0-9a-zA-Z.+_]+)@([-0-9a-zA-Z.+_]+\\.[a-zA-Z]{2,4})",
        keys: "user,domain"
    });
    reg({
        name: "time",
        source: "(\\d{1,2})(\\s*[apAP]\\.?[mM]\\.?)|(\\d{1,2}(?::\\d{1,2}){1,2})(\\s*[apAP]\\.?[mM]\\.?)?",
        keys: "time,frame,time,frame",
        parser: function(o) {
            var x = o.frame, z = x && /P/i.test(x) ? 12 : 0, a = o.time.split(/\W+/);
            return cp(new String(o), {
                minute: +a[1] || 0,
                second: +a[2] || 0,
                hour: z + +a[0]
            });
        }
    });
    reg({
        name: "id-cn",
        source: "(\\d{2})(\\d{2})(\\d{2})(\\d{4})(\\d{2})(\\d{2})(\\d{2}(\\d{1}))([\\dX]{1})",
        keys: "province,city,district,year,month,day,serial,sex,code"
    });
    reg({
        name: "tel-cn",
        source: "(?:\\+86[- ](\\d{2,3})|\\(\\+?86\\)[- ]?(\\d{2,3})|\\(\\+?86[- ](\\d{2,3})\\)|\\(0(\\d{2,3})\\)|0(\\d{2,3}))[- ]?(\\d{3,4}[- ]?\\d{4})",
        keys: "zone,zone,zone,zone,zone,number",
        parser: function(o) {
            "use strict";
            o.number = o.number.replace(/[-\s]+/g, "");
            o.zone = +o.zone;
            return o;
        }
    });
    reg({
        name: "mobile-cn",
        source: "(?:\\+86[- ]|\\(\\+?86\\)[- ]?)?(1\\d{2})[- ]?(\\d{4})[- ]?(\\d{4})",
        keys: "carrier,zone,serial"
    });
    cp(Pattern, {
        patterns: patterns,
        reg: reg,
        cache: true,
        clear: function() {
            for (var n in expressions) if (hasOP.call(expressions, n)) delete expressions[n];
        }
    });
    function tj() {
        return "" + compile(this);
    }
    cp(Pattern.prototype, {
        toJSON: tj,
        toString: tj,
        toRegExp: function(y, g) {
            return compile(this, y, g);
        },
        is: function(s) {
            return compile(this, 2).test(s);
        },
        "in": function(s, b) {
            return compile(this, b).test(s);
        },
        index: function(s, b) {
            return s.search(compile(this, b));
        },
        match: function(s, b) {
            b = +b;
            return s.match(compile(this, b === b ? b : 1, "g")) || [];
        },
        parse: function(s, b) {
            b = +b;
            var r = [], k = this.keys, e = compile(this, b === b ? b : 1, "g"), l, a, o, v, j;
            while ((a = e.exec(s)) !== null) {
                o = object(a.shift());
                for (l = k.length; l--; ) {
                    j = k[l];
                    v = a[l];
                    if (o[j] === undefined && v !== undefined) o[j] = v;
                }
                v = this.parser(o);
                r.push(v !== undefined ? v : o);
            }
            return r;
        },
        replace: function(s, f, b, g) {
            b = +b;
            return s.replace(compile(this, b === b ? b : 1, g || "g"), f);
        }
    });
    var undef = undefined + "";
    var shell = typeof window !== undef ? window : typeof global !== undef ? global : this || 1;
    shell.Pattern = shell.Pattern || Pattern;
    return Pattern;
});