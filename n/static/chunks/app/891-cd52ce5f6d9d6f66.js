"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[891], {
    8030: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return s
            }
        });
        var r = n(2265);
        /**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let o = e=>e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
          , i = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return t.filter((e,t,n)=>!!e && n.indexOf(e) === t).join(" ")
        };
        /**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        var l = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        /**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let a = (0,
        r.forwardRef)((e,t)=>{
            let {color: n="currentColor", size: o=24, strokeWidth: a=2, absoluteStrokeWidth: s, className: c="", children: u, iconNode: d, ...f} = e;
            return (0,
            r.createElement)("svg", {
                ref: t,
                ...l,
                width: o,
                height: o,
                stroke: n,
                strokeWidth: s ? 24 * Number(a) / Number(o) : a,
                className: i("lucide", c),
                ...f
            }, [...d.map(e=>{
                let[t,n] = e;
                return (0,
                r.createElement)(t, n)
            }
            ), ...Array.isArray(u) ? u : [u]])
        }
        )
          , s = (e,t)=>{
            let n = (0,
            r.forwardRef)((n,l)=>{
                let {className: s, ...c} = n;
                return (0,
                r.createElement)(a, {
                    ref: l,
                    iconNode: t,
                    className: i("lucide-".concat(o(e)), s),
                    ...c
                })
            }
            );
            return n.displayName = "".concat(e),
            n
        }
    },
    2699: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            }
        });
        /**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let r = (0,
        n(8030).Z)("Moon", [["path", {
            d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
            key: "a7tn18"
        }]])
    },
    8296: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            }
        });
        /**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let r = (0,
        n(8030).Z)("Sun", [["circle", {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }], ["path", {
            d: "M12 2v2",
            key: "tus03m"
        }], ["path", {
            d: "M12 20v2",
            key: "1lh1kg"
        }], ["path", {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }], ["path", {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }], ["path", {
            d: "M2 12h2",
            key: "1t8f8n"
        }], ["path", {
            d: "M20 12h2",
            key: "1q8mjw"
        }], ["path", {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }], ["path", {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }]])
    },
    1891: function(e, t, n) {
        let r, o;
        function i() {
            return (i = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        n.d(t, {
            VY: function() {
                return tt
            },
            fC: function() {
                return e7
            },
            xz: function() {
                return te
            }
        });
        var l = n(2265);
        function a(e, t, {checkForDefaultPrevented: n=!0}={}) {
            return function(r) {
                if (null == e || e(r),
                !1 === n || !r.defaultPrevented)
                    return null == t ? void 0 : t(r)
            }
        }
        function s(e, t=[]) {
            let n = []
              , r = ()=>{
                let t = n.map(e=>(0,
                l.createContext)(e));
                return function(n) {
                    let r = (null == n ? void 0 : n[e]) || t;
                    return (0,
                    l.useMemo)(()=>({
                        [`__scope${e}`]: {
                            ...n,
                            [e]: r
                        }
                    }), [n, r])
                }
            }
            ;
            return r.scopeName = e,
            [function(t, r) {
                let o = (0,
                l.createContext)(r)
                  , i = n.length;
                function a(t) {
                    let {scope: n, children: r, ...a} = t
                      , s = (null == n ? void 0 : n[e][i]) || o
                      , c = (0,
                    l.useMemo)(()=>a, Object.values(a));
                    return (0,
                    l.createElement)(s.Provider, {
                        value: c
                    }, r)
                }
                return n = [...n, r],
                a.displayName = t + "Provider",
                [a, function(n, a) {
                    let s = (null == a ? void 0 : a[e][i]) || o
                      , c = (0,
                    l.useContext)(s);
                    if (c)
                        return c;
                    if (void 0 !== r)
                        return r;
                    throw Error(`\`${n}\` must be used within \`${t}\``)
                }
                ]
            }
            , function(...e) {
                let t = e[0];
                if (1 === e.length)
                    return t;
                let n = ()=>{
                    let n = e.map(e=>({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let r = n.reduce((t,{useScope: n, scopeName: r})=>{
                            let o = n(e)[`__scope${r}`];
                            return {
                                ...t,
                                ...o
                            }
                        }
                        , {});
                        return (0,
                        l.useMemo)(()=>({
                            [`__scope${t.scopeName}`]: r
                        }), [r])
                    }
                }
                ;
                return n.scopeName = t.scopeName,
                n
            }(r, ...t)]
        }
        function c(e) {
            let t = (0,
            l.useRef)(e);
            return (0,
            l.useEffect)(()=>{
                t.current = e
            }
            ),
            (0,
            l.useMemo)(()=>(...e)=>{
                var n;
                return null === (n = t.current) || void 0 === n ? void 0 : n.call(t, ...e)
            }
            , [])
        }
        function u(...e) {
            return t=>e.forEach(e=>{
                "function" == typeof e ? e(t) : null != e && (e.current = t)
            }
            )
        }
        function d(...e) {
            return (0,
            l.useCallback)(u(...e), e)
        }
        let f = ["top", "right", "bottom", "left"]
          , p = Math.min
          , m = Math.max
          , h = Math.round
          , g = Math.floor
          , b = e=>({
            x: e,
            y: e
        })
          , v = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        }
          , y = {
            start: "end",
            end: "start"
        };
        function w(e, t) {
            return "function" == typeof e ? e(t) : e
        }
        function x(e) {
            return e.split("-")[0]
        }
        function E(e) {
            return e.split("-")[1]
        }
        function C(e) {
            return "x" === e ? "y" : "x"
        }
        function k(e) {
            return "y" === e ? "height" : "width"
        }
        function S(e) {
            return ["top", "bottom"].includes(x(e)) ? "y" : "x"
        }
        function T(e) {
            return e.replace(/start|end/g, e=>y[e])
        }
        function P(e) {
            return e.replace(/left|right|bottom|top/g, e=>v[e])
        }
        function O(e) {
            return "number" != typeof e ? {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...e
            } : {
                top: e,
                right: e,
                bottom: e,
                left: e
            }
        }
        function R(e) {
            let {x: t, y: n, width: r, height: o} = e;
            return {
                width: r,
                height: o,
                top: n,
                left: t,
                right: t + r,
                bottom: n + o,
                x: t,
                y: n
            }
        }
        function L(e, t, n) {
            let r, {reference: o, floating: i} = e, l = S(t), a = C(S(t)), s = k(a), c = x(t), u = "y" === l, d = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, p = o[s] / 2 - i[s] / 2;
            switch (c) {
            case "top":
                r = {
                    x: d,
                    y: o.y - i.height
                };
                break;
            case "bottom":
                r = {
                    x: d,
                    y: o.y + o.height
                };
                break;
            case "right":
                r = {
                    x: o.x + o.width,
                    y: f
                };
                break;
            case "left":
                r = {
                    x: o.x - i.width,
                    y: f
                };
                break;
            default:
                r = {
                    x: o.x,
                    y: o.y
                }
            }
            switch (E(t)) {
            case "start":
                r[a] -= p * (n && u ? -1 : 1);
                break;
            case "end":
                r[a] += p * (n && u ? -1 : 1)
            }
            return r
        }
        let A = async(e,t,n)=>{
            let {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: l} = n
              , a = i.filter(Boolean)
              , s = await (null == l.isRTL ? void 0 : l.isRTL(t))
              , c = await l.getElementRects({
                reference: e,
                floating: t,
                strategy: o
            })
              , {x: u, y: d} = L(c, r, s)
              , f = r
              , p = {}
              , m = 0;
            for (let n = 0; n < a.length; n++) {
                let {name: i, fn: h} = a[n]
                  , {x: g, y: b, data: v, reset: y} = await h({
                    x: u,
                    y: d,
                    initialPlacement: r,
                    placement: f,
                    strategy: o,
                    middlewareData: p,
                    rects: c,
                    platform: l,
                    elements: {
                        reference: e,
                        floating: t
                    }
                });
                u = null != g ? g : u,
                d = null != b ? b : d,
                p = {
                    ...p,
                    [i]: {
                        ...p[i],
                        ...v
                    }
                },
                y && m <= 50 && (m++,
                "object" == typeof y && (y.placement && (f = y.placement),
                y.rects && (c = !0 === y.rects ? await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }) : y.rects),
                {x: u, y: d} = L(c, f, s)),
                n = -1)
            }
            return {
                x: u,
                y: d,
                placement: f,
                strategy: o,
                middlewareData: p
            }
        }
        ;
        async function N(e, t) {
            var n;
            void 0 === t && (t = {});
            let {x: r, y: o, platform: i, rects: l, elements: a, strategy: s} = e
              , {boundary: c="clippingAncestors", rootBoundary: u="viewport", elementContext: d="floating", altBoundary: f=!1, padding: p=0} = w(t, e)
              , m = O(p)
              , h = a[f ? "floating" === d ? "reference" : "floating" : d]
              , g = R(await i.getClippingRect({
                element: null == (n = await (null == i.isElement ? void 0 : i.isElement(h))) || n ? h : h.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
                boundary: c,
                rootBoundary: u,
                strategy: s
            }))
              , b = "floating" === d ? {
                x: r,
                y: o,
                width: l.floating.width,
                height: l.floating.height
            } : l.reference
              , v = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating))
              , y = await (null == i.isElement ? void 0 : i.isElement(v)) && await (null == i.getScale ? void 0 : i.getScale(v)) || {
                x: 1,
                y: 1
            }
              , x = R(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                elements: a,
                rect: b,
                offsetParent: v,
                strategy: s
            }) : b);
            return {
                top: (g.top - x.top + m.top) / y.y,
                bottom: (x.bottom - g.bottom + m.bottom) / y.y,
                left: (g.left - x.left + m.left) / y.x,
                right: (x.right - g.right + m.right) / y.x
            }
        }
        function z(e, t) {
            return {
                top: e.top - t.height,
                right: e.right - t.width,
                bottom: e.bottom - t.height,
                left: e.left - t.width
            }
        }
        function D(e) {
            return f.some(t=>e[t] >= 0)
        }
        async function M(e, t) {
            let {placement: n, platform: r, elements: o} = e
              , i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating))
              , l = x(n)
              , a = E(n)
              , s = "y" === S(n)
              , c = ["left", "top"].includes(l) ? -1 : 1
              , u = i && s ? -1 : 1
              , d = w(t, e)
              , {mainAxis: f, crossAxis: p, alignmentAxis: m} = "number" == typeof d ? {
                mainAxis: d,
                crossAxis: 0,
                alignmentAxis: null
            } : {
                mainAxis: 0,
                crossAxis: 0,
                alignmentAxis: null,
                ...d
            };
            return a && "number" == typeof m && (p = "end" === a ? -1 * m : m),
            s ? {
                x: p * u,
                y: f * c
            } : {
                x: f * c,
                y: p * u
            }
        }
        function _(e) {
            return H(e) ? (e.nodeName || "").toLowerCase() : "#document"
        }
        function j(e) {
            var t;
            return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        }
        function W(e) {
            var t;
            return null == (t = (H(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
        }
        function H(e) {
            return e instanceof Node || e instanceof j(e).Node
        }
        function I(e) {
            return e instanceof Element || e instanceof j(e).Element
        }
        function F(e) {
            return e instanceof HTMLElement || e instanceof j(e).HTMLElement
        }
        function $(e) {
            return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof j(e).ShadowRoot)
        }
        function B(e) {
            let {overflow: t, overflowX: n, overflowY: r, display: o} = Z(e);
            return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
        }
        function V(e) {
            let t = U()
              , n = Z(e);
            return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(e=>(n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e=>(n.contain || "").includes(e))
        }
        function U() {
            return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
        }
        function G(e) {
            return ["html", "body", "#document"].includes(_(e))
        }
        function Z(e) {
            return j(e).getComputedStyle(e)
        }
        function K(e) {
            return I(e) ? {
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
            } : {
                scrollLeft: e.pageXOffset,
                scrollTop: e.pageYOffset
            }
        }
        function q(e) {
            if ("html" === _(e))
                return e;
            let t = e.assignedSlot || e.parentNode || $(e) && e.host || W(e);
            return $(t) ? t.host : t
        }
        function Y(e, t, n) {
            var r;
            void 0 === t && (t = []),
            void 0 === n && (n = !0);
            let o = function e(t) {
                let n = q(t);
                return G(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : F(n) && B(n) ? n : e(n)
            }(e)
              , i = o === (null == (r = e.ownerDocument) ? void 0 : r.body)
              , l = j(o);
            return i ? t.concat(l, l.visualViewport || [], B(o) ? o : [], l.frameElement && n ? Y(l.frameElement) : []) : t.concat(o, Y(o, [], n))
        }
        function J(e) {
            let t = Z(e)
              , n = parseFloat(t.width) || 0
              , r = parseFloat(t.height) || 0
              , o = F(e)
              , i = o ? e.offsetWidth : n
              , l = o ? e.offsetHeight : r
              , a = h(n) !== i || h(r) !== l;
            return a && (n = i,
            r = l),
            {
                width: n,
                height: r,
                $: a
            }
        }
        function X(e) {
            return I(e) ? e : e.contextElement
        }
        function Q(e) {
            let t = X(e);
            if (!F(t))
                return b(1);
            let n = t.getBoundingClientRect()
              , {width: r, height: o, $: i} = J(t)
              , l = (i ? h(n.width) : n.width) / r
              , a = (i ? h(n.height) : n.height) / o;
            return l && Number.isFinite(l) || (l = 1),
            a && Number.isFinite(a) || (a = 1),
            {
                x: l,
                y: a
            }
        }
        let ee = b(0);
        function et(e) {
            let t = j(e);
            return U() && t.visualViewport ? {
                x: t.visualViewport.offsetLeft,
                y: t.visualViewport.offsetTop
            } : ee
        }
        function en(e, t, n, r) {
            var o;
            void 0 === t && (t = !1),
            void 0 === n && (n = !1);
            let i = e.getBoundingClientRect()
              , l = X(e)
              , a = b(1);
            t && (r ? I(r) && (a = Q(r)) : a = Q(e));
            let s = (void 0 === (o = n) && (o = !1),
            r && (!o || r === j(l)) && o) ? et(l) : b(0)
              , c = (i.left + s.x) / a.x
              , u = (i.top + s.y) / a.y
              , d = i.width / a.x
              , f = i.height / a.y;
            if (l) {
                let e = j(l)
                  , t = r && I(r) ? j(r) : r
                  , n = e
                  , o = n.frameElement;
                for (; o && r && t !== n; ) {
                    let e = Q(o)
                      , t = o.getBoundingClientRect()
                      , r = Z(o)
                      , i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x
                      , l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
                    c *= e.x,
                    u *= e.y,
                    d *= e.x,
                    f *= e.y,
                    c += i,
                    u += l,
                    o = (n = j(o)).frameElement
                }
            }
            return R({
                width: d,
                height: f,
                x: c,
                y: u
            })
        }
        let er = [":popover-open", ":modal"];
        function eo(e) {
            return er.some(t=>{
                try {
                    return e.matches(t)
                } catch (e) {
                    return !1
                }
            }
            )
        }
        function ei(e) {
            return en(W(e)).left + K(e).scrollLeft
        }
        function el(e, t, n) {
            let r;
            if ("viewport" === t)
                r = function(e, t) {
                    let n = j(e)
                      , r = W(e)
                      , o = n.visualViewport
                      , i = r.clientWidth
                      , l = r.clientHeight
                      , a = 0
                      , s = 0;
                    if (o) {
                        i = o.width,
                        l = o.height;
                        let e = U();
                        (!e || e && "fixed" === t) && (a = o.offsetLeft,
                        s = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: a,
                        y: s
                    }
                }(e, n);
            else if ("document" === t)
                r = function(e) {
                    let t = W(e)
                      , n = K(e)
                      , r = e.ownerDocument.body
                      , o = m(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
                      , i = m(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight)
                      , l = -n.scrollLeft + ei(e)
                      , a = -n.scrollTop;
                    return "rtl" === Z(r).direction && (l += m(t.clientWidth, r.clientWidth) - o),
                    {
                        width: o,
                        height: i,
                        x: l,
                        y: a
                    }
                }(W(e));
            else if (I(t))
                r = function(e, t) {
                    let n = en(e, !0, "fixed" === t)
                      , r = n.top + e.clientTop
                      , o = n.left + e.clientLeft
                      , i = F(e) ? Q(e) : b(1)
                      , l = e.clientWidth * i.x;
                    return {
                        width: l,
                        height: e.clientHeight * i.y,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(t, n);
            else {
                let n = et(e);
                r = {
                    ...t,
                    x: t.x - n.x,
                    y: t.y - n.y
                }
            }
            return R(r)
        }
        function ea(e) {
            return "static" === Z(e).position
        }
        function es(e, t) {
            return F(e) && "fixed" !== Z(e).position ? t ? t(e) : e.offsetParent : null
        }
        function ec(e, t) {
            let n = j(e);
            if (eo(e))
                return n;
            if (!F(e)) {
                let t = q(e);
                for (; t && !G(t); ) {
                    if (I(t) && !ea(t))
                        return t;
                    t = q(t)
                }
                return n
            }
            let r = es(e, t);
            for (; r && ["table", "td", "th"].includes(_(r)) && ea(r); )
                r = es(r, t);
            return r && G(r) && ea(r) && !V(r) ? n : r || function(e) {
                let t = q(e);
                for (; F(t) && !G(t); ) {
                    if (V(t))
                        return t;
                    t = q(t)
                }
                return null
            }(e) || n
        }
        let eu = async function(e) {
            let t = this.getOffsetParent || ec
              , n = this.getDimensions
              , r = await n(e.floating);
            return {
                reference: function(e, t, n) {
                    let r = F(t)
                      , o = W(t)
                      , i = "fixed" === n
                      , l = en(e, !0, i, t)
                      , a = {
                        scrollLeft: 0,
                        scrollTop: 0
                    }
                      , s = b(0);
                    if (r || !r && !i) {
                        if (("body" !== _(t) || B(o)) && (a = K(t)),
                        r) {
                            let e = en(t, !0, i, t);
                            s.x = e.x + t.clientLeft,
                            s.y = e.y + t.clientTop
                        } else
                            o && (s.x = ei(o))
                    }
                    return {
                        x: l.left + a.scrollLeft - s.x,
                        y: l.top + a.scrollTop - s.y,
                        width: l.width,
                        height: l.height
                    }
                }(e.reference, await t(e.floating), e.strategy),
                floating: {
                    x: 0,
                    y: 0,
                    width: r.width,
                    height: r.height
                }
            }
        }
          , ed = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                let {elements: t, rect: n, offsetParent: r, strategy: o} = e
                  , i = "fixed" === o
                  , l = W(r)
                  , a = !!t && eo(t.floating);
                if (r === l || a && i)
                    return n;
                let s = {
                    scrollLeft: 0,
                    scrollTop: 0
                }
                  , c = b(1)
                  , u = b(0)
                  , d = F(r);
                if ((d || !d && !i) && (("body" !== _(r) || B(l)) && (s = K(r)),
                F(r))) {
                    let e = en(r);
                    c = Q(r),
                    u.x = e.x + r.clientLeft,
                    u.y = e.y + r.clientTop
                }
                return {
                    width: n.width * c.x,
                    height: n.height * c.y,
                    x: n.x * c.x - s.scrollLeft * c.x + u.x,
                    y: n.y * c.y - s.scrollTop * c.y + u.y
                }
            },
            getDocumentElement: W,
            getClippingRect: function(e) {
                let {element: t, boundary: n, rootBoundary: r, strategy: o} = e
                  , i = [..."clippingAncestors" === n ? eo(t) ? [] : function(e, t) {
                    let n = t.get(e);
                    if (n)
                        return n;
                    let r = Y(e, [], !1).filter(e=>I(e) && "body" !== _(e))
                      , o = null
                      , i = "fixed" === Z(e).position
                      , l = i ? q(e) : e;
                    for (; I(l) && !G(l); ) {
                        let t = Z(l)
                          , n = V(l);
                        n || "fixed" !== t.position || (o = null),
                        (i ? !n && !o : !n && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || B(l) && !n && function e(t, n) {
                            let r = q(t);
                            return !(r === n || !I(r) || G(r)) && ("fixed" === Z(r).position || e(r, n))
                        }(e, l)) ? r = r.filter(e=>e !== l) : o = t,
                        l = q(l)
                    }
                    return t.set(e, r),
                    r
                }(t, this._c) : [].concat(n), r]
                  , l = i[0]
                  , a = i.reduce((e,n)=>{
                    let r = el(t, n, o);
                    return e.top = m(r.top, e.top),
                    e.right = p(r.right, e.right),
                    e.bottom = p(r.bottom, e.bottom),
                    e.left = m(r.left, e.left),
                    e
                }
                , el(t, l, o));
                return {
                    width: a.right - a.left,
                    height: a.bottom - a.top,
                    x: a.left,
                    y: a.top
                }
            },
            getOffsetParent: ec,
            getElementRects: eu,
            getClientRects: function(e) {
                return Array.from(e.getClientRects())
            },
            getDimensions: function(e) {
                let {width: t, height: n} = J(e);
                return {
                    width: t,
                    height: n
                }
            },
            getScale: Q,
            isElement: I,
            isRTL: function(e) {
                return "rtl" === Z(e).direction
            }
        }
          , ef = e=>({
            name: "arrow",
            options: e,
            async fn(t) {
                let {x: n, y: r, placement: o, rects: i, platform: l, elements: a, middlewareData: s} = t
                  , {element: c, padding: u=0} = w(e, t) || {};
                if (null == c)
                    return {};
                let d = O(u)
                  , f = {
                    x: n,
                    y: r
                }
                  , h = C(S(o))
                  , g = k(h)
                  , b = await l.getDimensions(c)
                  , v = "y" === h
                  , y = v ? "clientHeight" : "clientWidth"
                  , x = i.reference[g] + i.reference[h] - f[h] - i.floating[g]
                  , T = f[h] - i.reference[h]
                  , P = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(c))
                  , R = P ? P[y] : 0;
                R && await (null == l.isElement ? void 0 : l.isElement(P)) || (R = a.floating[y] || i.floating[g]);
                let L = R / 2 - b[g] / 2 - 1
                  , A = p(d[v ? "top" : "left"], L)
                  , N = p(d[v ? "bottom" : "right"], L)
                  , z = R - b[g] - N
                  , D = R / 2 - b[g] / 2 + (x / 2 - T / 2)
                  , M = m(A, p(D, z))
                  , _ = !s.arrow && null != E(o) && D !== M && i.reference[g] / 2 - (D < A ? A : N) - b[g] / 2 < 0
                  , j = _ ? D < A ? D - A : D - z : 0;
                return {
                    [h]: f[h] + j,
                    data: {
                        [h]: M,
                        centerOffset: D - M - j,
                        ..._ && {
                            alignmentOffset: j
                        }
                    },
                    reset: _
                }
            }
        })
          , ep = (e,t,n)=>{
            let r = new Map
              , o = {
                platform: ed,
                ...n
            }
              , i = {
                ...o.platform,
                _c: r
            };
            return A(e, t, {
                ...o,
                platform: i
            })
        }
        ;
        var em = n(4887);
        let eh = e=>({
            name: "arrow",
            options: e,
            fn(t) {
                let {element: n, padding: r} = "function" == typeof e ? e(t) : e;
                return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? ef({
                    element: n.current,
                    padding: r
                }).fn(t) : {} : n ? ef({
                    element: n,
                    padding: r
                }).fn(t) : {}
            }
        });
        var eg = "undefined" != typeof document ? l.useLayoutEffect : l.useEffect;
        function eb(e, t) {
            let n, r, o;
            if (e === t)
                return !0;
            if (typeof e != typeof t)
                return !1;
            if ("function" == typeof e && e.toString() === t.toString())
                return !0;
            if (e && t && "object" == typeof e) {
                if (Array.isArray(e)) {
                    if ((n = e.length) !== t.length)
                        return !1;
                    for (r = n; 0 != r--; )
                        if (!eb(e[r], t[r]))
                            return !1;
                    return !0
                }
                if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
                    return !1;
                for (r = n; 0 != r--; )
                    if (!({}).hasOwnProperty.call(t, o[r]))
                        return !1;
                for (r = n; 0 != r--; ) {
                    let n = o[r];
                    if (("_owner" !== n || !e.$$typeof) && !eb(e[n], t[n]))
                        return !1
                }
                return !0
            }
            return e != e && t != t
        }
        function ev(e) {
            return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
        }
        function ey(e, t) {
            let n = ev(e);
            return Math.round(t * n) / n
        }
        function ew(e) {
            let t = l.useRef(e);
            return eg(()=>{
                t.current = e
            }
            ),
            t
        }
        let ex = (0,
        l.forwardRef)((e,t)=>{
            let {children: n, ...r} = e
              , o = l.Children.toArray(n)
              , a = o.find(ek);
            if (a) {
                let e = a.props.children
                  , n = o.map(t=>t !== a ? t : l.Children.count(e) > 1 ? l.Children.only(null) : (0,
                l.isValidElement)(e) ? e.props.children : null);
                return (0,
                l.createElement)(eE, i({}, r, {
                    ref: t
                }), (0,
                l.isValidElement)(e) ? (0,
                l.cloneElement)(e, void 0, n) : null)
            }
            return (0,
            l.createElement)(eE, i({}, r, {
                ref: t
            }), n)
        }
        );
        ex.displayName = "Slot";
        let eE = (0,
        l.forwardRef)((e,t)=>{
            let {children: n, ...r} = e;
            return (0,
            l.isValidElement)(n) ? (0,
            l.cloneElement)(n, {
                ...function(e, t) {
                    let n = {
                        ...t
                    };
                    for (let r in t) {
                        let o = e[r]
                          , i = t[r];
                        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e)=>{
                            i(...e),
                            o(...e)
                        }
                        : o && (n[r] = o) : "style" === r ? n[r] = {
                            ...o,
                            ...i
                        } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                    }
                    return {
                        ...e,
                        ...n
                    }
                }(r, n.props),
                ref: t ? u(t, n.ref) : n.ref
            }) : l.Children.count(n) > 1 ? l.Children.only(null) : null
        }
        );
        eE.displayName = "SlotClone";
        let eC = ({children: e})=>(0,
        l.createElement)(l.Fragment, null, e);
        function ek(e) {
            return (0,
            l.isValidElement)(e) && e.type === eC
        }
        let eS = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e,t)=>{
            let n = (0,
            l.forwardRef)((e,n)=>{
                let {asChild: r, ...o} = e
                  , a = r ? ex : t;
                return (0,
                l.useEffect)(()=>{
                    window[Symbol.for("radix-ui")] = !0
                }
                , []),
                (0,
                l.createElement)(a, i({}, o, {
                    ref: n
                }))
            }
            );
            return n.displayName = `Primitive.${t}`,
            {
                ...e,
                [t]: n
            }
        }
        , {})
          , eT = (0,
        l.forwardRef)((e,t)=>{
            let {children: n, width: r=10, height: o=5, ...a} = e;
            return (0,
            l.createElement)(eS.svg, i({}, a, {
                ref: t,
                width: r,
                height: o,
                viewBox: "0 0 30 10",
                preserveAspectRatio: "none"
            }), e.asChild ? n : (0,
            l.createElement)("polygon", {
                points: "0,0 30,0 15,10"
            }))
        }
        )
          , eP = (null == globalThis ? void 0 : globalThis.document) ? l.useLayoutEffect : ()=>{}
          , eO = "Popper"
          , [eR,eL] = s(eO)
          , [eA,eN] = eR(eO)
          , ez = (0,
        l.forwardRef)((e,t)=>{
            let {__scopePopper: n, virtualRef: r, ...o} = e
              , a = eN("PopperAnchor", n)
              , s = (0,
            l.useRef)(null)
              , c = d(t, s);
            return (0,
            l.useEffect)(()=>{
                a.onAnchorChange((null == r ? void 0 : r.current) || s.current)
            }
            ),
            r ? null : (0,
            l.createElement)(eS.div, i({}, o, {
                ref: c
            }))
        }
        )
          , eD = "PopperContent"
          , [eM,e_] = eR(eD)
          , ej = (0,
        l.forwardRef)((e,t)=>{
            var n, r, o, a, s, u, f, h, b, v, y, O, R, L;
            let {__scopePopper: A, side: _="bottom", sideOffset: j=0, align: H="center", alignOffset: I=0, arrowPadding: F=0, avoidCollisions: $=!0, collisionBoundary: B=[], collisionPadding: V=0, sticky: U="partial", hideWhenDetached: G=!1, updatePositionStrategy: Z="optimized", onPlaced: K, ...q} = e
              , J = eN(eD, A)
              , [Q,ee] = (0,
            l.useState)(null)
              , et = d(t, e=>ee(e))
              , [er,eo] = (0,
            l.useState)(null)
              , ei = function(e) {
                let[t,n] = (0,
                l.useState)(void 0);
                return eP(()=>{
                    if (e) {
                        n({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t=>{
                            let r, o;
                            if (!Array.isArray(t) || !t.length)
                                return;
                            let i = t[0];
                            if ("borderBoxSize"in i) {
                                let e = i.borderBoxSize
                                  , t = Array.isArray(e) ? e[0] : e;
                                r = t.inlineSize,
                                o = t.blockSize
                            } else
                                r = e.offsetWidth,
                                o = e.offsetHeight;
                            n({
                                width: r,
                                height: o
                            })
                        }
                        );
                        return t.observe(e, {
                            box: "border-box"
                        }),
                        ()=>t.unobserve(e)
                    }
                    n(void 0)
                }
                , [e]),
                t
            }(er)
              , el = null !== (n = null == ei ? void 0 : ei.width) && void 0 !== n ? n : 0
              , ea = null !== (r = null == ei ? void 0 : ei.height) && void 0 !== r ? r : 0
              , es = "number" == typeof V ? V : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...V
            }
              , ec = Array.isArray(B) ? B : [B]
              , eu = ec.length > 0
              , ed = {
                padding: es,
                boundary: ec.filter(eH),
                altBoundary: eu
            }
              , {refs: ef, floatingStyles: ex, placement: eE, isPositioned: eC, middlewareData: ek} = function(e) {
                void 0 === e && (e = {});
                let {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: a}={}, transform: s=!0, whileElementsMounted: c, open: u} = e
                  , [d,f] = l.useState({
                    x: 0,
                    y: 0,
                    strategy: n,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1
                })
                  , [p,m] = l.useState(r);
                eb(p, r) || m(r);
                let[h,g] = l.useState(null)
                  , [b,v] = l.useState(null)
                  , y = l.useCallback(e=>{
                    e !== C.current && (C.current = e,
                    g(e))
                }
                , [])
                  , w = l.useCallback(e=>{
                    e !== k.current && (k.current = e,
                    v(e))
                }
                , [])
                  , x = i || h
                  , E = a || b
                  , C = l.useRef(null)
                  , k = l.useRef(null)
                  , S = l.useRef(d)
                  , T = null != c
                  , P = ew(c)
                  , O = ew(o)
                  , R = l.useCallback(()=>{
                    if (!C.current || !k.current)
                        return;
                    let e = {
                        placement: t,
                        strategy: n,
                        middleware: p
                    };
                    O.current && (e.platform = O.current),
                    ep(C.current, k.current, e).then(e=>{
                        let t = {
                            ...e,
                            isPositioned: !0
                        };
                        L.current && !eb(S.current, t) && (S.current = t,
                        em.flushSync(()=>{
                            f(t)
                        }
                        ))
                    }
                    )
                }
                , [p, t, n, O]);
                eg(()=>{
                    !1 === u && S.current.isPositioned && (S.current.isPositioned = !1,
                    f(e=>({
                        ...e,
                        isPositioned: !1
                    })))
                }
                , [u]);
                let L = l.useRef(!1);
                eg(()=>(L.current = !0,
                ()=>{
                    L.current = !1
                }
                ), []),
                eg(()=>{
                    if (x && (C.current = x),
                    E && (k.current = E),
                    x && E) {
                        if (P.current)
                            return P.current(x, E, R);
                        R()
                    }
                }
                , [x, E, R, P, T]);
                let A = l.useMemo(()=>({
                    reference: C,
                    floating: k,
                    setReference: y,
                    setFloating: w
                }), [y, w])
                  , N = l.useMemo(()=>({
                    reference: x,
                    floating: E
                }), [x, E])
                  , z = l.useMemo(()=>{
                    let e = {
                        position: n,
                        left: 0,
                        top: 0
                    };
                    if (!N.floating)
                        return e;
                    let t = ey(N.floating, d.x)
                      , r = ey(N.floating, d.y);
                    return s ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...ev(N.floating) >= 1.5 && {
                            willChange: "transform"
                        }
                    } : {
                        position: n,
                        left: t,
                        top: r
                    }
                }
                , [n, s, N.floating, d.x, d.y]);
                return l.useMemo(()=>({
                    ...d,
                    update: R,
                    refs: A,
                    elements: N,
                    floatingStyles: z
                }), [d, R, A, N, z])
            }({
                strategy: "fixed",
                placement: _ + ("center" !== H ? "-" + H : ""),
                whileElementsMounted: (...e)=>(function(e, t, n, r) {
                    let o;
                    void 0 === r && (r = {});
                    let {ancestorScroll: i=!0, ancestorResize: l=!0, elementResize: a="function" == typeof ResizeObserver, layoutShift: s="function" == typeof IntersectionObserver, animationFrame: c=!1} = r
                      , u = X(e)
                      , d = i || l ? [...u ? Y(u) : [], ...Y(t)] : [];
                    d.forEach(e=>{
                        i && e.addEventListener("scroll", n, {
                            passive: !0
                        }),
                        l && e.addEventListener("resize", n)
                    }
                    );
                    let f = u && s ? function(e, t) {
                        let n, r = null, o = W(e);
                        function i() {
                            var e;
                            clearTimeout(n),
                            null == (e = r) || e.disconnect(),
                            r = null
                        }
                        return !function l(a, s) {
                            void 0 === a && (a = !1),
                            void 0 === s && (s = 1),
                            i();
                            let {left: c, top: u, width: d, height: f} = e.getBoundingClientRect();
                            if (a || t(),
                            !d || !f)
                                return;
                            let h = g(u)
                              , b = g(o.clientWidth - (c + d))
                              , v = {
                                rootMargin: -h + "px " + -b + "px " + -g(o.clientHeight - (u + f)) + "px " + -g(c) + "px",
                                threshold: m(0, p(1, s)) || 1
                            }
                              , y = !0;
                            function w(e) {
                                let t = e[0].intersectionRatio;
                                if (t !== s) {
                                    if (!y)
                                        return l();
                                    t ? l(!1, t) : n = setTimeout(()=>{
                                        l(!1, 1e-7)
                                    }
                                    , 1e3)
                                }
                                y = !1
                            }
                            try {
                                r = new IntersectionObserver(w,{
                                    ...v,
                                    root: o.ownerDocument
                                })
                            } catch (e) {
                                r = new IntersectionObserver(w,v)
                            }
                            r.observe(e)
                        }(!0),
                        i
                    }(u, n) : null
                      , h = -1
                      , b = null;
                    a && (b = new ResizeObserver(e=>{
                        let[r] = e;
                        r && r.target === u && b && (b.unobserve(t),
                        cancelAnimationFrame(h),
                        h = requestAnimationFrame(()=>{
                            var e;
                            null == (e = b) || e.observe(t)
                        }
                        )),
                        n()
                    }
                    ),
                    u && !c && b.observe(u),
                    b.observe(t));
                    let v = c ? en(e) : null;
                    return c && function t() {
                        let r = en(e);
                        v && (r.x !== v.x || r.y !== v.y || r.width !== v.width || r.height !== v.height) && n(),
                        v = r,
                        o = requestAnimationFrame(t)
                    }(),
                    n(),
                    ()=>{
                        var e;
                        d.forEach(e=>{
                            i && e.removeEventListener("scroll", n),
                            l && e.removeEventListener("resize", n)
                        }
                        ),
                        null == f || f(),
                        null == (e = b) || e.disconnect(),
                        b = null,
                        c && cancelAnimationFrame(o)
                    }
                }
                )(...e, {
                    animationFrame: "always" === Z
                }),
                elements: {
                    reference: J.anchor
                },
                middleware: [{
                    name: "offset",
                    options: b = {
                        mainAxis: j + ea,
                        alignmentAxis: I
                    },
                    async fn(e) {
                        var t, n;
                        let {x: r, y: o, placement: i, middlewareData: l} = e
                          , a = await M(e, b);
                        return i === (null == (t = l.offset) ? void 0 : t.placement) && null != (n = l.arrow) && n.alignmentOffset ? {} : {
                            x: r + a.x,
                            y: o + a.y,
                            data: {
                                ...a,
                                placement: i
                            }
                        }
                    }
                }, $ && {
                    name: "shift",
                    options: y = {
                        mainAxis: !0,
                        crossAxis: !1,
                        limiter: "partial" === U ? (void 0 === v && (v = {}),
                        {
                            options: v,
                            fn(e) {
                                let {x: t, y: n, placement: r, rects: o, middlewareData: i} = e
                                  , {offset: l=0, mainAxis: a=!0, crossAxis: s=!0} = w(v, e)
                                  , c = {
                                    x: t,
                                    y: n
                                }
                                  , u = S(r)
                                  , d = C(u)
                                  , f = c[d]
                                  , p = c[u]
                                  , m = w(l, e)
                                  , h = "number" == typeof m ? {
                                    mainAxis: m,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...m
                                };
                                if (a) {
                                    let e = "y" === d ? "height" : "width"
                                      , t = o.reference[d] - o.floating[e] + h.mainAxis
                                      , n = o.reference[d] + o.reference[e] - h.mainAxis;
                                    f < t ? f = t : f > n && (f = n)
                                }
                                if (s) {
                                    var g, b;
                                    let e = "y" === d ? "width" : "height"
                                      , t = ["top", "left"].includes(x(r))
                                      , n = o.reference[u] - o.floating[e] + (t && (null == (g = i.offset) ? void 0 : g[u]) || 0) + (t ? 0 : h.crossAxis)
                                      , l = o.reference[u] + o.reference[e] + (t ? 0 : (null == (b = i.offset) ? void 0 : b[u]) || 0) - (t ? h.crossAxis : 0);
                                    p < n ? p = n : p > l && (p = l)
                                }
                                return {
                                    [d]: f,
                                    [u]: p
                                }
                            }
                        }) : void 0,
                        ...ed
                    },
                    async fn(e) {
                        let {x: t, y: n, placement: r} = e
                          , {mainAxis: o=!0, crossAxis: i=!1, limiter: l={
                            fn: e=>{
                                let {x: t, y: n} = e;
                                return {
                                    x: t,
                                    y: n
                                }
                            }
                        }, ...a} = w(y, e)
                          , s = {
                            x: t,
                            y: n
                        }
                          , c = await N(e, a)
                          , u = S(x(r))
                          , d = C(u)
                          , f = s[d]
                          , h = s[u];
                        if (o) {
                            let e = "y" === d ? "top" : "left"
                              , t = "y" === d ? "bottom" : "right"
                              , n = f + c[e]
                              , r = f - c[t];
                            f = m(n, p(f, r))
                        }
                        if (i) {
                            let e = "y" === u ? "top" : "left"
                              , t = "y" === u ? "bottom" : "right"
                              , n = h + c[e]
                              , r = h - c[t];
                            h = m(n, p(h, r))
                        }
                        let g = l.fn({
                            ...e,
                            [d]: f,
                            [u]: h
                        });
                        return {
                            ...g,
                            data: {
                                x: g.x - t,
                                y: g.y - n
                            }
                        }
                    }
                }, $ && {
                    name: "flip",
                    options: O = {
                        ...ed
                    },
                    async fn(e) {
                        var t, n, r, o, i;
                        let {placement: l, middlewareData: a, rects: s, initialPlacement: c, platform: u, elements: d} = e
                          , {mainAxis: f=!0, crossAxis: p=!0, fallbackPlacements: m, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: g="none", flipAlignment: b=!0, ...v} = w(O, e);
                        if (null != (t = a.arrow) && t.alignmentOffset)
                            return {};
                        let y = x(l)
                          , R = x(c) === c
                          , L = await (null == u.isRTL ? void 0 : u.isRTL(d.floating))
                          , A = m || (R || !b ? [P(c)] : function(e) {
                            let t = P(e);
                            return [T(e), t, T(t)]
                        }(c));
                        m || "none" === g || A.push(...function(e, t, n, r) {
                            let o = E(e)
                              , i = function(e, t, n) {
                                let r = ["left", "right"]
                                  , o = ["right", "left"];
                                switch (e) {
                                case "top":
                                case "bottom":
                                    if (n)
                                        return t ? o : r;
                                    return t ? r : o;
                                case "left":
                                case "right":
                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                default:
                                    return []
                                }
                            }(x(e), "start" === n, r);
                            return o && (i = i.map(e=>e + "-" + o),
                            t && (i = i.concat(i.map(T)))),
                            i
                        }(c, b, g, L));
                        let z = [c, ...A]
                          , D = await N(e, v)
                          , M = []
                          , _ = (null == (n = a.flip) ? void 0 : n.overflows) || [];
                        if (f && M.push(D[y]),
                        p) {
                            let e = function(e, t, n) {
                                void 0 === n && (n = !1);
                                let r = E(e)
                                  , o = C(S(e))
                                  , i = k(o)
                                  , l = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                return t.reference[i] > t.floating[i] && (l = P(l)),
                                [l, P(l)]
                            }(l, s, L);
                            M.push(D[e[0]], D[e[1]])
                        }
                        if (_ = [..._, {
                            placement: l,
                            overflows: M
                        }],
                        !M.every(e=>e <= 0)) {
                            let e = ((null == (r = a.flip) ? void 0 : r.index) || 0) + 1
                              , t = z[e];
                            if (t)
                                return {
                                    data: {
                                        index: e,
                                        overflows: _
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                            let n = null == (o = _.filter(e=>e.overflows[0] <= 0).sort((e,t)=>e.overflows[1] - t.overflows[1])[0]) ? void 0 : o.placement;
                            if (!n)
                                switch (h) {
                                case "bestFit":
                                    {
                                        let e = null == (i = _.map(e=>[e.placement, e.overflows.filter(e=>e > 0).reduce((e,t)=>e + t, 0)]).sort((e,t)=>e[1] - t[1])[0]) ? void 0 : i[0];
                                        e && (n = e);
                                        break
                                    }
                                case "initialPlacement":
                                    n = c
                                }
                            if (l !== n)
                                return {
                                    reset: {
                                        placement: n
                                    }
                                }
                        }
                        return {}
                    }
                }, {
                    name: "size",
                    options: R = {
                        ...ed,
                        apply: ({elements: e, rects: t, availableWidth: n, availableHeight: r})=>{
                            let {width: o, height: i} = t.reference
                              , l = e.floating.style;
                            l.setProperty("--radix-popper-available-width", `${n}px`),
                            l.setProperty("--radix-popper-available-height", `${r}px`),
                            l.setProperty("--radix-popper-anchor-width", `${o}px`),
                            l.setProperty("--radix-popper-anchor-height", `${i}px`)
                        }
                    },
                    async fn(e) {
                        let t, n;
                        let {placement: r, rects: o, platform: i, elements: l} = e
                          , {apply: a=()=>{}
                        , ...s} = w(R, e)
                          , c = await N(e, s)
                          , u = x(r)
                          , d = E(r)
                          , f = "y" === S(r)
                          , {width: h, height: g} = o.floating;
                        "top" === u || "bottom" === u ? (t = u,
                        n = d === (await (null == i.isRTL ? void 0 : i.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (n = u,
                        t = "end" === d ? "top" : "bottom");
                        let b = g - c[t]
                          , v = h - c[n]
                          , y = !e.middlewareData.shift
                          , C = b
                          , k = v;
                        if (f) {
                            let e = h - c.left - c.right;
                            k = d || y ? p(v, e) : e
                        } else {
                            let e = g - c.top - c.bottom;
                            C = d || y ? p(b, e) : e
                        }
                        if (y && !d) {
                            let e = m(c.left, 0)
                              , t = m(c.right, 0)
                              , n = m(c.top, 0)
                              , r = m(c.bottom, 0);
                            f ? k = h - 2 * (0 !== e || 0 !== t ? e + t : m(c.left, c.right)) : C = g - 2 * (0 !== n || 0 !== r ? n + r : m(c.top, c.bottom))
                        }
                        await a({
                            ...e,
                            availableWidth: k,
                            availableHeight: C
                        });
                        let T = await i.getDimensions(l.floating);
                        return h !== T.width || g !== T.height ? {
                            reset: {
                                rects: !0
                            }
                        } : {}
                    }
                }, er && eh({
                    element: er,
                    padding: F
                }), eI({
                    arrowWidth: el,
                    arrowHeight: ea
                }), G && {
                    name: "hide",
                    options: L = {
                        strategy: "referenceHidden",
                        ...ed
                    },
                    async fn(e) {
                        let {rects: t} = e
                          , {strategy: n="referenceHidden", ...r} = w(L, e);
                        switch (n) {
                        case "referenceHidden":
                            {
                                let n = z(await N(e, {
                                    ...r,
                                    elementContext: "reference"
                                }), t.reference);
                                return {
                                    data: {
                                        referenceHiddenOffsets: n,
                                        referenceHidden: D(n)
                                    }
                                }
                            }
                        case "escaped":
                            {
                                let n = z(await N(e, {
                                    ...r,
                                    altBoundary: !0
                                }), t.floating);
                                return {
                                    data: {
                                        escapedOffsets: n,
                                        escaped: D(n)
                                    }
                                }
                            }
                        default:
                            return {}
                        }
                    }
                }]
            })
              , [eT,eO] = eF(eE)
              , eR = c(K);
            eP(()=>{
                eC && (null == eR || eR())
            }
            , [eC, eR]);
            let eL = null === (o = ek.arrow) || void 0 === o ? void 0 : o.x
              , eA = null === (a = ek.arrow) || void 0 === a ? void 0 : a.y
              , ez = (null === (s = ek.arrow) || void 0 === s ? void 0 : s.centerOffset) !== 0
              , [e_,ej] = (0,
            l.useState)();
            return eP(()=>{
                Q && ej(window.getComputedStyle(Q).zIndex)
            }
            , [Q]),
            (0,
            l.createElement)("div", {
                ref: ef.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...ex,
                    transform: eC ? ex.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: e_,
                    "--radix-popper-transform-origin": [null === (u = ek.transformOrigin) || void 0 === u ? void 0 : u.x, null === (f = ek.transformOrigin) || void 0 === f ? void 0 : f.y].join(" ")
                },
                dir: e.dir
            }, (0,
            l.createElement)(eM, {
                scope: A,
                placedSide: eT,
                onArrowChange: eo,
                arrowX: eL,
                arrowY: eA,
                shouldHideArrow: ez
            }, (0,
            l.createElement)(eS.div, i({
                "data-side": eT,
                "data-align": eO
            }, q, {
                ref: et,
                style: {
                    ...q.style,
                    animation: eC ? void 0 : "none",
                    opacity: null !== (h = ek.hide) && void 0 !== h && h.referenceHidden ? 0 : void 0
                }
            }))))
        }
        )
          , eW = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
        };
        function eH(e) {
            return null !== e
        }
        let eI = e=>({
            name: "transformOrigin",
            options: e,
            fn(t) {
                var n, r, o, i, l;
                let {placement: a, rects: s, middlewareData: c} = t
                  , u = (null === (n = c.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0
                  , d = u ? 0 : e.arrowWidth
                  , f = u ? 0 : e.arrowHeight
                  , [p,m] = eF(a)
                  , h = {
                    start: "0%",
                    center: "50%",
                    end: "100%"
                }[m]
                  , g = (null !== (r = null === (o = c.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== r ? r : 0) + d / 2
                  , b = (null !== (i = null === (l = c.arrow) || void 0 === l ? void 0 : l.y) && void 0 !== i ? i : 0) + f / 2
                  , v = ""
                  , y = "";
                return "bottom" === p ? (v = u ? h : `${g}px`,
                y = `${-f}px`) : "top" === p ? (v = u ? h : `${g}px`,
                y = `${s.floating.height + f}px`) : "right" === p ? (v = `${-f}px`,
                y = u ? h : `${b}px`) : "left" === p && (v = `${s.floating.width + f}px`,
                y = u ? h : `${b}px`),
                {
                    data: {
                        x: v,
                        y: y
                    }
                }
            }
        });
        function eF(e) {
            let[t,n="center"] = e.split("-");
            return [t, n]
        }
        let e$ = e=>{
            let {__scopePopper: t, children: n} = e
              , [r,o] = (0,
            l.useState)(null);
            return (0,
            l.createElement)(eA, {
                scope: t,
                anchor: r,
                onAnchorChange: o
            }, n)
        }
          , eB = ((e,t)=>{
            var n;
            let {container: r=null == globalThis ? void 0 : null === (n = globalThis.document) || void 0 === n ? void 0 : n.body, ...o} = e;
            return r ? em.createPortal((0,
            l.createElement)(eS.div, i({}, o, {
                ref: t
            })), r) : null
        }
        ,
        e=>{
            let {present: t, children: n} = e
              , r = function(e) {
                var t, n;
                let[r,o] = (0,
                l.useState)()
                  , i = (0,
                l.useRef)({})
                  , a = (0,
                l.useRef)(e)
                  , s = (0,
                l.useRef)("none")
                  , [c,u] = (t = e ? "mounted" : "unmounted",
                n = {
                    mounted: {
                        UNMOUNT: "unmounted",
                        ANIMATION_OUT: "unmountSuspended"
                    },
                    unmountSuspended: {
                        MOUNT: "mounted",
                        ANIMATION_END: "unmounted"
                    },
                    unmounted: {
                        MOUNT: "mounted"
                    }
                },
                (0,
                l.useReducer)((e,t)=>{
                    let r = n[e][t];
                    return null != r ? r : e
                }
                , t));
                return (0,
                l.useEffect)(()=>{
                    let e = eV(i.current);
                    s.current = "mounted" === c ? e : "none"
                }
                , [c]),
                eP(()=>{
                    let t = i.current
                      , n = a.current;
                    if (n !== e) {
                        let r = s.current
                          , o = eV(t);
                        e ? u("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? u("UNMOUNT") : n && r !== o ? u("ANIMATION_OUT") : u("UNMOUNT"),
                        a.current = e
                    }
                }
                , [e, u]),
                eP(()=>{
                    if (r) {
                        let e = e=>{
                            let t = eV(i.current).includes(e.animationName);
                            e.target === r && t && (0,
                            em.flushSync)(()=>u("ANIMATION_END"))
                        }
                          , t = e=>{
                            e.target === r && (s.current = eV(i.current))
                        }
                        ;
                        return r.addEventListener("animationstart", t),
                        r.addEventListener("animationcancel", e),
                        r.addEventListener("animationend", e),
                        ()=>{
                            r.removeEventListener("animationstart", t),
                            r.removeEventListener("animationcancel", e),
                            r.removeEventListener("animationend", e)
                        }
                    }
                    u("ANIMATION_END")
                }
                , [r, u]),
                {
                    isPresent: ["mounted", "unmountSuspended"].includes(c),
                    ref: (0,
                    l.useCallback)(e=>{
                        e && (i.current = getComputedStyle(e)),
                        o(e)
                    }
                    , [])
                }
            }(t)
              , o = "function" == typeof n ? n({
                present: r.isPresent
            }) : l.Children.only(n)
              , i = d(r.ref, o.ref);
            return "function" == typeof n || r.isPresent ? (0,
            l.cloneElement)(o, {
                ref: i
            }) : null
        }
        );
        function eV(e) {
            return (null == e ? void 0 : e.animationName) || "none"
        }
        eB.displayName = "Presence";
        let eU = "dismissableLayer.update"
          , eG = (0,
        l.createContext)({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set
        })
          , eZ = (0,
        l.forwardRef)((e,t)=>{
            var n;
            let {disableOutsidePointerEvents: o=!1, onEscapeKeyDown: s, onPointerDownOutside: u, onFocusOutside: f, onInteractOutside: p, onDismiss: m, ...h} = e
              , g = (0,
            l.useContext)(eG)
              , [b,v] = (0,
            l.useState)(null)
              , y = null !== (n = null == b ? void 0 : b.ownerDocument) && void 0 !== n ? n : null == globalThis ? void 0 : globalThis.document
              , [,w] = (0,
            l.useState)({})
              , x = d(t, e=>v(e))
              , E = Array.from(g.layers)
              , [C] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1)
              , k = E.indexOf(C)
              , S = b ? E.indexOf(b) : -1
              , T = g.layersWithOutsidePointerEventsDisabled.size > 0
              , P = S >= k
              , O = function(e, t=null == globalThis ? void 0 : globalThis.document) {
                let n = c(e)
                  , r = (0,
                l.useRef)(!1)
                  , o = (0,
                l.useRef)(()=>{}
                );
                return (0,
                l.useEffect)(()=>{
                    let e = e=>{
                        if (e.target && !r.current) {
                            let r = {
                                originalEvent: e
                            };
                            function i() {
                                eq("dismissableLayer.pointerDownOutside", n, r, {
                                    discrete: !0
                                })
                            }
                            "touch" === e.pointerType ? (t.removeEventListener("click", o.current),
                            o.current = i,
                            t.addEventListener("click", o.current, {
                                once: !0
                            })) : i()
                        } else
                            t.removeEventListener("click", o.current);
                        r.current = !1
                    }
                      , i = window.setTimeout(()=>{
                        t.addEventListener("pointerdown", e)
                    }
                    , 0);
                    return ()=>{
                        window.clearTimeout(i),
                        t.removeEventListener("pointerdown", e),
                        t.removeEventListener("click", o.current)
                    }
                }
                , [t, n]),
                {
                    onPointerDownCapture: ()=>r.current = !0
                }
            }(e=>{
                let t = e.target
                  , n = [...g.branches].some(e=>e.contains(t));
                !P || n || (null == u || u(e),
                null == p || p(e),
                e.defaultPrevented || null == m || m())
            }
            , y)
              , R = function(e, t=null == globalThis ? void 0 : globalThis.document) {
                let n = c(e)
                  , r = (0,
                l.useRef)(!1);
                return (0,
                l.useEffect)(()=>{
                    let e = e=>{
                        e.target && !r.current && eq("dismissableLayer.focusOutside", n, {
                            originalEvent: e
                        }, {
                            discrete: !1
                        })
                    }
                    ;
                    return t.addEventListener("focusin", e),
                    ()=>t.removeEventListener("focusin", e)
                }
                , [t, n]),
                {
                    onFocusCapture: ()=>r.current = !0,
                    onBlurCapture: ()=>r.current = !1
                }
            }(e=>{
                let t = e.target;
                [...g.branches].some(e=>e.contains(t)) || (null == f || f(e),
                null == p || p(e),
                e.defaultPrevented || null == m || m())
            }
            , y);
            return !function(e, t=null == globalThis ? void 0 : globalThis.document) {
                let n = c(e);
                (0,
                l.useEffect)(()=>{
                    let e = e=>{
                        "Escape" === e.key && n(e)
                    }
                    ;
                    return t.addEventListener("keydown", e),
                    ()=>t.removeEventListener("keydown", e)
                }
                , [n, t])
            }(e=>{
                S !== g.layers.size - 1 || (null == s || s(e),
                !e.defaultPrevented && m && (e.preventDefault(),
                m()))
            }
            , y),
            (0,
            l.useEffect)(()=>{
                if (b)
                    return o && (0 === g.layersWithOutsidePointerEventsDisabled.size && (r = y.body.style.pointerEvents,
                    y.body.style.pointerEvents = "none"),
                    g.layersWithOutsidePointerEventsDisabled.add(b)),
                    g.layers.add(b),
                    eK(),
                    ()=>{
                        o && 1 === g.layersWithOutsidePointerEventsDisabled.size && (y.body.style.pointerEvents = r)
                    }
            }
            , [b, y, o, g]),
            (0,
            l.useEffect)(()=>()=>{
                b && (g.layers.delete(b),
                g.layersWithOutsidePointerEventsDisabled.delete(b),
                eK())
            }
            , [b, g]),
            (0,
            l.useEffect)(()=>{
                let e = ()=>w({});
                return document.addEventListener(eU, e),
                ()=>document.removeEventListener(eU, e)
            }
            , []),
            (0,
            l.createElement)(eS.div, i({}, h, {
                ref: x,
                style: {
                    pointerEvents: T ? P ? "auto" : "none" : void 0,
                    ...e.style
                },
                onFocusCapture: a(e.onFocusCapture, R.onFocusCapture),
                onBlurCapture: a(e.onBlurCapture, R.onBlurCapture),
                onPointerDownCapture: a(e.onPointerDownCapture, O.onPointerDownCapture)
            }))
        }
        );
        function eK() {
            let e = new CustomEvent(eU);
            document.dispatchEvent(e)
        }
        function eq(e, t, n, {discrete: r}) {
            let o = n.originalEvent.target
              , i = new CustomEvent(e,{
                bubbles: !1,
                cancelable: !0,
                detail: n
            });
            (t && o.addEventListener(e, t, {
                once: !0
            }),
            r) ? o && (0,
            em.flushSync)(()=>o.dispatchEvent(i)) : o.dispatchEvent(i)
        }
        let eY = "HoverCard"
          , [eJ,eX] = s(eY, [eL])
          , eQ = eL()
          , [e0,e1] = eJ(eY)
          , e2 = (0,
        l.forwardRef)((e,t)=>{
            let {__scopeHoverCard: n, ...r} = e
              , o = e1("HoverCardTrigger", n)
              , s = eQ(n);
            return (0,
            l.createElement)(ez, i({
                asChild: !0
            }, s), (0,
            l.createElement)(eS.a, i({
                "data-state": o.open ? "open" : "closed"
            }, r, {
                ref: t,
                onPointerEnter: a(e.onPointerEnter, e5(o.onOpen)),
                onPointerLeave: a(e.onPointerLeave, e5(o.onClose)),
                onFocus: a(e.onFocus, o.onOpen),
                onBlur: a(e.onBlur, o.onClose),
                onTouchStart: a(e.onTouchStart, e=>e.preventDefault())
            })))
        }
        )
          , [e4,e9] = eJ("HoverCardPortal", {
            forceMount: void 0
        })
          , e6 = "HoverCardContent"
          , e3 = (0,
        l.forwardRef)((e,t)=>{
            let n = e9(e6, e.__scopeHoverCard)
              , {forceMount: r=n.forceMount, ...o} = e
              , s = e1(e6, e.__scopeHoverCard);
            return (0,
            l.createElement)(eB, {
                present: r || s.open
            }, (0,
            l.createElement)(e8, i({
                "data-state": s.open ? "open" : "closed"
            }, o, {
                onPointerEnter: a(e.onPointerEnter, e5(s.onOpen)),
                onPointerLeave: a(e.onPointerLeave, e5(s.onClose)),
                ref: t
            })))
        }
        )
          , e8 = (0,
        l.forwardRef)((e,t)=>{
            let {__scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: s, onFocusOutside: c, onInteractOutside: u, ...f} = e
              , p = e1(e6, n)
              , m = eQ(n)
              , h = (0,
            l.useRef)(null)
              , g = d(t, h)
              , [b,v] = (0,
            l.useState)(!1);
            return (0,
            l.useEffect)(()=>{
                if (b) {
                    let e = document.body;
                    return o = e.style.userSelect || e.style.webkitUserSelect,
                    e.style.userSelect = "none",
                    e.style.webkitUserSelect = "none",
                    ()=>{
                        e.style.userSelect = o,
                        e.style.webkitUserSelect = o
                    }
                }
            }
            , [b]),
            (0,
            l.useEffect)(()=>{
                if (h.current) {
                    let e = ()=>{
                        v(!1),
                        p.isPointerDownOnContentRef.current = !1,
                        setTimeout(()=>{
                            var e;
                            (null === (e = document.getSelection()) || void 0 === e ? void 0 : e.toString()) !== "" && (p.hasSelectionRef.current = !0)
                        }
                        )
                    }
                    ;
                    return document.addEventListener("pointerup", e),
                    ()=>{
                        document.removeEventListener("pointerup", e),
                        p.hasSelectionRef.current = !1,
                        p.isPointerDownOnContentRef.current = !1
                    }
                }
            }
            , [p.isPointerDownOnContentRef, p.hasSelectionRef]),
            (0,
            l.useEffect)(()=>{
                h.current && (function(e) {
                    let t = []
                      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e=>e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                    });
                    for (; n.nextNode(); )
                        t.push(n.currentNode);
                    return t
                }
                )(h.current).forEach(e=>e.setAttribute("tabindex", "-1"))
            }
            ),
            (0,
            l.createElement)(eZ, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onInteractOutside: u,
                onEscapeKeyDown: r,
                onPointerDownOutside: s,
                onFocusOutside: a(c, e=>{
                    e.preventDefault()
                }
                ),
                onDismiss: p.onDismiss
            }, (0,
            l.createElement)(ej, i({}, m, f, {
                onPointerDown: a(f.onPointerDown, e=>{
                    e.currentTarget.contains(e.target) && v(!0),
                    p.hasSelectionRef.current = !1,
                    p.isPointerDownOnContentRef.current = !0
                }
                ),
                ref: g,
                style: {
                    ...f.style,
                    userSelect: b ? "text" : void 0,
                    WebkitUserSelect: b ? "text" : void 0,
                    "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
                }
            })))
        }
        );
        function e5(e) {
            return t=>"touch" === t.pointerType ? void 0 : e()
        }
        let e7 = e=>{
            let {__scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: i, openDelay: a=700, closeDelay: s=300} = e
              , u = eQ(t)
              , d = (0,
            l.useRef)(0)
              , f = (0,
            l.useRef)(0)
              , p = (0,
            l.useRef)(!1)
              , m = (0,
            l.useRef)(!1)
              , [h=!1,g] = function({prop: e, defaultProp: t, onChange: n=()=>{}
            }) {
                let[r,o] = function({defaultProp: e, onChange: t}) {
                    let n = (0,
                    l.useState)(e)
                      , [r] = n
                      , o = (0,
                    l.useRef)(r)
                      , i = c(t);
                    return (0,
                    l.useEffect)(()=>{
                        o.current !== r && (i(r),
                        o.current = r)
                    }
                    , [r, o, i]),
                    n
                }({
                    defaultProp: t,
                    onChange: n
                })
                  , i = void 0 !== e
                  , a = i ? e : r
                  , s = c(n);
                return [a, (0,
                l.useCallback)(t=>{
                    if (i) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && s(n)
                    } else
                        o(t)
                }
                , [i, e, o, s])]
            }({
                prop: r,
                defaultProp: o,
                onChange: i
            })
              , b = (0,
            l.useCallback)(()=>{
                clearTimeout(f.current),
                d.current = window.setTimeout(()=>g(!0), a)
            }
            , [a, g])
              , v = (0,
            l.useCallback)(()=>{
                clearTimeout(d.current),
                p.current || m.current || (f.current = window.setTimeout(()=>g(!1), s))
            }
            , [s, g])
              , y = (0,
            l.useCallback)(()=>g(!1), [g]);
            return (0,
            l.useEffect)(()=>()=>{
                clearTimeout(d.current),
                clearTimeout(f.current)
            }
            , []),
            (0,
            l.createElement)(e0, {
                scope: t,
                open: h,
                onOpenChange: g,
                onOpen: b,
                onClose: v,
                onDismiss: y,
                hasSelectionRef: p,
                isPointerDownOnContentRef: m
            }, (0,
            l.createElement)(e$, u, n))
        }
          , te = e2
          , tt = e3
    },
    4839: function(e, t, n) {
        n.d(t, {
            W: function() {
                return r
            }
        });
        function r() {
            for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
                (e = arguments[n]) && (t = function e(t) {
                    var n, r, o = "";
                    if ("string" == typeof t || "number" == typeof t)
                        o += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var i = t.length;
                            for (n = 0; n < i; n++)
                                t[n] && (r = e(t[n])) && (o && (o += " "),
                                o += r)
                        } else
                            for (r in t)
                                t[r] && (o && (o += " "),
                                o += r)
                    }
                    return o
                }(e)) && (r && (r += " "),
                r += t);
            return r
        }
    },
    9512: function(e, t, n) {
        n.d(t, {
            F: function() {
                return c
            },
            f: function() {
                return u
            }
        });
        var r = n(2265)
          , o = ["light", "dark"]
          , i = "(prefers-color-scheme: dark)"
          , l = "undefined" == typeof window
          , a = r.createContext(void 0)
          , s = {
            setTheme: e=>{}
            ,
            themes: []
        }
          , c = ()=>{
            var e;
            return null != (e = r.useContext(a)) ? e : s
        }
          , u = e=>r.useContext(a) ? e.children : r.createElement(f, {
            ...e
        })
          , d = ["light", "dark"]
          , f = e=>{
            let {forcedTheme: t, disableTransitionOnChange: n=!1, enableSystem: l=!0, enableColorScheme: s=!0, storageKey: c="theme", themes: u=d, defaultTheme: f=l ? "system" : "light", attribute: b="data-theme", value: v, children: y, nonce: w} = e
              , [x,E] = r.useState(()=>m(c, f))
              , [C,k] = r.useState(()=>m(c))
              , S = v ? Object.values(v) : u
              , T = r.useCallback(e=>{
                let t = e;
                if (!t)
                    return;
                "system" === e && l && (t = g());
                let r = v ? v[t] : t
                  , i = n ? h() : null
                  , a = document.documentElement;
                if ("class" === b ? (a.classList.remove(...S),
                r && a.classList.add(r)) : r ? a.setAttribute(b, r) : a.removeAttribute(b),
                s) {
                    let e = o.includes(f) ? f : null
                      , n = o.includes(t) ? t : e;
                    a.style.colorScheme = n
                }
                null == i || i()
            }
            , [])
              , P = r.useCallback(e=>{
                let t = "function" == typeof e ? e(e) : e;
                E(t);
                try {
                    localStorage.setItem(c, t)
                } catch (e) {}
            }
            , [t])
              , O = r.useCallback(e=>{
                k(g(e)),
                "system" === x && l && !t && T("system")
            }
            , [x, t]);
            r.useEffect(()=>{
                let e = window.matchMedia(i);
                return e.addListener(O),
                O(e),
                ()=>e.removeListener(O)
            }
            , [O]),
            r.useEffect(()=>{
                let e = e=>{
                    e.key === c && P(e.newValue || f)
                }
                ;
                return window.addEventListener("storage", e),
                ()=>window.removeEventListener("storage", e)
            }
            , [P]),
            r.useEffect(()=>{
                T(null != t ? t : x)
            }
            , [t, x]);
            let R = r.useMemo(()=>({
                theme: x,
                setTheme: P,
                forcedTheme: t,
                resolvedTheme: "system" === x ? C : x,
                themes: l ? [...u, "system"] : u,
                systemTheme: l ? C : void 0
            }), [x, P, t, C, l, u]);
            return r.createElement(a.Provider, {
                value: R
            }, r.createElement(p, {
                forcedTheme: t,
                disableTransitionOnChange: n,
                enableSystem: l,
                enableColorScheme: s,
                storageKey: c,
                themes: u,
                defaultTheme: f,
                attribute: b,
                value: v,
                children: y,
                attrs: S,
                nonce: w
            }), y)
        }
          , p = r.memo(e=>{
            let {forcedTheme: t, storageKey: n, attribute: l, enableSystem: a, enableColorScheme: s, defaultTheme: c, value: u, attrs: d, nonce: f} = e
              , p = "system" === c
              , m = "class" === l ? "var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e, "'")).join(","), ")"), ";") : "var d=document.documentElement,n='".concat(l, "',s='setAttribute';")
              , h = s ? (o.includes(c) ? c : null) ? "if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c, "'") : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
              , g = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2]
                  , r = u ? u[e] : e
                  , i = t ? e + "|| ''" : "'".concat(r, "'")
                  , a = "";
                return s && n && !t && o.includes(e) && (a += "d.style.colorScheme = '".concat(e, "';")),
                "class" === l ? t || r ? a += "c.add(".concat(i, ")") : a += "null" : r && (a += "d[s](n,".concat(i, ")")),
                a
            }
              , b = t ? "!function(){".concat(m).concat(g(t), "}()") : a ? "!function(){try{".concat(m, "var e=localStorage.getItem('").concat(n, "');if('system'===e||(!e&&").concat(p, ")){var t='").concat(i, "',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(g("dark"), "}else{").concat(g("light"), "}}else if(e){").concat(u ? "var x=".concat(JSON.stringify(u), ";") : "").concat(g(u ? "x[e]" : "e", !0), "}").concat(p ? "" : "else{" + g(c, !1, !1) + "}").concat(h, "}catch(e){}}()") : "!function(){try{".concat(m, "var e=localStorage.getItem('").concat(n, "');if(e){").concat(u ? "var x=".concat(JSON.stringify(u), ";") : "").concat(g(u ? "x[e]" : "e", !0), "}else{").concat(g(c, !1, !1), ";}").concat(h, "}catch(t){}}();");
            return r.createElement("script", {
                nonce: f,
                dangerouslySetInnerHTML: {
                    __html: b
                }
            })
        }
        )
          , m = (e,t)=>{
            let n;
            if (!l) {
                try {
                    n = localStorage.getItem(e) || void 0
                } catch (e) {}
                return n || t
            }
        }
          , h = ()=>{
            let e = document.createElement("style");
            return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),
            document.head.appendChild(e),
            ()=>{
                window.getComputedStyle(document.body),
                setTimeout(()=>{
                    document.head.removeChild(e)
                }
                , 1)
            }
        }
          , g = e=>(e || (e = window.matchMedia(i)),
        e.matches ? "dark" : "light")
    },
    6164: function(e, t, n) {
        n.d(t, {
            m6: function() {
                return _
            }
        });
        let r = /^\[(.+)\]$/;
        function o(e, t) {
            let n = e;
            return t.split("-").forEach(e=>{
                n.nextPart.has(e) || n.nextPart.set(e, {
                    nextPart: new Map,
                    validators: []
                }),
                n = n.nextPart.get(e)
            }
            ),
            n
        }
        let i = /\s+/;
        function l() {
            let e, t, n = 0, r = "";
            for (; n < arguments.length; )
                (e = arguments[n++]) && (t = function e(t) {
                    let n;
                    if ("string" == typeof t)
                        return t;
                    let r = "";
                    for (let o = 0; o < t.length; o++)
                        t[o] && (n = e(t[o])) && (r && (r += " "),
                        r += n);
                    return r
                }(e)) && (r && (r += " "),
                r += t);
            return r
        }
        function a(e) {
            let t = t=>t[e] || [];
            return t.isThemeGetter = !0,
            t
        }
        let s = /^\[(?:([a-z-]+):)?(.+)\]$/i
          , c = /^\d+\/\d+$/
          , u = new Set(["px", "full", "screen"])
          , d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
          , f = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
          , p = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
          , m = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
          , h = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
        function g(e) {
            return v(e) || u.has(e) || c.test(e)
        }
        function b(e) {
            return A(e, "length", N)
        }
        function v(e) {
            return !!e && !Number.isNaN(Number(e))
        }
        function y(e) {
            return A(e, "number", v)
        }
        function w(e) {
            return !!e && Number.isInteger(Number(e))
        }
        function x(e) {
            return e.endsWith("%") && v(e.slice(0, -1))
        }
        function E(e) {
            return s.test(e)
        }
        function C(e) {
            return d.test(e)
        }
        let k = new Set(["length", "size", "percentage"]);
        function S(e) {
            return A(e, k, z)
        }
        function T(e) {
            return A(e, "position", z)
        }
        let P = new Set(["image", "url"]);
        function O(e) {
            return A(e, P, M)
        }
        function R(e) {
            return A(e, "", D)
        }
        function L() {
            return !0
        }
        function A(e, t, n) {
            let r = s.exec(e);
            return !!r && (r[1] ? "string" == typeof t ? r[1] === t : t.has(r[1]) : n(r[2]))
        }
        function N(e) {
            return f.test(e) && !p.test(e)
        }
        function z() {
            return !1
        }
        function D(e) {
            return m.test(e)
        }
        function M(e) {
            return h.test(e)
        }
        let _ = function(e, ...t) {
            let n, a, s;
            let c = function(i) {
                var l;
                return a = (n = {
                    cache: function(e) {
                        if (e < 1)
                            return {
                                get: ()=>void 0,
                                set: ()=>{}
                            };
                        let t = 0
                          , n = new Map
                          , r = new Map;
                        function o(o, i) {
                            n.set(o, i),
                            ++t > e && (t = 0,
                            r = n,
                            n = new Map)
                        }
                        return {
                            get(e) {
                                let t = n.get(e);
                                return void 0 !== t ? t : void 0 !== (t = r.get(e)) ? (o(e, t),
                                t) : void 0
                            },
                            set(e, t) {
                                n.has(e) ? n.set(e, t) : o(e, t)
                            }
                        }
                    }((l = t.reduce((e,t)=>t(e), e())).cacheSize),
                    splitModifiers: function(e) {
                        let t = e.separator
                          , n = 1 === t.length
                          , r = t[0]
                          , o = t.length;
                        return function(e) {
                            let i;
                            let l = []
                              , a = 0
                              , s = 0;
                            for (let c = 0; c < e.length; c++) {
                                let u = e[c];
                                if (0 === a) {
                                    if (u === r && (n || e.slice(c, c + o) === t)) {
                                        l.push(e.slice(s, c)),
                                        s = c + o;
                                        continue
                                    }
                                    if ("/" === u) {
                                        i = c;
                                        continue
                                    }
                                }
                                "[" === u ? a++ : "]" === u && a--
                            }
                            let c = 0 === l.length ? e : e.substring(s)
                              , u = c.startsWith("!")
                              , d = u ? c.substring(1) : c;
                            return {
                                modifiers: l,
                                hasImportantModifier: u,
                                baseClassName: d,
                                maybePostfixModifierPosition: i && i > s ? i - s : void 0
                            }
                        }
                    }(l),
                    ...function(e) {
                        let t = function(e) {
                            var t;
                            let {theme: n, prefix: r} = e
                              , i = {
                                nextPart: new Map,
                                validators: []
                            };
                            return (t = Object.entries(e.classGroups),
                            r ? t.map(([e,t])=>[e, t.map(e=>"string" == typeof e ? r + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e,t])=>[r + e, t])) : e)]) : t).forEach(([e,t])=>{
                                (function e(t, n, r, i) {
                                    t.forEach(t=>{
                                        if ("string" == typeof t) {
                                            ("" === t ? n : o(n, t)).classGroupId = r;
                                            return
                                        }
                                        if ("function" == typeof t) {
                                            if (t.isThemeGetter) {
                                                e(t(i), n, r, i);
                                                return
                                            }
                                            n.validators.push({
                                                validator: t,
                                                classGroupId: r
                                            });
                                            return
                                        }
                                        Object.entries(t).forEach(([t,l])=>{
                                            e(l, o(n, t), r, i)
                                        }
                                        )
                                    }
                                    )
                                }
                                )(t, i, e, n)
                            }
                            ),
                            i
                        }(e)
                          , {conflictingClassGroups: n, conflictingClassGroupModifiers: i} = e;
                        return {
                            getClassGroupId: function(e) {
                                let n = e.split("-");
                                return "" === n[0] && 1 !== n.length && n.shift(),
                                function e(t, n) {
                                    if (0 === t.length)
                                        return n.classGroupId;
                                    let r = t[0]
                                      , o = n.nextPart.get(r)
                                      , i = o ? e(t.slice(1), o) : void 0;
                                    if (i)
                                        return i;
                                    if (0 === n.validators.length)
                                        return;
                                    let l = t.join("-");
                                    return n.validators.find(({validator: e})=>e(l))?.classGroupId
                                }(n, t) || function(e) {
                                    if (r.test(e)) {
                                        let t = r.exec(e)[1]
                                          , n = t?.substring(0, t.indexOf(":"));
                                        if (n)
                                            return "arbitrary.." + n
                                    }
                                }(e)
                            },
                            getConflictingClassGroupIds: function(e, t) {
                                let r = n[e] || [];
                                return t && i[e] ? [...r, ...i[e]] : r
                            }
                        }
                    }(l)
                }).cache.get,
                s = n.cache.set,
                c = u,
                u(i)
            };
            function u(e) {
                let t = a(e);
                if (t)
                    return t;
                let r = function(e, t) {
                    let {splitModifiers: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
                      , l = new Set;
                    return e.trim().split(i).map(e=>{
                        let {modifiers: t, hasImportantModifier: o, baseClassName: i, maybePostfixModifierPosition: l} = n(e)
                          , a = r(l ? i.substring(0, l) : i)
                          , s = !!l;
                        if (!a) {
                            if (!l || !(a = r(i)))
                                return {
                                    isTailwindClass: !1,
                                    originalClassName: e
                                };
                            s = !1
                        }
                        let c = (function(e) {
                            if (e.length <= 1)
                                return e;
                            let t = []
                              , n = [];
                            return e.forEach(e=>{
                                "[" === e[0] ? (t.push(...n.sort(), e),
                                n = []) : n.push(e)
                            }
                            ),
                            t.push(...n.sort()),
                            t
                        }
                        )(t).join(":");
                        return {
                            isTailwindClass: !0,
                            modifierId: o ? c + "!" : c,
                            classGroupId: a,
                            originalClassName: e,
                            hasPostfixModifier: s
                        }
                    }
                    ).reverse().filter(e=>{
                        if (!e.isTailwindClass)
                            return !0;
                        let {modifierId: t, classGroupId: n, hasPostfixModifier: r} = e
                          , i = t + n;
                        return !l.has(i) && (l.add(i),
                        o(n, r).forEach(e=>l.add(t + e)),
                        !0)
                    }
                    ).reverse().map(e=>e.originalClassName).join(" ")
                }(e, n);
                return s(e, r),
                r
            }
            return function() {
                return c(l.apply(null, arguments))
            }
        }(function() {
            let e = a("colors")
              , t = a("spacing")
              , n = a("blur")
              , r = a("brightness")
              , o = a("borderColor")
              , i = a("borderRadius")
              , l = a("borderSpacing")
              , s = a("borderWidth")
              , c = a("contrast")
              , u = a("grayscale")
              , d = a("hueRotate")
              , f = a("invert")
              , p = a("gap")
              , m = a("gradientColorStops")
              , h = a("gradientColorStopPositions")
              , k = a("inset")
              , P = a("margin")
              , A = a("opacity")
              , N = a("padding")
              , z = a("saturate")
              , D = a("scale")
              , M = a("sepia")
              , _ = a("skew")
              , j = a("space")
              , W = a("translate")
              , H = ()=>["auto", "contain", "none"]
              , I = ()=>["auto", "hidden", "clip", "visible", "scroll"]
              , F = ()=>["auto", E, t]
              , $ = ()=>[E, t]
              , B = ()=>["", g, b]
              , V = ()=>["auto", v, E]
              , U = ()=>["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
              , G = ()=>["solid", "dashed", "dotted", "double", "none"]
              , Z = ()=>["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
              , K = ()=>["start", "end", "center", "between", "around", "evenly", "stretch"]
              , q = ()=>["", "0", E]
              , Y = ()=>["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
              , J = ()=>[v, y]
              , X = ()=>[v, E];
            return {
                cacheSize: 500,
                separator: ":",
                theme: {
                    colors: [L],
                    spacing: [g, b],
                    blur: ["none", "", C, E],
                    brightness: J(),
                    borderColor: [e],
                    borderRadius: ["none", "", "full", C, E],
                    borderSpacing: $(),
                    borderWidth: B(),
                    contrast: J(),
                    grayscale: q(),
                    hueRotate: X(),
                    invert: q(),
                    gap: $(),
                    gradientColorStops: [e],
                    gradientColorStopPositions: [x, b],
                    inset: F(),
                    margin: F(),
                    opacity: J(),
                    padding: $(),
                    saturate: J(),
                    scale: J(),
                    sepia: q(),
                    skew: X(),
                    space: $(),
                    translate: $()
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", "video", E]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [C]
                    }],
                    "break-after": [{
                        "break-after": Y()
                    }],
                    "break-before": [{
                        "break-before": Y()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    float: [{
                        float: ["right", "left", "none", "start", "end"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none", "start", "end"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: [...U(), E]
                    }],
                    overflow: [{
                        overflow: I()
                    }],
                    "overflow-x": [{
                        "overflow-x": I()
                    }],
                    "overflow-y": [{
                        "overflow-y": I()
                    }],
                    overscroll: [{
                        overscroll: H()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": H()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": H()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: [k]
                    }],
                    "inset-x": [{
                        "inset-x": [k]
                    }],
                    "inset-y": [{
                        "inset-y": [k]
                    }],
                    start: [{
                        start: [k]
                    }],
                    end: [{
                        end: [k]
                    }],
                    top: [{
                        top: [k]
                    }],
                    right: [{
                        right: [k]
                    }],
                    bottom: [{
                        bottom: [k]
                    }],
                    left: [{
                        left: [k]
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: ["auto", w, E]
                    }],
                    basis: [{
                        basis: F()
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["wrap", "wrap-reverse", "nowrap"]
                    }],
                    flex: [{
                        flex: ["1", "auto", "initial", "none", E]
                    }],
                    grow: [{
                        grow: q()
                    }],
                    shrink: [{
                        shrink: q()
                    }],
                    order: [{
                        order: ["first", "last", "none", w, E]
                    }],
                    "grid-cols": [{
                        "grid-cols": [L]
                    }],
                    "col-start-end": [{
                        col: ["auto", {
                            span: ["full", w, E]
                        }, E]
                    }],
                    "col-start": [{
                        "col-start": V()
                    }],
                    "col-end": [{
                        "col-end": V()
                    }],
                    "grid-rows": [{
                        "grid-rows": [L]
                    }],
                    "row-start-end": [{
                        row: ["auto", {
                            span: [w, E]
                        }, E]
                    }],
                    "row-start": [{
                        "row-start": V()
                    }],
                    "row-end": [{
                        "row-end": V()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": ["auto", "min", "max", "fr", E]
                    }],
                    "auto-rows": [{
                        "auto-rows": ["auto", "min", "max", "fr", E]
                    }],
                    gap: [{
                        gap: [p]
                    }],
                    "gap-x": [{
                        "gap-x": [p]
                    }],
                    "gap-y": [{
                        "gap-y": [p]
                    }],
                    "justify-content": [{
                        justify: ["normal", ...K()]
                    }],
                    "justify-items": [{
                        "justify-items": ["start", "end", "center", "stretch"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    "align-content": [{
                        content: ["normal", ...K(), "baseline"]
                    }],
                    "align-items": [{
                        items: ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "align-self": [{
                        self: ["auto", "start", "end", "center", "stretch", "baseline"]
                    }],
                    "place-content": [{
                        "place-content": [...K(), "baseline"]
                    }],
                    "place-items": [{
                        "place-items": ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    p: [{
                        p: [N]
                    }],
                    px: [{
                        px: [N]
                    }],
                    py: [{
                        py: [N]
                    }],
                    ps: [{
                        ps: [N]
                    }],
                    pe: [{
                        pe: [N]
                    }],
                    pt: [{
                        pt: [N]
                    }],
                    pr: [{
                        pr: [N]
                    }],
                    pb: [{
                        pb: [N]
                    }],
                    pl: [{
                        pl: [N]
                    }],
                    m: [{
                        m: [P]
                    }],
                    mx: [{
                        mx: [P]
                    }],
                    my: [{
                        my: [P]
                    }],
                    ms: [{
                        ms: [P]
                    }],
                    me: [{
                        me: [P]
                    }],
                    mt: [{
                        mt: [P]
                    }],
                    mr: [{
                        mr: [P]
                    }],
                    mb: [{
                        mb: [P]
                    }],
                    ml: [{
                        ml: [P]
                    }],
                    "space-x": [{
                        "space-x": [j]
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": [j]
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    w: [{
                        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", E, t]
                    }],
                    "min-w": [{
                        "min-w": [E, t, "min", "max", "fit"]
                    }],
                    "max-w": [{
                        "max-w": [E, t, "none", "full", "min", "max", "fit", "prose", {
                            screen: [C]
                        }, C]
                    }],
                    h: [{
                        h: [E, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "min-h": [{
                        "min-h": [E, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "max-h": [{
                        "max-h": [E, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    size: [{
                        size: [E, t, "auto", "min", "max", "fit"]
                    }],
                    "font-size": [{
                        text: ["base", C, b]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", y]
                    }],
                    "font-family": [{
                        font: [L]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                    tracking: [{
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", E]
                    }],
                    "line-clamp": [{
                        "line-clamp": ["none", v, y]
                    }],
                    leading: [{
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", g, E]
                    }],
                    "list-image": [{
                        "list-image": ["none", E]
                    }],
                    "list-style-type": [{
                        list: ["none", "disc", "decimal", E]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "placeholder-color": [{
                        placeholder: [e]
                    }],
                    "placeholder-opacity": [{
                        "placeholder-opacity": [A]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "text-color": [{
                        text: [e]
                    }],
                    "text-opacity": [{
                        "text-opacity": [A]
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [...G(), "wavy"]
                    }],
                    "text-decoration-thickness": [{
                        decoration: ["auto", "from-font", g, b]
                    }],
                    "underline-offset": [{
                        "underline-offset": ["auto", g, E]
                    }],
                    "text-decoration-color": [{
                        decoration: [e]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    "text-wrap": [{
                        text: ["wrap", "nowrap", "balance", "pretty"]
                    }],
                    indent: [{
                        indent: $()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", E]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", E]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-opacity": [{
                        "bg-opacity": [A]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: [...U(), T]
                    }],
                    "bg-repeat": [{
                        bg: ["no-repeat", {
                            repeat: ["", "x", "y", "round", "space"]
                        }]
                    }],
                    "bg-size": [{
                        bg: ["auto", "cover", "contain", S]
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, O]
                    }],
                    "bg-color": [{
                        bg: [e]
                    }],
                    "gradient-from-pos": [{
                        from: [h]
                    }],
                    "gradient-via-pos": [{
                        via: [h]
                    }],
                    "gradient-to-pos": [{
                        to: [h]
                    }],
                    "gradient-from": [{
                        from: [m]
                    }],
                    "gradient-via": [{
                        via: [m]
                    }],
                    "gradient-to": [{
                        to: [m]
                    }],
                    rounded: [{
                        rounded: [i]
                    }],
                    "rounded-s": [{
                        "rounded-s": [i]
                    }],
                    "rounded-e": [{
                        "rounded-e": [i]
                    }],
                    "rounded-t": [{
                        "rounded-t": [i]
                    }],
                    "rounded-r": [{
                        "rounded-r": [i]
                    }],
                    "rounded-b": [{
                        "rounded-b": [i]
                    }],
                    "rounded-l": [{
                        "rounded-l": [i]
                    }],
                    "rounded-ss": [{
                        "rounded-ss": [i]
                    }],
                    "rounded-se": [{
                        "rounded-se": [i]
                    }],
                    "rounded-ee": [{
                        "rounded-ee": [i]
                    }],
                    "rounded-es": [{
                        "rounded-es": [i]
                    }],
                    "rounded-tl": [{
                        "rounded-tl": [i]
                    }],
                    "rounded-tr": [{
                        "rounded-tr": [i]
                    }],
                    "rounded-br": [{
                        "rounded-br": [i]
                    }],
                    "rounded-bl": [{
                        "rounded-bl": [i]
                    }],
                    "border-w": [{
                        border: [s]
                    }],
                    "border-w-x": [{
                        "border-x": [s]
                    }],
                    "border-w-y": [{
                        "border-y": [s]
                    }],
                    "border-w-s": [{
                        "border-s": [s]
                    }],
                    "border-w-e": [{
                        "border-e": [s]
                    }],
                    "border-w-t": [{
                        "border-t": [s]
                    }],
                    "border-w-r": [{
                        "border-r": [s]
                    }],
                    "border-w-b": [{
                        "border-b": [s]
                    }],
                    "border-w-l": [{
                        "border-l": [s]
                    }],
                    "border-opacity": [{
                        "border-opacity": [A]
                    }],
                    "border-style": [{
                        border: [...G(), "hidden"]
                    }],
                    "divide-x": [{
                        "divide-x": [s]
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": [s]
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "divide-opacity": [{
                        "divide-opacity": [A]
                    }],
                    "divide-style": [{
                        divide: G()
                    }],
                    "border-color": [{
                        border: [o]
                    }],
                    "border-color-x": [{
                        "border-x": [o]
                    }],
                    "border-color-y": [{
                        "border-y": [o]
                    }],
                    "border-color-t": [{
                        "border-t": [o]
                    }],
                    "border-color-r": [{
                        "border-r": [o]
                    }],
                    "border-color-b": [{
                        "border-b": [o]
                    }],
                    "border-color-l": [{
                        "border-l": [o]
                    }],
                    "divide-color": [{
                        divide: [o]
                    }],
                    "outline-style": [{
                        outline: ["", ...G()]
                    }],
                    "outline-offset": [{
                        "outline-offset": [g, E]
                    }],
                    "outline-w": [{
                        outline: [g, b]
                    }],
                    "outline-color": [{
                        outline: [e]
                    }],
                    "ring-w": [{
                        ring: B()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: [e]
                    }],
                    "ring-opacity": [{
                        "ring-opacity": [A]
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [g, b]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": [e]
                    }],
                    shadow: [{
                        shadow: ["", "inner", "none", C, R]
                    }],
                    "shadow-color": [{
                        shadow: [L]
                    }],
                    opacity: [{
                        opacity: [A]
                    }],
                    "mix-blend": [{
                        "mix-blend": [...Z(), "plus-lighter", "plus-darker"]
                    }],
                    "bg-blend": [{
                        "bg-blend": Z()
                    }],
                    filter: [{
                        filter: ["", "none"]
                    }],
                    blur: [{
                        blur: [n]
                    }],
                    brightness: [{
                        brightness: [r]
                    }],
                    contrast: [{
                        contrast: [c]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", C, E]
                    }],
                    grayscale: [{
                        grayscale: [u]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [d]
                    }],
                    invert: [{
                        invert: [f]
                    }],
                    saturate: [{
                        saturate: [z]
                    }],
                    sepia: [{
                        sepia: [M]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none"]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": [n]
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [r]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [c]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": [u]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [d]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": [f]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [A]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [z]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": [M]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": [l]
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": [l]
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": [l]
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", E]
                    }],
                    duration: [{
                        duration: X()
                    }],
                    ease: [{
                        ease: ["linear", "in", "out", "in-out", E]
                    }],
                    delay: [{
                        delay: X()
                    }],
                    animate: [{
                        animate: ["none", "spin", "ping", "pulse", "bounce", E]
                    }],
                    transform: [{
                        transform: ["", "gpu", "none"]
                    }],
                    scale: [{
                        scale: [D]
                    }],
                    "scale-x": [{
                        "scale-x": [D]
                    }],
                    "scale-y": [{
                        "scale-y": [D]
                    }],
                    rotate: [{
                        rotate: [w, E]
                    }],
                    "translate-x": [{
                        "translate-x": [W]
                    }],
                    "translate-y": [{
                        "translate-y": [W]
                    }],
                    "skew-x": [{
                        "skew-x": [_]
                    }],
                    "skew-y": [{
                        "skew-y": [_]
                    }],
                    "transform-origin": [{
                        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", E]
                    }],
                    accent: [{
                        accent: ["auto", e]
                    }],
                    appearance: [{
                        appearance: ["none", "auto"]
                    }],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", E]
                    }],
                    "caret-color": [{
                        caret: [e]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["none", "auto"]
                    }],
                    resize: [{
                        resize: ["none", "y", "x", ""]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": $()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": $()
                    }],
                    "scroll-my": [{
                        "scroll-my": $()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": $()
                    }],
                    "scroll-me": [{
                        "scroll-me": $()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": $()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": $()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": $()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": $()
                    }],
                    "scroll-p": [{
                        "scroll-p": $()
                    }],
                    "scroll-px": [{
                        "scroll-px": $()
                    }],
                    "scroll-py": [{
                        "scroll-py": $()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": $()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": $()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": $()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": $()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": $()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": $()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "manipulation"]
                    }],
                    "touch-x": [{
                        "touch-pan": ["x", "left", "right"]
                    }],
                    "touch-y": [{
                        "touch-pan": ["y", "up", "down"]
                    }],
                    "touch-pz": ["touch-pinch-zoom"],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", E]
                    }],
                    fill: [{
                        fill: [e, "none"]
                    }],
                    "stroke-w": [{
                        stroke: [g, b, y]
                    }],
                    stroke: [{
                        stroke: [e, "none"]
                    }],
                    sr: ["sr-only", "not-sr-only"],
                    "forced-color-adjust": [{
                        "forced-color-adjust": ["auto", "none"]
                    }]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    size: ["w", "h"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    "line-clamp": ["display", "overflow"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"],
                    touch: ["touch-x", "touch-y", "touch-pz"],
                    "touch-x": ["touch"],
                    "touch-y": ["touch"],
                    "touch-pz": ["touch"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                }
            }
        })
    }
}]);
