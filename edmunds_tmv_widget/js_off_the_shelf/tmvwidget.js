! function(a) {
    "use strict";
    var b = a.Util,
    c = a.TMV = function(d, e) {
        var f, g, h, i, j, k, l, m, n;
        a.Widget.apply(this, arguments), this.htmlSetup = function() {
            function a(a) {
                return function() {
                    var b = this.options ? this.options[this.selectedIndex].innerHTML : null;
                    d.trigger("change:" + a, this.value, b)
                }
            }
            var d = this,
            e = d.getBaseId(),
            o = d.getRootElement();
            this.getOptions();
            if (null === o) throw new Error("Root element was not found.");
            return o.innerHTML = b.renderTemplate(c.template, {
                                                  tmvTooltip: c.TOOLTIP_TMV,
                                                  baseId: e,
                                                  baseClass: d.getBaseClass(),
                                                  zip: this.zip || ""
                                                  }), g = document.getElementById(e + "_make"), h = document.getElementById(e + "_model"), l = document.getElementById(e + "_year"), k = document.getElementById(e + "_style"), m = document.getElementById(e + "_zip"), n = document.getElementById(e + "_zip_tooltip"), i = document.getElementById(e + "_price"), j = document.getElementById(e + "_price_inner"), f = document.getElementById(e + "_button"), g.onchange = a("make"), h.onchange = a("model"), l.onchange = a("year"), k.onchange = a("style"), m.onchange = a("zip"), m.onkeyup = a("zip"), m.onkeydown = function(a) {
                var c = [8, 27, 35, 36, 37, 38, 39, 40, 45, 46, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
                d = [96, 97, 98, 99, 100, 101, 102, 103, 104, 105],
                e = (a = a || window.event).keyCode,
                f = String.fromCharCode(e),
                g = /^\d+$/.test(f),
                h = g || 8 == e || b.contains(d, e);
                if (a.ctrlKey && 86 == e || 86 == e) return g;
                if (a.shiftKey && 45 == e) return g;
                if (!b.contains(c, e)) return h ? void 0 : g
                    }, f.onclick = function() {
                        d.trigger("calculate")
                    }, this.bindEvents(), this
        }, this.disableButton = function() {
            return f.disabled = !0, this
        }, this.enableButton = function() {
            return f.disabled = !1, this
        }, this.enableMakes = function() {
            return g.removeAttribute("disabled"), this
        }, this.enableModels = function() {
            return h.removeAttribute("disabled"), this
        }, this.enableYears = function() {
            return l.removeAttribute("disabled"), this
        }, this.enableStyles = function() {
            return k.removeAttribute("disabled"), this
        }, this.disableMakes = function() {
            return g.setAttribute("disabled", "disabled"), this
        }, this.disableModels = function() {
            return h.setAttribute("disabled", "disabled"), this
        }, this.disableYears = function() {
            return l.setAttribute("disabled", "disabled"), this
        }, this.disableStyles = function() {
            return k.setAttribute("disabled", "disabled"), this
        }, this.disableZipTooltip = function() {
            return n.style.display = "none", this
        }, this.enableZipTooltip = function() {
            return n.style.display = "block", this
        }, this.resetMakes = function(a) {
            return a = a || "List of Makes", b.renderSelectOptions(g, {}, a), g.disabled = !0, this.make = null, this.trigger("reset:make"), this
        }, this.resetModels = function(a) {
            return a = a || "List of Models", b.renderSelectOptions(h, {}, a), h.disabled = !0, this.model = null, this.models = {}, this.trigger("reset:model"), this
        }, this.resetPrice = function() {
            var a, d = this.getBaseClass(),
            e = this.getOptions(),
            f = e.price,
            g = this.showVehicles,
            h = "USED" === this.getOptions().showVehicles || "USED" === g,
            k = h ? "Dealer Retail" : "Invoice",
            l = h ? "Private Party" : "MSRP",
            m = h ? "Trade-in" : "TMV<sup>&reg;</sup>";
            switch (this.price = null, f || (f = "tmv-invoice-msrp"), f) {
                case "tmv_invoice":
                    a = "price-tmv-invoice";
                    break;
                case "tmv":
                    a = "price-tmv";
                    break;
                default:
                    a = "price-tmv-invoice-msrp"
            }
            return h ? (i.className = d + "-price" + (this.getApiKey() ? "" : " disabled"), j.innerHTML = b.renderTemplate(c.graphPriceTemplate, {
                                                                                                                           priceClass: a,
                                                                                                                           baseClass: d,
                                                                                                                           showVehicles: this.getOptions().showVehicles,
                                                                                                                           less: "---",
                                                                                                                           more: "---",
                                                                                                                           tmvMin: "---",
                                                                                                                           tmvMax: "---",
                                                                                                                           isLess: "invalid",
                                                                                                                           isMore: "invalid",
                                                                                                                           isTmv: "invalid",
                                                                                                                           isRangeMin: "invalid",
                                                                                                                           isRangeMax: "invalid",
                                                                                                                           lessLabel: k,
                                                                                                                           moreLabel: l,
                                                                                                                           tmvLabel: m,
                                                                                                                           lessTooltip: c.TOOLTIP_INVOICE,
                                                                                                                           moreTooltip: c.TOOLTIP_MSRP,
                                                                                                                           tmvTooltip: ""
                                                                                                                           })) : (i.className = d + "-price" + (this.getApiKey() ? "" : " disabled"), j.innerHTML = b.renderTemplate(c.textPriceTemplate, {
                                                                                                                                                                                                                                     priceClass: a,
                                                                                                                                                                                                                                     baseClass: d,
                                                                                                                                                                                                                                     showVehicles: this.getOptions().showVehicles,
                                                                                                                                                                                                                                     less: "---",
                                                                                                                                                                                                                                     more: "---",
                                                                                                                                                                                                                                     tmv: "---",
                                                                                                                                                                                                                                     isLess: "invalid",
                                                                                                                                                                                                                                     isMore: "invalid",
                                                                                                                                                                                                                                     isTmv: "invalid",
                                                                                                                                                                                                                                     lessLabel: k,
                                                                                                                                                                                                                                     moreLabel: l,
                                                                                                                                                                                                                                     tmvLabel: m,
                                                                                                                                                                                                                                     lessTooltip: c.TOOLTIP_INVOICE,
                                                                                                                                                                                                                                     moreTooltip: c.TOOLTIP_MSRP,
                                                                                                                                                                                                                                     tmvTooltip: ""
                                                                                                                                                                                                                                     })), this.trigger("reset:price"), this
        }, this.resetStyles = function(a) {
            return a = a || "List of Styles", b.renderSelectOptions(k, {}, a), k.disabled = !0, this.disableButton(), this.style = null, this.trigger("reset:style"), this
        }, this.resetYears = function(a) {
            return a = a || "Year", b.renderSelectOptions(l, {}, a), l.disabled = !0, this.year = null, this.trigger("reset:year"), this
        }, this.setMakes = function(a) {
            return b.isEmpty(a) ? this.resetMakes("Makes not found") : (b.renderSelectOptions(g, a, "Select a Make"), g.disabled = !1, this)
        }, this.setModels = function(a) {
            return b.isEmpty(a) ? this.resetModels("Models not found") : (b.renderSelectOptions(h, a, "Select a Model", !1, !0), h.disabled = !1, this)
        }, this.setPrice = function(a) {
            var d, e = this.getOptions(),
            f = e.price,
            g = /(?=(?:\d{3})+(?:\.|$))/g,
            h = a.less,
            k = a.more,
            l = a.rangeMin ? a.rangeMin.toString().split(g).join(",") : "N/A",
            m = a.rangeMax ? a.rangeMax.toString().split(g).join(",") : "N/A",
            n = this.showVehicles,
            o = "USED" === this.getOptions().showVehicles || "USED" === n,
            p = a.tmv,
            q = h ? h.toString().split(g).join(",") : "N/A",
            r = k ? k.toString().split(g).join(",") : "N/A",
            s = p ? p.toString().split(g).join(",") : "N/A";
            switch (f || (f = "tmv-invoice-msrp"), f) {
                case "tmv_invoice":
                    d = "price-tmv-invoice";
                    break;
                case "tmv":
                    d = "price-tmv";
                    break;
                default:
                    d = "price-tmv-invoice-msrp"
            }
            o ? (i.className = this.getBaseClass() + "-price", j.innerHTML = b.renderTemplate(c.graphPriceTemplate, {
                                                                                              priceClass: d,
                                                                                              baseClass: this.getBaseClass(),
                                                                                              showVehicles: this.getOptions().showVehicles,
                                                                                              less: q,
                                                                                              more: r,
                                                                                              tmvMin: l,
                                                                                              tmvMax: m,
                                                                                              isLess: h ? "valid" : "invalid",
                                                                                              isMore: k ? "valid" : "invalid",
                                                                                              isTmv: p ? "valid" : "invalid",
                                                                                              isRangeMin: a.rangeMin ? "valid" : "invalid",
                                                                                              isRangeMax: a.rangeMax ? "valid" : "invalid",
                                                                                              lessLabel: a.lessLabel,
                                                                                              moreLabel: a.moreLabel,
                                                                                              tmvLabel: a.tmvLabel,
                                                                                              headerToolTip: a.headerToolTip,
                                                                                              lessTooltip: a.lessTooltip,
                                                                                              moreTooltip: a.moreTooltip,
                                                                                              tmvTooltipMin: a.tmvTooltipMin,
                                                                                              tmvTooltipMax: a.tmvTooltipMax
                                                                                              })) : (i.className = this.getBaseClass() + "-price", j.innerHTML = b.renderTemplate(c.textPriceTemplate, {
                                                                                                                                                                                  priceClass: d,
                                                                                                                                                                                  baseClass: this.getBaseClass(),
                                                                                                                                                                                  showVehicles: a.showVehicles,
                                                                                                                                                                                  less: q,
                                                                                                                                                                                  more: r,
                                                                                                                                                                                  tmv: s,
                                                                                                                                                                                  isLess: h ? "valid" : "invalid",
                                                                                                                                                                                  isMore: k ? "valid" : "invalid",
                                                                                                                                                                                  isTmv: p ? "valid" : "invalid",
                                                                                                                                                                                  lessLabel: a.lessLabel,
                                                                                                                                                                                  moreLabel: a.moreLabel,
                                                                                                                                                                                  tmvLabel: a.tmvLabel,
                                                                                                                                                                                  headerToolTip: a.headerToolTip,
                                                                                                                                                                                  lessTooltip: a.lessTooltip,
                                                                                                                                                                                  moreTooltip: a.moreTooltip,
                                                                                                                                                                                  tmvTooltip: a.tmvTooltip
                                                                                                                                                                                  }))
        }, this.setStyles = function(a) {
            return b.isEmpty(a) ? this.resetStyles("Styles not found") : (b.renderSelectOptions(k, a, "Select a Style", !1, !0), k.disabled = !1, this)
        }, this.setYears = function(a) {
            var c = this.getOptions().showVehicles,
            d = !c || "ALL" === c;
            return d && a.length > 0 || !d && b.isEmpty(a) ? this.resetYears("Years not found") : (b.renderSelectOptions(l, a, "Year", d), l.disabled = !1, this)
        }, this.showError = function(b) {
            var c = this.getRootElement(),
            d = new a.nvc.MessageDialog;
            c.appendChild(d.render({
                                   isSuccess: !1,
                                   text: b || ["<p>Something went wrong!</p>", '<p>Please return and try again or <a href="Mailto:api@edmunds.com">contact us</a> directly.</p>'].join("")
                                   }).el), d.init()
        }
    },
    d = c.prototype;
    b.extend(c.prototype, a.Widget.prototype), d.bindEvents = function() {
        return this.off(), this.on("change:make", this.onMakeChange, this), this.on("change:model", this.onModelChange, this), this.on("change:year", this.onYearChange, this), this.on("change:style", this.onStyleChange, this), this.on("change:zip", this.onZipChange, this), this.on("reset:make", this.resetModels, this), this.on("reset:model", this.resetYears, this), this.on("reset:year", this.resetStyles, this), this.on("reset:style", this.resetPrice, this), this.on("calculate", this.loadPrice, this), this.trackEvents(), this
    }, d.trackEvents = function() {
        function a(a, b, c, d, e) {
            _gaq.push(["_trackEvent", a, b, c, d, e])
        }
        this.on("init", function() {
                a("Widgets", "TMV Simple", "A simple TMV widget")
                }), this.on("change:make", function(b) {
                            b && a("Makes", b, "A make was selected")
                            }), this.on("change:model", function(b) {
                                        b && a("Models", b, "A model was selected")
                                        }), this.on("change:year", function(b) {
                                                    b && a("Years", b, "A year was selected")
                                                    }), this.on("change:style", function(b) {
                                                                b && a("Styles", b, "A style was selected")
                                                                }), this.on("change:zip", function(b) {
                                                                            b && a("ZIP", b, "A ZIP code was changed")
                                                                            }), this.on("calculate", function() {
                                                                                        a("TVM", "Click", "Pricing Info was requested")
                                                                                        }), this.on("load:price", function() {
                                                                                                    a("TVM", "Received", "Pricing Info was received")
                                                                                                    })
    }, d.init = function(a) {
        return a = a || {}, this.setOptions(a), this.vehiclesApi = new EDMUNDSAPI.Vehicle(this.getApiKey()), this.zip = a.zip || "", this.trigger("init"), this
    }, d.render = function() {
        var a = this.getOptions();
        return this.htmlSetup(), this.trigger("render"), this.getApiKey() ? (this.loadMakes(String(a.showVehicles).toLowerCase()), this) : this.resetMakes()
    }, d.loadMakes = function(a) {
        var c = b.bind(this.onMakesLoad, this),
        d = b.bind(this.onMakesLoadError, this);
        return this.resetMakes("Loading Makes..."), this.vehiclesApi.getListOfMakes(a, c, d), this
    }, d.loadZip = function(a) {
        var c = b.bind(this.onZipLoad, this),
        d = b.bind(this.onZipLoadError, this);
        return this.vehiclesApi.getValidZip(a, c, d), this
    }, d.loadModels = function(a) {
        var c = b.bind(this.onModelsLoad, this),
        d = b.bind(this.onModelsLoadError, this);
        return this.disableMakes(), this.vehiclesApi.getListOfModelsByMake(a, c, d), this
    }, d.loadPrice = function() {
        var a = "NEW" === this.showVehicles,
        c = a ? "calculatenewtmv" : "calculatetypicallyequippedusedtmv",
        d = "/api/tmv/tmvservice/" + c,
        e = a ? b.bind(this.onPriceLoad, this) : b.bind(this.loadRangeMin, this),
        f = b.bind(this.onPriceLoadError, this),
        g = {
        alg: "rethink",
        styleid: this.style,
        zip: this.zip
        };
        return this.disableButton(), this.resetPrice(), this.vehiclesApi.invoke(d, g, e, f), this
    }, d.loadRangeMin = function(a) {
        var c = "/api/tmv/tmvservice/calculateusedtmv",
        d = b.bind(this.loadRangeMax, this),
        e = {
        alg: "rethink",
        styleid: this.style,
        zip: this.zip,
        condition: "ROUGH",
        mileage: 5e4
        };
        return this.price = this.parsePrice(a), this.vehiclesApi.invoke(c, e, d), this
    }, d.loadRangeMax = function(a) {
        var c = "/api/tmv/tmvservice/calculateusedtmv",
        d = b.bind(this.onPriceLoad, this),
        e = {
        alg: "rethink",
        styleid: this.style,
        zip: this.zip,
        condition: "OUTSTANDING",
        mileage: 15e3
        };
        return this.price.rangeMin = this.parsePriceRangeMin(a), this.vehiclesApi.invoke(c, e, d), this
    }, d.loadStyles = function(a, c, d, e, f) {
        var g = b.bind(this.onStylesLoad, this),
        h = b.bind(this.onStylesLoadError, this);
        return this.disableMakes(), this.disableModels(), this.disableYears(), this.vehiclesApi.getVehicle(a, c, d, e, f, g, h), this
    }, d.onMakeChange = function(a) {
        return this.make = a, a ? (this.resetModels("Loading Models..."), this.loadModels(a), this) : void this.resetModels()
    }, d.onModelChange = function(a) {
        var b, c;
        return a ? (b = a.substring(0, a.indexOf(":")), c = this.parseYears(this.models[a], this.getOptions().showVehicles), this.model = b, this.submodel = a.substring(a.indexOf(":") + 1), this.resetYears(), this.setYears(c), 
            this.trigger("load:years", a), /* Forrest fixed this. */
            this) : void this.resetYears()
    }, d.onStyleChange = function(a) {
        if (this.style = a, !a) return this.resetPrice(), void this.disableButton();
        this.resetPrice();
        var b = /[0-9]{5}/.test(this.zip);
        return b && this.enableButton(), this
    }, d.onYearChange = function(a) {
        return this.year = a, this.showVehicles = a && a.substr && a.substr(4) || null, a ? (this.resetStyles("Loading Styles..."), this.loadStyles(this.make, this.model, this.submodel, parseInt(a, 10), this.showVehicles), this) : void this.resetStyles()
    }, d.onZipChange = function(a) {
        var b = /[0-9]{5}/.test(a);
        return this.zip = a, b ? this.loadZip(a) : (this.disableButton(), this.enableZipTooltip()), this
    }, d.onZipLoad = function(a) {
        var b = this.zip,
        c = "true" === a[b] ? !0 : !1;
        return this[c ? "disableZipTooltip" : "enableZipTooltip"](), this[c && this.style ? "enableButton" : "disableButton"](), this
    }, d.onMakesLoad = function(a) {
        var b = this.parseMakes(a);
        return a.error ? (this.resetMakes("Makes not found"), this.showError(), this) : (this.setMakes(b), this.trigger("load:makes", a), this)
    }, d.onModelsLoad = function(a) {
        var b = this.parseModels(a);
        return this.enableMakes(), a.error ? (this.resetModels("Models not found"), this.showError(), this) : (this.models = a.models, this.setModels(b), this.trigger("load:models", a), this)
    }, d.onPriceLoad = function(a) {
        var b = "NEW" === this.showVehicles;
        return b ? this.price = this.parsePrice(a) : this.price.rangeMax = this.parsePriceRangeMax(a), this.setPrice(this.price), this.enableButton(), this.trigger("load:price", a, this.price), this
    }, d.onStylesLoad = function(a) {
        var b = this.parseStyles(a);
        return this.enableMakes(), this.enableModels(), this.enableYears(), a.error ? (this.resetStyles("Styles not found"), this.showError(), this) : (this.setStyles(b), this.trigger("load:styles", a), this)
    }, d.onYearsLoad = function(a) {
        var b = this.parseYears(a);
        return this.setYears(b), this.trigger("load:years", a), this
    }, d.onMakesLoadError = function() {
        this.resetMakes("Makes not found"), this.showError()
    }, d.onModelsLoadError = function() {
        this.resetModels("Models not found"), this.showError()
    }, d.onStylesLoadError = function() {
        this.resetStyles("Styles not found"), this.showError()
    }, d.onZipLoadError = function() {
        this.showError()
    }, d.onPriceLoadError = function() {
        this.onPriceLoad({})
    }, d.parseMakes = function(a) {
        var c, d, e = {},
        f = a.makes,
        g = this.getOptions().includedMakes,
        h = "string" == typeof g ? g.split(",") : [],
        i = "all" === g;
        for (c in f) d = f[c], (i || b.contains(h, d.niceName)) && (e[d.niceName] = d.name);
        return e
    }, d.parseModels = function(a) {
        function b(a, b) {
            var c = !1,
            d = !!a.NEW,
            e = !!a.USED;
            switch (b) {
                case "NEW":
                    c = d;
                    break;
                case "USED":
                    c = e;
                    break;
                default:
                    c = d || e
            }
            return c
        }
        
        function c(a) {
            var b = [];
            for (var c in a) b.push([c, a[c]]);
            return b.sort(function(a, b) {
                          return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0
                          }), b
        }
        
        function d(a, c) {
            var d, e, f = {};
            for (d in a) e = a[d], b(e.years, c) && (f[d] = e.name);
            return f
        }
        var e = a.models,
        f = this.getOptions().showVehicles;
        return c("USED" === f || "NEW" === f ? d(e, f) : d(e))
    }, d.parsePrice = function(a) {
        var b;
        return b = ((a || {}).tmv || {}).totalWithOptions || {}, "USED" === this.showVehicles ? {
        showVehicles: this.showVehicles,
        less: b.usedTmvRetail,
        more: b.usedPrivateParty,
        tmv: b.usedTradeIn,
        lessLabel: "Dealer Retail",
        moreLabel: "Private Party",
        tmvLabel: "Trade-in",
        lessTooltip: c.TOOLTIP_TMVRETAIL,
        moreTooltip: c.TOOLTIP_PRIVATEPARTY,
        tmvTooltipMin: c.TOOLTIP_TRADEIN_MIN,
        tmvTooltipMax: c.TOOLTIP_TRADEIN_MAX
        } : {
        showVehicles: this.showVehicles,
        less: b.baseInvoice,
        more: b.baseMSRP,
        tmv: b.tmv,
        lessLabel: "Invoice",
        moreLabel: "MSRP",
        tmvLabel: "TMV<sup>&reg;</sup>",
        lessTooltip: c.TOOLTIP_INVOICE,
        moreTooltip: c.TOOLTIP_MSRP,
        tmvTooltip: ""
        }
    }, d.parsePriceRangeMin = function(a) {
        var b, c;
        return b = ((a || {}).tmv || {}).totalWithOptions || {}, c = b.usedTradeIn
    }, d.parsePriceRangeMax = function(a) {
        var b, c;
        return b = ((a || {}).tmv || {}).totalWithOptions || {}, c = b.usedTradeIn
    }, d.parseStyles = function(a) {
        function b(a) {
            var b = [];
            for (var c in a) b.push([c, a[c]]);
            return b.sort(function(a, b) {
                          return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0
                          }), b
        }
        var c, d, e = {},
        f = a.styles,
        g = f.length;
        for (c = 0; g > c; c++) d = f[c], e[d.id] = d.name;
        return b(e)
    }, d.parseYears = function(a, c) {
        function d(a, c) {
            var d, e, f, g = {};
            for (a = b.isArray(a) ? a : [], d = a.length, e = 0; d > e; e++) f = a[e], g[f + c] = f;
            return g
        }
        var e = {},
        f = a.years;
        if ("USED" === c || "NEW" === c) return d(f[c], c);
        for (c in f)("USED" === c || "NEW" === c) && (e[c] = d(f[c], c));
        return e
    }, c.template = ['<div class="<%= baseClass %>-inner">', '<div class="<%= baseClass %>-header">', '<span class="title">True Market Value<sup>&reg;</sup></span><span class="question" onclick=""><sup>?</sup><div class="tmvwidget-tooltip"><div class="arrow-left"></div><%= tmvTooltip %></div></span>', "</div>", '<div class="<%= baseClass %>-body">', '<select class="<%= baseClass %>-make" id="<%= baseId %>_make" title="List of Makes"></select>', '<select class="<%= baseClass %>-model" id="<%= baseId %>_model" title="List of Models"></select>', '<select class="<%= baseClass %>-year" id="<%= baseId %>_year" title="List of Years"></select>', '<select class="<%= baseClass %>-style" id="<%= baseId %>_style" title="List of Styles"></select>', '<div class="<%= baseClass %>-row">', '<div class="zip-code"><input type="text" class="<%= baseClass %>-zip" id="<%= baseId %>_zip" value="<%= zip %>" placeholder="ZIP" title="ZIP Code" maxlength="5"><div id="<%= baseId %>_zip_tooltip" class="tmvwidget-tooltip"><div class="arrow-left"></div>Please enter a valid Zip Code</div></div>', '<button type="button" id="<%= baseId %>_button">Get Price</button>', "", "</div>", "</div>", '<div class="<%= baseClass %>-price" id="<%= baseId %>_price">', "<div>", '<div class="" id="<%= baseId %>_price_inner"></div>', "</div>", "</div>", '<div class="<%= baseClass %>-footer">', '<a href="http://developer.edmunds.com/tmv_widget_terms" class="copy" target="_blank">Legal Notice</a>', '<div class="logo">Built by<a href="http://www.edmunds.com/" target="_blank"></a></div>', "</div>", "</div>"].join(""), c.graphPriceTemplate = ['<div class="<%= baseClass %>-price-range">', '<div class="top">', '<div class="left">', '<div class="label">Trade-in</div>', "</div>", '<div class="right">', '<div class="values">', '<span class="left value <%= isRangeMin %>" onclick=""><sup>$</sup><%= tmvMin %><div class="tmvwidget-tooltip"><div class="arrow-left"></div><%= tmvTooltipMin %></div></span>', '<span class="right value <%= isRangeMax %>" onclick=""><sup>$</sup><%= tmvMax %><div class="tmvwidget-tooltip"><div class="arrow-left"></div><%= tmvTooltipMax %></div></span>', "</div>", '<div class="pointers">', '<div class="graph">', '<div class="left-part"></div>', '<div class="right-part"></div>', "</div>", '<div class="left"></div>', '<div class="right"></div>', "</div>", '<div class="note">based on mileage & condition adjustments</div>', "</div>", "</div>", '<div class="bottom">', '<div class="left">', '<span class="label"><%= lessLabel %></span>', '<span class="value <%= isLess %>" onclick=""><sup>$</sup><%= less %><div class="tmvwidget-tooltip"><div class="arrow-left"></div><%= lessTooltip %></div></span>', "</div>", '<div class="right">', '<span class="label"><%= moreLabel %></span>', '<span class="value <%= isMore %>" onclick=""><sup>$</sup><%= more %><div class="tmvwidget-tooltip"><div class="arrow-left"></div><%= moreTooltip %></div></span>', "</div>", "</div>", "</div>"].join(""), c.textPriceTemplate = ['<div class="<%= baseClass %>-price-text <%= showVehicles %> <%= priceClass %>">', '<div class="labels">', '<div class="top">', '<span class="label"><%= tmvLabel %></span>', '<span class="value <%= isTmv %>" onclick=""><sup>$</sup><%= tmv %><div class="tmvwidget-tooltip"><div class="arrow-left"></div><%= tmvTooltip %></div></span>', "</div>", '<div class="bottom">', '<div class="right">', '<span class="label"><%= moreLabel %></span>', '<span class="value <%= isMore %>" onclick=""><sup>$</sup><%= more %><div class="tmvwidget-tooltip"><div class="arrow-left"></div><%= moreTooltip %></div></span>', "</div>", '<div class="left">', '<span class="label"><%= lessLabel %></span>', '<span class="value <%= isLess %>" onclick=""><sup>$</sup><%= less %><div class="tmvwidget-tooltip"><div class="arrow-left"></div><%= lessTooltip %></div></span>', "</div>", "</div>", "</div>", "</div>"].join(""), c.TOOLTIP_TMV = "The Edmunds.com TMV® (Edmunds.com True Market Value®) price is Edmunds.com’s determination of the current average base dealer price in the area indicated by the Zip Code provided, unadjusted for vehicle color or any options. (Or, for used vehicles, condition and mileage.)", c.TOOLTIP_INVOICE = "This is the price the dealer paid the manufacturer for the car, including destination charges.", c.TOOLTIP_MSRP = "Also known as Manufacturer’s Suggested Retail Price, this is the price the manufacturer recommends selling the car for – and often the starting point for negotiations with the dealer. Most consumers end up purchasing their car for less than MSRP.", c.TOOLTIP_TRADEIN_MIN = "This is the amount you can expect to receive when you trade in this vehicle and purchase a new one. This trade-in price is adjusted for 50,000 miles and a ROUGH condition. Vehicle color and options are unadjusted for.", c.TOOLTIP_TRADEIN_MAX = "This is the amount you can expect to receive when you trade in this vehicle and purchase a new one. This trade-in price is adjusted for 15,000 miles and an OUTSTANDING condition. Vehicle color and options are unadjusted for.", c.TOOLTIP_PRIVATEPARTY = "This is the amount at which the car is sold to or purchased by a private party, not a car dealer. This price is adjusted to CLEAN condition plus typically equipped options.", c.TOOLTIP_TMVRETAIL = "This is what other customers have paid for a similar car in your area. This dealer price is adjusted to CLEAN condition plus typically equipped options.", window._gaq = window._gaq || [], _gaq.push(["_setAccount", "UA-24637375-1"]), _gaq.push(["_setDomainName", window.location.host]), _gaq.push(["_trackPageview"]),
    function() {
        var a = document.createElement("script");
        a.type = "text/javascript", a.async = !0, a.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    }()
}(window.EDM), EDM.namespace("nvc").MessageDialog = function() {
    function a() {
        b.call(this), this.el = document.createElement("div"), this.el.className = "nvcwidget-overlay", this.template = c(this.template)
    }
    var b = EDM.mixin.Observable,
    c = EDM.template;
    return a.prototype = {
    render: function(a) {
        return a = a || {}, a.text || (a.text = ["<p>Something went wrong when sending your form!</p>", '<p>Please return to the form and try again or <a href="Mailto:api@edmunds.com">contact</a> us directly.</p>'].join("")), this.el.innerHTML = '<div class="overlay-bg"></div>', this.isSuccess = a.isSuccess, this.message = document.createElement("div"), this.message.className = "nvcwidget-message", this.message.innerHTML = this.template({
                                                                                                                                                                                                                                                                                                                                                                                                                                                         options: a
                                                                                                                                                                                                                                                                                                                                                                                                                                                         }), this.message.className += a.isSuccess ? " success-message" : " failure-message", this.el.appendChild(this.message), this
    },
    setMargin: function() {
        var a = this.message.offsetHeight;
        this.message.style.marginTop = -a / 2 + "px"
    },
    init: function() {
        var a = this.el.getElementsByTagName("button")[0];
        this.setMargin(), a.onclick = function(a) {
            return function() {
                a.isSuccess === !0 && a.trigger("reset"), a.el.parentNode.removeChild(a.el)
            }
        }(this)
    },
    template: ["<% if (options.isSuccess === true) { %>", '<div class="message-header">Thank you!</div>', '<div class="message-body">', "<p>We have sent your request for a price quote on the</p>", '<p class="name"><%= options.name%></p>', "<p>to the following dealer(s)</p>", "<ul>", "<% for (var i = 0, length = options.dealers.length; i < length; i++) { %>", "<li>-&nbsp;<%= options.dealers[i] %></li>", "<% } %>", "</ul>", "</div>", '<div class="message-bottom">', '<button type="reset" id="continue_button">Configure another vehicle</button>', "</div>", "<% } else { %>", '<div class="message-header">Oh no...</div>', '<div class="message-body">', "<%= options.text %>", "</div>", '<div class="message-bottom">', '<button type="button">Return and try again</button>', "</div>", "<% } %>"].join("")
    }, a
}();
