!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e(
        require('core-js/modules/es.symbol'),
        require('core-js/modules/es.symbol.description'),
        require('core-js/modules/es.symbol.iterator'),
        require('core-js/modules/es.array.concat'),
        require('core-js/modules/es.array.for-each'),
        require('core-js/modules/es.array.index-of'),
        require('core-js/modules/es.array.iterator'),
        require('core-js/modules/es.array.reduce'),
        require('core-js/modules/es.map'),
        require('core-js/modules/es.object.to-string'),
        require('core-js/modules/es.regexp.exec'),
        require('core-js/modules/es.string.iterator'),
        require('core-js/modules/es.string.split'),
        require('core-js/modules/web.dom-collections.for-each'),
        require('core-js/modules/web.dom-collections.iterator')
      ))
    : 'function' == typeof define && define.amd
    ? define(
        [
          'core-js/modules/es.symbol',
          'core-js/modules/es.symbol.description',
          'core-js/modules/es.symbol.iterator',
          'core-js/modules/es.array.concat',
          'core-js/modules/es.array.for-each',
          'core-js/modules/es.array.index-of',
          'core-js/modules/es.array.iterator',
          'core-js/modules/es.array.reduce',
          'core-js/modules/es.map',
          'core-js/modules/es.object.to-string',
          'core-js/modules/es.regexp.exec',
          'core-js/modules/es.string.iterator',
          'core-js/modules/es.string.split',
          'core-js/modules/web.dom-collections.for-each',
          'core-js/modules/web.dom-collections.iterator',
        ],
        e
      )
    : ((t = t || self).ARWebControl = e());
})(this, function () {
  'use strict';
  function t(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var e = t(function (t) {
      var e = (t.exports =
        'undefined' != typeof window && window.Math == Math ? window : 'undefined' != typeof self && self.Math == Math ? self : Function('return this')());
      'number' == typeof __g && (__g = e);
    }),
    o = Object.freeze({ __proto__: null, default: e, __moduleExports: e }),
    n = t(function (t) {
      var e = (t.exports = { version: '2.6.11' });
      'number' == typeof __e && (__e = e);
    }),
    i = n.version,
    r = Object.freeze({ __proto__: null, default: n, __moduleExports: n, version: i }),
    s = function (t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t;
    },
    c = Object.freeze({ __proto__: null, default: s, __moduleExports: s }),
    a = (c && s) || c,
    u = function (t) {
      if (!a(t)) throw TypeError(t + ' is not an object!');
      return t;
    },
    l = Object.freeze({ __proto__: null, default: u, __moduleExports: u }),
    d = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    f = Object.freeze({ __proto__: null, default: d, __moduleExports: d }),
    p = (f && d) || f,
    _ = !p(function () {
      return (
        7 !=
        Object.defineProperty({}, 'a', {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
    h = Object.freeze({ __proto__: null, default: _, __moduleExports: _ }),
    w = (o && e) || o,
    m = w.document,
    y = a(m) && a(m.createElement),
    v = function (t) {
      return y ? m.createElement(t) : {};
    },
    g = Object.freeze({ __proto__: null, default: v, __moduleExports: v }),
    S = (h && _) || h,
    b = (g && v) || g,
    E =
      !S &&
      !p(function () {
        return (
          7 !=
          Object.defineProperty(b('div'), 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    j = Object.freeze({ __proto__: null, default: E, __moduleExports: E }),
    C = function (t, e) {
      if (!a(t)) return t;
      var o, n;
      if (e && 'function' == typeof (o = t.toString) && !a((n = o.call(t)))) return n;
      if ('function' == typeof (o = t.valueOf) && !a((n = o.call(t)))) return n;
      if (!e && 'function' == typeof (o = t.toString) && !a((n = o.call(t)))) return n;
      throw TypeError("Can't convert object to primitive value");
    },
    x = Object.freeze({ __proto__: null, default: C, __moduleExports: C }),
    O = (l && u) || l,
    W = (j && E) || j,
    P = (x && C) || x,
    I = Object.defineProperty,
    k = S
      ? Object.defineProperty
      : function (t, e, o) {
          if ((O(t), (e = P(e, !0)), O(o), W))
            try {
              return I(t, e, o);
            } catch (t) {}
          if ('get' in o || 'set' in o) throw TypeError('Accessors not supported!');
          return 'value' in o && (t[e] = o.value), t;
        },
    D = { f: k },
    V = Object.freeze({ __proto__: null, default: D, __moduleExports: D, f: k }),
    N = function (t, e) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
    },
    A = Object.freeze({ __proto__: null, default: N, __moduleExports: N }),
    T = (V && D) || V,
    R = (A && N) || A,
    z = S
      ? function (t, e, o) {
          return T.f(t, e, R(1, o));
        }
      : function (t, e, o) {
          return (t[e] = o), t;
        },
    L = Object.freeze({ __proto__: null, default: z, __moduleExports: z }),
    B = {}.hasOwnProperty,
    H = function (t, e) {
      return B.call(t, e);
    },
    F = Object.freeze({ __proto__: null, default: H, __moduleExports: H }),
    M = 0,
    q = Math.random(),
    J = function (t) {
      return 'Symbol('.concat(void 0 === t ? '' : t, ')_', (++M + q).toString(36));
    },
    U = Object.freeze({ __proto__: null, default: J, __moduleExports: J }),
    G = Object.freeze({ __proto__: null, default: !1, __moduleExports: !1 }),
    K = (r && n) || r,
    X = G,
    Y = t(function (t) {
      var e = w['__core-js_shared__'] || (w['__core-js_shared__'] = {});
      (t.exports = function (t, o) {
        return e[t] || (e[t] = void 0 !== o ? o : {});
      })('versions', []).push({ version: K.version, mode: X ? 'pure' : 'global', copyright: '© 2019 Denis Pushkarev (zloirock.ru)' });
    }),
    Q = Object.freeze({ __proto__: null, default: Y, __moduleExports: Y }),
    Z = ((Q && Y) || Q)('native-function-to-string', Function.toString),
    $ = Object.freeze({ __proto__: null, default: Z, __moduleExports: Z }),
    tt = (L && z) || L,
    et = (F && H) || F,
    ot = (U && J) || U,
    nt = ($ && Z) || $,
    it = t(function (t) {
      var e = ot('src'),
        o = ('' + nt).split('toString');
      (K.inspectSource = function (t) {
        return nt.call(t);
      }),
        (t.exports = function (t, n, i, r) {
          var s = 'function' == typeof i;
          s && (et(i, 'name') || tt(i, 'name', n)),
            t[n] !== i &&
              (s && (et(i, e) || tt(i, e, t[n] ? '' + t[n] : o.join(String(n)))),
              t === w ? (t[n] = i) : r ? (t[n] ? (t[n] = i) : tt(t, n, i)) : (delete t[n], tt(t, n, i)));
        })(Function.prototype, 'toString', function () {
          return ('function' == typeof this && this[e]) || nt.call(this);
        });
    }),
    rt = Object.freeze({ __proto__: null, default: it, __moduleExports: it }),
    st = function (t) {
      if ('function' != typeof t) throw TypeError(t + ' is not a function!');
      return t;
    },
    ct = Object.freeze({ __proto__: null, default: st, __moduleExports: st }),
    at = (ct && st) || ct,
    ut = function (t, e, o) {
      if ((at(t), void 0 === e)) return t;
      switch (o) {
        case 1:
          return function (o) {
            return t.call(e, o);
          };
        case 2:
          return function (o, n) {
            return t.call(e, o, n);
          };
        case 3:
          return function (o, n, i) {
            return t.call(e, o, n, i);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    },
    lt = Object.freeze({ __proto__: null, default: ut, __moduleExports: ut }),
    dt = (rt && it) || rt,
    ft = (lt && ut) || lt,
    pt = function (t, e, o) {
      var n,
        i,
        r,
        s,
        c = t & pt.F,
        a = t & pt.G,
        u = t & pt.S,
        l = t & pt.P,
        d = t & pt.B,
        f = a ? w : u ? w[e] || (w[e] = {}) : (w[e] || {}).prototype,
        p = a ? K : K[e] || (K[e] = {}),
        _ = p.prototype || (p.prototype = {});
      for (n in (a && (o = e), o))
        (r = ((i = !c && f && void 0 !== f[n]) ? f : o)[n]),
          (s = d && i ? ft(r, w) : l && 'function' == typeof r ? ft(Function.call, r) : r),
          f && dt(f, n, r, t & pt.U),
          p[n] != r && tt(p, n, s),
          l && _[n] != r && (_[n] = r);
    };
  (w.core = K), (pt.F = 1), (pt.G = 2), (pt.S = 4), (pt.P = 8), (pt.B = 16), (pt.W = 32), (pt.U = 64), (pt.R = 128);
  var _t = pt,
    ht = Object.freeze({ __proto__: null, default: _t, __moduleExports: _t }),
    wt = w.navigator,
    mt = (wt && wt.userAgent) || '',
    yt = Object.freeze({ __proto__: null, default: mt, __moduleExports: mt }),
    vt = (ht && _t) || ht,
    gt = [].slice,
    St = /MSIE .\./.test((yt && mt) || yt),
    bt = function (t) {
      return function (e, o) {
        var n = arguments.length > 2,
          i = !!n && gt.call(arguments, 2);
        return t(
          n
            ? function () {
                ('function' == typeof e ? e : Function(e)).apply(this, i);
              }
            : e,
          o
        );
      };
    };
  function Et(t, e) {
    for (var o = 0; o < e.length; o++) {
      var n = e[o];
      (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
  }
  vt(vt.G + vt.B + vt.F * St, { setTimeout: bt(w.setTimeout), setInterval: bt(w.setInterval) });
  var jt = 'ws://127.0.0.1',
    Ct = (function () {
      function t(e, o, n, i, r, s) {
        var c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : '',
          a = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : '8888',
          u = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : '0';
        if (
          ((function (t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          })(this, t),
          (this.dom = document.getElementById(e)),
          this.dom)
        ) {
          (this.arClosing = !1), (this.dom.innerHTML = ''), (this.arStartedFlag = !1), (this.arControlVisibility = !1), (this.arDivVisibility = !0);
          var l = this._getDomPosition(),
            d = l.left,
            f = l.top,
            p = l.width,
            _ = l.height;
          this.controlSetupDom = document.createElement('a');
          var h = window.top.document.title;
          0 == o || 1 == o
            ? (this.controlSetupDom.href = 'PCCLoud://UP '
                .concat(n, ':')
                .concat(i, ' ')
                .concat(r, ' ')
                .concat(s, ' *2 ')
                .concat(c, ' ')
                .concat(d, ' ')
                .concat(f, ' ')
                .concat(p, ' ')
                .concat(_, ' ')
                .concat(h))
            : 2 == o
            ? (this.controlSetupDom.href = 'PCCLoud://UP '
                .concat(n, ':')
                .concat(i, ' ')
                .concat(r, ' ')
                .concat(s, ' *2 ')
                .concat(c, ' ')
                .concat(d, ' ')
                .concat(f, ' ')
                .concat(p, ' ')
                .concat(_, ' sg ')
                .concat(u, ' ')
                .concat(h))
            : 3 == o &&
              (this.controlSetupDom.href = 'PCCLoud://UP '
                .concat(n, ':')
                .concat(i, ' ')
                .concat(r, ' ')
                .concat(s, ' *2 ')
                .concat(c, ' ')
                .concat(d, ' ')
                .concat(f, ' ')
                .concat(p, ' ')
                .concat(_, ' tgc ')
                .concat(u, ' ')
                .concat(h)),
            (this.webSocketPort = a),
            (this.lastPosition = { x: d, y: f, w: p, h: _ }),
            this.dom.appendChild(this.controlSetupDom),
            (this.limitConnect = 10),
            (this.timeConnect = 0),
            (this.resolution = { w: window.screen.width, h: window.screen.height }),
            (this.openedVideoIndexCodes = new Map());
        }
        this._initEvent();
      }
      var e, o, n;
      return (
        (e = t),
        (o = [
          {
            key: '_initEvent',
            value: function () {
              var e = this,
                o = this,
                n = !0;
              window.addEventListener('resize', function () {
                n &&
                  ((n = !1),
                  setTimeout(function () {
                    if (!o.arClosing) {
                      var t = o._getDomPosition(),
                        e = t.left,
                        i = t.top,
                        r = t.width,
                        s = t.height;
                      o.setPosition(e, i, r, s), (n = !0);
                    }
                  }, 1e3));
              }),
                window.addEventListener('beforeunload', function (e) {
                  o.arStartedFlag &&
                    ((o.arStartedFlag = !1),
                    o.timer && (clearInterval(o.timer), (o.timer = null)),
                    o.ws && ((o.arClosing = !0), o.setWindowStatus(t.WindowStatus.CLOSE), (o.ws.onclose = function () {}), o.ws.close()));
                }),
                document.addEventListener('visibilitychange', function () {
                  o.arStartedFlag &&
                    ('hidden' == document.visibilityState
                      ? (o.setWindowStatus(t.WindowStatus.HIDDEN),
                        o.openedVideoIndexCodes.forEach(function (t, e) {
                          o.setVideoWindow(2, e);
                        }),
                        o.openedVideoIndexCodes.clear())
                      : (o._setWebPageHandle(), o.setWindowStatus(t.WindowStatus.VISIBLE)));
                }),
                (document.onkeydown = function (t) {
                  t &&
                    122 == t.keyCode &&
                    (t.preventDefault(), document.fullscreen ? document.documentElement.exitFullscreen() : document.documentElement.requestFullscreen());
                }),
                (this.timer = setInterval(function () {
                  if (!e.arClosing) {
                    var t = e._getDomPosition(),
                      o = t.left,
                      n = t.top,
                      i = t.width,
                      r = t.height;
                    (e.lastPosition.x == o && e.lastPosition.y == n && e.lastPosition.w == i && e.lastPosition.h == r) ||
                      (e.setPosition(o, n, i, r), (e.lastPosition.x = o), (e.lastPosition.y = n), (e.lastPosition.w = i), (e.lastPosition.h = r));
                  }
                }, 10)),
                window.addEventListener('message', function (t) {
                  o.dealMessage(t);
                }),
                (window.showTabCallback = function () {
                  e.setWindowStatus(t.WindowStatus.VISIBLE);
                }),
                (window.hideTabCallback = function () {
                  e.setWindowStatus(t.WindowStatus.HIDDEN);
                });
            },
          },
          {
            key: 'dealMessage',
            value: function (t) {
              var e = t.data || '{}';
              if (('string' == typeof e && (e = JSON.parse(e)), e.hasOwnProperty('method')))
                try {
                  var o = window[e.method];
                  if ('function' == typeof o) {
                    var n = null;
                    e.hasOwnProperty('argument') && (n = e.argument), n ? o(n) : o();
                  }
                } catch (t) {}
            },
          },
          {
            key: 'setupControl',
            value: function () {
              this.arStartedFlag ? console.warn('已启动AR实例，请勿重复启动实例') : (this.controlSetupDom.click(), this._initWebSocket());
            },
          },
          {
            key: '_setWebPageHandle',
            value: function () {
              var t = { topic: 'setARParentWebPage', content: window.top.document.title };
              this.ws.send(JSON.stringify(t));
            },
          },
          {
            key: '_getDomPosition',
            value: function () {
              if (this.dom) {
                var e = this.dom.getBoundingClientRect(),
                  o = e.x,
                  n = e.y,
                  i = e.left,
                  r = e.top,
                  s = e.width,
                  c = e.height,
                  a = this._currentFrameAbsolutePosition();
                return (
                  0 == s || 0 == c
                    ? (this.setWindowStatus(t.WindowStatus.HIDDEN), (this.arDivVisibility = !1))
                    : this.arDivVisibility
                    ? this.arControlVisibility && 'visible' == document.visibilityState && this.setWindowStatus(t.WindowStatus.VISIBLE)
                    : ((this.arDivVisibility = !0), this.setWindowStatus(t.WindowStatus.VISIBLE)),
                  {
                    left: a.x + ((o || i) + window.top.screenX + (window.top.outerWidth - window.top.innerWidth) / 2),
                    top:
                      a.y +
                      (n || r + window.top.screenY + window.top.outerHeight - window.top.innerHeight - (window.top.outerWidth - window.top.innerWidth) / 2),
                    width: this.dom.clientWidth,
                    height: this.dom.clientHeight,
                  }
                );
              }
              return { left: 0, top: 0, width: 0, height: 0 };
            },
          },
          {
            key: '_currentFrameAbsolutePosition',
            value: function () {
              for (var t, e, o = window, n = []; o !== window.top; ) {
                t = o.parent;
                for (var i = 0; i < t.frames.length; i++)
                  if (t.frames[i] === o) {
                    var r = !0,
                      s = !1,
                      c = void 0;
                    try {
                      for (var a, u = t.document.getElementsByTagName('iframe')[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                        var l = a.value;
                        l.contentWindow === o && ((e = l.getBoundingClientRect()), n.push({ x: e.x, y: e.y }));
                      }
                    } catch (t) {
                      (s = !0), (c = t);
                    } finally {
                      try {
                        r || null == u.return || u.return();
                      } finally {
                        if (s) throw c;
                      }
                    }
                    o = t;
                    break;
                  }
              }
              return n.reduce(
                function (t, e) {
                  return { x: t.x + e.x, y: t.y + e.y };
                },
                { x: 0, y: 0 }
              );
            },
          },
          {
            key: '_initWebSocket',
            value: function () {
              var t = this;
              (this.ws = new WebSocket(jt + ':' + this.webSocketPort)),
                (this.ws.onopen = function () {
                  console.log('已连接AR Websocket');
                }),
                (this.ws.onmessage = function (e) {
                  var o = e.data;
                  -1 != o.indexOf('ARStarted') && ((t.arStartedFlag = !0), (t.arControlVisibility = !0));
                  var n = JSON.parse(o);
                  if (n && n.topic)
                    if ('ARToWebKeys' == n.topic)
                      'Escape' == n.content && (t.arClosing = !0), window.dispatchEvent(new CustomEvent('ar_keydown', { detail: { data: n.content } }));
                    else if ('ARWebLoaded' == n.topic && '1' == n.content)
                      window.dispatchEvent(new CustomEvent('ar_loaded', { detail: { loadingStatus: !0 } }));
                    else if ('ARToWebCustomMessage' == n.topic) window.dispatchEvent(new CustomEvent('ar_custom_message', { detail: { data: n.content } }));
                    else if ('ARControlSceneChanged' == n.topic) {
                      var i = n.content.split(',');
                      window.dispatchEvent(new CustomEvent('ar_scene_change', { detail: { data: { sceneIndex: i[0], sceneCode: i[1], sceneName: i[2] } } }));
                    }
                }),
                (this.ws.onclose = function () {
                  (t.arStartedFlag = !1), console.log('AR Websocket已经断开'), t._reconnect();
                });
            },
          },
          {
            key: '_reconnect',
            value: function () {
              var t = this;
              this.limitConnect > 0
                ? (this.limitConnect--,
                  this.timeConnect++,
                  console.log('第' + this.timeConnect + '次重连'),
                  setTimeout(function () {
                    t._initWebSocket();
                  }, 1e3))
                : (console.log('AR Websocket连接已超时'), window.dispatchEvent(new CustomEvent('ar_not_connected')));
            },
          },
          {
            key: 'setPosition',
            value: function (t, e, o, n) {
              var i = { left: t, top: e, ctrl_width: o, ctrl_height: n },
                r = { topic: 'position', content: JSON.stringify(i) };
              this.ws.send(JSON.stringify(r));
            },
          },
          {
            key: 'setWindowStatus',
            value: function (e) {
              if (this.ws && 1 == this.ws.readyState) {
                if ((this.arControlVisibility && e == t.WindowStatus.VISIBLE) || (!this.arControlVisibility && e == t.WindowStatus.HIDDEN)) return;
                e == t.WindowStatus.VISIBLE && (this.arControlVisibility = !0), e == t.WindowStatus.HIDDEN && (this.arControlVisibility = !1);
                var o = { topic: 'windowStatus', content: e };
                this.ws.send(JSON.stringify(o));
              }
            },
          },
          {
            key: 'setVideoWindow',
            value: function (t, e) {
              var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
              0 == t && this.openedVideoIndexCodes.set(e, { left: n, top: i });
              var r = {
                  left: (window.top.outerWidth - window.top.innerWidth) / 2 + n,
                  top: window.top.outerHeight - window.top.innerHeight - (window.top.outerWidth - window.top.innerWidth) / 2 + i,
                  index: e,
                  name: o,
                  status: t,
                },
                s = { topic: 'smallVideoPlay', content: JSON.stringify(r) };
              this.ws.send(JSON.stringify(s));
            },
          },
          {
            key: 'setVideoWindowList',
            value: function (t) {
              var e = [];
              t.forEach(function (t) {
                e.push({
                  left: (window.top.outerWidth - window.top.innerWidth) / 2 + t.left,
                  top: window.top.outerHeight - window.top.innerHeight - (window.top.outerWidth - window.top.innerWidth) / 2 + t.top,
                  index: t.indexCode,
                });
              });
              var o = { topic: 'smallVideoMoveList', content: JSON.stringify(e) };
              this.ws.send(JSON.stringify(o));
            },
          },
          {
            key: 'changeArScene',
            value: function (t) {
              var e = { topic: 'changeScene', content: t };
              this.ws.send(JSON.stringify(e));
            },
          },
          {
            key: 'setControlsVisibility',
            value: function (e) {
              var o = [];
              for (var n in t.ARControls)
                -1 != e.indexOf(t.ARControls[n])
                  ? o.push({ Key: t.ARControls[n], Status: t.ControlStatus.HIDDEN })
                  : o.push({ Key: t.ARControls[n], Status: t.ControlStatus.VISIBLE });
              var i = { topic: 'setARMainControlsVisible', content: JSON.stringify(o) };
              this.ws.send(JSON.stringify(i));
            },
          },
          {
            key: 'sendBussinessInfo',
            value: function (t) {
              var e = { topic: 'sendCustomInfo', content: t };
              this.ws.send(JSON.stringify(e));
            },
          },
        ]) && Et(e.prototype, o),
        n && Et(e, n),
        t
      );
    })();
  return (
    (Ct.ARControls = { SCENE_TREE: '1', MAP: '2', BUTTONS_BOTTOM: '3', BUTTONS_EXIT_MIN: '4', SEARCH_BAR: '5', BUTTON_ALARM: '6', TOOLBOX_RIGHT: '7' }),
    (Ct.WindowStatus = { VISIBLE: '0', HIDDEN: '1', CLOSE: '2' }),
    (Ct.ControlStatus = { VISIBLE: 0, HIDDEN: 1 }),
    Ct
  );
});
