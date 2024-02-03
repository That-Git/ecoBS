function _toConsumableArray(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
    return n
  }
  return Array.from(e)
}! function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (e.document) return t(e);
    throw new Error("jQuery requires a window with a document")
  } : t(e)
}("undefined" != typeof window ? window : this, function(w, q) {
  function L(e, t) {
    return t.toUpperCase()
  }
  var d = [],
    p = w.document,
    c = d.slice,
    R = d.concat,
    M = d.push,
    I = d.indexOf,
    H = {},
    W = H.toString,
    m = H.hasOwnProperty,
    g = {},
    e = "1.12.4",
    C = function(e, t) {
      return new C.fn.init(e, t)
    },
    V = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    z = /^-ms-/,
    B = /-([\da-z])/gi;

  function U(e) {
    var t = !!e && "length" in e && e.length,
      n = C.type(e);
    return "function" !== n && !C.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }
  C.fn = C.prototype = {
    jquery: e,
    constructor: C,
    selector: "",
    length: 0,
    toArray: function() {
      return c.call(this)
    },
    get: function(e) {
      return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
    },
    pushStack: function(e) {
      e = C.merge(this.constructor(), e);
      return e.prevObject = this, e.context = this.context, e
    },
    each: function(e) {
      return C.each(this, e)
    },
    map: function(n) {
      return this.pushStack(C.map(this, function(e, t) {
        return n.call(e, t, e)
      }))
    },
    slice: function() {
      return this.pushStack(c.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var t = this.length,
        e = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= e && e < t ? [this[e]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor()
    },
    push: M,
    sort: d.sort,
    splice: d.splice
  }, C.extend = C.fn.extend = function() {
    var e, t, n, i, r, s = arguments[0] || {},
      o = 1,
      a = arguments.length,
      l = !1;
    for ("boolean" == typeof s && (l = s, s = arguments[o] || {}, o++), "object" == typeof s || C.isFunction(s) || (s = {}), o === a && (s = this, o--); o < a; o++)
      if (null != (i = arguments[o]))
        for (n in i) r = s[n], s !== (t = i[n]) && (l && t && (C.isPlainObject(t) || (e = C.isArray(t))) ? (r = e ? (e = !1, r && C.isArray(r) ? r : []) : r && C.isPlainObject(r) ? r : {}, s[n] = C.extend(l, r, t)) : void 0 !== t && (s[n] = t));
    return s
  }, C.extend({
    expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isFunction: function(e) {
      return "function" === C.type(e)
    },
    isArray: Array.isArray || function(e) {
      return "array" === C.type(e)
    },
    isWindow: function(e) {
      return null != e && e == e.window
    },
    isNumeric: function(e) {
      var t = e && e.toString();
      return !C.isArray(e) && 0 <= t - parseFloat(t) + 1
    },
    isEmptyObject: function(e) {
      for (var t in e) return !1;
      return !0
    },
    isPlainObject: function(e) {
      if (!e || "object" !== C.type(e) || e.nodeType || C.isWindow(e)) return !1;
      try {
        if (e.constructor && !m.call(e, "constructor") && !m.call(e.constructor.prototype, "isPrototypeOf")) return !1
      } catch (e) {
        return !1
      }
      if (!g.ownFirst)
        for (var t in e) return m.call(e, t);
      for (t in e);
      return void 0 === t || m.call(e, t)
    },
    type: function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? H[W.call(e)] || "object" : typeof e
    },
    globalEval: function(e) {
      e && C.trim(e) && (w.execScript || function(e) {
        w.eval.call(w, e)
      })(e)
    },
    camelCase: function(e) {
      return e.replace(z, "ms-").replace(B, L)
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, t) {
      var n, i = 0;
      if (U(e))
        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
      else
        for (i in e)
          if (!1 === t.call(e[i], i, e[i])) break;
      return e
    },
    trim: function(e) {
      return null == e ? "" : (e + "").replace(V, "")
    },
    makeArray: function(e, t) {
      t = t || [];
      return null != e && (U(Object(e)) ? C.merge(t, "string" == typeof e ? [e] : e) : M.call(t, e)), t
    },
    inArray: function(e, t, n) {
      var i;
      if (t) {
        if (I) return I.call(t, e, n);
        for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
          if (n in t && t[n] === e) return n
      }
      return -1
    },
    merge: function(e, t) {
      for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
      if (n != n)
        for (; void 0 !== t[i];) e[r++] = t[i++];
      return e.length = r, e
    },
    grep: function(e, t, n) {
      for (var i = [], r = 0, s = e.length, o = !n; r < s; r++) !t(e[r], r) != o && i.push(e[r]);
      return i
    },
    map: function(e, t, n) {
      var i, r, s = 0,
        o = [];
      if (U(e))
        for (i = e.length; s < i; s++) null != (r = t(e[s], s, n)) && o.push(r);
      else
        for (s in e) null != (r = t(e[s], s, n)) && o.push(r);
      return R.apply([], o)
    },
    guid: 1,
    proxy: function(e, t) {
      var n, i;
      if ("string" == typeof t && (i = e[t], t = e, e = i), C.isFunction(e)) return n = c.call(arguments, 2), (i = function() {
        return e.apply(t || this, n.concat(c.call(arguments)))
      }).guid = e.guid = e.guid || C.guid++, i
    },
    now: function() {
      return +new Date
    },
    support: g
  }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = d[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
    H["[object " + t + "]"] = t.toLowerCase()
  });

  function i(e, t, n) {
    for (var i = [], r = void 0 !== n;
      (e = e[t]) && 9 !== e.nodeType;)
      if (1 === e.nodeType) {
        if (r && C(e).is(n)) break;
        i.push(e)
      } return i
  }

  function X(e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
    return n
  }
  var e = function(q) {
      function d(e, t, n) {
        var i = "0x" + t - 65536;
        return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
      }

      function L() {
        C()
      }
      var e, p, x, s, R, m, M, I, w, l, u, C, _, t, T, g, i, r, v, E = "sizzle" + +new Date,
        y = q.document,
        k = 0,
        H = 0,
        W = ue(),
        V = ue(),
        b = ue(),
        z = function(e, t) {
          return e === t && (u = !0), 0
        },
        B = {}.hasOwnProperty,
        n = [],
        U = n.pop,
        X = n.push,
        $ = n.push,
        Q = n.slice,
        F = function(e, t) {
          for (var n = 0, i = e.length; n < i; n++)
            if (e[n] === t) return n;
          return -1
        },
        Y = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        o = "[\\x20\\t\\r\\n\\f]",
        a = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        G = "\\[" + o + "*(" + a + ")(?:" + o + "*([*^$|!~]?=)" + o + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + a + "))|)" + o + "*\\]",
        J = ":(" + a + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + G + ")*)|.*)\\)|)",
        K = new RegExp(o + "+", "g"),
        S = new RegExp("^" + o + "+|((?:^|[^\\\\])(?:\\\\.)*)" + o + "+$", "g"),
        Z = new RegExp("^" + o + "*," + o + "*"),
        ee = new RegExp("^" + o + "*([>+~]|" + o + ")" + o + "*"),
        te = new RegExp("=" + o + "*([^\\]'\"]*?)" + o + "*\\]", "g"),
        ne = new RegExp(J),
        ie = new RegExp("^" + a + "$"),
        h = {
          ID: new RegExp("^#(" + a + ")"),
          CLASS: new RegExp("^\\.(" + a + ")"),
          TAG: new RegExp("^(" + a + "|[*])"),
          ATTR: new RegExp("^" + G),
          PSEUDO: new RegExp("^" + J),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + o + "*(even|odd|(([+-]|)(\\d*)n|)" + o + "*(?:([+-]|)" + o + "*(\\d+)|))" + o + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + Y + ")$", "i"),
          needsContext: new RegExp("^" + o + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + o + "*((?:-\\d)?\\d*)" + o + "*\\)|)(?=[^-]|$)", "i")
        },
        re = /^(?:input|select|textarea|button)$/i,
        se = /^h\d$/i,
        c = /^[^{]+\{\s*\[native \w/,
        oe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ae = /[+~]/,
        le = /'|\\/g,
        f = new RegExp("\\\\([\\da-f]{1,6}" + o + "?|(" + o + ")|.)", "ig");
      try {
        $.apply(n = Q.call(y.childNodes), y.childNodes), n[y.childNodes.length].nodeType
      } catch (e) {
        $ = {
          apply: n.length ? function(e, t) {
            X.apply(e, Q.call(t))
          } : function(e, t) {
            for (var n = e.length, i = 0; e[n++] = t[i++];);
            e.length = n - 1
          }
        }
      }

      function N(e, t, n, i) {
        var r, s, o, a, l, u, c, d, h = t && t.ownerDocument,
          f = t ? t.nodeType : 9;
        if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
        if (!i && ((t ? t.ownerDocument || t : y) !== _ && C(t), t = t || _, T)) {
          if (11 !== f && (u = oe.exec(e)))
            if (r = u[1]) {
              if (9 === f) {
                if (!(o = t.getElementById(r))) return n;
                if (o.id === r) return n.push(o), n
              } else if (h && (o = h.getElementById(r)) && v(t, o) && o.id === r) return n.push(o), n
            } else {
              if (u[2]) return $.apply(n, t.getElementsByTagName(e)), n;
              if ((r = u[3]) && p.getElementsByClassName && t.getElementsByClassName) return $.apply(n, t.getElementsByClassName(r)), n
            } if (p.qsa && !b[e + " "] && (!g || !g.test(e))) {
            if (1 !== f) h = t, d = e;
            else if ("object" !== t.nodeName.toLowerCase()) {
              for ((a = t.getAttribute("id")) ? a = a.replace(le, "\\$&") : t.setAttribute("id", a = E), s = (c = m(e)).length, l = ie.test(a) ? "#" + a : "[id='" + a + "']"; s--;) c[s] = l + " " + P(c[s]);
              d = c.join(","), h = ae.test(e) && he(t.parentNode) || t
            }
            if (d) try {
              return $.apply(n, h.querySelectorAll(d)), n
            } catch (e) {} finally {
              a === E && t.removeAttribute("id")
            }
          }
        }
        return I(e.replace(S, "$1"), t, n, i)
      }

      function ue() {
        var n = [];

        function i(e, t) {
          return n.push(e + " ") > x.cacheLength && delete i[n.shift()], i[e + " "] = t
        }
        return i
      }

      function A(e) {
        return e[E] = !0, e
      }

      function D(e) {
        var t = _.createElement("div");
        try {
          return !!e(t)
        } catch (e) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t)
        }
      }

      function ce(e, t) {
        for (var n = e.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = t
      }

      function de(e, t) {
        var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
        if (i) return i;
        if (n)
          for (; n = n.nextSibling;)
            if (n === t) return -1;
        return e ? 1 : -1
      }

      function j(o) {
        return A(function(s) {
          return s = +s, A(function(e, t) {
            for (var n, i = o([], e.length, s), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
          })
        })
      }

      function he(e) {
        return e && void 0 !== e.getElementsByTagName && e
      }
      for (e in p = N.support = {}, R = N.isXML = function(e) {
          e = e && (e.ownerDocument || e).documentElement;
          return !!e && "HTML" !== e.nodeName
        }, C = N.setDocument = function(e) {
          var e = e ? e.ownerDocument || e : y;
          return e !== _ && 9 === e.nodeType && e.documentElement && (t = (_ = e).documentElement, T = !R(_), (e = _.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", L, !1) : e.attachEvent && e.attachEvent("onunload", L)), p.attributes = D(function(e) {
            return e.className = "i", !e.getAttribute("className")
          }), p.getElementsByTagName = D(function(e) {
            return e.appendChild(_.createComment("")), !e.getElementsByTagName("*").length
          }), p.getElementsByClassName = c.test(_.getElementsByClassName), p.getById = D(function(e) {
            return t.appendChild(e).id = E, !_.getElementsByName || !_.getElementsByName(E).length
          }), p.getById ? (x.find.ID = function(e, t) {
            if (void 0 !== t.getElementById && T) return (t = t.getElementById(e)) ? [t] : []
          }, x.filter.ID = function(e) {
            var t = e.replace(f, d);
            return function(e) {
              return e.getAttribute("id") === t
            }
          }) : (delete x.find.ID, x.filter.ID = function(e) {
            var t = e.replace(f, d);
            return function(e) {
              e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return e && e.value === t
            }
          }), x.find.TAG = p.getElementsByTagName ? function(e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
          } : function(e, t) {
            var n, i = [],
              r = 0,
              s = t.getElementsByTagName(e);
            if ("*" !== e) return s;
            for (; n = s[r++];) 1 === n.nodeType && i.push(n);
            return i
          }, x.find.CLASS = p.getElementsByClassName && function(e, t) {
            if (void 0 !== t.getElementsByClassName && T) return t.getElementsByClassName(e)
          }, i = [], g = [], (p.qsa = c.test(_.querySelectorAll)) && (D(function(e) {
            t.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + o + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + o + "*(?:value|" + Y + ")"), e.querySelectorAll("[id~=" + E + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || g.push(".#.+[+~]")
          }), D(function(e) {
            var t = _.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + o + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
          })), (p.matchesSelector = c.test(r = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.msMatchesSelector)) && D(function(e) {
            p.disconnectedMatch = r.call(e, "div"), r.call(e, "[s!='']:x"), i.push("!=", J)
          }), g = g.length && new RegExp(g.join("|")), i = i.length && new RegExp(i.join("|")), e = c.test(t.compareDocumentPosition), v = e || c.test(t.contains) ? function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
              t = t && t.parentNode;
            return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
          } : function(e, t) {
            if (t)
              for (; t = t.parentNode;)
                if (t === e) return !0;
            return !1
          }, z = e ? function(e, t) {
            var n;
            return e === t ? (u = !0, 0) : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === _ || e.ownerDocument === y && v(y, e) ? -1 : t === _ || t.ownerDocument === y && v(y, t) ? 1 : l ? F(l, e) - F(l, t) : 0 : 4 & n ? -1 : 1)
          } : function(e, t) {
            if (e === t) return u = !0, 0;
            var n, i = 0,
              r = e.parentNode,
              s = t.parentNode,
              o = [e],
              a = [t];
            if (!r || !s) return e === _ ? -1 : t === _ ? 1 : r ? -1 : s ? 1 : l ? F(l, e) - F(l, t) : 0;
            if (r === s) return de(e, t);
            for (n = e; n = n.parentNode;) o.unshift(n);
            for (n = t; n = n.parentNode;) a.unshift(n);
            for (; o[i] === a[i];) i++;
            return i ? de(o[i], a[i]) : o[i] === y ? -1 : a[i] === y ? 1 : 0
          }), _
        }, N.matches = function(e, t) {
          return N(e, null, null, t)
        }, N.matchesSelector = function(e, t) {
          if ((e.ownerDocument || e) !== _ && C(e), t = t.replace(te, "='$1']"), p.matchesSelector && T && !b[t + " "] && (!i || !i.test(t)) && (!g || !g.test(t))) try {
            var n = r.call(e, t);
            if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
          } catch (e) {}
          return 0 < N(t, _, null, [e]).length
        }, N.contains = function(e, t) {
          return (e.ownerDocument || e) !== _ && C(e), v(e, t)
        }, N.attr = function(e, t) {
          (e.ownerDocument || e) !== _ && C(e);
          var n = x.attrHandle[t.toLowerCase()],
            n = n && B.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
          return void 0 !== n ? n : p.attributes || !T ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, N.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
        }, N.uniqueSort = function(e) {
          var t, n = [],
            i = 0,
            r = 0;
          if (u = !p.detectDuplicates, l = !p.sortStable && e.slice(0), e.sort(z), u) {
            for (; t = e[r++];) t === e[r] && (i = n.push(r));
            for (; i--;) e.splice(n[i], 1)
          }
          return l = null, e
        }, s = N.getText = function(e) {
          var t, n = "",
            i = 0,
            r = e.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
            } else if (3 === r || 4 === r) return e.nodeValue
          } else
            for (; t = e[i++];) n += s(t);
          return n
        }, (x = N.selectors = {
          cacheLength: 50,
          createPseudo: A,
          match: h,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function(e) {
              return e[1] = e[1].replace(f, d), e[3] = (e[3] || e[4] || e[5] || "").replace(f, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            },
            CHILD: function(e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || N.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && N.error(e[0]), e
            },
            PSEUDO: function(e) {
              var t, n = !e[6] && e[2];
              return h.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ne.test(n) && (t = m(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
          },
          filter: {
            TAG: function(e) {
              var t = e.replace(f, d).toLowerCase();
              return "*" === e ? function() {
                return !0
              } : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              }
            },
            CLASS: function(e) {
              var t = W[e + " "];
              return t || (t = new RegExp("(^|" + o + ")" + e + "(" + o + "|$)")) && W(e, function(e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
              })
            },
            ATTR: function(t, n, i) {
              return function(e) {
                e = N.attr(e, t);
                return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(K, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
              }
            },
            CHILD: function(p, e, t, m, g) {
              var v = "nth" !== p.slice(0, 3),
                y = "last" !== p.slice(-4),
                b = "of-type" === e;
              return 1 === m && 0 === g ? function(e) {
                return !!e.parentNode
              } : function(e, t, n) {
                var i, r, s, o, a, l, u = v != y ? "nextSibling" : "previousSibling",
                  c = e.parentNode,
                  d = b && e.nodeName.toLowerCase(),
                  h = !n && !b,
                  f = !1;
                if (c) {
                  if (v) {
                    for (; u;) {
                      for (o = e; o = o[u];)
                        if (b ? o.nodeName.toLowerCase() === d : 1 === o.nodeType) return !1;
                      l = u = "only" === p && !l && "nextSibling"
                    }
                    return !0
                  }
                  if (l = [y ? c.firstChild : c.lastChild], y && h) {
                    for (f = (a = (i = (r = (s = (o = c)[E] || (o[E] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[p] || [])[0] === k && i[1]) && i[2], o = a && c.childNodes[a]; o = ++a && o && o[u] || (f = a = 0) || l.pop();)
                      if (1 === o.nodeType && ++f && o === e) {
                        r[p] = [k, a, f];
                        break
                      }
                  } else if (!1 === (f = h ? a = (i = (r = (s = (o = e)[E] || (o[E] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[p] || [])[0] === k && i[1] : f))
                    for (;
                      (o = ++a && o && o[u] || (f = a = 0) || l.pop()) && ((b ? o.nodeName.toLowerCase() !== d : 1 !== o.nodeType) || !++f || (h && ((r = (s = o[E] || (o[E] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[p] = [k, f]), o !== e)););
                  return (f -= g) === m || f % m == 0 && 0 <= f / m
                }
              }
            },
            PSEUDO: function(e, s) {
              var t, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || N.error("unsupported pseudo: " + e);
              return o[E] ? o(s) : 1 < o.length ? (t = [e, e, "", s], x.setFilters.hasOwnProperty(e.toLowerCase()) ? A(function(e, t) {
                for (var n, i = o(e, s), r = i.length; r--;) e[n = F(e, i[r])] = !(t[n] = i[r])
              }) : function(e) {
                return o(e, 0, t)
              }) : o
            }
          },
          pseudos: {
            not: A(function(e) {
              var i = [],
                r = [],
                a = M(e.replace(S, "$1"));
              return a[E] ? A(function(e, t, n, i) {
                for (var r, s = a(e, null, i, []), o = e.length; o--;)(r = s[o]) && (e[o] = !(t[o] = r))
              }) : function(e, t, n) {
                return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop()
              }
            }),
            has: A(function(t) {
              return function(e) {
                return 0 < N(t, e).length
              }
            }),
            contains: A(function(t) {
              return t = t.replace(f, d),
                function(e) {
                  return -1 < (e.textContent || e.innerText || s(e)).indexOf(t)
                }
            }),
            lang: A(function(n) {
              return ie.test(n || "") || N.error("unsupported lang: " + n), n = n.replace(f, d).toLowerCase(),
                function(e) {
                  var t;
                  do {
                    if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1
                }
            }),
            target: function(e) {
              var t = q.location && q.location.hash;
              return t && t.slice(1) === e.id
            },
            root: function(e) {
              return e === t
            },
            focus: function(e) {
              return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: function(e) {
              return !1 === e.disabled
            },
            disabled: function(e) {
              return !0 === e.disabled
            },
            checked: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected
            },
            selected: function(e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            },
            empty: function(e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0
            },
            parent: function(e) {
              return !x.pseudos.empty(e)
            },
            header: function(e) {
              return se.test(e.nodeName)
            },
            input: function(e) {
              return re.test(e.nodeName)
            },
            button: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t
            },
            text: function(e) {
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
            },
            first: j(function() {
              return [0]
            }),
            last: j(function(e, t) {
              return [t - 1]
            }),
            eq: j(function(e, t, n) {
              return [n < 0 ? n + t : n]
            }),
            even: j(function(e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e
            }),
            odd: j(function(e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e
            }),
            lt: j(function(e, t, n) {
              for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
              return e
            }),
            gt: j(function(e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
              return e
            })
          }
        }).pseudos.nth = x.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) x.pseudos[e] = function(t) {
        return function(e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t
        }
      }(e);
      for (e in {
          submit: !0,
          reset: !0
        }) x.pseudos[e] = function(n) {
        return function(e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n
        }
      }(e);

      function fe() {}

      function P(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i
      }

      function pe(o, e, t) {
        var a = e.dir,
          l = t && "parentNode" === a,
          u = H++;
        return e.first ? function(e, t, n) {
          for (; e = e[a];)
            if (1 === e.nodeType || l) return o(e, t, n)
        } : function(e, t, n) {
          var i, r, s = [k, u];
          if (n) {
            for (; e = e[a];)
              if ((1 === e.nodeType || l) && o(e, t, n)) return !0
          } else
            for (; e = e[a];)
              if (1 === e.nodeType || l) {
                if ((i = (r = (r = e[E] || (e[E] = {}))[e.uniqueID] || (r[e.uniqueID] = {}))[a]) && i[0] === k && i[1] === u) return s[2] = i[2];
                if ((r[a] = s)[2] = o(e, t, n)) return !0
              }
        }
      }

      function me(r) {
        return 1 < r.length ? function(e, t, n) {
          for (var i = r.length; i--;)
            if (!r[i](e, t, n)) return !1;
          return !0
        } : r[0]
      }

      function O(e, t, n, i, r) {
        for (var s, o = [], a = 0, l = e.length, u = null != t; a < l; a++) !(s = e[a]) || n && !n(s, i, r) || (o.push(s), u && t.push(a));
        return o
      }

      function ge(f, p, m, g, v, e) {
        return g && !g[E] && (g = ge(g)), v && !v[E] && (v = ge(v, e)), A(function(e, t, n, i) {
          var r, s, o, a = [],
            l = [],
            u = t.length,
            c = e || function(e, t, n) {
              for (var i = 0, r = t.length; i < r; i++) N(e, t[i], n);
              return n
            }(p || "*", n.nodeType ? [n] : n, []),
            d = !f || !e && p ? c : O(c, a, f, n, i),
            h = m ? v || (e ? f : u || g) ? [] : t : d;
          if (m && m(d, h, n, i), g)
            for (r = O(h, l), g(r, [], n, i), s = r.length; s--;)(o = r[s]) && (h[l[s]] = !(d[l[s]] = o));
          if (e) {
            if (v || f) {
              if (v) {
                for (r = [], s = h.length; s--;)(o = h[s]) && r.push(d[s] = o);
                v(null, h = [], r, i)
              }
              for (s = h.length; s--;)(o = h[s]) && -1 < (r = v ? F(e, o) : a[s]) && (e[r] = !(t[r] = o))
            }
          } else h = O(h === t ? h.splice(u, h.length) : h), v ? v(null, t, h, i) : $.apply(t, h)
        })
      }

      function ve(g, v) {
        function e(e, t, n, i, r) {
          var s, o, a, l = 0,
            u = "0",
            c = e && [],
            d = [],
            h = w,
            f = e || b && x.find.TAG("*", r),
            p = k += null == h ? 1 : Math.random() || .1,
            m = f.length;
          for (r && (w = t === _ || t || r); u !== m && null != (s = f[u]); u++) {
            if (b && s) {
              for (o = 0, t || s.ownerDocument === _ || (C(s), n = !T); a = g[o++];)
                if (a(s, t || _, n)) {
                  i.push(s);
                  break
                } r && (k = p)
            }
            y && ((s = !a && s) && l--, e && c.push(s))
          }
          if (l += u, y && u !== l) {
            for (o = 0; a = v[o++];) a(c, d, t, n);
            if (e) {
              if (0 < l)
                for (; u--;) c[u] || d[u] || (d[u] = U.call(i));
              d = O(d)
            }
            $.apply(i, d), r && !e && 0 < d.length && 1 < l + v.length && N.uniqueSort(i)
          }
          return r && (k = p, w = h), c
        }
        var y = 0 < v.length,
          b = 0 < g.length;
        return y ? A(e) : e
      }
      return fe.prototype = x.filters = x.pseudos, x.setFilters = new fe, m = N.tokenize = function(e, t) {
        var n, i, r, s, o, a, l, u = V[e + " "];
        if (u) return t ? 0 : u.slice(0);
        for (o = e, a = [], l = x.preFilter; o;) {
          for (s in n && !(i = Z.exec(o)) || (i && (o = o.slice(i[0].length) || o), a.push(r = [])), n = !1, (i = ee.exec(o)) && (n = i.shift(), r.push({
              value: n,
              type: i[0].replace(S, " ")
            }), o = o.slice(n.length)), x.filter) !(i = h[s].exec(o)) || l[s] && !(i = l[s](i)) || (n = i.shift(), r.push({
            value: n,
            type: s,
            matches: i
          }), o = o.slice(n.length));
          if (!n) break
        }
        return t ? o.length : o ? N.error(e) : V(e, a).slice(0)
      }, M = N.compile = function(e, t) {
        var n, i = [],
          r = [],
          s = b[e + " "];
        if (!s) {
          for (n = (t = t || m(e)).length; n--;)((s = function e(t) {
            for (var i, n, r, s = t.length, o = x.relative[t[0].type], a = o || x.relative[" "], l = o ? 1 : 0, u = pe(function(e) {
                return e === i
              }, a, !0), c = pe(function(e) {
                return -1 < F(i, e)
              }, a, !0), d = [function(e, t, n) {
                return e = !o && (n || t !== w) || ((i = t).nodeType ? u : c)(e, t, n), i = null, e
              }]; l < s; l++)
              if (n = x.relative[t[l].type]) d = [pe(me(d), n)];
              else {
                if ((n = x.filter[t[l].type].apply(null, t[l].matches))[E]) {
                  for (r = ++l; r < s && !x.relative[t[r].type]; r++);
                  return ge(1 < l && me(d), 1 < l && P(t.slice(0, l - 1).concat({
                    value: " " === t[l - 2].type ? "*" : ""
                  })).replace(S, "$1"), n, l < r && e(t.slice(l, r)), r < s && e(t = t.slice(r)), r < s && P(t))
                }
                d.push(n)
              } return me(d)
          }(t[n]))[E] ? i : r).push(s);
          (s = b(e, ve(r, i))).selector = e
        }
        return s
      }, I = N.select = function(e, t, n, i) {
        var r, s, o, a, l, u = "function" == typeof e && e,
          c = !i && m(e = u.selector || e);
        if (n = n || [], 1 === c.length) {
          if (2 < (s = c[0] = c[0].slice(0)).length && "ID" === (o = s[0]).type && p.getById && 9 === t.nodeType && T && x.relative[s[1].type]) {
            if (!(t = (x.find.ID(o.matches[0].replace(f, d), t) || [])[0])) return n;
            u && (t = t.parentNode), e = e.slice(s.shift().value.length)
          }
          for (r = h.needsContext.test(e) ? 0 : s.length; r-- && (o = s[r], !x.relative[a = o.type]);)
            if ((l = x.find[a]) && (i = l(o.matches[0].replace(f, d), ae.test(s[0].type) && he(t.parentNode) || t))) {
              if (s.splice(r, 1), e = i.length && P(s)) break;
              return $.apply(n, i), n
            }
        }
        return (u || M(e, c))(i, t, !T, n, !t || ae.test(e) && he(t.parentNode) || t), n
      }, p.sortStable = E.split("").sort(z).join("") === E, p.detectDuplicates = !!u, C(), p.sortDetached = D(function(e) {
        return 1 & e.compareDocumentPosition(_.createElement("div"))
      }), D(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || ce("type|href|height|width", function(e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), p.attributes && D(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || ce("value", function(e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
      }), D(function(e) {
        return null == e.getAttribute("disabled")
      }) || ce(Y, function(e, t, n) {
        if (!n) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
      }), N
    }(w),
    Q = (C.find = e, C.expr = e.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = e.uniqueSort, C.text = e.getText, C.isXMLDoc = e.isXML, C.contains = e.contains, C.expr.match.needsContext),
    Y = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    G = /^.[^:#\[\.,]*$/;

  function J(e, n, i) {
    if (C.isFunction(n)) return C.grep(e, function(e, t) {
      return !!n.call(e, t, e) !== i
    });
    if (n.nodeType) return C.grep(e, function(e) {
      return e === n !== i
    });
    if ("string" == typeof n) {
      if (G.test(n)) return C.filter(n, e, i);
      n = C.filter(n, e)
    }
    return C.grep(e, function(e) {
      return -1 < C.inArray(e, n) !== i
    })
  }
  C.filter = function(e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function(e) {
      return 1 === e.nodeType
    }))
  }, C.fn.extend({
    find: function(e) {
      var t, n = [],
        i = this,
        r = i.length;
      if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
        for (t = 0; t < r; t++)
          if (C.contains(i[t], this)) return !0
      }));
      for (t = 0; t < r; t++) C.find(e, i[t], n);
      return (n = this.pushStack(1 < r ? C.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
    },
    filter: function(e) {
      return this.pushStack(J(this, e || [], !1))
    },
    not: function(e) {
      return this.pushStack(J(this, e || [], !0))
    },
    is: function(e) {
      return !!J(this, "string" == typeof e && Q.test(e) ? C(e) : e || [], !1).length
    }
  });
  var K, Z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ee = ((C.fn.init = function(e, t, n) {
      if (e) {
        if (n = n || K, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : C.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), C.makeArray(e, this));
        if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Z.exec(e)) || !i[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (i[1]) {
          if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : p, !0)), Y.test(i[1]) && C.isPlainObject(t))
            for (var i in t) C.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i])
        } else {
          if ((n = p.getElementById(i[2])) && n.parentNode) {
            if (n.id !== i[2]) return K.find(e);
            this.length = 1, this[0] = n
          }
          this.context = p, this.selector = e
        }
      }
      return this
    }).prototype = C.fn, K = C(p), /^(?:parents|prev(?:Until|All))/),
    te = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

  function ne(e, t) {
    for (;
      (e = e[t]) && 1 !== e.nodeType;);
    return e
  }
  C.fn.extend({
    has: function(e) {
      var t, n = C(e, this),
        i = n.length;
      return this.filter(function() {
        for (t = 0; t < i; t++)
          if (C.contains(this, n[t])) return !0
      })
    },
    closest: function(e, t) {
      for (var n, i = 0, r = this.length, s = [], o = Q.test(e) || "string" != typeof e ? C(e, t || this.context) : 0; i < r; i++)
        for (n = this[i]; n && n !== t; n = n.parentNode)
          if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
            s.push(n);
            break
          } return this.pushStack(1 < s.length ? C.uniqueSort(s) : s)
    },
    index: function(e) {
      return e ? "string" == typeof e ? C.inArray(this[0], C(e)) : C.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), C.each({
    parent: function(e) {
      e = e.parentNode;
      return e && 11 !== e.nodeType ? e : null
    },
    parents: function(e) {
      return i(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return i(e, "parentNode", n)
    },
    next: function(e) {
      return ne(e, "nextSibling")
    },
    prev: function(e) {
      return ne(e, "previousSibling")
    },
    nextAll: function(e) {
      return i(e, "nextSibling")
    },
    prevAll: function(e) {
      return i(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return i(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return i(e, "previousSibling", n)
    },
    siblings: function(e) {
      return X((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return X(e.firstChild)
    },
    contents: function(e) {
      return C.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : C.merge([], e.childNodes)
    }
  }, function(i, r) {
    C.fn[i] = function(e, t) {
      var n = C.map(this, r, e);
      return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (te[i] || (n = C.uniqueSort(n)), ee.test(i) && (n = n.reverse())), this.pushStack(n)
    }
  });
  var ie, re, _ = /\S+/g;

  function se() {
    p.addEventListener ? (p.removeEventListener("DOMContentLoaded", t), w.removeEventListener("load", t)) : (p.detachEvent("onreadystatechange", t), w.detachEvent("onload", t))
  }

  function t() {
    !p.addEventListener && "load" !== w.event.type && "complete" !== p.readyState || (se(), C.ready())
  }
  for (re in C.Callbacks = function(i) {
      var e, n;
      i = "string" == typeof i ? (e = i, n = {}, C.each(e.match(_) || [], function(e, t) {
        n[t] = !0
      }), n) : C.extend({}, i);

      function r() {
        for (a = i.once, o = s = !0; u.length; c = -1)
          for (t = u.shift(); ++c < l.length;) !1 === l[c].apply(t[0], t[1]) && i.stopOnFalse && (c = l.length, t = !1);
        i.memory || (t = !1), s = !1, a && (l = t ? [] : "")
      }
      var s, t, o, a, l = [],
        u = [],
        c = -1,
        d = {
          add: function() {
            return l && (t && !s && (c = l.length - 1, u.push(t)), function n(e) {
              C.each(e, function(e, t) {
                C.isFunction(t) ? i.unique && d.has(t) || l.push(t) : t && t.length && "string" !== C.type(t) && n(t)
              })
            }(arguments), t && !s && r()), this
          },
          remove: function() {
            return C.each(arguments, function(e, t) {
              for (var n; - 1 < (n = C.inArray(t, l, n));) l.splice(n, 1), n <= c && c--
            }), this
          },
          has: function(e) {
            return e ? -1 < C.inArray(e, l) : 0 < l.length
          },
          empty: function() {
            return l = l && [], this
          },
          disable: function() {
            return a = u = [], l = t = "", this
          },
          disabled: function() {
            return !l
          },
          lock: function() {
            return a = !0, t || d.disable(), this
          },
          locked: function() {
            return !!a
          },
          fireWith: function(e, t) {
            return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), s || r()), this
          },
          fire: function() {
            return d.fireWith(this, arguments), this
          },
          fired: function() {
            return !!o
          }
        };
      return d
    }, C.extend({
      Deferred: function(e) {
        var s = [
            ["resolve", "done", C.Callbacks("once memory"), "resolved"],
            ["reject", "fail", C.Callbacks("once memory"), "rejected"],
            ["notify", "progress", C.Callbacks("memory")]
          ],
          r = "pending",
          o = {
            state: function() {
              return r
            },
            always: function() {
              return a.done(arguments).fail(arguments), this
            },
            then: function() {
              var r = arguments;
              return C.Deferred(function(i) {
                C.each(s, function(e, t) {
                  var n = C.isFunction(r[e]) && r[e];
                  a[t[1]](function() {
                    var e = n && n.apply(this, arguments);
                    e && C.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this === o ? i.promise() : this, n ? [e] : arguments)
                  })
                }), r = null
              }).promise()
            },
            promise: function(e) {
              return null != e ? C.extend(e, o) : o
            }
          },
          a = {};
        return o.pipe = o.then, C.each(s, function(e, t) {
          var n = t[2],
            i = t[3];
          o[t[1]] = n.add, i && n.add(function() {
            r = i
          }, s[1 ^ e][2].disable, s[2][2].lock), a[t[0]] = function() {
            return a[t[0] + "With"](this === a ? o : this, arguments), this
          }, a[t[0] + "With"] = n.fireWith
        }), o.promise(a), e && e.call(a, a), a
      },
      when: function(e) {
        function t(t, n, i) {
          return function(e) {
            n[t] = this, i[t] = 1 < arguments.length ? c.call(arguments) : e, i === r ? u.notifyWith(n, i) : --l || u.resolveWith(n, i)
          }
        }
        var r, n, i, s = 0,
          o = c.call(arguments),
          a = o.length,
          l = 1 !== a || e && C.isFunction(e.promise) ? a : 0,
          u = 1 === l ? e : C.Deferred();
        if (1 < a)
          for (r = new Array(a), n = new Array(a), i = new Array(a); s < a; s++) o[s] && C.isFunction(o[s].promise) ? o[s].promise().progress(t(s, n, r)).done(t(s, i, o)).fail(u.reject) : --l;
        return l || u.resolveWith(i, o), u.promise()
      }
    }), C.fn.ready = function(e) {
      return C.ready.promise().done(e), this
    }, C.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
        e ? C.readyWait++ : C.ready(!0)
      },
      ready: function(e) {
        (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || (ie.resolveWith(p, [C]), C.fn.triggerHandler && (C(p).triggerHandler("ready"), C(p).off("ready")))
      }
    }), C.ready.promise = function(e) {
      if (!ie)
        if (ie = C.Deferred(), "complete" === p.readyState || "loading" !== p.readyState && !p.documentElement.doScroll) w.setTimeout(C.ready);
        else if (p.addEventListener) p.addEventListener("DOMContentLoaded", t), w.addEventListener("load", t);
      else {
        p.attachEvent("onreadystatechange", t), w.attachEvent("onload", t);
        var n = !1;
        try {
          n = null == w.frameElement && p.documentElement
        } catch (e) {}
        n && n.doScroll && ! function t() {
          if (!C.isReady) {
            try {
              n.doScroll("left")
            } catch (e) {
              return w.setTimeout(t, 50)
            }
            se(), C.ready()
          }
        }()
      }
      return ie.promise(e)
    }, C.ready.promise(), C(g)) break;
  g.ownFirst = "0" === re, g.inlineBlockNeedsLayout = !1, C(function() {
    var e, t, n = p.getElementsByTagName("body")[0];
    n && n.style && (e = p.createElement("div"), (t = p.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(t).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", g.inlineBlockNeedsLayout = e = 3 === e.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(t))
  });
  e = p.createElement("div");
  g.deleteExpando = !0;
  try {
    delete e.test
  } catch (e) {
    g.deleteExpando = !1
  }

  function v(e) {
    var t = C.noData[(e.nodeName + " ").toLowerCase()],
      n = +e.nodeType || 1;
    return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
  }
  var r, oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ae = /([A-Z])/g;

  function le(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var i = "data-" + t.replace(ae, "-$1").toLowerCase();
      if ("string" == typeof(n = e.getAttribute(i))) {
        try {
          n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : oe.test(n) ? C.parseJSON(n) : n)
        } catch (e) {}
        C.data(e, t, n)
      } else n = void 0
    }
    return n
  }

  function ue(e) {
    for (var t in e)
      if (("data" !== t || !C.isEmptyObject(e[t])) && "toJSON" !== t) return;
    return 1
  }

  function ce(e, t, n, i) {
    if (v(e)) {
      var r, s = C.expando,
        o = e.nodeType,
        a = o ? C.cache : e,
        l = o ? e[s] : e[s] && s;
      if (l && a[l] && (i || a[l].data) || void 0 !== n || "string" != typeof t) return a[l = l || (o ? e[s] = d.pop() || C.guid++ : s)] || (a[l] = o ? {} : {
        toJSON: C.noop
      }), "object" != typeof t && "function" != typeof t || (i ? a[l] = C.extend(a[l], t) : a[l].data = C.extend(a[l].data, t)), e = a[l], i || (e.data || (e.data = {}), e = e.data), void 0 !== n && (e[C.camelCase(t)] = n), "string" == typeof t ? null == (r = e[t]) && (r = e[C.camelCase(t)]) : r = e, r
    }
  }

  function de(e, t, n) {
    if (v(e)) {
      var i, r, s = e.nodeType,
        o = s ? C.cache : e,
        a = s ? e[C.expando] : C.expando;
      if (o[a]) {
        if (t && (i = n ? o[a] : o[a].data)) {
          r = (t = C.isArray(t) ? t.concat(C.map(t, C.camelCase)) : t in i || (t = C.camelCase(t)) in i ? [t] : t.split(" ")).length;
          for (; r--;) delete i[t[r]];
          if (n ? !ue(i) : !C.isEmptyObject(i)) return
        }(n || (delete o[a].data, ue(o[a]))) && (s ? C.cleanData([e], !0) : g.deleteExpando || o != o.window ? delete o[a] : o[a] = void 0)
      }
    }
  }
  C.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(e) {
      return !!(e = e.nodeType ? C.cache[e[C.expando]] : e[C.expando]) && !ue(e)
    },
    data: function(e, t, n) {
      return ce(e, t, n)
    },
    removeData: function(e, t) {
      return de(e, t)
    },
    _data: function(e, t, n) {
      return ce(e, t, n, !0)
    },
    _removeData: function(e, t) {
      return de(e, t, !0)
    }
  }), C.fn.extend({
    data: function(e, t) {
      var n, i, r, s = this[0],
        o = s && s.attributes;
      if (void 0 !== e) return "object" == typeof e ? this.each(function() {
        C.data(this, e)
      }) : 1 < arguments.length ? this.each(function() {
        C.data(this, e, t)
      }) : s ? le(s, e, C.data(s, e)) : void 0;
      if (this.length && (r = C.data(s), 1 === s.nodeType && !C._data(s, "parsedAttrs"))) {
        for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && le(s, i = C.camelCase(i.slice(5)), r[i]);
        C._data(s, "parsedAttrs", !0)
      }
      return r
    },
    removeData: function(e) {
      return this.each(function() {
        C.removeData(this, e)
      })
    }
  }), C.extend({
    queue: function(e, t, n) {
      var i;
      if (e) return i = C._data(e, t = (t || "fx") + "queue"), n && (!i || C.isArray(n) ? i = C._data(e, t, C.makeArray(n)) : i.push(n)), i || []
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = C.queue(e, t),
        i = n.length,
        r = n.shift(),
        s = C._queueHooks(e, t);
      "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, function() {
        C.dequeue(e, t)
      }, s)), !i && s && s.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return C._data(e, n) || C._data(e, n, {
        empty: C.Callbacks("once memory").add(function() {
          C._removeData(e, t + "queue"), C._removeData(e, n)
        })
      })
    }
  }), C.fn.extend({
    queue: function(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
        var e = C.queue(this, t, n);
        C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        C.dequeue(this, e)
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
      function n() {
        --r || s.resolveWith(o, [o])
      }
      var i, r = 1,
        s = C.Deferred(),
        o = this,
        a = this.length;
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = C._data(o[a], e + "queueHooks")) && i.empty && (r++, i.empty.add(n));
      return n(), s.promise(t)
    }
  }), g.shrinkWrapBlocks = function() {
    var e, t, n;
    return null != r ? r : (r = !1, (t = p.getElementsByTagName("body")[0]) && t.style ? (e = p.createElement("div"), (n = p.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(p.createElement("div")).style.width = "5px", r = 3 !== e.offsetWidth), t.removeChild(n), r) : void 0)
  };

  function he(e, t) {
    return "none" === C.css(e = t || e, "display") || !C.contains(e.ownerDocument, e)
  }
  var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    fe = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
    a = ["Top", "Right", "Bottom", "Left"];

  function pe(e, t, n, i) {
    var r, s = 1,
      o = 20,
      a = i ? function() {
        return i.cur()
      } : function() {
        return C.css(e, t, "")
      },
      l = a(),
      u = n && n[3] || (C.cssNumber[t] ? "" : "px"),
      c = (C.cssNumber[t] || "px" !== u && +l) && fe.exec(C.css(e, t));
    if (c && c[3] !== u)
      for (u = u || c[3], n = n || [], c = +l || 1; c /= s = s || ".5", C.style(e, t, c + u), s !== (s = a() / l) && 1 !== s && --o;);
    return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
  }

  function h(e, t, n, i, r, s, o) {
    var a = 0,
      l = e.length,
      u = null == n;
    if ("object" === C.type(n))
      for (a in r = !0, n) h(e, t, a, n[a], !0, s, o);
    else if (void 0 !== i && (r = !0, C.isFunction(i) || (o = !0), t = u ? o ? (t.call(e, i), null) : (u = t, function(e, t, n) {
        return u.call(C(e), n)
      }) : t))
      for (; a < l; a++) t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
    return r ? e : u ? t.call(e) : l ? t(e[0], n) : s
  }
  var me = /^(?:checkbox|radio)$/i,
    ge = /<([\w:-]+)/,
    ve = /^$|\/(?:java|ecma)script/i,
    ye = /^\s+/,
    be = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

  function xe(e) {
    var t = be.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement)
      for (; t.length;) n.createElement(t.pop());
    return n
  }
  $ = p.createElement("div"), k = p.createDocumentFragment(), j = p.createElement("input"), $.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", g.leadingWhitespace = 3 === $.firstChild.nodeType, g.tbody = !$.getElementsByTagName("tbody").length, g.htmlSerialize = !!$.getElementsByTagName("link").length, g.html5Clone = "<:nav></:nav>" !== p.createElement("nav").cloneNode(!0).outerHTML, j.type = "checkbox", j.checked = !0, k.appendChild(j), g.appendChecked = j.checked, $.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!$.cloneNode(!0).lastChild.defaultValue, k.appendChild($), (j = p.createElement("input")).setAttribute("type", "radio"), j.setAttribute("checked", "checked"), j.setAttribute("name", "t"), $.appendChild(j), g.checkClone = $.cloneNode(!0).cloneNode(!0).lastChild.checked, g.noCloneEvent = !!$.addEventListener, $[C.expando] = 1, g.attributes = !$.getAttribute(C.expando);
  var y = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: g.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };

  function b(e, t) {
    var n, i, r = 0,
      s = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
    if (!s)
      for (s = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || C.nodeName(i, t) ? s.push(i) : C.merge(s, b(i, t));
    return void 0 === t || t && C.nodeName(e, t) ? C.merge([e], s) : s
  }

  function we(e, t) {
    for (var n, i = 0; null != (n = e[i]); i++) C._data(n, "globalEval", !t || C._data(t[i], "globalEval"))
  }
  y.optgroup = y.option, y.tbody = y.tfoot = y.colgroup = y.caption = y.thead, y.th = y.td;
  var Ce = /<|&#?\w+;/,
    _e = /<tbody/i;

  function Te(e) {
    me.test(e.type) && (e.defaultChecked = e.checked)
  }

  function Ee(e, t, n, i, r) {
    for (var s, o, a, l, u, c, d, h = e.length, f = xe(t), p = [], m = 0; m < h; m++)
      if ((o = e[m]) || 0 === o)
        if ("object" === C.type(o)) C.merge(p, o.nodeType ? [o] : o);
        else if (Ce.test(o)) {
      for (l = l || f.appendChild(t.createElement("div")), u = (ge.exec(o) || ["", ""])[1].toLowerCase(), d = y[u] || y._default, l.innerHTML = d[1] + C.htmlPrefilter(o) + d[2], s = d[0]; s--;) l = l.lastChild;
      if (!g.leadingWhitespace && ye.test(o) && p.push(t.createTextNode(ye.exec(o)[0])), !g.tbody)
        for (s = (o = "table" !== u || _e.test(o) ? "<table>" !== d[1] || _e.test(o) ? 0 : l : l.firstChild) && o.childNodes.length; s--;) C.nodeName(c = o.childNodes[s], "tbody") && !c.childNodes.length && o.removeChild(c);
      for (C.merge(p, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
      l = f.lastChild
    } else p.push(t.createTextNode(o));
    for (l && f.removeChild(l), g.appendChecked || C.grep(b(p, "input"), Te), m = 0; o = p[m++];)
      if (i && -1 < C.inArray(o, i)) r && r.push(o);
      else if (a = C.contains(o.ownerDocument, o), l = b(f.appendChild(o), "script"), a && we(l), n)
      for (s = 0; o = l[s++];) ve.test(o.type || "") && n.push(o);
    return l = null, f
  }
  var ke, $e, Fe = p.createElement("div");
  for (ke in {
      submit: !0,
      change: !0,
      focusin: !0
    })(g[ke] = ($e = "on" + ke) in w) || (Fe.setAttribute($e, "t"), g[ke] = !1 === Fe.attributes[$e].expando);
  var Se = /^(?:input|select|textarea)$/i,
    Ne = /^key/,
    Ae = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    De = /^(?:focusinfocus|focusoutblur)$/,
    je = /^([^.]*)(?:\.(.+)|)/;

  function Pe() {
    return !0
  }

  function l() {
    return !1
  }

  function Oe() {
    try {
      return p.activeElement
    } catch (e) {}
  }

  function qe(e, t, n, i, r, s) {
    var o, a;
    if ("object" == typeof t) {
      for (a in "string" != typeof n && (i = i || n, n = void 0), t) qe(e, a, n, i, t[a], s);
      return e
    }
    if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = l;
    else if (!r) return e;
    return 1 === s && (o = r, (r = function(e) {
      return C().off(e), o.apply(this, arguments)
    }).guid = o.guid || (o.guid = C.guid++)), e.each(function() {
      C.event.add(this, t, r, i, n)
    })
  }
  C.event = {
    global: {},
    add: function(e, t, n, i, r) {
      var s, o, a, l, u, c, d, h, f, p = C._data(e);
      if (p)
        for (n.handler && (n = (a = n).handler, r = a.selector), n.guid || (n.guid = C.guid++), (s = p.events) || (s = p.events = {}), (u = p.handle) || ((u = p.handle = function(e) {
            return void 0 === C || e && C.event.triggered === e.type ? void 0 : C.event.dispatch.apply(u.elem, arguments)
          }).elem = e), o = (t = (t || "").match(_) || [""]).length; o--;) d = f = (h = je.exec(t[o]) || [])[1], h = (h[2] || "").split(".").sort(), d && (l = C.event.special[d] || {}, d = (r ? l.delegateType : l.bindType) || d, l = C.event.special[d] || {}, f = C.extend({
          type: d,
          origType: f,
          data: i,
          handler: n,
          guid: n.guid,
          selector: r,
          needsContext: r && C.expr.match.needsContext.test(r),
          namespace: h.join(".")
        }, a), (c = s[d]) || ((c = s[d] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(e, i, h, u) || (e.addEventListener ? e.addEventListener(d, u, !1) : e.attachEvent && e.attachEvent("on" + d, u))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), r ? c.splice(c.delegateCount++, 0, f) : c.push(f), C.event.global[d] = !0)
    },
    remove: function(e, t, n, i, r) {
      var s, o, a, l, u, c, d, h, f, p, m, g = C.hasData(e) && C._data(e);
      if (g && (c = g.events)) {
        for (u = (t = (t || "").match(_) || [""]).length; u--;)
          if (f = m = (a = je.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
            for (d = C.event.special[f] || {}, h = c[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = h.length; s--;) o = h[s], !r && m !== o.origType || n && n.guid !== o.guid || a && !a.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, d.remove && d.remove.call(e, o));
            l && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || C.removeEvent(e, f, g.handle), delete c[f])
          } else
            for (f in c) C.event.remove(e, f + t[u], n, i, !0);
        C.isEmptyObject(c) && (delete g.handle, C._removeData(e, "events"))
      }
    },
    trigger: function(e, t, n, i) {
      var r, s, o, a, l, u, c = [n || p],
        d = m.call(e, "type") ? e.type : e,
        h = m.call(e, "namespace") ? e.namespace.split(".") : [],
        f = l = n = n || p;
      if (3 !== n.nodeType && 8 !== n.nodeType && !De.test(d + C.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), s = d.indexOf(":") < 0 && "on" + d, (e = e[C.expando] ? e : new C.Event(d, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), a = C.event.special[d] || {}, i || !a.trigger || !1 !== a.trigger.apply(n, t))) {
        if (!i && !a.noBubble && !C.isWindow(n)) {
          for (o = a.delegateType || d, De.test(o + d) || (f = f.parentNode); f; f = f.parentNode) c.push(f), l = f;
          l === (n.ownerDocument || p) && c.push(l.defaultView || l.parentWindow || w)
        }
        for (u = 0;
          (f = c[u++]) && !e.isPropagationStopped();) e.type = 1 < u ? o : a.bindType || d, (r = (C._data(f, "events") || {})[e.type] && C._data(f, "handle")) && r.apply(f, t), (r = s && f[s]) && r.apply && v(f) && (e.result = r.apply(f, t), !1 === e.result && e.preventDefault());
        if (e.type = d, !i && !e.isDefaultPrevented() && (!a._default || !1 === a._default.apply(c.pop(), t)) && v(n) && s && n[d] && !C.isWindow(n)) {
          (l = n[s]) && (n[s] = null), C.event.triggered = d;
          try {
            n[d]()
          } catch (e) {}
          C.event.triggered = void 0, l && (n[s] = l)
        }
        return e.result
      }
    },
    dispatch: function(e) {
      e = C.event.fix(e);
      var t, n, i, r, s, o = c.call(arguments),
        a = (C._data(this, "events") || {})[e.type] || [],
        l = C.event.special[e.type] || {};
      if ((o[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
        for (s = C.event.handlers.call(this, e, a), t = 0;
          (i = s[t++]) && !e.isPropagationStopped();)
          for (e.currentTarget = i.elem, n = 0;
            (r = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, void 0 !== (r = ((C.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, o)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result
      }
    },
    handlers: function(e, t) {
      var n, i, r, s, o = [],
        a = t.delegateCount,
        l = e.target;
      if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
        for (; l != this; l = l.parentNode || this)
          if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
            for (i = [], n = 0; n < a; n++) void 0 === i[r = (s = t[n]).selector + " "] && (i[r] = s.needsContext ? -1 < C(r, this).index(l) : C.find(r, this, null, [l]).length), i[r] && i.push(s);
            i.length && o.push({
              elem: l,
              handlers: i
            })
          } return a < t.length && o.push({
        elem: this,
        handlers: t.slice(a)
      }), o
    },
    fix: function(e) {
      if (e[C.expando]) return e;
      var t, n, i, r = e.type,
        s = e,
        o = this.fixHooks[r];
      for (o || (this.fixHooks[r] = o = Ae.test(r) ? this.mouseHooks : Ne.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new C.Event(s), t = i.length; t--;) e[n = i[t]] = s[n];
      return e.target || (e.target = s.srcElement || p), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, s) : e
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, t) {
        var n, i, r = t.button,
          s = t.fromElement;
        return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || p).documentElement, n = n.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== Oe() && this.focus) try {
            return this.focus(), !1
          } catch (e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === Oe() && this.blur) return this.blur(), !1
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if (C.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
        },
        _default: function(e) {
          return C.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function(e, t, n) {
      e = C.extend(new C.Event, n, {
        type: e,
        isSimulated: !0
      });
      C.event.trigger(e, null, t), e.isDefaultPrevented() && n.preventDefault()
    }
  }, C.removeEvent = p.removeEventListener ? function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  } : function(e, t, n) {
    t = "on" + t;
    e.detachEvent && (void 0 === e[t] && (e[t] = null), e.detachEvent(t, n))
  }, C.Event = function(e, t) {
    if (!(this instanceof C.Event)) return new C.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Pe : l) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || C.now(), this[C.expando] = !0
  }, C.Event.prototype = {
    constructor: C.Event,
    isDefaultPrevented: l,
    isPropagationStopped: l,
    isImmediatePropagationStopped: l,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Pe, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = Pe, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Pe, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, C.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(e, r) {
    C.event.special[e] = {
      delegateType: r,
      bindType: r,
      handle: function(e) {
        var t, n = e.relatedTarget,
          i = e.handleObj;
        return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
      }
    }
  }), g.submit || (C.event.special.submit = {
    setup: function() {
      if (C.nodeName(this, "form")) return !1;
      C.event.add(this, "click._submit keypress._submit", function(e) {
        e = e.target, e = C.nodeName(e, "input") || C.nodeName(e, "button") ? C.prop(e, "form") : void 0;
        e && !C._data(e, "submit") && (C.event.add(e, "submit._submit", function(e) {
          e._submitBubble = !0
        }), C._data(e, "submit", !0))
      })
    },
    postDispatch: function(e) {
      e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && C.event.simulate("submit", this.parentNode, e))
    },
    teardown: function() {
      if (C.nodeName(this, "form")) return !1;
      C.event.remove(this, "._submit")
    }
  }), g.change || (C.event.special.change = {
    setup: function() {
      if (Se.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (C.event.add(this, "propertychange._change", function(e) {
        "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
      }), C.event.add(this, "click._change", function(e) {
        this._justChanged && !e.isTrigger && (this._justChanged = !1), C.event.simulate("change", this, e)
      })), !1;
      C.event.add(this, "beforeactivate._change", function(e) {
        e = e.target;
        Se.test(e.nodeName) && !C._data(e, "change") && (C.event.add(e, "change._change", function(e) {
          !this.parentNode || e.isSimulated || e.isTrigger || C.event.simulate("change", this.parentNode, e)
        }), C._data(e, "change", !0))
      })
    },
    handle: function(e) {
      var t = e.target;
      if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
    },
    teardown: function() {
      return C.event.remove(this, "._change"), !Se.test(this.nodeName)
    }
  }), g.focusin || C.each({
    focus: "focusin",
    blur: "focusout"
  }, function(n, i) {
    function r(e) {
      C.event.simulate(i, e.target, C.event.fix(e))
    }
    C.event.special[i] = {
      setup: function() {
        var e = this.ownerDocument || this,
          t = C._data(e, i);
        t || e.addEventListener(n, r, !0), C._data(e, i, (t || 0) + 1)
      },
      teardown: function() {
        var e = this.ownerDocument || this,
          t = C._data(e, i) - 1;
        t ? C._data(e, i, t) : (e.removeEventListener(n, r, !0), C._removeData(e, i))
      }
    }
  }), C.fn.extend({
    on: function(e, t, n, i) {
      return qe(this, e, t, n, i)
    },
    one: function(e, t, n, i) {
      return qe(this, e, t, n, i, 1)
    },
    off: function(e, t, n) {
      var i, r;
      if (e && e.preventDefault && e.handleObj) i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
      else {
        if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = l), this.each(function() {
          C.event.remove(this, e, n, t)
        });
        for (r in e) this.off(r, t, e[r])
      }
      return this
    },
    trigger: function(e, t) {
      return this.each(function() {
        C.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      if (n) return C.event.trigger(e, t, n, !0)
    }
  });
  var Le = / jQuery\d+="(?:null|\d+)"/g,
    Re = new RegExp("<(?:" + be + ")[\\s/>]", "i"),
    Me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    Ie = /<script|<style|<link/i,
    He = /checked\s*(?:[^=]|=\s*.checked.)/i,
    We = /^true\/(.*)/,
    Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ze = xe(p).appendChild(p.createElement("div"));

  function Be(e, t) {
    return C.nodeName(e, "table") && C.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function Ue(e) {
    return e.type = (null !== C.find.attr(e, "type")) + "/" + e.type, e
  }

  function Xe(e) {
    var t = We.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function Qe(e, t) {
    if (1 === t.nodeType && C.hasData(e)) {
      var n, i, r, e = C._data(e),
        s = C._data(t, e),
        o = e.events;
      if (o)
        for (n in delete s.handle, s.events = {}, o)
          for (i = 0, r = o[n].length; i < r; i++) C.event.add(t, n, o[n][i]);
      s.data && (s.data = C.extend({}, s.data))
    }
  }

  function x(n, i, r, s) {
    i = R.apply([], i);
    var e, t, o, a, l, u, c = 0,
      d = n.length,
      h = d - 1,
      f = i[0],
      p = C.isFunction(f);
    if (p || 1 < d && "string" == typeof f && !g.checkClone && He.test(f)) return n.each(function(e) {
      var t = n.eq(e);
      p && (i[0] = f.call(this, e, t.html())), x(t, i, r, s)
    });
    if (d && (e = (u = Ee(i, n[0].ownerDocument, !1, n, s)).firstChild, 1 === u.childNodes.length && (u = e), e || s)) {
      for (o = (a = C.map(b(u, "script"), Ue)).length; c < d; c++) t = u, c !== h && (t = C.clone(t, !0, !0), o && C.merge(a, b(t, "script"))), r.call(n[c], t, c);
      if (o)
        for (l = a[a.length - 1].ownerDocument, C.map(a, Xe), c = 0; c < o; c++) t = a[c], ve.test(t.type || "") && !C._data(t, "globalEval") && C.contains(l, t) && (t.src ? C._evalUrl && C._evalUrl(t.src) : C.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ve, "")));
      u = e = null
    }
    return n
  }

  function Ye(e, t, n) {
    for (var i, r = t ? C.filter(t, e) : e, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || C.cleanData(b(i)), i.parentNode && (n && C.contains(i.ownerDocument, i) && we(b(i, "script")), i.parentNode.removeChild(i));
    return e
  }
  C.extend({
    htmlPrefilter: function(e) {
      return e.replace(Me, "<$1></$2>")
    },
    clone: function(e, t, n) {
      var i, r, s, o, a, l = C.contains(e.ownerDocument, e);
      if (g.html5Clone || C.isXMLDoc(e) || !Re.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (ze.innerHTML = e.outerHTML, ze.removeChild(s = ze.firstChild)), !(g.noCloneEvent && g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
        for (i = b(s), a = b(e), o = 0; null != (r = a[o]); ++o)
          if (i[o]) {
            d = c = u = f = h = void 0;
            var u, c, d, h = r,
              f = i[o];
            if (1 === f.nodeType) {
              if (u = f.nodeName.toLowerCase(), !g.noCloneEvent && f[C.expando]) {
                for (c in (d = C._data(f)).events) C.removeEvent(f, c, d.handle);
                f.removeAttribute(C.expando)
              }
              "script" === u && f.text !== h.text ? (Ue(f).text = h.text, Xe(f)) : "object" === u ? (f.parentNode && (f.outerHTML = h.outerHTML), g.html5Clone && h.innerHTML && !C.trim(f.innerHTML) && (f.innerHTML = h.innerHTML)) : "input" === u && me.test(h.type) ? (f.defaultChecked = f.checked = h.checked, f.value !== h.value && (f.value = h.value)) : "option" === u ? f.defaultSelected = f.selected = h.defaultSelected : "input" !== u && "textarea" !== u || (f.defaultValue = h.defaultValue)
            }
          } if (t)
        if (n)
          for (a = a || b(e), i = i || b(s), o = 0; null != (r = a[o]); o++) Qe(r, i[o]);
        else Qe(e, s);
      return 0 < (i = b(s, "script")).length && we(i, !l && b(e, "script")), i = a = r = null, s
    },
    cleanData: function(e, t) {
      for (var n, i, r, s, o = 0, a = C.expando, l = C.cache, u = g.attributes, c = C.event.special; null != (n = e[o]); o++)
        if ((t || v(n)) && (s = (r = n[a]) && l[r])) {
          if (s.events)
            for (i in s.events) c[i] ? C.event.remove(n, i) : C.removeEvent(n, i, s.handle);
          l[r] && (delete l[r], u || void 0 === n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a), d.push(r))
        }
    }
  }), C.fn.extend({
    domManip: x,
    detach: function(e) {
      return Ye(this, e, !0)
    },
    remove: function(e) {
      return Ye(this, e)
    },
    text: function(e) {
      return h(this, function(e) {
        return void 0 === e ? C.text(this) : this.empty().append((this[0] && this[0].ownerDocument || p).createTextNode(e))
      }, null, e, arguments.length)
    },
    append: function() {
      return x(this, arguments, function(e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Be(this, e).appendChild(e)
      })
    },
    prepend: function() {
      return x(this, arguments, function(e) {
        var t;
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Be(this, e)).insertBefore(e, t.firstChild)
      })
    },
    before: function() {
      return x(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return x(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && C.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
        e.options && C.nodeName(e, "select") && (e.options.length = 0)
      }
      return this
    },
    clone: function(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function() {
        return C.clone(this, e, t)
      })
    },
    html: function(e) {
      return h(this, function(e) {
        var t = this[0] || {},
          n = 0,
          i = this.length;
        if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Le, "") : void 0;
        if ("string" == typeof e && !Ie.test(e) && (g.htmlSerialize || !Re.test(e)) && (g.leadingWhitespace || !ye.test(e)) && !y[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = C.htmlPrefilter(e);
          try {
            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(b(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function() {
      var n = [];
      return x(this, arguments, function(e) {
        var t = this.parentNode;
        C.inArray(this, n) < 0 && (C.cleanData(b(this)), t && t.replaceChild(e, this))
      }, n)
    }
  }), C.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, o) {
    C.fn[e] = function(e) {
      for (var t, n = 0, i = [], r = C(e), s = r.length - 1; n <= s; n++) t = n === s ? this : this.clone(!0), C(r[n])[o](t), M.apply(i, t.get());
      return this.pushStack(i)
    }
  });
  var Ge, Je = {
    HTML: "block",
    BODY: "block"
  };

  function Ke(e, t) {
    e = C(t.createElement(e)).appendTo(t.body), t = C.css(e[0], "display");
    return e.detach(), t
  }

  function Ze(e) {
    var t = p,
      n = Je[e];
    return n || ("none" !== (n = Ke(e, t)) && n || ((t = ((Ge = (Ge || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ge[0].contentDocument).document).write(), t.close(), n = Ke(e, t), Ge.detach()), Je[e] = n), n
  }

  function et(e, t, n, i) {
    var r, s = {};
    for (r in t) s[r] = e.style[r], e.style[r] = t[r];
    for (r in n = n.apply(e, i || []), t) e.style[r] = s[r];
    return n
  }
  var n, tt, nt, it, rt, st, ot, s, at = /^margin/,
    lt = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
    ut = p.documentElement;

  function o() {
    var e, t = p.documentElement;
    t.appendChild(ot), s.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = nt = st = !1, tt = rt = !0, w.getComputedStyle && (e = w.getComputedStyle(s), n = "1%" !== (e || {}).top, st = "2px" === (e || {}).marginLeft, nt = "4px" === (e || {
      width: "4px"
    }).width, s.style.marginRight = "50%", tt = "4px" === (e || {
      marginRight: "4px"
    }).marginRight, (e = s.appendChild(p.createElement("div"))).style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", s.style.width = "1px", rt = !parseFloat((w.getComputedStyle(e) || {}).marginRight), s.removeChild(e)), s.style.display = "none", (it = 0 === s.getClientRects().length) && (s.style.display = "", s.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s.childNodes[0].style.borderCollapse = "separate", (e = s.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (it = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", it = 0 === e[0].offsetHeight)), t.removeChild(ot)
  }
  ot = p.createElement("div"), (s = p.createElement("div")).style && (s.style.cssText = "float:left;opacity:.5", g.opacity = "0.5" === s.style.opacity, g.cssFloat = !!s.style.cssFloat, s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === s.style.backgroundClip, (ot = p.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.innerHTML = "", ot.appendChild(s), g.boxSizing = "" === s.style.boxSizing || "" === s.style.MozBoxSizing || "" === s.style.WebkitBoxSizing, C.extend(g, {
    reliableHiddenOffsets: function() {
      return null == n && o(), it
    },
    boxSizingReliable: function() {
      return null == n && o(), nt
    },
    pixelMarginRight: function() {
      return null == n && o(), tt
    },
    pixelPosition: function() {
      return null == n && o(), n
    },
    reliableMarginRight: function() {
      return null == n && o(), rt
    },
    reliableMarginLeft: function() {
      return null == n && o(), st
    }
  }));
  var u, f, ct = /^(top|right|bottom|left)$/;

  function dt(e, t) {
    return {
      get: function() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }
  w.getComputedStyle ? (u = function(e) {
    var t = e.ownerDocument.defaultView;
    return (t = t && t.opener ? t : w).getComputedStyle(e)
  }, f = function(e, t, n) {
    var i, r, s = e.style;
    return "" !== (r = (n = n || u(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== r || C.contains(e.ownerDocument, e) || (r = C.style(e, t)), n && !g.pixelMarginRight() && lt.test(r) && at.test(t) && (e = s.width, t = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = r, r = n.width, s.width = e, s.minWidth = t, s.maxWidth = i), void 0 === r ? r : r + ""
  }) : ut.currentStyle && (u = function(e) {
    return e.currentStyle
  }, f = function(e, t, n) {
    var i, r, s, o = e.style;
    return null == (n = (n = n || u(e)) ? n[t] : void 0) && o && o[t] && (n = o[t]), lt.test(n) && !ct.test(t) && (i = o.left, (s = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : n, n = o.pixelLeft + "px", o.left = i, s && (r.left = s)), void 0 === n ? n : n + "" || "auto"
  });
  var ht = /alpha\([^)]*\)/i,
    ft = /opacity\s*=\s*([^)]*)/i,
    pt = /^(none|table(?!-c[ea]).+)/,
    mt = new RegExp("^(" + e + ")(.*)$", "i"),
    gt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    vt = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    yt = ["Webkit", "O", "Moz", "ms"],
    bt = p.createElement("div").style;

  function xt(e) {
    if (e in bt) return e;
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = yt.length; n--;)
      if ((e = yt[n] + t) in bt) return e
  }

  function wt(e, t) {
    for (var n, i, r, s = [], o = 0, a = e.length; o < a; o++)(i = e[o]).style && (s[o] = C._data(i, "olddisplay"), n = i.style.display, t ? (s[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && he(i) && (s[o] = C._data(i, "olddisplay", Ze(i.nodeName)))) : (r = he(i), (n && "none" !== n || !r) && C._data(i, "olddisplay", r ? n : C.css(i, "display"))));
    for (o = 0; o < a; o++) !(i = e[o]).style || t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? s[o] || "" : "none");
    return e
  }

  function Ct(e, t, n) {
    var i = mt.exec(t);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
  }

  function _t(e, t, n, i, r) {
    for (var s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; s < 4; s += 2) "margin" === n && (o += C.css(e, n + a[s], !0, r)), i ? ("content" === n && (o -= C.css(e, "padding" + a[s], !0, r)), "margin" !== n && (o -= C.css(e, "border" + a[s] + "Width", !0, r))) : (o += C.css(e, "padding" + a[s], !0, r), "padding" !== n && (o += C.css(e, "border" + a[s] + "Width", !0, r)));
    return o
  }

  function Tt(e, t, n) {
    var i = !0,
      r = "width" === t ? e.offsetWidth : e.offsetHeight,
      s = u(e),
      o = g.boxSizing && "border-box" === C.css(e, "boxSizing", !1, s);
    if (r <= 0 || null == r) {
      if (((r = f(e, t, s)) < 0 || null == r) && (r = e.style[t]), lt.test(r)) return r;
      i = o && (g.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
    }
    return r + _t(e, t, n || (o ? "border" : "content"), i, s) + "px"
  }

  function T(e, t, n, i, r) {
    return new T.prototype.init(e, t, n, i, r)
  }
  C.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) return "" === (t = f(e, "opacity")) ? "1" : t
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      float: g.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r, s, o, a = C.camelCase(t),
          l = e.style;
        if (t = C.cssProps[a] || (C.cssProps[a] = xt(a) || a), o = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t];
        if ("string" === (s = typeof n) && (r = fe.exec(n)) && r[1] && (n = pe(e, t, r), s = "number"), null != n && n == n && ("number" === s && (n += r && r[3] || (C.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, i))))) try {
          l[t] = n
        } catch (e) {}
      }
    },
    css: function(e, t, n, i) {
      var r, s = C.camelCase(t);
      return t = C.cssProps[s] || (C.cssProps[s] = xt(s) || s), "normal" === (r = void 0 === (r = (s = C.cssHooks[t] || C.cssHooks[s]) && "get" in s ? s.get(e, !0, n) : r) ? f(e, t, i) : r) && t in vt && (r = vt[t]), ("" === n || n) && (s = parseFloat(r), !0 === n || isFinite(s)) ? s || 0 : r
    }
  }), C.each(["height", "width"], function(e, r) {
    C.cssHooks[r] = {
      get: function(e, t, n) {
        if (t) return pt.test(C.css(e, "display")) && 0 === e.offsetWidth ? et(e, gt, function() {
          return Tt(e, r, n)
        }) : Tt(e, r, n)
      },
      set: function(e, t, n) {
        var i = n && u(e);
        return Ct(0, t, n ? _t(e, r, n, g.boxSizing && "border-box" === C.css(e, "boxSizing", !1, i), i) : 0)
      }
    }
  }), g.opacity || (C.cssHooks.opacity = {
    get: function(e, t) {
      return ft.test((t && e.currentStyle ? e.currentStyle : e.style).filter || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    },
    set: function(e, t) {
      var n = e.style,
        e = e.currentStyle,
        i = C.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
        r = e && e.filter || n.filter || "";
      ((n.zoom = 1) <= t || "" === t) && "" === C.trim(r.replace(ht, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || e && !e.filter) || (n.filter = ht.test(r) ? r.replace(ht, i) : r + " " + i)
    }
  }), C.cssHooks.marginRight = dt(g.reliableMarginRight, function(e, t) {
    if (t) return et(e, {
      display: "inline-block"
    }, f, [e, "marginRight"])
  }), C.cssHooks.marginLeft = dt(g.reliableMarginLeft, function(e, t) {
    if (t) return (parseFloat(f(e, "marginLeft")) || (C.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - et(e, {
      marginLeft: 0
    }, function() {
      return e.getBoundingClientRect().left
    }) : 0)) + "px"
  }), C.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(r, s) {
    C.cssHooks[r + s] = {
      expand: function(e) {
        for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + a[t] + s] = i[t] || i[t - 2] || i[0];
        return n
      }
    }, at.test(r) || (C.cssHooks[r + s].set = Ct)
  }), C.fn.extend({
    css: function(e, t) {
      return h(this, function(e, t, n) {
        var i, r, s = {},
          o = 0;
        if (C.isArray(t)) {
          for (i = u(e), r = t.length; o < r; o++) s[t[o]] = C.css(e, t[o], !1, i);
          return s
        }
        return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
      }, e, t, 1 < arguments.length)
    },
    show: function() {
      return wt(this, !0)
    },
    hide: function() {
      return wt(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        he(this) ? C(this).show() : C(this).hide()
      })
    }
  }), ((C.Tween = T).prototype = {
    constructor: T,
    init: function(e, t, n, i, r, s) {
      this.elem = e, this.prop = n, this.easing = r || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (C.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = T.propHooks[this.prop];
      return (e && e.get ? e : T.propHooks._default).get(this)
    },
    run: function(e) {
      var t, n = T.propHooks[this.prop];
      return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : T.propHooks._default).set(this), this
    }
  }).init.prototype = T.prototype, (T.propHooks = {
    _default: {
      get: function(e) {
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = C.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
      },
      set: function(e) {
        C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }).scrollTop = T.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, C.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
  }, C.fx = T.prototype.init, C.fx.step = {};
  var E, Et, k, $, kt = /^(?:toggle|show|hide)$/,
    $t = /queueHooks$/;

  function Ft() {
    return w.setTimeout(function() {
      E = void 0
    }), E = C.now()
  }

  function St(e, t) {
    var n, i = {
        height: e
      },
      r = 0;
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = a[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function Nt(e, t, n) {
    for (var i, r = (F.tweeners[t] || []).concat(F.tweeners["*"]), s = 0, o = r.length; s < o; s++)
      if (i = r[s].call(n, t, e)) return i
  }

  function F(r, e, t) {
    var n, s, i, o, a, l, u, c = 0,
      d = F.prefilters.length,
      h = C.Deferred().always(function() {
        delete f.elem
      }),
      f = function() {
        if (s) return !1;
        for (var e = E || Ft(), e = Math.max(0, p.startTime + p.duration - e), t = 1 - (e / p.duration || 0), n = 0, i = p.tweens.length; n < i; n++) p.tweens[n].run(t);
        return h.notifyWith(r, [p, t, e]), t < 1 && i ? e : (h.resolveWith(r, [p]), !1)
      },
      p = h.promise({
        elem: r,
        props: C.extend({}, e),
        opts: C.extend(!0, {
          specialEasing: {},
          easing: C.easing._default
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: E || Ft(),
        duration: t.duration,
        tweens: [],
        createTween: function(e, t) {
          t = C.Tween(r, p.opts, e, t, p.opts.specialEasing[e] || p.opts.easing);
          return p.tweens.push(t), t
        },
        stop: function(e) {
          var t = 0,
            n = e ? p.tweens.length : 0;
          if (!s) {
            for (s = !0; t < n; t++) p.tweens[t].run(1);
            e ? (h.notifyWith(r, [p, 1, 0]), h.resolveWith(r, [p, e])) : h.rejectWith(r, [p, e])
          }
          return this
        }
      }),
      m = p.props,
      g = m,
      v = p.opts.specialEasing;
    for (i in g)
      if (a = v[o = C.camelCase(i)], l = g[i], C.isArray(l) && (a = l[1], l = g[i] = l[0]), i !== o && (g[o] = l, delete g[i]), (u = C.cssHooks[o]) && "expand" in u)
        for (i in l = u.expand(l), delete g[o], l) i in g || (g[i] = l[i], v[i] = a);
      else v[o] = a;
    for (; c < d; c++)
      if (n = F.prefilters[c].call(p, r, m, p.opts)) return C.isFunction(n.stop) && (C._queueHooks(p.elem, p.opts.queue).stop = C.proxy(n.stop, n)), n;
    return C.map(m, Nt, p), C.isFunction(p.opts.start) && p.opts.start.call(r, p), C.fx.timer(C.extend(f, {
      elem: r,
      anim: p,
      queue: p.opts.queue
    })), p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always)
  }
  C.Animation = C.extend(F, {
    tweeners: {
      "*": [function(e, t) {
        var n = this.createTween(e, t);
        return pe(n.elem, e, fe.exec(t), n), n
      }]
    },
    tweener: function(e, t) {
      for (var n, i = 0, r = (e = C.isFunction(e) ? (t = e, ["*"]) : e.match(_)).length; i < r; i++) n = e[i], F.tweeners[n] = F.tweeners[n] || [], F.tweeners[n].unshift(t)
    },
    prefilters: [function(t, e, n) {
      var i, r, s, o, a, l, u, c = this,
        d = {},
        h = t.style,
        f = t.nodeType && he(t),
        p = C._data(t, "fxshow");
      for (i in n.queue || (null == (a = C._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
          a.unqueued || l()
        }), a.unqueued++, c.always(function() {
          c.always(function() {
            a.unqueued--, C.queue(t, "fx").length || a.empty.fire()
          })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (u = C.css(t, "display")) ? C._data(t, "olddisplay") || Ze(t.nodeName) : u) && "none" === C.css(t, "float") && (g.inlineBlockNeedsLayout && "inline" !== Ze(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", g.shrinkWrapBlocks() || c.always(function() {
          h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        })), e)
        if (r = e[i], kt.exec(r)) {
          if (delete e[i], s = s || "toggle" === r, r === (f ? "hide" : "show")) {
            if ("show" !== r || !p || void 0 === p[i]) continue;
            f = !0
          }
          d[i] = p && p[i] || C.style(t, i)
        } else u = void 0;
      if (C.isEmptyObject(d)) "inline" === ("none" === u ? Ze(t.nodeName) : u) && (h.display = u);
      else
        for (i in p ? "hidden" in p && (f = p.hidden) : p = C._data(t, "fxshow", {}), s && (p.hidden = !f), f ? C(t).show() : c.done(function() {
            C(t).hide()
          }), c.done(function() {
            for (var e in C._removeData(t, "fxshow"), d) C.style(t, e, d[e])
          }), d) o = Nt(f ? p[i] : 0, i, c), i in p || (p[i] = o.start, f && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
    }],
    prefilter: function(e, t) {
      t ? F.prefilters.unshift(e) : F.prefilters.push(e)
    }
  }), C.speed = function(e, t, n) {
    var i = e && "object" == typeof e ? C.extend({}, e) : {
      complete: n || !n && t || C.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !C.isFunction(t) && t
    };
    return i.duration = C.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in C.fx.speeds ? C.fx.speeds[i.duration] : C.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
      C.isFunction(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
    }, i
  }, C.fn.extend({
    fadeTo: function(e, t, n, i) {
      return this.filter(he).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, i)
    },
    animate: function(t, e, n, i) {
      function r() {
        var e = F(this, C.extend({}, t), o);
        (s || C._data(this, "finish")) && e.stop(!0)
      }
      var s = C.isEmptyObject(t),
        o = C.speed(e, n, i);
      return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
    },
    stop: function(r, e, s) {
      function o(e) {
        var t = e.stop;
        delete e.stop, t(s)
      }
      return "string" != typeof r && (s = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
        var e = !0,
          t = null != r && r + "queueHooks",
          n = C.timers,
          i = C._data(this);
        if (t) i[t] && i[t].stop && o(i[t]);
        else
          for (t in i) i[t] && i[t].stop && $t.test(t) && o(i[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(s), e = !1, n.splice(t, 1));
        !e && s || C.dequeue(this, r)
      })
    },
    finish: function(o) {
      return !1 !== o && (o = o || "fx"), this.each(function() {
        var e, t = C._data(this),
          n = t[o + "queue"],
          i = t[o + "queueHooks"],
          r = C.timers,
          s = n ? n.length : 0;
        for (t.finish = !0, C.queue(this, o, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === o && (r[e].anim.stop(!0), r.splice(e, 1));
        for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish
      })
    }
  }), C.each(["toggle", "show", "hide"], function(e, i) {
    var r = C.fn[i];
    C.fn[i] = function(e, t, n) {
      return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(St(i, !0), e, t, n)
    }
  }), C.each({
    slideDown: St("show"),
    slideUp: St("hide"),
    slideToggle: St("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function(e, i) {
    C.fn[e] = function(e, t, n) {
      return this.animate(i, e, t, n)
    }
  }), C.timers = [], C.fx.tick = function() {
    var e, t = C.timers,
      n = 0;
    for (E = C.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
    t.length || C.fx.stop(), E = void 0
  }, C.fx.timer = function(e) {
    C.timers.push(e), e() ? C.fx.start() : C.timers.pop()
  }, C.fx.interval = 13, C.fx.start = function() {
    Et = Et || w.setInterval(C.fx.tick, C.fx.interval)
  }, C.fx.stop = function() {
    w.clearInterval(Et), Et = null
  }, C.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, C.fn.delay = function(i, e) {
    return i = C.fx && C.fx.speeds[i] || i, this.queue(e = e || "fx", function(e, t) {
      var n = w.setTimeout(e, i);
      t.stop = function() {
        w.clearTimeout(n)
      }
    })
  }, k = p.createElement("input"), j = p.createElement("div"), $ = p.createElement("select"), e = $.appendChild(p.createElement("option")), (j = p.createElement("div")).setAttribute("className", "t"), j.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", O = j.getElementsByTagName("a")[0], k.setAttribute("type", "checkbox"), j.appendChild(k), (O = j.getElementsByTagName("a")[0]).style.cssText = "top:1px", g.getSetAttribute = "t" !== j.className, g.style = /top/.test(O.getAttribute("style")), g.hrefNormalized = "/a" === O.getAttribute("href"), g.checkOn = !!k.value, g.optSelected = e.selected, g.enctype = !!p.createElement("form").enctype, $.disabled = !0, g.optDisabled = !e.disabled, (k = p.createElement("input")).setAttribute("value", ""), g.input = "" === k.getAttribute("value"), k.value = "t", k.setAttribute("type", "radio"), g.radioValue = "t" === k.value;
  var At = /\r/g,
    Dt = /[\x20\t\r\n\f]+/g;
  C.fn.extend({
    val: function(t) {
      var n, e, i, r = this[0];
      return arguments.length ? (i = C.isFunction(t), this.each(function(e) {
        1 === this.nodeType && (null == (e = i ? t.call(this, e, C(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : C.isArray(e) && (e = C.map(e, function(e) {
          return null == e ? "" : e + ""
        })), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
      })) : r ? (n = C.valHooks[r.type] || C.valHooks[r.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(r, "value")) ? e : "string" == typeof(e = r.value) ? e.replace(At, "") : null == e ? "" : e : void 0
    }
  }), C.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = C.find.attr(e, "value");
          return null != t ? t : C.trim(C.text(e)).replace(Dt, " ")
        }
      },
      select: {
        get: function(e) {
          for (var t, n = e.options, i = e.selectedIndex, r = "select-one" === e.type || i < 0, s = r ? null : [], o = r ? i + 1 : n.length, a = i < 0 ? o : r ? i : 0; a < o; a++)
            if (((t = n[a]).selected || a === i) && (g.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) && (!t.parentNode.disabled || !C.nodeName(t.parentNode, "optgroup"))) {
              if (t = C(t).val(), r) return t;
              s.push(t)
            } return s
        },
        set: function(e, t) {
          for (var n, i, r = e.options, s = C.makeArray(t), o = r.length; o--;)
            if (i = r[o], -1 < C.inArray(C.valHooks.option.get(i), s)) try {
              i.selected = n = !0
            } catch (e) {
              i.scrollHeight
            } else i.selected = !1;
          return n || (e.selectedIndex = -1), r
        }
      }
    }
  }), C.each(["radio", "checkbox"], function() {
    C.valHooks[this] = {
      set: function(e, t) {
        if (C.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
      }
    }, g.checkOn || (C.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var S, jt, N = C.expr.attrHandle,
    Pt = /^(?:checked|selected)$/i,
    A = g.getSetAttribute,
    Ot = g.input,
    qt = (C.fn.extend({
      attr: function(e, t) {
        return h(this, C.attr, e, t, 1 < arguments.length)
      },
      removeAttr: function(e) {
        return this.each(function() {
          C.removeAttr(this, e)
        })
      }
    }), C.extend({
      attr: function(e, t, n) {
        var i, r, s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === s && C.isXMLDoc(e) || (t = t.toLowerCase(), r = C.attrHooks[t] || (C.expr.match.bool.test(t) ? jt : S)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : !(r && "get" in r && null !== (i = r.get(e, t))) && null == (i = C.find.attr(e, t)) ? void 0 : i)
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            var n;
            if (!g.radioValue && "radio" === t && C.nodeName(e, "input")) return n = e.value, e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      },
      removeAttr: function(e, t) {
        var n, i, r = 0,
          s = t && t.match(_);
        if (s && 1 === e.nodeType)
          for (; n = s[r++];) i = C.propFix[n] || n, C.expr.match.bool.test(n) ? Ot && A || !Pt.test(n) ? e[i] = !1 : e[C.camelCase("default-" + n)] = e[i] = !1 : C.attr(e, n, ""), e.removeAttribute(A ? n : i)
      }
    }), jt = {
      set: function(e, t, n) {
        return !1 === t ? C.removeAttr(e, n) : Ot && A || !Pt.test(n) ? e.setAttribute(!A && C.propFix[n] || n, n) : e[C.camelCase("default-" + n)] = e[n] = !0, n
      }
    }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var s = N[t] || C.find.attr;
      Ot && A || !Pt.test(t) ? N[t] = function(e, t, n) {
        var i, r;
        return n || (r = N[t], N[t] = i, i = null != s(e, t, n) ? t.toLowerCase() : null, N[t] = r), i
      } : N[t] = function(e, t, n) {
        if (!n) return e[C.camelCase("default-" + t)] ? t.toLowerCase() : null
      }
    }), Ot && A || (C.attrHooks.value = {
      set: function(e, t, n) {
        if (!C.nodeName(e, "input")) return S && S.set(e, t, n);
        e.defaultValue = t
      }
    }), A || (S = {
      set: function(e, t, n) {
        var i = e.getAttributeNode(n);
        if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
      }
    }, N.id = N.name = N.coords = function(e, t, n) {
      if (!n) return (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
    }, C.valHooks.button = {
      get: function(e, t) {
        e = e.getAttributeNode(t);
        if (e && e.specified) return e.value
      },
      set: S.set
    }, C.attrHooks.contenteditable = {
      set: function(e, t, n) {
        S.set(e, "" !== t && t, n)
      }
    }, C.each(["width", "height"], function(e, n) {
      C.attrHooks[n] = {
        set: function(e, t) {
          if ("" === t) return e.setAttribute(n, "auto"), t
        }
      }
    })), g.style || (C.attrHooks.style = {
      get: function(e) {
        return e.style.cssText || void 0
      },
      set: function(e, t) {
        return e.style.cssText = t + ""
      }
    }), /^(?:input|select|textarea|button|object)$/i),
    Lt = /^(?:a|area)$/i,
    Rt = (C.fn.extend({
      prop: function(e, t) {
        return h(this, C.prop, e, t, 1 < arguments.length)
      },
      removeProp: function(e) {
        return e = C.propFix[e] || e, this.each(function() {
          try {
            this[e] = void 0, delete this[e]
          } catch (e) {}
        })
      }
    }), C.extend({
      prop: function(e, t, n) {
        var i, r, s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s) return 1 === s && C.isXMLDoc(e) || (t = C.propFix[t] || t, r = C.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = C.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : qt.test(e.nodeName) || Lt.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), g.hrefNormalized || C.each(["href", "src"], function(e, t) {
      C.propHooks[t] = {
        get: function(e) {
          return e.getAttribute(t, 4)
        }
      }
    }), g.optSelected || (C.propHooks.selected = {
      get: function(e) {
        e = e.parentNode;
        return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
      },
      set: function(e) {
        e = e.parentNode;
        e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
      }
    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      C.propFix[this.toLowerCase()] = this
    }), g.enctype || (C.propFix.enctype = "encoding"), /[\t\r\n\f]/g);

  function D(e) {
    return C.attr(e, "class") || ""
  }
  C.fn.extend({
    addClass: function(t) {
      var e, n, i, r, s, o, a = 0;
      if (C.isFunction(t)) return this.each(function(e) {
        C(this).addClass(t.call(this, e, D(this)))
      });
      if ("string" == typeof t && t)
        for (e = t.match(_) || []; n = this[a++];)
          if (o = D(n), i = 1 === n.nodeType && (" " + o + " ").replace(Rt, " ")) {
            for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
            o !== (o = C.trim(i)) && C.attr(n, "class", o)
          } return this
    },
    removeClass: function(t) {
      var e, n, i, r, s, o, a = 0;
      if (C.isFunction(t)) return this.each(function(e) {
        C(this).removeClass(t.call(this, e, D(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof t && t)
        for (e = t.match(_) || []; n = this[a++];)
          if (o = D(n), i = 1 === n.nodeType && (" " + o + " ").replace(Rt, " ")) {
            for (s = 0; r = e[s++];)
              for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
            o !== (o = C.trim(i)) && C.attr(n, "class", o)
          } return this
    },
    toggleClass: function(r, t) {
      var s = typeof r;
      return "boolean" == typeof t && "string" == s ? t ? this.addClass(r) : this.removeClass(r) : C.isFunction(r) ? this.each(function(e) {
        C(this).toggleClass(r.call(this, e, D(this), t), t)
      }) : this.each(function() {
        var e, t, n, i;
        if ("string" == s)
          for (t = 0, n = C(this), i = r.match(_) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
        else void 0 !== r && "boolean" != s || ((e = D(this)) && C._data(this, "__className__", e), C.attr(this, "class", !e && !1 !== r && C._data(this, "__className__") || ""))
      })
    },
    hasClass: function(e) {
      for (var t, n = 0, i = " " + e + " "; t = this[n++];)
        if (1 === t.nodeType && -1 < (" " + D(t) + " ").replace(Rt, " ").indexOf(i)) return !0;
      return !1
    }
  }), C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
    C.fn[n] = function(e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
    }
  }), C.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  });
  var j = w.location,
    Mt = C.now(),
    It = /\?/,
    Ht = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g,
    Wt = (C.parseJSON = function(e) {
      var r, s, t;
      return w.JSON && w.JSON.parse ? w.JSON.parse(e + "") : (s = null, (t = C.trim(e + "")) && !C.trim(t.replace(Ht, function(e, t, n, i) {
        return 0 === (s = r && t ? 0 : s) ? e : (r = n || t, s += !i - !n, "")
      })) ? Function("return " + t)() : C.error("Invalid JSON: " + e))
    }, C.parseXML = function(e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        w.DOMParser ? t = (new w.DOMParser).parseFromString(e, "text/xml") : ((t = new w.ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
      } catch (e) {
        t = void 0
      }
      return t && t.documentElement && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
    }, /#.*$/),
    Vt = /([?&])_=[^&]*/,
    zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Bt = /^(?:GET|HEAD)$/,
    Ut = /^\/\//,
    Xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Qt = {},
    Yt = {},
    Gt = "*/".concat("*"),
    Jt = j.href,
    P = Xt.exec(Jt.toLowerCase()) || [];

  function Kt(s) {
    return function(e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n, i = 0,
        r = e.toLowerCase().match(_) || [];
      if (C.isFunction(t))
        for (; n = r[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (s[n] = s[n] || []).unshift(t)) : (s[n] = s[n] || []).push(t)
    }
  }

  function Zt(t, i, r, s) {
    var o = {},
      a = t === Yt;

    function l(e) {
      var n;
      return o[e] = !0, C.each(t[e] || [], function(e, t) {
        t = t(i, r, s);
        return "string" != typeof t || a || o[t] ? a ? !(n = t) : void 0 : (i.dataTypes.unshift(t), l(t), !1)
      }), n
    }
    return l(i.dataTypes[0]) || !o["*"] && l("*")
  }

  function en(e, t) {
    var n, i, r = C.ajaxSettings.flatOptions || {};
    for (i in t) void 0 !== t[i] && ((r[i] ? e : n = n || {})[i] = t[i]);
    return n && C.extend(!0, e, n), e
  }

  function tn(e) {
    if (!C.contains(e.ownerDocument || p, e)) return !0;
    for (; e && 1 === e.nodeType;) {
      if ("none" === ((t = e).style && t.style.display || C.css(t, "display")) || "hidden" === e.type) return !0;
      e = e.parentNode
    }
    var t;
    return !1
  }
  C.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Jt,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(P[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Gt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": C.parseJSON,
        "text xml": C.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? en(en(e, C.ajaxSettings), t) : en(C.ajaxSettings, e)
    },
    ajaxPrefilter: Kt(Qt),
    ajaxTransport: Kt(Yt),
    ajax: function(e, t) {
      "object" == typeof e && (t = e, e = void 0);
      var n, l, u, c, d, h, i, f = C.ajaxSetup({}, t = t || {}),
        p = f.context || f,
        m = f.context && (p.nodeType || p.jquery) ? C(p) : C.event,
        g = C.Deferred(),
        v = C.Callbacks("once memory"),
        y = f.statusCode || {},
        r = {},
        s = {},
        b = 0,
        o = "canceled",
        x = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (2 === b) {
              if (!i)
                for (i = {}; t = zt.exec(u);) i[t[1].toLowerCase()] = t[2];
              t = i[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function() {
            return 2 === b ? u : null
          },
          setRequestHeader: function(e, t) {
            var n = e.toLowerCase();
            return b || (e = s[n] = s[n] || e, r[e] = t), this
          },
          overrideMimeType: function(e) {
            return b || (f.mimeType = e), this
          },
          statusCode: function(e) {
            if (e)
              if (b < 2)
                for (var t in e) y[t] = [y[t], e[t]];
              else x.always(e[x.status]);
            return this
          },
          abort: function(e) {
            e = e || o;
            return h && h.abort(e), a(0, e), this
          }
        };
      if (g.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, f.url = ((e || f.url || Jt) + "").replace(Wt, "").replace(Ut, P[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = C.trim(f.dataType || "*").toLowerCase().match(_) || [""], null == f.crossDomain && (e = Xt.exec(f.url.toLowerCase()), f.crossDomain = !(!e || e[1] === P[1] && e[2] === P[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (P[3] || ("http:" === P[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = C.param(f.data, f.traditional)), Zt(Qt, f, t, x), 2 !== b) {
        for (n in (d = C.event && f.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Bt.test(f.type), l = f.url, f.hasContent || (f.data && (l = f.url += (It.test(l) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = Vt.test(l) ? l.replace(Vt, "$1_=" + Mt++) : l + (It.test(l) ? "&" : "?") + "_=" + Mt++)), f.ifModified && (C.lastModified[l] && x.setRequestHeader("If-Modified-Since", C.lastModified[l]), C.etag[l] && x.setRequestHeader("If-None-Match", C.etag[l])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : f.accepts["*"]), f.headers) x.setRequestHeader(n, f.headers[n]);
        if (f.beforeSend && (!1 === f.beforeSend.call(p, x, f) || 2 === b)) return x.abort();
        for (n in o = "abort", {
            success: 1,
            error: 1,
            complete: 1
          }) x[n](f[n]);
        if (h = Zt(Yt, f, t, x)) {
          if (x.readyState = 1, d && m.trigger("ajaxSend", [x, f]), 2 === b) return x;
          f.async && 0 < f.timeout && (c = w.setTimeout(function() {
            x.abort("timeout")
          }, f.timeout));
          try {
            b = 1, h.send(r, a)
          } catch (e) {
            if (!(b < 2)) throw e;
            a(-1, e)
          }
        } else a(-1, "No Transport")
      }
      return x;

      function a(e, t, n, i) {
        var r, s, o, a = t;
        2 !== b && (b = 2, c && w.clearTimeout(c), h = void 0, u = i || "", x.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (o = function(e, t, n) {
          for (var i, r, s, o, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          if (r)
            for (o in a)
              if (a[o] && a[o].test(r)) {
                l.unshift(o);
                break
              } if (l[0] in n) s = l[0];
          else {
            for (o in n) {
              if (!l[0] || e.converters[o + " " + l[0]]) {
                s = o;
                break
              }
              i = i || o
            }
            s = s || i
          }
          if (s) return s !== l[0] && l.unshift(s), n[s]
        }(f, x, n)), o = function(e, t, n, i) {
          var r, s, o, a, l, u = {},
            c = e.dataTypes.slice();
          if (c[1])
            for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
          for (s = c.shift(); s;)
            if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift())
              if ("*" === s) s = l;
              else if ("*" !== l && l !== s) {
            if (!(o = u[l + " " + s] || u["* " + s]))
              for (r in u)
                if ((a = r.split(" "))[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                  !0 === o ? o = u[r] : !0 !== u[r] && (s = a[0], c.unshift(a[1]));
                  break
                } if (!0 !== o)
              if (o && e.throws) t = o(t);
              else try {
                t = o(t)
              } catch (e) {
                return {
                  state: "parsererror",
                  error: o ? e : "No conversion from " + l + " to " + s
                }
              }
          }
          return {
            state: "success",
            data: t
          }
        }(f, o, x, i), i ? (f.ifModified && ((n = x.getResponseHeader("Last-Modified")) && (C.lastModified[l] = n), (n = x.getResponseHeader("etag")) && (C.etag[l] = n)), 204 === e || "HEAD" === f.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = o.state, r = o.data, i = !(s = o.error))) : (s = a, !e && a || (a = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || a) + "", i ? g.resolveWith(p, [r, a, x]) : g.rejectWith(p, [x, a, s]), x.statusCode(y), y = void 0, d && m.trigger(i ? "ajaxSuccess" : "ajaxError", [x, f, i ? r : s]), v.fireWith(p, [x, a]), d && (m.trigger("ajaxComplete", [x, f]), --C.active || C.event.trigger("ajaxStop")))
      }
    },
    getJSON: function(e, t, n) {
      return C.get(e, t, n, "json")
    },
    getScript: function(e, t) {
      return C.get(e, void 0, t, "script")
    }
  }), C.each(["get", "post"], function(e, r) {
    C[r] = function(e, t, n, i) {
      return C.isFunction(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({
        url: e,
        type: r,
        dataType: i,
        data: t,
        success: n
      }, C.isPlainObject(e) && e))
    }
  }), C._evalUrl = function(e) {
    return C.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      throws: !0
    })
  }, C.fn.extend({
    wrapAll: function(t) {
      var e;
      return C.isFunction(t) ? this.each(function(e) {
        C(this).wrapAll(t.call(this, e))
      }) : (this[0] && (e = C(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
        return e
      }).append(this)), this)
    },
    wrapInner: function(n) {
      return C.isFunction(n) ? this.each(function(e) {
        C(this).wrapInner(n.call(this, e))
      }) : this.each(function() {
        var e = C(this),
          t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n)
      })
    },
    wrap: function(t) {
      var n = C.isFunction(t);
      return this.each(function(e) {
        C(this).wrapAll(n ? t.call(this, e) : t)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        C.nodeName(this, "body") || C(this).replaceWith(this.childNodes)
      }).end()
    }
  }), C.expr.filters.hidden = function(e) {
    return g.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : tn(e)
  }, C.expr.filters.visible = function(e) {
    return !C.expr.filters.hidden(e)
  };
  var nn = /%20/g,
    rn = /\[\]$/,
    sn = /\r?\n/g,
    on = /^(?:submit|button|image|reset|file)$/i,
    an = /^(?:input|select|textarea|keygen)/i;
  C.param = function(e, t) {
    function n(e, t) {
      t = C.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
    }
    var i, r = [];
    if (void 0 === t && (t = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
      n(this.name, this.value)
    });
    else
      for (i in e) ! function n(i, e, r, s) {
        if (C.isArray(e)) C.each(e, function(e, t) {
          r || rn.test(i) ? s(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, s)
        });
        else if (r || "object" !== C.type(e)) s(i, e);
        else
          for (var t in e) n(i + "[" + t + "]", e[t], r, s)
      }(i, e[i], t, n);
    return r.join("&").replace(nn, "+")
  }, C.fn.extend({
    serialize: function() {
      return C.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = C.prop(this, "elements");
        return e ? C.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !C(this).is(":disabled") && an.test(this.nodeName) && !on.test(e) && (this.checked || !me.test(e))
      }).map(function(e, t) {
        var n = C(this).val();
        return null == n ? null : C.isArray(n) ? C.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(sn, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(sn, "\r\n")
        }
      }).get()
    }
  }), C.ajaxSettings.xhr = void 0 !== w.ActiveXObject ? function() {
    return this.isLocal ? dn() : 8 < p.documentMode ? cn() : /^(get|post|head|put|delete|options)$/i.test(this.type) && cn() || dn()
  } : cn;
  var ln = 0,
    un = {},
    O = C.ajaxSettings.xhr();

  function cn() {
    try {
      return new w.XMLHttpRequest
    } catch (e) {}
  }

  function dn() {
    try {
      return new w.ActiveXObject("Microsoft.XMLHTTP")
    } catch (e) {}
  }
  w.attachEvent && w.attachEvent("onunload", function() {
    for (var e in un) un[e](void 0, !0)
  }), g.cors = !!O && "withCredentials" in O, (O = g.ajax = !!O) && C.ajaxTransport(function(l) {
    var u;
    if (!l.crossDomain || g.cors) return {
      send: function(e, s) {
        var t, o = l.xhr(),
          a = ++ln;
        if (o.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields)
          for (t in l.xhrFields) o[t] = l.xhrFields[t];
        for (t in l.mimeType && o.overrideMimeType && o.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) void 0 !== e[t] && o.setRequestHeader(t, e[t] + "");
        o.send(l.hasContent && l.data || null), u = function(e, t) {
          var n, i, r;
          if (u && (t || 4 === o.readyState))
            if (delete un[a], u = void 0, o.onreadystatechange = C.noop, t) 4 !== o.readyState && o.abort();
            else {
              r = {}, n = o.status, "string" == typeof o.responseText && (r.text = o.responseText);
              try {
                i = o.statusText
              } catch (e) {
                i = ""
              }
              n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = r.text ? 200 : 404
            } r && s(n, i, r, o.getAllResponseHeaders())
        }, l.async ? 4 === o.readyState ? w.setTimeout(u) : o.onreadystatechange = un[a] = u : u()
      },
      abort: function() {
        u && u(void 0, !0)
      }
    }
  }), C.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(e) {
        return C.globalEval(e), e
      }
    }
  }), C.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
  }), C.ajaxTransport("script", function(t) {
    var i, r;
    if (t.crossDomain) return r = p.head || C("head")[0] || p.documentElement, {
      send: function(e, n) {
        (i = p.createElement("script")).async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(e, t) {
          !t && i.readyState && !/loaded|complete/.test(i.readyState) || (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || n(200, "success"))
        }, r.insertBefore(i, r.firstChild)
      },
      abort: function() {
        i && i.onload(void 0, !0)
      }
    }
  });
  var hn = [],
    fn = /(=)\?(?=&|$)|\?\?/,
    pn = (C.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = hn.pop() || C.expando + "_" + Mt++;
        return this[e] = !0, e
      }
    }), C.ajaxPrefilter("json jsonp", function(e, t, n) {
      var i, r, s, o = !1 !== e.jsonp && (fn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && fn.test(e.data) && "data");
      if (o || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(fn, "$1" + i) : !1 !== e.jsonp && (e.url += (It.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
        return s || C.error(i + " was not called"), s[0]
      }, e.dataTypes[0] = "json", r = w[i], w[i] = function() {
        s = arguments
      }, n.always(function() {
        void 0 === r ? C(w).removeProp(i) : w[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, hn.push(i)), s && C.isFunction(r) && r(s[0]), s = r = void 0
      }), "script"
    }), C.parseHTML = function(e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || p;
      var i = Y.exec(e),
        n = !n && [];
      return i ? [t.createElement(i[1])] : (i = Ee([e], t, n), n && n.length && C(n).remove(), C.merge([], i.childNodes))
    }, C.fn.load);

  function mn(e) {
    return C.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
  }
  C.fn.load = function(e, t, n) {
    var i, r, s, o, a;
    return "string" != typeof e && pn ? pn.apply(this, arguments) : (o = this, -1 < (a = e.indexOf(" ")) && (i = C.trim(e.slice(a, e.length)), e = e.slice(0, a)), C.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < o.length && C.ajax({
      url: e,
      type: r || "GET",
      dataType: "html",
      data: t
    }).done(function(e) {
      s = arguments, o.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
    }).always(n && function(e, t) {
      o.each(function() {
        n.apply(this, s || [e.responseText, t, e])
      })
    }), this)
  }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    C.fn[t] = function(e) {
      return this.on(t, e)
    }
  }), C.expr.filters.animated = function(t) {
    return C.grep(C.timers, function(e) {
      return t === e.elem
    }).length
  }, C.offset = {
    setOffset: function(e, t, n) {
      var i, r, s, o, a = C.css(e, "position"),
        l = C(e),
        u = {};
      "static" === a && (e.style.position = "relative"), s = l.offset(), i = C.css(e, "top"), o = C.css(e, "left"), a = ("absolute" === a || "fixed" === a) && -1 < C.inArray("auto", [i, o]) ? (r = (a = l.position()).top, a.left) : (r = parseFloat(i) || 0, parseFloat(o) || 0), null != (t = C.isFunction(t) ? t.call(e, n, C.extend({}, s)) : t).top && (u.top = t.top - s.top + r), null != t.left && (u.left = t.left - s.left + a), "using" in t ? t.using.call(e, u) : l.css(u)
    }
  }, C.fn.extend({
    offset: function(t) {
      var e, n, i, r;
      return arguments.length ? void 0 === t ? this : this.each(function(e) {
        C.offset.setOffset(this, t, e)
      }) : (n = {
        top: 0,
        left: 0
      }, (r = (i = this[0]) && i.ownerDocument) ? (e = r.documentElement, C.contains(e, i) ? (void 0 !== i.getBoundingClientRect && (n = i.getBoundingClientRect()), i = mn(r), {
        top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
        left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
      }) : n) : void 0)
    },
    position: function() {
      var e, t, n, i;
      if (this[0]) return n = {
        top: 0,
        left: 0
      }, i = this[0], "fixed" === C.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), (n = C.nodeName(e[0], "html") ? n : e.offset()).top += C.css(e[0], "borderTopWidth", !0), n.left += C.css(e[0], "borderLeftWidth", !0)), {
        top: t.top - n.top - C.css(i, "marginTop", !0),
        left: t.left - n.left - C.css(i, "marginLeft", !0)
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent; e && !C.nodeName(e, "html") && "static" === C.css(e, "position");) e = e.offsetParent;
        return e || ut
      })
    }
  }), C.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(t, r) {
    var s = /Y/.test(r);
    C.fn[t] = function(e) {
      return h(this, function(e, t, n) {
        var i = mn(e);
        if (void 0 === n) return i ? r in i ? i[r] : i.document.documentElement[t] : e[t];
        i ? i.scrollTo(s ? C(i).scrollLeft() : n, s ? n : C(i).scrollTop()) : e[t] = n
      }, t, e, arguments.length, null)
    }
  }), C.each(["top", "left"], function(e, n) {
    C.cssHooks[n] = dt(g.pixelPosition, function(e, t) {
      if (t) return t = f(e, n), lt.test(t) ? C(e).position()[n] + "px" : t
    })
  }), C.each({
    Height: "height",
    Width: "width"
  }, function(s, o) {
    C.each({
      padding: "inner" + s,
      content: o,
      "": "outer" + s
    }, function(i, e) {
      C.fn[e] = function(e, t) {
        var n = arguments.length && (i || "boolean" != typeof e),
          r = i || (!0 === e || !0 === t ? "margin" : "border");
        return h(this, function(e, t, n) {
          var i;
          return C.isWindow(e) ? e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? C.css(e, t, r) : C.style(e, t, n, r)
        }, o, n ? e : void 0, n, null)
      }
    })
  }), C.fn.extend({
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, n, i) {
      return this.on(t, e, n, i)
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  }), C.fn.size = function() {
    return this.length
  }, C.fn.andSelf = C.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return C
  });
  var gn = w.jQuery,
    vn = w.$;
  return C.noConflict = function(e) {
    return w.$ === C && (w.$ = vn), e && w.jQuery === C && (w.jQuery = gn), C
  }, q || (w.jQuery = w.$ = C), C
}),
function(s) {
  "use strict";
  var o, n;
  void 0 === s ? "console" in window && window.console.info("Too much lightness, Featherlight needs jQuery.") : (o = s.featherlight = function(e, t) {
    if (this.constructor === o) this.id = o.id++;
    else {
      var n;
      if ("string" == typeof e || !1 != e instanceof s) return (n = (new o).setup(e, t)).config.open.call(n), n;
      t = s.extend({}, o.defaults, e || {}), s(t.selector, t.context).featherlight()
    }
  }, n = function(e) {
    var t;
    27 !== e.keyCode || e.isDefaultPrevented() || (t = o.current()) && t.config.closeOnEsc && (t.$instance.find("." + t.config.namespace + "-close:first").click(), e.preventDefault())
  }, s.extend(o, {
    id: 0,
    defaults: {
      autostart: !0,
      namespace: "featherlight",
      selector: "[data-featherlight]",
      context: "body",
      type: {
        image: !1,
        ajax: !1
      },
      targetAttr: "data-featherlight",
      variant: null,
      resetCss: !1,
      background: null,
      openTrigger: "click",
      closeTrigger: "click",
      openSpeed: 250,
      closeSpeed: 250,
      closeOnClick: "background",
      closeOnEsc: !0,
      closeIcon: "&#10005;",
      beforeOpen: s.noop,
      beforeClose: s.noop,
      afterOpen: s.noop,
      afterClose: s.noop,
      contentFilters: ["jquery", "image", "html", "ajax"],
      open: function(e) {
        var t = this.config.beforeOpen.call(this, e);
        return !1 !== (t = !1 !== t ? this.open(e) : t) && this.config.afterOpen.call(this, e), t
      },
      close: function(e) {
        !1 !== this.config.beforeClose.call(this, e) && this.close(e)
      }
    },
    methods: {
      setup: function(e, n) {
        "object" != typeof e || e instanceof s != !1 || n || (n = e, e = void 0);
        var t = (n = s.extend({}, o.defaults, n)).resetCss ? n.namespace + "-reset" : n.namespace,
          t = s(n.background || '<div class="' + t + '"><div class="' + t + '-content"><span class="' + t + "-close-icon " + n.namespace + '-close">' + n.closeIcon + "</span></div></div>"),
          i = this;
        return s.extend(i, {
          config: n,
          target: e,
          $instance: t.clone().addClass(n.variant)
        }), i.$instance.on(n.closeTrigger + "." + n.namespace, function(e) {
          var t = s(e.target);
          ("background" === n.closeOnClick && t.is("." + n.namespace) || "anywhere" === n.closeOnClick || t.is("." + n.namespace + "-close")) && (e.preventDefault(), n.close.call(i))
        }), this
      },
      attach: function(e, t, n) {
        var i = {};
        return s.each(e[0].attributes, function() {
          var e = this.name.match(/^data-featherlight-(.*)/);
          if (e) {
            var t = this.value;
            try {
              t = s.parseJSON(t)
            } catch (e) {}
            i[s.camelCase(e[1])] = t
          }
        }), this.$elm = e, this.setup(t, s.extend(i, n)), e.on(this.config.openTrigger + "." + this.config.namespace, s.proxy(this.config.open, this)), this
      },
      getContent: function() {
        var e, t, n = this,
          i = n.target || n.$elm.attr(n.config.targetAttr) || "";
        for (t in n.config.type) !0 === n.config.type[t] && (e = o.contentFilters[t]);
        if (!e && i in o.contentFilters && (e = o.contentFilters[i], i = n.target && n.$elm.attr(n.config.targetAttr)), i = i || n.$elm.attr("href") || "", !e) {
          var r = i,
            i = null;
          if (s.each(n.config.contentFilters, function() {
              return e = o.contentFilters[this], !(i = !(i = e.test ? e.test(r) : i) && e.regex && r.match && r.match(e.regex) ? r : i)
            }), !i) return "console" in window && window.console.error("Featherlight: no content filter found " + (r ? ' for "' + r + '"' : " (no target specified)")), !1
        }
        return e.process.call(n, i)
      },
      setContent: function(e) {
        var t = this;
        (e.is("iframe") || 0 < s("iframe", e).length) && t.$instance.addClass(t.config.namespace + "-iframe"), t.$content = e.clone().addClass(t.config.namespace + "-inner"), t.$instance.find("." + t.config.namespace + "-inner").remove(), t.$instance.find("." + t.config.namespace + "-content").append(t.$content)
      },
      open: function(e) {
        var t = this,
          e = (e && e.preventDefault(), this.getContent());
        if (!e) return !1;
        t.constructor._opened.add(t._openedCallback = function(e) {
          0 < t.$instance.closest("body").length && (e.currentFeatherlight = t)
        }), this.config.closeOnEsc && n && (s(document).bind("keyup." + o.defaults.namespace, n), n = null), this.setContent(e), this.$instance.appendTo("body").fadeIn(this.config.openSpeed)
      },
      close: function(e) {
        var t = this;
        t.constructor._opened.remove(t._openedCallback), t.$instance.fadeOut(t.config.closeSpeed, function() {
          t.$instance.detach(), t.config.afterClose.call(t, e)
        })
      }
    },
    contentFilters: {
      jquery: {
        regex: /^[#.]\w/,
        test: function(e) {
          return e instanceof s && e
        },
        process: function(e) {
          return s(e)
        }
      },
      image: {
        regex: /\.(png|jpg|jpeg|gif|tiff|bmp)(\?\S*)?$/i,
        process: function(e) {
          return s('<img src="' + e + '" alt="" class="' + this.config.namespace + '-image" />')
        }
      },
      html: {
        regex: /^\s*<[\w!][^<]*>/,
        process: function(e) {
          return s(e)
        }
      },
      ajax: {
        regex: /./,
        process: function(e) {
          var n = this,
            i = s("<div></div>").load(e, function(e, t) {
              "error" !== t && s.featherlight(i.html(), s.extend({}, n.config, {
                type: {
                  html: !0
                }
              }))
            })
        }
      }
    },
    current: function() {
      var e = {};
      return this._opened.fire(e), e.currentFeatherlight
    },
    close: function() {
      var e = o.current();
      e && e.config.close.call(e)
    },
    _opened: s.Callbacks()
  }), o.prototype = s.extend({
    constructor: o
  }, o.methods), s.fn.featherlight = function(e, t) {
    return this.each(function() {
      (new o).attach(s(this), t, e)
    }), this
  }, s(document).ready(function() {
    var e = o.defaults;
    e.autostart && s(e.selector, e.context).featherlight()
  }))
}(jQuery),
function(s) {
  "use strict";

  function r(e, t) {
    this.$element = s(e), this.options = s.extend({}, s.fn.collapse.defaults, t), this.options.parent && (this.$parent = s(this.options.parent)), this.options.toggle && this.toggle()
  }
  r.prototype = {
    constructor: r,
    dimension: function() {
      return this.$element.hasClass("width") ? "width" : "height"
    },
    show: function() {
      var e, t, n, i;
      if (!this.transitioning && !this.$element.hasClass("in")) {
        if (e = this.dimension(), t = s.camelCase(["scroll", e].join("-")), (n = this.$parent && this.$parent.find("> .accordion-group > .in")) && n.length) {
          if ((i = n.data("collapse")) && i.transitioning) return;
          n.collapse("hide"), i || n.data("collapse", null)
        }
        this.$element[e](0), this.transition("addClass", s.Event("show"), "shown"), s.support.transition && this.$element[e](this.$element[0][t])
      }
    },
    hide: function() {
      var e;
      !this.transitioning && this.$element.hasClass("in") && (e = this.dimension(), this.reset(this.$element[e]()), this.transition("removeClass", s.Event("hide"), "hidden"), this.$element[e](0))
    },
    reset: function(e) {
      var t = this.dimension();
      return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[null !== e ? "addClass" : "removeClass"]("collapse"), this
    },
    transition: function(e, t, n) {
      function i() {
        "show" == t.type && r.reset(), r.transitioning = 0, r.$element.trigger(n)
      }
      var r = this;
      this.$element.trigger(t), t.isDefaultPrevented() || (this.transitioning = 1, this.$element[e]("in"), s.support.transition && this.$element.hasClass("collapse") ? this.$element.one(s.support.transition.end, i) : i())
    },
    toggle: function() {
      this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
  };
  var e = s.fn.collapse;
  s.fn.collapse = function(i) {
    return this.each(function() {
      var e = s(this),
        t = e.data("collapse"),
        n = s.extend({}, s.fn.collapse.defaults, e.data(), "object" == typeof i && i);
      t || e.data("collapse", t = new r(this, n)), "string" == typeof i && t[i]()
    })
  }, s.fn.collapse.defaults = {
    toggle: !0
  }, s.fn.collapse.Constructor = r, s.fn.collapse.noConflict = function() {
    return s.fn.collapse = e, this
  }, s(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(e) {
    var t = s(this),
      e = t.attr("data-target") || e.preventDefault() || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""),
      n = s(e).data("collapse") ? "toggle" : t.data();
    t[s(e).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), s(e).collapse(n)
  })
}(window.jQuery),
function(r) {
  "use strict";

  function s(e, t) {
    this.options = t, this.$element = r(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", r.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
  }
  s.prototype = {
    constructor: s,
    toggle: function() {
      return this[this.isShown ? "hide" : "show"]()
    },
    show: function() {
      var t = this,
        e = r.Event("show");
      this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
        var e = r.support.transition && t.$element.hasClass("fade");
        t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), e && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1), t.enforceFocus(), e ? t.$element.one(r.support.transition.end, function() {
          t.$element.focus().trigger("shown")
        }) : t.$element.focus().trigger("shown")
      }))
    },
    hide: function(e) {
      e && e.preventDefault();
      e = r.Event("hide"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), r(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), r.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
    },
    enforceFocus: function() {
      var t = this;
      r(document).on("focusin.modal", function(e) {
        t.$element[0] === e.target || t.$element.has(e.target).length || t.$element.focus()
      })
    },
    escape: function() {
      var t = this;
      this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(e) {
        27 == e.which && t.hide()
      }) : this.isShown || this.$element.off("keyup.dismiss.modal")
    },
    hideWithTransition: function() {
      var e = this,
        t = setTimeout(function() {
          e.$element.off(r.support.transition.end), e.hideModal()
        }, 500);
      this.$element.one(r.support.transition.end, function() {
        clearTimeout(t), e.hideModal()
      })
    },
    hideModal: function() {
      var e = this;
      this.$element.hide(), this.backdrop(function() {
        e.removeBackdrop(), e.$element.trigger("hidden")
      })
    },
    removeBackdrop: function() {
      this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    },
    backdrop: function(e) {
      var t, n = this.$element.hasClass("fade") ? "fade" : "";
      this.isShown && this.options.backdrop ? (t = r.support.transition && n, this.$backdrop = r('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? r.proxy(this.$element[0].focus, this.$element[0]) : r.proxy(this.hide, this)), t && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), e && (t ? this.$backdrop.one(r.support.transition.end, e) : e())) : !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), r.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(r.support.transition.end, e) : e()) : e && e()
    }
  };
  var e = r.fn.modal;
  r.fn.modal = function(i) {
    return this.each(function() {
      var e = r(this),
        t = e.data("modal"),
        n = r.extend({}, r.fn.modal.defaults, e.data(), "object" == typeof i && i);
      t || e.data("modal", t = new s(this, n)), "string" == typeof i ? t[i]() : n.show && t.show()
    })
  }, r.fn.modal.defaults = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, r.fn.modal.Constructor = s, r.fn.modal.noConflict = function() {
    return r.fn.modal = e, this
  }, r(document).on("click.modal.data-api", '[data-toggle="modal"]', function(e) {
    var t = r(this),
      n = t.attr("href"),
      i = r(t.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
      n = i.data("modal") ? "toggle" : r.extend({
        remote: !/#/.test(n) && n
      }, i.data(), t.data());
    e.preventDefault(), i.modal(n).one("hide", function() {
      t.focus()
    })
  })
}(window.jQuery);
var url, rewrittenUrl, _slice = Array.prototype.slice;

function css_browser_selector(e) {
  function t(e) {
    return -1 < n.indexOf(e)
  }
  var n = e.toLowerCase(),
    e = "gecko",
    i = "webkit",
    r = "opera",
    s = "mobile",
    o = document.documentElement,
    r = [!/opera|webtv/i.test(n) && /msie\s(\d)/.test(n) ? "ie ie" + RegExp.$1 : t("firefox/2") ? e + " ff2" : t("firefox/3.5") ? e + " ff3 ff3_5" : t("firefox/3.6") ? e + " ff3 ff3_6" : t("firefox/3") ? e + " ff3" : t("gecko/") ? e : t("opera") ? r + (/version\/(\d+)/.test(n) ? " " + r + RegExp.$1 : /opera(\s|\/)(\d+)/.test(n) ? " " + r + RegExp.$2 : "") : t("konqueror") ? "konqueror" : t("blackberry") ? s + " blackberry" : t("android") ? s + " android" : t("chrome") ? i + " chrome" : t("iron") ? i + " iron" : t("applewebkit/") ? i + " safari" + (/version\/(\d+)/.test(n) ? " safari" + RegExp.$1 : "") : t("mozilla/") ? e : "", t("j2me") ? s + " j2me" : t("iphone") ? s + " iphone" : t("ipod") ? s + " ipod" : t("ipad") ? s + " ipad" : t("mac") || t("darwin") ? "mac" : t("webtv") ? "webtv" : t("win") ? "win" + (t("windows nt 6.0") ? " vista" : "") : t("freebsd") ? "freebsd" : t("x11") || t("linux") ? "linux" : "", "js"];
  return c = r.join(" "), o.className += " " + c, c
}

function containsAuthQueryParam(e) {
  return -1 !== e.indexOf("auth=true")
}

function rewriteUrl(e) {
  if (-1 === e.indexOf("&")) return containsAuthQueryParam(e) ? e.split("?")[0] : e;
  for (var e = e.split("?"), t = e[0], n = e[1].split("&"), i = n.length; 0 < i--;) - 1 !== n[i].lastIndexOf("auth=true", 0) && n.splice(i, 1);
  return t + "?" + n.join("&")
}! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : e.parsley = t(e.jQuery)
}(this, function(h) {
  "use strict";

  function i(t, n) {
    return t.parsleyAdaptedCallback || (t.parsleyAdaptedCallback = function() {
      var e = Array.prototype.slice.call(arguments, 0);
      e.unshift(this), t.apply(n || S, e)
    }), t.parsleyAdaptedCallback
  }

  function r(e) {
    return 0 === e.lastIndexOf(N, 0) ? e.substr(N.length) : e
  }

  function s() {
    this.__id__ = f.generateID()
  }
  var e = 1,
    t = {},
    f = {
      attr: function(e, t, n) {
        var i, r, s, o = new RegExp("^" + t, "i");
        if (void 0 === n) n = {};
        else
          for (i in n) n.hasOwnProperty(i) && delete n[i];
        if (void 0 !== e && void 0 !== e[0])
          for (i = (s = e[0].attributes).length; i--;)(r = s[i]) && r.specified && o.test(r.name) && (n[this.camelize(r.name.slice(t.length))] = this.deserializeValue(r.value));
        return n
      },
      checkAttr: function(e, t, n) {
        return e.is("[" + t + n + "]")
      },
      setAttr: function(e, t, n, i) {
        e[0].setAttribute(this.dasherize(t + n), String(i))
      },
      generateID: function() {
        return "" + e++
      },
      deserializeValue: function(t) {
        var e;
        try {
          return t && ("true" == t || "false" != t && ("null" == t ? null : isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? h.parseJSON(t) : t : e))
        } catch (e) {
          return t
        }
      },
      camelize: function(e) {
        return e.replace(/-+(.)?/g, function(e, t) {
          return t ? t.toUpperCase() : ""
        })
      },
      dasherize: function(e) {
        return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
      },
      warn: function() {
        var e;
        window.console && "function" == typeof window.console.warn && (e = window.console).warn.apply(e, arguments)
      },
      warnOnce: function(e) {
        t[e] || (t[e] = !0, this.warn.apply(this, arguments))
      },
      _resetWarnings: function() {
        t = {}
      },
      trimString: function(e) {
        return e.replace(/^\s+|\s+$/g, "")
      },
      namespaceEvents: function(e, t) {
        return (e = this.trimString(e || "").split(/\s+/))[0] ? h.map(e, function(e) {
          return e + "." + t
        }).join(" ") : ""
      },
      difference: function(e, n) {
        var i = [];
        return h.each(e, function(e, t) {
          -1 == n.indexOf(t) && i.push(t)
        }), i
      },
      all: function(e) {
        return h.when.apply(h, _toConsumableArray(e).concat([42, 42]))
      },
      objectCreate: Object.create || function(e) {
        if (1 < arguments.length) throw Error("Second argument not supported");
        if ("object" != typeof e) throw TypeError("Argument must be an object");
        n.prototype = e;
        e = new n;
        return n.prototype = null, e
      },
      _SubmitSelector: 'input[type="submit"], button:submit'
    },
    o = {
      namespace: "data-parsley-",
      inputs: "input, textarea, select",
      excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
      priorityEnabled: !0,
      multiple: null,
      group: null,
      uiEnabled: !0,
      validationThreshold: 3,
      focus: "first",
      trigger: !1,
      triggerAfterFailure: "input",
      errorClass: "parsley-error",
      successClass: "parsley-success",
      classHandler: function(e) {},
      errorsContainer: function(e) {},
      errorsWrapper: '<ul class="parsley-errors-list"></ul>',
      errorTemplate: "<li></li>"
    };

  function n() {}
  s.prototype = {
    asyncSupport: !0,
    _pipeAccordingToValidationResult: function() {
      function e() {
        var e = h.Deferred();
        return !0 !== t.validationResult && e.reject(), e.resolve().promise()
      }
      var t = this;
      return [e, e]
    },
    actualizeOptions: function() {
      return f.attr(this.$element, this.options.namespace, this.domOptions), this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(), this
    },
    _resetOptions: function(e) {
      for (var t in this.domOptions = f.objectCreate(this.parent.options), this.options = f.objectCreate(this.domOptions), e) e.hasOwnProperty(t) && (this.options[t] = e[t]);
      this.actualizeOptions()
    },
    _listeners: null,
    on: function(e, t) {
      return this._listeners = this._listeners || {}, (this._listeners[e] = this._listeners[e] || []).push(t), this
    },
    subscribe: function(e, t) {
      h.listenTo(this, e.toLowerCase(), t)
    },
    off: function(e, t) {
      var n = this._listeners && this._listeners[e];
      if (n)
        if (t)
          for (var i = n.length; i--;) n[i] === t && n.splice(i, 1);
        else delete this._listeners[e];
      return this
    },
    unsubscribe: function(e, t) {
      h.unsubscribeTo(this, e.toLowerCase())
    },
    trigger: function(e, t, n) {
      t = t || this;
      var i, r = this._listeners && this._listeners[e];
      if (r)
        for (var s = r.length; s--;)
          if (!1 === (i = r[s].call(t, t, n))) return i;
      return !this.parent || this.parent.trigger(e, t, n)
    },
    reset: function() {
      if ("ParsleyForm" !== this.__class__) return this._resetUI(), this._trigger("reset");
      for (var e = 0; e < this.fields.length; e++) this.fields[e].reset();
      this._trigger("reset")
    },
    destroy: function() {
      if (this._destroyUI(), "ParsleyForm" !== this.__class__) this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple");
      else {
        for (var e = 0; e < this.fields.length; e++) this.fields[e].destroy();
        this.$element.removeData("Parsley")
      }
      this._trigger("destroy")
    },
    asyncIsValid: function(e, t) {
      return f.warnOnce("asyncIsValid is deprecated; please use whenValid instead"), this.whenValid({
        group: e,
        force: t
      })
    },
    _findRelated: function() {
      return this.options.multiple ? this.parent.$element.find("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]') : this.$element
    }
  };

  function p(e, t) {
    var n = b[e || "string"];
    if (n) return n(t);
    throw 'Unknown requirement specification: "' + e + '"'
  }

  function a(e) {
    h.extend(!0, this, e)
  }

  function l(e, t) {
    this.__class__ = "ParsleyValidatorRegistry", this.locale = "en", this.init(e || {}, t || {})
  }

  function u(e) {
    return (e = ("" + e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)) ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0
  }

  function c(e, t, n) {
    for (var i = [], r = [], s = 0; s < e.length; s++) {
      for (var o = !1, a = 0; a < t.length; a++)
        if (e[s].assert.name === t[a].assert.name) {
          o = !0;
          break
        }(o ? r : i). push(e[s])
    }
    return {
      kept: r,
      added: i,
      removed: n ? [] : c(t, e, !0).added
    }
  }

  function d(e, t, n) {
    this.__class__ = "ParsleyForm", this.$element = h(e), this.domOptions = t, this.options = n, this.parent = window.Parsley, this.fields = [], this.validationResult = null
  }

  function m(e, t, n, i, r) {
    if (!/ParsleyField/.test(e.__class__)) throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
    var s = window.Parsley._validatorRegistry.validators[t],
      s = new a(s);
    h.extend(this, {
      validator: s,
      name: t,
      requirements: n,
      priority: i || e.options[t + "Priority"] || s.priority,
      isDomConstraint: !0 === r
    }), this._parseRequirements(e.options)
  }

  function g(e, t, n, i) {
    this.__class__ = "ParsleyField", this.$element = h(e), void 0 !== i && (this.parent = i), this.options = n, this.domOptions = t, this.constraints = [], this.constraintsByName = {}, this.validationResult = !0, this._bindConstraints()
  }

  function v() {
    this.__class__ = "ParsleyFieldMultiple"
  }

  function y(e, t, n) {
    if (this.$element = h(e), e = this.$element.data("Parsley")) return void 0 !== n && e.parent === window.Parsley && (e.parent = n, e._resetOptions(e.options)), "object" == typeof t && h.extend(e.options, t), e;
    if (!this.$element.length) throw new Error("You must bind Parsley on an existing element.");
    if (void 0 !== n && "ParsleyForm" !== n.__class__) throw new Error("Parent instance must be a ParsleyForm instance");
    return this.parent = n || window.Parsley, this.init(t)
  }
  var b = {
      string: function(e) {
        return e
      },
      integer: function(e) {
        if (isNaN(e)) throw 'Requirement is not an integer: "' + e + '"';
        return parseInt(e, 10)
      },
      number: function(e) {
        if (isNaN(e)) throw 'Requirement is not a number: "' + e + '"';
        return parseFloat(e)
      },
      reference: function(e) {
        var t = h(e);
        if (0 === t.length) throw 'No such reference: "' + e + '"';
        return t
      },
      boolean: function(e) {
        return "false" !== e
      },
      object: function(e) {
        return f.deserializeValue(e)
      },
      regexp: function(e) {
        var t = "";
        return e = /^\/.*\/(?:[gimy]*)$/.test(e) ? (t = e.replace(/.*\/([gimy]*)$/, "$1"), e.replace(new RegExp("^/(.*?)/" + t + "$"), "$1")) : "^" + e + "$", new RegExp(e, t)
      }
    },
    x = (a.prototype = {
      validate: function(e, t) {
        if (this.fn) return 3 < arguments.length && (t = [].slice.call(arguments, 1, -1)), this.fn.call(this, e, t);
        if (h.isArray(e)) {
          if (this.validateMultiple) return this.validateMultiple.apply(this, arguments);
          throw "Validator `" + this.name + "` does not handle multiple values"
        }
        if (this.validateNumber) return !isNaN(e) && (arguments[0] = parseFloat(arguments[0]), this.validateNumber.apply(this, arguments));
        if (this.validateString) return this.validateString.apply(this, arguments);
        throw "Validator `" + this.name + "` only handles multiple values"
      },
      parseRequirements: function(e, t) {
        if ("string" != typeof e) return h.isArray(e) ? e : [e];
        var n = this.requirementType;
        if (h.isArray(n)) {
          for (var i = function(e, t) {
              var n = e.match(/^\s*\[(.*)\]\s*$/);
              if (!n) throw 'Requirement is not an array: "' + e + '"';
              e = n[1].split(",").map(f.trimString);
              if (e.length !== t) throw "Requirement has " + e.length + " values when " + t + " are needed";
              return e
            }(e, n.length), r = 0; r < i.length; r++) i[r] = p(n[r], i[r]);
          return i
        }
        if (h.isPlainObject(n)) {
          var s, o, a = n,
            l = e,
            u = t,
            c = null,
            d = {};
          for (s in a) s ? ("string" == typeof(o = u(s)) && (o = p(a[s], o)), d[s] = o) : c = p(a[s], l);
          return [c, d]
        }
        return [p(n, e)]
      },
      requirementType: "string",
      priority: 2
    }, {
      email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
      number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
      integer: /^-?\d+$/,
      digits: /^\d+$/,
      alphanum: /^\w+$/i,
      url: new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$", "i")
    }),
    w = (x.range = x.number, l.prototype = {
      init: function(e, t) {
        for (var n in this.catalog = t, this.validators = h.extend({}, this.validators), e) this.addValidator(n, e[n].fn, e[n].priority);
        window.Parsley.trigger("parsley:validator:init")
      },
      setLocale: function(e) {
        if (void 0 === this.catalog[e]) throw new Error(e + " is not available in the catalog");
        return this.locale = e, this
      },
      addCatalog: function(e, t, n) {
        return "object" == typeof t && (this.catalog[e] = t), !0 === n ? this.setLocale(e) : this
      },
      addMessage: function(e, t, n) {
        return void 0 === this.catalog[e] && (this.catalog[e] = {}), this.catalog[e][t] = n, this
      },
      addMessages: function(e, t) {
        for (var n in t) this.addMessage(e, n, t[n]);
        return this
      },
      addValidator: function(e, t, n) {
        if (this.validators[e]) f.warn('Validator "' + e + '" is already defined.');
        else if (o.hasOwnProperty(e)) return void f.warn('"' + e + '" is a restricted keyword and is not a valid validator name.');
        return this._setValidator.apply(this, arguments)
      },
      updateValidator: function(e, t, n) {
        return (this.validators[e] ? this._setValidator : (f.warn('Validator "' + e + '" is not already defined.'), this.addValidator)).apply(this, arguments)
      },
      removeValidator: function(e) {
        return this.validators[e] || f.warn('Validator "' + e + '" is not defined.'), delete this.validators[e], this
      },
      _setValidator: function(e, t, n) {
        for (var i in (t = "object" != typeof t ? {
            fn: t,
            priority: n
          } : t).validate || (t = new a(t)), (this.validators[e] = t).messages || {}) this.addMessage(i, e, t.messages[i]);
        return this
      },
      getErrorMessage: function(e) {
        return ("type" === e.name ? (this.catalog[this.locale][e.name] || {})[e.requirements] : this.formatMessage(this.catalog[this.locale][e.name], e.requirements)) || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage
      },
      formatMessage: function(e, t) {
        if ("object" != typeof t) return "string" == typeof e ? e.replace(/%s/i, t) : "";
        for (var n in t) e = this.formatMessage(e, t[n]);
        return e
      },
      validators: {
        notblank: {
          validateString: function(e) {
            return /\S/.test(e)
          },
          priority: 2
        },
        required: {
          validateMultiple: function(e) {
            return 0 < e.length
          },
          validateString: function(e) {
            return /\S/.test(e)
          },
          priority: 512
        },
        type: {
          validateString: function(e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
              i = n.step,
              i = void 0 === i ? "any" : i,
              n = n.base,
              n = void 0 === n ? 0 : n,
              r = x[t];
            if (!r) throw new Error("validator type `" + t + "` is not supported");
            if (!r.test(e)) return !1;
            if ("number" === t && !/^any$/i.test(i || "")) {
              var r = Number(e),
                s = Math.max(u(i), u(n));
              if (u(r) > s) return !1;
              t = function(e) {
                return Math.round(e * Math.pow(10, s))
              };
              if ((t(r) - t(n)) % t(i) != 0) return !1
            }
            return !0
          },
          requirementType: {
            "": "string",
            step: "string",
            base: "number"
          },
          priority: 256
        },
        pattern: {
          validateString: function(e, t) {
            return t.test(e)
          },
          requirementType: "regexp",
          priority: 64
        },
        minlength: {
          validateString: function(e, t) {
            return e.length >= t
          },
          requirementType: "integer",
          priority: 30
        },
        maxlength: {
          validateString: function(e, t) {
            return e.length <= t
          },
          requirementType: "integer",
          priority: 30
        },
        length: {
          validateString: function(e, t, n) {
            return e.length >= t && e.length <= n
          },
          requirementType: ["integer", "integer"],
          priority: 30
        },
        mincheck: {
          validateMultiple: function(e, t) {
            return e.length >= t
          },
          requirementType: "integer",
          priority: 30
        },
        maxcheck: {
          validateMultiple: function(e, t) {
            return e.length <= t
          },
          requirementType: "integer",
          priority: 30
        },
        check: {
          validateMultiple: function(e, t, n) {
            return e.length >= t && e.length <= n
          },
          requirementType: ["integer", "integer"],
          priority: 30
        },
        min: {
          validateNumber: function(e, t) {
            return t <= e
          },
          requirementType: "number",
          priority: 30
        },
        max: {
          validateNumber: function(e, t) {
            return e <= t
          },
          requirementType: "number",
          priority: 30
        },
        range: {
          validateNumber: function(e, t, n) {
            return t <= e && e <= n
          },
          requirementType: ["number", "number"],
          priority: 30
        },
        equalto: {
          validateString: function(e, t) {
            var n = h(t);
            return n.length ? e === n.val() : e === t
          },
          priority: 256
        }
      }
    }, {}),
    C = (w.Form = {
      _actualizeTriggers: function() {
        var t = this;
        this.$element.on("submit.Parsley", function(e) {
          t.onSubmitValidate(e)
        }), this.$element.on("click.Parsley", f._SubmitSelector, function(e) {
          t.onSubmitButton(e)
        }), !1 !== this.options.uiEnabled && this.$element.attr("novalidate", "")
      },
      focus: function() {
        if (!(this._focusedField = null) === this.validationResult || "none" === this.options.focus) return null;
        for (var e = 0; e < this.fields.length; e++) {
          var t = this.fields[e];
          if (!0 !== t.validationResult && 0 < t.validationResult.length && void 0 === t.options.noFocus && (this._focusedField = t.$element, "first" === this.options.focus)) break
        }
        return null === this._focusedField ? null : this._focusedField.focus()
      },
      _destroyUI: function() {
        this.$element.off(".Parsley")
      }
    }, w.Field = {
      _reflowUI: function() {
        var e;
        this._buildUI(), this._ui && (e = c(this.validationResult, this._ui.lastValidationResult), this._ui.lastValidationResult = this.validationResult, this._manageStatusClass(), this._manageErrorsMessages(e), this._actualizeTriggers(), !e.kept.length && !e.added.length || this._failedOnce || (this._failedOnce = !0, this._actualizeTriggers()))
      },
      getErrorsMessages: function() {
        if (!0 === this.validationResult) return [];
        for (var e = [], t = 0; t < this.validationResult.length; t++) e.push(this.validationResult[t].errorMessage || this._getErrorMessage(this.validationResult[t].assert));
        return e
      },
      addError: function(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
          n = t.message,
          i = t.assert,
          t = t.updateClass,
          t = void 0 === t || t;
        this._buildUI(), this._addError(e, {
          message: n,
          assert: i
        }), t && this._errorClass()
      },
      updateError: function(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
          n = t.message,
          i = t.assert,
          t = t.updateClass,
          t = void 0 === t || t;
        this._buildUI(), this._updateError(e, {
          message: n,
          assert: i
        }), t && this._errorClass()
      },
      removeError: function(e) {
        var t = (arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]).updateClass,
          t = void 0 === t || t;
        this._buildUI(), this._removeError(e), t && this._manageStatusClass()
      },
      _manageStatusClass: function() {
        this.hasConstraints() && this.needsValidation() && !0 === this.validationResult ? this._successClass() : 0 < this.validationResult.length ? this._errorClass() : this._resetClass()
      },
      _manageErrorsMessages: function(e) {
        if (void 0 === this.options.errorsMessagesDisabled) {
          if (void 0 !== this.options.errorMessage) return e.added.length || e.kept.length ? (this._insertErrorWrapper(), 0 === this._ui.$errorsWrapper.find(".parsley-custom-error-message").length && this._ui.$errorsWrapper.append(h(this.options.errorTemplate).addClass("parsley-custom-error-message")), this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage)) : this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
          for (var t = 0; t < e.removed.length; t++) this._removeError(e.removed[t].assert.name);
          for (t = 0; t < e.added.length; t++) this._addError(e.added[t].assert.name, {
            message: e.added[t].errorMessage,
            assert: e.added[t].assert
          });
          for (t = 0; t < e.kept.length; t++) this._updateError(e.kept[t].assert.name, {
            message: e.kept[t].errorMessage,
            assert: e.kept[t].assert
          })
        }
      },
      _addError: function(e, t) {
        var n = t.message,
          t = t.assert;
        this._insertErrorWrapper(), this._ui.$errorsWrapper.addClass("filled").append(h(this.options.errorTemplate).addClass("parsley-" + e).html(n || this._getErrorMessage(t)))
      },
      _updateError: function(e, t) {
        var n = t.message,
          t = t.assert;
        this._ui.$errorsWrapper.addClass("filled").find(".parsley-" + e).html(n || this._getErrorMessage(t))
      },
      _removeError: function(e) {
        this._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + e).remove()
      },
      _getErrorMessage: function(e) {
        var t = e.name + "Message";
        return void 0 !== this.options[t] ? window.Parsley.formatMessage(this.options[t], e.requirements) : window.Parsley.getErrorMessage(e)
      },
      _buildUI: function() {
        var e;
        this._ui || !1 === this.options.uiEnabled || (e = {}, this.$element.attr(this.options.namespace + "id", this.__id__), e.$errorClassHandler = this._manageClassHandler(), e.errorsWrapperId = "parsley-id-" + (this.options.multiple ? "multiple-" + this.options.multiple : this.__id__), e.$errorsWrapper = h(this.options.errorsWrapper).attr("id", e.errorsWrapperId), e.lastValidationResult = [], e.validationInformationVisible = !1, this._ui = e)
      },
      _manageClassHandler: function() {
        var e;
        return "string" == typeof this.options.classHandler && h(this.options.classHandler).length ? h(this.options.classHandler) : void 0 !== (e = this.options.classHandler.call(this, this)) && e.length ? e : this._inputHolder()
      },
      _inputHolder: function() {
        return !this.options.multiple || this.$element.is("select") ? this.$element : this.$element.parent()
      },
      _insertErrorWrapper: function() {
        var e;
        if (0 !== this._ui.$errorsWrapper.parent().length) return this._ui.$errorsWrapper.parent();
        if ("string" == typeof this.options.errorsContainer) {
          if (h(this.options.errorsContainer).length) return h(this.options.errorsContainer).append(this._ui.$errorsWrapper);
          f.warn("The errors container `" + this.options.errorsContainer + "` does not exist in DOM")
        } else "function" == typeof this.options.errorsContainer && (e = this.options.errorsContainer.call(this, this));
        return void 0 !== e && e.length ? e.append(this._ui.$errorsWrapper) : this._inputHolder().after(this._ui.$errorsWrapper)
      },
      _actualizeTriggers: function() {
        var e, t = this,
          n = this._findRelated();
        n.off(".Parsley"), this._failedOnce ? n.on(f.namespaceEvents(this.options.triggerAfterFailure, "Parsley"), function() {
          t._validateIfNeeded()
        }) : (e = f.namespaceEvents(this.options.trigger, "Parsley")) && n.on(e, function(e) {
          t._validateIfNeeded(e)
        })
      },
      _validateIfNeeded: function(e) {
        var t = this;
        e && /key|input/.test(e.type) && (!this._ui || !this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold || (this.options.debounce ? (window.clearTimeout(this._debounced), this._debounced = window.setTimeout(function() {
          return t.validate()
        }, this.options.debounce)) : this.validate())
      },
      _resetUI: function() {
        this._failedOnce = !1, this._actualizeTriggers(), void 0 !== this._ui && (this._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(), this._ui.lastValidationResult = [], this._ui.validationInformationVisible = !1)
      },
      _destroyUI: function() {
        this._resetUI(), void 0 !== this._ui && this._ui.$errorsWrapper.remove(), delete this._ui
      },
      _successClass: function() {
        this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass)
      },
      _errorClass: function() {
        this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass)
      },
      _resetClass: function() {
        this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass)
      }
    }, {
      pending: null,
      resolved: !0,
      rejected: !1
    }),
    _ = (d.prototype = {
      onSubmitValidate: function(e) {
        var t, n, i = this;
        !0 !== e.parsley && (t = this._$submitSource || this.$element.find(f._SubmitSelector).first(), this._$submitSource = null, this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !0), t.is("[formnovalidate]") || "resolved" === (n = this.whenValidate({
          event: e
        })).state() && !1 !== this._trigger("submit") || (e.stopImmediatePropagation(), e.preventDefault(), "pending" === n.state() && n.done(function() {
          i._submit(t)
        })))
      },
      onSubmitButton: function(e) {
        this._$submitSource = h(e.currentTarget)
      },
      _submit: function(e) {
        var t;
        !1 !== this._trigger("submit") && (e && (t = 0 === (t = this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !1)).length ? h('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element) : t).attr({
          name: e.attr("name"),
          value: e.attr("value")
        }), this.$element.trigger(h.extend(h.Event("submit"), {
          parsley: !0
        })))
      },
      validate: function(e) {
        var t;
        return 1 <= arguments.length && !h.isPlainObject(e) && (f.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated."), e = {
          group: (t = _slice.call(arguments))[0],
          force: t[1],
          event: t[2]
        }), C[this.whenValidate(e).state()]
      },
      whenValidate: function() {
        var e = this,
          t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
          n = t.group,
          i = t.force,
          t = t.event,
          t = ((this.submitEvent = t) && (this.submitEvent = h.extend({}, t, {
            preventDefault: function() {
              f.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"), e.validationResult = !1
            }
          })), this.validationResult = !0, this._trigger("validate"), this._refreshFields(), this._withoutReactualizingFormOptions(function() {
            return h.map(e.fields, function(e) {
              return e.whenValidate({
                force: i,
                group: n
              })
            })
          }));
        return (t = f.all(t).done(function() {
          e._trigger("success")
        }).fail(function() {
          e.validationResult = !1, e.focus(), e._trigger("error")
        }).always(function() {
          e._trigger("validated")
        })).pipe.apply(t, _toConsumableArray(this._pipeAccordingToValidationResult()))
      },
      isValid: function(e) {
        var t;
        return 1 <= arguments.length && !h.isPlainObject(e) && (f.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated."), e = {
          group: (t = _slice.call(arguments))[0],
          force: t[1]
        }), C[this.whenValid(e).state()]
      },
      whenValid: function() {
        var e = this,
          t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
          n = t.group,
          i = t.force,
          t = (this._refreshFields(), this._withoutReactualizingFormOptions(function() {
            return h.map(e.fields, function(e) {
              return e.whenValid({
                group: n,
                force: i
              })
            })
          }));
        return f.all(t)
      },
      _refreshFields: function() {
        return this.actualizeOptions()._bindFields()
      },
      _bindFields: function() {
        var n = this,
          e = this.fields;
        return this.fields = [], this.fieldsMappedById = {}, this._withoutReactualizingFormOptions(function() {
          n.$element.find(n.options.inputs).not(n.options.excluded).each(function(e, t) {
            t = new window.Parsley.Factory(t, {}, n);
            "ParsleyField" !== t.__class__ && "ParsleyFieldMultiple" !== t.__class__ || !0 === t.options.excluded || void 0 === n.fieldsMappedById[t.__class__ + "-" + t.__id__] && (n.fieldsMappedById[t.__class__ + "-" + t.__id__] = t, n.fields.push(t))
          }), h.each(f.difference(e, n.fields), function(e, t) {
            t._trigger("reset")
          })
        }), this
      },
      _withoutReactualizingFormOptions: function(e) {
        var t = this.actualizeOptions,
          e = (this.actualizeOptions = function() {
            return this
          }, e());
        return this.actualizeOptions = t, e
      },
      _trigger: function(e) {
        return this.trigger("form:" + e)
      }
    }, {
      pending: null,
      resolved: !0,
      rejected: !(m.prototype = {
        validate: function(e, t) {
          var n;
          return (n = this.validator).validate.apply(n, [e].concat(_toConsumableArray(this.requirementList), [t]))
        },
        _parseRequirements: function(t) {
          var n = this;
          this.requirementList = this.validator.parseRequirements(this.requirements, function(e) {
            return t[n.name + ((e = e)[0].toUpperCase() + e.slice(1))]
          })
        }
      })
    }),
    T = (g.prototype = {
      validate: function(e) {
        1 <= arguments.length && !h.isPlainObject(e) && (f.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."), e = {
          options: e
        });
        e = this.whenValidate(e);
        if (!e) return !0;
        switch (e.state()) {
          case "pending":
            return null;
          case "resolved":
            return !0;
          case "rejected":
            return this.validationResult
        }
      },
      whenValidate: function() {
        var e = this,
          t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
          n = t.force,
          t = t.group;
        return this.refreshConstraints(), !t || this._isInGroup(t) ? (this.value = this.getValue(), this._trigger("validate"), (t = this.whenValid({
          force: n,
          value: this.value,
          _refreshed: !0
        }).always(function() {
          e._reflowUI()
        }).done(function() {
          e._trigger("success")
        }).fail(function() {
          e._trigger("error")
        }).always(function() {
          e._trigger("validated")
        })).pipe.apply(t, _toConsumableArray(this._pipeAccordingToValidationResult()))) : void 0
      },
      hasConstraints: function() {
        return 0 !== this.constraints.length
      },
      needsValidation: function(e) {
        return !(!(e = void 0 === e ? this.getValue() : e).length && !this._isRequired() && void 0 === this.options.validateIfEmpty)
      },
      _isInGroup: function(e) {
        return h.isArray(this.options.group) ? -1 !== h.inArray(e, this.options.group) : this.options.group === e
      },
      isValid: function(e) {
        1 <= arguments.length && !h.isPlainObject(e) && (f.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated."), e = {
          force: (t = _slice.call(arguments))[0],
          value: t[1]
        });
        var t = this.whenValid(e);
        return !t || _[t.state()]
      },
      whenValid: function() {
        var n, i = this,
          e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
          t = e.force,
          t = void 0 !== t && t,
          r = e.value,
          s = e.group;
        if (e._refreshed || this.refreshConstraints(), !s || this._isInGroup(s)) return this.validationResult = !0, this.hasConstraints() && (null == r && (r = this.getValue()), this.needsValidation(r) || !0 === t) ? (e = this._getGroupedConstraints(), n = [], h.each(e, function(e, t) {
          t = f.all(h.map(t, function(e) {
            return i._validateConstraint(r, e)
          }));
          return n.push(t), "rejected" !== t.state() && void 0
        }), f.all(n)) : h.when()
      },
      _validateConstraint: function(e, t) {
        var n = this,
          e = t.validate(e, this);
        return !1 === e && (e = h.Deferred().reject()), f.all([e]).fail(function(e) {
          n.validationResult instanceof Array || (n.validationResult = []), n.validationResult.push({
            assert: t,
            errorMessage: "string" == typeof e && e
          })
        })
      },
      getValue: function() {
        var e = "function" == typeof this.options.value ? this.options.value(this) : void 0 !== this.options.value ? this.options.value : this.$element.val();
        return null == e ? "" : this._handleWhitespace(e)
      },
      refreshConstraints: function() {
        return this.actualizeOptions()._bindConstraints()
      },
      addConstraint: function(e, t, n, i) {
        return window.Parsley._validatorRegistry.validators[e] && (e = new m(this, e, t, n, i), "undefined" !== this.constraintsByName[e.name] && this.removeConstraint(e.name), this.constraints.push(e), this.constraintsByName[e.name] = e), this
      },
      removeConstraint: function(e) {
        for (var t = 0; t < this.constraints.length; t++)
          if (e === this.constraints[t].name) {
            this.constraints.splice(t, 1);
            break
          } return delete this.constraintsByName[e], this
      },
      updateConstraint: function(e, t, n) {
        return this.removeConstraint(e).addConstraint(e, t, n)
      },
      _bindConstraints: function() {
        for (var e, t = [], n = {}, i = 0; i < this.constraints.length; i++) !1 === this.constraints[i].isDomConstraint && (t.push(this.constraints[i]), n[this.constraints[i].name] = this.constraints[i]);
        for (e in this.constraints = t, this.constraintsByName = n, this.options) this.addConstraint(e, this.options[e], void 0, !0);
        return this._bindHtml5Constraints()
      },
      _bindHtml5Constraints: function() {
        this.$element.attr("required") && this.addConstraint("required", !0, void 0, !0), "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0), void 0 !== this.$element.attr("min") && void 0 !== this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : void 0 !== this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : void 0 !== this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0), void 0 !== this.$element.attr("minlength") && void 0 !== this.$element.attr("maxlength") ? this.addConstraint("length", [this.$element.attr("minlength"), this.$element.attr("maxlength")], void 0, !0) : void 0 !== this.$element.attr("minlength") ? this.addConstraint("minlength", this.$element.attr("minlength"), void 0, !0) : void 0 !== this.$element.attr("maxlength") && this.addConstraint("maxlength", this.$element.attr("maxlength"), void 0, !0);
        var e = this.$element.attr("type");
        return void 0 === e ? this : "number" === e ? this.addConstraint("type", ["number", {
          step: this.$element.attr("step") || "1",
          base: this.$element.attr("min") || this.$element.attr("value")
        }], void 0, !0) : /^(email|url|range)$/i.test(e) ? this.addConstraint("type", e, void 0, !0) : this
      },
      _isRequired: function() {
        return void 0 !== this.constraintsByName.required && !1 !== this.constraintsByName.required.requirements
      },
      _trigger: function(e) {
        return this.trigger("field:" + e)
      },
      _handleWhitespace: function(e) {
        return !0 === this.options.trimValue && f.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'), "squish" === this.options.whitespace && (e = e.replace(/\s{2,}/g, " ")), e = "trim" !== this.options.whitespace && "squish" !== this.options.whitespace && !0 !== this.options.trimValue ? e : f.trimString(e)
      },
      _getGroupedConstraints: function() {
        if (!1 === this.options.priorityEnabled) return [this.constraints];
        for (var e = [], t = {}, n = 0; n < this.constraints.length; n++) {
          var i = this.constraints[n].priority;
          t[i] || e.push(t[i] = []), t[i].push(this.constraints[n])
        }
        return e.sort(function(e, t) {
          return t[0].priority - e[0].priority
        }), e
      }
    }, g),
    E = (v.prototype = {
      addElement: function(e) {
        return this.$elements.push(e), this
      },
      refreshConstraints: function() {
        if (this.constraints = [], this.$element.is("select")) this.actualizeOptions()._bindConstraints();
        else
          for (var e = 0; e < this.$elements.length; e++)
            if (h("html").has(this.$elements[e]).length)
              for (var t = this.$elements[e].data("ParsleyFieldMultiple").refreshConstraints().constraints, n = 0; n < t.length; n++) this.addConstraint(t[n].name, t[n].requirements, t[n].priority, t[n].isDomConstraint);
            else this.$elements.splice(e, 1);
        return this
      },
      getValue: function() {
        var e;
        return "function" == typeof this.options.value ? this.options.value(this) : void 0 !== this.options.value ? this.options.value : this.$element.is("input[type=radio]") ? this._findRelated().filter(":checked").val() || "" : this.$element.is("input[type=checkbox]") ? (e = [], this._findRelated().filter(":checked").each(function() {
          e.push(h(this).val())
        }), e) : this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val()
      },
      _init: function() {
        return this.$elements = [this.$element], this
      }
    }, y.prototype = {
      init: function(e) {
        return this.__class__ = "Parsley", this.__version__ = "2.6.0", this.__id__ = f.generateID(), this._resetOptions(e), this.$element.is("form") || f.checkAttr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField")
      },
      isMultiple: function() {
        return this.$element.is("input[type=radio], input[type=checkbox]") || this.$element.is("select") && void 0 !== this.$element.attr("multiple")
      },
      handleMultiple: function() {
        var e, t, n = this;
        if (this.options.multiple || (void 0 !== this.$element.attr("name") && this.$element.attr("name").length ? this.options.multiple = e = this.$element.attr("name") : void 0 !== this.$element.attr("id") && this.$element.attr("id").length && (this.options.multiple = this.$element.attr("id"))), this.$element.is("select") && void 0 !== this.$element.attr("multiple")) return this.options.multiple = this.options.multiple || this.__id__, this.bind("parsleyFieldMultiple");
        if (!this.options.multiple) return f.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
        this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), void 0 !== e && h('input[name="' + e + '"]').each(function(e, t) {
          h(t).is("input[type=radio], input[type=checkbox]") && h(t).attr(n.options.namespace + "multiple", n.options.multiple)
        });
        for (var i = this._findRelated(), r = 0; r < i.length; r++)
          if (void 0 !== (t = h(i.get(r)).data("Parsley"))) {
            this.$element.data("ParsleyFieldMultiple") || t.addElement(this.$element);
            break
          } return this.bind("parsleyField", !0), t || this.bind("parsleyFieldMultiple")
      },
      bind: function(e, t) {
        var n;
        switch (e) {
          case "parsleyForm":
            n = h.extend(new d(this.$element, this.domOptions, this.options), new s, window.ParsleyExtend)._bindFields();
            break;
          case "parsleyField":
            n = h.extend(new T(this.$element, this.domOptions, this.options, this.parent), new s, window.ParsleyExtend);
            break;
          case "parsleyFieldMultiple":
            n = h.extend(new T(this.$element, this.domOptions, this.options, this.parent), new v, new s, window.ParsleyExtend)._init();
            break;
          default:
            throw new Error(e + "is not a supported Parsley type")
        }
        return this.options.multiple && f.setAttr(this.$element, this.options.namespace, "multiple", this.options.multiple), void 0 !== t ? this.$element.data("ParsleyFieldMultiple", n) : (this.$element.data("Parsley", n), n._actualizeTriggers(), n._trigger("init")), n
      }
    }, h.fn.jquery.split("."));
  if (parseInt(E[0]) <= 1 && parseInt(E[1]) < 8) throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
  E.forEach || f.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");

  function k() {
    f.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")
  }
  var $ = h.extend(new s, {
      $element: h(document),
      actualizeOptions: null,
      _resetOptions: null,
      Factory: y,
      version: "2.6.0"
    }),
    F = (h.extend(T.prototype, w.Field, s.prototype), h.extend(d.prototype, w.Form, s.prototype), h.extend(y.prototype, s.prototype), h.fn.parsley = h.fn.psly = function(e) {
      var t;
      return 1 < this.length ? (t = [], this.each(function() {
        t.push(h(this).parsley(e))
      }), t) : h(this).length ? new y(this, e) : void f.warn("You must bind Parsley on an existing element.")
    }, void 0 === window.ParsleyExtend && (window.ParsleyExtend = {}), $.options = h.extend(f.objectCreate(o), window.ParsleyConfig), window.ParsleyConfig = $.options, window.Parsley = window.psly = $, window.ParsleyUtils = f, window.Parsley._validatorRegistry = new l(window.ParsleyConfig.validators, window.ParsleyConfig.i18n)),
    S = (window.ParsleyValidator = {}, h.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator".split(" "), function(e, t) {
      window.Parsley[t] = h.proxy(F, t), window.ParsleyValidator[t] = function() {
        var e;
        return f.warnOnce("Accessing the method '" + t + "' through ParsleyValidator is deprecated. Simply call 'window.Parsley." + t + "(...)'"), (e = window.Parsley)[t].apply(e, arguments)
      }
    }), window.Parsley.UI = w, window.ParsleyUI = {
      removeError: function(e, t, n) {
        n = !0 !== n;
        return f.warnOnce("Accessing ParsleyUI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e.removeError(t, {
          updateClass: n
        })
      },
      getErrorsMessages: function(e) {
        return f.warnOnce("Accessing ParsleyUI is deprecated. Call 'getErrorsMessages' on the instance directly."), e.getErrorsMessages()
      }
    }, h.each("addError updateError".split(" "), function(e, s) {
      window.ParsleyUI[s] = function(e, t, n, i, r) {
        r = !0 !== r;
        return f.warnOnce("Accessing ParsleyUI is deprecated. Call '" + s + "' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e[s](t, {
          message: n,
          assert: i,
          updateClass: r
        })
      }
    }), !1 !== window.ParsleyConfig.autoBind && h(function() {
      h("[data-parsley-validate]").length && h("[data-parsley-validate]").parsley()
    }), h({})),
    N = "parsley:";
  return h.listen = function(e, t) {
    var n;
    if (k(), "object" == typeof arguments[1] && "function" == typeof arguments[2] && (n = arguments[1], t = arguments[2]), "function" != typeof t) throw new Error("Wrong parameters");
    window.Parsley.on(r(e), i(t, n))
  }, h.listenTo = function(e, t, n) {
    if (k(), !(e instanceof T || e instanceof d)) throw new Error("Must give Parsley instance");
    if ("string" != typeof t || "function" != typeof n) throw new Error("Wrong parameters");
    e.on(r(t), i(n))
  }, h.unsubscribe = function(e, t) {
    if (k(), "string" != typeof e || "function" != typeof t) throw new Error("Wrong arguments");
    window.Parsley.off(r(e), t.parsleyAdaptedCallback)
  }, h.unsubscribeTo = function(e, t) {
    if (k(), !(e instanceof T || e instanceof d)) throw new Error("Must give Parsley instance");
    e.off(r(t))
  }, h.unsubscribeAll = function(t) {
    k(), window.Parsley.off(r(t)), h("form,input,textarea,select").each(function() {
      var e = h(this).data("Parsley");
      e && e.off(r(t))
    })
  }, h.emit = function(e, t) {
    k();
    var n = t instanceof T || t instanceof d,
      i = Array.prototype.slice.call(arguments, n ? 2 : 1);
    i.unshift(r(e)), (t = n ? t : window.Parsley).trigger.apply(t, _toConsumableArray(i))
  }, h.extend(!0, $, {
    asyncValidators: {
      default: {
        fn: function(e) {
          return 200 <= e.status && e.status < 300
        },
        url: !1
      },
      reverse: {
        fn: function(e) {
          return e.status < 200 || 300 <= e.status
        },
        url: !1
      }
    },
    addAsyncValidator: function(e, t, n, i) {
      return $.asyncValidators[e] = {
        fn: t,
        url: n || !1,
        options: i || {}
      }, this
    }
  }), $.addValidator("remote", {
    requirementType: {
      "": "string",
      validator: "string",
      reverse: "boolean",
      options: "object"
    },
    validateString: function(e, t, n, i) {
      var r = {},
        s = n.validator || (!0 === n.reverse ? "reverse" : "default");
      if (void 0 === $.asyncValidators[s]) throw new Error("Calling an undefined async validator: `" + s + "`"); - 1 < (t = $.asyncValidators[s].url || t).indexOf("{value}") ? t = t.replace("{value}", encodeURIComponent(e)) : r[i.$element.attr("name") || i.$element.attr("id")] = e;

      function o() {
        var e = (e = $.asyncValidators[s].fn.call(i, a, t, n)) || h.Deferred().reject();
        return h.when(e)
      }
      var e = h.extend(!0, n.options || {}, $.asyncValidators[s].options),
        r = h.extend(!0, {}, {
          url: t,
          data: r,
          type: "GET"
        }, e),
        a = (i.trigger("field:ajaxoptions", i, r), e = h.param(r), void 0 === $._remoteCache && ($._remoteCache = {}), $._remoteCache[e] = $._remoteCache[e] || h.ajax(r));
      return a.then(o, o)
    },
    priority: -1
  }), $.on("form:submit", function() {
    $._remoteCache = {}
  }), window.ParsleyExtend.addAsyncValidator = function() {
    return ParsleyUtils.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"), $.addAsyncValidator.apply($, arguments)
  }, $.addMessages("en", {
    defaultMessage: "This value seems to be invalid.",
    type: {
      email: "This value should be a valid email.",
      url: "This value should be a valid url.",
      number: "This value should be a valid number.",
      integer: "This value should be a valid integer.",
      digits: "This value should be digits.",
      alphanum: "This value should be alphanumeric."
    },
    notblank: "This value should not be blank.",
    required: "This value is required.",
    pattern: "This value seems to be invalid.",
    min: "This value should be greater than or equal to %s.",
    max: "This value should be lower than or equal to %s.",
    range: "This value should be between %s and %s.",
    minlength: "This value is too short. It should have %s characters or more.",
    maxlength: "This value is too long. It should have %s characters or fewer.",
    length: "This value length is invalid. It should be between %s and %s characters long.",
    mincheck: "You must select at least %s choices.",
    maxcheck: "You must select %s choices or fewer.",
    check: "You must select between %s and %s choices.",
    equalto: "This value should be the same."
  }), $.setLocale("en"), (new function() {
    var i = this,
      r = window || global;
    h.extend(this, {
      isNativeEvent: function(e) {
        return e.originalEvent && !1 !== e.originalEvent.isTrusted
      },
      fakeInputEvent: function(e) {
        i.isNativeEvent(e) && h(e.target).trigger("input")
      },
      misbehaves: function(e) {
        i.isNativeEvent(e) && (i.behavesOk(e), h(document).on("change.inputevent", e.data.selector, i.fakeInputEvent), i.fakeInputEvent(e))
      },
      behavesOk: function(e) {
        i.isNativeEvent(e) && h(document).off("input.inputevent", e.data.selector, i.behavesOk).off("change.inputevent", e.data.selector, i.misbehaves)
      },
      install: function() {
        if (!r.inputEventPatched) {
          r.inputEventPatched = "0.0.3";
          for (var e = ["select", 'input[type="checkbox"]', 'input[type="radio"]', 'input[type="file"]'], t = 0; t < e.length; t++) {
            var n = e[t];
            h(document).on("input.inputevent", n, {
              selector: n
            }, i.behavesOk).on("change.inputevent", n, {
              selector: n
            }, i.misbehaves)
          }
        }
      },
      uninstall: function() {
        delete r.inputEventPatched, h(document).off(".inputevent")
      }
    })
  }).install(), $
}), css_browser_selector(navigator.userAgent),
  function(d) {
    window.initArticleRatings = function() {
      var e = ".articleRatings-question",
        t = ".articleRatings-feedback",
        n = ".articleRatings-failure",
        i = ".articleRatings-actions",
        r = ".rateAction",
        s = d(".articleRatings"),
        o = s.find(e),
        a = s.find(t),
        l = s.find(n),
        u = s.find(i),
        c = d(r);
      s.on("click", "button", function(e) {
        var t, n, i;
        s.hasClass("activated") || (t = d(this), n = s.data("articleUrl"), i = t.data("rating"), s.addClass("activated"), t.addClass("selected"), c.each(function() {
          d(this).attr("disabled", "disabled")
        }), d.ajax({
          url: "/rating",
          type: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
          data: JSON.stringify({
            url: n,
            rating: i
          })
        }).done(function() {
          setTimeout(function() {
            u.fadeOut(600), o.fadeOut(600, function() {
              a.fadeIn(400)
            })
          }, 600)
        }).fail(function() {
          u.fadeOut(600), o.fadeOut(600, function() {
            l.fadeIn(400)
          })
        }))
      })
    }, d(document).ready(function() {
      initArticleRatings()
    })
  }(jQuery), window.Parsley && window.Parsley.addValidator("maxFileSize", {
    validateString: function(e, t, n) {
      var i;
      return t = 1024 * t * 1024, window.FormData ? 1 != (n = n.$element[0].files).length || n[0].size <= t : !window.ActiveXObject || (n = new ActiveXObject("Scripting.FileSystemObject"), i = document.getElementById("file-upload").value, n.getFile(i).size <= t)
    },
    requirementType: "integer",
    messages: {
      en: "Files must be under 10MB"
    }
  }), $(document).ready(function() {
    var e = $("form.contact");
    e.parsley(), e.each(function() {
      var e = $(this);
      e.parsley().on("form:submit", function() {
        e.find('input[type="submit"]').attr("disabled", "disabled")
      })
    })
  }),
  function(e) {
    e(document).ready(function() {
      e("a.lightbox,a.screensteps-image-zoom").click(function(e) {
        (e.ctrlKey || e.metaKey) && e.stopImmediatePropagation()
      }).featherlight({
        contentFilters: ["image"]
      })
    })
  }(jQuery), window.history && window.history.replaceState && (containsAuthQueryParam(url = window.location.href) && (rewrittenUrl = rewriteUrl(url), window.history.replaceState({
    path: rewrittenUrl
  }, document.title, rewrittenUrl))),
  function(s) {
    var n = 13,
      i = 37,
      r = 38,
      o = 39,
      a = 40,
      l = 27,
      e = (window.initDocsWebSearch = function() {
        new e(s("#searchBar"))
      }, s(document).ready(function() {
        initDocsWebSearch()
      }), function(e) {
        e.length && (this.$el = s(e), this.ui = {
          save: this.$el.find('button[type="submit"]'),
          input: this.$el.find("input[type='text']"),
          resultContainer: this.$el.find("#serp-dd"),
          resultsList: this.$el.find("ul.result"),
          result: this.$el.find("li")
        }, this.ui.save.on("mousedown", s.proxy(function() {
          this.navigating = !0
        }, this)), this.ui.save.on("click", s.proxy(function(e) {
          var t = this.ui.input.val();
          null != t && 0 != t.length || (e.preventDefault(), e.stopPropagation(), this.ui.input.addClass("error"), this.navigating = !1)
        }, this)), this.ui.input.on("keydown", s.proxy(this.onKeyDown, this)), this.ui.input.on("keyup", s.proxy(this.onKeyUp, this)), this.ui.input.on("focus", s.proxy(this.onFocus, this)), this.ui.input.on("blur", s.proxy(this.onBlur, this)), this.ui.resultsList.on("click", "li a", s.proxy(function(e) {
          var t = s(e.target).attr("href");
          t && (e.preventDefault(), this.recordSearchAndNavigate(t))
        }, this)), this.selectedIndex = -1)
      });
    e.prototype = {
      onBlur: function(e) {
        this.delayCloseOnBlur ? (console.log("setting timeout"), this.closeTimeoutId = setTimeout(s.proxy(this.closeSearchResults, this), 400)) : this.closeSearchResults(), this.delayCloseOnBlur = !1
      },
      onFocus: function(e) {
        this.ui.input.val() && this.doSearch()
      },
      onKeyDown: function(e) {
        e.which != n && e.which != r && e.which != a || e.preventDefault()
      },
      onKeyUp: function(e) {
        var t;
        this.noResults = !1, this.ui.resultsList.find("#noResults").remove(), this.ui.input.removeClass("error"), 0 == this.ui.resultsList.find("li").length && this.ui.resultContainer.hide(), e.which == n ? (null != this.selectedIndex && 0 <= this.selectedIndex ? (t = s(this.ui.resultsList.find("li").get(this.selectedIndex)).find("a").attr("href")) && this.recordSearchAndNavigate(t) : 0 < this.ui.input.val().length ? this.ui.save.click() : this.ui.input.val() || this.ui.input.addClass("error"), this.stopSearchTimer()) : e.which == l ? (this.ui.input.val(""), this.closeSearchResults()) : e.which == r && this.articles && this.articles.length ? this.arrow("up") : e.which == a && this.articles && this.articles.length ? this.arrow("down") : e.which != i && e.which != o && e.which != l && this.startSearchTimer()
      },
      startSearchTimer: function() {
        clearTimeout(this.searchTimerId), this.searchTimerId = setTimeout(s.proxy(this.checkSearch, this), 200)
      },
      stopSearchTimer: function() {
        clearTimeout(this.searchTimerId)
      },
      checkSearch: function() {
        var e = this.ui.input.val();
        e && e.length ? this.doSearch() : (this.closeSearchResults(), this.lastQueryValue = e)
      },
      doSearch: function() {
        var e = this.ui.input.val(),
          e = {
            query: this.lastQueryValue = e
          };
        this.queryXhr && this.queryXhr.abort(), this.searching = !0, this.queryXhr = s.getJSON("/search/typeahead", e).done(s.proxy(function(e) {
          e = e.articles;
          e && 0 != e.count && e.results ? (this.noResults = !1, this.articles = e.results, this.count = e.count) : (this.noResults = this.ui.input.val() == this.lastQueryValue, this.count = 0, this.articles = []), this.searching = !1, this.selectedIndex = -1, this.refresh()
        }, this))
      },
      recordSearch: function() {
        var e = this.ui.input.val();
        return this.queryHasNotChanged(e) ? s.Deferred().resolve().promise() : (this.lastRecordedQueryValue = e, s.post("/search/event", {
          query: e
        }))
      },
      recordSearchAndNavigate: function(e) {
        this.navigating = !0, this.recordSearch().done(function() {
          window.location = e
        })
      },
      queryHasNotChanged: function(e) {
        return !e || e === this.lastRecordedQueryValue
      },
      refresh: function() {
        if (this.ui.resultsList.empty(), this.ui.resultContainer.hide(), this.articles && this.articles.length) {
          for (var e = 0; e < this.articles.length; e++) {
            var t = this.articles[e],
              n = s("<li></li>"),
              i = (e == this.selectedIndex && n.addClass("active"), -1 != window.location.protocol.indexOf("https") && t.url && (t.url = t.url.replace("http://", "https://")), s('<a href="' + t.url + '"></a>').text(t.name));
            i.on("mousedown", s.proxy(function(e) {
              this.delayCloseOnBlur = !0
            }, this)).on("mouseup", s.proxy(function(e) {
              console.log("mouseup", e), clearTimeout(this.closeTimeoutId)
            }, this)), "private" === t.visibility && (n.addClass("private"), i.append("<i class='icon-private-w'></i>")), n.append(i), n.on("mouseover", s.proxy(this.hover, this)), this.ui.resultsList.append(n)
          }
          this.ui.resultsList.append(n), this.ui.resultsList.show(), this.ui.resultContainer.show()
        } else this.noResults && (this.ui.resultsList.append('<li class="noResults">' + s("#noResults").text() + "</li>"), this.ui.resultContainer.show())
      },
      closeSearchResults: function() {
        this.ui.resultsList.empty(), this.ui.resultContainer.hide(), this.navigating || this.recordSearch()
      },
      arrow: function(e) {
        var t, n, i, r;
        "up" == e ? this.selectedIndex = -1 == this.selectedIndex ? this.articles.length - 1 : this.selectedIndex - 1 : "down" == e && (this.selectedIndex = -1 == this.selectedIndex ? 0 : this.selectedIndex + 1), this.selectedIndex >= this.articles.length && (this.selectedIndex = -1), this.ui.resultsList.find("li").removeClass("active"), -1 != this.selectedIndex && (e = this.ui.resultsList.find("li").get(this.selectedIndex)) && (s(e).addClass("active"), t = s(e).position().top, e = (i = this.ui.resultsList.scrollTop()) + (n = this.ui.resultsList.height()) - s(e).height(), (t < (i = (r = this.ui.resultsList.innerHeight()) < e ? (e = r) - n : i) || e < t) && this.ui.resultsList.scrollTop(t))
      },
      hover: function(e) {
        e = s(e.target);
        e.is("li") || (e = e.closest("li")), this.selectedIndex = this.ui.resultsList.find("li").index(e), this.ui.resultsList.find(".active").removeClass("active"), e.addClass("active")
      }
    }
  }(jQuery);
