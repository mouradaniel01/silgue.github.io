/**
 * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
 *
 * @version v1.16.0
 * @homepage https://bootstrap-table.com
 * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
 * @license MIT
 */

! function (t, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : (t = t || self).BootstrapTable = e(t.jQuery)
}(this, (function (t) {
	"use strict";
	t = t && t.hasOwnProperty("default") ? t.default : t;
	var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

	function i(t, e) {
		return t(e = {
			exports: {}
		}, e.exports), e.exports
	}
	var n = function (t) {
			return t && t.Math == Math && t
		},
		o = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")(),
		r = function (t) {
			try {
				return !!t()
			} catch (t) {
				return !0
			}
		},
		a = !r((function () {
			return 7 != Object.defineProperty({}, "a", {
				get: function () {
					return 7
				}
			}).a
		})),
		s = {}.propertyIsEnumerable,
		l = Object.getOwnPropertyDescriptor,
		c = {
			f: l && !s.call({
				1: 2
			}, 1) ? function (t) {
				var e = l(this, t);
				return !!e && e.enumerable
			} : s
		},
		h = function (t, e) {
			return {
				enumerable: !(1 & t),
				configurable: !(2 & t),
				writable: !(4 & t),
				value: e
			}
		},
		u = {}.toString,
		d = function (t) {
			return u.call(t).slice(8, -1)
		},
		f = "".split,
		p = r((function () {
			return !Object("z").propertyIsEnumerable(0)
		})) ? function (t) {
			return "String" == d(t) ? f.call(t, "") : Object(t)
		} : Object,
		g = function (t) {
			if (null == t) throw TypeError("Can't call method on " + t);
			return t
		},
		v = function (t) {
			return p(g(t))
		},
		b = function (t) {
			return "object" == typeof t ? null !== t : "function" == typeof t
		},
		m = function (t, e) {
			if (!b(t)) return t;
			var i, n;
			if (e && "function" == typeof (i = t.toString) && !b(n = i.call(t))) return n;
			if ("function" == typeof (i = t.valueOf) && !b(n = i.call(t))) return n;
			if (!e && "function" == typeof (i = t.toString) && !b(n = i.call(t))) return n;
			throw TypeError("Can't convert object to primitive value")
		},
		y = {}.hasOwnProperty,
		w = function (t, e) {
			return y.call(t, e)
		},
		S = o.document,
		x = b(S) && b(S.createElement),
		k = function (t) {
			return x ? S.createElement(t) : {}
		},
		O = !a && !r((function () {
			return 7 != Object.defineProperty(k("div"), "a", {
				get: function () {
					return 7
				}
			}).a
		})),
		C = Object.getOwnPropertyDescriptor,
		T = {
			f: a ? C : function (t, e) {
				if (t = v(t), e = m(e, !0), O) try {
					return C(t, e)
				} catch (t) {}
				if (w(t, e)) return h(!c.f.call(t, e), t[e])
			}
		},
		P = function (t) {
			if (!b(t)) throw TypeError(String(t) + " is not an object");
			return t
		},
		$ = Object.defineProperty,
		I = {
			f: a ? $ : function (t, e, i) {
				if (P(t), e = m(e, !0), P(i), O) try {
					return $(t, e, i)
				} catch (t) {}
				if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
				return "value" in i && (t[e] = i.value), t
			}
		},
		A = a ? function (t, e, i) {
			return I.f(t, e, h(1, i))
		} : function (t, e, i) {
			return t[e] = i, t
		},
		E = function (t, e) {
			try {
				A(o, t, e)
			} catch (i) {
				o[t] = e
			}
			return e
		},
		R = o["__core-js_shared__"] || E("__core-js_shared__", {}),
		j = Function.toString;
	"function" != typeof R.inspectSource && (R.inspectSource = function (t) {
		return j.call(t)
	});
	var N, F, _, B = R.inspectSource,
		V = o.WeakMap,
		L = "function" == typeof V && /native code/.test(B(V)),
		D = i((function (t) {
			(t.exports = function (t, e) {
				return R[t] || (R[t] = void 0 !== e ? e : {})
			})("versions", []).push({
				version: "3.6.0",
				mode: "global",
				copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
			})
		})),
		H = 0,
		M = Math.random(),
		U = function (t) {
			return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++H + M).toString(36)
		},
		z = D("keys"),
		q = function (t) {
			return z[t] || (z[t] = U(t))
		},
		W = {},
		G = o.WeakMap;
	if (L) {
		var K = new G,
			J = K.get,
			Y = K.has,
			X = K.set;
		N = function (t, e) {
			return X.call(K, t, e), e
		}, F = function (t) {
			return J.call(K, t) || {}
		}, _ = function (t) {
			return Y.call(K, t)
		}
	} else {
		var Q = q("state");
		W[Q] = !0, N = function (t, e) {
			return A(t, Q, e), e
		}, F = function (t) {
			return w(t, Q) ? t[Q] : {}
		}, _ = function (t) {
			return w(t, Q)
		}
	}
	var Z, tt = {
			set: N,
			get: F,
			has: _,
			enforce: function (t) {
				return _(t) ? F(t) : N(t, {})
			},
			getterFor: function (t) {
				return function (e) {
					var i;
					if (!b(e) || (i = F(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
					return i
				}
			}
		},
		et = i((function (t) {
			var e = tt.get,
				i = tt.enforce,
				n = String(String).split("String");
			(t.exports = function (t, e, r, a) {
				var s = !!a && !!a.unsafe,
					l = !!a && !!a.enumerable,
					c = !!a && !!a.noTargetGet;
				"function" == typeof r && ("string" != typeof e || w(r, "name") || A(r, "name", e), i(r).source = n.join("string" == typeof e ? e : "")), t !== o ? (s ? !c && t[e] && (l = !0) : delete t[e], l ? t[e] = r : A(t, e, r)) : l ? t[e] = r : E(e, r)
			})(Function.prototype, "toString", (function () {
				return "function" == typeof this && e(this).source || B(this)
			}))
		})),
		it = o,
		nt = function (t) {
			return "function" == typeof t ? t : void 0
		},
		ot = function (t, e) {
			return arguments.length < 2 ? nt(it[t]) || nt(o[t]) : it[t] && it[t][e] || o[t] && o[t][e]
		},
		rt = Math.ceil,
		at = Math.floor,
		st = function (t) {
			return isNaN(t = +t) ? 0 : (t > 0 ? at : rt)(t)
		},
		lt = Math.min,
		ct = function (t) {
			return t > 0 ? lt(st(t), 9007199254740991) : 0
		},
		ht = Math.max,
		ut = Math.min,
		dt = function (t, e) {
			var i = st(t);
			return i < 0 ? ht(i + e, 0) : ut(i, e)
		},
		ft = function (t) {
			return function (e, i, n) {
				var o, r = v(e),
					a = ct(r.length),
					s = dt(n, a);
				if (t && i != i) {
					for (; a > s;)
						if ((o = r[s++]) != o) return !0
				} else
					for (; a > s; s++)
						if ((t || s in r) && r[s] === i) return t || s || 0;
				return !t && -1
			}
		},
		pt = {
			includes: ft(!0),
			indexOf: ft(!1)
		},
		gt = pt.indexOf,
		vt = function (t, e) {
			var i, n = v(t),
				o = 0,
				r = [];
			for (i in n) !w(W, i) && w(n, i) && r.push(i);
			for (; e.length > o;) w(n, i = e[o++]) && (~gt(r, i) || r.push(i));
			return r
		},
		bt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
		mt = bt.concat("length", "prototype"),
		yt = {
			f: Object.getOwnPropertyNames || function (t) {
				return vt(t, mt)
			}
		},
		wt = {
			f: Object.getOwnPropertySymbols
		},
		St = ot("Reflect", "ownKeys") || function (t) {
			var e = yt.f(P(t)),
				i = wt.f;
			return i ? e.concat(i(t)) : e
		},
		xt = function (t, e) {
			for (var i = St(e), n = I.f, o = T.f, r = 0; r < i.length; r++) {
				var a = i[r];
				w(t, a) || n(t, a, o(e, a))
			}
		},
		kt = /#|\.prototype\./,
		Ot = function (t, e) {
			var i = Tt[Ct(t)];
			return i == $t || i != Pt && ("function" == typeof e ? r(e) : !!e)
		},
		Ct = Ot.normalize = function (t) {
			return String(t).replace(kt, ".").toLowerCase()
		},
		Tt = Ot.data = {},
		Pt = Ot.NATIVE = "N",
		$t = Ot.POLYFILL = "P",
		It = Ot,
		At = T.f,
		Et = function (t, e) {
			var i, n, r, a, s, l = t.target,
				c = t.global,
				h = t.stat;
			if (i = c ? o : h ? o[l] || E(l, {}) : (o[l] || {}).prototype)
				for (n in e) {
					if (a = e[n], r = t.noTargetGet ? (s = At(i, n)) && s.value : i[n], !It(c ? n : l + (h ? "." : "#") + n, t.forced) && void 0 !== r) {
						if (typeof a == typeof r) continue;
						xt(a, r)
					}(t.sham || r && r.sham) && A(a, "sham", !0), et(i, n, a, t)
				}
		},
		Rt = !!Object.getOwnPropertySymbols && !r((function () {
			return !String(Symbol())
		})),
		jt = Rt && !Symbol.sham && "symbol" == typeof Symbol(),
		Nt = Array.isArray || function (t) {
			return "Array" == d(t)
		},
		Ft = function (t) {
			return Object(g(t))
		},
		_t = Object.keys || function (t) {
			return vt(t, bt)
		},
		Bt = a ? Object.defineProperties : function (t, e) {
			P(t);
			for (var i, n = _t(e), o = n.length, r = 0; o > r;) I.f(t, i = n[r++], e[i]);
			return t
		},
		Vt = ot("document", "documentElement"),
		Lt = q("IE_PROTO"),
		Dt = function () {},
		Ht = function (t) {
			return "<script>" + t + "<\/script>"
		},
		Mt = function () {
			try {
				Z = document.domain && new ActiveXObject("htmlfile")
			} catch (t) {}
			var t, e;
			Mt = Z ? function (t) {
				t.write(Ht("")), t.close();
				var e = t.parentWindow.Object;
				return t = null, e
			}(Z) : ((e = k("iframe")).style.display = "none", Vt.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(Ht("document.F=Object")), t.close(), t.F);
			for (var i = bt.length; i--;) delete Mt.prototype[bt[i]];
			return Mt()
		};
	W[Lt] = !0;
	var Ut = Object.create || function (t, e) {
			var i;
			return null !== t ? (Dt.prototype = P(t), i = new Dt, Dt.prototype = null, i[Lt] = t) : i = Mt(), void 0 === e ? i : Bt(i, e)
		},
		zt = yt.f,
		qt = {}.toString,
		Wt = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
		Gt = {
			f: function (t) {
				return Wt && "[object Window]" == qt.call(t) ? function (t) {
					try {
						return zt(t)
					} catch (t) {
						return Wt.slice()
					}
				}(t) : zt(v(t))
			}
		},
		Kt = D("wks"),
		Jt = o.Symbol,
		Yt = jt ? Jt : U,
		Xt = function (t) {
			return w(Kt, t) || (Rt && w(Jt, t) ? Kt[t] = Jt[t] : Kt[t] = Yt("Symbol." + t)), Kt[t]
		},
		Qt = {
			f: Xt
		},
		Zt = I.f,
		te = function (t) {
			var e = it.Symbol || (it.Symbol = {});
			w(e, t) || Zt(e, t, {
				value: Qt.f(t)
			})
		},
		ee = I.f,
		ie = Xt("toStringTag"),
		ne = function (t, e, i) {
			t && !w(t = i ? t : t.prototype, ie) && ee(t, ie, {
				configurable: !0,
				value: e
			})
		},
		oe = function (t) {
			if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
			return t
		},
		re = Xt("species"),
		ae = function (t, e) {
			var i;
			return Nt(t) && ("function" != typeof (i = t.constructor) || i !== Array && !Nt(i.prototype) ? b(i) && null === (i = i[re]) && (i = void 0) : i = void 0), new(void 0 === i ? Array : i)(0 === e ? 0 : e)
		},
		se = [].push,
		le = function (t) {
			var e = 1 == t,
				i = 2 == t,
				n = 3 == t,
				o = 4 == t,
				r = 6 == t,
				a = 5 == t || r;
			return function (s, l, c, h) {
				for (var u, d, f = Ft(s), g = p(f), v = function (t, e, i) {
						if (oe(t), void 0 === e) return t;
						switch (i) {
							case 0:
								return function () {
									return t.call(e)
								};
							case 1:
								return function (i) {
									return t.call(e, i)
								};
							case 2:
								return function (i, n) {
									return t.call(e, i, n)
								};
							case 3:
								return function (i, n, o) {
									return t.call(e, i, n, o)
								}
						}
						return function () {
							return t.apply(e, arguments)
						}
					}(l, c, 3), b = ct(g.length), m = 0, y = h || ae, w = e ? y(s, b) : i ? y(s, 0) : void 0; b > m; m++)
					if ((a || m in g) && (d = v(u = g[m], m, f), t))
						if (e) w[m] = d;
						else if (d) switch (t) {
					case 3:
						return !0;
					case 5:
						return u;
					case 6:
						return m;
					case 2:
						se.call(w, u)
				} else if (o) return !1;
				return r ? -1 : n || o ? o : w
			}
		},
		ce = {
			forEach: le(0),
			map: le(1),
			filter: le(2),
			some: le(3),
			every: le(4),
			find: le(5),
			findIndex: le(6)
		},
		he = ce.forEach,
		ue = q("hidden"),
		de = Xt("toPrimitive"),
		fe = tt.set,
		pe = tt.getterFor("Symbol"),
		ge = Object.prototype,
		ve = o.Symbol,
		be = ot("JSON", "stringify"),
		me = T.f,
		ye = I.f,
		we = Gt.f,
		Se = c.f,
		xe = D("symbols"),
		ke = D("op-symbols"),
		Oe = D("string-to-symbol-registry"),
		Ce = D("symbol-to-string-registry"),
		Te = D("wks"),
		Pe = o.QObject,
		$e = !Pe || !Pe.prototype || !Pe.prototype.findChild,
		Ie = a && r((function () {
			return 7 != Ut(ye({}, "a", {
				get: function () {
					return ye(this, "a", {
						value: 7
					}).a
				}
			})).a
		})) ? function (t, e, i) {
			var n = me(ge, e);
			n && delete ge[e], ye(t, e, i), n && t !== ge && ye(ge, e, n)
		} : ye,
		Ae = function (t, e) {
			var i = xe[t] = Ut(ve.prototype);
			return fe(i, {
				type: "Symbol",
				tag: t,
				description: e
			}), a || (i.description = e), i
		},
		Ee = Rt && "symbol" == typeof ve.iterator ? function (t) {
			return "symbol" == typeof t
		} : function (t) {
			return Object(t) instanceof ve
		},
		Re = function (t, e, i) {
			t === ge && Re(ke, e, i), P(t);
			var n = m(e, !0);
			return P(i), w(xe, n) ? (i.enumerable ? (w(t, ue) && t[ue][n] && (t[ue][n] = !1), i = Ut(i, {
				enumerable: h(0, !1)
			})) : (w(t, ue) || ye(t, ue, h(1, {})), t[ue][n] = !0), Ie(t, n, i)) : ye(t, n, i)
		},
		je = function (t, e) {
			P(t);
			var i = v(e),
				n = _t(i).concat(Be(i));
			return he(n, (function (e) {
				a && !Ne.call(i, e) || Re(t, e, i[e])
			})), t
		},
		Ne = function (t) {
			var e = m(t, !0),
				i = Se.call(this, e);
			return !(this === ge && w(xe, e) && !w(ke, e)) && (!(i || !w(this, e) || !w(xe, e) || w(this, ue) && this[ue][e]) || i)
		},
		Fe = function (t, e) {
			var i = v(t),
				n = m(e, !0);
			if (i !== ge || !w(xe, n) || w(ke, n)) {
				var o = me(i, n);
				return !o || !w(xe, n) || w(i, ue) && i[ue][n] || (o.enumerable = !0), o
			}
		},
		_e = function (t) {
			var e = we(v(t)),
				i = [];
			return he(e, (function (t) {
				w(xe, t) || w(W, t) || i.push(t)
			})), i
		},
		Be = function (t) {
			var e = t === ge,
				i = we(e ? ke : v(t)),
				n = [];
			return he(i, (function (t) {
				!w(xe, t) || e && !w(ge, t) || n.push(xe[t])
			})), n
		};
	if (Rt || (et((ve = function () {
			if (this instanceof ve) throw TypeError("Symbol is not a constructor");
			var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
				e = U(t),
				i = function (t) {
					this === ge && i.call(ke, t), w(this, ue) && w(this[ue], e) && (this[ue][e] = !1), Ie(this, e, h(1, t))
				};
			return a && $e && Ie(ge, e, {
				configurable: !0,
				set: i
			}), Ae(e, t)
		}).prototype, "toString", (function () {
			return pe(this).tag
		})), c.f = Ne, I.f = Re, T.f = Fe, yt.f = Gt.f = _e, wt.f = Be, a && (ye(ve.prototype, "description", {
			configurable: !0,
			get: function () {
				return pe(this).description
			}
		}), et(ge, "propertyIsEnumerable", Ne, {
			unsafe: !0
		}))), jt || (Qt.f = function (t) {
			return Ae(Xt(t), t)
		}), Et({
			global: !0,
			wrap: !0,
			forced: !Rt,
			sham: !Rt
		}, {
			Symbol: ve
		}), he(_t(Te), (function (t) {
			te(t)
		})), Et({
			target: "Symbol",
			stat: !0,
			forced: !Rt
		}, {
			for: function (t) {
				var e = String(t);
				if (w(Oe, e)) return Oe[e];
				var i = ve(e);
				return Oe[e] = i, Ce[i] = e, i
			},
			keyFor: function (t) {
				if (!Ee(t)) throw TypeError(t + " is not a symbol");
				if (w(Ce, t)) return Ce[t]
			},
			useSetter: function () {
				$e = !0
			},
			useSimple: function () {
				$e = !1
			}
		}), Et({
			target: "Object",
			stat: !0,
			forced: !Rt,
			sham: !a
		}, {
			create: function (t, e) {
				return void 0 === e ? Ut(t) : je(Ut(t), e)
			},
			defineProperty: Re,
			defineProperties: je,
			getOwnPropertyDescriptor: Fe
		}), Et({
			target: "Object",
			stat: !0,
			forced: !Rt
		}, {
			getOwnPropertyNames: _e,
			getOwnPropertySymbols: Be
		}), Et({
			target: "Object",
			stat: !0,
			forced: r((function () {
				wt.f(1)
			}))
		}, {
			getOwnPropertySymbols: function (t) {
				return wt.f(Ft(t))
			}
		}), be) {
		var Ve = !Rt || r((function () {
			var t = ve();
			return "[null]" != be([t]) || "{}" != be({
				a: t
			}) || "{}" != be(Object(t))
		}));
		Et({
			target: "JSON",
			stat: !0,
			forced: Ve
		}, {
			stringify: function (t, e, i) {
				for (var n, o = [t], r = 1; arguments.length > r;) o.push(arguments[r++]);
				if (n = e, (b(e) || void 0 !== t) && !Ee(t)) return Nt(e) || (e = function (t, e) {
					if ("function" == typeof n && (e = n.call(this, t, e)), !Ee(e)) return e
				}), o[1] = e, be.apply(null, o)
			}
		})
	}
	ve.prototype[de] || A(ve.prototype, de, ve.prototype.valueOf), ne(ve, "Symbol"), W[ue] = !0;
	var Le = I.f,
		De = o.Symbol;
	if (a && "function" == typeof De && (!("description" in De.prototype) || void 0 !== De().description)) {
		var He = {},
			Me = function () {
				var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
					e = this instanceof Me ? new De(t) : void 0 === t ? De() : De(t);
				return "" === t && (He[e] = !0), e
			};
		xt(Me, De);
		var Ue = Me.prototype = De.prototype;
		Ue.constructor = Me;
		var ze = Ue.toString,
			qe = "Symbol(test)" == String(De("test")),
			We = /^Symbol\((.*)\)[^)]+$/;
		Le(Ue, "description", {
			configurable: !0,
			get: function () {
				var t = b(this) ? this.valueOf() : this,
					e = ze.call(t);
				if (w(He, t)) return "";
				var i = qe ? e.slice(7, -1) : e.replace(We, "$1");
				return "" === i ? void 0 : i
			}
		}), Et({
			global: !0,
			forced: !0
		}, {
			Symbol: Me
		})
	}
	te("iterator");
	var Ge, Ke, Je = function (t, e, i) {
			var n = m(e);
			n in t ? I.f(t, n, h(0, i)) : t[n] = i
		},
		Ye = ot("navigator", "userAgent") || "",
		Xe = o.process,
		Qe = Xe && Xe.versions,
		Ze = Qe && Qe.v8;
	Ze ? Ke = (Ge = Ze.split("."))[0] + Ge[1] : Ye && (!(Ge = Ye.match(/Edge\/(\d+)/)) || Ge[1] >= 74) && (Ge = Ye.match(/Chrome\/(\d+)/)) && (Ke = Ge[1]);
	var ti = Ke && +Ke,
		ei = Xt("species"),
		ii = function (t) {
			return ti >= 51 || !r((function () {
				var e = [];
				return (e.constructor = {})[ei] = function () {
					return {
						foo: 1
					}
				}, 1 !== e[t](Boolean).foo
			}))
		},
		ni = Xt("isConcatSpreadable"),
		oi = ti >= 51 || !r((function () {
			var t = [];
			return t[ni] = !1, t.concat()[0] !== t
		})),
		ri = ii("concat"),
		ai = function (t) {
			if (!b(t)) return !1;
			var e = t[ni];
			return void 0 !== e ? !!e : Nt(t)
		};
	Et({
		target: "Array",
		proto: !0,
		forced: !oi || !ri
	}, {
		concat: function (t) {
			var e, i, n, o, r, a = Ft(this),
				s = ae(a, 0),
				l = 0;
			for (e = -1, n = arguments.length; e < n; e++)
				if (r = -1 === e ? a : arguments[e], ai(r)) {
					if (l + (o = ct(r.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
					for (i = 0; i < o; i++, l++) i in r && Je(s, l, r[i])
				} else {
					if (l >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
					Je(s, l++, r)
				}
			return s.length = l, s
		}
	});
	var si = ce.filter,
		li = ii("filter"),
		ci = li && !r((function () {
			[].filter.call({
				length: -1,
				0: 1
			}, (function (t) {
				throw t
			}))
		}));
	Et({
		target: "Array",
		proto: !0,
		forced: !li || !ci
	}, {
		filter: function (t) {
			return si(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var hi = Xt("unscopables"),
		ui = Array.prototype;
	null == ui[hi] && I.f(ui, hi, {
		configurable: !0,
		value: Ut(null)
	});
	var di = function (t) {
			ui[hi][t] = !0
		},
		fi = ce.find,
		pi = !0;
	"find" in [] && Array(1).find((function () {
		pi = !1
	})), Et({
		target: "Array",
		proto: !0,
		forced: pi
	}, {
		find: function (t) {
			return fi(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), di("find");
	var gi = ce.findIndex,
		vi = !0;
	"findIndex" in [] && Array(1).findIndex((function () {
		vi = !1
	})), Et({
		target: "Array",
		proto: !0,
		forced: vi
	}, {
		findIndex: function (t) {
			return gi(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), di("findIndex");
	var bi = pt.includes;
	Et({
		target: "Array",
		proto: !0
	}, {
		includes: function (t) {
			return bi(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), di("includes");
	var mi = function (t, e) {
			var i = [][t];
			return !i || !r((function () {
				i.call(null, e || function () {
					throw 1
				}, 1)
			}))
		},
		yi = pt.indexOf,
		wi = [].indexOf,
		Si = !!wi && 1 / [1].indexOf(1, -0) < 0,
		xi = mi("indexOf");
	Et({
		target: "Array",
		proto: !0,
		forced: Si || xi
	}, {
		indexOf: function (t) {
			return Si ? wi.apply(this, arguments) || 0 : yi(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var ki, Oi, Ci, Ti = !r((function () {
			function t() {}
			return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
		})),
		Pi = q("IE_PROTO"),
		$i = Object.prototype,
		Ii = Ti ? Object.getPrototypeOf : function (t) {
			return t = Ft(t), w(t, Pi) ? t[Pi] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? $i : null
		},
		Ai = Xt("iterator"),
		Ei = !1;
	[].keys && ("next" in (Ci = [].keys()) ? (Oi = Ii(Ii(Ci))) !== Object.prototype && (ki = Oi) : Ei = !0), null == ki && (ki = {}), w(ki, Ai) || A(ki, Ai, (function () {
		return this
	}));
	var Ri = {
			IteratorPrototype: ki,
			BUGGY_SAFARI_ITERATORS: Ei
		},
		ji = Ri.IteratorPrototype,
		Ni = Object.setPrototypeOf || ("__proto__" in {} ? function () {
			var t, e = !1,
				i = {};
			try {
				(t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []), e = i instanceof Array
			} catch (t) {}
			return function (i, n) {
				return P(i),
					function (t) {
						if (!b(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
					}(n), e ? t.call(i, n) : i.__proto__ = n, i
			}
		}() : void 0),
		Fi = Ri.IteratorPrototype,
		_i = Ri.BUGGY_SAFARI_ITERATORS,
		Bi = Xt("iterator"),
		Vi = function () {
			return this
		},
		Li = function (t, e, i, n, o, r, a) {
			! function (t, e, i) {
				var n = e + " Iterator";
				t.prototype = Ut(ji, {
					next: h(1, i)
				}), ne(t, n, !1)
			}(i, e, n);
			var s, l, c, u = function (t) {
					if (t === o && v) return v;
					if (!_i && t in p) return p[t];
					switch (t) {
						case "keys":
						case "values":
						case "entries":
							return function () {
								return new i(this, t)
							}
					}
					return function () {
						return new i(this)
					}
				},
				d = e + " Iterator",
				f = !1,
				p = t.prototype,
				g = p[Bi] || p["@@iterator"] || o && p[o],
				v = !_i && g || u(o),
				b = "Array" == e && p.entries || g;
			if (b && (s = Ii(b.call(new t)), Fi !== Object.prototype && s.next && (Ii(s) !== Fi && (Ni ? Ni(s, Fi) : "function" != typeof s[Bi] && A(s, Bi, Vi)), ne(s, d, !0))), "values" == o && g && "values" !== g.name && (f = !0, v = function () {
					return g.call(this)
				}), p[Bi] !== v && A(p, Bi, v), o)
				if (l = {
						values: u("values"),
						keys: r ? v : u("keys"),
						entries: u("entries")
					}, a)
					for (c in l) !_i && !f && c in p || et(p, c, l[c]);
				else Et({
					target: e,
					proto: !0,
					forced: _i || f
				}, l);
			return l
		},
		Di = tt.set,
		Hi = tt.getterFor("Array Iterator"),
		Mi = Li(Array, "Array", (function (t, e) {
			Di(this, {
				type: "Array Iterator",
				target: v(t),
				index: 0,
				kind: e
			})
		}), (function () {
			var t = Hi(this),
				e = t.target,
				i = t.kind,
				n = t.index++;
			return !e || n >= e.length ? (t.target = void 0, {
				value: void 0,
				done: !0
			}) : "keys" == i ? {
				value: n,
				done: !1
			} : "values" == i ? {
				value: e[n],
				done: !1
			} : {
				value: [n, e[n]],
				done: !1
			}
		}), "values");
	di("keys"), di("values"), di("entries");
	var Ui = [].join,
		zi = p != Object,
		qi = mi("join", ",");
	Et({
		target: "Array",
		proto: !0,
		forced: zi || qi
	}, {
		join: function (t) {
			return Ui.call(v(this), void 0 === t ? "," : t)
		}
	});
	var Wi = ce.map,
		Gi = ii("map"),
		Ki = Gi && !r((function () {
			[].map.call({
				length: -1,
				0: 1
			}, (function (t) {
				throw t
			}))
		}));
	Et({
		target: "Array",
		proto: !0,
		forced: !Gi || !Ki
	}, {
		map: function (t) {
			return Wi(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var Ji = [].reverse,
		Yi = [1, 2];
	Et({
		target: "Array",
		proto: !0,
		forced: String(Yi) === String(Yi.reverse())
	}, {
		reverse: function () {
			return Nt(this) && (this.length = this.length), Ji.call(this)
		}
	});
	var Xi = Xt("species"),
		Qi = [].slice,
		Zi = Math.max;
	Et({
		target: "Array",
		proto: !0,
		forced: !ii("slice")
	}, {
		slice: function (t, e) {
			var i, n, o, r = v(this),
				a = ct(r.length),
				s = dt(t, a),
				l = dt(void 0 === e ? a : e, a);
			if (Nt(r) && ("function" != typeof (i = r.constructor) || i !== Array && !Nt(i.prototype) ? b(i) && null === (i = i[Xi]) && (i = void 0) : i = void 0, i === Array || void 0 === i)) return Qi.call(r, s, l);
			for (n = new(void 0 === i ? Array : i)(Zi(l - s, 0)), o = 0; s < l; s++, o++) s in r && Je(n, o, r[s]);
			return n.length = o, n
		}
	});
	var tn = [],
		en = tn.sort,
		nn = r((function () {
			tn.sort(void 0)
		})),
		on = r((function () {
			tn.sort(null)
		})),
		rn = mi("sort");
	Et({
		target: "Array",
		proto: !0,
		forced: nn || !on || rn
	}, {
		sort: function (t) {
			return void 0 === t ? en.call(Ft(this)) : en.call(Ft(this), oe(t))
		}
	});
	var an = Math.max,
		sn = Math.min;
	Et({
		target: "Array",
		proto: !0,
		forced: !ii("splice")
	}, {
		splice: function (t, e) {
			var i, n, o, r, a, s, l = Ft(this),
				c = ct(l.length),
				h = dt(t, c),
				u = arguments.length;
			if (0 === u ? i = n = 0 : 1 === u ? (i = 0, n = c - h) : (i = u - 2, n = sn(an(st(e), 0), c - h)), c + i - n > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
			for (o = ae(l, n), r = 0; r < n; r++)(a = h + r) in l && Je(o, r, l[a]);
			if (o.length = n, i < n) {
				for (r = h; r < c - n; r++) s = r + i, (a = r + n) in l ? l[s] = l[a] : delete l[s];
				for (r = c; r > c - n + i; r--) delete l[r - 1]
			} else if (i > n)
				for (r = c - n; r > h; r--) s = r + i - 1, (a = r + n - 1) in l ? l[s] = l[a] : delete l[s];
			for (r = 0; r < i; r++) l[r + h] = arguments[r + 2];
			return l.length = c - n + i, o
		}
	});
	var ln = function (t, e, i) {
			var n, o;
			return Ni && "function" == typeof (n = e.constructor) && n !== i && b(o = n.prototype) && o !== i.prototype && Ni(t, o), t
		},
		cn = "\t\n\v\f\r Â áš€â€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff",
		hn = "[" + cn + "]",
		un = RegExp("^" + hn + hn + "*"),
		dn = RegExp(hn + hn + "*$"),
		fn = function (t) {
			return function (e) {
				var i = String(g(e));
				return 1 & t && (i = i.replace(un, "")), 2 & t && (i = i.replace(dn, "")), i
			}
		},
		pn = {
			start: fn(1),
			end: fn(2),
			trim: fn(3)
		},
		gn = yt.f,
		vn = T.f,
		bn = I.f,
		mn = pn.trim,
		yn = o.Number,
		wn = yn.prototype,
		Sn = "Number" == d(Ut(wn)),
		xn = function (t) {
			var e, i, n, o, r, a, s, l, c = m(t, !1);
			if ("string" == typeof c && c.length > 2)
				if (43 === (e = (c = mn(c)).charCodeAt(0)) || 45 === e) {
					if (88 === (i = c.charCodeAt(2)) || 120 === i) return NaN
				} else if (48 === e) {
				switch (c.charCodeAt(1)) {
					case 66:
					case 98:
						n = 2, o = 49;
						break;
					case 79:
					case 111:
						n = 8, o = 55;
						break;
					default:
						return +c
				}
				for (a = (r = c.slice(2)).length, s = 0; s < a; s++)
					if ((l = r.charCodeAt(s)) < 48 || l > o) return NaN;
				return parseInt(r, n)
			}
			return +c
		};
	if (It("Number", !yn(" 0o1") || !yn("0b1") || yn("+0x1"))) {
		for (var kn, On = function (t) {
				var e = arguments.length < 1 ? 0 : t,
					i = this;
				return i instanceof On && (Sn ? r((function () {
					wn.valueOf.call(i)
				})) : "Number" != d(i)) ? ln(new yn(xn(e)), i, On) : xn(e)
			}, Cn = a ? gn(yn) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), Tn = 0; Cn.length > Tn; Tn++) w(yn, kn = Cn[Tn]) && !w(On, kn) && bn(On, kn, vn(yn, kn));
		On.prototype = wn, wn.constructor = On, et(o, "Number", On)
	}
	var Pn = Object.assign,
		$n = Object.defineProperty,
		In = !Pn || r((function () {
			if (a && 1 !== Pn({
					b: 1
				}, Pn($n({}, "a", {
					enumerable: !0,
					get: function () {
						$n(this, "b", {
							value: 3,
							enumerable: !1
						})
					}
				}), {
					b: 2
				})).b) return !0;
			var t = {},
				e = {},
				i = Symbol();
			return t[i] = 7, "abcdefghijklmnopqrst".split("").forEach((function (t) {
				e[t] = t
			})), 7 != Pn({}, t)[i] || "abcdefghijklmnopqrst" != _t(Pn({}, e)).join("")
		})) ? function (t, e) {
			for (var i = Ft(t), n = arguments.length, o = 1, r = wt.f, s = c.f; n > o;)
				for (var l, h = p(arguments[o++]), u = r ? _t(h).concat(r(h)) : _t(h), d = u.length, f = 0; d > f;) l = u[f++], a && !s.call(h, l) || (i[l] = h[l]);
			return i
		} : Pn;
	Et({
		target: "Object",
		stat: !0,
		forced: Object.assign !== In
	}, {
		assign: In
	});
	var An = c.f,
		En = function (t) {
			return function (e) {
				for (var i, n = v(e), o = _t(n), r = o.length, s = 0, l = []; r > s;) i = o[s++], a && !An.call(n, i) || l.push(t ? [i, n[i]] : n[i]);
				return l
			}
		},
		Rn = {
			entries: En(!0),
			values: En(!1)
		}.entries;
	Et({
		target: "Object",
		stat: !0
	}, {
		entries: function (t) {
			return Rn(t)
		}
	});
	var jn = {};
	jn[Xt("toStringTag")] = "z";
	var Nn = "[object z]" === String(jn),
		Fn = Xt("toStringTag"),
		_n = "Arguments" == d(function () {
			return arguments
		}()),
		Bn = Nn ? d : function (t) {
			var e, i, n;
			return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = function (t, e) {
				try {
					return t[e]
				} catch (t) {}
			}(e = Object(t), Fn)) ? i : _n ? d(e) : "Object" == (n = d(e)) && "function" == typeof e.callee ? "Arguments" : n
		},
		Vn = Nn ? {}.toString : function () {
			return "[object " + Bn(this) + "]"
		};
	Nn || et(Object.prototype, "toString", Vn, {
		unsafe: !0
	});
	var Ln = pn.trim,
		Dn = o.parseFloat,
		Hn = 1 / Dn(cn + "-0") != -1 / 0 ? function (t) {
			var e = Ln(String(t)),
				i = Dn(e);
			return 0 === i && "-" == e.charAt(0) ? -0 : i
		} : Dn;
	Et({
		global: !0,
		forced: parseFloat != Hn
	}, {
		parseFloat: Hn
	});
	var Mn = pn.trim,
		Un = o.parseInt,
		zn = /^[+-]?0[Xx]/,
		qn = 8 !== Un(cn + "08") || 22 !== Un(cn + "0x16") ? function (t, e) {
			var i = Mn(String(t));
			return Un(i, e >>> 0 || (zn.test(i) ? 16 : 10))
		} : Un;
	Et({
		global: !0,
		forced: parseInt != qn
	}, {
		parseInt: qn
	});
	var Wn = function () {
		var t = P(this),
			e = "";
		return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
	};

	function Gn(t, e) {
		return RegExp(t, e)
	}
	var Kn, Jn, Yn = {
			UNSUPPORTED_Y: r((function () {
				var t = Gn("a", "y");
				return t.lastIndex = 2, null != t.exec("abcd")
			})),
			BROKEN_CARET: r((function () {
				var t = Gn("^r", "gy");
				return t.lastIndex = 2, null != t.exec("str")
			}))
		},
		Xn = RegExp.prototype.exec,
		Qn = String.prototype.replace,
		Zn = Xn,
		to = (Kn = /a/, Jn = /b*/g, Xn.call(Kn, "a"), Xn.call(Jn, "a"), 0 !== Kn.lastIndex || 0 !== Jn.lastIndex),
		eo = Yn.UNSUPPORTED_Y || Yn.BROKEN_CARET,
		io = void 0 !== /()??/.exec("")[1];
	(to || io || eo) && (Zn = function (t) {
		var e, i, n, o, r = this,
			a = eo && r.sticky,
			s = Wn.call(r),
			l = r.source,
			c = 0,
			h = t;
		return a && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), h = String(t).slice(r.lastIndex), r.lastIndex > 0 && (!r.multiline || r.multiline && "\n" !== t[r.lastIndex - 1]) && (l = "(?: " + l + ")", h = " " + h, c++), i = new RegExp("^(?:" + l + ")", s)), io && (i = new RegExp("^" + l + "$(?!\\s)", s)), to && (e = r.lastIndex), n = Xn.call(a ? i : r, h), a ? n ? (n.input = n.input.slice(c), n[0] = n[0].slice(c), n.index = r.lastIndex, r.lastIndex += n[0].length) : r.lastIndex = 0 : to && n && (r.lastIndex = r.global ? n.index + n[0].length : e), io && n && n.length > 1 && Qn.call(n[0], i, (function () {
			for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (n[o] = void 0)
		})), n
	});
	var no = Zn;
	Et({
		target: "RegExp",
		proto: !0,
		forced: /./.exec !== no
	}, {
		exec: no
	});
	var oo = RegExp.prototype,
		ro = oo.toString,
		ao = r((function () {
			return "/a/b" != ro.call({
				source: "a",
				flags: "b"
			})
		})),
		so = "toString" != ro.name;
	(ao || so) && et(RegExp.prototype, "toString", (function () {
		var t = P(this),
			e = String(t.source),
			i = t.flags;
		return "/" + e + "/" + String(void 0 === i && t instanceof RegExp && !("flags" in oo) ? Wn.call(t) : i)
	}), {
		unsafe: !0
	});
	var lo = Xt("match"),
		co = function (t) {
			var e;
			return b(t) && (void 0 !== (e = t[lo]) ? !!e : "RegExp" == d(t))
		},
		ho = function (t) {
			if (co(t)) throw TypeError("The method doesn't accept regular expressions");
			return t
		},
		uo = Xt("match");
	Et({
		target: "String",
		proto: !0,
		forced: ! function (t) {
			var e = /./;
			try {
				"/./" [t](e)
			} catch (i) {
				try {
					return e[uo] = !1, "/./" [t](e)
				} catch (t) {}
			}
			return !1
		}("includes")
	}, {
		includes: function (t) {
			return !!~String(g(this)).indexOf(ho(t), arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var fo = function (t) {
			return function (e, i) {
				var n, o, r = String(g(e)),
					a = st(i),
					s = r.length;
				return a < 0 || a >= s ? t ? "" : void 0 : (n = r.charCodeAt(a)) < 55296 || n > 56319 || a + 1 === s || (o = r.charCodeAt(a + 1)) < 56320 || o > 57343 ? t ? r.charAt(a) : n : t ? r.slice(a, a + 2) : o - 56320 + (n - 55296 << 10) + 65536
			}
		},
		po = {
			codeAt: fo(!1),
			charAt: fo(!0)
		},
		go = po.charAt,
		vo = tt.set,
		bo = tt.getterFor("String Iterator");
	Li(String, "String", (function (t) {
		vo(this, {
			type: "String Iterator",
			string: String(t),
			index: 0
		})
	}), (function () {
		var t, e = bo(this),
			i = e.string,
			n = e.index;
		return n >= i.length ? {
			value: void 0,
			done: !0
		} : (t = go(i, n), e.index += t.length, {
			value: t,
			done: !1
		})
	}));
	var mo = Xt("species"),
		yo = !r((function () {
			var t = /./;
			return t.exec = function () {
				var t = [];
				return t.groups = {
					a: "7"
				}, t
			}, "7" !== "".replace(t, "$<a>")
		})),
		wo = "$0" === "a".replace(/./, "$0"),
		So = !r((function () {
			var t = /(?:)/,
				e = t.exec;
			t.exec = function () {
				return e.apply(this, arguments)
			};
			var i = "ab".split(t);
			return 2 !== i.length || "a" !== i[0] || "b" !== i[1]
		})),
		xo = function (t, e, i, n) {
			var o = Xt(t),
				a = !r((function () {
					var e = {};
					return e[o] = function () {
						return 7
					}, 7 != "" [t](e)
				})),
				s = a && !r((function () {
					var e = !1,
						i = /a/;
					return "split" === t && ((i = {}).constructor = {}, i.constructor[mo] = function () {
						return i
					}, i.flags = "", i[o] = /./ [o]), i.exec = function () {
						return e = !0, null
					}, i[o](""), !e
				}));
			if (!a || !s || "replace" === t && (!yo || !wo) || "split" === t && !So) {
				var l = /./ [o],
					c = i(o, "" [t], (function (t, e, i, n, o) {
						return e.exec === no ? a && !o ? {
							done: !0,
							value: l.call(e, i, n)
						} : {
							done: !0,
							value: t.call(i, e, n)
						} : {
							done: !1
						}
					}), {
						REPLACE_KEEPS_$0: wo
					}),
					h = c[0],
					u = c[1];
				et(String.prototype, t, h), et(RegExp.prototype, o, 2 == e ? function (t, e) {
					return u.call(t, this, e)
				} : function (t) {
					return u.call(t, this)
				})
			}
			n && A(RegExp.prototype[o], "sham", !0)
		},
		ko = po.charAt,
		Oo = function (t, e, i) {
			return e + (i ? ko(t, e).length : 1)
		},
		Co = function (t, e) {
			var i = t.exec;
			if ("function" == typeof i) {
				var n = i.call(t, e);
				if ("object" != typeof n) throw TypeError("RegExp exec method returned something other than an Object or null");
				return n
			}
			if ("RegExp" !== d(t)) throw TypeError("RegExp#exec called on incompatible receiver");
			return no.call(t, e)
		},
		To = Math.max,
		Po = Math.min,
		$o = Math.floor,
		Io = /\$([$&'`]|\d\d?|<[^>]*>)/g,
		Ao = /\$([$&'`]|\d\d?)/g;
	xo("replace", 2, (function (t, e, i, n) {
		return [function (i, n) {
			var o = g(this),
				r = null == i ? void 0 : i[t];
			return void 0 !== r ? r.call(i, o, n) : e.call(String(o), i, n)
		}, function (t, r) {
			if (n.REPLACE_KEEPS_$0 || "string" == typeof r && -1 === r.indexOf("$0")) {
				var a = i(e, t, this, r);
				if (a.done) return a.value
			}
			var s = P(t),
				l = String(this),
				c = "function" == typeof r;
			c || (r = String(r));
			var h = s.global;
			if (h) {
				var u = s.unicode;
				s.lastIndex = 0
			}
			for (var d = [];;) {
				var f = Co(s, l);
				if (null === f) break;
				if (d.push(f), !h) break;
				"" === String(f[0]) && (s.lastIndex = Oo(l, ct(s.lastIndex), u))
			}
			for (var p, g = "", v = 0, b = 0; b < d.length; b++) {
				f = d[b];
				for (var m = String(f[0]), y = To(Po(st(f.index), l.length), 0), w = [], S = 1; S < f.length; S++) w.push(void 0 === (p = f[S]) ? p : String(p));
				var x = f.groups;
				if (c) {
					var k = [m].concat(w, y, l);
					void 0 !== x && k.push(x);
					var O = String(r.apply(void 0, k))
				} else O = o(m, l, y, w, x, r);
				y >= v && (g += l.slice(v, y) + O, v = y + m.length)
			}
			return g + l.slice(v)
		}];

		function o(t, i, n, o, r, a) {
			var s = n + t.length,
				l = o.length,
				c = Ao;
			return void 0 !== r && (r = Ft(r), c = Io), e.call(a, c, (function (e, a) {
				var c;
				switch (a.charAt(0)) {
					case "$":
						return "$";
					case "&":
						return t;
					case "`":
						return i.slice(0, n);
					case "'":
						return i.slice(s);
					case "<":
						c = r[a.slice(1, -1)];
						break;
					default:
						var h = +a;
						if (0 === h) return e;
						if (h > l) {
							var u = $o(h / 10);
							return 0 === u ? e : u <= l ? void 0 === o[u - 1] ? a.charAt(1) : o[u - 1] + a.charAt(1) : e
						}
						c = o[h - 1]
				}
				return void 0 === c ? "" : c
			}))
		}
	}));
	var Eo = Object.is || function (t, e) {
		return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
	};
	xo("search", 1, (function (t, e, i) {
		return [function (e) {
			var i = g(this),
				n = null == e ? void 0 : e[t];
			return void 0 !== n ? n.call(e, i) : new RegExp(e)[t](String(i))
		}, function (t) {
			var n = i(e, t, this);
			if (n.done) return n.value;
			var o = P(t),
				r = String(this),
				a = o.lastIndex;
			Eo(a, 0) || (o.lastIndex = 0);
			var s = Co(o, r);
			return Eo(o.lastIndex, a) || (o.lastIndex = a), null === s ? -1 : s.index
		}]
	}));
	var Ro = Xt("species"),
		jo = [].push,
		No = Math.min,
		Fo = !r((function () {
			return !RegExp(4294967295, "y")
		}));
	xo("split", 2, (function (t, e, i) {
		var n;
		return n = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, i) {
			var n = String(g(this)),
				o = void 0 === i ? 4294967295 : i >>> 0;
			if (0 === o) return [];
			if (void 0 === t) return [n];
			if (!co(t)) return e.call(n, t, o);
			for (var r, a, s, l = [], c = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), h = 0, u = new RegExp(t.source, c + "g");
				(r = no.call(u, n)) && !((a = u.lastIndex) > h && (l.push(n.slice(h, r.index)), r.length > 1 && r.index < n.length && jo.apply(l, r.slice(1)), s = r[0].length, h = a, l.length >= o));) u.lastIndex === r.index && u.lastIndex++;
			return h === n.length ? !s && u.test("") || l.push("") : l.push(n.slice(h)), l.length > o ? l.slice(0, o) : l
		} : "0".split(void 0, 0).length ? function (t, i) {
			return void 0 === t && 0 === i ? [] : e.call(this, t, i)
		} : e, [function (e, i) {
			var o = g(this),
				r = null == e ? void 0 : e[t];
			return void 0 !== r ? r.call(e, o, i) : n.call(String(o), e, i)
		}, function (t, o) {
			var r = i(n, t, this, o, n !== e);
			if (r.done) return r.value;
			var a = P(t),
				s = String(this),
				l = function (t, e) {
					var i, n = P(t).constructor;
					return void 0 === n || null == (i = P(n)[Ro]) ? e : oe(i)
				}(a, RegExp),
				c = a.unicode,
				h = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (Fo ? "y" : "g"),
				u = new l(Fo ? a : "^(?:" + a.source + ")", h),
				d = void 0 === o ? 4294967295 : o >>> 0;
			if (0 === d) return [];
			if (0 === s.length) return null === Co(u, s) ? [s] : [];
			for (var f = 0, p = 0, g = []; p < s.length;) {
				u.lastIndex = Fo ? p : 0;
				var v, b = Co(u, Fo ? s : s.slice(p));
				if (null === b || (v = No(ct(u.lastIndex + (Fo ? 0 : p)), s.length)) === f) p = Oo(s, p, c);
				else {
					if (g.push(s.slice(f, p)), g.length === d) return g;
					for (var m = 1; m <= b.length - 1; m++)
						if (g.push(b[m]), g.length === d) return g;
					p = f = v
				}
			}
			return g.push(s.slice(f)), g
		}]
	}), !Fo);
	var _o = pn.trim;
	Et({
		target: "String",
		proto: !0,
		forced: function (t) {
			return r((function () {
				return !!cn[t]() || "â€‹Â…á Ž" != "â€‹Â…á Ž" [t]() || cn[t].name !== t
			}))
		}("trim")
	}, {
		trim: function () {
			return _o(this)
		}
	});
	var Bo = {
			CSSRuleList: 0,
			CSSStyleDeclaration: 0,
			CSSValueList: 0,
			ClientRectList: 0,
			DOMRectList: 0,
			DOMStringList: 0,
			DOMTokenList: 1,
			DataTransferItemList: 0,
			FileList: 0,
			HTMLAllCollection: 0,
			HTMLCollection: 0,
			HTMLFormElement: 0,
			HTMLSelectElement: 0,
			MediaList: 0,
			MimeTypeArray: 0,
			NamedNodeMap: 0,
			NodeList: 1,
			PaintRequestList: 0,
			Plugin: 0,
			PluginArray: 0,
			SVGLengthList: 0,
			SVGNumberList: 0,
			SVGPathSegList: 0,
			SVGPointList: 0,
			SVGStringList: 0,
			SVGTransformList: 0,
			SourceBufferList: 0,
			StyleSheetList: 0,
			TextTrackCueList: 0,
			TextTrackList: 0,
			TouchList: 0
		},
		Vo = ce.forEach,
		Lo = mi("forEach") ? function (t) {
			return Vo(this, t, arguments.length > 1 ? arguments[1] : void 0)
		} : [].forEach;
	for (var Do in Bo) {
		var Ho = o[Do],
			Mo = Ho && Ho.prototype;
		if (Mo && Mo.forEach !== Lo) try {
			A(Mo, "forEach", Lo)
		} catch (t) {
			Mo.forEach = Lo
		}
	}
	var Uo = Xt("iterator"),
		zo = Xt("toStringTag"),
		qo = Mi.values;
	for (var Wo in Bo) {
		var Go = o[Wo],
			Ko = Go && Go.prototype;
		if (Ko) {
			if (Ko[Uo] !== qo) try {
				A(Ko, Uo, qo)
			} catch (t) {
				Ko[Uo] = qo
			}
			if (Ko[zo] || A(Ko, zo, Wo), Bo[Wo])
				for (var Jo in Mi)
					if (Ko[Jo] !== Mi[Jo]) try {
						A(Ko, Jo, Mi[Jo])
					} catch (t) {
						Ko[Jo] = Mi[Jo]
					}
		}
	}

	function Yo(t) {
		return (Yo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
			return typeof t
		} : function (t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function Xo(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function Qo(t, e) {
		for (var i = 0; i < e.length; i++) {
			var n = e[i];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
		}
	}

	function Zo(t, e, i) {
		return e && Qo(t.prototype, e), i && Qo(t, i), t
	}

	function tr(t, e) {
		return function (t) {
			if (Array.isArray(t)) return t
		}(t) || function (t, e) {
			if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
			var i = [],
				n = !0,
				o = !1,
				r = void 0;
			try {
				for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done) && (i.push(a.value), !e || i.length !== e); n = !0);
			} catch (t) {
				o = !0, r = t
			} finally {
				try {
					n || null == s.return || s.return()
				} finally {
					if (o) throw r
				}
			}
			return i
		}(t, e) || function () {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}()
	}

	function er(t) {
		return function (t) {
			if (Array.isArray(t)) {
				for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
				return i
			}
		}(t) || function (t) {
			if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
		}(t) || function () {
			throw new TypeError("Invalid attempt to spread non-iterable instance")
		}()
	}
	var ir = 4;
	try {
		var nr = t.fn.dropdown.Constructor.VERSION;
		void 0 !== nr && (ir = parseInt(nr, 10))
	} catch (t) {}
	var or = {
			3: {
				iconsPrefix: "glyphicon",
				icons: {
					paginationSwitchDown: "glyphicon-collapse-down icon-chevron-down",
					paginationSwitchUp: "glyphicon-collapse-up icon-chevron-up",
					refresh: "glyphicon-refresh icon-refresh",
					toggleOff: "glyphicon-list-alt icon-list-alt",
					toggleOn: "glyphicon-list-alt icon-list-alt",
					columns: "glyphicon-th icon-th",
					detailOpen: "glyphicon-plus icon-plus",
					detailClose: "glyphicon-minus icon-minus",
					fullscreen: "glyphicon-fullscreen",
					search: "glyphicon-search",
					clearSearch: "glyphicon-trash"
				},
				classes: {
					buttonsPrefix: "btn",
					buttons: "default",
					buttonsGroup: "btn-group",
					buttonsDropdown: "btn-group",
					pull: "pull",
					inputGroup: "input-group",
					inputPrefix: "input-",
					input: "form-control",
					paginationDropdown: "btn-group dropdown",
					dropup: "dropup",
					dropdownActive: "active",
					paginationActive: "active",
					buttonActive: "active"
				},
				html: {
					toolbarDropdown: ['<ul class="dropdown-menu" role="menu">', "</ul>"],
					toolbarDropdownItem: '<li class="dropdown-item-marker" role="menuitem"><label>%s</label></li>',
					toolbarDropdownSeparator: '<li class="divider"></li>',
					pageDropdown: ['<ul class="dropdown-menu" role="menu">', "</ul>"],
					pageDropdownItem: '<li role="menuitem" class="%s"><a href="#">%s</a></li>',
					dropdownCaret: '<span class="caret"></span>',
					pagination: ['<ul class="pagination%s">', "</ul>"],
					paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
					icon: '<i class="%s %s"></i>',
					inputGroup: '<div class="input-group">%s<span class="input-group-btn">%s</span></div>',
					searchInput: '<input class="%s%s" type="text" placeholder="%s">',
					searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
					searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>'
				}
			},
			4: {
				iconsPrefix: "fa",
				icons: {
					paginationSwitchDown: "fa-caret-square-down",
					paginationSwitchUp: "fa-caret-square-up",
					refresh: "fa-sync",
					toggleOff: "fa-toggle-off",
					toggleOn: "fa-toggle-on",
					columns: "fa-th-list",
					detailOpen: "fa-plus",
					detailClose: "fa-minus",
					fullscreen: "fa-arrows-alt",
					search: "fa-search",
					clearSearch: "fa-trash"
				},
				classes: {
					buttonsPrefix: "btn",
					buttons: "secondary",
					buttonsGroup: "btn-group",
					buttonsDropdown: "btn-group",
					pull: "float",
					inputGroup: "btn-group",
					inputPrefix: "form-control-",
					input: "form-control",
					paginationDropdown: "btn-group dropdown",
					dropup: "dropup",
					dropdownActive: "active",
					paginationActive: "active",
					buttonActive: "active"
				},
				html: {
					toolbarDropdown: ['<div class="dropdown-menu dropdown-menu-right">', "</div>"],
					toolbarDropdownItem: '<label class="dropdown-item dropdown-item-marker">%s</label>',
					pageDropdown: ['<div class="dropdown-menu">', "</div>"],
					pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
					toolbarDropdownSeparator: '<div class="dropdown-divider"></div>',
					dropdownCaret: '<span class="caret"></span>',
					pagination: ['<ul class="pagination%s">', "</ul>"],
					paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
					icon: '<i class="%s %s"></i>',
					inputGroup: '<div class="input-group">%s<div class="input-group-append">%s</div></div>',
					searchInput: '<input class="%s%s" type="text" placeholder="%s">',
					searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
					searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>'
				}
			}
		}[ir],
		rr = {
			height: void 0,
			classes: "table table-bordered table-hover",
			theadClasses: "",
			headerStyle: function (t) {
				return {}
			},
			rowStyle: function (t, e) {
				return {}
			},
			rowAttributes: function (t, e) {
				return {}
			},
			undefinedText: "-",
			locale: void 0,
			virtualScroll: !1,
			virtualScrollItemHeight: void 0,
			sortable: !0,
			sortClass: void 0,
			silentSort: !0,
			sortName: void 0,
			sortOrder: "asc",
			sortStable: !1,
			rememberOrder: !1,
			serverSort: !0,
			customSort: void 0,
			columns: [
				[]
			],
			data: [],
			url: void 0,
			method: "get",
			cache: !0,
			contentType: "application/json",
			dataType: "json",
			ajax: void 0,
			ajaxOptions: {},
			queryParams: function (t) {
				return t
			},
			queryParamsType: "limit",
			responseHandler: function (t) {
				return t
			},
			totalField: "total",
			totalNotFilteredField: "totalNotFiltered",
			dataField: "rows",
			pagination: !1,
			onlyInfoPagination: !1,
			showExtendedPagination: !1,
			paginationLoop: !0,
			sidePagination: "client",
			totalRows: 0,
			totalNotFiltered: 0,
			pageNumber: 1,
			pageSize: 10,
			pageList: [10, 25, 50, 100],
			paginationHAlign: "right",
			paginationVAlign: "bottom",
			paginationDetailHAlign: "left",
			paginationPreText: "‹",
			paginationNextText: "›",
			paginationSuccessivelySize: 5,
			paginationPagesBySide: 1,
			paginationUseIntermediate: !1,
			search: !1,
			searchOnEnterKey: !1,
			strictSearch: !1,
			visibleSearch: !1,
			showButtonIcons: !0,
			showButtonText: !1,
			showSearchButton: !1,
			showSearchClearButton: !1,
			trimOnSearch: !0,
			searchAlign: "right",
			searchTimeOut: 500,
			searchText: "",
			customSearch: void 0,
			showHeader: !0,
			showFooter: !1,
			footerStyle: function (t) {
				return {}
			},
			showColumns: !1,
			showColumnsToggleAll: !1,
			showColumnsSearch: !1,
			minimumCountColumns: 1,
			showPaginationSwitch: !1,
			showRefresh: !1,
			showToggle: !1,
			showFullscreen: !1,
			smartDisplay: !0,
			escape: !1,
			filterOptions: {
				filterAlgorithm: "and"
			},
			idField: void 0,
			selectItemName: "btSelectItem",
			clickToSelect: !1,
			ignoreClickToSelectOn: function (t) {
				var e = t.tagName;
				return ["A", "BUTTON"].includes(e)
			},
			singleSelect: !1,
			checkboxHeader: !0,
			maintainMetaData: !1,
			multipleSelectRow: !1,
			uniqueId: void 0,
			cardView: !1,
			detailView: !1,
			detailViewIcon: !0,
			detailViewByClick: !1,
			detailFormatter: function (t, e) {
				return ""
			},
			detailFilter: function (t, e) {
				return !0
			},
			toolbar: void 0,
			toolbarAlign: "left",
			buttonsToolbar: void 0,
			buttonsAlign: "right",
			buttonsOrder: ["paginationSwitch", "refresh", "toggle", "fullscreen", "columns"],
			buttonsPrefix: or.classes.buttonsPrefix,
			buttonsClass: or.classes.buttons,
			icons: or.icons,
			html: or.html,
			iconSize: void 0,
			iconsPrefix: or.iconsPrefix,
			onAll: function (t, e) {
				return !1
			},
			onClickCell: function (t, e, i, n) {
				return !1
			},
			onDblClickCell: function (t, e, i, n) {
				return !1
			},
			onClickRow: function (t, e) {
				return !1
			},
			onDblClickRow: function (t, e) {
				return !1
			},
			onSort: function (t, e) {
				return !1
			},
			onCheck: function (t) {
				return !1
			},
			onUncheck: function (t) {
				return !1
			},
			onCheckAll: function (t) {
				return !1
			},
			onUncheckAll: function (t) {
				return !1
			},
			onCheckSome: function (t) {
				return !1
			},
			onUncheckSome: function (t) {
				return !1
			},
			onLoadSuccess: function (t) {
				return !1
			},
			onLoadError: function (t) {
				return !1
			},
			onColumnSwitch: function (t, e) {
				return !1
			},
			onPageChange: function (t, e) {
				return !1
			},
			onSearch: function (t) {
				return !1
			},
			onToggle: function (t) {
				return !1
			},
			onPreBody: function (t) {
				return !1
			},
			onPostBody: function () {
				return !1
			},
			onPostHeader: function () {
				return !1
			},
			onPostFooter: function () {
				return !1
			},
			onExpandRow: function (t, e, i) {
				return !1
			},
			onCollapseRow: function (t, e) {
				return !1
			},
			onRefreshOptions: function (t) {
				return !1
			},
			onRefresh: function (t) {
				return !1
			},
			onResetView: function () {
				return !1
			},
			onScrollBody: function () {
				return !1
			}
		},
		ar = {
			formatLoadingMessage: function () {
				return "Loading, please wait"
			},
			formatRecordsPerPage: function (t) {
				return "".concat(t, " rows per page")
			},
			formatShowingRows: function (t, e, i, n) {
				return void 0 !== n && n > 0 && n > i ? "Showing ".concat(t, " to ").concat(e, " of ").concat(i, " rows (filtered from ").concat(n, " total rows)") : "Showing ".concat(t, " to ").concat(e, " of ").concat(i, " rows")
			},
			formatSRPaginationPreText: function () {
				return "previous page"
			},
			formatSRPaginationPageText: function (t) {
				return "to page ".concat(t)
			},
			formatSRPaginationNextText: function () {
				return "next page"
			},
			formatDetailPagination: function (t) {
				return "Showing ".concat(t, " rows")
			},
			formatSearch: function () {
				return "Search"
			},
			formatClearSearch: function () {
				return "Clear Search"
			},
			formatNoMatches: function () {
				return "No matching records found"
			},
			formatPaginationSwitch: function () {
				return "Hide/Show pagination"
			},
			formatPaginationSwitchDown: function () {
				return "Show pagination"
			},
			formatPaginationSwitchUp: function () {
				return "Hide pagination"
			},
			formatRefresh: function () {
				return "Refresh"
			},
			formatToggle: function () {
				return "Toggle"
			},
			formatToggleOn: function () {
				return "Show card view"
			},
			formatToggleOff: function () {
				return "Hide card view"
			},
			formatColumns: function () {
				return "Columns"
			},
			formatColumnsToggleAll: function () {
				return "Toggle all"
			},
			formatFullscreen: function () {
				return "Fullscreen"
			},
			formatAllRows: function () {
				return "All"
			}
		},
		sr = {
			field: void 0,
			title: void 0,
			titleTooltip: void 0,
			class: void 0,
			width: void 0,
			widthUnit: "px",
			rowspan: void 0,
			colspan: void 0,
			align: void 0,
			halign: void 0,
			falign: void 0,
			valign: void 0,
			cellStyle: void 0,
			radio: !1,
			checkbox: !1,
			checkboxEnabled: !0,
			clickToSelect: !0,
			showSelectTitle: !1,
			sortable: !1,
			sortName: void 0,
			order: "asc",
			sorter: void 0,
			visible: !0,
			switchable: !0,
			cardVisible: !0,
			searchable: !0,
			formatter: void 0,
			footerFormatter: void 0,
			detailFormatter: void 0,
			searchFormatter: !0,
			escape: !1,
			events: void 0
		};
	Object.assign(rr, ar);
	var lr = {
			VERSION: "1.16.0",
			THEME: "bootstrap".concat(ir),
			CONSTANTS: or,
			DEFAULTS: rr,
			COLUMN_DEFAULTS: sr,
			METHODS: ["getOptions", "refreshOptions", "getData", "getSelections", "getAllSelections", "load", "append", "prepend", "remove", "removeAll", "insertRow", "updateRow", "getRowByUniqueId", "updateByUniqueId", "removeByUniqueId", "updateCell", "updateCellByUniqueId", "showRow", "hideRow", "getHiddenRows", "showColumn", "hideColumn", "getVisibleColumns", "getHiddenColumns", "showAllColumns", "hideAllColumns", "mergeCells", "checkAll", "uncheckAll", "checkInvert", "check", "uncheck", "checkBy", "uncheckBy", "refresh", "destroy", "resetView", "showLoading", "hideLoading", "togglePagination", "toggleFullscreen", "toggleView", "resetSearch", "filterBy", "scrollTo", "getScrollPosition", "selectPage", "prevPage", "nextPage", "toggleDetailView", "expandRow", "collapseRow", "expandAllRows", "collapseAllRows", "updateColumnTitle", "updateFormatText"],
			EVENTS: {
				"all.bs.table": "onAll",
				"click-row.bs.table": "onClickRow",
				"dbl-click-row.bs.table": "onDblClickRow",
				"click-cell.bs.table": "onClickCell",
				"dbl-click-cell.bs.table": "onDblClickCell",
				"sort.bs.table": "onSort",
				"check.bs.table": "onCheck",
				"uncheck.bs.table": "onUncheck",
				"check-all.bs.table": "onCheckAll",
				"uncheck-all.bs.table": "onUncheckAll",
				"check-some.bs.table": "onCheckSome",
				"uncheck-some.bs.table": "onUncheckSome",
				"load-success.bs.table": "onLoadSuccess",
				"load-error.bs.table": "onLoadError",
				"column-switch.bs.table": "onColumnSwitch",
				"page-change.bs.table": "onPageChange",
				"search.bs.table": "onSearch",
				"toggle.bs.table": "onToggle",
				"pre-body.bs.table": "onPreBody",
				"post-body.bs.table": "onPostBody",
				"post-header.bs.table": "onPostHeader",
				"post-footer.bs.table": "onPostFooter",
				"expand-row.bs.table": "onExpandRow",
				"collapse-row.bs.table": "onCollapseRow",
				"refresh-options.bs.table": "onRefreshOptions",
				"reset-view.bs.table": "onResetView",
				"refresh.bs.table": "onRefresh",
				"scroll-body.bs.table": "onScrollBody"
			},
			LOCALES: {
				en: ar,
				"en-US": ar
			}
		},
		cr = r((function () {
			_t(1)
		}));
	Et({
		target: "Object",
		stat: !0,
		forced: cr
	}, {
		keys: function (t) {
			return _t(Ft(t))
		}
	});
	var hr = {
			sprintf: function (t) {
				for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
				var o = !0,
					r = 0,
					a = t.replace(/%s/g, (function () {
						var t = i[r++];
						return void 0 === t ? (o = !1, "") : t
					}));
				return o ? a : ""
			},
			isEmptyObject: function () {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return 0 === Object.entries(t).length && t.constructor === Object
			},
			isNumeric: function (t) {
				return !isNaN(parseFloat(t)) && isFinite(t)
			},
			getFieldTitle: function (t, e) {
				var i = !0,
					n = !1,
					o = void 0;
				try {
					for (var r, a = t[Symbol.iterator](); !(i = (r = a.next()).done); i = !0) {
						var s = r.value;
						if (s.field === e) return s.title
					}
				} catch (t) {
					n = !0, o = t
				} finally {
					try {
						i || null == a.return || a.return()
					} finally {
						if (n) throw o
					}
				}
				return ""
			},
			setFieldIndex: function (t) {
				var e = 0,
					i = [],
					n = !0,
					o = !1,
					r = void 0;
				try {
					for (var a, s = t[0][Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
						e += a.value.colspan || 1
					}
				} catch (t) {
					o = !0, r = t
				} finally {
					try {
						n || null == s.return || s.return()
					} finally {
						if (o) throw r
					}
				}
				for (var l = 0; l < t.length; l++) {
					i[l] = [];
					for (var c = 0; c < e; c++) i[l][c] = !1
				}
				for (var h = 0; h < t.length; h++) {
					var u = !0,
						d = !1,
						f = void 0;
					try {
						for (var p, g = t[h][Symbol.iterator](); !(u = (p = g.next()).done); u = !0) {
							var v = p.value,
								b = v.rowspan || 1,
								m = v.colspan || 1,
								y = i[h].indexOf(!1);
							v.colspanIndex = y, 1 === m ? (v.fieldIndex = y, void 0 === v.field && (v.field = y)) : v.colspanGroup = v.colspan;
							for (var w = 0; w < b; w++) i[h + w][y] = !0;
							for (var S = 0; S < m; S++) i[h][y + S] = !0
						}
					} catch (t) {
						d = !0, f = t
					} finally {
						try {
							u || null == g.return || g.return()
						} finally {
							if (d) throw f
						}
					}
				}
			},
			updateFieldGroup: function (t) {
				var e, i = (e = []).concat.apply(e, er(t)),
					n = !0,
					o = !1,
					r = void 0;
				try {
					for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
						var l = a.value,
							c = !0,
							h = !1,
							u = void 0;
						try {
							for (var d, f = l[Symbol.iterator](); !(c = (d = f.next()).done); c = !0) {
								var p = d.value;
								if (p.colspanGroup > 1) {
									for (var g = 0, v = function (t) {
											i.find((function (e) {
												return e.fieldIndex === t
											})).visible && g++
										}, b = p.colspanIndex; b < p.colspanIndex + p.colspanGroup; b++) v(b);
									p.colspan = g, p.visible = g > 0
								}
							}
						} catch (t) {
							h = !0, u = t
						} finally {
							try {
								c || null == f.return || f.return()
							} finally {
								if (h) throw u
							}
						}
					}
				} catch (t) {
					o = !0, r = t
				} finally {
					try {
						n || null == s.return || s.return()
					} finally {
						if (o) throw r
					}
				}
			},
			getScrollBarWidth: function () {
				if (void 0 === this.cachedWidth) {
					var e = t("<div/>").addClass("fixed-table-scroll-inner"),
						i = t("<div/>").addClass("fixed-table-scroll-outer");
					i.append(e), t("body").append(i);
					var n = e[0].offsetWidth;
					i.css("overflow", "scroll");
					var o = e[0].offsetWidth;
					n === o && (o = i[0].clientWidth), i.remove(), this.cachedWidth = n - o
				}
				return this.cachedWidth
			},
			calculateObjectValue: function (t, e, i, n) {
				var o = e;
				if ("string" == typeof e) {
					var r = e.split(".");
					if (r.length > 1) {
						o = window;
						var a = !0,
							s = !1,
							l = void 0;
						try {
							for (var c, h = r[Symbol.iterator](); !(a = (c = h.next()).done); a = !0) {
								o = o[c.value]
							}
						} catch (t) {
							s = !0, l = t
						} finally {
							try {
								a || null == h.return || h.return()
							} finally {
								if (s) throw l
							}
						}
					} else o = window[e]
				}
				return null !== o && "object" === Yo(o) ? o : "function" == typeof o ? o.apply(t, i || []) : !o && "string" == typeof e && this.sprintf.apply(this, [e].concat(er(i))) ? this.sprintf.apply(this, [e].concat(er(i))) : n
			},
			compareObjects: function (t, e, i) {
				var n = Object.keys(t),
					o = Object.keys(e);
				if (i && n.length !== o.length) return !1;
				for (var r = 0, a = n; r < a.length; r++) {
					var s = a[r];
					if (o.includes(s) && t[s] !== e[s]) return !1
				}
				return !0
			},
			escapeHTML: function (t) {
				return "string" == typeof t ? t.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g, """).replace(/'/g, "'").replace(/`/g, "`") : t
			},
			getRealDataAttr: function (t) {
				for (var e = 0, i = Object.entries(t); e < i.length; e++) {
					var n = tr(i[e], 2),
						o = n[0],
						r = n[1],
						a = o.split(/(?=[A-Z])/).join("-").toLowerCase();
					a !== o && (t[a] = r, delete t[o])
				}
				return t
			},
			getItemField: function (t, e, i) {
				var n = t;
				if ("string" != typeof e || t.hasOwnProperty(e)) return i ? this.escapeHTML(t[e]) : t[e];
				var o = e.split("."),
					r = !0,
					a = !1,
					s = void 0;
				try {
					for (var l, c = o[Symbol.iterator](); !(r = (l = c.next()).done); r = !0) {
						var h = l.value;
						n = n && n[h]
					}
				} catch (t) {
					a = !0, s = t
				} finally {
					try {
						r || null == c.return || c.return()
					} finally {
						if (a) throw s
					}
				}
				return i ? this.escapeHTML(n) : n
			},
			isIEBrowser: function () {
				return navigator.userAgent.includes("MSIE ") || /Trident.*rv:11\./.test(navigator.userAgent)
			},
			findIndex: function (t, e) {
				var i = !0,
					n = !1,
					o = void 0;
				try {
					for (var r, a = t[Symbol.iterator](); !(i = (r = a.next()).done); i = !0) {
						var s = r.value;
						if (JSON.stringify(s) === JSON.stringify(e)) return t.indexOf(s)
					}
				} catch (t) {
					n = !0, o = t
				} finally {
					try {
						i || null == a.return || a.return()
					} finally {
						if (n) throw o
					}
				}
				return -1
			},
			trToData: function (e, i) {
				var n = this,
					o = [],
					r = [];
				return i.each((function (i, a) {
					var s = {};
					s._id = t(a).attr("id"), s._class = t(a).attr("class"), s._data = n.getRealDataAttr(t(a).data()), t(a).find(">td,>th").each((function (o, a) {
						for (var l = +t(a).attr("colspan") || 1, c = +t(a).attr("rowspan") || 1, h = o; r[i] && r[i][h]; h++);
						for (var u = h; u < h + l; u++)
							for (var d = i; d < i + c; d++) r[d] || (r[d] = []), r[d][u] = !0;
						var f = e[h].field;
						s[f] = t(a).html().trim(), s["_".concat(f, "_id")] = t(a).attr("id"), s["_".concat(f, "_class")] = t(a).attr("class"), s["_".concat(f, "_rowspan")] = t(a).attr("rowspan"), s["_".concat(f, "_colspan")] = t(a).attr("colspan"), s["_".concat(f, "_title")] = t(a).attr("title"), s["_".concat(f, "_data")] = n.getRealDataAttr(t(a).data())
					})), o.push(s)
				})), o
			},
			sort: function (t, e, i, n, o, r) {
				return null == t && (t = ""), null == e && (e = ""), n && t === e && (t = o, e = r), this.isNumeric(t) && this.isNumeric(e) ? (t = parseFloat(t)) < (e = parseFloat(e)) ? -1 * i : t > e ? i : 0 : t === e ? 0 : ("string" != typeof t && (t = t.toString()), -1 === t.localeCompare(e) ? -1 * i : i)
			},
			getResizeEventName: function () {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
				return t = t || "".concat(+new Date).concat(~~(1e6 * Math.random())), "resize.bootstrap-table-".concat(t)
			}
		},
		ur = function () {
			function t(e) {
				var i = this;
				Xo(this, t), this.rows = e.rows, this.scrollEl = e.scrollEl, this.contentEl = e.contentEl, this.callback = e.callback, this.itemHeight = e.itemHeight, this.cache = {}, this.scrollTop = this.scrollEl.scrollTop, this.initDOM(this.rows, e.fixedScroll), this.scrollEl.scrollTop = this.scrollTop, this.lastCluster = 0;
				var n = function () {
					i.lastCluster !== (i.lastCluster = i.getNum()) && (i.initDOM(i.rows), i.callback())
				};
				this.scrollEl.addEventListener("scroll", n, !1), this.destroy = function () {
					i.contentEl.innerHtml = "", i.scrollEl.removeEventListener("scroll", n, !1)
				}
			}
			return Zo(t, [{
				key: "initDOM",
				value: function (t, e) {
					void 0 === this.clusterHeight && (this.cache.scrollTop = this.scrollEl.scrollTop, this.cache.data = this.contentEl.innerHTML = t[0] + t[0] + t[0], this.getRowsHeight(t));
					var i = this.initData(t, this.getNum(e)),
						n = i.rows.join(""),
						o = this.checkChanges("data", n),
						r = this.checkChanges("top", i.topOffset),
						a = this.checkChanges("bottom", i.bottomOffset),
						s = [];
					o && r ? (i.topOffset && s.push(this.getExtra("top", i.topOffset)), s.push(n), i.bottomOffset && s.push(this.getExtra("bottom", i.bottomOffset)), this.contentEl.innerHTML = s.join(""), e && (this.contentEl.scrollTop = this.cache.scrollTop)) : a && (this.contentEl.lastChild.style.height = "".concat(i.bottomOffset, "px"))
				}
			}, {
				key: "getRowsHeight",
				value: function () {
					if (void 0 === this.itemHeight) {
						var t = this.contentEl.children,
							e = t[Math.floor(t.length / 2)];
						this.itemHeight = e.offsetHeight
					}
					this.blockHeight = 50 * this.itemHeight, this.clusterRows = 200, this.clusterHeight = 4 * this.blockHeight
				}
			}, {
				key: "getNum",
				value: function (t) {
					return this.scrollTop = t ? this.cache.scrollTop : this.scrollEl.scrollTop, Math.floor(this.scrollTop / (this.clusterHeight - this.blockHeight)) || 0
				}
			}, {
				key: "initData",
				value: function (t, e) {
					if (t.length < 50) return {
						topOffset: 0,
						bottomOffset: 0,
						rowsAbove: 0,
						rows: t
					};
					var i = Math.max((this.clusterRows - 50) * e, 0),
						n = i + this.clusterRows,
						o = Math.max(i * this.itemHeight, 0),
						r = Math.max((t.length - n) * this.itemHeight, 0),
						a = [],
						s = i;
					o < 1 && s++;
					for (var l = i; l < n; l++) t[l] && a.push(t[l]);
					return {
						topOffset: o,
						bottomOffset: r,
						rowsAbove: s,
						rows: a
					}
				}
			}, {
				key: "checkChanges",
				value: function (t, e) {
					var i = e !== this.cache[t];
					return this.cache[t] = e, i
				}
			}, {
				key: "getExtra",
				value: function (t, e) {
					var i = document.createElement("tr");
					return i.className = "virtual-scroll-".concat(t), e && (i.style.height = "".concat(e, "px")), i.outerHTML
				}
			}]), t
		}(),
		dr = function () {
			function e(i, n) {
				Xo(this, e), this.options = n, this.$el = t(i), this.$el_ = this.$el.clone(), this.timeoutId_ = 0, this.timeoutFooter_ = 0, this.init()
			}
			return Zo(e, [{
				key: "init",
				value: function () {
					this.initConstants(), this.initLocale(), this.initContainer(), this.initTable(), this.initHeader(), this.initData(), this.initHiddenRows(), this.initToolbar(), this.initPagination(), this.initBody(), this.initSearchText(), this.initServer()
				}
			}, {
				key: "initConstants",
				value: function () {
					var e = this.options;
					this.constants = lr.CONSTANTS, this.constants.theme = t.fn.bootstrapTable.theme;
					var i = e.buttonsPrefix ? "".concat(e.buttonsPrefix, "-") : "";
					this.constants.buttonsClass = [e.buttonsPrefix, i + e.buttonsClass, hr.sprintf("".concat(i, "%s"), e.iconSize)].join(" ").trim()
				}
			}, {
				key: "initLocale",
				value: function () {
					if (this.options.locale) {
						var e = t.fn.bootstrapTable.locales,
							i = this.options.locale.split(/-|_/);
						i[0] = i[0].toLowerCase(), i[1] && (i[1] = i[1].toUpperCase()), e[this.options.locale] ? t.extend(this.options, e[this.options.locale]) : e[i.join("-")] ? t.extend(this.options, e[i.join("-")]) : e[i[0]] && t.extend(this.options, e[i[0]])
					}
				}
			}, {
				key: "initContainer",
				value: function () {
					var e = ["top", "both"].includes(this.options.paginationVAlign) ? '<div class="fixed-table-pagination clearfix"></div>' : "",
						i = ["bottom", "both"].includes(this.options.paginationVAlign) ? '<div class="fixed-table-pagination"></div>' : "";
					this.$container = t('\n      <div class="bootstrap-table '.concat(this.constants.theme, '">\n      <div class="fixed-table-toolbar"></div>\n      ').concat(e, '\n      <div class="fixed-table-container">\n      <div class="fixed-table-header"><table></table></div>\n      <div class="fixed-table-body">\n      <div class="fixed-table-loading">\n      <span class="loading-wrap">\n      <span class="loading-text">').concat(this.options.formatLoadingMessage(), '</span>\n      <span class="animation-wrap"><span class="animation-dot"></span></span>\n      </span>\n      </div>\n      </div>\n      <div class="fixed-table-footer"><table><thead><tr></tr></thead></table></div>\n      </div>\n      ').concat(i, "\n      </div>\n    ")), this.$container.insertAfter(this.$el), this.$tableContainer = this.$container.find(".fixed-table-container"), this.$tableHeader = this.$container.find(".fixed-table-header"), this.$tableBody = this.$container.find(".fixed-table-body"), this.$tableLoading = this.$container.find(".fixed-table-loading"), this.$tableFooter = this.$el.find("tfoot"), this.options.buttonsToolbar ? this.$toolbar = t("body").find(this.options.buttonsToolbar) : this.$toolbar = this.$container.find(".fixed-table-toolbar"), this.$pagination = this.$container.find(".fixed-table-pagination"), this.$tableBody.append(this.$el), this.$container.after('<div class="clearfix"></div>'), this.$el.addClass(this.options.classes), this.$tableLoading.addClass(this.options.classes), this.options.height && (this.$tableContainer.addClass("fixed-height"), this.options.showFooter && this.$tableContainer.addClass("has-footer"), this.options.classes.split(" ").includes("table-bordered") && (this.$tableBody.append('<div class="fixed-table-border"></div>'), this.$tableBorder = this.$tableBody.find(".fixed-table-border"), this.$tableLoading.addClass("fixed-table-border")), this.$tableFooter = this.$container.find(".fixed-table-footer"))
				}
			}, {
				key: "initTable",
				value: function () {
					var i = this,
						n = [];
					this.$header = this.$el.find(">thead"), this.$header.length ? this.options.theadClasses && this.$header.addClass(this.options.theadClasses) : this.$header = t('<thead class="'.concat(this.options.theadClasses, '"></thead>')).appendTo(this.$el), this.$header.find("tr").each((function (e, i) {
						var o = [];
						t(i).find("th").each((function (e, i) {
							void 0 !== t(i).data("field") && t(i).data("field", "".concat(t(i).data("field"))), o.push(t.extend({}, {
								title: t(i).html(),
								class: t(i).attr("class"),
								titleTooltip: t(i).attr("title"),
								rowspan: t(i).attr("rowspan") ? +t(i).attr("rowspan") : void 0,
								colspan: t(i).attr("colspan") ? +t(i).attr("colspan") : void 0
							}, t(i).data()))
						})), n.push(o)
					})), Array.isArray(this.options.columns[0]) || (this.options.columns = [this.options.columns]), this.options.columns = t.extend(!0, [], n, this.options.columns), this.columns = [], this.fieldsColumnsIndex = [], hr.setFieldIndex(this.options.columns), this.options.columns.forEach((function (n, o) {
						n.forEach((function (n, r) {
							var a = t.extend({}, e.COLUMN_DEFAULTS, n);
							void 0 !== a.fieldIndex && (i.columns[a.fieldIndex] = a, i.fieldsColumnsIndex[a.field] = a.fieldIndex), i.options.columns[o][r] = a
						}))
					})), this.options.data.length || (this.options.data = hr.trToData(this.columns, this.$el.find(">tbody>tr")), this.options.data.length && (this.fromHtml = !0)), this.footerData = hr.trToData(this.columns, this.$el.find(">tfoot>tr")), this.footerData && this.$el.find("tfoot").html("<tr></tr>"), !this.options.showFooter || this.options.cardView ? this.$tableFooter.hide() : this.$tableFooter.show()
				}
			}, {
				key: "initHeader",
				value: function () {
					var e = this,
						i = {},
						n = [];
					this.header = {
						fields: [],
						styles: [],
						classes: [],
						formatters: [],
						detailFormatters: [],
						events: [],
						sorters: [],
						sortNames: [],
						cellStyles: [],
						searchables: []
					}, hr.updateFieldGroup(this.options.columns), this.options.columns.forEach((function (t, o) {
						n.push("<tr>"), 0 === o && !e.options.cardView && e.options.detailView && e.options.detailViewIcon && n.push('<th class="detail" rowspan="'.concat(e.options.columns.length, '">\n          <div class="fht-cell"></div>\n          </th>\n        ')), t.forEach((function (t, r) {
							var a = hr.sprintf(' class="%s"', t.class),
								s = t.widthUnit,
								l = parseFloat(t.width),
								c = hr.sprintf("text-align: %s; ", t.halign ? t.halign : t.align),
								h = hr.sprintf("text-align: %s; ", t.align),
								u = hr.sprintf("vertical-align: %s; ", t.valign);
							if (u += hr.sprintf("width: %s; ", !t.checkbox && !t.radio || l ? l ? l + s : void 0 : t.showSelectTitle ? void 0 : "36px"), void 0 !== t.fieldIndex || t.visible) {
								var d = hr.calculateObjectValue(null, e.options.headerStyle, [t]),
									f = [],
									p = "";
								if (d && d.css)
									for (var g = 0, v = Object.entries(d.css); g < v.length; g++) {
										var b = tr(v[g], 2),
											m = b[0],
											y = b[1];
										f.push("".concat(m, ": ").concat(y))
									}
								if (d && d.classes && (p = hr.sprintf(' class="%s"', t.class ? [t.class, d.classes].join(" ") : d.classes)), void 0 !== t.fieldIndex) {
									if (e.header.fields[t.fieldIndex] = t.field, e.header.styles[t.fieldIndex] = h + u, e.header.classes[t.fieldIndex] = a, e.header.formatters[t.fieldIndex] = t.formatter, e.header.detailFormatters[t.fieldIndex] = t.detailFormatter, e.header.events[t.fieldIndex] = t.events, e.header.sorters[t.fieldIndex] = t.sorter, e.header.sortNames[t.fieldIndex] = t.sortName, e.header.cellStyles[t.fieldIndex] = t.cellStyle, e.header.searchables[t.fieldIndex] = t.searchable, !t.visible) return;
									if (e.options.cardView && !t.cardVisible) return;
									i[t.field] = t
								}
								n.push("<th".concat(hr.sprintf(' title="%s"', t.titleTooltip)), t.checkbox || t.radio ? hr.sprintf(' class="bs-checkbox %s"', t.class || "") : p || a, hr.sprintf(' style="%s"', c + u + f.join("; ")), hr.sprintf(' rowspan="%s"', t.rowspan), hr.sprintf(' colspan="%s"', t.colspan), hr.sprintf(' data-field="%s"', t.field), 0 === r && o > 0 ? " data-not-first-th" : "", ">"), n.push(hr.sprintf('<div class="th-inner %s">', e.options.sortable && t.sortable ? "sortable both" : ""));
								var w = e.options.escape ? hr.escapeHTML(t.title) : t.title,
									S = w;
								t.checkbox && (w = "", !e.options.singleSelect && e.options.checkboxHeader && (w = '<label><input name="btSelectAll" type="checkbox" /><span></span></label>'), e.header.stateField = t.field), t.radio && (w = "", e.header.stateField = t.field), !w && t.showSelectTitle && (w += S), n.push(w), n.push("</div>"), n.push('<div class="fht-cell"></div>'), n.push("</div>"), n.push("</th>")
							}
						})), n.push("</tr>")
					})), this.$header.html(n.join("")), this.$header.find("th[data-field]").each((function (e, n) {
						t(n).data(i[t(n).data("field")])
					})), this.$container.off("click", ".th-inner").on("click", ".th-inner", (function (i) {
						var n = t(i.currentTarget);
						if (e.options.detailView && !n.parent().hasClass("bs-checkbox") && n.closest(".bootstrap-table")[0] !== e.$container[0]) return !1;
						e.options.sortable && n.parent().data().sortable && e.onSort(i)
					})), this.$header.children().children().off("keypress").on("keypress", (function (i) {
						e.options.sortable && t(i.currentTarget).data().sortable && (13 === (i.keyCode || i.which) && e.onSort(i))
					}));
					var o = hr.getResizeEventName(this.$el.attr("id"));
					t(window).off(o), !this.options.showHeader || this.options.cardView ? (this.$header.hide(), this.$tableHeader.hide(), this.$tableLoading.css("top", 0)) : (this.$header.show(), this.$tableHeader.show(), this.$tableLoading.css("top", this.$header.outerHeight() + 1), this.getCaret(), t(window).on(o, (function () {
						return e.resetView()
					}))), this.$selectAll = this.$header.find('[name="btSelectAll"]'), this.$selectAll.off("click").on("click", (function (i) {
						i.stopPropagation();
						var n = t(i.currentTarget).prop("checked");
						e[n ? "checkAll" : "uncheckAll"](), e.updateSelected()
					}))
				}
			}, {
				key: "initData",
				value: function (t, e) {
					this.options.data = "append" === e ? this.options.data.concat(t) : "prepend" === e ? [].concat(t).concat(this.options.data) : t || this.options.data, this.data = this.options.data, "server" !== this.options.sidePagination && this.initSort()
				}
			}, {
				key: "initSort",
				value: function () {
					var t = this,
						e = this.options.sortName,
						i = "desc" === this.options.sortOrder ? -1 : 1,
						n = this.header.fields.indexOf(this.options.sortName),
						o = 0; - 1 !== n && (this.options.sortStable && this.data.forEach((function (t, e) {
						t.hasOwnProperty("_position") || (t._position = e)
					})), this.options.customSort ? hr.calculateObjectValue(this.options, this.options.customSort, [this.options.sortName, this.options.sortOrder, this.data]) : this.data.sort((function (o, r) {
						t.header.sortNames[n] && (e = t.header.sortNames[n]);
						var a = hr.getItemField(o, e, t.options.escape),
							s = hr.getItemField(r, e, t.options.escape),
							l = hr.calculateObjectValue(t.header, t.header.sorters[n], [a, s, o, r]);
						return void 0 !== l ? t.options.sortStable && 0 === l ? i * (o._position - r._position) : i * l : hr.sort(a, s, i, t.options.sortStable, o._position, r._position)
					})), void 0 !== this.options.sortClass && (clearTimeout(o), o = setTimeout((function () {
						t.$el.removeClass(t.options.sortClass);
						var e = t.$header.find('[data-field="'.concat(t.options.sortName, '"]')).index();
						t.$el.find("tr td:nth-child(".concat(e + 1, ")")).addClass(t.options.sortClass)
					}), 250)))
				}
			}, {
				key: "onSort",
				value: function (e) {
					var i = e.type,
						n = e.currentTarget,
						o = "keypress" === i ? t(n) : t(n).parent(),
						r = this.$header.find("th").eq(o.index());
					if (this.$header.add(this.$header_).find("span.order").remove(), this.options.sortName === o.data("field") ? this.options.sortOrder = "asc" === this.options.sortOrder ? "desc" : "asc" : (this.options.sortName = o.data("field"), this.options.rememberOrder ? this.options.sortOrder = "asc" === o.data("order") ? "desc" : "asc" : this.options.sortOrder = this.columns[this.fieldsColumnsIndex[o.data("field")]].sortOrder || this.columns[this.fieldsColumnsIndex[o.data("field")]].order), this.trigger("sort", this.options.sortName, this.options.sortOrder), o.add(r).data("order", this.options.sortOrder), this.getCaret(), "server" === this.options.sidePagination && this.options.serverSort) return this.options.pageNumber = 1, void this.initServer(this.options.silentSort);
					this.initSort(), this.initBody()
				}
			}, {
				key: "initToolbar",
				value: function () {
					var e, i = this,
						n = this.options,
						o = [],
						r = 0,
						a = 0;
					this.$toolbar.find(".bs-bars").children().length && t("body").append(t(n.toolbar)), this.$toolbar.html(""), "string" != typeof n.toolbar && "object" !== Yo(n.toolbar) || t(hr.sprintf('<div class="bs-bars %s-%s"></div>', this.constants.classes.pull, n.toolbarAlign)).appendTo(this.$toolbar).append(t(n.toolbar)), o = ['<div class="'.concat(["columns", "columns-".concat(n.buttonsAlign), this.constants.classes.buttonsGroup, "".concat(this.constants.classes.pull, "-").concat(n.buttonsAlign)].join(" "), '">')], "string" == typeof n.icons && (n.icons = hr.calculateObjectValue(null, n.icons));
					var s = {
						paginationSwitch: '<button class="'.concat(this.constants.buttonsClass, '" type="button" name="paginationSwitch"\n        aria-label="Pagination Switch" title="').concat(n.formatPaginationSwitch(), '">\n        ').concat(n.showButtonIcons ? hr.sprintf(this.constants.html.icon, n.iconsPrefix, n.icons.paginationSwitchDown) : "", "\n        ").concat(n.showButtonText ? n.formatPaginationSwitchUp() : "", "\n        </button>"),
						refresh: '<button class="'.concat(this.constants.buttonsClass, '" type="button" name="refresh"\n        aria-label="Refresh" title="').concat(n.formatRefresh(), '">\n        ').concat(n.showButtonIcons ? hr.sprintf(this.constants.html.icon, n.iconsPrefix, n.icons.refresh) : "", "\n        ").concat(n.showButtonText ? n.formatRefresh() : "", "\n        </button>"),
						toggle: '<button class="'.concat(this.constants.buttonsClass, '" type="button" name="toggle"\n        aria-label="Toggle" title="').concat(n.formatToggle(), '">\n        ').concat(n.showButtonIcons ? hr.sprintf(this.constants.html.icon, n.iconsPrefix, n.icons.toggleOff) : "", "\n        ").concat(n.showButtonText ? n.formatToggleOn() : "", "\n        </button>"),
						fullscreen: '<button class="'.concat(this.constants.buttonsClass, '" type="button" name="fullscreen"\n        aria-label="Fullscreen" title="').concat(n.formatFullscreen(), '">\n        ').concat(n.showButtonIcons ? hr.sprintf(this.constants.html.icon, n.iconsPrefix, n.icons.fullscreen) : "", "\n        ").concat(n.showButtonText ? n.formatFullscreen() : "", "\n        </button>"),
						columns: function () {
							var t = [];
							if (t.push('<div class="keep-open '.concat(i.constants.classes.buttonsDropdown, '" title="').concat(n.formatColumns(), '">\n          <button class="').concat(i.constants.buttonsClass, ' dropdown-toggle" type="button" data-toggle="dropdown"\n          aria-label="Columns" title="').concat(n.formatColumns(), '">\n          ').concat(n.showButtonIcons ? hr.sprintf(i.constants.html.icon, n.iconsPrefix, n.icons.columns) : "", "\n          ").concat(n.showButtonText ? n.formatColumns() : "", "\n          ").concat(i.constants.html.dropdownCaret, "\n          </button>\n          ").concat(i.constants.html.toolbarDropdown[0])), n.showColumnsSearch && (t.push(hr.sprintf(i.constants.html.toolbarDropdownItem, hr.sprintf('<input type="text" class="%s" id="columnsSearch" placeholder="%s" autocomplete="off">', i.constants.classes.input, n.formatSearch()))), t.push(i.constants.html.toolbarDropdownSeparator)), n.showColumnsToggleAll) {
								var e = i.getVisibleColumns().length === i.columns.filter((function (t) {
									return !i.isSelectionColumn(t)
								})).length;
								t.push(hr.sprintf(i.constants.html.toolbarDropdownItem, hr.sprintf('<input type="checkbox" class="toggle-all" %s> <span>%s</span>', e ? 'checked="checked"' : "", n.formatColumnsToggleAll()))), t.push(i.constants.html.toolbarDropdownSeparator)
							}
							var o = 0;
							return i.columns.forEach((function (t, e) {
								t.visible && o++
							})), i.columns.forEach((function (e, r) {
								if (!i.isSelectionColumn(e) && (!n.cardView || e.cardVisible)) {
									var s = e.visible ? ' checked="checked"' : "",
										l = o <= i.options.minimumCountColumns && s ? ' disabled="disabled"' : "";
									e.switchable && (t.push(hr.sprintf(i.constants.html.toolbarDropdownItem, hr.sprintf('<input type="checkbox" data-field="%s" value="%s"%s%s> <span>%s</span>', e.field, r, s, l, e.title))), a++)
								}
							})), t.push(i.constants.html.toolbarDropdown[1], "</div>"), t.join("")
						}()
					};
					"string" == typeof n.buttonsOrder && (n.buttonsOrder = n.buttonsOrder.replace(/\[|\]| |'/g, "").toLowerCase().split(","));
					var l = !0,
						c = !1,
						h = void 0;
					try {
						for (var u, d = n.buttonsOrder[Symbol.iterator](); !(l = (u = d.next()).done); l = !0) {
							var f = u.value;
							n["show" + f.charAt(0).toUpperCase() + f.substring(1)] && o.push(s[f])
						}
					} catch (t) {
						c = !0, h = t
					} finally {
						try {
							l || null == d.return || d.return()
						} finally {
							if (c) throw h
						}
					}
					if (o.push("</div>"), (this.showToolbar || o.length > 2) && this.$toolbar.append(o.join("")), n.showPaginationSwitch && this.$toolbar.find('button[name="paginationSwitch"]').off("click").on("click", (function () {
							return i.togglePagination()
						})), n.showFullscreen && this.$toolbar.find('button[name="fullscreen"]').off("click").on("click", (function () {
							return i.toggleFullscreen()
						})), n.showRefresh && this.$toolbar.find('button[name="refresh"]').off("click").on("click", (function () {
							return i.refresh()
						})), n.showToggle && this.$toolbar.find('button[name="toggle"]').off("click").on("click", (function () {
							i.toggleView()
						})), n.showColumns) {
						var p = (e = this.$toolbar.find(".keep-open")).find('input[type="checkbox"]:not(".toggle-all")'),
							g = e.find('input[type="checkbox"].toggle-all');
						if (a <= n.minimumCountColumns && e.find("input").prop("disabled", !0), e.find("li, label").off("click").on("click", (function (t) {
								t.stopImmediatePropagation()
							})), p.off("click").on("click", (function (e) {
								var n = e.currentTarget,
									o = t(n);
								i._toggleColumn(o.val(), o.prop("checked"), !1), i.trigger("column-switch", o.data("field"), o.prop("checked")), g.prop("checked", p.filter(":checked").length === i.columns.filter((function (t) {
									return !i.isSelectionColumn(t)
								})).length)
							})), g.off("click").on("click", (function (e) {
								var n = e.currentTarget;
								i._toggleAllColumns(t(n).prop("checked"))
							})), n.showColumnsSearch) {
							var v = e.find("#columnsSearch"),
								b = e.find(".dropdown-item-marker");
							v.on("keyup paste change", (function (e) {
								var i = e.currentTarget,
									n = t(i).val().toLowerCase();
								b.show(), p.each((function (e, i) {
									var o = t(i).parents(".dropdown-item-marker");
									o.text().toLowerCase().includes(n) || o.hide()
								}))
							}))
						}
					}
					if (n.search || this.showSearchClearButton) {
						o = [];
						var m = hr.sprintf(this.constants.html.searchButton, this.constants.buttonsClass, n.formatSearch(), n.showButtonIcons ? hr.sprintf(this.constants.html.icon, n.iconsPrefix, n.icons.search) : "", n.showButtonText ? n.formatSearch() : ""),
							y = hr.sprintf(this.constants.html.searchClearButton, this.constants.buttonsClass, n.formatClearSearch(), n.showButtonIcons ? hr.sprintf(this.constants.html.icon, n.iconsPrefix, n.icons.clearSearch) : "", n.showButtonText ? n.formatClearSearch() : ""),
							w = '<input class="'.concat(this.constants.classes.input, "\n        ").concat(hr.sprintf(" %s%s", this.constants.classes.inputPrefix, n.iconSize), '\n        search-input" type="text" placeholder="').concat(n.formatSearch(), '" autocomplete="off">'),
							S = w;
						if (n.showSearchButton || n.showSearchClearButton) {
							var x = (n.showSearchButton ? m : "") + (n.showSearchClearButton ? y : "");
							S = n.search ? hr.sprintf(this.constants.html.inputGroup, w, x) : x
						}
						o.push(hr.sprintf('\n        <div class="'.concat(this.constants.classes.pull, "-").concat(n.searchAlign, " search ").concat(this.constants.classes.inputGroup, '">\n          %s\n        </div>\n      '), S)), this.$toolbar.append(o.join(""));
						var k = this.$toolbar.find(".search input"),
							O = function () {
								var t = "keyup drop blur ".concat(hr.isIEBrowser() ? "mouseup" : "");
								k.off(t).on(t, (function (t) {
									n.searchOnEnterKey && 13 !== t.keyCode || [37, 38, 39, 40].includes(t.keyCode) || (clearTimeout(r), r = setTimeout((function () {
										i.onSearch({
											currentTarget: t.currentTarget
										})
									}), n.searchTimeOut))
								}))
							};
						n.showSearchButton ? (this.$toolbar.find(".search button[name=search]").off("click").on("click", (function (t) {
							clearTimeout(r), r = setTimeout((function () {
								i.onSearch({
									currentTarget: k
								})
							}), n.searchTimeOut)
						})), n.searchOnEnterKey && O()) : O(), n.showSearchClearButton && this.$toolbar.find(".search button[name=clearSearch]").click((function () {
							i.resetSearch()
						}))
					}
				}
			}, {
				key: "onSearch",
				value: function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						i = e.currentTarget,
						n = e.firedByInitSearchText,
						o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					if (void 0 !== i && t(i).length && o) {
						var r = t(i).val().trim();
						if (this.options.trimOnSearch && t(i).val() !== r && t(i).val(r), this.searchText === r && r.length > 0) return;
						t(i).hasClass("search-input") && (this.searchText = r, this.options.searchText = r)
					}
					n || (this.options.pageNumber = 1), this.initSearch(), n ? "client" === this.options.sidePagination && this.updatePagination() : this.updatePagination(), this.trigger("search", this.searchText)
				}
			}, {
				key: "initSearch",
				value: function () {
					var t = this;
					if (this.filterOptions = this.filterOptions || this.options.filterOptions, "server" !== this.options.sidePagination) {
						if (this.options.customSearch) return void(this.data = hr.calculateObjectValue(this.options, this.options.customSearch, [this.options.data, this.searchText, this.filterColumns]));
						var e = this.searchText && (this.fromHtml ? hr.escapeHTML(this.searchText) : this.searchText).toLowerCase(),
							i = hr.isEmptyObject(this.filterColumns) ? null : this.filterColumns;
						"function" == typeof this.filterOptions.filterAlgorithm ? this.data = this.options.data.filter((function (e, n) {
							return t.filterOptions.filterAlgorithm.apply(null, [e, i])
						})) : "string" == typeof this.filterOptions.filterAlgorithm && (this.data = i ? this.options.data.filter((function (e, n) {
							var o = t.filterOptions.filterAlgorithm;
							if ("and" === o) {
								for (var r in i)
									if (Array.isArray(i[r]) && !i[r].includes(e[r]) || !Array.isArray(i[r]) && e[r] !== i[r]) return !1
							} else if ("or" === o) {
								var a = !1;
								for (var s in i)(Array.isArray(i[s]) && i[s].includes(e[s]) || !Array.isArray(i[s]) && e[s] === i[s]) && (a = !0);
								return a
							}
							return !0
						})) : this.options.data);
						var n = this.getVisibleFields();
						this.data = e ? this.data.filter((function (i, o) {
							for (var r = 0; r < t.header.fields.length; r++)
								if (t.header.searchables[r] && (!t.options.visibleSearch || -1 !== n.indexOf(t.header.fields[r]))) {
									var a = hr.isNumeric(t.header.fields[r]) ? parseInt(t.header.fields[r], 10) : t.header.fields[r],
										s = t.columns[t.fieldsColumnsIndex[a]],
										l = void 0;
									if ("string" == typeof a) {
										l = i;
										for (var c = a.split("."), h = 0; h < c.length; h++) null !== l[c[h]] && (l = l[c[h]])
									} else l = i[a];
									if (s && s.searchFormatter && (l = hr.calculateObjectValue(s, t.header.formatters[r], [l, i, o, s.field], l)), "string" == typeof l || "number" == typeof l)
										if (t.options.strictSearch) {
											if ("".concat(l).toLowerCase() === e) return !0
										} else {
											var u = /(?:(<=|=>|=<|>=|>|<)(?:\s+)?(\d+)?|(\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm.exec(e),
												d = !1;
											if (u) {
												var f = u[1] || "".concat(u[5], "l"),
													p = u[2] || u[3],
													g = parseInt(l, 10),
													v = parseInt(p, 10);
												switch (f) {
													case ">":
													case "<l":
														d = g > v;
														break;
													case "<":
													case ">l":
														d = g < v;
														break;
													case "<=":
													case "=<":
													case ">=l":
													case "=>l":
														d = g <= v;
														break;
													case ">=":
													case "=>":
													case "<=l":
													case "=<l":
														d = g >= v
												}
											}
											if (d || "".concat(l).toLowerCase().includes(e)) return !0
										}
								}
							return !1
						})) : this.data
					}
					this.initSort()
				}
			}, {
				key: "initPagination",
				value: function () {
					var t = this,
						e = this.options;
					if (e.pagination) {
						this.$pagination.show();
						var i, n, o, r, a, s, l, c = [],
							h = !1,
							u = this.getData({
								includeHiddenRows: !1
							}),
							d = e.pageList;
						"string" == typeof d && (d = d.replace(/\[|\]| /g, "").toLowerCase().split(",")), d = d.map((function (t) {
							return "string" == typeof t ? t.toLowerCase() === e.formatAllRows().toLowerCase() || ["all", "unlimited"].includes(t.toLowerCase()) ? e.formatAllRows() : +t : t
						})), "server" !== e.sidePagination && (e.totalRows = u.length), this.totalPages = 0, e.totalRows && (e.pageSize === e.formatAllRows() && (e.pageSize = e.totalRows, h = !0), this.totalPages = 1 + ~~((e.totalRows - 1) / e.pageSize), e.totalPages = this.totalPages), this.totalPages > 0 && e.pageNumber > this.totalPages && (e.pageNumber = this.totalPages), this.pageFrom = (e.pageNumber - 1) * e.pageSize + 1, this.pageTo = e.pageNumber * e.pageSize, this.pageTo > e.totalRows && (this.pageTo = e.totalRows), this.options.pagination && "server" !== this.options.sidePagination && (this.options.totalNotFiltered = this.options.data.length), this.options.showExtendedPagination || (this.options.totalNotFiltered = void 0);
						var f = e.onlyInfoPagination ? e.formatDetailPagination(e.totalRows) : e.formatShowingRows(this.pageFrom, this.pageTo, e.totalRows, e.totalNotFiltered);
						if (c.push('<div class="'.concat(this.constants.classes.pull, "-").concat(e.paginationDetailHAlign, ' pagination-detail">\n      <span class="pagination-info">\n      ').concat(f, "\n      </span>")), !e.onlyInfoPagination) {
							c.push('<span class="page-list">');
							var p = ['<span class="'.concat(this.constants.classes.paginationDropdown, '">\n        <button class="').concat(this.constants.buttonsClass, ' dropdown-toggle" type="button" data-toggle="dropdown">\n        <span class="page-size">\n        ').concat(h ? e.formatAllRows() : e.pageSize, "\n        </span>\n        ").concat(this.constants.html.dropdownCaret, "\n        </button>\n        ").concat(this.constants.html.pageDropdown[0])];
							d.forEach((function (i, n) {
								var o;
								(!e.smartDisplay || 0 === n || d[n - 1] < e.totalRows) && (o = h ? i === e.formatAllRows() ? t.constants.classes.dropdownActive : "" : i === e.pageSize ? t.constants.classes.dropdownActive : "", p.push(hr.sprintf(t.constants.html.pageDropdownItem, o, i)))
							})), p.push("".concat(this.constants.html.pageDropdown[1], "</span>")), c.push(e.formatRecordsPerPage(p.join(""))), c.push("</span></div>"), c.push('<div class="'.concat(this.constants.classes.pull, "-").concat(e.paginationHAlign, ' pagination">'), hr.sprintf(this.constants.html.pagination[0], hr.sprintf(" pagination-%s", e.iconSize)), hr.sprintf(this.constants.html.paginationItem, " page-pre", e.formatSRPaginationPreText(), e.paginationPreText)), this.totalPages < e.paginationSuccessivelySize ? (n = 1, o = this.totalPages) : o = (n = e.pageNumber - e.paginationPagesBySide) + 2 * e.paginationPagesBySide, e.pageNumber < e.paginationSuccessivelySize - 1 && (o = e.paginationSuccessivelySize), e.paginationSuccessivelySize > this.totalPages - n && (n = n - (e.paginationSuccessivelySize - (this.totalPages - n)) + 1), n < 1 && (n = 1), o > this.totalPages && (o = this.totalPages);
							var g = Math.round(e.paginationPagesBySide / 2),
								v = function (i) {
									var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
									return hr.sprintf(t.constants.html.paginationItem, n + (i === e.pageNumber ? " ".concat(t.constants.classes.paginationActive) : ""), e.formatSRPaginationPageText(i), i)
								};
							if (n > 1) {
								var b = e.paginationPagesBySide;
								for (b >= n && (b = n - 1), i = 1; i <= b; i++) c.push(v(i));
								n - 1 === b + 1 ? (i = n - 1, c.push(v(i))) : n - 1 > b && (n - 2 * e.paginationPagesBySide > e.paginationPagesBySide && e.paginationUseIntermediate ? (i = Math.round((n - g) / 2 + g), c.push(v(i, " page-intermediate"))) : c.push(hr.sprintf(this.constants.html.paginationItem, " page-first-separator disabled", "", "...")))
							}
							for (i = n; i <= o; i++) c.push(v(i));
							if (this.totalPages > o) {
								var m = this.totalPages - (e.paginationPagesBySide - 1);
								for (o >= m && (m = o + 1), o + 1 === m - 1 ? (i = o + 1, c.push(v(i))) : m > o + 1 && (this.totalPages - o > 2 * e.paginationPagesBySide && e.paginationUseIntermediate ? (i = Math.round((this.totalPages - g - o) / 2 + o), c.push(v(i, " page-intermediate"))) : c.push(hr.sprintf(this.constants.html.paginationItem, " page-last-separator disabled", "", "..."))), i = m; i <= this.totalPages; i++) c.push(v(i))
							}
							c.push(hr.sprintf(this.constants.html.paginationItem, " page-next", e.formatSRPaginationNextText(), e.paginationNextText)), c.push(this.constants.html.pagination[1], "</div>")
						}
						this.$pagination.html(c.join(""));
						var y = ["bottom", "both"].includes(e.paginationVAlign) ? " ".concat(this.constants.classes.dropup) : "";
						this.$pagination.last().find(".page-list > span").addClass(y), e.onlyInfoPagination || (r = this.$pagination.find(".page-list a"), a = this.$pagination.find(".page-pre"), s = this.$pagination.find(".page-next"), l = this.$pagination.find(".page-item").not(".page-next, .page-pre, .page-last-separator, .page-first-separator"), this.totalPages <= 1 && this.$pagination.find("div.pagination").hide(), e.smartDisplay && (d.length < 2 || e.totalRows <= d[0]) && this.$pagination.find("span.page-list").hide(), this.$pagination[this.getData().length ? "show" : "hide"](), e.paginationLoop || (1 === e.pageNumber && a.addClass("disabled"), e.pageNumber === this.totalPages && s.addClass("disabled")), h && (e.pageSize = e.formatAllRows()), r.off("click").on("click", (function (e) {
							return t.onPageListChange(e)
						})), a.off("click").on("click", (function (e) {
							return t.onPagePre(e)
						})), s.off("click").on("click", (function (e) {
							return t.onPageNext(e)
						})), l.off("click").on("click", (function (e) {
							return t.onPageNumber(e)
						})))
					} else this.$pagination.hide()
				}
			}, {
				key: "updatePagination",
				value: function (e) {
					e && t(e.currentTarget).hasClass("disabled") || (this.options.maintainMetaData || this.resetRows(), this.initPagination(), "server" === this.options.sidePagination ? this.initServer() : this.initBody(), this.trigger("page-change", this.options.pageNumber, this.options.pageSize))
				}
			}, {
				key: "onPageListChange",
				value: function (e) {
					e.preventDefault();
					var i = t(e.currentTarget);
					return i.parent().addClass(this.constants.classes.dropdownActive).siblings().removeClass(this.constants.classes.dropdownActive), this.options.pageSize = i.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ? this.options.formatAllRows() : +i.text(), this.$toolbar.find(".page-size").text(this.options.pageSize), this.updatePagination(e), !1
				}
			}, {
				key: "onPagePre",
				value: function (t) {
					return t.preventDefault(), this.options.pageNumber - 1 == 0 ? this.options.pageNumber = this.options.totalPages : this.options.pageNumber--, this.updatePagination(t), !1
				}
			}, {
				key: "onPageNext",
				value: function (t) {
					return t.preventDefault(), this.options.pageNumber + 1 > this.options.totalPages ? this.options.pageNumber = 1 : this.options.pageNumber++, this.updatePagination(t), !1
				}
			}, {
				key: "onPageNumber",
				value: function (e) {
					if (e.preventDefault(), this.options.pageNumber !== +t(e.currentTarget).text()) return this.options.pageNumber = +t(e.currentTarget).text(), this.updatePagination(e), !1
				}
			}, {
				key: "initRow",
				value: function (t, e, i, n) {
					var o = this,
						r = [],
						a = {},
						s = [],
						l = "",
						c = {},
						h = [];
					if (!(hr.findIndex(this.hiddenRows, t) > -1)) {
						if ((a = hr.calculateObjectValue(this.options, this.options.rowStyle, [t, e], a)) && a.css)
							for (var u = 0, d = Object.entries(a.css); u < d.length; u++) {
								var f = tr(d[u], 2),
									p = f[0],
									g = f[1];
								s.push("".concat(p, ": ").concat(g))
							}
						if (c = hr.calculateObjectValue(this.options, this.options.rowAttributes, [t, e], c))
							for (var v = 0, b = Object.entries(c); v < b.length; v++) {
								var m = tr(b[v], 2),
									y = m[0],
									w = m[1];
								h.push("".concat(y, '="').concat(hr.escapeHTML(w), '"'))
							}
						if (t._data && !hr.isEmptyObject(t._data))
							for (var S = 0, x = Object.entries(t._data); S < x.length; S++) {
								var k = tr(x[S], 2),
									O = k[0],
									C = k[1];
								if ("index" === O) return;
								l += " data-".concat(O, "='").concat("object" === Yo(C) ? JSON.stringify(C) : C, "'")
							}
						return r.push("<tr", hr.sprintf(" %s", h.length ? h.join(" ") : void 0), hr.sprintf(' id="%s"', Array.isArray(t) ? void 0 : t._id), hr.sprintf(' class="%s"', a.classes || (Array.isArray(t) ? void 0 : t._class)), ' data-index="'.concat(e, '"'), hr.sprintf(' data-uniqueid="%s"', hr.getItemField(t, this.options.uniqueId, !1)), hr.sprintf(' data-has-detail-view="%s"', !this.options.cardView && this.options.detailView && hr.calculateObjectValue(null, this.options.detailFilter, [e, t]) ? "true" : void 0), hr.sprintf("%s", l), ">"), this.options.cardView && r.push('<td colspan="'.concat(this.header.fields.length, '"><div class="card-views">')), !this.options.cardView && this.options.detailView && this.options.detailViewIcon && (r.push("<td>"), hr.calculateObjectValue(null, this.options.detailFilter, [e, t]) && r.push('\n          <a class="detail-icon" href="#">\n          '.concat(hr.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen), "\n          </a>\n        ")), r.push("</td>")), this.header.fields.forEach((function (i, n) {
							var a = "",
								l = hr.getItemField(t, i, o.options.escape),
								c = "",
								h = "",
								u = {},
								d = "",
								f = o.header.classes[n],
								p = "",
								g = "",
								v = "",
								b = "",
								m = "",
								y = o.columns[n];
							if ((!o.fromHtml || void 0 !== l || y.checkbox || y.radio) && y.visible && (!o.options.cardView || y.cardVisible)) {
								if (y.escape && (l = hr.escapeHTML(l)), s.concat([o.header.styles[n]]).length && (p = ' style="'.concat(s.concat([o.header.styles[n]]).join("; "), '"')), t["_".concat(i, "_id")] && (d = hr.sprintf(' id="%s"', t["_".concat(i, "_id")])), t["_".concat(i, "_class")] && (f = hr.sprintf(' class="%s"', t["_".concat(i, "_class")])), t["_".concat(i, "_rowspan")] && (v = hr.sprintf(' rowspan="%s"', t["_".concat(i, "_rowspan")])), t["_".concat(i, "_colspan")] && (b = hr.sprintf(' colspan="%s"', t["_".concat(i, "_colspan")])), t["_".concat(i, "_title")] && (m = hr.sprintf(' title="%s"', t["_".concat(i, "_title")])), (u = hr.calculateObjectValue(o.header, o.header.cellStyles[n], [l, t, e, i], u)).classes && (f = ' class="'.concat(u.classes, '"')), u.css) {
									for (var w = [], S = 0, x = Object.entries(u.css); S < x.length; S++) {
										var k = tr(x[S], 2),
											O = k[0],
											C = k[1];
										w.push("".concat(O, ": ").concat(C))
									}
									p = ' style="'.concat(w.concat(o.header.styles[n]).join("; "), '"')
								}
								if (c = hr.calculateObjectValue(y, o.header.formatters[n], [l, t, e, i], l), t["_".concat(i, "_data")] && !hr.isEmptyObject(t["_".concat(i, "_data")]))
									for (var T = 0, P = Object.entries(t["_".concat(i, "_data")]); T < P.length; T++) {
										var $ = tr(P[T], 2),
											I = $[0],
											A = $[1];
										if ("index" === I) return;
										g += " data-".concat(I, '="').concat(A, '"')
									}
								if (y.checkbox || y.radio) {
									h = y.checkbox ? "checkbox" : h, h = y.radio ? "radio" : h;
									var E = y.class || "",
										R = (!0 === c || l || c && c.checked) && !1 !== c,
										j = !y.checkboxEnabled || c && c.disabled;
									a = [o.options.cardView ? '<div class="card-view '.concat(E, '">') : '<td class="bs-checkbox '.concat(E, '"').concat(f).concat(p, ">"), '<label>\n            <input\n            data-index="'.concat(e, '"\n            name="').concat(o.options.selectItemName, '"\n            type="').concat(h, '"\n            ').concat(hr.sprintf('value="%s"', t[o.options.idField]), "\n            ").concat(hr.sprintf('checked="%s"', R ? "checked" : void 0), "\n            ").concat(hr.sprintf('disabled="%s"', j ? "disabled" : void 0), " />\n            <span></span>\n            </label>"), o.header.formatters[n] && "string" == typeof c ? c : "", o.options.cardView ? "</div>" : "</td>"].join(""), t[o.header.stateField] = !0 === c || !!l || c && c.checked
								} else if (c = null == c ? o.options.undefinedText : c, o.options.cardView) {
									var N = o.options.showHeader ? '<span class="card-view-title"'.concat(p, ">").concat(hr.getFieldTitle(o.columns, i), "</span>") : "";
									a = '<div class="card-view">'.concat(N, '<span class="card-view-value">').concat(c, "</span></div>"), o.options.smartDisplay && "" === c && (a = '<div class="card-view"></div>')
								} else a = "<td".concat(d).concat(f).concat(p).concat(g).concat(v).concat(b).concat(m, ">").concat(c, "</td>");
								r.push(a)
							}
						})), this.options.cardView && r.push("</div></td>"), r.push("</tr>"), r.join("")
					}
				}
			}, {
				key: "initBody",
				value: function (e) {
					var i = this,
						n = this.getData();
					this.trigger("pre-body", n), this.$body = this.$el.find(">tbody"), this.$body.length || (this.$body = t("<tbody></tbody>").appendTo(this.$el)), this.options.pagination && "server" !== this.options.sidePagination || (this.pageFrom = 1, this.pageTo = n.length);
					for (var o = [], r = t(document.createDocumentFragment()), a = !1, s = this.pageFrom - 1; s < this.pageTo; s++) {
						var l = n[s],
							c = this.initRow(l, s, n, r);
						a = a || !!c, c && "string" == typeof c && (this.options.virtualScroll ? o.push(c) : r.append(c))
					}
					a ? this.options.virtualScroll ? (this.virtualScroll && this.virtualScroll.destroy(), this.virtualScroll = new ur({
						rows: o,
						fixedScroll: e,
						scrollEl: this.$tableBody[0],
						contentEl: this.$body[0],
						itemHeight: this.options.virtualScrollItemHeight,
						callback: function () {
							i.fitHeader(), i.initBodyEvent()
						}
					})) : this.$body.html(r) : this.$body.html('<tr class="no-records-found">'.concat(hr.sprintf('<td colspan="%s">%s</td>', this.$header.find("th").length, this.options.formatNoMatches()), "</tr>")), e || this.scrollTo(0), this.initBodyEvent(), this.updateSelected(), this.initFooter(), this.resetView(), "server" !== this.options.sidePagination && (this.options.totalRows = n.length), this.trigger("post-body", n)
				}
			}, {
				key: "initBodyEvent",
				value: function () {
					var e = this;
					this.$body.find("> tr[data-index] > td").off("click dblclick").on("click dblclick", (function (i) {
						var n = t(i.currentTarget),
							o = n.parent(),
							r = t(i.target).parents(".card-views").children(),
							a = t(i.target).parents(".card-view"),
							s = o.data("index"),
							l = e.data[s],
							c = e.options.cardView ? r.index(a) : n[0].cellIndex,
							h = e.getVisibleFields()[e.options.detailView && e.options.detailViewIcon && !e.options.cardView ? c - 1 : c],
							u = e.columns[e.fieldsColumnsIndex[h]],
							d = hr.getItemField(l, h, e.options.escape);
						if (!n.find(".detail-icon").length) {
							if (e.trigger("click" === i.type ? "click-cell" : "dbl-click-cell", h, d, l, n), e.trigger("click" === i.type ? "click-row" : "dbl-click-row", l, o, h), "click" === i.type && e.options.clickToSelect && u.clickToSelect && !hr.calculateObjectValue(e.options, e.options.ignoreClickToSelectOn, [i.target])) {
								var f = o.find(hr.sprintf('[name="%s"]', e.options.selectItemName));
								f.length && f[0].click()
							}
							"click" === i.type && e.options.detailViewByClick && e.toggleDetailView(s, e.header.detailFormatters[e.fieldsColumnsIndex[h]])
						}
					})).off("mousedown").on("mousedown", (function (t) {
						e.multipleSelectRowCtrlKey = t.ctrlKey || t.metaKey, e.multipleSelectRowShiftKey = t.shiftKey
					})), this.$body.find("> tr[data-index] > td > .detail-icon").off("click").on("click", (function (i) {
						return i.preventDefault(), e.toggleDetailView(t(i.currentTarget).parent().parent().data("index")), !1
					})), this.$selectItem = this.$body.find(hr.sprintf('[name="%s"]', this.options.selectItemName)), this.$selectItem.off("click").on("click", (function (i) {
						i.stopImmediatePropagation();
						var n = t(i.currentTarget);
						e._toggleCheck(n.prop("checked"), n.data("index"))
					})), this.header.events.forEach((function (i, n) {
						var o = i;
						if (o) {
							"string" == typeof o && (o = hr.calculateObjectValue(null, o));
							var r = e.header.fields[n],
								a = e.getVisibleFields().indexOf(r);
							if (-1 !== a) {
								e.options.detailView && !e.options.cardView && (a += 1);
								var s = function (i) {
									if (!o.hasOwnProperty(i)) return "continue";
									var n = o[i];
									e.$body.find(">tr:not(.no-records-found)").each((function (o, s) {
										var l = t(s),
											c = l.find(e.options.cardView ? ".card-views>.card-view" : ">td").eq(a),
											h = i.indexOf(" "),
											u = i.substring(0, h),
											d = i.substring(h + 1);
										c.find(d).off(u).on(u, (function (t) {
											var i = l.data("index"),
												o = e.data[i],
												a = o[r];
											n.apply(e, [t, a, o, i])
										}))
									}))
								};
								for (var l in o) s(l)
							}
						}
					}))
				}
			}, {
				key: "initServer",
				value: function (e, i, n) {
					var o = this,
						r = {},
						a = this.header.fields.indexOf(this.options.sortName),
						s = {
							searchText: this.searchText,
							sortName: this.options.sortName,
							sortOrder: this.options.sortOrder
						};
					if (this.header.sortNames[a] && (s.sortName = this.header.sortNames[a]), this.options.pagination && "server" === this.options.sidePagination && (s.pageSize = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize, s.pageNumber = this.options.pageNumber), (n || this.options.url || this.options.ajax) && ("limit" === this.options.queryParamsType && (s = {
							search: s.searchText,
							sort: s.sortName,
							order: s.sortOrder
						}, this.options.pagination && "server" === this.options.sidePagination && (s.offset = this.options.pageSize === this.options.formatAllRows() ? 0 : this.options.pageSize * (this.options.pageNumber - 1), s.limit = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize, 0 === s.limit && delete s.limit)), hr.isEmptyObject(this.filterColumnsPartial) || (s.filter = JSON.stringify(this.filterColumnsPartial, null)), t.extend(s, i || {}), !1 !== (r = hr.calculateObjectValue(this.options, this.options.queryParams, [s], r)))) {
						e || this.showLoading();
						var l = t.extend({}, hr.calculateObjectValue(null, this.options.ajaxOptions), {
							type: this.options.method,
							url: n || this.options.url,
							data: "application/json" === this.options.contentType && "post" === this.options.method ? JSON.stringify(r) : r,
							cache: this.options.cache,
							contentType: this.options.contentType,
							dataType: this.options.dataType,
							success: function (t, i, n) {
								var r = hr.calculateObjectValue(o.options, o.options.responseHandler, [t, n], t);
								o.load(r), o.trigger("load-success", r, n && n.status, n), e || o.hideLoading(), "server" === o.options.sidePagination && r[o.options.totalField] > 0 && !r[o.options.dataField].length && o.updatePagination()
							},
							error: function (t) {
								var i = [];
								"server" === o.options.sidePagination && ((i = {})[o.options.totalField] = 0, i[o.options.dataField] = []), o.load(i), o.trigger("load-error", t && t.status, t), e || o.$tableLoading.hide()
							}
						});
						return this.options.ajax ? hr.calculateObjectValue(this, this.options.ajax, [l], null) : (this._xhr && 4 !== this._xhr.readyState && this._xhr.abort(), this._xhr = t.ajax(l)), r
					}
				}
			}, {
				key: "initSearchText",
				value: function () {
					if (this.options.search && (this.searchText = "", "" !== this.options.searchText)) {
						var t = this.$toolbar.find(".search input");
						t.val(this.options.searchText), this.onSearch({
							currentTarget: t,
							firedByInitSearchText: !0
						})
					}
				}
			}, {
				key: "getCaret",
				value: function () {
					var e = this;
					this.$header.find("th").each((function (i, n) {
						t(n).find(".sortable").removeClass("desc asc").addClass(t(n).data("field") === e.options.sortName ? e.options.sortOrder : "both")
					}))
				}
			}, {
				key: "updateSelected",
				value: function () {
					var e = this.$selectItem.filter(":enabled").length && this.$selectItem.filter(":enabled").length === this.$selectItem.filter(":enabled").filter(":checked").length;
					this.$selectAll.add(this.$selectAll_).prop("checked", e), this.$selectItem.each((function (e, i) {
						t(i).closest("tr")[t(i).prop("checked") ? "addClass" : "removeClass"]("selected")
					}))
				}
			}, {
				key: "updateRows",
				value: function () {
					var e = this;
					this.$selectItem.each((function (i, n) {
						e.data[t(n).data("index")][e.header.stateField] = t(n).prop("checked")
					}))
				}
			}, {
				key: "resetRows",
				value: function () {
					var t = !0,
						e = !1,
						i = void 0;
					try {
						for (var n, o = this.data[Symbol.iterator](); !(t = (n = o.next()).done); t = !0) {
							var r = n.value;
							this.$selectAll.prop("checked", !1), this.$selectItem.prop("checked", !1), this.header.stateField && (r[this.header.stateField] = !1)
						}
					} catch (t) {
						e = !0, i = t
					} finally {
						try {
							t || null == o.return || o.return()
						} finally {
							if (e) throw i
						}
					}
					this.initHiddenRows()
				}
			}, {
				key: "trigger",
				value: function (i) {
					for (var n, o = "".concat(i, ".bs.table"), r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) a[s - 1] = arguments[s];
					(n = this.options)[e.EVENTS[o]].apply(n, a), this.$el.trigger(t.Event(o), a), this.options.onAll(o, a), this.$el.trigger(t.Event("all.bs.table"), [o, a])
				}
			}, {
				key: "resetHeader",
				value: function () {
					var t = this;
					clearTimeout(this.timeoutId_), this.timeoutId_ = setTimeout((function () {
						return t.fitHeader()
					}), this.$el.is(":hidden") ? 100 : 0)
				}
			}, {
				key: "fitHeader",
				value: function () {
					var e = this;
					if (this.$el.is(":hidden")) this.timeoutId_ = setTimeout((function () {
						return e.fitHeader()
					}), 100);
					else {
						var i = this.$tableBody.get(0),
							n = i.scrollWidth > i.clientWidth && i.scrollHeight > i.clientHeight + this.$header.outerHeight() ? hr.getScrollBarWidth() : 0;
						this.$el.css("margin-top", -this.$header.outerHeight());
						var o = t(":focus");
						if (o.length > 0) {
							var r = o.parents("th");
							if (r.length > 0) {
								var a = r.attr("data-field");
								if (void 0 !== a) {
									var s = this.$header.find("[data-field='".concat(a, "']"));
									s.length > 0 && s.find(":input").addClass("focus-temp")
								}
							}
						}
						this.$header_ = this.$header.clone(!0, !0), this.$selectAll_ = this.$header_.find('[name="btSelectAll"]'), this.$tableHeader.css("margin-right", n).find("table").css("width", this.$el.outerWidth()).html("").attr("class", this.$el.attr("class")).append(this.$header_), this.$tableLoading.css("width", this.$el.outerWidth());
						var l = t(".focus-temp:visible:eq(0)");
						l.length > 0 && (l.focus(), this.$header.find(".focus-temp").removeClass("focus-temp")), this.$header.find("th[data-field]").each((function (i, n) {
							e.$header_.find(hr.sprintf('th[data-field="%s"]', t(n).data("field"))).data(t(n).data())
						}));
						for (var c = this.getVisibleFields(), h = this.$header_.find("th"), u = this.$body.find(">tr:not(.no-records-found,.virtual-scroll-top)").eq(0); u.length && u.find('>td[colspan]:not([colspan="1"])').length;) u = u.next();
						u.find("> *").each((function (i, n) {
							var o = t(n),
								r = i;
							if (e.options.detailView && e.options.detailViewIcon && !e.options.cardView) {
								if (0 === i) {
									var a = h.filter(".detail"),
										s = a.innerWidth() - a.find(".fht-cell").width();
									a.find(".fht-cell").width(o.innerWidth() - s)
								}
								r = i - 1
							}
							if (-1 !== r) {
								var l = e.$header_.find(hr.sprintf('th[data-field="%s"]', c[r]));
								l.length > 1 && (l = t(h[o[0].cellIndex]));
								var u = l.innerWidth() - l.find(".fht-cell").width();
								l.find(".fht-cell").width(o.innerWidth() - u)
							}
						})), this.horizontalScroll(), this.trigger("post-header")
					}
				}
			}, {
				key: "initFooter",
				value: function () {
					if (this.options.showFooter && !this.options.cardView) {
						var t = this.getData(),
							e = [];
						!this.options.cardView && this.options.detailView && this.options.detailViewIcon && e.push('<th class="detail"><div class="th-inner"></div><div class="fht-cell"></div></th>');
						var i = !0,
							n = !1,
							o = void 0;
						try {
							for (var r, a = this.columns[Symbol.iterator](); !(i = (r = a.next()).done); i = !0) {
								var s, l, c = r.value,
									h = [],
									u = {},
									d = hr.sprintf(' class="%s"', c.class);
								if (c.visible) {
									if (this.options.cardView && !c.cardVisible) return;
									if (s = hr.sprintf("text-align: %s; ", c.falign ? c.falign : c.align), l = hr.sprintf("vertical-align: %s; ", c.valign), (u = hr.calculateObjectValue(null, this.options.footerStyle, [c])) && u.css)
										for (var f = 0, p = Object.entries(u.css); f < p.length; f++) {
											var g = tr(p[f], 2),
												v = g[0],
												b = g[1];
											h.push("".concat(v, ": ").concat(b))
										}
									u && u.classes && (d = hr.sprintf(' class="%s"', c.class ? [c.class, u.classes].join(" ") : u.classes)), e.push("<th", d, hr.sprintf(' style="%s"', s + l + h.concat().join("; ")), ">"), e.push('<div class="th-inner">'), e.push(hr.calculateObjectValue(c, c.footerFormatter, [t], this.footerData[0] && this.footerData[0][c.field] || "")), e.push("</div>"), e.push('<div class="fht-cell"></div>'), e.push("</div>"), e.push("</th>")
								}
							}
						} catch (t) {
							n = !0, o = t
						} finally {
							try {
								i || null == a.return || a.return()
							} finally {
								if (n) throw o
							}
						}
						this.options.height || this.$tableFooter.length || (this.$el.append("<tfoot><tr></tr></tfoot>"), this.$tableFooter = this.$el.find("tfoot")), this.$tableFooter.find("tr").html(e.join("")), this.trigger("post-footer", this.$tableFooter)
					}
				}
			}, {
				key: "fitFooter",
				value: function () {
					var e = this;
					if (this.$el.is(":hidden")) setTimeout((function () {
						return e.fitFooter()
					}), 100);
					else {
						var i = this.$tableBody.get(0),
							n = i.scrollWidth > i.clientWidth && i.scrollHeight > i.clientHeight + this.$header.outerHeight() ? hr.getScrollBarWidth() : 0;
						this.$tableFooter.css("margin-right", n).find("table").css("width", this.$el.outerWidth()).attr("class", this.$el.attr("class"));
						this.getVisibleFields();
						for (var o = this.$tableFooter.find("th"), r = this.$body.find(">tr:first-child:not(.no-records-found)"); r.length && r.find('>td[colspan]:not([colspan="1"])').length;) r = r.next();
						r.find("> *").each((function (i, n) {
							var r = t(n),
								a = i;
							if (e.options.detailView && !e.options.cardView) {
								if (0 === i) {
									var s = o.filter(".detail"),
										l = s.innerWidth() - s.find(".fht-cell").width();
									s.find(".fht-cell").width(r.innerWidth() - l)
								}
								a = i - 1
							}
							if (-1 !== a) {
								var c = o.eq(i),
									h = c.innerWidth() - c.find(".fht-cell").width();
								c.find(".fht-cell").width(r.innerWidth() - h)
							}
						})), this.horizontalScroll()
					}
				}
			}, {
				key: "horizontalScroll",
				value: function () {
					var t = this;
					this.$tableBody.off("scroll").on("scroll", (function () {
						var e = t.$tableBody.scrollLeft();
						t.options.showHeader && t.options.height && t.$tableHeader.scrollLeft(e), t.options.showFooter && !t.options.cardView && t.$tableFooter.scrollLeft(e), t.trigger("scroll-body", t.$tableBody)
					}))
				}
			}, {
				key: "getVisibleFields",
				value: function () {
					var t = [],
						e = !0,
						i = !1,
						n = void 0;
					try {
						for (var o, r = this.header.fields[Symbol.iterator](); !(e = (o = r.next()).done); e = !0) {
							var a = o.value,
								s = this.columns[this.fieldsColumnsIndex[a]];
							s && s.visible && t.push(a)
						}
					} catch (t) {
						i = !0, n = t
					} finally {
						try {
							e || null == r.return || r.return()
						} finally {
							if (i) throw n
						}
					}
					return t
				}
			}, {
				key: "initHiddenRows",
				value: function () {
					this.hiddenRows = []
				}
			}, {
				key: "getOptions",
				value: function () {
					var e = t.extend({}, this.options);
					return delete e.data, t.extend(!0, {}, e)
				}
			}, {
				key: "refreshOptions",
				value: function (e) {
					hr.compareObjects(this.options, e, !0) || (this.options = t.extend(this.options, e), this.trigger("refresh-options", this.options), this.destroy(), this.init())
				}
			}, {
				key: "getData",
				value: function (t) {
					var e = this.options.data;
					if (!(this.searchText || this.options.customSearch || this.options.sortName) && hr.isEmptyObject(this.filterColumns) && hr.isEmptyObject(this.filterColumnsPartial) || t && t.unfiltered || (e = this.data), t && t.useCurrentPage && (e = e.slice(this.pageFrom - 1, this.pageTo)), t && !t.includeHiddenRows) {
						var i = this.getHiddenRows();
						e = e.filter((function (t) {
							return -1 === hr.findIndex(i, t)
						}))
					}
					return e
				}
			}, {
				key: "getSelections",
				value: function () {
					var t = this;
					return this.data.filter((function (e) {
						return !0 === e[t.header.stateField]
					}))
				}
			}, {
				key: "getAllSelections",
				value: function () {
					var t = this;
					return this.options.data.filter((function (e) {
						return !0 === e[t.header.stateField]
					}))
				}
			}, {
				key: "load",
				value: function (t) {
					var e, i = t;
					this.options.pagination && "server" === this.options.sidePagination && (this.options.totalRows = i[this.options.totalField]), this.options.pagination && "server" === this.options.sidePagination && (this.options.totalNotFiltered = i[this.options.totalNotFilteredField]), e = i.fixedScroll, i = Array.isArray(i) ? i : i[this.options.dataField], this.initData(i), this.initSearch(), this.initPagination(), this.initBody(e)
				}
			}, {
				key: "append",
				value: function (t) {
					this.initData(t, "append"), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0)
				}
			}, {
				key: "prepend",
				value: function (t) {
					this.initData(t, "prepend"), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0)
				}
			}, {
				key: "remove",
				value: function (t) {
					var e, i, n = this.options.data.length;
					if (t.hasOwnProperty("field") && t.hasOwnProperty("values")) {
						for (e = n - 1; e >= 0; e--)(i = this.options.data[e]).hasOwnProperty(t.field) && t.values.includes(i[t.field]) && (this.options.data.splice(e, 1), "server" === this.options.sidePagination && (this.options.totalRows -= 1));
						n !== this.options.data.length && (this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0))
					}
				}
			}, {
				key: "removeAll",
				value: function () {
					this.options.data.length > 0 && (this.options.data.splice(0, this.options.data.length), this.initSearch(), this.initPagination(), this.initBody(!0))
				}
			}, {
				key: "insertRow",
				value: function (t) {
					t.hasOwnProperty("index") && t.hasOwnProperty("row") && (this.options.data.splice(t.index, 0, t.row), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0))
				}
			}, {
				key: "updateRow",
				value: function (e) {
					var i = Array.isArray(e) ? e : [e],
						n = !0,
						o = !1,
						r = void 0;
					try {
						for (var a, s = i[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
							var l = a.value;
							l.hasOwnProperty("index") && l.hasOwnProperty("row") && (t.extend(this.options.data[l.index], l.row), l.hasOwnProperty("replace") && l.replace ? this.options.data[l.index] = l.row : t.extend(this.options.data[l.index], l.row))
						}
					} catch (t) {
						o = !0, r = t
					} finally {
						try {
							n || null == s.return || s.return()
						} finally {
							if (o) throw r
						}
					}
					this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0)
				}
			}, {
				key: "getRowByUniqueId",
				value: function (t) {
					var e, i, n, o = this.options.uniqueId,
						r = t,
						a = null;
					for (e = this.options.data.length - 1; e >= 0; e--) {
						if ((i = this.options.data[e]).hasOwnProperty(o)) n = i[o];
						else {
							if (!i._data || !i._data.hasOwnProperty(o)) continue;
							n = i._data[o]
						}
						if ("string" == typeof n ? r = r.toString() : "number" == typeof n && (Number(n) === n && n % 1 == 0 ? r = parseInt(r) : n === Number(n) && 0 !== n && (r = parseFloat(r))), n === r) {
							a = i;
							break
						}
					}
					return a
				}
			}, {
				key: "updateByUniqueId",
				value: function (e) {
					var i = Array.isArray(e) ? e : [e],
						n = !0,
						o = !1,
						r = void 0;
					try {
						for (var a, s = i[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
							var l = a.value;
							if (l.hasOwnProperty("id") && l.hasOwnProperty("row")) {
								var c = this.options.data.indexOf(this.getRowByUniqueId(l.id)); - 1 !== c && (l.hasOwnProperty("replace") && l.replace ? this.options.data[c] = l.row : t.extend(this.options.data[c], l.row))
							}
						}
					} catch (t) {
						o = !0, r = t
					} finally {
						try {
							n || null == s.return || s.return()
						} finally {
							if (o) throw r
						}
					}
					this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0)
				}
			}, {
				key: "removeByUniqueId",
				value: function (t) {
					var e = this.options.data.length,
						i = this.getRowByUniqueId(t);
					i && this.options.data.splice(this.options.data.indexOf(i), 1), e !== this.options.data.length && (this.initSearch(), this.initPagination(), this.initBody(!0))
				}
			}, {
				key: "updateCell",
				value: function (t) {
					t.hasOwnProperty("index") && t.hasOwnProperty("field") && t.hasOwnProperty("value") && (this.data[t.index][t.field] = t.value, !1 !== t.reinit && (this.initSort(), this.initBody(!0)))
				}
			}, {
				key: "updateCellByUniqueId",
				value: function (t) {
					var e = this;
					t.hasOwnProperty("id") && t.hasOwnProperty("field") && t.hasOwnProperty("value") && ((Array.isArray(t) ? t : [t]).forEach((function (t) {
						var i = t.id,
							n = t.field,
							o = t.value,
							r = e.options.data.indexOf(e.getRowByUniqueId(i)); - 1 !== r && (e.options.data[r][n] = o)
					})), !1 !== t.reinit && (this.initSort(), this.initBody(!0)))
				}
			}, {
				key: "showRow",
				value: function (t) {
					this._toggleRow(t, !0)
				}
			}, {
				key: "hideRow",
				value: function (t) {
					this._toggleRow(t, !1)
				}
			}, {
				key: "_toggleRow",
				value: function (t, e) {
					var i;
					if (t.hasOwnProperty("index") ? i = this.getData()[t.index] : t.hasOwnProperty("uniqueId") && (i = this.getRowByUniqueId(t.uniqueId)), i) {
						var n = hr.findIndex(this.hiddenRows, i);
						e || -1 !== n ? e && n > -1 && this.hiddenRows.splice(n, 1) : this.hiddenRows.push(i), e ? this.updatePagination() : (this.initBody(!0), this.initPagination())
					}
				}
			}, {
				key: "getHiddenRows",
				value: function (t) {
					if (t) return this.initHiddenRows(), void this.initBody(!0);
					var e = this.getData(),
						i = [],
						n = !0,
						o = !1,
						r = void 0;
					try {
						for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
							var l = a.value;
							this.hiddenRows.includes(l) && i.push(l)
						}
					} catch (t) {
						o = !0, r = t
					} finally {
						try {
							n || null == s.return || s.return()
						} finally {
							if (o) throw r
						}
					}
					return this.hiddenRows = i, i
				}
			}, {
				key: "showColumn",
				value: function (t) {
					var e = this;
					(Array.isArray(t) ? t : [t]).forEach((function (t) {
						e._toggleColumn(e.fieldsColumnsIndex[t], !0, !0)
					}))
				}
			}, {
				key: "hideColumn",
				value: function (t) {
					var e = this;
					(Array.isArray(t) ? t : [t]).forEach((function (t) {
						e._toggleColumn(e.fieldsColumnsIndex[t], !1, !0)
					}))
				}
			}, {
				key: "_toggleColumn",
				value: function (t, e, i) {
					if (-1 !== t && this.columns[t].visible !== e && (this.columns[t].visible = e, this.initHeader(), this.initSearch(), this.initPagination(), this.initBody(), this.options.showColumns)) {
						var n = this.$toolbar.find('.keep-open input:not(".toggle-all")').prop("disabled", !1);
						i && n.filter(hr.sprintf('[value="%s"]', t)).prop("checked", e), n.filter(":checked").length <= this.options.minimumCountColumns && n.filter(":checked").prop("disabled", !0)
					}
				}
			}, {
				key: "getVisibleColumns",
				value: function () {
					var t = this;
					return this.columns.filter((function (e) {
						return e.visible && !t.isSelectionColumn(e)
					}))
				}
			}, {
				key: "getHiddenColumns",
				value: function () {
					return this.columns.filter((function (t) {
						return !t.visible
					}))
				}
			}, {
				key: "isSelectionColumn",
				value: function (t) {
					return t.radio || t.checkbox
				}
			}, {
				key: "showAllColumns",
				value: function () {
					this._toggleAllColumns(!0)
				}
			}, {
				key: "hideAllColumns",
				value: function () {
					this._toggleAllColumns(!1)
				}
			}, {
				key: "_toggleAllColumns",
				value: function (e) {
					var i = this,
						n = !0,
						o = !1,
						r = void 0;
					try {
						for (var a, s = this.columns.slice().reverse()[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
							var l = a.value;
							if (l.switchable) {
								if (!e && this.options.showColumns && this.getVisibleColumns().length === this.options.minimumCountColumns) continue;
								l.visible = e
							}
						}
					} catch (t) {
						o = !0, r = t
					} finally {
						try {
							n || null == s.return || s.return()
						} finally {
							if (o) throw r
						}
					}
					if (this.initHeader(), this.initSearch(), this.initPagination(), this.initBody(), this.options.showColumns) {
						var c = this.$toolbar.find('.keep-open input[type="checkbox"]:not(".toggle-all")').prop("disabled", !1);
						e ? c.prop("checked", e) : c.get().reverse().forEach((function (n) {
							c.filter(":checked").length > i.options.minimumCountColumns && t(n).prop("checked", e)
						})), c.filter(":checked").length <= this.options.minimumCountColumns && c.filter(":checked").prop("disabled", !0)
					}
				}
			}, {
				key: "mergeCells",
				value: function (t) {
					var e, i, n = t.index,
						o = this.getVisibleFields().indexOf(t.field),
						r = t.rowspan || 1,
						a = t.colspan || 1,
						s = this.$body.find(">tr");
					this.options.detailView && !this.options.cardView && (o += 1);
					var l = s.eq(n).find(">td").eq(o);
					if (!(n < 0 || o < 0 || n >= this.data.length)) {
						for (e = n; e < n + r; e++)
							for (i = o; i < o + a; i++) s.eq(e).find(">td").eq(i).hide();
						l.attr("rowspan", r).attr("colspan", a).show()
					}
				}
			}, {
				key: "checkAll",
				value: function () {
					this._toggleCheckAll(!0)
				}
			}, {
				key: "uncheckAll",
				value: function () {
					this._toggleCheckAll(!1)
				}
			}, {
				key: "_toggleCheckAll",
				value: function (t) {
					var e = this.getSelections();
					this.$selectAll.add(this.$selectAll_).prop("checked", t), this.$selectItem.filter(":enabled").prop("checked", t), this.updateRows();
					var i = this.getSelections();
					t ? this.trigger("check-all", i, e) : this.trigger("uncheck-all", i, e)
				}
			}, {
				key: "checkInvert",
				value: function () {
					var e = this.$selectItem.filter(":enabled"),
						i = e.filter(":checked");
					e.each((function (e, i) {
						t(i).prop("checked", !t(i).prop("checked"))
					})), this.updateRows(), this.updateSelected(), this.trigger("uncheck-some", i), i = this.getSelections(), this.trigger("check-some", i)
				}
			}, {
				key: "check",
				value: function (t) {
					this._toggleCheck(!0, t)
				}
			}, {
				key: "uncheck",
				value: function (t) {
					this._toggleCheck(!1, t)
				}
			}, {
				key: "_toggleCheck",
				value: function (t, e) {
					var i = this.$selectItem.filter('[data-index="'.concat(e, '"]')),
						n = this.data[e];
					if (i.is(":radio") || this.options.singleSelect || this.options.multipleSelectRow && !this.multipleSelectRowCtrlKey && !this.multipleSelectRowShiftKey) {
						var o = !0,
							r = !1,
							a = void 0;
						try {
							for (var s, l = this.options.data[Symbol.iterator](); !(o = (s = l.next()).done); o = !0) {
								s.value[this.header.stateField] = !1
							}
						} catch (t) {
							r = !0, a = t
						} finally {
							try {
								o || null == l.return || l.return()
							} finally {
								if (r) throw a
							}
						}
						this.$selectItem.filter(":checked").not(i).prop("checked", !1)
					}
					if (n[this.header.stateField] = t, this.options.multipleSelectRow) {
						if (this.multipleSelectRowShiftKey && this.multipleSelectRowLastSelectedIndex >= 0)
							for (var c = [this.multipleSelectRowLastSelectedIndex, e].sort(), h = c[0] + 1; h < c[1]; h++) this.data[h][this.header.stateField] = !0, this.$selectItem.filter('[data-index="'.concat(h, '"]')).prop("checked", !0);
						this.multipleSelectRowCtrlKey = !1, this.multipleSelectRowShiftKey = !1, this.multipleSelectRowLastSelectedIndex = t ? e : -1
					}
					i.prop("checked", t), this.updateSelected(), this.trigger(t ? "check" : "uncheck", this.data[e], i)
				}
			}, {
				key: "checkBy",
				value: function (t) {
					this._toggleCheckBy(!0, t)
				}
			}, {
				key: "uncheckBy",
				value: function (t) {
					this._toggleCheckBy(!1, t)
				}
			}, {
				key: "_toggleCheckBy",
				value: function (t, e) {
					var i = this;
					if (e.hasOwnProperty("field") && e.hasOwnProperty("values")) {
						var n = [];
						this.data.forEach((function (o, r) {
							if (!o.hasOwnProperty(e.field)) return !1;
							if (e.values.includes(o[e.field])) {
								var a = i.$selectItem.filter(":enabled").filter(hr.sprintf('[data-index="%s"]', r));
								if (!(a = t ? a.not(":checked") : a.filter(":checked")).length) return;
								a.prop("checked", t), o[i.header.stateField] = t, n.push(o), i.trigger(t ? "check" : "uncheck", o, a)
							}
						})), this.updateSelected(), this.trigger(t ? "check-some" : "uncheck-some", n)
					}
				}
			}, {
				key: "refresh",
				value: function (t) {
					t && t.url && (this.options.url = t.url), t && t.pageNumber && (this.options.pageNumber = t.pageNumber), t && t.pageSize && (this.options.pageSize = t.pageSize), this.trigger("refresh", this.initServer(t && t.silent, t && t.query, t && t.url))
				}
			}, {
				key: "destroy",
				value: function () {
					this.$el.insertBefore(this.$container), t(this.options.toolbar).insertBefore(this.$el), this.$container.next().remove(), this.$container.remove(), this.$el.html(this.$el_.html()).css("margin-top", "0").attr("class", this.$el_.attr("class") || "")
				}
			}, {
				key: "resetView",
				value: function (t) {
					var e = 0;
					if (t && t.height && (this.options.height = t.height), this.$selectAll.prop("checked", this.$selectItem.length > 0 && this.$selectItem.length === this.$selectItem.filter(":checked").length), this.$tableContainer.toggleClass("has-card-view", this.options.cardView), !this.options.cardView && this.options.showHeader && this.options.height ? (this.$tableHeader.show(), this.resetHeader(), e += this.$header.outerHeight(!0) + 1) : (this.$tableHeader.hide(), this.trigger("post-header")), !this.options.cardView && this.options.showFooter && (this.$tableFooter.show(), this.fitFooter(), this.options.height && (e += this.$tableFooter.outerHeight(!0))), this.$container.hasClass("fullscreen")) this.$tableContainer.css("height", ""), this.$tableContainer.css("width", "");
					else if (this.options.height) {
						var i = this.$toolbar.outerHeight(!0),
							n = this.$pagination.outerHeight(!0),
							o = this.options.height - i - n,
							r = this.$tableBody.find(">table"),
							a = r.outerHeight();
						if (this.$tableContainer.css("height", "".concat(o, "px")), this.$tableBorder) {
							var s = o - a - 2;
							this.$tableBody[0].scrollWidth - this.$tableBody.innerWidth() && (s -= hr.getScrollBarWidth()), this.$tableBorder.css("width", "".concat(r.outerWidth(), "px")), this.$tableBorder.css("height", "".concat(s, "px"))
						}
					}
					this.options.cardView ? (this.$el.css("margin-top", "0"), this.$tableContainer.css("padding-bottom", "0"), this.$tableFooter.hide()) : (this.getCaret(), this.$tableContainer.css("padding-bottom", "".concat(e, "px"))), this.trigger("reset-view")
				}
			}, {
				key: "showLoading",
				value: function () {
					this.$tableLoading.css("display", "flex")
				}
			}, {
				key: "hideLoading",
				value: function () {
					this.$tableLoading.css("display", "none")
				}
			}, {
				key: "togglePagination",
				value: function () {
					this.options.pagination = !this.options.pagination;
					var t = this.options.showButtonIcons ? this.options.pagination ? this.options.icons.paginationSwitchDown : this.options.icons.paginationSwitchUp : "",
						e = this.options.showButtonText ? this.options.pagination ? this.options.formatPaginationSwitchUp() : this.options.formatPaginationSwitchDown() : "";
					this.$toolbar.find('button[name="paginationSwitch"]').html(hr.sprintf(this.constants.html.icon, this.options.iconsPrefix, t) + " " + e), this.updatePagination()
				}
			}, {
				key: "toggleFullscreen",
				value: function () {
					this.$el.closest(".bootstrap-table").toggleClass("fullscreen"), this.resetView()
				}
			}, {
				key: "toggleView",
				value: function () {
					this.options.cardView = !this.options.cardView, this.initHeader();
					var t = this.options.showButtonIcons ? this.options.cardView ? this.options.icons.toggleOn : this.options.icons.toggleOff : "",
						e = this.options.showButtonText ? this.options.cardView ? this.options.formatToggleOff() : this.options.formatToggleOn() : "";
					this.$toolbar.find('button[name="toggle"]').html(hr.sprintf(this.constants.html.icon, this.options.iconsPrefix, t) + " " + e), this.initBody(), this.trigger("toggle", this.options.cardView)
				}
			}, {
				key: "resetSearch",
				value: function (t) {
					var e = this.$toolbar.find(".search input");
					e.val(t || ""), this.onSearch({
						currentTarget: e
					})
				}
			}, {
				key: "filterBy",
				value: function (e, i) {
					this.filterOptions = hr.isEmptyObject(i) ? this.options.filterOptions : t.extend(this.options.filterOptions, i), this.filterColumns = hr.isEmptyObject(e) ? {} : e, this.options.pageNumber = 1, this.initSearch(), this.updatePagination()
				}
			}, {
				key: "scrollTo",
				value: function (e) {
					if (void 0 === e) return this.$tableBody.scrollTop();
					var i = {
						unit: "px",
						value: 0
					};
					"object" === Yo(e) ? i = Object.assign(i, e) : "string" == typeof e && "bottom" === e ? i.value = this.$tableBody[0].scrollHeight : "string" == typeof e && (i.value = e);
					var n = i.value;
					"rows" === i.unit && (n = 0, this.$body.find("> tr:lt(".concat(i.value, ")")).each((function (e, i) {
						n += t(i).outerHeight(!0)
					}))), this.$tableBody.scrollTop(n)
				}
			}, {
				key: "getScrollPosition",
				value: function () {
					return this.scrollTo()
				}
			}, {
				key: "selectPage",
				value: function (t) {
					t > 0 && t <= this.options.totalPages && (this.options.pageNumber = t, this.updatePagination())
				}
			}, {
				key: "prevPage",
				value: function () {
					this.options.pageNumber > 1 && (this.options.pageNumber--, this.updatePagination())
				}
			}, {
				key: "nextPage",
				value: function () {
					this.options.pageNumber < this.options.totalPages && (this.options.pageNumber++, this.updatePagination())
				}
			}, {
				key: "toggleDetailView",
				value: function (t, e) {
					this.$body.find(hr.sprintf('> tr[data-index="%s"]', t)).next().is("tr.detail-view") ? this.collapseRow(t) : this.expandRow(t, e), this.resetView()
				}
			}, {
				key: "expandRow",
				value: function (t, e) {
					var i = this.data[t],
						n = this.$body.find(hr.sprintf('> tr[data-index="%s"][data-has-detail-view]', t));
					if (!n.next().is("tr.detail-view")) {
						this.options.detailViewIcon && n.find("a.detail-icon").html(hr.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailClose)), n.after(hr.sprintf('<tr class="detail-view"><td colspan="%s"></td></tr>', n.children("td").length));
						var o = n.next().find("td"),
							r = e || this.options.detailFormatter,
							a = hr.calculateObjectValue(this.options, r, [t, i, o], "");
						1 === o.length && o.append(a), this.trigger("expand-row", t, i, o)
					}
				}
			}, {
				key: "collapseRow",
				value: function (t) {
					var e = this.data[t],
						i = this.$body.find(hr.sprintf('> tr[data-index="%s"][data-has-detail-view]', t));
					i.next().is("tr.detail-view") && (this.options.detailViewIcon && i.find("a.detail-icon").html(hr.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen)), this.trigger("collapse-row", t, e, i.next()), i.next().remove())
				}
			}, {
				key: "expandAllRows",
				value: function () {
					for (var e = this.$body.find("> tr[data-index][data-has-detail-view]"), i = 0; i < e.length; i++) this.expandRow(t(e[i]).data("index"))
				}
			}, {
				key: "collapseAllRows",
				value: function () {
					for (var e = this.$body.find("> tr[data-index][data-has-detail-view]"), i = 0; i < e.length; i++) this.collapseRow(t(e[i]).data("index"))
				}
			}, {
				key: "updateColumnTitle",
				value: function (e) {
					e.hasOwnProperty("field") && e.hasOwnProperty("title") && (this.columns[this.fieldsColumnsIndex[e.field]].title = this.options.escape ? hr.escapeHTML(e.title) : e.title, this.columns[this.fieldsColumnsIndex[e.field]].visible && (void 0 !== this.options.height ? this.$tableHeader : this.$header).find("th[data-field]").each((function (i, n) {
						if (t(n).data("field") === e.field) return t(t(n).find(".th-inner")[0]).text(e.title), !1
					})))
				}
			}, {
				key: "updateFormatText",
				value: function (t, e) {
					/^format/.test(t) && this.options[t] && ("string" == typeof e ? this.options[t] = function () {
						return e
					} : "function" == typeof e && (this.options[t] = e), this.initToolbar(), this.initPagination(), this.initBody())
				}
			}]), e
		}();
	return dr.VERSION = lr.VERSION, dr.DEFAULTS = lr.DEFAULTS, dr.LOCALES = lr.LOCALES, dr.COLUMN_DEFAULTS = lr.COLUMN_DEFAULTS, dr.METHODS = lr.METHODS, dr.EVENTS = lr.EVENTS, t.BootstrapTable = dr, t.fn.bootstrapTable = function (e) {
		for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
		var r;
		return this.each((function (i, o) {
			var a = t(o).data("bootstrap.table"),
				s = t.extend({}, dr.DEFAULTS, t(o).data(), "object" === Yo(e) && e);
			if ("string" == typeof e) {
				var l;
				if (!lr.METHODS.includes(e)) throw new Error("Unknown method: ".concat(e));
				if (!a) return;
				r = (l = a)[e].apply(l, n), "destroy" === e && t(o).removeData("bootstrap.table")
			}
			a || t(o).data("bootstrap.table", a = new t.BootstrapTable(o, s))
		})), void 0 === r ? this : r
	}, t.fn.bootstrapTable.Constructor = dr, t.fn.bootstrapTable.theme = lr.THEME, t.fn.bootstrapTable.VERSION = lr.VERSION, t.fn.bootstrapTable.defaults = dr.DEFAULTS, t.fn.bootstrapTable.columnDefaults = dr.COLUMN_DEFAULTS, t.fn.bootstrapTable.events = dr.EVENTS, t.fn.bootstrapTable.locales = dr.LOCALES, t.fn.bootstrapTable.methods = dr.METHODS, t.fn.bootstrapTable.utils = hr, t((function () {
		t('[data-toggle="table"]').bootstrapTable()
	})), dr
}));