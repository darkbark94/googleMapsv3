google.maps.__gjsload__('stats', function (_) {
    var ZZ = function (a, b, c) {
        var d = [];
        _.Mb(a, function (a, c) {
            d.push(c + b + a)
        });
        return d.join(c)
    }, $Z = function (a, b, c, d) {
        var e = {};
        e.host = window.document.location && window.document.location.host || window.location.host;
        e.v = a;
        e.r = Math.round(1 / b);
        c && (e.client = c);
        d && (e.key = d);
        return e
    }, a_ = function (a) {
        var b = {};
        _.Mb(a, function (a, d) {
            b[(0, window.encodeURIComponent)(d)] = (0, window.encodeURIComponent)(a).replace(/%7C/g, "|")
        });
        return ZZ(b, ":", ",")
    }, c_ = function (a, b, c, d) {
        var e;
        e = _.M(_.Q, 23, 500);
        var f;
        f = _.M(_.Q, 22, 2);
        this.C = a;
        this.D = b;
        this.F = e;
        this.l = f;
        this.B = c;
        this.m = d;
        this.f = new _.Xj;
        this.b = 0;
        this.j = _.Qa();
        b_(this)
    }, b_ = function (a) {
        window.setTimeout(function () {
            d_(a);
            b_(a)
        }, Math.min(a.F * Math.pow(a.l, a.b), 2147483647))
    }, e_ = function (a, b, c) {
        a.f.set(b, c)
    }, d_ = function (a) {
        var b = $Z(a.D, a.B, a.m, void 0);
        b.t = a.b + "-" + (_.Qa() - a.j);
        a.f.forEach(function (a, d) {
            a = a();
            0 < a && (b[d] = Number(a.toFixed(2)) + (_.xm() ? "-if" : ""))
        });
        a.C.b({ev: "api_snap"}, b);
        ++a.b
    }, f_ = function (a, b, c, d, e) {
        this.m = a;
        this.C = b;
        this.l = c;
        this.f = d;
        this.j = e;
        this.b = new _.Xj;
        this.B =
            _.Qa()
    }, g_ = function (a, b, c) {
        this.l = b;
        this.f = a + "/maps/gen_204";
        this.j = c
    }, h_ = function () {
        this.b = new _.Xj
    }, i_ = function (a) {
        var b = 0, c = 0;
        a.b.forEach(function (a) {
            b += a.jo;
            c += a.In
        });
        return c ? b / c : 0
    }, j_ = function (a, b, c, d, e) {
        this.B = a;
        this.C = b;
        this.m = c;
        this.j = d;
        this.l = e;
        this.f = {};
        this.b = []
    }, k_ = function (a, b, c, d) {
        this.j = a;
        _.y.bind(this.j, "set_at", this, this.l);
        _.y.bind(this.j, "insert_at", this, this.l);
        this.B = b;
        this.C = c;
        this.m = d;
        this.f = 0;
        this.b = {};
        this.l()
    }, l_ = function () {
        this.j = _.N(_.Q, 6);
        this.b = new g_(_.xg[35] ? _.N(_.Qf(_.Q),
                11) : _.ew, _.fj, window.document);
        new k_(_.Vi, (0, _.p)(this.b.b, this.b), _.Vf, !!this.j);
        var a = _.N(new _.Cf(_.Q.data[3]), 1);
        this.C = a.split(".")[1] || a;
        this.D = {};
        this.B = {};
        this.m = {};
        this.F = {};
        this.G = _.M(_.Q, 0, 1);
        _.ej && (this.l = new c_(this.b, this.C, this.G, this.j))
    };
    f_.prototype.D = function (a) {
        var b = void 0, b = _.m(b) ? b : 1;
        this.b.isEmpty() && window.setTimeout((0, _.p)(function () {
            var a = $Z(this.C, this.l, this.f, this.j);
            a.t = _.Qa() - this.B;
            var b = this.b;
            _.Yj(b);
            for (var e = {}, f = 0; f < b.b.length; f++) {
                var g = b.b[f];
                e[g] = b.H[g]
            }
            _.mz(a, e);
            this.b.clear();
            this.m.b({ev: "api_maprft"}, a)
        }, this), 500);
        b = this.b.get(a, 0) + b;
        this.b.set(a, b)
    };
    g_.prototype.b = function (a, b) {
        b = b || {};
        var c = _.Kk().toString(36);
        b.src = "apiv3";
        b.token = this.l;
        b.ts = c.substr(c.length - 6);
        a.cad = a_(b);
        a = ZZ(a, "=", "&");
        a = this.f + "?target=api&" + a;
        this.j.createElement("img").src = a;
        (b = _.Ub.__gm_captureCSI) && b(a)
    };
    h_.prototype.f = function (a, b, c) {
        this.b.set(_.Fb(a), {jo: b, In: c})
    };
    j_.prototype.D = function (a) {
        this.f[a] || (this.f[a] = !0, this.b.push(a), 2 > this.b.length && _.zz(this, this.F, 500))
    };
    j_.prototype.F = function () {
        for (var a = $Z(this.C, this.m, this.j, this.l), b = 0, c; c = this.b[b]; ++b)a[c] = "1";
        a.hybrid = +_.$l();
        this.b.length = 0;
        this.B.b({ev: "api_mapft"}, a)
    };
    k_.prototype.l = function () {
        for (var a; a = this.j.removeAt(0);) {
            var b = a.nn;
            a = a.timestamp - this.C;
            ++this.f;
            this.b[b] || (this.b[b] = 0);
            ++this.b[b];
            if (20 <= this.f && !(this.f % 5)) {
                var c = {};
                c.s = b;
                c.sr = this.b[b];
                c.tr = this.f;
                c.te = a;
                c.hc = this.m ? "1" : "0";
                this.B({ev: "api_services"}, c)
            }
        }
    };
    l_.prototype.S = function (a) {
        a = _.Fb(a);
        this.D[a] || (this.D[a] = new j_(this.b, this.C, this.G, this.j));
        return this.D[a]
    };
    l_.prototype.O = function (a) {
        a = _.Fb(a);
        this.B[a] || (this.B[a] = new f_(this.b, this.C, 1, this.j));
        return this.B[a]
    };
    l_.prototype.f = function (a) {
        if (this.l) {
            this.m[a] || (this.m[a] = new _.KA, e_(this.l, a, function () {
                return b.nb()
            }));
            var b = this.m[a];
            return b
        }
    };
    l_.prototype.ea = function (a) {
        if (this.l) {
            this.F[a] || (this.F[a] = new h_, e_(this.l, a, function () {
                return i_(b)
            }));
            var b = this.F[a];
            return b
        }
    };
    var m_ = new l_;
    _.Wc("stats", m_);
});
