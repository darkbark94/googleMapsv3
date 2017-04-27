google.maps.__gjsload__('map', function (_) {
    var Ax = function (a, b, c, d, e, f, g) {
            var h = new _.hu;
            _.iu(h, a, b);
            null != c && _.lu(h, c, 0, d);
            g && g.forEach(function (a) {
                return _.nu(h, a, c)
            });
            e && _.v(e, function (a) {
                _.tj(_.js(_.dt(h.b)), a)
            });
            f && _.ou(h, f);
            return h.b
        }, Bx = function (a, b, c, d, e, f, g, h, l, n, q, r, u, C) {
            _.Pg.call(this);
            this.B = a;
            this.l = b;
            this.projection = c;
            this.maxZoom = d;
            this.tileSize = new _.J(256, 256);
            this.name = e;
            this.alt = f;
            this.G = g;
            this.heading = C;
            this.F = _.kb(C);
            this.Jc = h;
            this.__gmsd = l;
            this.pa = n;
            this.f = null;
            this.D = q;
            this.m = r;
            this.C = u;
            this.rd = !0;
            this.j = _.Nd({})
        },
        Cx = function (a, b, c, d, e, f, g, h, l) {
            var n = [];
            if (e) {
                var q = new _.$k;
                q.data[0] = e.type;
                if (e.params)for (var r in e.params) {
                    var u = _.al(q);
                    _.Hk(u, r);
                    var C = e.params[r];
                    C && (u.data[1] = C)
                }
                n.push(q)
            }
            e = new _.$k;
            e.data[0] = 37;
            _.Hk(_.al(e), "smartmaps");
            n.push(e);
            return {ua: Ax(a, b, c, d, n, f, l), wb: g, scale: h}
        }, Dx = function (a) {
            this.data = a || []
        }, Ex = function (a, b, c) {
            _.on.call(this);
            this.D = null != c ? (0, _.p)(a, c) : a;
            this.m = b;
            this.l = (0, _.p)(this.G, this);
            this.f = this.b = null;
            this.j = []
        }, Fx = function (a, b, c, d, e) {
            Bx.call(this, a.B, a.l, a.projection,
                a.maxZoom, a.name, a.alt, a.G, a.Jc, a.__gmsd, a.pa, a.D, a.m, a.C, a.heading);
            this.l && this.j.set(Cx(this.m, this.C, this.pa, this.D, this.__gmsd, b, c, d, e))
        }, Gx = function (a) {
            var b = Math.round(1E7 * a);
            return 0 > a ? b + 4294967296 : b
        }, Hx = function (a, b) {
            a = _.ie(new _.sj(a.f.data[7]), 0).slice();
            return _.Mk(a, function (a) {
                return a + "deg=" + b + "&"
            })
        }, Ix = function (a, b) {
            return _.Ck(a.get("projection"), b, a.get("zoom"), a.get("offset"), a.get("center"))
        }, Jx = function (a, b) {
            for (var c = a.length, d = _.Ha(a) ? a.split("") : a, e = 0; e < c; e++)if (e in d && !b.call(void 0,
                    d[e], e, a))return !1;
            return !0
        }, Kx = function (a, b, c, d) {
            d = void 0 === d ? {} : d;
            this.W = a;
            this.f = b;
            this.b = c.slice(0);
            this.j = d.fb || _.Da
        }, Lx = function (a) {
            var b = this;
            this.tileSize = a[0].tileSize;
            this.Oa = a[0].Oa;
            this.Lb = a[0].Lb;
            this.b = a;
            this.fc = a[0].fc;
            Jx(a, function (a) {
                var c = a.tileSize, e = b.tileSize;
                return c.Yb == e.Yb && c.Zb == e.Zb && a.Oa == b.Oa
            })
        }, Mx = function (a) {
            switch (a.pa) {
                case "roadmap":
                    return "Otm";
                case "satellite":
                    return "Otk";
                case "hybrid":
                    return "Oth";
                case "terrain":
                    return "Otr"
            }
            return a instanceof _.Qg ? "Ots" : "Oto"
        },
        Nx = function (a, b) {
            if (!a)return null;
            var c = !0, d = a.tileSize, e = a.Oa;
            _.v(b, function (a) {
                if (!a)return null;
                c = c && d.Yb == a.tileSize.width && d.Zb == a.tileSize.height && e == a.rd
            });
            if (!c)return null;
            if (0 == b.length)return a;
            var f = [];
            _.v(b, function (a) {
                if (!a)return null;
                f.push(a instanceof _.Pg ? a.b() : new _.Fu(a))
            });
            return new Lx([a].concat(f))
        }, Qx = function (a, b) {
            var c = null, d = null, e = null;
            return function (f, g) {
                if (d == f && e == g)return c;
                d = f;
                e = g;
                _.v(f, function (b) {
                    b && a(Mx(b))
                });
                c = null;
                g instanceof _.Pg ? c = g.b() : g && (c = new _.Fu(g));
                (f = Nx(c, f)) ? (c = f, b && Ox(b)) : b && Px(b);
                return c
            }
        }, Tx = function (a, b) {
            this.j = a;
            this.f = b;
            this.P = [_.y.bind(b, "insert_at", this, this.l), _.y.bind(b, "remove_at", this, this.m), _.y.bind(b, "set_at", this, this.B)];
            this.b = [];
            var c = this;
            this.f.forEach(function (a) {
                a = Rx(c, a);
                c.b.push(a)
            });
            Sx(this)
        }, Sx = function (a) {
            _.v(a.b, function (a, c) {
                a.set("zIndex", c)
            })
        }, Rx = function (a, b) {
            var c = new _.Iu(a.j, null);
            c.bindTo("size", a);
            c.bindTo("zoom", a);
            c.bindTo("offset", a);
            c.bindTo("projectionBounds", a);
            _.Lu(c, b);
            c.listener = b && _.y.forward(c,
                    "tilesloaded", b);
            return c
        }, Ux = function (a) {
            a.release();
            a.listener && (_.y.removeListener(a.listener), delete a.listener)
        }, Vx = function (a, b) {
            this.j = a;
            this.f = b;
            _.y.bind(this, "tilesloaded", this, this.l);
            this.b = null
        }, Ox = function (a) {
            a.b && (a.b.la(), a.b.unbindAll(), a.b = null)
        }, Px = function (a) {
            a.b || (a.b = new Tx(a.j, a.f), a.b.bindTo("size", a), a.b.bindTo("zoom", a), a.b.bindTo("offset", a), a.b.bindTo("projectionBounds", a))
        }, Wx = function (a, b) {
            for (var c = 0, d = a.f, e = a.b, f = 0, g; g = b[f++];)if (a.intersects(g)) {
                var h = g.f, l = g.b;
                if (_.Fj(g,
                        a))return 1;
                g = e.contains(l.b) && l.contains(e.b) && !_.gd(e, l) ? _.hd(l.b, e.f) + _.hd(e.b, l.f) : _.hd(e.contains(l.b) ? l.b : e.b, e.contains(l.f) ? l.f : e.f);
                c += g * (Math.min(d.b, h.b) - Math.max(d.f, h.f))
            }
            return c /= _.jd(d) * _.dd(e)
        }, Yx = function (a, b, c, d, e, f) {
            this.W = a.W;
            this.b = a;
            this.j = _.Mk(b || [], function (a) {
                return a.replace(/&$/, "")
            });
            this.B = c;
            this.l = d;
            this.f = e;
            this.m = f || null;
            Xx(this)
        }, Xx = function (a) {
            for (var b = 2 == a.f || 4 == a.f ? a.f : 1, b = Math.min(1 << a.W.da, b), c = a.B && 4 != b, d = a.W.da, e = b; 1 < e; e /= 2)d--;
            if (e = a.l({
                    ca: a.W.ca, ba: a.W.ba,
                    da: a.W.da
                })) d = _.Bk(_.Bk(_.Bk(new _.vk(_.qu(a.j, e)), "x", e.ca), "y", e.ba), "z", d), 1 != b && _.Bk(d, "w", 256 / b), c && (b *= 2), 1 != b && _.Bk(d, "scale", b), a.b.setUrl(d.toString(), a.m)
        }, Zx = function (a, b) {
            var c = a.x, d = a.y;
            switch (b) {
                case 90:
                    a.x = d;
                    a.y = 256 - c;
                    break;
                case 180:
                    a.x = 256 - c;
                    a.y = 256 - d;
                    break;
                case 270:
                    a.x = 256 - d, a.y = c
            }
        }, dy = function (a) {
            if (!a)return "";
            var b = [];
            a = _.Nl(a);
            for (var c = a.next(); !c.done; c = a.next()) {
                var d = c.value, e = d.elementType, f = d.stylers, c = [], d = (d = d.featureType) && $x[d.toLowerCase()];
                (d = null != d ? d : null) && c.push("s.t:" +
                    d);
                (e = e && ay[e.toLowerCase()] || null) && c.push("s.e:" + e);
                if (f)for (f = _.Nl(f), d = f.next(); !d.done; d = f.next()) {
                    a:{
                        e = void 0;
                        d = d.value;
                        for (e in d) {
                            var g = d[e], h = e && by[e.toLowerCase()] || null;
                            if (h && (_.kb(g) || _.mb(g) || _.nb(g)) && g) {
                                "color" == e && cy.test(g) && (g = "#ff" + g.substr(1));
                                e = "p." + h + ":" + g;
                                break a
                            }
                        }
                        e = void 0
                    }
                    e && c.push(e)
                }
                (c = c.join("|")) && b.push(c)
            }
            b = b.join(",");
            return 1E3 >= b.length ? b : ""
        }, ey = function (a, b, c, d, e) {
            this.f = a;
            a = _.cu(this, "apistyle");
            var f = _.cu(this, "authUser"), g = _.cu(this, "baseMapType"), h = _.cu(this,
                "scale"), l = _.cu(this, "tilt");
            this.b = null;
            var n = (0, _.p)(this.mk, this);
            b = new _.pt([a, f, b, g, h, l], n);
            _.au(this, "tileMapType", b);
            this.l = _.Nd([]);
            a = (0, _.p)(this.qn, this, c);
            _.y.bind(c, "insert_at", this, a);
            _.y.bind(c, "remove_at", this, a);
            _.y.bind(c, "set_at", this, a);
            a();
            this.B = new _.pt([this.l, b], Qx(e, d))
        }, hy = function (a, b, c, d, e, f, g, h, l, n) {
            this.H = a;
            this.l = g;
            this.X = e;
            this.f = f;
            this.D = h;
            this.F = c;
            this.b = b;
            this.B = d;
            this.m = this.j = 0;
            _.y.T(this.b, "contextmenu", this, this.Xf);
            a = new _.Rv(this.b);
            _.y.bind(a, "mousewheel",
                this, this.me);
            a.bindTo("enabled", this, "scrollwheel");
            n = {Gl: _.Kl(_.hn, this.H), Ja: this.f.get("eventCapturer"), mc: this.f.get("panBlock"), mode: n};
            l = new _.Cu(this.b, !0, n, l);
            fy(this, l);
            gy(this, l);
            l.bindTo("draggable", this);
            l.bindTo("draggingCursor", this);
            l.bindTo("draggableCursor", this);
            _.y.forward(this.l, "forceredraw", this.H);
            _.y.forward(this.l, "tilesloaded", this.H)
        }, iy = function (a) {
            var b = a.get("zoom"), c;
            c = b;
            var d = a.get("zoomRange");
            d && (c = _.jv(d, c));
            b != c && a.set("zoom", c)
        }, fy = function (a, b) {
            _.y.bind(b, "click",
                a, a.Mi);
            _.y.bind(b, "dblclick", a, a.em);
            _.y.bind(b, "mousedown", a, a.Ni);
            _.v(["mouseover", "mousemove", "mouseout", "mousedown", "mouseup"], function (c) {
                _.y.addListener(b, c, (0, _.p)(a.ce, a, c))
            });
            var c = new _.Mv(b);
            c.bindTo("disabled", a, "disablePanMomentum");
            var d = a.f.get("mouseEventTarget");
            _.v(["movestart", "move", "moveend"], function (b) {
                _.y.addListener(d, b, function (c) {
                    jy(a, b, c)
                });
                _.y.addListener(c, b, function (c) {
                    jy(a, b, c)
                })
            });
            _.y.forward(b, "mousedown", a.l);
            _.y.addListener(d, "mousewheel", (0, _.p)(a.me, a))
        }, jy =
            function (a, b, c) {
                c && (c.latLng = a.X.fromContainerPixelToLatLng(c.fa));
                _.y.trigger(a.f, b, c);
                c && _.It(c) || _.y.trigger(a.l, b, c)
            }, gy = function (a, b) {
            _.y.addListener(b, "movestart", (0, _.p)(function () {
                _.y.trigger(this.H, "dragstart")
            }, a));
            _.y.addListener(b, "move", (0, _.p)(function () {
                _.y.trigger(this.H, "drag")
            }, a));
            _.y.addListener(b, "moveend", (0, _.p)(function () {
                _.y.trigger(this.H, "dragend")
            }, a))
        }, ky = function (a, b) {
            this.j = a;
            this.l = b
        }, ly = function () {
            var a = !1;
            return function (b, c) {
                if (b && c) {
                    if (.999999 > Wx(b, c))return a = !1;
                    b = _.Uk(b, (_.Vw - 1) / 2);
                    return .999999 < Wx(b, c) ? a = !0 : a
                }
            }
        }, my = function () {
            return function (a, b) {
                if (a && b)return .9 <= Wx(a, b)
            }
        }, ny = _.na("b"), oy = function (a) {
            var b = window.document.createElement("div");
            _.im(b);
            _.mm(b, 0);
            a.appendChild(b);
            this.set("div", b)
        }, py = function (a, b, c, d) {
            function e() {
                if (!g.b && !g.f) {
                    var n = c.get(), q = b.get("center"), r = b.get("zoom");
                    null != r && q && n && n.width && n.height && (c.removeListener(e), h.remove(), l.remove(), d.size = n.width + "x" + n.height, d.hadviewport = f, g.f = q, g.m = r, g.b = _.Uf("map2", {
                        startTime: f ?
                            a : void 0, Im: d
                    }))
                }
            }

            this.H = b;
            this.j = {};
            this.m = this.f = this.b = null;
            this.l = !1;
            var f = !0, g = this, h = b.addListener("center_changed", e), l = b.addListener("zoom_changed", e);
            c.addListener(e);
            e();
            f = !1
        }, qy = function (a, b, c) {
            !a.b || a.j[b] || a.l || (a.f.b(a.H.get("center")) && a.m == a.H.get("zoom") ? (a.j[b] = !0, c.call(a)) : a.l = !0)
        }, ry = function (a, b) {
            qy(a, "staticmap", function () {
                var a = {staticmap: b};
                qy(this, "firstpixel", function () {
                    a.firstpixel = b
                });
                qy(this, "allpixels", function () {
                    a.allpixels = b
                });
                _.Sf(this.b, a)
            })
        }, ty = function (a) {
            var b =
                {};
            b.firstmap = sy;
            b.hdpi = 1 < _.Tk();
            b.mob = !_.W.C;
            b.staticmap = a;
            return b
        }, uy = function (a, b) {
            this.tileSize = a.tileSize;
            this.Oa = !0;
            this.f = a;
            this.b = b;
            this.Lb = _.Vh;
            this.fc = !1
        }, vy = function (a, b, c, d, e, f, g, h) {
            this.tileSize = {Yb: b.width, Zb: b.height};
            this.l = c;
            this.b = a || [];
            this.B = b;
            this.j = d;
            this.C = e;
            this.f = f;
            this.m = g;
            this.Oa = !0;
            this.fc = !1;
            this.Lb = h
        }, wy = function (a, b) {
            this.j = b || new _.zd;
            this.b = new _.od(a % 360, 45);
            this.l = new _.I(0, 0);
            this.f = !0
        }, xy = function () {
            var a = new ny(my()), b = {};
            b.obliques = new ny(ly());
            b.report_map_issue =
                a;
            return b
        }, yy = function (a) {
            var b = new Ex(_.Kl(_.y.trigger, a, "idle"), 300);
            b.B();
            _.y.addListener(a, "bounds_changed", (0, _.p)(b.B, b))
        }, zy = function (a) {
            if (a && _.dm(a.getDiv()) && (_.Zl() || _.Yl())) {
                _.hn(a, "Tdev");
                var b = window.document.querySelector('meta[name="viewport"]');
                (b = b && b.content) && b.match(/width=device-width/) && _.hn(a, "Mfp")
            }
        }, Ay = function (a, b) {
            function c() {
                var c = b.get("baseMapType");
                if (c)switch (c.pa) {
                    case "roadmap":
                        _.hn(a, "Tm");
                        break;
                    case "satellite":
                        c.F && _.hn(a, "Ta");
                        _.hn(a, "Tk");
                        break;
                    case "hybrid":
                        c.F &&
                        _.hn(a, "Ta");
                        _.hn(a, "Th");
                        break;
                    case "terrain":
                        _.hn(a, "Tr");
                        break;
                    default:
                        _.hn(a, "To")
                }
            }

            c();
            _.y.addListener(b, "basemaptype_changed", c)
        }, Cy = function (a, b, c) {
            _.bb(_.hh, function (d, e) {
                b.set(e, By(a, e, {Ik: c}))
            })
        }, Dy = function (a, b) {
            this.b = a;
            this.f = b
        }, Ey = function (a) {
            var b = this;
            this.b = a;
            a.addListener(function () {
                return b.notify("style")
            })
        }, Fy = function (a, b) {
            function c(c) {
                var d = b.getAt(c);
                if (d instanceof _.Qg) {
                    c = d.get("styles");
                    var f = dy(c);
                    d.b = function () {
                        var b = By(a, d.f);
                        return (new Fx(b, f, null, null, null)).b()
                    }
                }
            }

            _.y.addListener(b, "insert_at", c);
            _.y.addListener(b, "set_at", c);
            b.forEach(function (a, b) {
                return c(b)
            })
        }, Gy = function (a, b, c) {
            if ((_.Zl() || _.Yl()) && !_.xm()) {
                _.hn(b, "Mmni");
                var d = window.setInterval(function () {
                    var e;
                    e = a.b.getBoundingClientRect();
                    if (e = !(0 >= e.top - 5 && 0 >= e.left - 5 && e.height + 5 >= window.document.body.scrollHeight && e.width + 5 >= window.document.body.scrollWidth)) e = a.b.getBoundingClientRect(), e = 0 >= e.top - 5 && 0 >= e.left - 5 && e.bottom + 5 >= window.innerHeight && e.right + 5 >= window.innerWidth && "greedy" == c.get();
                    e &&
                    (_.hn(b, "Mmus"), window.clearInterval(d))
                }, 1E3)
            }
        }, Hy = _.na("b"), Jy = function (a) {
            var b;
            b = (b = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection || null) && b.type;
            _.hn(a, "Nt", b && Iy[b] || "-na")
        }, Ly = function () {
            Ky(this)
        }, Ky = function (a) {
            var b = new _.iv(a.get("minZoom") || 0, a.get("maxZoom") || 30), c = a.get("mapTypeMinZoom"), d = a.get("mapTypeMaxZoom"), e = a.get("trackerMaxZoom");
            _.kb(c) && (b.min = Math.max(b.min, c));
            _.kb(e) ? b.max = Math.min(b.max, e) : _.kb(d) && (b.max = Math.min(b.max, d));
            a.set("zoomRange", b)
        }, My = function () {
            this.B = new _.fg;
            this.l = {};
            this.j = {}
        }, Ny = _.ma(), Oy = _.ma(), Py = function (a, b) {
            var c = a.__gm, d = a.mapTypes, e = a.__gm;
            b = new Vx(b, a.overlayMapTypes);
            b.bindTo("size", e);
            b.bindTo("zoom", e);
            b.bindTo("offset", e);
            b.bindTo("projectionBounds", e);
            _.y.forward(a, "tilesloaded", b);
            d = new ey(d, c.b, a.overlayMapTypes, b, _.Kl(_.hn, a));
            d.bindTo("heading", a);
            d.bindTo("mapTypeId", a);
            _.xg[23] && d.bindTo("scale", a);
            d.bindTo("apistyle", c);
            d.bindTo("authUser", c);
            d.bindTo("tilt", c);
            return d
        }, Qy = function (a,
                          b) {
            _.y.Ka(window, "resize", a);
            _.y.forward(a, "resize", b);
            _.y.bind(b, "resize", this, this.b);
            this.f = b;
            this.b()
        }, Ry = function (a, b, c, d, e, f, g, h) {
            var l = c.__gm, n = new hy(c, a, b, !!c.U, e, l, d, g, (0, _.p)(f.b, f), h);
            n.bindTo("draggingCursor", c);
            n.bindTo("draggableMap", c, "draggable");
            _.y.addListener(c, "zoom_changed", function () {
                n.get("zoom") != c.get("zoom") && n.set("zoom", c.get("zoom"))
            });
            n.set("zoom", c.get("zoom"));
            n.bindTo("disablePanMomentum", c);
            n.bindTo("projectionTopLeft", e);
            n.bindTo("draggableCursor", l, "cursor");
            d.bindTo("zoom",
                n);
            e.bindTo("zoom", n);
            return n
        }, Sy = function (a, b, c, d) {
            return d ? new ky(a, function () {
                    return b
                }) : _.xg[23] ? new ky(a, function (a) {
                        var d = c.get("scale");
                        return 2 == d || 4 == d ? b : a
                    }) : a
        }, Ty = function (a, b) {
            var c = a.__gm;
            b = new oy(b);
            b.bindTo("center", a);
            b.bindTo("projectionBounds", c);
            b.bindTo("offset", c);
            return b
        }, Uy = function () {
            var a, b = new _.A;
            b.bounds_changed = function () {
                var c = b.get("bounds");
                c ? a && _.Bj(a, c) || (a = _.Id(c.I - 512, c.J - 512, c.L + 512, c.M + 512), b.set("boundsQ", a)) : b.set("boundsQ", c)
            };
            return b
        }, Vy = function (a, b, c,
                          d) {
            var e = new py(a, b, c, ty(!!d));
            sy = !1;
            d && _.Dj(d, function g(a) {
                a && (d.removeListener(g), ry(e, a))
            });
            _.y.addListenerOnce(b, "tilesloaded", (0, _.p)(e.C, e));
            return e
        }, Wy = _.na("b"), Xy = function (a, b, c) {
            var d = _.qj(), e = _.Qf(_.Q);
            this.H = b;
            this.b = c;
            this.j = new _.zd;
            this.f = _.Of(e);
            this.l = _.Pf(e);
            this.B = _.M(d, 14);
            this.m = _.M(d, 15);
            this.C = new _.eu(a, d, e)
        }, Yy = function (a, b, c, d) {
            d = void 0 === d ? {va: null} : d;
            var e = _.kb(d.heading), f = ("hybrid" == b && !e || "terrain" == b || "roadmap" == b) && 0 != d.ek, g = d.va;
            return "satellite" == b ? (a = e ? Hx(a.C,
                        d.heading || 0) : _.ie(new _.sj(a.C.f.data[1]), 0).slice(), e = new _.Gd(e ? 45 : 0, d.heading || 0), new vy(a, new _.J(256, 256), "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.", window.document, f && 1 < _.Tk(), _.zu(d.heading), g && g.scale || null, e)) : new _.yu(_.fu(a.C), new _.J(256, 256), "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.", window.document, f && 1 < _.Tk(), _.zu(d.heading), c, g, d.heading)
        }, Zy = function (a) {
            function b(a, b) {
                if (!b || !b.ua)return b;
                var c = [];
                _.lj(c, b.ua.data);
                c = new _.ws(c);
                _.js(_.dt(c)).data[0] = a;
                return {scale: b.scale, wb: b.wb, ua: c}
            }

            return function (c) {
                var d = Yy(a, "roadmap", a.b, {
                    ek: !1,
                    va: b(3, c.va().get())
                }), e = Yy(a, "roadmap", a.b, {va: b(18, c.va().get())}), d = new Lx([d, e]);
                c = Yy(a, "roadmap", a.b, {va: c.va().get()});
                return new uy(d, c)
            }
        }, $y = function (a) {
            return function (b) {
                var c = b.va().get(), d = Yy(a, "satellite", null, {heading: b.heading, va: c});
                b = Yy(a, "hybrid", a.b, {heading: b.heading, va: c});
                return new Lx([d, b])
            }
        }, az = function (a, b) {
            return new Bx($y(a),
                a.b, _.Ia(b) ? new wy(b) : a.j, _.Ia(b) ? 21 : 22, "\u0413\u0438\u0431\u0440\u0438\u0434", "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043f\u0443\u0442\u043d\u0438\u043a\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u0443 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432", _.Bw.hybrid, "m@" + a.B, {
                    type: 68,
                    params: {set: "RoadmapSatellite"}
                }, "hybrid", a.m, a.f, a.l, b)
        }, bz = function (a) {
            return function (b) {
                return Yy(a, "satellite", null, {
                    heading: b.heading,
                    va: b.va().get()
                })
            }
        }, cz = function (a, b) {
            var c = _.Ia(b);
            return new Bx(bz(a), null, _.Ia(b) ? new wy(b) : a.j, c ? 21 : 22, "\u0421\u043f\u0443\u0442\u043d\u0438\u043a", "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043f\u0443\u0442\u043d\u0438\u043a\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u0443", c ? "a" : _.Bw.satellite, null, null, "satellite", a.m, a.f, a.l, b)
        }, dz = function (a, b) {
            return function (c) {
                return Yy(a, b, a.b, {va: c.va().get()})
            }
        }, By = function (a, b, c) {
            c = void 0 === c ? {} : c;
            var d = [0, 90, 180, 270];
            if ("hybrid" ==
                b)for (b = az(a), b.f = {}, d = _.Nl(d), c = d.next(); !c.done; c = d.next())c = c.value, b.f[c] = az(a, c); else if ("satellite" == b)for (b = cz(a), b.f = {}, d = _.Nl(d), c = d.next(); !c.done; c = d.next())c = c.value, b.f[c] = cz(a, c); else b = "roadmap" == b && 1 < _.Tk() && c.Ik ? new Bx(Zy(a), a.b, a.j, 22, "\u041a\u0430\u0440\u0442\u0430", "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u0443 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432", _.Bw.roadmap, "m@" +
                    a.B, {
                    type: 68,
                    params: {set: "Roadmap"}
                }, "roadmap", a.m, a.f, a.l, void 0) : "terrain" == b ? new Bx(dz(a, "terrain"), a.b, a.j, 21, "\u0420\u0435\u043b\u044c\u0435\u0444", "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u0443 \u0440\u0435\u043b\u044c\u0435\u0444\u0430 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432", _.Bw.terrain, "r@" + a.B, {
                        type: 68,
                        params: {set: "Terrain"}
                    }, "terrain", a.m, a.f, a.l, void 0) : new Bx(dz(a, "roadmap"),
                        a.b, a.j, 22, "\u041a\u0430\u0440\u0442\u0430", "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u0443 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432", _.Bw.roadmap, "m@" + a.B, {type: 68}, "roadmap", a.m, a.f, a.l, void 0);
            return b
        }, ez = _.ma();
    _.Ml(Bx, _.Pg);
    Bx.prototype.b = function () {
        return this.B(this)
    };
    Bx.prototype.va = _.ra(17);
    Bx.prototype.va = _.pj(17, _.oa("j"));
    _.fg.prototype.b = _.pj(12, function (a) {
        _.Dd(this.P, function (b) {
            b(a)
        })
    });
    _.dg.prototype.Ag = _.pj(7, function (a, b) {
        var c = _.$l(), d = this.l, e, f, g = b.Ba && _.nj(b.Ba);
        if (this.b) e = this.b, f = this.j; else if ("mouseout" == a || g) f = e = null; else {
            for (var h = 0; (e = d[h++]) && !(f = e.b(b, !1)););
            if (!f && c)for (h = 0; (e = d[h++]) && !(f = e.b(b, !0)););
        }
        if (e != this.f || f != this.m) this.f && this.f.handleEvent("mouseout", b, this.m), this.f = e, this.m = f, e && e.handleEvent("mouseover", b, f);
        if (!e)return !!g;
        if ("mouseover" == a || "mouseout" == a)return !1;
        e.handleEvent(a, b, f);
        return !0
    });
    _.t(Dx, _.L);
    Dx.prototype.getTile = function () {
        return new _.ks(this.data[1])
    };
    _.t(Ex, _.on);
    Ex.prototype.B = function (a) {
        this.j = arguments;
        this.b ? this.f = _.Qa() + this.m : this.b = _.Un(this.l, this.m)
    };
    Ex.prototype.stop = function () {
        this.b && (_.Ub.clearTimeout(this.b), this.b = null);
        this.f = null;
        this.j = []
    };
    Ex.prototype.Ca = function () {
        this.stop();
        Ex.ib.Ca.call(this)
    };
    Ex.prototype.G = function () {
        this.f ? (this.b = _.Un(this.l, this.f - _.Qa()), this.f = null) : (this.b = null, this.D.apply(null, this.j))
    };
    _.Ml(Fx, Bx);
    Kx.prototype.ta = _.oa("f");
    Kx.prototype.Bb = function () {
        return Jx(this.b, function (a) {
            return a.Bb()
        })
    };
    Kx.prototype.release = function () {
        for (var a = _.Nl(this.b), b = a.next(); !b.done; b = a.next())b.value.release();
        this.j()
    };
    Kx.prototype.freeze = function () {
        for (var a = _.Nl(this.b), b = a.next(); !b.done; b = a.next())b.value.freeze()
    };
    Lx.prototype.Fa = function (a, b) {
        function c() {
            b.eb && f.Bb() && b.eb()
        }

        b = void 0 === b ? {} : b;
        var d = _.tk(window.document, "DIV"), e = _.Mk(this.b, function (b, e) {
            b = b.Fa(a, {eb: c});
            var f = b.ta();
            f.style.position = "absolute";
            f.style.zIndex = e;
            d.appendChild(f);
            return b
        }), f = new Kx(a, d, e, {fb: b.fb});
        return f
    };
    var by = {
        hue: "h",
        saturation: "s",
        lightness: "l",
        gamma: "g",
        invert_lightness: "il",
        visibility: "v",
        color: "c",
        weight: "w"
    }, cy = /^#[0-9a-fA-F]{6}$/, $x = {
        all: 0,
        administrative: 1,
        "administrative.country": 17,
        "administrative.province": 18,
        "administrative.locality": 19,
        "administrative.neighborhood": 20,
        "administrative.land_parcel": 21,
        poi: 2,
        "poi.business": 33,
        "poi.government": 34,
        "poi.school": 35,
        "poi.medical": 36,
        "poi.attraction": 37,
        "poi.place_of_worship": 38,
        "poi.sports_complex": 39,
        "poi.park": 40,
        road: 3,
        "road.highway": 49,
        "road.highway.controlled_access": 785,
        "road.arterial": 50,
        "road.local": 51,
        transit: 4,
        "transit.line": 65,
        "transit.station": 66,
        "transit.station.rail": 1057,
        "transit.station.bus": 1058,
        "transit.station.airport": 1059,
        "transit.station.ferry": 1060,
        landscape: 5,
        "landscape.man_made": 81,
        "landscape.natural": 82,
        "landscape.natural.landcover": 1313,
        "landscape.natural.terrain": 1314,
        water: 6
    }, ay = {
        all: "",
        geometry: "g",
        "geometry.fill": "g.f",
        "geometry.stroke": "g.s",
        labels: "l",
        "labels.icon": "l.i",
        "labels.text": "l.t",
        "labels.text.fill": "l.t.f",
        "labels.text.stroke": "l.t.s"
    };
    _.t(Tx, _.A);
    Tx.prototype.la = function () {
        _.v(this.b, function (a) {
            Ux(a)
        }, this);
        this.b.length = 0;
        _.v(this.P, function (a) {
            a.remove()
        })
    };
    Tx.prototype.l = function (a) {
        var b = this.b, c = Rx(this, this.f.getAt(a));
        b.splice(a, 0, c);
        Sx(this)
    };
    Tx.prototype.m = function (a) {
        var b = this.b;
        Ux(b[a]);
        b.splice(a, 1);
        Sx(this)
    };
    Tx.prototype.B = function (a) {
        Ux(this.b[a]);
        var b = Rx(this, this.f.getAt(a));
        b.set("zIndex", a);
        this.b[a] = b
    };
    var fz = [{ie: 108.25, fe: 109.625, ke: 49, je: 51.5}, {ie: 109.625, fe: 109.75, ke: 49, je: 50.875}, {
        ie: 109.75,
        fe: 110.5,
        ke: 49,
        je: 50.625
    }, {ie: 110.5, fe: 110.625, ke: 49, je: 49.75}];
    _.t(Vx, _.A);
    Vx.prototype.l = function () {
        this.b || this.f.forEach(function (a) {
            a && _.y.trigger(a, "tilesloaded")
        })
    };
    var sy = !0;
    Yx.prototype.ta = function () {
        return this.b.ta()
    };
    Yx.prototype.Bb = function () {
        return this.b.Bb()
    };
    Yx.prototype.release = function () {
        this.b.release()
    };
    Yx.prototype.freeze = function () {
        this.b.freeze()
    };
    var Iy = {bluetooth: "-b", cellular: "-c", ethernet: "-e", none: "-n", wifi: "-wf", wimax: "-wm", other: "-o"};
    _.t(ey, _.A);
    _.k = ey.prototype;
    _.k.mapTypeId_changed = function () {
        var a = this.get("mapTypeId");
        this.sd(a)
    };
    _.k.heading_changed = function () {
        var a = this.get("heading");
        if (_.Ia(a)) {
            var b = _.fb(90 * Math.round(a / 90), 0, 360);
            a != b ? this.set("heading", b) : (a = this.get("mapTypeId"), this.sd(a))
        }
    };
    _.k.tilt_changed = function () {
        var a = this.get("mapTypeId");
        this.sd(a)
    };
    _.k.qn = function (a) {
        this.l.set(a.getArray().slice())
    };
    _.k.setMapTypeId = function (a) {
        this.sd(a);
        this.set("mapTypeId", a)
    };
    _.k.sd = function (a) {
        var b = this.get("heading") || 0, c = this.f.get(a), d = this.get("tilt");
        if (d && c && c instanceof Bx && c.f && c.f[b]) c = c.f[b]; else if (0 == d && 0 != b) {
            this.set("heading", 0);
            return
        }
        c && c == this.m || (this.j && (_.y.removeListener(this.j), this.j = null), b = (0, _.p)(this.sd, this, a), a && (this.j = _.y.addListener(this.f, a.toLowerCase() + "_changed", b)), c && c instanceof _.Qg ? (a = c.f, this.set("styles", c.get("styles")), this.set("baseMapType", this.f.get(a))) : (this.set("styles", null), this.set("baseMapType", c)), this.set("maxZoom",
            c && c.maxZoom), this.set("minZoom", c && c.minZoom), this.m = c)
    };
    _.k.mk = function (a, b, c, d, e, f) {
        if (void 0 == f)return null;
        if (d instanceof Bx) {
            a = new Fx(d, a, b, e, c);
            if (b = this.b instanceof Fx)if (b = this.b, b == a) b = !0; else if (b && a) {
                if (c = b.heading == a.heading && b.projection == a.projection && b.Jc == a.Jc) {
                    b = b.j.get();
                    c = a.j.get();
                    if (b == c) b = !0; else if (b && c) {
                        if (d = b.scale == c.scale && b.wb == c.wb) b.ua == c.ua ? b = !0 : b.ua && c.ua ? (c = c.ua, b = _.Wd(b.ua.data, c ? c.data : null)) : b = !1, d = b;
                        b = d
                    } else b = !1;
                    c = b
                }
                b = c
            } else b = !1;
            b || (this.b = a)
        } else this.b = d;
        return this.b
    };
    _.t(hy, _.A);
    _.k = hy.prototype;
    _.k.zoom_changed = function () {
        iy(this)
    };
    _.k.zoomRange_changed = function () {
        iy(this)
    };
    _.k.Xf = function (a) {
        var b = _.Kk();
        300 >= b - this.m ? (this.m = 0, this.get("disableDoubleClickZoom") || this.me(_.gn(a, this.b), -1)) : (this.m = b, this.ce("rightclick", a));
        _.ub(a);
        _.vb(a);
        this.C = !0
    };
    _.k.em = function (a) {
        1 < a.button || _.nj(a) || (this.ce("dblclick", a), _.nj(a) || (this.j = 0, this.get("disableDoubleClickZoom") || (a = _.gn(a, this.b), this.me(a, 1))))
    };
    _.k.Mi = function (a) {
        if (!_.nj(a) && !this.C) {
            var b = _.Kk();
            300 >= b - this.j ? this.j = 0 : (this.j = b, this.ce("click", a));
            _.kn("Mm", "-i", this, this.B)
        }
    };
    _.k.ce = function (a, b) {
        var c = _.gn(b, this.F), d = _.gn(b, this.b), e = this.X.fromDivPixelToLatLng(c, !0);
        e && (c = new _.D(e.lat(), e.lng()), e = this.H.get("projection").fromLatLngToPoint(e), b = new _.Dl(c, b, d, e), this.f.f.Ag(a, b) || (this.set("draggableCursor", this.H.get("draggableCursor")), this.D.get("title") && this.D.set("title", null), delete b.Ba, _.y.trigger(this.H, a, b)))
    };
    _.k.Ni = function (a) {
        this.C = !1;
        5 != _.W.type || 2 != _.W.b || 2 != a.button || a.ctrlKey || this.Xf(a)
    };
    _.k.me = function (a, b) {
        b = Math.pow(2, b);
        var c = new _.Ft(0, 0, b);
        _.Gt(c, new _.I(-a.x, -a.y));
        a = new _.Et(b, new _.I(c.x, c.y), a);
        jy(this, "movestart", null);
        jy(this, "move", a);
        jy(this, "moveend", a);
        _.kn("Mm", "-i", this, this.B)
    };
    ky.prototype.m = function (a) {
        return this.l(this.j.m(a))
    };
    ky.prototype.f = function (a) {
        return this.l(this.j.f(a))
    };
    ky.prototype.b = function () {
        return this.j.b()
    };
    _.t(ny, _.A);
    ny.prototype.changed = function (a) {
        if ("available" != a) {
            a = this.get("viewport");
            var b = this.get("featureRects");
            a = this.b(a, b);
            null != a && a != this.get("available") && this.set("available", a)
        }
    };
    _.t(oy, _.A);
    oy.prototype.offset_changed = function () {
        this.set("newCenter", this.get("center"));
        var a = this.get("projectionBounds"), b = this.get("offset");
        if (a && b) {
            var c = this.get("div");
            _.em(c, new _.I(a.I - b.width, a.J - b.height));
            _.jm(c)
        }
    };
    py.prototype.D = function () {
        qy(this, "visreq", function () {
            _.Tf(this.b, "visreq")
        })
    };
    py.prototype.F = function () {
        qy(this, "visres", function () {
            _.Tf(this.b, "visres")
        })
    };
    py.prototype.B = function () {
        qy(this, "firsttile", function () {
            var a = {firsttile: void 0};
            qy(this, "firstpixel", function () {
                a.firstpixel = void 0
            });
            _.Sf(this.b, a)
        })
    };
    py.prototype.C = function () {
        qy(this, "tilesloaded", function () {
            var a = {tilesloaded: void 0};
            qy(this, "allpixels", function () {
                a.allpixels = void 0
            });
            _.Sf(this.b, a)
        })
    };
    uy.prototype.Fa = function (a, b) {
        var c;
        a:{
            c = a.da;
            if (!(7 > c)) {
                var d = 1 << c - 7;
                c = a.ca / d;
                for (var d = a.ba / d, e = _.Nl(fz), f = e.next(); !f.done; f = e.next())if (f = f.value, c >= f.ie && c <= f.fe && d >= f.ke && d <= f.je) {
                    c = !0;
                    break a
                }
            }
            c = !1
        }
        return c ? this.b.Fa(a, b) : this.f.Fa(a, b)
    };
    vy.prototype.Fa = function (a, b) {
        a = new _.ru(a, this.B, this.j.createElement("div"), {Kg: this.l || void 0, fb: b && b.fb});
        return new Yx(a, this.b, this.C, this.f, this.m, b && b.eb)
    };
    wy.prototype.fromLatLngToPoint = function (a, b) {
        b = this.j.fromLatLngToPoint(a, b);
        Zx(b, this.b.heading());
        b.y = (b.y - 128) / _.Uw + 128;
        return b
    };
    wy.prototype.fromPointToLatLng = function (a, b) {
        var c = this.l;
        c.x = a.x;
        c.y = (a.y - 128) * _.Uw + 128;
        Zx(c, 360 - this.b.heading());
        return this.j.fromPointToLatLng(c, b)
    };
    wy.prototype.getPov = _.oa("b");
    _.Ml(Dy, _.A);
    Dy.prototype.getPrintableImageUri = function (a, b, c, d, e) {
        d = void 0 === d ? 0 : d;
        e = void 0 === e ? 1 : e;
        var f = this.get("tileMapType");
        if (2048 < a * e || 2048 < b * e || !(f instanceof Bx))return null;
        d = d || this.get("zoom");
        if (null == d)return null;
        c = c || this.get("center");
        if (!c)return null;
        var g = f.va().get();
        if (!g.ua)return null;
        var h = new _.hu(g.ua);
        _.ju(h, 0);
        var l = this.f.f(d);
        l && _.mu(h, l);
        if ("hybrid" == f.pa) {
            _.et(h.b);
            for (f = _.ke(h.b, 1) - 1; 0 < f; --f)_.tj(new _.Jr(_.uj(h.b, 1, f)), new _.Jr(_.uj(h.b, 1, f - 1)));
            f = new _.Jr(_.uj(h.b, 1, 0));
            f.data[0] =
                1;
            _.xj(f, 1);
            _.xj(f, 2)
        }
        if (2 == e || 4 == e) (new _.Lr(_.O(h.b, 4))).data[4] = e;
        e = d;
        d = new _.ss(_.O(new _.ps(_.vj(h.b, 0)), 3));
        d.setZoom(e);
        e = new _.ko(_.O(d, 2));
        f = Gx(c.lat());
        e.data[0] = f;
        c = Gx(c.lng());
        e.data[1] = c;
        d = new _.ts(_.O(d, 0));
        d.data[0] = a;
        d.data[1] = b;
        a = this.b;
        a += "pb=" + (0, window.encodeURIComponent)(_.ct(h.b)).replace(/%20/g, "+");
        null != g.wb && (a += "&authuser=" + g.wb);
        return a
    };
    _.Ml(Ey, _.A);
    Ey.prototype.changed = function (a) {
        "tileMapType" != a && "style" != a && this.notify("style")
    };
    Ey.prototype.getStyle = function () {
        var a = [], b = this.get("tileMapType");
        if (b instanceof Bx && (b = b.__gmsd)) {
            var c = new _.$k;
            c.data[0] = b.type;
            if (b.params)for (var d in b.params) {
                var e = _.al(c);
                _.Hk(e, d);
                var f = b.params[d];
                f && (e.data[1] = f)
            }
            a.push(c)
        }
        d = new _.$k;
        d.data[0] = 37;
        _.Hk(_.al(d), "smartmaps");
        a.push(d);
        this.b.get().forEach(function (b) {
            b.$h && a.push(b.$h)
        });
        return a
    };
    _.t(Ly, _.A);
    Ly.prototype.changed = function (a) {
        "zoomRange" != a && Ky(this)
    };
    My.prototype.C = function (a) {
        if (_.ke(a, 0)) {
            this.l = {};
            this.j = {};
            for (var b = 0; b < _.ke(a, 0); ++b) {
                var c = new Dx(_.uj(a, 0, b)), d = c.getTile(), e = d.getZoom(), f = _.M(d, 1), d = _.M(d, 2), c = _.M(c, 2), g = this.l;
                g[e] = g[e] || {};
                g[e][f] = g[e][f] || {};
                g[e][f][d] = c;
                this.j[e] = Math.max(this.j[e] || 0, c)
            }
            this.B.b(null)
        }
    };
    My.prototype.m = function (a) {
        var b = this.l, c = a.ca, d = a.ba;
        a = a.da;
        return b[a] && b[a][c] && b[a][c][d] || 0
    };
    My.prototype.f = function (a) {
        return this.j[a] || 0
    };
    My.prototype.b = _.oa("B");
    _.t(Ny, _.A);
    Ny.prototype.changed = function (a) {
        if ("apistyle" != a && "hasCustomStyles" != a) {
            var b = this.get("mapTypeStyles") || this.get("styles");
            this.set("hasCustomStyles", _.w(b));
            a = [];
            _.xg[13] && a.push({featureType: "poi.business", elementType: "labels", stylers: [{visibility: "off"}]});
            _.jb(a, b);
            b = dy(a);
            b != this.b && (this.b = b, this.notify("apistyle"));
            a.length && !b && _.bc(_.Kl(_.y.trigger, this, "styleerror"))
        }
    };
    Ny.prototype.getApistyle = _.oa("b");
    _.t(Oy, _.A);
    Oy.prototype.changed = function (a) {
        if ("maxZoomRects" == a || "latLng" == a) {
            a = this.get("latLng");
            var b = this.get("maxZoomRects");
            if (a && b) {
                for (var c = void 0, d = 0, e; e = b[d++];)e.ya.contains(a) && (c = Math.max(c || 0, e.maxZoom));
                a = c;
                a != this.get("maxZoom") && this.set("maxZoom", a)
            } else this.set("maxZoom", void 0)
        }
    };
    _.t(Qy, _.A);
    Qy.prototype.b = function () {
        var a = new _.J(this.f.clientWidth, this.f.clientHeight);
        a.b(this.get("size")) || this.set("size", a)
    };
    _.t(Wy, _.A);
    Wy.prototype.immutable_changed = function () {
        var a = this, b = a.get("immutable"), c = a.f;
        b != c && (_.bb(a.b, function (d) {
            (c && c[d]) !== (b && b[d]) && a.set(d, b && b[d])
        }), a.f = b)
    };
    ez.prototype.f = function (a, b, c, d, e, f, g) {
        var h = _.Of(_.Qf(_.Q)), l = a.__gm, n = a.getDiv();
        if (n) {
            _.y.forward(n, "resize", c);
            _.y.addDomListenerOnce(c, "mousedown", function () {
                _.hn(a, "Mi")
            }, !0);
            var q = new _.uw({
                xg: c,
                Bg: n,
                yg: !0,
                eh: _.zj(_.Qf(_.Q), 15),
                backgroundColor: b.backgroundColor,
                If: !1
            }), r = q.b, n = new Qy(c, q.j);
            _.mm(q.j, 0);
            _.y.forward(a, "resize", c);
            l.set("panes", q.C);
            l.set("innerContainer", q.l);
            var u = Vy(f, a, _.cu(n, "size"), d && d.B), C = new Oy, B = xy(), x, z;
            (function () {
                var b = _.M(_.qj(), 14), c = a.get("noPerTile") && _.xg[15],
                    d = new My;
                x = Sy(d, b, a, c);
                z = new _.dw(h, C, B, c ? null : d, !!a.U, u)
            })();
            z.bindTo("tilt", a);
            z.bindTo("heading", a);
            z.bindTo("bounds", a);
            z.bindTo("zoom", a);
            z.bindTo("size", l);
            f = new Xy(new _.rj(_.O(_.Q, 1)), a, x);
            Cy(f, a.mapTypes, b.enableSplitTiles);
            l.set("eventCapturer", q.m);
            l.set("panBlock", q.mc);
            var F = Py(a, q.C.mapPane);
            z.bindTo("baseMapType", F);
            var H = _.Nd(!1);
            f = _.st({draggable: _.cu(a, "draggable"), Cg: _.cu(a, "gestureHandling"), ad: H});
            var E, P = null;
            E = new _.uv(r, q.f, F.B, u);
            var Z = new _.$t(["blockingLayerCount", "staticMapLoading"],
                "waitWithTiles", function (a, b) {
                    return !!a || !!b
                });
            Z.bindTo("blockingLayerCount", l);
            E.bindTo("waitWithTiles", Z);
            E.set("panes", q.C);
            E.bindTo("styles", a);
            _.xg[20] && E.bindTo("animatedZoom", a);
            _.G("onion", function (b) {
                b.f(a, x)
            });
            _.xg[35] && (_.vw(a), _.ww(a));
            var za = new _.cw;
            za.bindTo("tilt", a);
            za.bindTo("zoom", a);
            za.bindTo("mapTypeId", a);
            za.bindTo("aerial", B.obliques, "available");
            l.bindTo("tilt", za, "actualTilt");
            _.y.addListener(z, "attributiontext_changed", function () {
                a.set("mapDataProviders", z.get("attributionText"))
            });
            Z = new Ny;
            Z.bindTo("styles", a);
            Z.bindTo("mapTypeStyles", F, "styles");
            l.bindTo("apistyle", Z);
            l.bindTo("hasCustomStyles", Z);
            _.y.forward(Z, "styleerror", a);
            Z = new Ey(l.b);
            Z.bindTo("tileMapType", F);
            l.bindTo("style", Z);
            var Ca;
            E && (Ca = new _.Xv, l.set("projectionController", Ca), E.bindTo("size", n), E.bindTo("projection", Ca), E.bindTo("projectionBounds", Ca), Ca.bindTo("projectionTopLeft", E), Ca.bindTo("offset", E), Ca.bindTo("latLngCenter", a, "center"), Ca.bindTo("size", n), Ca.bindTo("projection", a), E.bindTo("fixedPoint",
                Ca), a.bindTo("bounds", Ca, "latLngBounds", !0));
            l.set("mouseEventTarget", {});
            Z = new _.Wv(_.W.j, q.l);
            Z.bindTo("title", l);
            var xa;
            E && (xa = Ry(q.l, r, a, E, Ca, g, Z, f));
            d && (g = Ty(a, r), d.bindTo("div", g), d.bindTo("center", g, "newCenter"), xa && d.bindTo("zoom", xa), d.bindTo("tilt", l), d.bindTo("size", l));
            xa ? l.bindTo("zoom", xa) : l.bindTo("zoom", a);
            l.bindTo("center", a);
            l.bindTo("size", n);
            l.bindTo("baseMapType", F);
            E && (l.bindTo("offset", E), l.bindTo("layoutPixelBounds", E), l.bindTo("pixelBounds", E), l.bindTo("projectionTopLeft",
                E), l.bindTo("projectionBounds", E, "viewProjectionBounds"), l.bindTo("projectionCenterQ", Ca));
            a.set("tosUrl", _.Mw);
            E && (d = Uy(), d.bindTo("bounds", E, "pixelBounds"), l.bindTo("pixelBoundsQ", d, "boundsQ"));
            d = new Wy({projection: 1});
            d.bindTo("immutable", l, "baseMapType");
            g = new _.mw({projection: new _.zd});
            g.bindTo("projection", d);
            a.bindTo("projection", g);
            E && (_.y.forward(l, "panby", E), _.y.forward(l, "panbynow", E), _.y.forward(l, "panbyfraction", E));
            _.y.addListener(l, "panto", function (b) {
                if (b instanceof _.D)if (!a.get("center")) a.set("center",
                    b); else {
                    if (E) {
                        b = Ca.fromLatLngToDivPixel(b);
                        var c = Ca.get("offset") || _.Sh;
                        b.x += Math.round(c.width) - c.width;
                        b.y += Math.round(c.height) - c.height;
                        _.y.trigger(E, "panto", b.x, b.y)
                    }
                } else throw Error("panTo: latLng must be of type LatLng");
            });
            E && (_.y.forward(l, "pantobounds", E), _.y.addListener(l, "pantolatlngbounds", function (a) {
                if (a instanceof _.kd) E && _.y.trigger(E, "pantobounds", Ix(Ca, a)); else throw Error("panToBounds: latLngBounds must be of type LatLngBounds");
            }));
            E && xa && _.y.addListener(xa, "zoom_changed", function () {
                xa.get("zoom") !=
                a.get("zoom") && (a.set("zoom", xa.get("zoom")), _.nn(a, "Mm"))
            });
            var Xa = new Ly;
            Xa.bindTo("mapTypeMaxZoom", F, "maxZoom");
            Xa.bindTo("mapTypeMinZoom", F, "minZoom");
            Xa.bindTo("maxZoom", a);
            Xa.bindTo("minZoom", a);
            Xa.bindTo("trackerMaxZoom", C, "maxZoom");
            E && xa && (xa.bindTo("zoomRange", Xa), E.bindTo("zoomRange", Xa), xa.bindTo("draggable", a), xa.bindTo("scrollwheel", a), xa.bindTo("disableDoubleClickZoom", a));
            var nc = new _.nw(_.dm(c));
            l.bindTo("fontLoaded", nc);
            d = l.j;
            d.bindTo("scrollwheel", a);
            d.bindTo("disableDoubleClickZoom",
                a);
            d = function () {
                var b = a.get("streetView");
                b ? (a.bindTo("svClient", b, "client"), b.__gm.bindTo("fontLoaded", nc)) : (a.unbind("svClient"), a.set("svClient", null))
            };
            d();
            _.y.addListener(a, "streetview_changed", d);
            if (_.xg[71]) {
                var $b = null;
                _.Hl(a, "floor_changed", function () {
                    var b = a.get("floor");
                    if (($b && $b.parameters.pid_lv) != b) {
                        var c = $b, d = l.b.get();
                        $b && (c = null, d = d.Va($b));
                        b && (c = new _.du, c.ka = "indoor", c.parameters.pid_lv = b, d = _.Ej(d, c));
                        $b = c;
                        l.b.set(d)
                    }
                })
            }
            if (!a.U) {
                P = function () {
                    P = null;
                    _.G("controls", function (b) {
                        var d =
                            new b.Wf(q.j);
                        l.set("layoutManager", d);
                        E && E.bindTo("layoutBounds", d, "bounds");
                        b.Il(d, a, F, q.j, z, B.report_map_issue, Xa, za, c, H, Ca);
                        b.Jl(a, q.l);
                        b.Sh(c)
                    })
                };
                if (E) {
                    var Ue = _.y.addListener(E, "tilesloading_changed", function () {
                        E.get("tilesloading") && (Ue.remove(), P())
                    });
                    _.y.addListenerOnce(E, "tilesloaded", function () {
                        _.G("util", function (b) {
                            b.f.b();
                            window.setTimeout((0, _.p)(b.b.f, b.b), 5E3);
                            b.l(a)
                        })
                    })
                }
                _.hn(a, "Mm");
                b.v2 && _.hn(a, "Mz");
                _.kn("Mm", "-p", a, !(!a || !a.U));
                Ay(a, F);
                _.nn(a, "Mm");
                _.zm(function () {
                    _.nn(a, "Mm")
                });
                zy(a);
                c && Gy(new Hy(c), a, f)
            }
            yy(a);
            var Ff = _.M(_.qj(), 14);
            b = new Xy(new _.rj(_.O(_.Q, 1)), a, new ky(x, function (a) {
                return a || Ff
            }));
            Fy(b, a.overlayMapTypes);
            _.xg[35] && l.bindTo("card", a);
            a.U || Jy(a);
            e && window.setTimeout(function () {
                _.y.trigger(a, "projection_changed");
                _.m(a.get("bounds")) && _.y.trigger(a, "bounds_changed");
                _.y.trigger(a, "tilt_changed");
                _.m(a.get("heading")) && _.y.trigger(a, "heading_changed")
            }, 0);
            _.xg[15] && (e = _.fu(_.gu()), e = new Dy(e[0], x), e.bindTo("tileMapType", F), e.bindTo("center", a), e.bindTo("zoom",
                l), a.getPrintableImageUri = (0, _.p)(e.getPrintableImageUri, e), E && (a.setFpsMeasurementCallback = (0, _.p)(E.setFpsMeasurementCallback, E), a.bindTo("tilesloading", E)), l.bindTo("authUser", a))
        }
    };
    ez.prototype.fitBounds = function (a, b, c) {
        function d() {
            var c = a.getHeading();
            180 == c ? (g *= -1, h *= -1) : 90 == c ? (c = g, g = h, h = c) : 270 == c && (c = -g, g = -h, h = c);
            var d = _.ig(a.getDiv());
            d.width -= e;
            d.width = Math.max(1, d.width);
            d.height -= f;
            d.height = Math.max(1, d.height);
            var c = a.getProjection(), l = b.getSouthWest(), n = b.getNorthEast(), q = l.lng(), z = n.lng();
            q > z && (l = new _.D(l.lat(), q - 360, !0));
            l = c.fromLatLngToPoint(l);
            q = c.fromLatLngToPoint(n);
            n = Math.max(l.x, q.x) - Math.min(l.x, q.x);
            l = Math.max(l.y, q.y) - Math.min(l.y, q.y);
            d = n > d.width || l > d.height ?
                0 : Math.floor(Math.min(_.Lk(d.width + 1E-12) - _.Lk(n + 1E-12), _.Lk(d.height + 1E-12) - _.Lk(l + 1E-12)));
            n = _.rk(c, b, 0);
            n = _.Ek(c, new _.I((n.I + n.L) / 2, (n.J + n.M) / 2), 0);
            _.kb(d) && (n = new _.D(n.lat() + h / (_.qk(c, d) / 360), n.lng() + g / (_.qk(c, d) / 360)), a.setCenter(n), a.setZoom(d))
        }

        var e = 80, f = 80, g = 0, h = 0;
        if (_.Ia(c)) e = f = 2 * c - .01; else if (c) {
            var l = c.left || 0, n = c.right || 0, q = c.bottom || 0;
            c = c.top || 0;
            e = l + n - .01;
            f = c + q - .01;
            h = c - q;
            g = l - n
        }
        a.getProjection() ? d() : _.y.addListenerOnce(a, "projection_changed", d)
    };
    ez.prototype.b = function (a, b, c, d, e) {
        a = new _.ru(a, b, c, {});
        a.setUrl(d, e);
        return a
    };
    _.Wc("map", new ez);
});

