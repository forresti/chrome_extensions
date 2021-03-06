function EDMUNDSAPI(a) {
    function b(a) {
        var b = "";
        for (var c in a) a.hasOwnProperty(c) && ("" !== b && (b += "&"), b += c + "=" + a[c]);
        return b
    }
    var c = a,
        d = "v1",
        e = "http://api.edmunds.com/",
        f = "http://widgets.edmunds.com",
        g = "json";
    document.getElementsByTagName("head")[0];
    this.getBaseUrl = function() {
        return e + d
    }, this.getVersion = function() {
        return d
    }, this.setVersion = function(a) {
        return d = a
    }, this.invoke = function(a, d, e, f) {
        var h = b(d),
            i = this.getBaseUrl();
        return h = h ? "?" + h + "&api_key=" + c + "&fmt=" + g : "?api_key=" + c + "&fmt=" + g, EDM.jsonp({
            url: i + a + h,
            timeout: 7e3,
            success: e,
            error: f
        })
    }, this.invokeString = function(a, d, e, f) {
        var h = b(d),
            i = this.getBaseUrl();
        return h = h ? h + "&api_key=" + c + "&fmt=" + g : "&api_key=" + c + "&fmt=" + g, EDM.jsonp({
            url: i + a + h,
            timeout: 7e3,
            success: e,
            error: f
        })
    }, this.invoke_qa = function(a, d, e, h) {
        var i = b(d);
        this.getBaseUrl();
        return i = i ? i + "&api_key=" + c + "&fmt=" + g : "&api_key=" + c + "&fmt=" + g, EDM.jsonp({
            url: f + a + i,
            timeout: 7e3,
            success: e,
            error: h
        })
    }
}! function(a) {
    var b = a.EDM = {},
        c = Array.prototype.slice,
        d = Object.prototype.hasOwnProperty;
    b.namespace = function(a) {
        var c, d, e = a.split("."),
            f = e.length,
            g = b;
        for (c = 0; f > c; c++) d = e[c], "undefined" == typeof g[d] && (g[d] = {}), g = g[d];
        return g
    }, b.extend = function(a) {
        for (var b, e, f = c.call(arguments, 1), g = f.length, h = 0; g > h; h++)
            if (b = f[h])
                for (e in b) d.call(b, e) && (a[e] = b[e]);
        return a
    }
}(this), EDM.API = function(a) {
    function b(a) {
        var b = "";
        for (var c in a) a.hasOwnProperty(c) && ("" !== b && (b += "&"), b += c + "=" + a[c]);
        return b
    }
    var c = a,
        d = "v1",
        e = "http://api.edmunds.com/",
        f = "json";
    document.getElementsByTagName("head")[0];
    this.getBaseUrl = function() {
        return e + d
    }, this.getVersion = function() {
        return d
    }, this.setVersion = function(a) {
        return d = a
    }, this.invoke = function(a, d, e, g) {
        var h = b(d),
            i = this.getBaseUrl();
        return h = h ? "?" + h + "&api_key=" + c + "&fmt=" + f : "?api_key=" + c + "&fmt=" + f, EDM.jsonp({
            url: i + a + h,
            timeout: 7e3,
            success: e,
            error: g
        })
    }
}, EDM.namespace("api").Dealer = function() {
    function a(a) {
        c.apply(this, arguments)
    }
    var b, c = EDM.API;
    return b = a.prototype = new c, a
}(), EDM.namespace("api").Region = function() {
    function a(a) {
        c.apply(this, arguments)
    }
    var b, c = EDM.API;
    return b = a.prototype = new c, b.getValidZip = function(a, b, c) {
        return this.invoke("/api/region/zip/validation/" + a, {}, b, c)
    }, a
}(), EDM.namespace("api").Vehicle = function() {
    function a(a) {
        c.apply(this, arguments)
    }
    var b, c = EDM.API;
    return b = a.prototype = new c, b.getListOfMakes = function(a, b, c) {
        return this.invoke("/api/vehicle-directory-ajax/findmakes", {
            ps: a || "all"
        }, b, c)
    }, b.getListOfModelsByMake = function(a, b, c) {
        return this.invoke("/api/vehicle-directory-ajax/findmakemodels", {
            make: a
        }, b, c)
    }, b.getListOfTypes = function(a, b) {
        return this.invoke("/api/vehicle/stylerepository/findallvehicletypes", {}, a, b)
    }, b.getVehicle = function(a, b, c, d, e) {
        return this.invoke("/api/vehicle/modelyearrepository/foryearmakemodel", {
            make: a,
            model: b,
            year: c
        }, d, e)
    }, b.getVehiclePhoto = function(a, b, c, d, e, f) {
        return this.invoke("/api/vehiclephoto/service/findphotobystyleid", {
            make: a,
            model: b,
            year: c,
            style: d
        }, e, f)
    }, b.getVehicleConfig = function(a, b, c, d, e, f) {
        return this.invoke("/api/vehicle/styleconfig/", {
            make: a,
            model: b,
            year: c,
            style: d
        }, e, f)
    }, b.getMakes = function(a, b) {
        return this.invoke("/api/vehicle/makerepository/findall", {}, a, b)
    }, b.getMakesByYear = function(a, b, c) {
        return this.invoke("/api/vehicle/makerepository/findmakesbymodelyear", {
            year: a
        }, b, c)
    }, b.getMakesByState = function(a, b, c) {
        return this.invoke("/api/vehicle/makerepository/findmakesbypublicationstate", {
            state: a
        }, b, c)
    }, b.getNewMakes = function(a, b) {
        return this.invoke("/api/vehicle/makerepository/findnewmakes", {}, a, b)
    }, b.getUsedMakes = function(a, b) {
        return this.invoke("/api/vehicle/makerepository/findusedmakes", {}, a, b)
    }, b.getFutureMakes = function(a, b) {
        return this.invoke("/api/vehicle/makerepository/findfuturemakes", {}, a, b)
    }, b.getMakeById = function(a, b, c) {
        return this.invoke("/api/vehicle/makerepository/findbyid", {
            id: a
        }, b, c)
    }, b.getMakeByName = function(a, b, c) {
        return this.invoke("/api/vehicle/makerepository/findmakebyname", {
            name: a
        }, b, c)
    }, b.getModelsByMakeAndYear = function(a, b, c, d) {
        return this.invoke("/api/vehicle/modelrepository/findmodelsbymakeandyear", {
            make: a,
            year: b
        }, c, d)
    }, b.getModelsByMakeAndState = function(a, b, c, d) {
        return this.invoke("/api/vehicle/modelrepository/findmodelsbymakeandpublicationstate", {
            make: a,
            state: b
        }, c, d)
    }, b.getModelsByMakeId = function(a, b, c) {
        return this.invoke("/api/vehicle/modelrepository/findbymakeid", {
            makeid: a
        }, b, c)
    }, b.getModelsByMakeName = function(a, b, c) {
        return this.invoke("/api/vehicle/modelrepository/findmodelsbymake", {
            make: a
        }, b, c)
    }, b.getFutureModelsByMakeId = function(a, b, c) {
        return this.invoke("/api/vehicle/modelrepository/findfuturemodelsbymakeid", {
            makeId: a
        }, b, c)
    }, b.getUsedModelsByMakeId = function(a, b, c) {
        return this.invoke("/api/vehicle/modelrepository/findusedmodelsbymakeid", {
            makeId: a
        }, b, c)
    }, b.getNewModelsByMakeId = function(a, b, c) {
        return this.invoke("/api/vehicle/modelrepository/findnewmodelsbymakeid", {
            makeId: a
        }, b, c)
    }, b.getModelById = function(a, b, c) {
        return this.invoke("/api/vehicle/modelrepository/findbyid", {
            id: a
        }, b, c)
    }, b.getModelByMakeAndModelName = function(a, b, c, d) {
        return this.invoke("/api/vehicle/modelrepository/findmodelbymakemodelname", {
            make: a,
            model: b
        }, c, d)
    }, b.getModelYearById = function(a, b, c) {
        return this.invoke("/api/vehicle/modelyearrepository/findbyid", {
            id: a
        }, b, c)
    }, b.getListOfYearsWithNew = function(a, b) {
        return this.invoke("/api/vehicle/modelyearrepository/finddistinctyearwithnew", {}, a, b)
    }, b.getListOfYearsWithNewOrUsed = function(a, b) {
        return this.invoke("/api/vehicle/modelyearrepository/finddistinctyearwithneworused", {}, a, b)
    }, b.getListOfYearsWithUsed = function(a, b) {
        return this.invoke("/api/vehicle/modelyearrepository/finddistinctyearwithused", {}, a, b)
    }, b.getFutureModelYearsByModelId = function(a, b, c) {
        return this.invoke("/api/vehicle/modelyearrepository/findfuturemodelyearsbymodelid", {
            modelId: a
        }, b, c)
    }, b.getModelYearsByMakeAndYear = function(a, b, c, d) {
        return this.invoke("/api/vehicle/modelyearrepository/findmodelyearsbymakeandyear", {
            make: a,
            year: b
        }, c, d)
    }, b.getModelYearsByMakeAndModel = function(a, b, c, d) {
        return this.invoke("/api/vehicle/modelyearrepository/findmodelyearsbymakemodel", {
            make: a,
            model: b
        }, c, d)
    }, b.getNewAndUsedModelYearsByMakeIdAndYear = function(a, b, c, d) {
        return this.invoke("/api/vehicle/modelyearrepository/findnewandusedmodelyearsbymakeidandyear", {
            makeid: a,
            year: b
        }, c, d)
    }, b.getNewModelYearsByModelId = function(a, b, c) {
        return this.invoke("/api/vehicle/modelyearrepository/findnewmodelyearsbymodelid", {
            modelId: a
        }, b, c)
    }, b.getUsedModelYearsByModelId = function(a, b, c) {
        return this.invoke("/api/vehicle/modelyearrepository/findusedmodelyearsbymodelid", {
            modelId: a
        }, b, c)
    }, b.getModelYearsByCatAndState = function(a, b, c, d) {
        return this.invoke("/api/vehicle/modelyearrepository/findyearsbycategoryandpublicationstate", {
            category: a,
            state: b
        }, c, d)
    }, b.getModelYearsByModelId = function(a, b, c) {
        return this.invoke("/api/vehicle/modelyearrepository/formodelid", {
            modelid: a
        }, b, c)
    }, b.getPhotosByStyleId = function(a, b, c) {
        return this.invoke("/api/vehiclephoto/service/findphotosbystyleid", {
            styleId: a
        }, b, c)
    }, a
}(), EDM.template = function(a, b) {
    var c = new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + (a || "").replace(/[\r\t\n]/g, " ").split("<%").join(" ").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split(" ").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
    return b ? c(b) : c
}, EDM.namespace("util").Array = function() {
    var a = Array.isArray,
        b = Array.prototype.indexOf,
        c = Object.prototype.toString,
        d = {};
    return d.isArray = a || function(a) {
        return "[object Array]" === c.call(a)
    }, d.contains = function(a, c) {
        var e, f;
        if (!d.isArray(a)) return !1;
        if (b && a.indexOf) return -1 !== a.indexOf(c);
        for (e = 0, f = a.length; f > e; e++)
            if (a[e] === c) return !0;
        return !1
    }, d
}(), EDM.namespace("util").Function = function() {
    var a = Array.prototype.slice,
        b = Function.prototype.bind;
    return {
        bind: function(c, d) {
            return c.bind === b && b ? b.apply(c, a.call(arguments, 1)) : function() {
                return c.apply(d, a.call(arguments))
            }
        }
    }
}(), EDM.namespace("util").Number = {}, EDM.namespace("util").String = {}, EDM.namespace("event").KeyCode = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    BREAK: 19,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    INSERT: 45,
    DELETE: 46,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    NUM_ZERO: 96,
    NUM_ONE: 97,
    NUM_TWO: 98,
    NUM_THREE: 99,
    NUM_FOUR: 100,
    NUM_FIVE: 101,
    NUM_SIX: 102,
    NUM_SEVEN: 103,
    NUM_EIGHT: 104,
    NUM_NINE: 105,
    NUM_MULTIPLY: 106,
    NUM_PLUS: 107,
    NUM_MINUS: 109,
    NUM_DELIMETER: 110,
    NUM_DIVIDE: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUM_LOCK: 144,
    SCROLL_LOCK: 145
}, EDM.namespace("helper").TokenList = function() {
    "use strict";

    function a(a) {
        return "string" != typeof a || 0 === a.length ? !1 : !a.match(c)
    }
    var b = [],
        c = /\s+/g;
    this.item = function(a) {
        var c = 0 | a;
        return b.length > c && c > 0 ? b[c] : void 0
    }, this.contains = function(a) {
        for (var c = b.length, d = 0; c > d; d++)
            if (b[d] === a) return !0;
        return !1
    }, this.add = function(c) {
        a(c) && (this.contains(c) || b.push(c))
    }, this.remove = function(a) {
        for (var c, d = b.length, e = 0; d > e; e++)
            if (b[e] === a) return c = b.slice(e + 1), b.length = e, void b.push.apply(b, c)
    }, this.toggle = function(a) {
        return this.contains(a) ? (this.remove(a), !1) : (this.add(a), !0)
    }, this.getLength = function() {
        return b.length
    }, this.toString = function() {
        return b.join(" ")
    }
}, EDM.namespace("helper").HTMLElementClassList = function(a) {
    function b(a) {
        for (var b = new EDM.helper.TokenList, c = a.className.split(/\s+/g), d = c.length, e = 0; d > e; e++) b.add(c[e]);
        return b
    }
    var c = a.classList,
        d = a;
    this.contains = function(a) {
        return c ? c.contains(a) : b(d).contains(a)
    }, this.add = function(a) {
        var e;
        return c ? c.add(a) : (e = b(d), e.add(a), void(d.className = e.toString()))
    }, this.remove = function(a) {
        var e;
        return c ? c.remove(a) : (e = b(d), e.remove(a), void(d.className = e.toString()))
    }, this.toggle = function(a) {
        var e;
        return c ? c.toggle(a) : (e = b(d), e.toggle(a), void(d.className = e.toString()))
    }
}, EDM.namespace("mixin").Observable = function() {
    var a = Array.prototype.slice;
    return {
        on: function(a, b, c) {
            var d;
            return this._events || (this._events = {}), this._events[a] || (this._events[a] = []), d = this._events[a], d.push({
                callback: b,
                context: c
            }), this
        },
        off: function(a) {
            return this._events ? a ? (delete this._events[a], this) : (this._events = {}, this) : this
        },
        trigger: function(b) {
            var c, d, e, f, g = a.call(arguments, 1);
            if (!this._events) return this;
            if (c = this._events[b])
                for (e = c.length, f = 0; e > f; f++) d = c[f], d.callback.apply(d.context, g);
            return this
        }
    }
}(), EDM.namespace("dom").Element = function(a) {
    "use strict";

    function b(a) {
        return "string" == typeof a && a.length > 0 ? a.split(d) : []
    }
    var c = a,
        d = /\s+/g,
        e = EDM.helper.HTMLElementClassList;
    this.hasClass = function(a) {
        var b = new e(c);
        return b.contains(a)
    }, this.addClass = function(a) {
        for (var d = new e(c), f = b(a), g = f.length, h = 0; g > h; h++) d.add(f[h])
    }, this.removeClass = function(a) {
        for (var d = new e(c), f = b(a), g = f.length, h = 0; g > h; h++) d.remove(f[h])
    }, this.toggleClass = function(a) {
        for (var d = new e(c), f = b(a), g = f.length, h = 0; g > h; h++) d.toggle(f[h])
    }, this.on = function(a, b) {
        return c.addEventListener ? void c.addEventListener(a, b, !1) : c.attachEvent ? void c.attachEvent("on" + a, b, !1) : void 0
    }, this.off = function(a, b) {
        return c.removeEventListener ? void c.removeEventListener(a, b, !1) : c.detachEvent ? void c.detachEvent("on" + a, b, !1) : void 0
    }, this.trigger = function(a) {}
}, EDM.namespace("ui").View = function() {
    function a(a) {
        var c, e, f;
        a = d({}, {
            tagName: this.tagName,
            className: this.className,
            attributes: this.attributes
        }, a), c = this.el = a.el || document.createElement(a.tagName), e = this.$el = new b(c);
        for (f in a.attributes) c.setAttribute(f, a.attributes[f]);
        e.addClass(a.className), this.delegateEvents(), this.initialize.apply(this, arguments)
    }
    var b = EDM.dom.Element,
        c = EDM.mixin.Observable,
        d = EDM.extend;
    return d(a.prototype, c, {
        tagName: "div",
        initialize: function() {},
        render: function() {
            return this
        },
        delegateEvents: function() {
            var a, b, c, d = this.$el,
                e = this.events;
            for (a in e) c = e[a], this[c] && (b = EDM.util.Function.bind(this[c], this), d.on(a, b))
        },
        show: function() {
            return this.$el.removeClass("hide"), this
        },
        hide: function() {
            return this.$el.addClass("hide"), this
        },
        remove: function() {
            this.el.remove()
        },
        disable: function() {
            return "undefined" != typeof this.disabled && (this.disabled = !0), this.$el.addClass("disabled"), this
        },
        enable: function() {
            return "undefined" != typeof this.disabled && (this.disabled = !1), this.$el.removeClass("disabled"), this
        }
    }), a.extend = function(a, b) {
        function c() {
            this.constructor = e
        }
        var e, f = this;
        return e = a && Object.prototype.hasOwnProperty.call(a, "constructor") ? a.constructor : function() {
            return f.apply(this, arguments)
        }, d(e, f, b), c.prototype = f.prototype, e.prototype = new c, a && d(e.prototype, a), e
    }, a
}(), EDM.fixObservable = function() {
    var a = EDM.mixin.Observable,
        b = EDM.Observable;
    a.call = a.apply = function(a) {
        a.on = this.on, a.off = this.off, a.trigger = this.trigger
    }, b && (b = {}, b.call = b.apply = function(b) {
        a.call(b)
    })
}, EDM.fixObservable();
var EDM = window.EDM || {};
EDM.jsonp = function(a) {
        "use strict";

        function b(a) {
            var b = document.createElement("script");
            return b.setAttribute("type", "text/javascript"), b.setAttribute("async", !0), b.setAttribute("src", a), b
        }
        var c = 0,
            d = document.head || document.getElementsByTagName("head")[0];
        return function(e) {
            function f() {
                m && m.parentNode.removeChild(m), clearTimeout(j), delete a[k]
            }

            function g(a) {
                "function" == typeof e.success && e.success(a)
            }

            function h(a) {
                "function" == typeof e.error && e.error(a)
            }

            function i(b) {
                f(), "timeout" === b && (a[k] = function() {}), h(b)
            }
            e = e || {};
            var j, k = "callback" + ++c,
                l = e.url + "&callback=EDM." + k + (e.cache ? "" : "&_dc=" + (new Date).getTime()),
                m = b(l);
            a[k] = function(a) {
                f(), g(a)
            }, m.onerror = function() {
                i("error")
            }, d.appendChild(m), e.timeout > 0 && (j = setTimeout(function() {
                i("timeout")
            }, e.timeout))
        }
    }(EDM),
    function() {
        if (!window.EDMUNDSAPI) throw new Error("Edmunds API: Core class is not loaded.");
        window.EDMUNDSAPI.Vehicle = function(a) {
            window.EDMUNDSAPI.apply(this, arguments)
        }, window.EDMUNDSAPI.Vehicle.prototype = new window.EDMUNDSAPI;
        var a = window.EDMUNDSAPI.Vehicle.prototype;
        a.getValidZip = function(a, b, c) {
            return this.invoke("/api/region/zip/validation/" + a, {}, b, c)
        }, a.getUpdateLocation = function(a, b, c) {
            return this.invoke("/api/region/regionrepository/findstatebyzip", {
                zip: a
            }, b, c)
        }, a.getDealersList = function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
            return this.invoke("/api/dealer", {
                makeName: a,
                model: b,
                styleid: c,
                zipcode: d,
                radius: e,
                rows: f,
                isPublic: g,
                bookName: h,
                keywords: i,
                premierOnly: j,
                invalidTiers: k
            }, l, m)
        }, a.getDependenciesList = function(a, b, c) {
            return this.invokeString("/api/configurator/withOptions?" + a, {}, b, c)
        }, a.submitLeadForm = function(a, b, c) {
            return this.invokeString("/api/dealer/lead?" + a, {}, b, c)
        }, a.getOptionsList = function(a, b, c, d, e) {
            return this.invokeString("/api/tmv/tmvservice/calculatenewtmv?" + a, {
                zip: b,
                styleid: c,
                alg: "rethink"
            }, d, e)
        }, a.getListOfMakes = function(a, b, c) {
            return this.invoke("/api/vehicle-directory-ajax/findmakes", {
                ps: a || "all"
            }, b, c)
        }, a.getListOfModelsByMake = function(a, b, c) {
            return this.invoke("/api/vehicle-directory-ajax/findmakemodels", {
                make: a
            }, b, c)
        }, a.getListOfTypes = function(a, b) {
            return this.invoke("/api/vehicle/stylerepository/findallvehicletypes", {}, a, b)
        }, a.getVehicle = function(a, b, c, d, e, f, g) {
            return this.invoke("/api/vehicle/v2/" + a + "/" + b + "/" + d + "/styles", {
                state: e,
                submodel: c
            }, f, g)
        }, a.getVehiclePhoto = function(a, b, c, d, e, f) {
            return this.invoke("/api/vehiclephoto/service/findphotobystyleid", {
                make: a,
                model: b,
                year: c,
                style: d
            }, e, f)
        }, a.getVehicleConfig = function(a, b, c, d) {
            return this.invoke("/api/configurator/default", {
                zip: b,
                styleid: a
            }, c, d)
        }, a.getMakes = function(a, b) {
            return this.invoke("/api/vehicle/makerepository/findall", {}, a, b)
        }, a.getMakesByYear = function(a, b, c) {
            return this.invoke("/api/vehicle/makerepository/findmakesbymodelyear", {
                year: a
            }, b, c)
        }, a.getMakesByState = function(a, b, c) {
            return this.invoke("/api/vehicle/makerepository/findmakesbypublicationstate", {
                state: a
            }, b, c)
        }, a.getNewMakes = function(a, b) {
            return this.invoke("/api/vehicle/makerepository/findnewmakes", {}, a, b)
        }, a.getUsedMakes = function(a, b) {
            return this.invoke("/api/vehicle/makerepository/findusedmakes", {}, a, b)
        }, a.getFutureMakes = function(a, b) {
            return this.invoke("/api/vehicle/makerepository/findfuturemakes", {}, a, b)
        }, a.getMakeById = function(a, b, c) {
            return this.invoke("/api/vehicle/makerepository/findbyid", {
                id: a
            }, b, c)
        }, a.getMakeByName = function(a, b, c) {
            return this.invoke("/api/vehicle/makerepository/findmakebyname", {
                name: a
            }, b, c)
        }, a.getModelsByMakeAndYear = function(a, b, c, d) {
            return this.invoke("/api/vehicle/modelrepository/findmodelsbymakeandyear", {
                make: a,
                year: b
            }, c, d)
        }, a.getModelsByMakeAndState = function(a, b, c, d) {
            return this.invoke("/api/vehicle/modelrepository/findmodelsbymakeandpublicationstate", {
                make: a,
                state: b
            }, c, d)
        }, a.getModelsByMakeId = function(a, b, c) {
            return this.invoke("/api/vehicle/modelrepository/findbymakeid", {
                makeid: a
            }, b, c)
        }, a.getModelsByMakeName = function(a, b, c) {
            return this.invoke("/api/vehicle/modelrepository/findmodelsbymake", {
                make: a
            }, b, c)
        }, a.getFutureModelsByMakeId = function(a, b, c) {
            return this.invoke("/api/vehicle/modelrepository/findfuturemodelsbymakeid", {
                makeId: a
            }, b, c)
        }, a.getUsedModelsByMakeId = function(a, b, c) {
            return this.invoke("/api/vehicle/modelrepository/findusedmodelsbymakeid", {
                makeId: a
            }, b, c)
        }, a.getNewModelsByMakeId = function(a, b, c) {
            return this.invoke("/api/vehicle/modelrepository/findnewmodelsbymakeid", {
                makeId: a
            }, b, c)
        }, a.getModelById = function(a, b, c) {
            return this.invoke("/api/vehicle/modelrepository/findbyid", {
                id: a
            }, b, c)
        }, a.getModelByMakeAndModelName = function(a, b, c, d) {
            return this.invoke("/api/vehicle/modelrepository/findmodelbymakemodelname", {
                make: a,
                model: b
            }, c, d)
        }, a.getModelYearById = function(a, b, c) {
            return this.invoke("/api/vehicle/modelyearrepository/findbyid", {
                id: a
            }, b, c)
        }, a.getListOfYearsWithNew = function(a, b) {
            return this.invoke("/api/vehicle/modelyearrepository/finddistinctyearwithnew", {}, a, b)
        }, a.getListOfYearsWithNewOrUsed = function(a, b) {
            return this.invoke("/api/vehicle/modelyearrepository/finddistinctyearwithneworused", {}, a, b)
        }, a.getListOfYearsWithUsed = function(a, b) {
            return this.invoke("/api/vehicle/modelyearrepository/finddistinctyearwithused", {}, a, b)
        }, a.getFutureModelYearsByModelId = function(a, b, c) {
            return this.invoke("/api/vehicle/modelyearrepository/findfuturemodelyearsbymodelid", {
                modelId: a
            }, b, c)
        }, a.getModelYearsByMakeAndYear = function(a, b, c, d) {
            return this.invoke("/api/vehicle/modelyearrepository/findmodelyearsbymakeandyear", {
                make: a,
                year: b
            }, c, d)
        }, a.getModelYearsByMakeAndModel = function(a, b, c, d) {
            return this.invoke("/api/vehicle/modelyearrepository/findmodelyearsbymakemodel", {
                make: a,
                model: b
            }, c, d)
        }, a.getNewAndUsedModelYearsByMakeIdAndYear = function(a, b, c, d) {
            return this.invoke("/api/vehicle/modelyearrepository/findnewandusedmodelyearsbymakeidandyear", {
                makeid: a,
                year: b
            }, c, d)
        }, a.getNewModelYearsByModelId = function(a, b, c) {
            return this.invoke("/api/vehicle/modelyearrepository/findnewmodelyearsbymodelid", {
                modelId: a
            }, b, c)
        }, a.getUsedModelYearsByModelId = function(a, b, c) {
            return this.invoke("/api/vehicle/modelyearrepository/findusedmodelyearsbymodelid", {
                modelId: a
            }, b, c)
        }, a.getModelYearsByCatAndState = function(a, b, c, d) {
            return this.invoke("/api/vehicle/modelyearrepository/findyearsbycategoryandpublicationstate", {
                category: a,
                state: b
            }, c, d)
        }, a.getModelYearsByModelId = function(a, b, c) {
            return this.invoke("/api/vehicle/modelyearrepository/formodelid", {
                modelid: a
            }, b, c)
        }
    }(),
    function(a) {
        "use strict";
        var b = a.EDM = a.EDM || {};
        b.Observable = function() {
                function a(a, b, c) {
                    if ("string" != typeof a || 0 === a.length) throw new Error("The event name must be a string and not be empty.");
                    if ("function" != typeof b) throw new Error("The callback must be a function.");
                    (d[a] || (d[a] = [])).push({
                        callback: b,
                        context: c
                    })
                }

                function b(a) {
                    return "string" != typeof a || 0 === a.length ? (d = {}, this) : void(d[a] = [])
                }

                function c(a) {
                    var b, c, f, g, h;
                    if (a && d[a])
                        for (b = e.call(arguments, 1), c = d[a], f = c.length, g = 0; f > g; g++) h = c[g], h.callback.apply(h.context, b)
                }
                var d = {};
                return function() {
                    return this.on = a, this.off = b, this.trigger = c, this
                }
            }(),
            function() {
                var a = b.Util = {},
                    c = Array.prototype,
                    d = Function.prototype,
                    e = Object.prototype,
                    f = e.hasOwnProperty,
                    g = d.bind,
                    h = Array.isArray,
                    i = c.indexOf,
                    j = c.slice,
                    k = e.toString;
                a.bind = function(a, b) {
                    return a.bind === g && g ? g.apply(a, j.call(arguments, 1)) : function() {
                        return a.apply(b, j.call(arguments))
                    }
                }, a.contains = function(b, c) {
                    var d, e;
                    if (!a.isArray(b)) return !1;
                    if (i && b.indexOf) return -1 !== b.indexOf(c);
                    for (d = 0, e = b.length; e > d; d++)
                        if (b[d] === c) return !0;
                    return !1
                }, a.extend = function(a) {
                    var b, c, d, e = j.call(arguments, 1),
                        g = e.length;
                    for (b = 0; g > b; b++) {
                        c = e[b];
                        for (d in c) f.call(c, d) && (a[d] = c[d])
                    }
                    return a
                }, a.isArray = h || function(a) {
                    return "[object Array]" === k.call(a)
                }, a.isEmpty = function(a) {
                    var b;
                    for (b in a)
                        if (f.call(a, b)) return !1;
                    return !0
                }, a.renderSelectOptions = function(b, c, d, e, f) {
                    var g, h, i, j, k = document.createDocumentFragment();
                    if (b.innerHTML && (b.innerHTML = ""), d && (j = document.createElement("option"), j.innerHTML = d, j.setAttribute("value", ""), b.appendChild(j)), e === !0) {
                        for (g in c) h = document.createElement("optgroup"), h.setAttribute("label", g), i = a.renderSelectOptions(h, c[g]), k.appendChild(h);
                        return b.appendChild(k), b
                    }
                    if (f === !0)
                        for (var l = 0; l < c.length; l++) j = document.createElement("option"), j.setAttribute("value", c[l][0]), j.innerHTML = c[l][1], k.appendChild(j);
                    else
                        for (g in c) j = document.createElement("option"), j.setAttribute("value", g), j.innerHTML = c[g], k.appendChild(j);
                    return b.appendChild(k), b
                }, a.renderTemplate = function(a, b, c) {
                    var d, e, f, g, h, i = c ? /\{\{\s+\w+\s+\}\}/gi : /<%=\s+\w+\s+%>/gi,
                        j = c ? /\{\{\s+|\s+\}\}/gi : /^<%=\s+|\s+%>$/gi;
                    if ("string" != typeof a) throw new Error("template must be a string");
                    if (0 === a.length || !b) return a;
                    if (b = b || {}, d = a.match(i), g = null !== d ? d.length : 0, 0 === g) return a;
                    for (f = 0; g > f; f++) e = d[f], h = e.replace(j, ""), a = a.replace(e, b[h]);
                    return a
                }
            }();
        var c, d = b.Util,
            e = Array.prototype.slice,
            f = b.Widget = function(a, b) {
                function c(a, b) {
                    if ("string" != typeof a) throw new Error("The API key must be a string.");
                    if (e = a, this.setOptions(b), f = h.baseClass || "", g = "edm" + (new Date).getTime(), i = document.getElementById(h.root), null === i) throw new Error("The root element was not found.");
                    i.className = f
                }
                var e, f, g, h, i;
                this.getApiKey = function() {
                    return e
                }, this.getBaseClass = function() {
                    return f
                }, this.getBaseId = function() {
                    return g
                }, this.getOptions = function() {
                    return d.extend({}, h)
                }, this.getRootElement = function() {
                    return i
                }, this.setOptions = function(a) {
                    h = d.extend({}, h, a)
                }, c.apply(this, arguments)
            };
        c = f.prototype, c.destroy = function() {
            var a = this.getRootElement();
            null !== a && a.remove()
        }, b.Observable.call(c)
    }(this);
