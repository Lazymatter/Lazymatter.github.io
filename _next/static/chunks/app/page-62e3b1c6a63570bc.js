(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    7526: function(e, t, a) {
        Promise.resolve().then(a.bind(a, 5386)),
        Promise.resolve().then(a.bind(a, 1581))
    },
    5386: function(e, t, a) {
        "use strict";
        a.d(t, {
            ModeToggle: function() {
                return i
            }
        });
        var r = a(7437);
        a(2265);
        var n = a(2699)
          , o = a(8296)
          , s = a(9512);
        function i() {
            let {theme: e, setTheme: t} = (0,
            s.F)();
            return (0,
            r.jsxs)("button", {
                onClick: ()=>{
                    t("light" === e ? "dark" : "light")
                }
                ,
                className: "flex items-center gap-2",
                children: [(0,
                r.jsx)(n.Z, {
                    className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                }), (0,
                r.jsx)(o.Z, {
                    className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                })]
            })
        }
    },
    1581: function(e, t, a) {
        "use strict";
        a.d(t, {
            HoverCard: function() {
                return d
            },
            HoverCardContent: function() {
                return u
            },
            HoverCardTrigger: function() {
                return l
            }
        });
        var r = a(7437)
          , n = a(2265)
          , o = a(1891)
          , s = a(4839)
          , i = a(6164);
        let d = o.fC
          , l = o.xz
          , u = n.forwardRef((e,t)=>{
            let {className: a, align: n="center", sideOffset: d=4, ...l} = e;
            return (0,
            r.jsx)(o.VY, {
                ref: t,
                align: n,
                sideOffset: d,
                className: function() {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                        t[a] = arguments[a];
                    return (0,
                    i.m6)((0,
                    s.W)(t))
                }("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a),
                ...l
            })
        }
        );
        u.displayName = o.VY.displayName
    }
}, function(e) {
    e.O(0, [891, 971, 23, 744], function() {
        return e(e.s = 7526)
    }),
    _N_E = e.O()
}
]);
