// ECS
!(function(t, e) {
  for (var n in e) t[n] = e[n]
})(
  this,
  (function(t) {
    var e = {}
    function n(o) {
      if (e[o]) return e[o].exports
      var r = (e[o] = { i: o, l: !1, exports: {} })
      return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o })
      }),
      (n.r = function(t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t
        var o = Object.create(null)
        if ((n.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var r in t)
            n.d(
              o,
              r,
              function(e) {
                return t[e]
              }.bind(null, r)
            )
        return o
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default
              }
            : function() {
                return t
              }
        return n.d(e, 'a', e), e
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (n.p = ''),
      n((n.s = 30))
    )
  })([
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__assign) ||
          function() {
            return (o =
              Object.assign ||
              function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                return t
              }).apply(this, arguments)
          },
        r =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          },
        i =
          (this && this.__read) ||
          function(t, e) {
            var n = 'function' == typeof Symbol && t[Symbol.iterator]
            if (!n) return t
            var o,
              r,
              i = n.call(t),
              s = []
            try {
              for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; ) s.push(o.value)
            } catch (t) {
              r = { error: t }
            } finally {
              try {
                o && !o.done && (n = i.return) && n.call(i)
              } finally {
                if (r) throw r.error
              }
            }
            return s
          },
        s =
          (this && this.__spread) ||
          function() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e]))
            return t
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.isDisposableComponent = e.ObservableComponent = e.getComponentId = e.getComponentClassId = e.getComponentName = e.DisposableComponent = e.Component = e.DisposableComponentUpdated = e.DisposableComponentRemoved = e.DisposableComponentCreated = void 0)
      var a = n(1),
        p = n(8),
        u = n(18),
        l = (function() {
          function t(t, e, n) {
            ;(this.componentId = t), (this.componentName = e), (this.classId = n)
          }
          return (t = r([p.EventConstructor()], t))
        })()
      e.DisposableComponentCreated = l
      var c = (function() {
        function t(t) {
          this.componentId = t
        }
        return (t = r([p.EventConstructor()], t))
      })()
      e.DisposableComponentRemoved = c
      var h = (function() {
        function t(t, e) {
          ;(this.componentId = t), (this.component = e)
        }
        return (t = r([p.EventConstructor()], t))
      })()
      function d(t, e) {
        return function(n) {
          if (n.isComponent) throw new TypeError('You cannot extend a component. Trying to extend ' + n.originalClassName + ' with: ' + t)
          if ('number' != typeof e || isNaN(e)) throw new Error('classId: ' + e + ' is an invalid integer')
          var o = n,
            r = function() {
              if (!d.engine) throw new Error('You need to set a DisposableComponent.engine before creating disposable components')
              var n = Array.prototype.slice.call(arguments),
                r = new (o.bind.apply(o, s([void 0], n)))(),
                i = a.newId('C')
              return (
                Object.defineProperty(r, '__name__symbol_', { enumerable: !1, writable: !1, configurable: !1, value: t }),
                Object.defineProperty(r, '__component__id_', { enumerable: !1, writable: !1, configurable: !1, value: i }),
                void 0 !== e &&
                  Object.defineProperty(r, '__classId__symbol_', { enumerable: !1, writable: !1, configurable: !1, value: e }),
                d.engine && d.engine.registerComponent(r),
                r
              )
            }
          return (
            void 0 !== e && (r.__classId__symbol_ = e),
            (r.__name__symbol_ = t),
            (r.isComponent = !0),
            (r.isDisposableComponent = !0),
            (r.originalClassName = t),
            ((r.prototype = n.prototype).constructor = n),
            r
          )
        }
      }
      function f(t) {
        if (!t) throw new TypeError(t + ' is not a component.')
        if (t.__component__id_) return t.__component__id_
        throw new TypeError(t + ' is not a registered disposable component.')
      }
      ;(e.DisposableComponentUpdated = h),
        (e.Component = function(t, e) {
          return function(n) {
            if (n.isComponent) throw new TypeError('You cannot extend a component. Trying to extend ' + n.originalClassName + ' with: ' + t)
            var o = n,
              r = function() {
                var n = Array.prototype.slice.call(arguments),
                  r = new (o.bind.apply(o, s([void 0], n)))()
                return (
                  Object.defineProperty(r, '__name__symbol_', { enumerable: !1, writable: !1, configurable: !1, value: t }),
                  void 0 !== e &&
                    Object.defineProperty(r, '__classId__symbol_', { enumerable: !1, writable: !1, configurable: !1, value: e }),
                  r
                )
              }
            return (
              void 0 !== e && (r.__classId__symbol_ = e),
              (r.__name__symbol_ = t),
              (r.isComponent = !0),
              (r.originalClassName = t),
              ((r.prototype = n.prototype).constructor = n),
              r
            )
          }
        }),
        (e.DisposableComponent = d),
        (function(t) {
          t.engine = null
        })((d = e.DisposableComponent || (e.DisposableComponent = {}))),
        (e.getComponentName = function(t) {
          if (!t) throw new TypeError(t + ' is not a component.')
          if (t.__name__symbol_) return t.__name__symbol_
          throw new TypeError(t + ' is not a registered component.')
        }),
        (e.getComponentClassId = function(t) {
          if (!t) throw new TypeError(t + ' is not a component.')
          if (t.__classId__symbol_) return t.__classId__symbol_
          if (!t.__name__symbol_) throw new TypeError(t + ' is not a registered component.')
          return null
        }),
        (e.getComponentId = f)
      var y = (function() {
        function t() {
          ;(this.dirty = !1), (this.data = {}), (this.subscriptions = [])
        }
        return (
          (t.component = function(t, e) {
            if (delete t[e]) {
              var n = e + '_' + Math.random()
              ;(t[n] = void 0),
                Object.defineProperty(t, n, o(o({}, Object.getOwnPropertyDescriptor(t, n)), { enumerable: !1 })),
                Object.defineProperty(t, e.toString(), {
                  get: function() {
                    return this[n]
                  },
                  set: function(t) {
                    var o = this[n]
                    if (((this.data[e] = t ? f(t) : null), (this[n] = t), t !== o)) {
                      this.dirty = !0
                      for (var r = 0; r < this.subscriptions.length; r++) this.subscriptions[r](e, t, o)
                    }
                  },
                  enumerable: !0
                })
            }
          }),
          (t.field = function(t, e) {
            delete t[e] &&
              Object.defineProperty(t, e.toString(), {
                get: function() {
                  return this.data[e]
                },
                set: function(t) {
                  var n = this.data[e]
                  if (((this.data[e] = t), t !== n)) {
                    this.dirty = !0
                    for (var o = 0; o < this.subscriptions.length; o++) this.subscriptions[o](e, t, n)
                  }
                },
                enumerable: !0
              })
          }),
          (t.uiValue = function(t, e) {
            delete t[e] &&
              Object.defineProperty(t, e.toString(), {
                get: function() {
                  return this.data[e].toString()
                },
                set: function(t) {
                  var n = this.data[e],
                    o = new u.UIValue(t)
                  if (((this.data[e] = o), o !== n)) {
                    this.dirty = !0
                    for (var r = 0; r < this.subscriptions.length; r++) this.subscriptions[r](e, o, n)
                  }
                },
                enumerable: !0
              })
          }),
          (t.readonly = function(t, e) {
            delete t[e] &&
              Object.defineProperty(t, e.toString(), {
                get: function() {
                  if (e in this.data == !1) throw new Error('The field ' + e + ' is uninitialized')
                  return this.data[e]
                },
                set: function(t) {
                  if (e in this.data) throw new Error('The field ' + e + ' is readonly')
                  ;(this.data[e] = t), (this.dirty = !0)
                },
                enumerable: !0,
                configurable: !1
              })
          }),
          (t.prototype.onChange = function(t) {
            return this.subscriptions.push(t), this
          }),
          (t.prototype.toJSON = function() {
            return this.data
          }),
          t
        )
      })()
      ;(e.ObservableComponent = y),
        (e.isDisposableComponent = function(t) {
          return '__component__id_' in t
        })
    },
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__read) ||
          function(t, e) {
            var n = 'function' == typeof Symbol && t[Symbol.iterator]
            if (!n) return t
            var o,
              r,
              i = n.call(t),
              s = []
            try {
              for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; ) s.push(o.value)
            } catch (t) {
              r = { error: t }
            } finally {
              try {
                o && !o.done && (n = i.return) && n.call(i)
              } finally {
                if (r) throw r.error
              }
            }
            return s
          },
        r =
          (this && this.__spread) ||
          function() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e]))
            return t
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.openNFTDialog = e.openExternalURL = e.buildArray = e.uuid = e.newId = e.error = e.log = void 0)
      var i = 0
      ;(e.log = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        'undefined' != typeof dcl ? dcl.log.apply(dcl, r(t)) : console.log.apply(console, r(['DEBUG:'], t))
      }),
        (e.error = function(t, e) {
          'undefined' != typeof dcl ? dcl.error(t, e) : console.error('ERROR:', t, e)
        }),
        (e.newId = function(t) {
          if ((i++, 0 === t.length)) throw new Error('newId(type: string): type cannot be empty')
          return t + i.toString(36)
        }),
        (e.uuid = function() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(t) {
            var e = (16 * Math.random()) | 0
            return ('x' === t ? e : (3 & e) | 8).toString(16)
          })
        }),
        (e.buildArray = function(t, e) {
          for (var n = [], o = 0; o < t; ++o) n.push(e())
          return n
        }),
        (e.openExternalURL = function(t) {
          'undefined' != typeof dcl ? dcl.openExternalUrl(t) : console.error('ERROR: openExternalURL dcl is undefined')
        }),
        (e.openNFTDialog = function(t, e) {
          if ((void 0 === e && (e = null), 'undefined' != typeof dcl)) {
            var n = t.match(/ethereum:\/\/(.+)\/(.+)/)
            if (!n || n.length < 3) return
            dcl.openNFTDialog(n[1], n[2], e)
          } else console.error('ERROR: openNFTDialog dcl is undefined')
        })
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.RAD2DEG = e.DEG2RAD = e.Epsilon = e.ToLinearSpace = e.ToGammaSpace = e.Space = e.Orientation = void 0),
        (function(t) {
          ;(t[(t.CW = 0)] = 'CW'), (t[(t.CCW = 1)] = 'CCW')
        })(e.Orientation || (e.Orientation = {})),
        (function(t) {
          ;(t[(t.LOCAL = 0)] = 'LOCAL'), (t[(t.WORLD = 1)] = 'WORLD'), (t[(t.BONE = 2)] = 'BONE')
        })(e.Space || (e.Space = {})),
        (e.ToGammaSpace = 1 / 2.2),
        (e.ToLinearSpace = 2.2),
        (e.Epsilon = 1e-6),
        (e.DEG2RAD = Math.PI / 180),
        (e.RAD2DEG = 360 / (2 * Math.PI))
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Vector3 = void 0)
      var o = n(9),
        r = n(2),
        i = n(10),
        s = n(6),
        a = (function() {
          function t(t, e, n) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), (this.x = t), (this.y = e), (this.z = n)
          }
          return (
            Object.defineProperty(t.prototype, 'isNonUniform', {
              get: function() {
                var t = Math.abs(this.x),
                  e = Math.abs(this.y)
                if (t !== e) return !0
                var n = Math.abs(this.z)
                return t !== n || e !== n
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.Add = function(e, n) {
              return new t(e.x, e.y, e.z).addInPlace(n)
            }),
            (t.GetClipFactor = function(e, n, o, r) {
              var i = t.Dot(e, o) - r
              return i / (i - (t.Dot(n, o) - r))
            }),
            (t.GetAngleBetweenVectors = function(e, n, r) {
              var i = e.normalizeToRef(o.MathTmp.Vector3[1]),
                s = n.normalizeToRef(o.MathTmp.Vector3[2]),
                a = t.Dot(i, s),
                p = o.MathTmp.Vector3[3]
              return t.CrossToRef(i, s, p), t.Dot(p, r) > 0 ? Math.acos(a) : -Math.acos(a)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2])
            }),
            (t.FromFloatArray = function(e, n) {
              return t.FromArray(e, n)
            }),
            (t.FromArrayToRef = function(t, e, n) {
              ;(n.x = t[e]), (n.y = t[e + 1]), (n.z = t[e + 2])
            }),
            (t.FromFloatArrayToRef = function(e, n, o) {
              return t.FromArrayToRef(e, n, o)
            }),
            (t.FromFloatsToRef = function(t, e, n, o) {
              o.copyFromFloats(t, e, n)
            }),
            (t.Zero = function() {
              return new t(0, 0, 0)
            }),
            (t.One = function() {
              return new t(1, 1, 1)
            }),
            (t.Up = function() {
              return new t(0, 1, 0)
            }),
            (t.Down = function() {
              return new t(0, -1, 0)
            }),
            (t.Forward = function() {
              return new t(0, 0, 1)
            }),
            (t.Backward = function() {
              return new t(0, 0, -1)
            }),
            (t.Right = function() {
              return new t(1, 0, 0)
            }),
            (t.Left = function() {
              return new t(-1, 0, 0)
            }),
            (t.TransformCoordinates = function(e, n) {
              var o = t.Zero()
              return t.TransformCoordinatesToRef(e, n, o), o
            }),
            (t.TransformCoordinatesToRef = function(e, n, o) {
              return t.TransformCoordinatesFromFloatsToRef(e.x, e.y, e.z, n, o)
            }),
            (t.TransformCoordinatesFromFloatsToRef = function(t, e, n, o, r) {
              var i = o.m,
                s = t * i[0] + e * i[4] + n * i[8] + i[12],
                a = t * i[1] + e * i[5] + n * i[9] + i[13],
                p = t * i[2] + e * i[6] + n * i[10] + i[14],
                u = 1 / (t * i[3] + e * i[7] + n * i[11] + i[15])
              ;(r.x = s * u), (r.y = a * u), (r.z = p * u)
            }),
            (t.TransformNormal = function(e, n) {
              var o = t.Zero()
              return t.TransformNormalToRef(e, n, o), o
            }),
            (t.TransformNormalToRef = function(t, e, n) {
              this.TransformNormalFromFloatsToRef(t.x, t.y, t.z, e, n)
            }),
            (t.TransformNormalFromFloatsToRef = function(t, e, n, o, r) {
              var i = o.m
              ;(r.x = t * i[0] + e * i[4] + n * i[8]), (r.y = t * i[1] + e * i[5] + n * i[9]), (r.z = t * i[2] + e * i[6] + n * i[10])
            }),
            (t.CatmullRom = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s
              return new t(
                0.5 * (2 * n.x + (-e.x + o.x) * i + (2 * e.x - 5 * n.x + 4 * o.x - r.x) * s + (-e.x + 3 * n.x - 3 * o.x + r.x) * a),
                0.5 * (2 * n.y + (-e.y + o.y) * i + (2 * e.y - 5 * n.y + 4 * o.y - r.y) * s + (-e.y + 3 * n.y - 3 * o.y + r.y) * a),
                0.5 * (2 * n.z + (-e.z + o.z) * i + (2 * e.z - 5 * n.z + 4 * o.z - r.z) * s + (-e.z + 3 * n.z - 3 * o.z + r.z) * a)
              )
            }),
            (t.Clamp = function(e, n, o) {
              var r = new t()
              return t.ClampToRef(e, n, o, r), r
            }),
            (t.ClampToRef = function(t, e, n, o) {
              var r = t.x
              r = (r = r > n.x ? n.x : r) < e.x ? e.x : r
              var i = t.y
              i = (i = i > n.y ? n.y : i) < e.y ? e.y : i
              var s = t.z
              ;(s = (s = s > n.z ? n.z : s) < e.z ? e.z : s), o.copyFromFloats(r, i, s)
            }),
            (t.Hermite = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s,
                p = 2 * a - 3 * s + 1,
                u = -2 * a + 3 * s,
                l = a - 2 * s + i,
                c = a - s
              return new t(
                e.x * p + o.x * u + n.x * l + r.x * c,
                e.y * p + o.y * u + n.y * l + r.y * c,
                e.z * p + o.z * u + n.z * l + r.z * c
              )
            }),
            (t.Lerp = function(e, n, o) {
              var r = new t(0, 0, 0)
              return t.LerpToRef(e, n, o, r), r
            }),
            (t.LerpToRef = function(t, e, n, o) {
              ;(o.x = t.x + (e.x - t.x) * n), (o.y = t.y + (e.y - t.y) * n), (o.z = t.z + (e.z - t.z) * n)
            }),
            (t.Dot = function(t, e) {
              return t.x * e.x + t.y * e.y + t.z * e.z
            }),
            (t.Cross = function(e, n) {
              var o = t.Zero()
              return t.CrossToRef(e, n, o), o
            }),
            (t.CrossToRef = function(t, e, n) {
              var o = t.y * e.z - t.z * e.y,
                r = t.z * e.x - t.x * e.z,
                i = t.x * e.y - t.y * e.x
              n.copyFromFloats(o, r, i)
            }),
            (t.Normalize = function(e) {
              var n = t.Zero()
              return t.NormalizeToRef(e, n), n
            }),
            (t.NormalizeToRef = function(t, e) {
              t.normalizeToRef(e)
            }),
            (t.Minimize = function(e, n) {
              var o = new t(e.x, e.y, e.z)
              return o.minimizeInPlace(n), o
            }),
            (t.Maximize = function(e, n) {
              var o = new t(e.x, e.y, e.z)
              return o.maximizeInPlace(n), o
            }),
            (t.Distance = function(e, n) {
              return Math.sqrt(t.DistanceSquared(e, n))
            }),
            (t.DistanceSquared = function(t, e) {
              var n = t.x - e.x,
                o = t.y - e.y,
                r = t.z - e.z
              return n * n + o * o + r * r
            }),
            (t.Center = function(e, n) {
              var o = t.Add(e, n)
              return o.scaleInPlace(0.5), o
            }),
            (t.RotationFromAxis = function(e, n, o) {
              var r = t.Zero()
              return t.RotationFromAxisToRef(e, n, o, r), r
            }),
            (t.RotationFromAxisToRef = function(t, e, n, r) {
              var s = o.MathTmp.Quaternion[0]
              i.Quaternion.RotationQuaternionFromAxisToRef(t, e, n, s), r.copyFrom(s.eulerAngles)
            }),
            (t.prototype.toString = function() {
              return '(' + this.x + ', ' + this.y + ', ' + this.z + ')'
            }),
            (t.prototype.getClassName = function() {
              return 'Vector3'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.x || 0
              return (t = (397 * (t = (397 * t) ^ (this.y || 0))) ^ (this.z || 0))
            }),
            (t.prototype.asArray = function() {
              var t = []
              return this.toArray(t, 0), t
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), this
            }),
            (t.prototype.toQuaternion = function() {
              return i.Quaternion.Identity.setEuler(this.y, this.x, this.z)
            }),
            (t.prototype.addInPlace = function(t) {
              return this.addInPlaceFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.addInPlaceFromFloats = function(t, e, n) {
              return (this.x += t), (this.y += e), (this.z += n), this
            }),
            (t.prototype.add = function(e) {
              return new t(this.x + e.x, this.y + e.y, this.z + e.z)
            }),
            (t.prototype.addToRef = function(t, e) {
              return e.copyFromFloats(this.x + t.x, this.y + t.y, this.z + t.z)
            }),
            (t.prototype.subtractInPlace = function(t) {
              return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.x - e.x, this.y - e.y, this.z - e.z)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return this.subtractFromFloatsToRef(t.x, t.y, t.z, e)
            }),
            (t.prototype.subtractFromFloats = function(e, n, o) {
              return new t(this.x - e, this.y - n, this.z - o)
            }),
            (t.prototype.subtractFromFloatsToRef = function(t, e, n, o) {
              return o.copyFromFloats(this.x - t, this.y - e, this.z - n)
            }),
            (t.prototype.applyMatrix4 = function(t) {
              this.applyMatrix4ToRef(t, this)
            }),
            (t.prototype.applyMatrix4ToRef = function(t, e) {
              var n = this.x,
                o = this.y,
                r = this.z,
                i = t.m,
                s = 1 / (i[3] * n + i[7] * o + i[11] * r + i[15])
              return (
                (e.x = (i[0] * n + i[4] * o + i[8] * r + i[12]) * s),
                (e.y = (i[1] * n + i[5] * o + i[9] * r + i[13]) * s),
                (e.z = (i[2] * n + i[6] * o + i[10] * r + i[14]) * s),
                e
              )
            }),
            (t.prototype.rotate = function(t) {
              return this.rotateToRef(t, this)
            }),
            (t.prototype.rotateToRef = function(t, e) {
              var n = this.x,
                o = this.y,
                r = this.z,
                i = t.x,
                s = t.y,
                a = t.z,
                p = t.w,
                u = p * n + s * r - a * o,
                l = p * o + a * n - i * r,
                c = p * r + i * o - s * n,
                h = -i * n - s * o - a * r
              return (
                (e.x = u * p + h * -i + l * -a - c * -s),
                (e.y = l * p + h * -s + c * -i - u * -a),
                (e.z = c * p + h * -a + u * -s - l * -i),
                e
              )
            }),
            (t.prototype.negate = function() {
              return new t(-this.x, -this.y, -this.z)
            }),
            (t.prototype.scaleInPlace = function(t) {
              return (this.x *= t), (this.y *= t), (this.z *= t), this
            }),
            (t.prototype.scale = function(e) {
              return new t(this.x * e, this.y * e, this.z * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return e.copyFromFloats(this.x * t, this.y * t, this.z * t)
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return e.addInPlaceFromFloats(this.x * t, this.y * t, this.z * t)
            }),
            (t.prototype.equals = function(t) {
              return t && this.x === t.x && this.y === t.y && this.z === t.z
            }),
            (t.prototype.equalsWithEpsilon = function(t, e) {
              return (
                void 0 === e && (e = r.Epsilon),
                t &&
                  s.Scalar.WithinEpsilon(this.x, t.x, e) &&
                  s.Scalar.WithinEpsilon(this.y, t.y, e) &&
                  s.Scalar.WithinEpsilon(this.z, t.z, e)
              )
            }),
            (t.prototype.equalsToFloats = function(t, e, n) {
              return this.x === t && this.y === e && this.z === n
            }),
            (t.prototype.multiplyInPlace = function(t) {
              return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this
            }),
            (t.prototype.multiply = function(t) {
              return this.multiplyByFloats(t.x, t.y, t.z)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return e.copyFromFloats(this.x * t.x, this.y * t.y, this.z * t.z)
            }),
            (t.prototype.multiplyByFloats = function(e, n, o) {
              return new t(this.x * e, this.y * n, this.z * o)
            }),
            (t.prototype.divide = function(e) {
              return new t(this.x / e.x, this.y / e.y, this.z / e.z)
            }),
            (t.prototype.divideToRef = function(t, e) {
              return e.copyFromFloats(this.x / t.x, this.y / t.y, this.z / t.z)
            }),
            (t.prototype.divideInPlace = function(t) {
              return this.divideToRef(t, this)
            }),
            (t.prototype.minimizeInPlace = function(t) {
              return this.minimizeInPlaceFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.maximizeInPlace = function(t) {
              return this.maximizeInPlaceFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.minimizeInPlaceFromFloats = function(t, e, n) {
              return t < this.x && (this.x = t), e < this.y && (this.y = e), n < this.z && (this.z = n), this
            }),
            (t.prototype.maximizeInPlaceFromFloats = function(t, e, n) {
              return t > this.x && (this.x = t), e > this.y && (this.y = e), n > this.z && (this.z = n), this
            }),
            (t.prototype.floor = function() {
              return new t(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z))
            }),
            (t.prototype.fract = function() {
              return new t(this.x - Math.floor(this.x), this.y - Math.floor(this.y), this.z - Math.floor(this.z))
            }),
            (t.prototype.length = function() {
              return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            }),
            (t.prototype.lengthSquared = function() {
              return this.x * this.x + this.y * this.y + this.z * this.z
            }),
            (t.prototype.normalize = function() {
              return this.normalizeFromLength(this.length())
            }),
            (t.prototype.normalizeFromLength = function(t) {
              return 0 === t || 1 === t ? this : this.scaleInPlace(1 / t)
            }),
            (t.prototype.normalizeToNew = function() {
              var e = new t(0, 0, 0)
              return this.normalizeToRef(e), e
            }),
            (t.prototype.normalizeToRef = function(t) {
              var e = this.length()
              return 0 === e || 1 === e ? t.copyFromFloats(this.x, this.y, this.z) : this.scaleToRef(1 / e, t)
            }),
            (t.prototype.clone = function() {
              return new t(this.x, this.y, this.z)
            }),
            (t.prototype.copyFrom = function(t) {
              return this.copyFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.copyFromFloats = function(t, e, n) {
              return (this.x = t), (this.y = e), (this.z = n), this
            }),
            (t.prototype.set = function(t, e, n) {
              return this.copyFromFloats(t, e, n)
            }),
            (t.prototype.setAll = function(t) {
              return (this.x = this.y = this.z = t), this
            }),
            t
          )
        })()
      e.Vector3 = a
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__assign) ||
          function() {
            return (i =
              Object.assign ||
              function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                return t
              }).apply(this, arguments)
          },
        s =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.VideoTexture = e.VideoClip = e.SmartItem = e.OnAnimationEnd = e.OnPointerLock = e.OnPointerUUIDEvent = e.OnUUIDEvent = e.BasicMaterial = e.Material = e.TransparencyMode = e.TextShape = e.Fonts = e.Font = e.OBJShape = e.Animator = e.Texture = e.NFTShape = e.PictureFrameStyle = e.GLTFShape = e.CylinderShape = e.ConeShape = e.PlaneShape = e.CircleShape = e.SphereShape = e.BoxShape = e.Shape = e.Billboard = e.Transform = e.AvatarModifierArea = e.AvatarModifiers = e.CLASS_ID = void 0)
      var a,
        p = n(0),
        u = n(5),
        l = n(26),
        c = n(1),
        h = n(16)
      !(function(t) {
        ;(t[(t.TRANSFORM = 1)] = 'TRANSFORM'),
          (t[(t.UUID_CALLBACK = 8)] = 'UUID_CALLBACK'),
          (t[(t.BOX_SHAPE = 16)] = 'BOX_SHAPE'),
          (t[(t.SPHERE_SHAPE = 17)] = 'SPHERE_SHAPE'),
          (t[(t.PLANE_SHAPE = 18)] = 'PLANE_SHAPE'),
          (t[(t.CONE_SHAPE = 19)] = 'CONE_SHAPE'),
          (t[(t.CYLINDER_SHAPE = 20)] = 'CYLINDER_SHAPE'),
          (t[(t.TEXT_SHAPE = 21)] = 'TEXT_SHAPE'),
          (t[(t.NFT_SHAPE = 22)] = 'NFT_SHAPE'),
          (t[(t.UI_WORLD_SPACE_SHAPE = 23)] = 'UI_WORLD_SPACE_SHAPE'),
          (t[(t.UI_SCREEN_SPACE_SHAPE = 24)] = 'UI_SCREEN_SPACE_SHAPE'),
          (t[(t.UI_CONTAINER_RECT = 25)] = 'UI_CONTAINER_RECT'),
          (t[(t.UI_CONTAINER_STACK = 26)] = 'UI_CONTAINER_STACK'),
          (t[(t.UI_TEXT_SHAPE = 27)] = 'UI_TEXT_SHAPE'),
          (t[(t.UI_INPUT_TEXT_SHAPE = 28)] = 'UI_INPUT_TEXT_SHAPE'),
          (t[(t.UI_IMAGE_SHAPE = 29)] = 'UI_IMAGE_SHAPE'),
          (t[(t.UI_SLIDER_SHAPE = 30)] = 'UI_SLIDER_SHAPE'),
          (t[(t.CIRCLE_SHAPE = 31)] = 'CIRCLE_SHAPE'),
          (t[(t.BILLBOARD = 32)] = 'BILLBOARD'),
          (t[(t.ANIMATION = 33)] = 'ANIMATION'),
          (t[(t.FONT = 34)] = 'FONT'),
          (t[(t.UI_FULLSCREEN_SHAPE = 40)] = 'UI_FULLSCREEN_SHAPE'),
          (t[(t.UI_BUTTON_SHAPE = 41)] = 'UI_BUTTON_SHAPE'),
          (t[(t.GLTF_SHAPE = 54)] = 'GLTF_SHAPE'),
          (t[(t.OBJ_SHAPE = 55)] = 'OBJ_SHAPE'),
          (t[(t.AVATAR_SHAPE = 56)] = 'AVATAR_SHAPE'),
          (t[(t.BASIC_MATERIAL = 64)] = 'BASIC_MATERIAL'),
          (t[(t.PBR_MATERIAL = 65)] = 'PBR_MATERIAL'),
          (t[(t.HIGHLIGHT_ENTITY = 66)] = 'HIGHLIGHT_ENTITY'),
          (t[(t.SOUND = 67)] = 'SOUND'),
          (t[(t.TEXTURE = 68)] = 'TEXTURE'),
          (t[(t.VIDEO_CLIP = 70)] = 'VIDEO_CLIP'),
          (t[(t.VIDEO_TEXTURE = 71)] = 'VIDEO_TEXTURE'),
          (t[(t.AUDIO_CLIP = 200)] = 'AUDIO_CLIP'),
          (t[(t.AUDIO_SOURCE = 201)] = 'AUDIO_SOURCE'),
          (t[(t.AUDIO_STREAM = 202)] = 'AUDIO_STREAM'),
          (t[(t.GIZMOS = 203)] = 'GIZMOS'),
          (t[(t.SMART_ITEM = 204)] = 'SMART_ITEM'),
          (t[(t.AVATAR_MODIFIER_AREA = 205)] = 'AVATAR_MODIFIER_AREA')
      })((a = e.CLASS_ID || (e.CLASS_ID = {}))),
        (function(t) {
          ;(t.HIDE_AVATARS = 'HIDE_AVATARS'), (t.DISABLE_PASSPORTS = 'DISABLE_PASSPORTS')
        })(e.AvatarModifiers || (e.AvatarModifiers = {}))
      var d = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          return (n.area = e.area), (n.modifiers = e.modifiers), n
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'area', void 0),
          s([p.ObservableComponent.field], e.prototype, 'modifiers', void 0),
          (e = s([p.Component('engine.avatarModifierArea', a.AVATAR_MODIFIER_AREA)], e))
        )
      })(p.ObservableComponent)
      e.AvatarModifierArea = d
      var f = (function(t) {
        function e(e) {
          void 0 === e && (e = {})
          var n = t.call(this) || this
          return (
            (n.position = e.position || u.Vector3.Zero()),
            (n.rotation = e.rotation || u.Quaternion.Identity),
            (n.scale = e.scale || new u.Vector3(1, 1, 1)),
            n
          )
        }
        return (
          r(e, t),
          Object.defineProperty(e.prototype, 'eulerAngles', {
            get: function() {
              return this.rotation.eulerAngles
            },
            enumerable: !1,
            configurable: !0
          }),
          (e.prototype.lookAt = function(t, e) {
            void 0 === e && (e = u.MathTmp.staticUp)
            var n = new u.Matrix()
            return u.Matrix.LookAtLHToRef(this.position, t, e, n), n.invert(), u.Quaternion.FromRotationMatrixToRef(n, this.rotation), this
          }),
          (e.prototype.rotate = function(t, e) {
            return this.rotation.multiplyInPlace(this.rotation.angleAxis(e, t)), this
          }),
          (e.prototype.translate = function(t) {
            return this.position.addInPlace(t), this
          }),
          s([p.ObservableComponent.field], e.prototype, 'position', void 0),
          s([p.ObservableComponent.field], e.prototype, 'rotation', void 0),
          s([p.ObservableComponent.field], e.prototype, 'scale', void 0),
          (e = s([p.Component('engine.transform', a.TRANSFORM)], e))
        )
      })(p.ObservableComponent)
      e.Transform = f
      var y = (function(t) {
        function e(e, n, o) {
          void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === o && (o = !0)
          var r = t.call(this) || this
          return (r.x = !0), (r.y = !0), (r.z = !0), (r.x = e), (r.y = n), (r.z = o), r
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'x', void 0),
          s([p.ObservableComponent.field], e.prototype, 'y', void 0),
          s([p.ObservableComponent.field], e.prototype, 'z', void 0),
          (e = s([p.Component('engine.billboard', a.BILLBOARD)], e))
        )
      })(p.ObservableComponent)
      e.Billboard = y
      var v = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.withCollisions = !0), (e.isPointerBlocker = !0), (e.visible = !0), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'withCollisions', void 0),
          s([p.ObservableComponent.field], e.prototype, 'isPointerBlocker', void 0),
          s([p.ObservableComponent.field], e.prototype, 'visible', void 0),
          e
        )
      })(p.ObservableComponent)
      e.Shape = v
      var m = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([p.DisposableComponent('engine.shape', a.BOX_SHAPE)], e))
      })(v)
      e.BoxShape = m
      var b = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([p.DisposableComponent('engine.shape', a.SPHERE_SHAPE)], e))
      })(v)
      e.SphereShape = b
      var g = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'segments', void 0),
          s([p.ObservableComponent.field], e.prototype, 'arc', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.CIRCLE_SHAPE)], e))
        )
      })(v)
      e.CircleShape = g
      var _ = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.width = 1), (e.height = 1), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'width', void 0),
          s([p.ObservableComponent.field], e.prototype, 'height', void 0),
          s([p.ObservableComponent.field], e.prototype, 'uvs', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.PLANE_SHAPE)], e))
        )
      })(v)
      e.PlaneShape = _
      var C = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.radiusTop = 0),
            (e.radiusBottom = 1),
            (e.segmentsHeight = 1),
            (e.segmentsRadial = 36),
            (e.openEnded = !1),
            (e.radius = null),
            (e.arc = 360),
            e
          )
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'radiusTop', void 0),
          s([p.ObservableComponent.field], e.prototype, 'radiusBottom', void 0),
          s([p.ObservableComponent.field], e.prototype, 'segmentsHeight', void 0),
          s([p.ObservableComponent.field], e.prototype, 'segmentsRadial', void 0),
          s([p.ObservableComponent.field], e.prototype, 'openEnded', void 0),
          s([p.ObservableComponent.field], e.prototype, 'radius', void 0),
          s([p.ObservableComponent.field], e.prototype, 'arc', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.CONE_SHAPE)], e))
        )
      })(v)
      e.ConeShape = C
      var O = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.radiusTop = 1),
            (e.radiusBottom = 1),
            (e.segmentsHeight = 1),
            (e.segmentsRadial = 36),
            (e.openEnded = !1),
            (e.radius = null),
            (e.arc = 360),
            e
          )
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'radiusTop', void 0),
          s([p.ObservableComponent.field], e.prototype, 'radiusBottom', void 0),
          s([p.ObservableComponent.field], e.prototype, 'segmentsHeight', void 0),
          s([p.ObservableComponent.field], e.prototype, 'segmentsRadial', void 0),
          s([p.ObservableComponent.field], e.prototype, 'openEnded', void 0),
          s([p.ObservableComponent.field], e.prototype, 'radius', void 0),
          s([p.ObservableComponent.field], e.prototype, 'arc', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.CYLINDER_SHAPE)], e))
        )
      })(v)
      e.CylinderShape = O
      var x,
        w = (function(t) {
          function e(e) {
            var n = t.call(this) || this
            return (n.src = e), n
          }
          return r(e, t), s([v.readonly], e.prototype, 'src', void 0), (e = s([p.DisposableComponent('engine.shape', a.GLTF_SHAPE)], e))
        })(v)
      ;(e.GLTFShape = w),
        (function(t) {
          ;(t[(t.Classic = 0)] = 'Classic'),
            (t[(t.Baroque_Ornament = 1)] = 'Baroque_Ornament'),
            (t[(t.Diamond_Ornament = 2)] = 'Diamond_Ornament'),
            (t[(t.Minimal_Wide = 3)] = 'Minimal_Wide'),
            (t[(t.Minimal_Grey = 4)] = 'Minimal_Grey'),
            (t[(t.Blocky = 5)] = 'Blocky'),
            (t[(t.Gold_Edges = 6)] = 'Gold_Edges'),
            (t[(t.Gold_Carved = 7)] = 'Gold_Carved'),
            (t[(t.Gold_Wide = 8)] = 'Gold_Wide'),
            (t[(t.Gold_Rounded = 9)] = 'Gold_Rounded'),
            (t[(t.Metal_Medium = 10)] = 'Metal_Medium'),
            (t[(t.Metal_Wide = 11)] = 'Metal_Wide'),
            (t[(t.Metal_Slim = 12)] = 'Metal_Slim'),
            (t[(t.Metal_Rounded = 13)] = 'Metal_Rounded'),
            (t[(t.Pins = 14)] = 'Pins'),
            (t[(t.Minimal_Black = 15)] = 'Minimal_Black'),
            (t[(t.Minimal_White = 16)] = 'Minimal_White'),
            (t[(t.Tape = 17)] = 'Tape'),
            (t[(t.Wood_Slim = 18)] = 'Wood_Slim'),
            (t[(t.Wood_Wide = 19)] = 'Wood_Wide'),
            (t[(t.Wood_Twigs = 20)] = 'Wood_Twigs'),
            (t[(t.Canvas = 21)] = 'Canvas')
        })((x = e.PictureFrameStyle || (e.PictureFrameStyle = {})))
      var T = (function(t) {
        function e(e, n) {
          void 0 === n && (n = {})
          var o = t.call(this) || this
          o.src = e
          var r = new u.Color3(0.6404918, 0.611472, 0.8584906),
            i = x.Classic
          return (
            n instanceof u.Color3 ? (r = n) : null != n && (n.color && (r = n.color), n.style && (i = n.style)),
            (o.color = r),
            (o.style = i),
            o
          )
        }
        return (
          r(e, t),
          s([v.readonly], e.prototype, 'src', void 0),
          s([v.readonly], e.prototype, 'style', void 0),
          s([p.ObservableComponent.field], e.prototype, 'color', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.NFT_SHAPE)], e))
        )
      })(v)
      e.NFTShape = T
      var R = (function(t) {
        function e(e, n) {
          var o = t.call(this) || this
          if (((o.src = e), n))
            for (var r in n) {
              o[r] = n[r]
            }
          return o
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'src', void 0),
          s([p.ObservableComponent.readonly], e.prototype, 'samplingMode', void 0),
          s([p.ObservableComponent.readonly], e.prototype, 'wrap', void 0),
          s([p.ObservableComponent.readonly], e.prototype, 'hasAlpha', void 0),
          (e = s([p.DisposableComponent('engine.texture', a.TEXTURE)], e))
        )
      })(p.ObservableComponent)
      e.Texture = R
      var A = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.states = []), e
        }
        return (
          r(e, t),
          (e.prototype.addClip = function(t) {
            var e = this
            return (
              this.states.push(t),
              t.onChange(function() {
                e.dirty = !0
              }),
              this
            )
          }),
          (e.prototype.getClip = function(t) {
            for (var e = 0; e < this.states.length; e++) {
              var n = this.states[e]
              if (n.clip === t) return n
            }
            var o = new l.AnimationState(t)
            return this.addClip(o), o
          }),
          s([p.ObservableComponent.readonly], e.prototype, 'states', void 0),
          (e = s([p.Component('engine.animator', a.ANIMATION)], e))
        )
      })(v)
      e.Animator = A
      var E = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          return (n.src = e), n
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'src', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.OBJ_SHAPE)], e))
        )
      })(v)
      e.OBJShape = E
      var S = (function(t) {
        function e(e) {
          void 0 === e && (e = '')
          var n = t.call(this) || this
          return (n.src = e), n
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'src', void 0),
          (e = s([p.DisposableComponent('engine.font', a.FONT)], e))
        )
      })(p.ObservableComponent)
      ;(e.Font = S),
        (function(t) {
          ;(t.SanFrancisco = 'builtin:SF-UI-Text-Regular SDF'),
            (t.SanFrancisco_Heavy = 'builtin:SF-UI-Text-Heavy SDF'),
            (t.SanFrancisco_Semibold = 'builtin:SF-UI-Text-Semibold SDF'),
            (t.LiberationSans = 'builtin:LiberationSans SDF')
        })(e.Fonts || (e.Fonts = {}))
      var P,
        I = (function(t) {
          function e(e) {
            var n = t.call(this) || this
            return (
              (n.outlineWidth = 0),
              (n.outlineColor = new u.Color3(1, 1, 1)),
              (n.color = new u.Color3(1, 1, 1)),
              (n.fontSize = 10),
              (n.fontWeight = 'normal'),
              (n.opacity = 1),
              (n.value = ''),
              (n.lineSpacing = '0px'),
              (n.lineCount = 0),
              (n.resizeToFit = !1),
              (n.textWrapping = !1),
              (n.shadowBlur = 0),
              (n.shadowOffsetX = 0),
              (n.shadowOffsetY = 0),
              (n.shadowColor = new u.Color3(1, 1, 1)),
              (n.zIndex = 0),
              (n.hTextAlign = 'center'),
              (n.vTextAlign = 'center'),
              (n.width = 1),
              (n.height = 1),
              (n.paddingTop = 0),
              (n.paddingRight = 0),
              (n.paddingBottom = 0),
              (n.paddingLeft = 0),
              (n.isPickable = !1),
              (n.billboard = !1),
              (n.visible = !0),
              e && (n.value = e),
              n
            )
          }
          return (
            r(e, t),
            s([p.ObservableComponent.field], e.prototype, 'outlineWidth', void 0),
            s([p.ObservableComponent.field], e.prototype, 'outlineColor', void 0),
            s([p.ObservableComponent.field], e.prototype, 'color', void 0),
            s([p.ObservableComponent.field], e.prototype, 'fontSize', void 0),
            s([p.ObservableComponent.field], e.prototype, 'fontWeight', void 0),
            s([p.ObservableComponent.component], e.prototype, 'font', void 0),
            s([p.ObservableComponent.field], e.prototype, 'opacity', void 0),
            s([p.ObservableComponent.field], e.prototype, 'value', void 0),
            s([p.ObservableComponent.field], e.prototype, 'lineSpacing', void 0),
            s([p.ObservableComponent.field], e.prototype, 'lineCount', void 0),
            s([p.ObservableComponent.field], e.prototype, 'resizeToFit', void 0),
            s([p.ObservableComponent.field], e.prototype, 'textWrapping', void 0),
            s([p.ObservableComponent.field], e.prototype, 'shadowBlur', void 0),
            s([p.ObservableComponent.field], e.prototype, 'shadowOffsetX', void 0),
            s([p.ObservableComponent.field], e.prototype, 'shadowOffsetY', void 0),
            s([p.ObservableComponent.field], e.prototype, 'shadowColor', void 0),
            s([p.ObservableComponent.field], e.prototype, 'zIndex', void 0),
            s([p.ObservableComponent.field], e.prototype, 'hTextAlign', void 0),
            s([p.ObservableComponent.field], e.prototype, 'vTextAlign', void 0),
            s([p.ObservableComponent.field], e.prototype, 'width', void 0),
            s([p.ObservableComponent.field], e.prototype, 'height', void 0),
            s([p.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
            s([p.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
            s([p.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
            s([p.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
            s([p.ObservableComponent.field], e.prototype, 'isPickable', void 0),
            s([p.ObservableComponent.field], e.prototype, 'billboard', void 0),
            s([p.ObservableComponent.field], e.prototype, 'visible', void 0),
            (e = s([p.Component('engine.text', a.TEXT_SHAPE)], e))
          )
        })(p.ObservableComponent)
      ;(e.TextShape = I),
        (function(t) {
          ;(t[(t.OPAQUE = 0)] = 'OPAQUE'),
            (t[(t.ALPHA_TEST = 1)] = 'ALPHA_TEST'),
            (t[(t.ALPHA_BLEND = 2)] = 'ALPHA_BLEND'),
            (t[(t.ALPHA_TEST_AND_BLEND = 3)] = 'ALPHA_TEST_AND_BLEND'),
            (t[(t.AUTO = 4)] = 'AUTO')
        })((P = e.TransparencyMode || (e.TransparencyMode = {})))
      var z = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.alphaTest = 0.5), (e.castShadows = !0), (e.transparencyMode = P.AUTO), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'alphaTest', void 0),
          s([p.ObservableComponent.field], e.prototype, 'albedoColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'emissiveColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'metallic', void 0),
          s([p.ObservableComponent.field], e.prototype, 'roughness', void 0),
          s([p.ObservableComponent.field], e.prototype, 'ambientColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'reflectionColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'reflectivityColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'directIntensity', void 0),
          s([p.ObservableComponent.field], e.prototype, 'microSurface', void 0),
          s([p.ObservableComponent.field], e.prototype, 'emissiveIntensity', void 0),
          s([p.ObservableComponent.field], e.prototype, 'environmentIntensity', void 0),
          s([p.ObservableComponent.field], e.prototype, 'specularIntensity', void 0),
          s([p.ObservableComponent.component], e.prototype, 'albedoTexture', void 0),
          s([p.ObservableComponent.component], e.prototype, 'alphaTexture', void 0),
          s([p.ObservableComponent.component], e.prototype, 'emissiveTexture', void 0),
          s([p.ObservableComponent.component], e.prototype, 'bumpTexture', void 0),
          s([p.ObservableComponent.component], e.prototype, 'refractionTexture', void 0),
          s([p.ObservableComponent.field], e.prototype, 'castShadows', void 0),
          s([p.ObservableComponent.field], e.prototype, 'transparencyMode', void 0),
          (e = s([p.DisposableComponent('engine.material', a.PBR_MATERIAL)], e))
        )
      })(p.ObservableComponent)
      e.Material = z
      var M = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.alphaTest = 0.5), (e.castShadows = !0), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.component], e.prototype, 'texture', void 0),
          s([p.ObservableComponent.field], e.prototype, 'alphaTest', void 0),
          s([p.ObservableComponent.field], e.prototype, 'castShadows', void 0),
          (e = s([p.DisposableComponent('engine.material', a.BASIC_MATERIAL)], e))
        )
      })(p.ObservableComponent)
      e.BasicMaterial = M
      var D = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          if (((n.uuid = c.newId('UUID')), !e || !('apply' in e) || !('call' in e))) throw new Error('Callback is not a function')
          return (n.callback = e), n
        }
        return (
          r(e, t),
          (e.uuidEvent = function(t, n) {
            if (delete t[n]) {
              var o = n + '_' + Math.random()
              ;(t[o] = void 0),
                Object.defineProperty(t, o, i(i({}, Object.getOwnPropertyDescriptor(t, o)), { enumerable: !1 })),
                Object.defineProperty(t, n.toString(), {
                  get: function() {
                    return this[o]
                  },
                  set: function(t) {
                    var r = this[o]
                    if (t) {
                      if (!(t instanceof e)) throw new Error('value is not an OnUUIDEvent')
                      this.data[n] = t.uuid
                    } else this.data[n] = null
                    if (((this[o] = t), t !== r)) {
                      this.dirty = !0
                      for (var i = 0; i < this.subscriptions.length; i++) this.subscriptions[i](n, t, r)
                    }
                  },
                  enumerable: !0
                })
            }
          }),
          (e.prototype.toJSON = function() {
            return { uuid: this.uuid, type: this.type }
          }),
          s([p.ObservableComponent.field], e.prototype, 'callback', void 0),
          e
        )
      })(p.ObservableComponent)
      e.OnUUIDEvent = D
      var F = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.button = h.ActionButton.ANY), (e.hoverText = 'Interact'), (e.distance = 10), (e.showFeedback = !0), e
        }
        return (
          r(e, t),
          (e.prototype.toJSON = function() {
            return {
              uuid: this.uuid,
              type: this.type,
              button: this.button,
              hoverText: this.hoverText,
              distance: this.distance,
              showFeedback: this.showFeedback
            }
          }),
          s([p.ObservableComponent.field], e.prototype, 'button', void 0),
          s([p.ObservableComponent.field], e.prototype, 'hoverText', void 0),
          s([p.ObservableComponent.field], e.prototype, 'distance', void 0),
          s([p.ObservableComponent.field], e.prototype, 'showFeedback', void 0),
          e
        )
      })(D)
      e.OnPointerUUIDEvent = F
      var U = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.type = 'onPointerLock'), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = s([p.Component('engine.onPointerLock', a.UUID_CALLBACK)], e))
        )
      })(D)
      e.OnPointerLock = U
      var L = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.type = 'onAnimationEnd'), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = s([p.Component('engine.onAnimationEnd', a.UUID_CALLBACK)], e))
        )
      })(D)
      e.OnAnimationEnd = L
      var N = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([p.Component('engine.smartItem', a.SMART_ITEM)], e))
      })(p.ObservableComponent)
      e.SmartItem = N
      var V = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          return (n.url = e), n
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'url', void 0),
          (e = s([p.DisposableComponent('engine.VideoClip', a.VIDEO_CLIP)], e))
        )
      })(p.ObservableComponent)
      e.VideoClip = V
      var j = (function(t) {
        function e(e, n) {
          var o = t.call(this) || this
          if (((o.volume = 1), (o.playbackRate = 1), (o.loop = !1), (o.seek = -1), (o.playing = !1), !(e instanceof V)))
            throw new Error('Trying to create VideoTexture(VideoClip) with an invalid VideoClip')
          if (((o.videoClipId = p.getComponentId(e)), n))
            for (var r in n) {
              o[r] = n[r]
            }
          return o
        }
        return (
          r(e, t),
          (e.prototype.play = function() {
            this.playing = !0
          }),
          (e.prototype.pause = function() {
            this.playing = !1
          }),
          (e.prototype.reset = function() {
            this.seekTime(0)
          }),
          (e.prototype.seekTime = function(t) {
            ;(this.seek = t), (this.dirty = !0), (this.data.nonce = Math.random())
          }),
          (e.prototype.toJSON = function() {
            if (this.seek < 0) return t.prototype.toJSON.call(this)
            var e = JSON.parse(JSON.stringify(t.prototype.toJSON.call(this)))
            return (this.seek = -1), e
          }),
          s([p.ObservableComponent.readonly], e.prototype, 'videoClipId', void 0),
          s([p.ObservableComponent.readonly], e.prototype, 'samplingMode', void 0),
          s([p.ObservableComponent.readonly], e.prototype, 'wrap', void 0),
          s([p.ObservableComponent.field], e.prototype, 'volume', void 0),
          s([p.ObservableComponent.field], e.prototype, 'playbackRate', void 0),
          s([p.ObservableComponent.field], e.prototype, 'loop', void 0),
          s([p.ObservableComponent.field], e.prototype, 'seek', void 0),
          s([p.ObservableComponent.field], e.prototype, 'playing', void 0),
          (e = s([p.DisposableComponent('engine.VideoTexture', a.VIDEO_TEXTURE)], e))
        )
      })(p.ObservableComponent)
      e.VideoTexture = j
    },
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function(t, e, n, o) {
                void 0 === o && (o = n),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function() {
                      return e[n]
                    }
                  })
              }
            : function(t, e, n, o) {
                void 0 === o && (o = n), (t[o] = e[n])
              }),
        r =
          (this && this.__exportStar) ||
          function(t, e) {
            for (var n in t) 'default' === n || Object.prototype.hasOwnProperty.call(e, n) || o(e, t, n)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        r(n(2), e),
        r(n(9), e),
        r(n(22), e),
        r(n(23), e),
        r(n(36), e),
        r(n(37), e),
        r(n(38), e),
        r(n(24), e),
        r(n(39), e),
        r(n(40), e),
        r(n(11), e),
        r(n(41), e),
        r(n(42), e),
        r(n(25), e),
        r(n(10), e),
        r(n(6), e),
        r(n(43), e),
        r(n(15), e),
        r(n(3), e),
        r(n(21), e),
        r(n(5), e)
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Scalar = void 0)
      var o = (function() {
        function t() {}
        return (
          (t.WithinEpsilon = function(t, e, n) {
            void 0 === n && (n = 1401298e-51)
            var o = t - e
            return -n <= o && o <= n
          }),
          (t.ToHex = function(t) {
            var e = t.toString(16)
            return t <= 15 ? ('0' + e).toUpperCase() : e.toUpperCase()
          }),
          (t.Sign = function(t) {
            var e = +t
            return 0 === e || isNaN(e) ? e : e > 0 ? 1 : -1
          }),
          (t.Clamp = function(t, e, n) {
            return void 0 === e && (e = 0), void 0 === n && (n = 1), Math.min(n, Math.max(e, t))
          }),
          (t.Log2 = function(t) {
            return Math.log(t) * Math.LOG2E
          }),
          (t.Repeat = function(t, e) {
            return t - Math.floor(t / e) * e
          }),
          (t.Normalize = function(t, e, n) {
            return (t - e) / (n - e)
          }),
          (t.Denormalize = function(t, e, n) {
            return t * (n - e) + e
          }),
          (t.DeltaAngle = function(e, n) {
            var o = t.Repeat(n - e, 360)
            return o > 180 && (o -= 360), o
          }),
          (t.PingPong = function(e, n) {
            var o = t.Repeat(e, 2 * n)
            return n - Math.abs(o - n)
          }),
          (t.SmoothStep = function(e, n, o) {
            var r = t.Clamp(o)
            return n * (r = -2 * r * r * r + 3 * r * r) + e * (1 - r)
          }),
          (t.MoveTowards = function(e, n, o) {
            return Math.abs(n - e) <= o ? n : e + t.Sign(n - e) * o
          }),
          (t.MoveTowardsAngle = function(e, n, o) {
            var r = t.DeltaAngle(e, n)
            return -o < r && r < o ? n : t.MoveTowards(e, e + r, o)
          }),
          (t.Lerp = function(t, e, n) {
            return t + (e - t) * n
          }),
          (t.LerpAngle = function(e, n, o) {
            var r = t.Repeat(n - e, 360)
            return r > 180 && (r -= 360), e + r * t.Clamp(o)
          }),
          (t.InverseLerp = function(e, n, o) {
            return e !== n ? t.Clamp((o - e) / (n - e)) : 0
          }),
          (t.Hermite = function(t, e, n, o, r) {
            var i = r * r,
              s = r * i
            return t * (2 * s - 3 * i + 1) + n * (-2 * s + 3 * i) + e * (s - 2 * i + r) + o * (s - i)
          }),
          (t.RandomRange = function(t, e) {
            return t === e ? t : Math.random() * (e - t) + t
          }),
          (t.RangeToPercent = function(t, e, n) {
            return (t - e) / (n - e)
          }),
          (t.PercentToRange = function(t, e, n) {
            return (n - e) * t + e
          }),
          (t.NormalizeRadians = function(e) {
            return e - t.TwoPi * Math.floor((e + Math.PI) / t.TwoPi)
          }),
          (t.TwoPi = 2 * Math.PI),
          t
        )
      })()
      e.Scalar = o
    },
    function(t, e, n) {
      'use strict'
      var o =
        (this && this.__decorate) ||
        function(t, e, n, o) {
          var r,
            i = arguments.length,
            s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
          else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
          return i > 3 && s && Object.defineProperty(e, n, s), s
        }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.ParentChanged = e.ComponentAdded = e.ComponentRemoved = void 0)
      var r = n(8),
        i = (function() {
          function t(t, e, n) {
            ;(this.entity = t), (this.componentName = e), (this.component = n)
          }
          return (t = o([r.EventConstructor()], t))
        })()
      e.ComponentRemoved = i
      var s = (function() {
        function t(t, e, n) {
          ;(this.entity = t), (this.componentName = e), (this.classId = n)
        }
        return (t = o([r.EventConstructor()], t))
      })()
      e.ComponentAdded = s
      var a = (function() {
        function t(t, e) {
          ;(this.entity = t), (this.parent = e)
        }
        return (t = o([r.EventConstructor()], t))
      })()
      e.ParentChanged = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.EventConstructor = e.EventManager = void 0)
      var o = n(1),
        r = []
      function i(t) {
        if (!('__event_name__' in t) || 'string' != typeof t.__event_name__) throw new Error('The EventConstructor is not registered')
        return t.__event_name__
      }
      var s = (function() {
        function t() {
          this.listeners = {}
        }
        return (
          (t.prototype.addListener = function(t, e, n) {
            if (!t || 'function' != typeof t) throw new Error('Invalid EventConstructor')
            var o = i(t),
              r = this.listeners[o]
            r || (r = this.listeners[o] = [])
            for (var s = 0; s < r.length; s++) {
              if (r[s].listener === e) throw new Error('The provided listener is already registered')
            }
            return r.push({ listener: e, fn: n }), this
          }),
          (t.prototype.removeListener = function(t, e) {
            if (!e || 'function' != typeof e) throw new Error('Invalid EventConstructor')
            var n = i(e),
              o = this.listeners[n]
            if (!o) return !1
            for (var r = 0; r < o.length; r++) {
              if (o[r].listener === t) return o.splice(r, 1), !0
            }
            return !1
          }),
          (t.prototype.fireEvent = function(t) {
            var e = i(t.constructor),
              n = this.listeners[e]
            if (n)
              for (var r = 0; r < n.length; r++)
                try {
                  var s = n[r]
                  s.fn.call(s.listener, t)
                } catch (t) {
                  o.error(t)
                }
            return this
          }),
          t
        )
      })()
      ;(e.EventManager = s),
        (e.EventConstructor = function() {
          var t = o.newId('EV')
          if (-1 !== r.indexOf(t)) throw new Error('The event name ' + t + ' is already taken')
          return (
            r.push(t),
            function(e) {
              return (e.__event_name__ = t), e
            }
          )
        })
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.MathTmp = void 0)
      var o = n(1),
        r = n(3),
        i = n(10),
        s = n(11)
      e.MathTmp = {
        Vector3: o.buildArray(6, r.Vector3.Zero),
        Matrix: o.buildArray(2, s.Matrix.Identity),
        Quaternion: o.buildArray(3, i.Quaternion.Zero),
        staticUp: r.Vector3.Up(),
        tmpMatrix: s.Matrix.Zero()
      }
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Quaternion = void 0)
      var o = n(11),
        r = n(3),
        i = n(9),
        s = n(2),
        a = (function() {
          function t(t, e, n, o) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === n && (n = 0),
              void 0 === o && (o = 1),
              (this.x = t),
              (this.y = e),
              (this.z = n),
              (this.w = o)
          }
          return (
            (t.FromRotationMatrix = function(e) {
              var n = new t()
              return t.FromRotationMatrixToRef(e, n), n
            }),
            (t.FromRotationMatrixToRef = function(t, e) {
              var n,
                o = t.m,
                r = o[0],
                i = o[4],
                s = o[8],
                a = o[1],
                p = o[5],
                u = o[9],
                l = o[2],
                c = o[6],
                h = o[10],
                d = r + p + h
              d > 0
                ? ((n = 0.5 / Math.sqrt(d + 1)), (e.w = 0.25 / n), (e.x = (c - u) * n), (e.y = (s - l) * n), (e.z = (a - i) * n))
                : r > p && r > h
                ? ((n = 2 * Math.sqrt(1 + r - p - h)), (e.w = (c - u) / n), (e.x = 0.25 * n), (e.y = (i + a) / n), (e.z = (s + l) / n))
                : p > h
                ? ((n = 2 * Math.sqrt(1 + p - r - h)), (e.w = (s - l) / n), (e.x = (i + a) / n), (e.y = 0.25 * n), (e.z = (u + c) / n))
                : ((n = 2 * Math.sqrt(1 + h - r - p)), (e.w = (a - i) / n), (e.x = (s + l) / n), (e.y = (u + c) / n), (e.z = 0.25 * n))
            }),
            (t.Dot = function(t, e) {
              return t.x * e.x + t.y * e.y + t.z * e.z + t.w * e.w
            }),
            (t.AreClose = function(e, n) {
              return t.Dot(e, n) >= 0
            }),
            (t.Zero = function() {
              return new t(0, 0, 0, 0)
            }),
            (t.Inverse = function(e) {
              return new t(-e.x, -e.y, -e.z, e.w)
            }),
            (t.IsIdentity = function(t) {
              return t && 0 === t.x && 0 === t.y && 0 === t.z && 1 === t.w
            }),
            (t.RotationAxis = function(e, n) {
              var o = n * s.DEG2RAD
              return t.RotationAxisToRef(e, o, new t())
            }),
            (t.RotationAxisToRef = function(t, e, n) {
              var o = e * s.DEG2RAD,
                r = Math.sin(o / 2)
              return t.normalize(), (n.w = Math.cos(o / 2)), (n.x = t.x * r), (n.y = t.y * r), (n.z = t.z * r), n
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2], e[n + 3])
            }),
            (t.FromEulerAnglesRef = function(e, n, o, r) {
              return t.RotationYawPitchRollToRef(n * s.DEG2RAD, e * s.DEG2RAD, o * s.DEG2RAD, r)
            }),
            (t.RotationYawPitchRoll = function(e, n, o) {
              var r = new t()
              return t.RotationYawPitchRollToRef(e, n, o, r), r
            }),
            (t.RotationYawPitchRollToRef = function(t, e, n, o) {
              var r = 0.5 * n,
                i = 0.5 * e,
                s = 0.5 * t,
                a = Math.cos(i),
                p = Math.cos(s),
                u = Math.cos(r),
                l = Math.sin(i),
                c = Math.sin(s),
                h = Math.sin(r)
              ;(o.x = l * p * u + a * c * h), (o.y = a * c * u - l * p * h), (o.z = a * p * h + l * c * u), (o.w = a * p * u - l * c * h)
            }),
            (t.RotationAlphaBetaGamma = function(e, n, o) {
              var r = new t()
              return t.RotationAlphaBetaGammaToRef(e, n, o, r), r
            }),
            (t.RotationAlphaBetaGammaToRef = function(t, e, n, o) {
              var r = 0.5 * (n + t),
                i = 0.5 * (n - t),
                s = 0.5 * e
              ;(o.x = Math.cos(i) * Math.sin(s)),
                (o.y = Math.sin(i) * Math.sin(s)),
                (o.z = Math.sin(r) * Math.cos(s)),
                (o.w = Math.cos(r) * Math.cos(s))
            }),
            (t.RotationQuaternionFromAxis = function(e, n, o) {
              var r = new t(0, 0, 0, 0)
              return t.RotationQuaternionFromAxisToRef(e, n, o, r), r
            }),
            (t.RotationQuaternionFromAxisToRef = function(e, n, r, s) {
              var a = i.MathTmp.Matrix[0]
              o.Matrix.FromXYZAxesToRef(e.normalize(), n.normalize(), r.normalize(), a), t.FromRotationMatrixToRef(a, s)
            }),
            (t.Slerp = function(e, n, o) {
              var r = t.Identity
              return t.SlerpToRef(e, n, o, r), r
            }),
            (t.SlerpToRef = function(t, e, n, o) {
              var r,
                i,
                s = t.x * e.x + t.y * e.y + t.z * e.z + t.w * e.w,
                a = !1
              if ((s < 0 && ((a = !0), (s = -s)), s > 0.999999)) (i = 1 - n), (r = a ? -n : n)
              else {
                var p = Math.acos(s),
                  u = 1 / Math.sin(p)
                ;(i = Math.sin((1 - n) * p) * u), (r = a ? -Math.sin(n * p) * u : Math.sin(n * p) * u)
              }
              ;(o.x = i * t.x + r * e.x), (o.y = i * t.y + r * e.y), (o.z = i * t.z + r * e.z), (o.w = i * t.w + r * e.w)
            }),
            (t.Hermite = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s,
                p = 2 * a - 3 * s + 1,
                u = -2 * a + 3 * s,
                l = a - 2 * s + i,
                c = a - s
              return new t(
                e.x * p + o.x * u + n.x * l + r.x * c,
                e.y * p + o.y * u + n.y * l + r.y * c,
                e.z * p + o.z * u + n.z * l + r.z * c,
                e.w * p + o.w * u + n.w * l + r.w * c
              )
            }),
            Object.defineProperty(t, 'Identity', {
              get: function() {
                return new t(0, 0, 0, 1)
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.Angle = function(e, n) {
              var o = t.Dot(e, n)
              return 2 * Math.acos(Math.min(Math.abs(o), 1)) * s.RAD2DEG
            }),
            (t.Euler = function(e, n, o) {
              return t.RotationYawPitchRoll(n * s.DEG2RAD, e * s.DEG2RAD, o * s.DEG2RAD)
            }),
            (t.LookRotation = function(e, n) {
              void 0 === n && (n = i.MathTmp.staticUp)
              var o = r.Vector3.Normalize(e),
                s = r.Vector3.Normalize(r.Vector3.Cross(n, o)),
                a = r.Vector3.Cross(o, s),
                p = s.x,
                u = s.y,
                l = s.z,
                c = a.x,
                h = a.y,
                d = a.z,
                f = o.x,
                y = o.y,
                v = o.z,
                m = p + h + v,
                b = new t()
              if (m > 0) {
                var g = Math.sqrt(m + 1)
                return (b.w = 0.5 * g), (g = 0.5 / g), (b.x = (d - y) * g), (b.y = (f - l) * g), (b.z = (u - c) * g), b
              }
              if (p >= h && p >= v) {
                var _ = Math.sqrt(1 + p - h - v),
                  C = 0.5 / _
                return (b.x = 0.5 * _), (b.y = (u + c) * C), (b.z = (l + f) * C), (b.w = (d - y) * C), b
              }
              if (h > v) {
                var O = Math.sqrt(1 + h - p - v),
                  x = 0.5 / O
                return (b.x = (c + u) * x), (b.y = 0.5 * O), (b.z = (y + d) * x), (b.w = (f - l) * x), b
              }
              var w = Math.sqrt(1 + v - p - h),
                T = 0.5 / w
              return (b.x = (f + l) * T), (b.y = (y + d) * T), (b.z = 0.5 * w), (b.w = (u - c) * T), b
            }),
            (t.RotateTowards = function(e, n, o) {
              var r = t.Angle(e, n)
              if (0 === r) return n
              var i = Math.min(1, o / r)
              return t.Slerp(e, n, i)
            }),
            (t.FromToRotation = function(e, n) {
              var o = new t(),
                i = e.normalize(),
                a = n.normalize(),
                p = r.Vector3.Dot(i, a)
              if (p > -1 + s.Epsilon) {
                var u = Math.sqrt(2 * (1 + p)),
                  l = 1 / u,
                  c = r.Vector3.Cross(i, a).scaleInPlace(l)
                o.set(c.x, c.y, c.z, 0.5 * u)
              } else {
                if (p > 1 - s.Epsilon) return new t(0, 0, 0, 1)
                var h = r.Vector3.Cross(r.Vector3.Right(), i)
                h.lengthSquared() < s.Epsilon && (h = r.Vector3.Cross(r.Vector3.Forward(), i)), o.set(h.x, h.y, h.z, 0)
              }
              return o.normalize()
            }),
            Object.defineProperty(t.prototype, 'normalized', {
              get: function() {
                return this.normalize()
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.setFromToRotation = function(e, n, r) {
              void 0 === r && (r = i.MathTmp.staticUp),
                (i.MathTmp.tmpMatrix = o.Matrix.Zero()),
                o.Matrix.LookAtLHToRef(e, n, r, i.MathTmp.tmpMatrix),
                i.MathTmp.tmpMatrix.invert(),
                t.FromRotationMatrixToRef(i.MathTmp.tmpMatrix, this)
            }),
            Object.defineProperty(t.prototype, 'eulerAngles', {
              get: function() {
                var t = new r.Vector3(),
                  e = new o.Matrix()
                this.toRotationMatrix(e)
                var n = o.Matrix.GetAsMatrix3x3(e)
                return (
                  (t.y = s.RAD2DEG * Math.asin(Math.max(-1, Math.min(1, n[6])))),
                  Math.abs(n[6]) < 0.99999
                    ? ((t.x = s.RAD2DEG * Math.atan2(-n[7], n[8])), (t.z = s.RAD2DEG * Math.atan2(-n[3], n[0])))
                    : ((t.x = s.RAD2DEG * Math.atan2(n[5], n[4])), (t.z = 0)),
                  t
                )
              },
              set: function(t) {
                this.setEuler(t.x, t.y, t.z)
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.toString = function() {
              return '(' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ')'
            }),
            Object.defineProperty(t.prototype, 'length', {
              get: function() {
                return Math.sqrt(this.lengthSquared)
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'lengthSquared', {
              get: function() {
                return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.getClassName = function() {
              return 'Quaternion'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.x || 0
              return (t = (397 * (t = (397 * (t = (397 * t) ^ (this.y || 0))) ^ (this.z || 0))) ^ (this.w || 0))
            }),
            (t.prototype.asArray = function() {
              return [this.x, this.y, this.z, this.w]
            }),
            (t.prototype.equals = function(t) {
              return t && this.x === t.x && this.y === t.y && this.z === t.z && this.w === t.w
            }),
            (t.prototype.clone = function() {
              return new t(this.x, this.y, this.z, this.w)
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.x = t.x), (this.y = t.y), (this.z = t.z), (this.w = t.w), this
            }),
            (t.prototype.copyFromFloats = function(t, e, n, o) {
              return (this.x = t), (this.y = e), (this.z = n), (this.w = o), this
            }),
            (t.prototype.set = function(t, e, n, o) {
              return this.copyFromFloats(t, e, n, o)
            }),
            (t.prototype.setEuler = function(e, n, o) {
              return t.RotationYawPitchRollToRef(n * s.DEG2RAD, e * s.DEG2RAD, o * s.DEG2RAD, this), this
            }),
            (t.prototype.add = function(e) {
              return new t(this.x + e.x, this.y + e.y, this.z + e.z, this.w + e.w)
            }),
            (t.prototype.addInPlace = function(t) {
              return (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.x - e.x, this.y - e.y, this.z - e.z, this.w - e.w)
            }),
            (t.prototype.scale = function(e) {
              return new t(this.x * e, this.y * e, this.z * e, this.w * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.x = this.x * t), (e.y = this.y * t), (e.z = this.z * t), (e.w = this.w * t), this
            }),
            (t.prototype.scaleInPlace = function(t) {
              return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.x += this.x * t), (e.y += this.y * t), (e.z += this.z * t), (e.w += this.w * t), this
            }),
            (t.prototype.multiply = function(e) {
              var n = new t(0, 0, 0, 1)
              return this.multiplyToRef(e, n), n
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              var n = this.x * t.w + this.y * t.z - this.z * t.y + this.w * t.x,
                o = -this.x * t.z + this.y * t.w + this.z * t.x + this.w * t.y,
                r = this.x * t.y - this.y * t.x + this.z * t.w + this.w * t.z,
                i = -this.x * t.x - this.y * t.y - this.z * t.z + this.w * t.w
              return e.copyFromFloats(n, o, r, i), this
            }),
            (t.prototype.multiplyInPlace = function(t) {
              return this.multiplyToRef(t, this), this
            }),
            (t.prototype.conjugateToRef = function(t) {
              return t.copyFromFloats(-this.x, -this.y, -this.z, this.w), this
            }),
            (t.prototype.conjugateInPlace = function() {
              return (this.x *= -1), (this.y *= -1), (this.z *= -1), this
            }),
            (t.prototype.conjugate = function() {
              return new t(-this.x, -this.y, -this.z, this.w)
            }),
            (t.prototype.normalize = function() {
              var t = 1 / this.length
              return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
            }),
            (t.prototype.angleAxis = function(e, n) {
              if (0 === n.lengthSquared()) return t.Identity
              var o = t.Identity,
                r = e * s.DEG2RAD
              r *= 0.5
              var i = n.normalize()
              return (i = n.scaleInPlace(Math.sin(r))), (o.x = i.x), (o.y = i.y), (o.z = i.z), (o.w = Math.cos(r)), o.normalize()
            }),
            (t.prototype.toRotationMatrix = function(t) {
              return o.Matrix.FromQuaternionToRef(this, t), this
            }),
            (t.prototype.fromRotationMatrix = function(e) {
              return t.FromRotationMatrixToRef(e, this), this
            }),
            t
          )
        })()
      e.Quaternion = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Matrix = void 0)
      var o = n(3),
        r = n(10),
        i = n(9),
        s = n(21),
        a = (function() {
          function t() {
            ;(this._isIdentity = !1),
              (this._isIdentityDirty = !0),
              (this._isIdentity3x2 = !0),
              (this._isIdentity3x2Dirty = !0),
              (this._m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
              this._updateIdentityStatus(!1)
          }
          return (
            Object.defineProperty(t.prototype, 'm', {
              get: function() {
                return this._m
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t, 'IdentityReadOnly', {
              get: function() {
                return t._identityReadOnly
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.FromArray = function(e, n) {
              void 0 === n && (n = 0)
              var o = new t()
              return t.FromArrayToRef(e, n, o), o
            }),
            (t.FromArrayToRef = function(t, e, n) {
              for (var o = 0; o < 16; o++) n._m[o] = t[o + e]
              n._markAsUpdated()
            }),
            (t.FromFloatArrayToRefScaled = function(t, e, n, o) {
              for (var r = 0; r < 16; r++) o._m[r] = t[r + e] * n
              o._markAsUpdated()
            }),
            (t.FromValuesToRef = function(t, e, n, o, r, i, s, a, p, u, l, c, h, d, f, y, v) {
              var m = v._m
              ;(m[0] = t),
                (m[1] = e),
                (m[2] = n),
                (m[3] = o),
                (m[4] = r),
                (m[5] = i),
                (m[6] = s),
                (m[7] = a),
                (m[8] = p),
                (m[9] = u),
                (m[10] = l),
                (m[11] = c),
                (m[12] = h),
                (m[13] = d),
                (m[14] = f),
                (m[15] = y),
                v._markAsUpdated()
            }),
            (t.FromValues = function(e, n, o, r, i, s, a, p, u, l, c, h, d, f, y, v) {
              var m = new t(),
                b = m._m
              return (
                (b[0] = e),
                (b[1] = n),
                (b[2] = o),
                (b[3] = r),
                (b[4] = i),
                (b[5] = s),
                (b[6] = a),
                (b[7] = p),
                (b[8] = u),
                (b[9] = l),
                (b[10] = c),
                (b[11] = h),
                (b[12] = d),
                (b[13] = f),
                (b[14] = y),
                (b[15] = v),
                m._markAsUpdated(),
                m
              )
            }),
            (t.Compose = function(e, n, o) {
              var r = new t()
              return t.ComposeToRef(e, n, o, r), r
            }),
            (t.ComposeToRef = function(e, n, o, r) {
              t.ScalingToRef(e.x, e.y, e.z, i.MathTmp.Matrix[1]),
                n.toRotationMatrix(i.MathTmp.Matrix[0]),
                i.MathTmp.Matrix[1].multiplyToRef(i.MathTmp.Matrix[0], r),
                r.setTranslation(o)
            }),
            (t.Identity = function() {
              var e = t.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
              return e._updateIdentityStatus(!0), e
            }),
            (t.IdentityToRef = function(e) {
              t.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, e), e._updateIdentityStatus(!0)
            }),
            (t.Zero = function() {
              var e = t.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
              return e._updateIdentityStatus(!1), e
            }),
            (t.RotationX = function(e) {
              var n = new t()
              return t.RotationXToRef(e, n), n
            }),
            (t.Invert = function(e) {
              var n = new t()
              return e.invertToRef(n), n
            }),
            (t.RotationXToRef = function(e, n) {
              var o = Math.sin(e),
                r = Math.cos(e)
              t.FromValuesToRef(1, 0, 0, 0, 0, r, o, 0, 0, -o, r, 0, 0, 0, 0, 1, n), n._updateIdentityStatus(1 === r && 0 === o)
            }),
            (t.RotationY = function(e) {
              var n = new t()
              return t.RotationYToRef(e, n), n
            }),
            (t.RotationYToRef = function(e, n) {
              var o = Math.sin(e),
                r = Math.cos(e)
              t.FromValuesToRef(r, 0, -o, 0, 0, 1, 0, 0, o, 0, r, 0, 0, 0, 0, 1, n), n._updateIdentityStatus(1 === r && 0 === o)
            }),
            (t.RotationZ = function(e) {
              var n = new t()
              return t.RotationZToRef(e, n), n
            }),
            (t.RotationZToRef = function(e, n) {
              var o = Math.sin(e),
                r = Math.cos(e)
              t.FromValuesToRef(r, o, 0, 0, -o, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, n), n._updateIdentityStatus(1 === r && 0 === o)
            }),
            (t.RotationAxis = function(e, n) {
              var o = new t()
              return t.RotationAxisToRef(e, n, o), o
            }),
            (t.RotationAxisToRef = function(t, e, n) {
              var o = Math.sin(-e),
                r = Math.cos(-e),
                i = 1 - r
              t.normalize()
              var s = n._m
              ;(s[0] = t.x * t.x * i + r),
                (s[1] = t.x * t.y * i - t.z * o),
                (s[2] = t.x * t.z * i + t.y * o),
                (s[3] = 0),
                (s[4] = t.y * t.x * i + t.z * o),
                (s[5] = t.y * t.y * i + r),
                (s[6] = t.y * t.z * i - t.x * o),
                (s[7] = 0),
                (s[8] = t.z * t.x * i - t.y * o),
                (s[9] = t.z * t.y * i + t.x * o),
                (s[10] = t.z * t.z * i + r),
                (s[11] = 0),
                (s[12] = 0),
                (s[13] = 0),
                (s[14] = 0),
                (s[15] = 1),
                n._markAsUpdated()
            }),
            (t.RotationYawPitchRoll = function(e, n, o) {
              var r = new t()
              return t.RotationYawPitchRollToRef(e, n, o, r), r
            }),
            (t.RotationYawPitchRollToRef = function(t, e, n, o) {
              r.Quaternion.RotationYawPitchRollToRef(t, e, n, i.MathTmp.Quaternion[0]), i.MathTmp.Quaternion[0].toRotationMatrix(o)
            }),
            (t.Scaling = function(e, n, o) {
              var r = new t()
              return t.ScalingToRef(e, n, o, r), r
            }),
            (t.ScalingToRef = function(e, n, o, r) {
              t.FromValuesToRef(e, 0, 0, 0, 0, n, 0, 0, 0, 0, o, 0, 0, 0, 0, 1, r), r._updateIdentityStatus(1 === e && 1 === n && 1 === o)
            }),
            (t.Translation = function(e, n, o) {
              var r = new t()
              return t.TranslationToRef(e, n, o, r), r
            }),
            (t.TranslationToRef = function(e, n, o, r) {
              t.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, n, o, 1, r), r._updateIdentityStatus(0 === e && 0 === n && 0 === o)
            }),
            (t.Lerp = function(e, n, o) {
              var r = new t()
              return t.LerpToRef(e, n, o, r), r
            }),
            (t.LerpToRef = function(t, e, n, o) {
              for (var r = 0; r < 16; r++) o._m[r] = t._m[r] * (1 - n) + e._m[r] * n
              o._markAsUpdated()
            }),
            (t.DecomposeLerp = function(e, n, o) {
              var r = new t()
              return t.DecomposeLerpToRef(e, n, o, r), r
            }),
            (t.DecomposeLerpToRef = function(e, n, s, a) {
              var p = i.MathTmp.Vector3[0],
                u = i.MathTmp.Quaternion[0],
                l = i.MathTmp.Vector3[1]
              e.decompose(p, u, l)
              var c = i.MathTmp.Vector3[2],
                h = i.MathTmp.Quaternion[1],
                d = i.MathTmp.Vector3[3]
              n.decompose(c, h, d)
              var f = i.MathTmp.Vector3[4]
              o.Vector3.LerpToRef(p, c, s, f)
              var y = i.MathTmp.Quaternion[2]
              r.Quaternion.SlerpToRef(u, h, s, y)
              var v = i.MathTmp.Vector3[5]
              o.Vector3.LerpToRef(l, d, s, v), t.ComposeToRef(f, y, v, a)
            }),
            (t.LookAtLH = function(e, n, o) {
              var r = new t()
              return t.LookAtLHToRef(e, n, o, r), r
            }),
            (t.LookAtLHToRef = function(e, n, r, s) {
              var a = i.MathTmp.Vector3[0],
                p = i.MathTmp.Vector3[1],
                u = i.MathTmp.Vector3[2]
              n.subtractToRef(e, u), u.normalize(), o.Vector3.CrossToRef(r, u, a)
              var l = a.lengthSquared()
              0 === l ? (a.x = 1) : a.normalizeFromLength(Math.sqrt(l)), o.Vector3.CrossToRef(u, a, p), p.normalize()
              var c = -o.Vector3.Dot(a, e),
                h = -o.Vector3.Dot(p, e),
                d = -o.Vector3.Dot(u, e)
              t.FromValuesToRef(a.x, p.x, u.x, 0, a.y, p.y, u.y, 0, a.z, p.z, u.z, 0, c, h, d, 1, s)
            }),
            (t.LookAtRH = function(e, n, o) {
              var r = new t()
              return t.LookAtRHToRef(e, n, o, r), r
            }),
            (t.LookAtRHToRef = function(e, n, r, s) {
              var a = i.MathTmp.Vector3[0],
                p = i.MathTmp.Vector3[1],
                u = i.MathTmp.Vector3[2]
              e.subtractToRef(n, u), u.normalize(), o.Vector3.CrossToRef(r, u, a)
              var l = a.lengthSquared()
              0 === l ? (a.x = 1) : a.normalizeFromLength(Math.sqrt(l)), o.Vector3.CrossToRef(u, a, p), p.normalize()
              var c = -o.Vector3.Dot(a, e),
                h = -o.Vector3.Dot(p, e),
                d = -o.Vector3.Dot(u, e)
              t.FromValuesToRef(a.x, p.x, u.x, 0, a.y, p.y, u.y, 0, a.z, p.z, u.z, 0, c, h, d, 1, s)
            }),
            (t.OrthoLH = function(e, n, o, r) {
              var i = new t()
              return t.OrthoLHToRef(e, n, o, r, i), i
            }),
            (t.OrthoLHToRef = function(e, n, o, r, i) {
              var s = 2 / e,
                a = 2 / n,
                p = 2 / (r - o),
                u = -(r + o) / (r - o)
              t.FromValuesToRef(s, 0, 0, 0, 0, a, 0, 0, 0, 0, p, 0, 0, 0, u, 1, i),
                i._updateIdentityStatus(1 === s && 1 === a && 1 === p && 0 === u)
            }),
            (t.OrthoOffCenterLH = function(e, n, o, r, i, s) {
              var a = new t()
              return t.OrthoOffCenterLHToRef(e, n, o, r, i, s, a), a
            }),
            (t.OrthoOffCenterLHToRef = function(e, n, o, r, i, s, a) {
              var p = 2 / (n - e),
                u = 2 / (r - o),
                l = 2 / (s - i),
                c = -(s + i) / (s - i),
                h = (e + n) / (e - n),
                d = (r + o) / (o - r)
              t.FromValuesToRef(p, 0, 0, 0, 0, u, 0, 0, 0, 0, l, 0, h, d, c, 1, a), a._markAsUpdated()
            }),
            (t.OrthoOffCenterRH = function(e, n, o, r, i, s) {
              var a = new t()
              return t.OrthoOffCenterRHToRef(e, n, o, r, i, s, a), a
            }),
            (t.OrthoOffCenterRHToRef = function(e, n, o, r, i, s, a) {
              t.OrthoOffCenterLHToRef(e, n, o, r, i, s, a), (a._m[10] *= -1)
            }),
            (t.PerspectiveLH = function(e, n, o, r) {
              var i = new t(),
                s = (2 * o) / e,
                a = (2 * o) / n,
                p = (r + o) / (r - o),
                u = (-2 * r * o) / (r - o)
              return t.FromValuesToRef(s, 0, 0, 0, 0, a, 0, 0, 0, 0, p, 1, 0, 0, u, 0, i), i._updateIdentityStatus(!1), i
            }),
            (t.PerspectiveFovLH = function(e, n, o, r) {
              var i = new t()
              return t.PerspectiveFovLHToRef(e, n, o, r, i), i
            }),
            (t.PerspectiveFovLHToRef = function(e, n, o, r, i, s) {
              void 0 === s && (s = !0)
              var a = o,
                p = r,
                u = 1 / Math.tan(0.5 * e),
                l = s ? u / n : u,
                c = s ? u : u * n,
                h = (p + a) / (p - a),
                d = (-2 * p * a) / (p - a)
              t.FromValuesToRef(l, 0, 0, 0, 0, c, 0, 0, 0, 0, h, 1, 0, 0, d, 0, i), i._updateIdentityStatus(!1)
            }),
            (t.PerspectiveFovRH = function(e, n, o, r) {
              var i = new t()
              return t.PerspectiveFovRHToRef(e, n, o, r, i), i
            }),
            (t.PerspectiveFovRHToRef = function(e, n, o, r, i, s) {
              void 0 === s && (s = !0)
              var a = o,
                p = r,
                u = 1 / Math.tan(0.5 * e),
                l = s ? u / n : u,
                c = s ? u : u * n,
                h = -(p + a) / (p - a),
                d = (-2 * p * a) / (p - a)
              t.FromValuesToRef(l, 0, 0, 0, 0, c, 0, 0, 0, 0, h, -1, 0, 0, d, 0, i), i._updateIdentityStatus(!1)
            }),
            (t.PerspectiveFovWebVRToRef = function(t, e, n, o, r) {
              void 0 === r && (r = !1)
              var i = r ? -1 : 1,
                s = Math.tan((t.upDegrees * Math.PI) / 180),
                a = Math.tan((t.downDegrees * Math.PI) / 180),
                p = Math.tan((t.leftDegrees * Math.PI) / 180),
                u = Math.tan((t.rightDegrees * Math.PI) / 180),
                l = 2 / (p + u),
                c = 2 / (s + a),
                h = o._m
              ;(h[0] = l),
                (h[1] = h[2] = h[3] = h[4] = 0),
                (h[5] = c),
                (h[6] = h[7] = 0),
                (h[8] = (p - u) * l * 0.5),
                (h[9] = -(s - a) * c * 0.5),
                (h[10] = -n / (e - n)),
                (h[11] = 1 * i),
                (h[12] = h[13] = h[15] = 0),
                (h[14] = (-2 * n * e) / (n - e)),
                o._markAsUpdated()
            }),
            (t.GetAsMatrix2x2 = function(t) {
              return [t._m[0], t._m[1], t._m[4], t._m[5]]
            }),
            (t.GetAsMatrix3x3 = function(t) {
              return [t._m[0], t._m[1], t._m[2], t._m[4], t._m[5], t._m[6], t._m[8], t._m[9], t._m[10]]
            }),
            (t.Transpose = function(e) {
              var n = new t()
              return t.TransposeToRef(e, n), n
            }),
            (t.TransposeToRef = function(t, e) {
              var n = e._m,
                o = t._m
              ;(n[0] = o[0]),
                (n[1] = o[4]),
                (n[2] = o[8]),
                (n[3] = o[12]),
                (n[4] = o[1]),
                (n[5] = o[5]),
                (n[6] = o[9]),
                (n[7] = o[13]),
                (n[8] = o[2]),
                (n[9] = o[6]),
                (n[10] = o[10]),
                (n[11] = o[14]),
                (n[12] = o[3]),
                (n[13] = o[7]),
                (n[14] = o[11]),
                (n[15] = o[15]),
                e._updateIdentityStatus(t._isIdentity, t._isIdentityDirty)
            }),
            (t.Reflection = function(e) {
              var n = new t()
              return t.ReflectionToRef(e, n), n
            }),
            (t.ReflectionToRef = function(e, n) {
              e.normalize()
              var o = e.normal.x,
                r = e.normal.y,
                i = e.normal.z,
                s = -2 * o,
                a = -2 * r,
                p = -2 * i
              t.FromValuesToRef(
                s * o + 1,
                a * o,
                p * o,
                0,
                s * r,
                a * r + 1,
                p * r,
                0,
                s * i,
                a * i,
                p * i + 1,
                0,
                s * e.d,
                a * e.d,
                p * e.d,
                1,
                n
              )
            }),
            (t.FromXYZAxesToRef = function(e, n, o, r) {
              t.FromValuesToRef(e.x, e.y, e.z, 0, n.x, n.y, n.z, 0, o.x, o.y, o.z, 0, 0, 0, 0, 1, r)
            }),
            (t.FromQuaternionToRef = function(t, e) {
              var n = t.x * t.x,
                o = t.y * t.y,
                r = t.z * t.z,
                i = t.x * t.y,
                s = t.z * t.w,
                a = t.z * t.x,
                p = t.y * t.w,
                u = t.y * t.z,
                l = t.x * t.w
              ;(e._m[0] = 1 - 2 * (o + r)),
                (e._m[1] = 2 * (i + s)),
                (e._m[2] = 2 * (a - p)),
                (e._m[3] = 0),
                (e._m[4] = 2 * (i - s)),
                (e._m[5] = 1 - 2 * (r + n)),
                (e._m[6] = 2 * (u + l)),
                (e._m[7] = 0),
                (e._m[8] = 2 * (a + p)),
                (e._m[9] = 2 * (u - l)),
                (e._m[10] = 1 - 2 * (o + n)),
                (e._m[11] = 0),
                (e._m[12] = 0),
                (e._m[13] = 0),
                (e._m[14] = 0),
                (e._m[15] = 1),
                e._markAsUpdated()
            }),
            (t.prototype._markAsUpdated = function() {
              ;(this.updateFlag = t._updateFlagSeed++),
                (this._isIdentity = !1),
                (this._isIdentity3x2 = !1),
                (this._isIdentityDirty = !0),
                (this._isIdentity3x2Dirty = !0)
            }),
            (t.prototype.isIdentity = function() {
              if (this._isIdentityDirty) {
                this._isIdentityDirty = !1
                var t = this._m
                this._isIdentity =
                  1 === t[0] &&
                  0 === t[1] &&
                  0 === t[2] &&
                  0 === t[3] &&
                  0 === t[4] &&
                  1 === t[5] &&
                  0 === t[6] &&
                  0 === t[7] &&
                  0 === t[8] &&
                  0 === t[9] &&
                  1 === t[10] &&
                  0 === t[11] &&
                  0 === t[12] &&
                  0 === t[13] &&
                  0 === t[14] &&
                  1 === t[15]
              }
              return this._isIdentity
            }),
            (t.prototype.isIdentityAs3x2 = function() {
              return (
                this._isIdentity3x2Dirty &&
                  ((this._isIdentity3x2Dirty = !1),
                  1 !== this._m[0] ||
                  1 !== this._m[5] ||
                  1 !== this._m[15] ||
                  0 !== this._m[1] ||
                  0 !== this._m[2] ||
                  0 !== this._m[3] ||
                  0 !== this._m[4] ||
                  0 !== this._m[6] ||
                  0 !== this._m[7] ||
                  0 !== this._m[8] ||
                  0 !== this._m[9] ||
                  0 !== this._m[10] ||
                  0 !== this._m[11] ||
                  0 !== this._m[12] ||
                  0 !== this._m[13] ||
                  0 !== this._m[14]
                    ? (this._isIdentity3x2 = !1)
                    : (this._isIdentity3x2 = !0)),
                this._isIdentity3x2
              )
            }),
            (t.prototype.determinant = function() {
              if (!0 === this._isIdentity) return 1
              var t = this._m,
                e = t[0],
                n = t[1],
                o = t[2],
                r = t[3],
                i = t[4],
                s = t[5],
                a = t[6],
                p = t[7],
                u = t[8],
                l = t[9],
                c = t[10],
                h = t[11],
                d = t[12],
                f = t[13],
                y = t[14],
                v = t[15],
                m = c * v - y * h,
                b = l * v - f * h,
                g = l * y - f * c,
                _ = u * v - d * h,
                C = u * y - c * d,
                O = u * f - d * l
              return (
                e * +(s * m - a * b + p * g) + n * -(i * m - a * _ + p * C) + o * +(i * b - s * _ + p * O) + r * -(i * g - s * C + a * O)
              )
            }),
            (t.prototype.toArray = function() {
              return this._m
            }),
            (t.prototype.asArray = function() {
              return this._m
            }),
            (t.prototype.invert = function() {
              return this.invertToRef(this), this
            }),
            (t.prototype.reset = function() {
              return t.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
            }),
            (t.prototype.add = function(e) {
              var n = new t()
              return this.addToRef(e, n), n
            }),
            (t.prototype.addToRef = function(t, e) {
              for (var n = 0; n < 16; n++) e._m[n] = this._m[n] + t._m[n]
              return e._markAsUpdated(), this
            }),
            (t.prototype.addToSelf = function(t) {
              for (var e = 0; e < 16; e++) this._m[e] += t._m[e]
              return this._markAsUpdated(), this
            }),
            (t.prototype.invertToRef = function(e) {
              if (!0 === this._isIdentity) return t.IdentityToRef(e), this
              var n = this._m,
                o = n[0],
                r = n[1],
                i = n[2],
                s = n[3],
                a = n[4],
                p = n[5],
                u = n[6],
                l = n[7],
                c = n[8],
                h = n[9],
                d = n[10],
                f = n[11],
                y = n[12],
                v = n[13],
                m = n[14],
                b = n[15],
                g = d * b - m * f,
                _ = h * b - v * f,
                C = h * m - v * d,
                O = c * b - y * f,
                x = c * m - d * y,
                w = c * v - y * h,
                T = +(p * g - u * _ + l * C),
                R = -(a * g - u * O + l * x),
                A = +(a * _ - p * O + l * w),
                E = -(a * C - p * x + u * w),
                S = o * T + r * R + i * A + s * E
              if (0 === S) return e.copyFrom(this), this
              var P = 1 / S,
                I = u * b - m * l,
                z = p * b - v * l,
                M = p * m - v * u,
                D = a * b - y * l,
                F = a * m - y * u,
                U = a * v - y * p,
                L = u * f - d * l,
                N = p * f - h * l,
                V = p * d - h * u,
                j = a * f - c * l,
                H = a * d - c * u,
                B = a * h - c * p,
                k = -(r * g - i * _ + s * C),
                G = +(o * g - i * O + s * x),
                W = -(o * _ - r * O + s * w),
                q = +(o * C - r * x + i * w),
                Y = +(r * I - i * z + s * M),
                X = -(o * I - i * D + s * F),
                Z = +(o * z - r * D + s * U),
                Q = -(o * M - r * F + i * U),
                J = -(r * L - i * N + s * V),
                K = +(o * L - i * j + s * H),
                $ = -(o * N - r * j + s * B),
                tt = +(o * V - r * H + i * B)
              return (
                t.FromValuesToRef(
                  T * P,
                  k * P,
                  Y * P,
                  J * P,
                  R * P,
                  G * P,
                  X * P,
                  K * P,
                  A * P,
                  W * P,
                  Z * P,
                  $ * P,
                  E * P,
                  q * P,
                  Q * P,
                  tt * P,
                  e
                ),
                this
              )
            }),
            (t.prototype.addAtIndex = function(t, e) {
              return (this._m[t] += e), this._markAsUpdated(), this
            }),
            (t.prototype.multiplyAtIndex = function(t, e) {
              return (this._m[t] *= e), this._markAsUpdated(), this
            }),
            (t.prototype.setTranslationFromFloats = function(t, e, n) {
              return (this._m[12] = t), (this._m[13] = e), (this._m[14] = n), this._markAsUpdated(), this
            }),
            (t.prototype.setTranslation = function(t) {
              return this.setTranslationFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.getTranslation = function() {
              return new o.Vector3(this._m[12], this._m[13], this._m[14])
            }),
            (t.prototype.getTranslationToRef = function(t) {
              return (t.x = this._m[12]), (t.y = this._m[13]), (t.z = this._m[14]), this
            }),
            (t.prototype.removeRotationAndScaling = function() {
              var e = this.m
              return (
                t.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e[12], e[13], e[14], e[15], this),
                this._updateIdentityStatus(0 === e[12] && 0 === e[13] && 0 === e[14] && 1 === e[15]),
                this
              )
            }),
            (t.prototype.multiply = function(e) {
              var n = new t()
              return this.multiplyToRef(e, n), n
            }),
            (t.prototype.copyFrom = function(t) {
              t.copyToArray(this._m)
              var e = t
              return this._updateIdentityStatus(e._isIdentity, e._isIdentityDirty, e._isIdentity3x2, e._isIdentity3x2Dirty), this
            }),
            (t.prototype.copyToArray = function(t, e) {
              void 0 === e && (e = 0)
              for (var n = 0; n < 16; n++) t[e + n] = this._m[n]
              return this
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return this._isIdentity
                ? (e.copyFrom(t), this)
                : t._isIdentity
                ? (e.copyFrom(this), this)
                : (this.multiplyToArray(t, e._m, 0), e._markAsUpdated(), this)
            }),
            (t.prototype.multiplyToArray = function(t, e, n) {
              var o = this._m,
                r = t.m,
                i = o[0],
                s = o[1],
                a = o[2],
                p = o[3],
                u = o[4],
                l = o[5],
                c = o[6],
                h = o[7],
                d = o[8],
                f = o[9],
                y = o[10],
                v = o[11],
                m = o[12],
                b = o[13],
                g = o[14],
                _ = o[15],
                C = r[0],
                O = r[1],
                x = r[2],
                w = r[3],
                T = r[4],
                R = r[5],
                A = r[6],
                E = r[7],
                S = r[8],
                P = r[9],
                I = r[10],
                z = r[11],
                M = r[12],
                D = r[13],
                F = r[14],
                U = r[15]
              return (
                (e[n] = i * C + s * T + a * S + p * M),
                (e[n + 1] = i * O + s * R + a * P + p * D),
                (e[n + 2] = i * x + s * A + a * I + p * F),
                (e[n + 3] = i * w + s * E + a * z + p * U),
                (e[n + 4] = u * C + l * T + c * S + h * M),
                (e[n + 5] = u * O + l * R + c * P + h * D),
                (e[n + 6] = u * x + l * A + c * I + h * F),
                (e[n + 7] = u * w + l * E + c * z + h * U),
                (e[n + 8] = d * C + f * T + y * S + v * M),
                (e[n + 9] = d * O + f * R + y * P + v * D),
                (e[n + 10] = d * x + f * A + y * I + v * F),
                (e[n + 11] = d * w + f * E + y * z + v * U),
                (e[n + 12] = m * C + b * T + g * S + _ * M),
                (e[n + 13] = m * O + b * R + g * P + _ * D),
                (e[n + 14] = m * x + b * A + g * I + _ * F),
                (e[n + 15] = m * w + b * E + g * z + _ * U),
                this
              )
            }),
            (t.prototype.equals = function(t) {
              var e = t
              if (!e) return !1
              if ((this._isIdentity || e._isIdentity) && !this._isIdentityDirty && !e._isIdentityDirty)
                return this._isIdentity && e._isIdentity
              var n = this.m,
                o = e.m
              return (
                n[0] === o[0] &&
                n[1] === o[1] &&
                n[2] === o[2] &&
                n[3] === o[3] &&
                n[4] === o[4] &&
                n[5] === o[5] &&
                n[6] === o[6] &&
                n[7] === o[7] &&
                n[8] === o[8] &&
                n[9] === o[9] &&
                n[10] === o[10] &&
                n[11] === o[11] &&
                n[12] === o[12] &&
                n[13] === o[13] &&
                n[14] === o[14] &&
                n[15] === o[15]
              )
            }),
            (t.prototype.clone = function() {
              var e = new t()
              return e.copyFrom(this), e
            }),
            (t.prototype.getClassName = function() {
              return 'Matrix'
            }),
            (t.prototype.getHashCode = function() {
              for (var t = this._m[0] || 0, e = 1; e < 16; e++) t = (397 * t) ^ (this._m[e] || 0)
              return t
            }),
            (t.prototype.decompose = function(e, n, o) {
              if (this._isIdentity) return o && o.setAll(0), e && e.setAll(1), n && n.copyFromFloats(0, 0, 0, 1), !0
              var s = this._m
              o && o.copyFromFloats(s[12], s[13], s[14])
              var a = e || i.MathTmp.Vector3[0]
              if (
                ((a.x = Math.sqrt(s[0] * s[0] + s[1] * s[1] + s[2] * s[2])),
                (a.y = Math.sqrt(s[4] * s[4] + s[5] * s[5] + s[6] * s[6])),
                (a.z = Math.sqrt(s[8] * s[8] + s[9] * s[9] + s[10] * s[10])),
                this.determinant() <= 0 && (a.y *= -1),
                0 === a.x || 0 === a.y || 0 === a.z)
              )
                return n && n.copyFromFloats(0, 0, 0, 1), !1
              if (n) {
                var p = 1 / a.x,
                  u = 1 / a.y,
                  l = 1 / a.z
                t.FromValuesToRef(
                  s[0] * p,
                  s[1] * p,
                  s[2] * p,
                  0,
                  s[4] * u,
                  s[5] * u,
                  s[6] * u,
                  0,
                  s[8] * l,
                  s[9] * l,
                  s[10] * l,
                  0,
                  0,
                  0,
                  0,
                  1,
                  i.MathTmp.Matrix[0]
                ),
                  r.Quaternion.FromRotationMatrixToRef(i.MathTmp.Matrix[0], n)
              }
              return !0
            }),
            (t.prototype.getRow = function(t) {
              if (t < 0 || t > 3) return null
              var e = 4 * t
              return new s.Vector4(this._m[e + 0], this._m[e + 1], this._m[e + 2], this._m[e + 3])
            }),
            (t.prototype.setRow = function(t, e) {
              return this.setRowFromFloats(t, e.x, e.y, e.z, e.w)
            }),
            (t.prototype.transpose = function() {
              return t.Transpose(this)
            }),
            (t.prototype.transposeToRef = function(e) {
              return t.TransposeToRef(this, e), this
            }),
            (t.prototype.setRowFromFloats = function(t, e, n, o, r) {
              if (t < 0 || t > 3) return this
              var i = 4 * t
              return (this._m[i + 0] = e), (this._m[i + 1] = n), (this._m[i + 2] = o), (this._m[i + 3] = r), this._markAsUpdated(), this
            }),
            (t.prototype.scale = function(e) {
              var n = new t()
              return this.scaleToRef(e, n), n
            }),
            (t.prototype.scaleToRef = function(t, e) {
              for (var n = 0; n < 16; n++) e._m[n] = this._m[n] * t
              return e._markAsUpdated(), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              for (var n = 0; n < 16; n++) e._m[n] += this._m[n] * t
              return e._markAsUpdated(), this
            }),
            (t.prototype.toNormalMatrix = function(e) {
              var n = i.MathTmp.Matrix[0]
              this.invertToRef(n), n.transposeToRef(e)
              var o = e._m
              t.FromValuesToRef(o[0], o[1], o[2], 0, o[4], o[5], o[6], 0, o[8], o[9], o[10], 0, 0, 0, 0, 1, e)
            }),
            (t.prototype.getRotationMatrix = function() {
              var e = new t()
              return this.getRotationMatrixToRef(e), e
            }),
            (t.prototype.getRotationMatrixToRef = function(e) {
              var n = i.MathTmp.Vector3[0]
              if (!this.decompose(n)) return t.IdentityToRef(e), this
              var o = this._m,
                r = 1 / n.x,
                s = 1 / n.y,
                a = 1 / n.z
              return (
                t.FromValuesToRef(
                  o[0] * r,
                  o[1] * r,
                  o[2] * r,
                  0,
                  o[4] * s,
                  o[5] * s,
                  o[6] * s,
                  0,
                  o[8] * a,
                  o[9] * a,
                  o[10] * a,
                  0,
                  0,
                  0,
                  0,
                  1,
                  e
                ),
                this
              )
            }),
            (t.prototype.toggleModelMatrixHandInPlace = function() {
              var t = this._m
              ;(t[2] *= -1), (t[6] *= -1), (t[8] *= -1), (t[9] *= -1), (t[14] *= -1), this._markAsUpdated()
            }),
            (t.prototype.toggleProjectionMatrixHandInPlace = function() {
              var t = this._m
              ;(t[8] *= -1), (t[9] *= -1), (t[10] *= -1), (t[11] *= -1), this._markAsUpdated()
            }),
            (t.prototype._updateIdentityStatus = function(e, n, o, r) {
              void 0 === n && (n = !1),
                void 0 === o && (o = !1),
                void 0 === r && (r = !0),
                (this.updateFlag = t._updateFlagSeed++),
                (this._isIdentity = e),
                (this._isIdentity3x2 = e || o),
                (this._isIdentityDirty = !this._isIdentity && n),
                (this._isIdentity3x2Dirty = !this._isIdentity3x2 && r)
            }),
            (t._updateFlagSeed = 0),
            (t._identityReadOnly = t.Identity()),
            t
          )
        })()
      e.Matrix = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Entity = void 0)
      var o = n(0),
        r = n(7),
        i = n(1),
        s = (function() {
          function t(t) {
            ;(this.name = t),
              (this.children = {}),
              (this.eventManager = null),
              (this.alive = !1),
              (this.uuid = i.newId('E')),
              (this.components = {}),
              (this.engine = null),
              (this._parent = null)
          }
          return (
            (t.prototype.addComponentOrReplace = function(t) {
              if ('function' == typeof t)
                throw new Error('You passed a function or class as a component, an instance of component is expected')
              if ('object' != typeof t) throw new Error('You passed a ' + typeof t + ', an instance of component is expected')
              var e = o.getComponentName(t)
              if (this.components[e]) {
                if (this.components[e] === t) return t
                this.removeComponent(this.components[e], !1)
              }
              return this.addComponent(t)
            }),
            (t.prototype.hasComponent = function(t) {
              var e = typeof t
              if ('string' !== e && 'object' !== e && 'function' !== e)
                throw new Error('Entity#has(component): component is not a class, name or instance')
              if (null == t) return !1
              var n = 'string' === e ? t : o.getComponentName(t),
                r = this.components[n]
              return !!r && ('object' === e ? r === t : 'function' !== e || r instanceof t)
            }),
            (t.prototype.getComponent = function(t) {
              var e = typeof t
              if ('string' !== e && 'function' !== e) throw new Error('Entity#get(component): component is not a class or name')
              var n = 'string' === e ? t : o.getComponentName(t),
                r = this.components[n]
              if (!r) throw new Error('Can not get component "' + n + '" from entity "' + this.identifier + '"')
              if ('function' === e) {
                if (r instanceof t) return r
                throw new Error('Can not get component "' + n + '" from entity "' + this.identifier + '" (by instance)')
              }
              return r
            }),
            (t.prototype.getComponentOrNull = function(t) {
              var e = typeof t
              if ('string' !== e && 'function' !== e) throw new Error('Entity#getOrNull(component): component is not a class or name')
              var n = 'string' === e ? t : o.getComponentName(t),
                r = this.components[n]
              return r ? ('function' === e ? (r instanceof t ? r : null) : r) : null
            }),
            (t.prototype.getComponentOrCreate = function(t) {
              if ('function' != typeof t) throw new Error('Entity#getOrCreate(component): component is not a class')
              var e = this.getComponentOrNull(t)
              return e || ((e = new t()), o.getComponentName(e), this.addComponentOrReplace(e)), e
            }),
            (t.prototype.addComponent = function(t) {
              if ('object' != typeof t)
                throw new Error(
                  'Entity#add(component): You passed a function or class as a component, an instance of component is expected'
                )
              var e = o.getComponentName(t),
                n = o.getComponentClassId(t)
              if (this.components[e])
                throw new Error('A component of type "' + e + '" is already present in entity "' + this.identifier + '"')
              ;(this.components[e] = t), this.eventManager && this.eventManager.fireEvent(new r.ComponentAdded(this, e, n))
              var i = t
              return 'function' == typeof i.addedToEntity && i.addedToEntity(this), t
            }),
            (t.prototype.removeComponent = function(t, e) {
              void 0 === e && (e = !0)
              var n = typeof t
              if ('string' !== n && 'function' !== n && 'object' !== n)
                throw new Error('Entity#remove(component): component is not a class, class or name')
              var s = 'string' === n ? t : o.getComponentName(t),
                a = this.components[s]
              if (a) {
                if ('function' === n)
                  return a instanceof t
                    ? (delete this.components[s],
                      void (
                        a &&
                        (e && this.eventManager && this.eventManager.fireEvent(new r.ComponentRemoved(this, s, a)),
                        'function' == typeof a.removedFromEntity && a.removedFromEntity(this))
                      ))
                    : void i.log(
                        'Entity Warning: Trying to remove wrong (by constructor) component "' +
                          s +
                          '" from entity "' +
                          this.identifier +
                          '"'
                      )
                delete this.components[s],
                  a &&
                    (e && this.eventManager && this.eventManager.fireEvent(new r.ComponentRemoved(this, s, a)),
                    'function' == typeof a.removedFromEntity && a.removedFromEntity(this))
              } else i.log('Entity Warning: Trying to remove inexisting component "' + s + '" from entity "' + this.identifier + '"')
            }),
            (t.prototype.isAddedToEngine = function() {
              return !(!this.engine || (!(this.uuid in this.engine.entities) && this.engine.rootEntity !== this))
            }),
            (t.prototype.setParent = function(t) {
              var e
              if (t && 'getEntityRepresentation' in t) {
                if (!this.engine)
                  throw new Error('In order to set an attachable as parent, you first need to add the entity to the engine.')
                e = t.getEntityRepresentation(this.engine)
              } else e = !t && this.engine ? this.engine.rootEntity : t
              var n = this.getParent()
              if (e === this)
                throw new Error(
                  'Failed to set parent for entity "' + this.identifier + '": An entity can\'t set itself as a its own parent'
                )
              if (e === n) return this
              var o = this.getCircularAncestor(e)
              if (o)
                throw new Error(
                  'Failed to set parent for entity "' +
                    this.identifier +
                    '": Circular parent references are not allowed (See entity "' +
                    o +
                    '")'
                )
              return (
                n && delete n.children[this.uuid],
                null !== e &&
                  '0' !== e.uuid &&
                  (!e.isAddedToEngine() && this.isAddedToEngine() && this.engine.removeEntity(this),
                  e.isAddedToEngine() && !this.isAddedToEngine() && e.engine.addEntity(this)),
                (this._parent = e || null),
                this.registerAsChild(),
                this.eventManager && this.engine && this.eventManager.fireEvent(new r.ParentChanged(this, e)),
                this
              )
            }),
            (t.prototype.getParent = function() {
              return this._parent
            }),
            Object.defineProperty(t.prototype, 'identifier', {
              get: function() {
                return this.name || this.uuid
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.getCircularAncestor = function(t) {
              for (var e = this.engine ? this.engine.rootEntity : null, n = t; n && n !== e; ) {
                var o = n.getParent()
                if (o === this) return n.uuid
                n = o
              }
              return null
            }),
            (t.prototype.registerAsChild = function() {
              var t = this.getParent()
              this.uuid && t && (t.children[this.uuid] = this)
            }),
            t
          )
        })()
      e.Entity = s
    },
    function(t, e, n) {
      'use strict'
      var o =
        (this && this.__decorate) ||
        function(t, e, n, o) {
          var r,
            i = arguments.length,
            s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
          else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
          return i > 3 && s && Object.defineProperty(e, n, s), s
        }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.PointerEvent = e.RaycastResponse = e.UUIDEvent = void 0)
      var r = n(8),
        i = (function() {
          function t(t, e) {
            ;(this.uuid = t), (this.payload = e)
          }
          return (t = o([r.EventConstructor()], t))
        })()
      e.UUIDEvent = i
      var s = (function() {
        function t(t) {
          this.payload = t
        }
        return (t = o([r.EventConstructor()], t))
      })()
      e.RaycastResponse = s
      var a = (function() {
        function t(t) {
          this.payload = t
        }
        return (t = o([r.EventConstructor()], t))
      })()
      e.PointerEvent = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.uuidEventSystem = e.UUIDEventSystem = e.pointerEventSystem = e.PointerEventSystem = e.raycastEventSystem = e.RaycastEventSystem = void 0)
      var o = n(13),
        r = n(4),
        i = n(7),
        s = n(16),
        a = n(28),
        p = (function() {
          function t() {}
          return (
            (t.prototype.activate = function(t) {
              t.eventManager.addListener(o.RaycastResponse, this, function(t) {
                'HitFirst' === t.payload.queryType
                  ? a.PhysicsCast.instance.handleRaycastHitFirstResponse(t)
                  : 'HitAll' === t.payload.queryType && a.PhysicsCast.instance.handleRaycastHitAllResponse(t)
              }),
                'undefined' != typeof dcl && dcl.subscribe('raycastResponse')
            }),
            (t.prototype.deactivate = function() {
              'undefined' != typeof dcl && dcl.unsubscribe('raycastResponse')
            }),
            t
          )
        })()
      ;(e.RaycastEventSystem = p), (e.raycastEventSystem = new p())
      var u = (function() {
        function t() {}
        return (
          (t.prototype.activate = function(t) {
            t.eventManager.addListener(o.PointerEvent, this, function(t) {
              s.Input.instance.handlePointerEvent(t.payload)
            }),
              'undefined' != typeof dcl && (dcl.subscribe('pointerUp'), dcl.subscribe('pointerDown'), dcl.subscribe('pointerEvent'))
          }),
          (t.prototype.deactivate = function() {
            'undefined' != typeof dcl && (dcl.unsubscribe('pointerUp'), dcl.unsubscribe('pointerDown'), dcl.unsubscribe('pointerEvent'))
          }),
          t
        )
      })()
      ;(e.PointerEventSystem = u), (e.pointerEventSystem = new u())
      var l = (function() {
        function t() {
          this.handlerMap = {}
        }
        return (
          (t.prototype.activate = function(t) {
            t.eventManager.addListener(o.UUIDEvent, this, this.handleEvent),
              t.eventManager.addListener(i.ComponentAdded, this, this.componentAdded),
              t.eventManager.addListener(i.ComponentRemoved, this, this.componentRemoved),
              'undefined' != typeof dcl && dcl.subscribe('uuidEvent')
          }),
          (t.prototype.deactivate = function() {
            'undefined' != typeof dcl && dcl.unsubscribe('uuidEvent')
          }),
          (t.prototype.onAddEntity = function(t) {
            for (var e in t.components) {
              var n = t.components[e]
              n instanceof r.OnUUIDEvent && (this.handlerMap[n.uuid] = n)
            }
          }),
          (t.prototype.onRemoveEntity = function(t) {
            for (var e in t.components) {
              var n = t.components[e]
              n instanceof r.OnUUIDEvent && delete this.handlerMap[n.uuid]
            }
          }),
          (t.prototype.componentAdded = function(t) {
            if (t.entity.isAddedToEngine()) {
              var e = t.entity.components[t.componentName]
              e instanceof r.OnUUIDEvent && (this.handlerMap[e.uuid] = e)
            }
          }),
          (t.prototype.componentRemoved = function(t) {
            t.entity.isAddedToEngine() && t.component instanceof r.OnUUIDEvent && delete this.handlerMap[t.component.uuid]
          }),
          (t.prototype.handleEvent = function(t) {
            if (t.uuid in this.handlerMap) {
              var e = this.handlerMap[t.uuid]
              e && e.callback && 'call' in e.callback && e.callback(t.payload)
            }
          }),
          t
        )
      })()
      ;(e.UUIDEventSystem = l), (e.uuidEventSystem = new l())
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Vector2 = void 0)
      var o = n(2),
        r = n(6),
        i = (function() {
          function t(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), (this.x = t), (this.y = e)
          }
          return (
            (t.Zero = function() {
              return new t(0, 0)
            }),
            (t.One = function() {
              return new t(1, 1)
            }),
            (t.Add = function(e, n) {
              return new t(e.x, e.y).addInPlace(n)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1])
            }),
            (t.FromArrayToRef = function(t, e, n) {
              ;(n.x = t[e]), (n.y = t[e + 1])
            }),
            (t.CatmullRom = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s
              return new t(
                0.5 * (2 * n.x + (-e.x + o.x) * i + (2 * e.x - 5 * n.x + 4 * o.x - r.x) * s + (-e.x + 3 * n.x - 3 * o.x + r.x) * a),
                0.5 * (2 * n.y + (-e.y + o.y) * i + (2 * e.y - 5 * n.y + 4 * o.y - r.y) * s + (-e.y + 3 * n.y - 3 * o.y + r.y) * a)
              )
            }),
            (t.Clamp = function(e, n, o) {
              var r = e.x
              r = (r = r > o.x ? o.x : r) < n.x ? n.x : r
              var i = e.y
              return new t(r, (i = (i = i > o.y ? o.y : i) < n.y ? n.y : i))
            }),
            (t.Hermite = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s,
                p = 2 * a - 3 * s + 1,
                u = -2 * a + 3 * s,
                l = a - 2 * s + i,
                c = a - s
              return new t(e.x * p + o.x * u + n.x * l + r.x * c, e.y * p + o.y * u + n.y * l + r.y * c)
            }),
            (t.Lerp = function(e, n, o) {
              return new t(e.x + (n.x - e.x) * o, e.y + (n.y - e.y) * o)
            }),
            (t.Dot = function(t, e) {
              return t.x * e.x + t.y * e.y
            }),
            (t.Normalize = function(e) {
              var n = new t(e.x, e.y)
              return n.normalize(), n
            }),
            (t.Minimize = function(e, n) {
              return new t(e.x < n.x ? e.x : n.x, e.y < n.y ? e.y : n.y)
            }),
            (t.Maximize = function(e, n) {
              return new t(e.x > n.x ? e.x : n.x, e.y > n.y ? e.y : n.y)
            }),
            (t.Transform = function(e, n) {
              var o = t.Zero()
              return t.TransformToRef(e, n, o), o
            }),
            (t.TransformToRef = function(t, e, n) {
              var o = e.m,
                r = t.x * o[0] + t.y * o[4] + o[12],
                i = t.x * o[1] + t.y * o[5] + o[13]
              ;(n.x = r), (n.y = i)
            }),
            (t.PointInTriangle = function(t, e, n, o) {
              var r = 0.5 * (-n.y * o.x + e.y * (-n.x + o.x) + e.x * (n.y - o.y) + n.x * o.y),
                i = r < 0 ? -1 : 1,
                s = (e.y * o.x - e.x * o.y + (o.y - e.y) * t.x + (e.x - o.x) * t.y) * i,
                a = (e.x * n.y - e.y * n.x + (e.y - n.y) * t.x + (n.x - e.x) * t.y) * i
              return s > 0 && a > 0 && s + a < 2 * r * i
            }),
            (t.Distance = function(e, n) {
              return Math.sqrt(t.DistanceSquared(e, n))
            }),
            (t.DistanceSquared = function(t, e) {
              var n = t.x - e.x,
                o = t.y - e.y
              return n * n + o * o
            }),
            (t.Center = function(e, n) {
              var o = t.Add(e, n)
              return o.scaleInPlace(0.5), o
            }),
            (t.DistanceOfPointFromSegment = function(e, n, o) {
              var r = t.DistanceSquared(n, o)
              if (0 === r) return t.Distance(e, n)
              var i = o.subtract(n),
                s = Math.max(0, Math.min(1, t.Dot(e.subtract(n), i) / r)),
                a = n.add(i.multiplyByFloats(s, s))
              return t.Distance(e, a)
            }),
            (t.prototype.toString = function() {
              return '{X: ' + this.x + ' Y:' + this.y + '}'
            }),
            (t.prototype.getClassName = function() {
              return 'Vector2'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.x || 0
              return (t = (397 * t) ^ (this.y || 0))
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.x), (t[e + 1] = this.y), this
            }),
            (t.prototype.asArray = function() {
              var t = new Array()
              return this.toArray(t, 0), t
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.x = t.x), (this.y = t.y), this
            }),
            (t.prototype.copyFromFloats = function(t, e) {
              return (this.x = t), (this.y = e), this
            }),
            (t.prototype.set = function(t, e) {
              return this.copyFromFloats(t, e)
            }),
            (t.prototype.add = function(e) {
              return new t(this.x + e.x, this.y + e.y)
            }),
            (t.prototype.addToRef = function(t, e) {
              return (e.x = this.x + t.x), (e.y = this.y + t.y), this
            }),
            (t.prototype.addInPlace = function(t) {
              return (this.x += t.x), (this.y += t.y), this
            }),
            (t.prototype.addVector3 = function(e) {
              return new t(this.x + e.x, this.y + e.y)
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.x - e.x, this.y - e.y)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return (e.x = this.x - t.x), (e.y = this.y - t.y), this
            }),
            (t.prototype.subtractInPlace = function(t) {
              return (this.x -= t.x), (this.y -= t.y), this
            }),
            (t.prototype.multiplyInPlace = function(t) {
              return (this.x *= t.x), (this.y *= t.y), this
            }),
            (t.prototype.multiply = function(e) {
              return new t(this.x * e.x, this.y * e.y)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return (e.x = this.x * t.x), (e.y = this.y * t.y), this
            }),
            (t.prototype.multiplyByFloats = function(e, n) {
              return new t(this.x * e, this.y * n)
            }),
            (t.prototype.divide = function(e) {
              return new t(this.x / e.x, this.y / e.y)
            }),
            (t.prototype.divideToRef = function(t, e) {
              return (e.x = this.x / t.x), (e.y = this.y / t.y), this
            }),
            (t.prototype.divideInPlace = function(t) {
              return this.divideToRef(t, this)
            }),
            (t.prototype.negate = function() {
              return new t(-this.x, -this.y)
            }),
            (t.prototype.scaleInPlace = function(t) {
              return (this.x *= t), (this.y *= t), this
            }),
            (t.prototype.scale = function(e) {
              var n = new t(0, 0)
              return this.scaleToRef(e, n), n
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.x = this.x * t), (e.y = this.y * t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.x += this.x * t), (e.y += this.y * t), this
            }),
            (t.prototype.equals = function(t) {
              return t && this.x === t.x && this.y === t.y
            }),
            (t.prototype.equalsWithEpsilon = function(t, e) {
              return void 0 === e && (e = o.Epsilon), t && r.Scalar.WithinEpsilon(this.x, t.x, e) && r.Scalar.WithinEpsilon(this.y, t.y, e)
            }),
            (t.prototype.floor = function() {
              return new t(Math.floor(this.x), Math.floor(this.y))
            }),
            (t.prototype.fract = function() {
              return new t(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
            }),
            (t.prototype.length = function() {
              return Math.sqrt(this.x * this.x + this.y * this.y)
            }),
            (t.prototype.lengthSquared = function() {
              return this.x * this.x + this.y * this.y
            }),
            (t.prototype.normalize = function() {
              var t = this.length()
              if (0 === t) return this
              var e = 1 / t
              return (this.x *= e), (this.y *= e), this
            }),
            (t.prototype.clone = function() {
              return new t(this.x, this.y)
            }),
            t
          )
        })()
      e.Vector2 = i
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__assign) ||
          function() {
            return (i =
              Object.assign ||
              function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                return t
              }).apply(this, arguments)
          },
        s =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Input = e.GlobalPointerUp = e.GlobalPointerDown = e.PointerEventComponent = e.ActionButton = void 0)
      var a,
        p = n(27),
        u = n(5),
        l = n(0)
      !(function(t) {
        ;(t.POINTER = 'POINTER'), (t.PRIMARY = 'PRIMARY'), (t.SECONDARY = 'SECONDARY'), (t.ANY = 'ANY')
      })((a = e.ActionButton || (e.ActionButton = {})))
      var c = function(t) {
        if (((this.callback = t), !t || !('apply' in t) || !('call' in t))) throw new Error('Callback is not a function')
        y.ensureInstance()
      }
      e.PointerEventComponent = c
      var h = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([l.Component('pointerDown')], e))
      })(c)
      e.GlobalPointerDown = h
      var d = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([l.Component('pointerUp')], e))
      })(c)
      e.GlobalPointerUp = d
      var f = function(t, e) {
          ;(this.fn = t), (this.useRaycast = e)
        },
        y = (function() {
          function t() {
            var t, e
            ;(this.subscriptions =
              (((t = {})[a.POINTER] = { BUTTON_DOWN: [], BUTTON_UP: [] }),
              (t[a.PRIMARY] = { BUTTON_DOWN: [], BUTTON_UP: [] }),
              (t[a.SECONDARY] = { BUTTON_DOWN: [], BUTTON_UP: [] }),
              (t[a.ANY] = { BUTTON_DOWN: [], BUTTON_UP: [] }),
              t)),
              (this.internalState =
                (((e = {})[a.POINTER] = { BUTTON_DOWN: !1 }),
                (e[a.PRIMARY] = { BUTTON_DOWN: !1 }),
                (e[a.SECONDARY] = { BUTTON_DOWN: !1 }),
                (e[a.ANY] = { BUTTON_DOWN: !1 }),
                e))
          }
          return (
            Object.defineProperty(t, 'instance', {
              get: function() {
                return t.ensureInstance(), t._instance
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.ensureInstance = function() {
              t._instance || (t._instance = new t())
            }),
            (t.prototype.isButtonPressed = function(t) {
              return this.internalState[t]
            }),
            (t.prototype.subscribe = function(t, e, n, o) {
              var r = this
              return (
                this.subscriptions[e][t].push(new f(o, n)),
                function() {
                  return r.unsubscribe(t, e, o)
                }
              )
            }),
            (t.prototype.unsubscribe = function(t, e, n) {
              var o = this.getSubscriptionId(t, e, n)
              return o > -1 && this.subscriptions[e][t].splice(o, 1)
            }),
            (t.prototype.handlePointerEvent = function(t) {
              var e = this.getPointerById(t.buttonId),
                n = i(i({}, t), {
                  button: e,
                  direction: new u.Vector3().copyFrom(t.direction),
                  origin: new u.Vector3().copyFrom(t.origin),
                  hit: void 0
                }),
                o = t.hit
                  ? i(i({}, t.hit), {
                      hitPoint: new u.Vector3().copyFrom(t.hit.hitPoint),
                      normal: new u.Vector3().copyFrom(t.hit.normal),
                      worldNormal: new u.Vector3().copyFrom(t.hit.worldNormal)
                    })
                  : void 0
              if (t.type === p.InputEventType.DOWN) {
                this.internalState[e].BUTTON_DOWN = !0
                for (var r = 0; r < this.subscriptions[e].BUTTON_DOWN.length; r++) {
                  ;(s = this.subscriptions[e].BUTTON_DOWN[r]).useRaycast ? (n.hit = o) : (n.hit = void 0), s.fn(n)
                }
                if (o && o.entityId && l.DisposableComponent.engine)
                  (c = (a = l.DisposableComponent.engine.entities[o.entityId]) && a.getComponentOrNull(h)) && ((n.hit = o), c.callback(n))
              } else {
                this.internalState[e].BUTTON_DOWN = !1
                for (r = 0; r < this.subscriptions[e].BUTTON_UP.length; r++) {
                  var s
                  ;(s = this.subscriptions[e].BUTTON_UP[r]).useRaycast ? (n.hit = o) : (n.hit = void 0), s.fn(n)
                }
                var a, c
                if (o && o.entityId && l.DisposableComponent.engine)
                  (c = (a = l.DisposableComponent.engine.entities[o.entityId]) && a.getComponentOrNull(d)) && ((n.hit = o), c.callback(n))
              }
            }),
            (t.prototype.getSubscriptionId = function(t, e, n) {
              for (var o = 0; o < this.subscriptions[e][t].length; o++) if (this.subscriptions[e][t][o].fn === n) return o
              return -1
            }),
            (t.prototype.getPointerById = function(t) {
              return 0 === t ? a.POINTER : 1 === t ? a.PRIMARY : a.SECONDARY
            }),
            t
          )
        })()
      e.Input = y
    },
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__read) ||
          function(t, e) {
            var n = 'function' == typeof Symbol && t[Symbol.iterator]
            if (!n) return t
            var o,
              r,
              i = n.call(t),
              s = []
            try {
              for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; ) s.push(o.value)
            } catch (t) {
              r = { error: t }
            } finally {
              try {
                o && !o.done && (n = i.return) && n.call(i)
              } finally {
                if (r) throw r.error
              }
            }
            return s
          },
        r =
          (this && this.__spread) ||
          function() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e]))
            return t
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Engine = void 0)
      var i = n(7),
        s = n(0),
        a = n(8),
        p = n(32),
        u = n(1),
        l = n(12),
        c = (function() {
          function t(t) {
            ;(this.eventManager = new a.EventManager()),
              (this.systems = []),
              (this.entityLists = {}),
              (this.addedSystems = []),
              (this._entities = {}),
              (this._disposableComponents = {}),
              (this._componentGroups = {}),
              (this.simpleSystems = []),
              this.eventManager.addListener(i.ComponentAdded, this, this.componentAddedHandler),
              this.eventManager.addListener(i.ComponentRemoved, this, this.componentRemovedHandler),
              (this.rootEntity = t),
              (this.firstPersonCameraEntity = new l.Entity()),
              (this.firstPersonCameraEntity.uuid = 'FirstPersonCameraEntityReference'),
              this.addEntity(this.firstPersonCameraEntity),
              (this.avatarEntity = new l.Entity()),
              (this.avatarEntity.uuid = 'AvatarEntityReference'),
              this.addEntity(this.avatarEntity)
          }
          return (
            Object.defineProperty(t.prototype, 'entities', {
              get: function() {
                return this._entities
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'disposableComponents', {
              get: function() {
                return this._disposableComponents
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.addEntity = function(t) {
              var e = t.getParent()
              if (t.isAddedToEngine()) return t
              for (var n in ((t.eventManager = this.eventManager),
              (t.engine = this),
              (this._entities[t.uuid] = t),
              this.checkRequirementsAndAdd(t),
              e
                ? e.isAddedToEngine() ||
                  e === this.rootEntity ||
                  u.log('Engine: warning, added an entity with a parent not present in the engine. Parent id: ' + e.uuid)
                : t.setParent(this.rootEntity),
              (t.alive = !0),
              t.children)) {
                var o = t.children[n]
                o && (o.isAddedToEngine() || this.addEntity(o))
              }
              return t
            }),
            (t.prototype.removeEntity = function(t) {
              var e = t.uuid
              if (t.isAddedToEngine()) {
                for (var n in t.components) {
                  var o = this._componentGroups[n]
                  if (o) for (var r in o) o[r].removeEntity(t)
                  delete this.entityLists[n][e]
                }
                for (var i = 0; i < this.simpleSystems.length; i++) {
                  var s = this.simpleSystems[i]
                  s.onRemoveEntity && s.onRemoveEntity(t)
                }
                for (var i in t.children) {
                  var a = t.children[i]
                  a && this.removeEntity(a)
                }
                return (t.alive = !1), (t.eventManager = null), delete this._entities[e], !0
              }
              for (var n in (u.log('Engine: Trying to remove non existent entity from engine.'),
              t.isAddedToEngine()
                ? u.log('Engine: Entity id: ' + e)
                : u.log('Engine: Entity "' + t.uuid + '" has not been added to any engine yet.'),
              u.log("Engine: Entity's components:"),
              t.components))
                u.log(n)
              return !1
            }),
            (t.prototype.addSystem = function(t, e) {
              if ((void 0 === e && (e = 0), -1 !== this.addedSystems.indexOf(t)))
                return u.log('Engine: Trying to add a system that is already added. Aborting'), t
              if (this.systems.length > 0)
                for (var n = 0; n < this.systems.length; n++) {
                  var o = this.systems[n],
                    r = n === this.systems.length - 1
                  if (o.priority > e) {
                    this.addedSystems.push(t), this.systems.splice(n, 0, { system: t, priority: e })
                    break
                  }
                  if (r) {
                    this.addedSystems.push(t), this.systems.splice(n + 1, 0, { system: t, priority: e })
                    break
                  }
                }
              else this.addedSystems.push(t), this.systems.splice(1, 0, { system: t, priority: e })
              return this.registerSystem(t), t
            }),
            (t.prototype.removeSystem = function(t) {
              var e = this.addedSystems.indexOf(t)
              if (-1 !== e) {
                ;(t.active = !1), t.deactivate && t.deactivate(), this.addedSystems.splice(e, 1)
                for (var n = 0; n < this.systems.length; n++) {
                  this.systems[n].system === t && this.systems.splice(n, 1)
                }
                return !0
              }
              return !1
            }),
            (t.prototype.update = function(t) {
              for (var e in this.systems) {
                var n = this.systems[e].system
                if (n.active && n.update)
                  try {
                    n.update(t)
                  } catch (t) {
                    u.error(t)
                  }
              }
              return this
            }),
            (t.prototype.getEntitiesWithComponent = function(t) {
              var e = 'string' == typeof t ? t : s.getComponentName(t)
              return e in this.entityLists ? this.entityLists[e] : (this.entityLists[e] = {})
            }),
            (t.prototype.registerComponent = function(t) {
              var e = s.getComponentId(t),
                n = s.getComponentName(t),
                o = s.getComponentClassId(t)
              ;(this._disposableComponents[e] = t),
                null !== o &&
                  (this.eventManager.fireEvent(new s.DisposableComponentCreated(e, n, o)),
                  this.eventManager.fireEvent(new s.DisposableComponentUpdated(e, t)))
            }),
            (t.prototype.disposeComponent = function(t) {
              var e = s.getComponentId(t)
              return (
                delete this._disposableComponents[e] &&
                (this.eventManager.fireEvent(new s.DisposableComponentRemoved(e)), t.onDispose && t.onDispose(), !0)
              )
            }),
            (t.prototype.updateComponent = function(t) {
              this.eventManager.fireEvent(new s.DisposableComponentUpdated(s.getComponentId(t), t))
            }),
            (t.prototype.getComponentGroup = function() {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
              var n = new (p.ComponentGroup.bind.apply(p.ComponentGroup, r([void 0], t)))()
              n.active = !0
              for (var o = n.requiresNames, i = 0; i < o.length; i++) {
                var s = o[i],
                  a = this._componentGroups[s]
                a || (this._componentGroups[s] = a = []), -1 === a.indexOf(n) && a.push(n)
              }
              for (var u in this._entities) this.checkRequirements(this._entities[u], n)
              return n
            }),
            (t.prototype.removeComponentGroup = function(t) {
              if (t.active) {
                t.active = !1
                for (var e = t.requiresNames, n = 0; n < e.length; n++) {
                  var o = e[n],
                    r = this._componentGroups[o]
                  if (r) {
                    var i = r.indexOf(t)
                    ;-1 !== i && r.splice(i, 1)
                  }
                }
                return !0
              }
              return !1
            }),
            (t.prototype.registerSystem = function(t) {
              ;(t.active = !0), t.activate && t.activate(this), this.simpleSystems.push(t)
            }),
            (t.prototype.checkRequirementsAndAdd = function(t) {
              if (t.isAddedToEngine()) {
                for (var e in t.components) {
                  e in this.entityLists || (this.entityLists[e] = {}), (this.entityLists[e][t.uuid] = t)
                  var n = this._componentGroups[e]
                  if (n) for (var o in n) this.checkRequirements(t, n[o])
                }
                for (var r = 0; r < this.simpleSystems.length; r++) {
                  var i = this.simpleSystems[r]
                  i.onAddEntity && i.onAddEntity(t)
                }
              }
            }),
            (t.prototype.checkRequirements = function(t, e) {
              e.meetsRequirements(t) ? e.hasEntity(t) || e.addEntity(t) : e.hasEntity(t) && e.removeEntity(t)
            }),
            (t.prototype.componentAddedHandler = function(t) {
              var e,
                n = t.entity,
                o = t.componentName
              if (n.isAddedToEngine()) {
                this.entityLists[o] ? (this.entityLists[o][n.uuid] = n) : (this.entityLists[o] = (((e = {})[n.uuid] = n), e))
                var r = this._componentGroups[o]
                if (r) for (var i in r) this.checkRequirements(n, r[i])
              }
            }),
            (t.prototype.componentRemovedHandler = function(t) {
              var e = t.entity,
                n = t.componentName
              if (e.isAddedToEngine()) {
                delete this.entityLists[n][e.uuid]
                var o = this._componentGroups[n]
                if (o) for (var r in o) this.checkRequirements(e, o[r])
              }
            }),
            t
          )
        })()
      e.Engine = c
    },
    function(t, e, n) {
      'use strict'
      var o
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.UIValue = e.UIValueType = void 0),
        (function(t) {
          ;(t[(t.PERCENT = 0)] = 'PERCENT'), (t[(t.PIXELS = 1)] = 'PIXELS')
        })((o = e.UIValueType || (e.UIValueType = {})))
      var r = (function() {
        function t(t) {
          if (((this.type = o.PIXELS), 'string' == typeof t)) {
            var e = t
            e.indexOf('px') > -1 ? (this.type = o.PIXELS) : e.indexOf('%') > -1 && (this.type = o.PERCENT), (this.value = parseFloat(e))
          } else this.value = t
        }
        return (
          (t.prototype.toString = function() {
            var t = this.value.toString()
            return this.type === o.PERCENT ? (t += '%') : (t += 'px'), t
          }),
          t
        )
      })()
      e.UIValue = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.executeTask = void 0)
      var o = n(1),
        r = Promise.resolve().then.bind(Promise.resolve())
      e.executeTask = function(t) {
        var e = r(t)
        return (
          (e.isComplete = !1),
          e
            .then(function(t) {
              ;(e.isComplete = !0), (e.result = t), (e.didFail = !1)
            })
            .catch(function(t) {
              ;(e.isComplete = !0), (e.error = t), (e.didFail = !0), o.error('executeTask: FAILED ' + t.toString(), t)
            }),
          e
        )
      }
    },
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__awaiter) ||
          function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
              function s(t) {
                try {
                  p(o.next(t))
                } catch (t) {
                  i(t)
                }
              }
              function a(t) {
                try {
                  p(o.throw(t))
                } catch (t) {
                  i(t)
                }
              }
              function p(t) {
                var e
                t.done
                  ? r(t.value)
                  : ((e = t.value),
                    e instanceof n
                      ? e
                      : new n(function(t) {
                          t(e)
                        })).then(s, a)
              }
              p((o = o.apply(t, e || [])).next())
            })
          },
        r =
          (this && this.__generator) ||
          function(t, e) {
            var n,
              o,
              r,
              i,
              s = {
                label: 0,
                sent: function() {
                  if (1 & r[0]) throw r[1]
                  return r[1]
                },
                trys: [],
                ops: []
              }
            return (
              (i = { next: a(0), throw: a(1), return: a(2) }),
              'function' == typeof Symbol &&
                (i[Symbol.iterator] = function() {
                  return this
                }),
              i
            )
            function a(i) {
              return function(a) {
                return (function(i) {
                  if (n) throw new TypeError('Generator is already executing.')
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        o &&
                          (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) &&
                          !(r = r.call(o, i[1])).done)
                      )
                        return r
                      switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                        case 0:
                        case 1:
                          r = i
                          break
                        case 4:
                          return s.label++, { value: i[1], done: !1 }
                        case 5:
                          s.label++, (o = i[1]), (i = [0])
                          continue
                        case 7:
                          ;(i = s.ops.pop()), s.trys.pop()
                          continue
                        default:
                          if (!((r = s.trys), (r = r.length > 0 && r[r.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                            s = 0
                            continue
                          }
                          if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                            s.label = i[1]
                            break
                          }
                          if (6 === i[0] && s.label < r[1]) {
                            ;(s.label = r[1]), (r = i)
                            break
                          }
                          if (r && s.label < r[2]) {
                            ;(s.label = r[2]), s.ops.push(i)
                            break
                          }
                          r[2] && s.ops.pop(), s.trys.pop()
                          continue
                      }
                      i = e.call(t, s)
                    } catch (t) {
                      ;(i = [6, t]), (o = 0)
                    } finally {
                      n = r = 0
                    }
                  if (5 & i[0]) throw i[1]
                  return { value: i[0] ? i[1] : void 0, done: !0 }
                })([i, a])
              }
            }
          },
        i =
          (this && this.__values) ||
          function(t) {
            var e = 'function' == typeof Symbol && Symbol.iterator,
              n = e && t[e],
              o = 0
            if (n) return n.call(t)
            if (t && 'number' == typeof t.length)
              return {
                next: function() {
                  return t && o >= t.length && (t = void 0), { value: t && t[o++], done: !t }
                }
              }
            throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Observable = e.MultiObserver = e.Observer = e.ObserverEventState = void 0)
      var s = n(19),
        a = (function() {
          function t(t, e, n, o) {
            void 0 === e && (e = !1), this.initalize(t, e, n, o)
          }
          return (
            (t.prototype.initalize = function(t, e, n, o) {
              return (
                void 0 === e && (e = !1), (this.mask = t), (this.skipNextObservers = e), (this.target = n), (this.currentTarget = o), this
              )
            }),
            t
          )
        })()
      e.ObserverEventState = a
      var p = function(t, e, n) {
        void 0 === n && (n = null),
          (this.callback = t),
          (this.mask = e),
          (this.scope = n),
          (this.unregisterOnNextCall = !1),
          (this._willBeUnregistered = !1)
      }
      e.Observer = p
      var u = (function() {
        function t() {
          ;(this._observers = null), (this._observables = null)
        }
        return (
          (t.Watch = function(e, n, o, r) {
            var s, a
            void 0 === o && (o = -1), void 0 === r && (r = null)
            var p = new t()
            ;(p._observers = new Array()), (p._observables = e)
            try {
              for (var u = i(e), l = u.next(); !l.done; l = u.next()) {
                var c = l.value.add(n, o, !1, r)
                c && p._observers.push(c)
              }
            } catch (t) {
              s = { error: t }
            } finally {
              try {
                l && !l.done && (a = u.return) && a.call(u)
              } finally {
                if (s) throw s.error
              }
            }
            return p
          }),
          (t.prototype.dispose = function() {
            if (this._observers && this._observables)
              for (var t = 0; t < this._observers.length; t++) this._observables[t].remove(this._observers[t])
            ;(this._observers = null), (this._observables = null)
          }),
          t
        )
      })()
      e.MultiObserver = u
      var l = (function() {
        function t(t) {
          ;(this._observers = new Array()), (this._onObserverAdded = null), (this._eventState = new a(0)), t && (this._onObserverAdded = t)
        }
        return (
          (t.prototype.add = function(t, e, n, o, r) {
            if ((void 0 === e && (e = -1), void 0 === n && (n = !1), void 0 === o && (o = null), void 0 === r && (r = !1), !t)) return null
            var i = new p(t, e, o)
            return (
              (i.unregisterOnNextCall = r),
              n ? this._observers.unshift(i) : this._observers.push(i),
              this._onObserverAdded && this._onObserverAdded(i),
              i
            )
          }),
          (t.prototype.addOnce = function(t) {
            return this.add(t, void 0, void 0, void 0, !0)
          }),
          (t.prototype.remove = function(t) {
            return !!t && -1 !== this._observers.indexOf(t) && (this._deferUnregister(t), !0)
          }),
          (t.prototype.removeCallback = function(t, e) {
            for (var n = 0; n < this._observers.length; n++)
              if (this._observers[n].callback === t && (!e || e === this._observers[n].scope))
                return this._deferUnregister(this._observers[n]), !0
            return !1
          }),
          (t.prototype.notifyObservers = function(t, e, n, o) {
            var r, s
            if ((void 0 === e && (e = -1), !this._observers.length)) return !0
            var a = this._eventState
            ;(a.mask = e), (a.target = n), (a.currentTarget = o), (a.skipNextObservers = !1), (a.lastReturnValue = t)
            try {
              for (var p = i(this._observers), u = p.next(); !u.done; u = p.next()) {
                var l = u.value
                if (
                  !l._willBeUnregistered &&
                  (l.mask & e &&
                    (l.scope ? (a.lastReturnValue = l.callback.apply(l.scope, [t, a])) : (a.lastReturnValue = l.callback(t, a)),
                    l.unregisterOnNextCall && this._deferUnregister(l)),
                  a.skipNextObservers)
                )
                  return !1
              }
            } catch (t) {
              r = { error: t }
            } finally {
              try {
                u && !u.done && (s = p.return) && s.call(p)
              } finally {
                if (r) throw r.error
              }
            }
            return !0
          }),
          (t.prototype.notifyObserversWithPromise = function(t, e, n, o) {
            var r = this
            void 0 === e && (e = -1)
            var i = Promise.resolve(t)
            if (!this._observers.length) return i
            var s = this._eventState
            return (
              (s.mask = e),
              (s.target = n),
              (s.currentTarget = o),
              (s.skipNextObservers = !1),
              this._observers.forEach(function(n) {
                s.skipNextObservers ||
                  n._willBeUnregistered ||
                  (n.mask & e &&
                    ((i = n.scope
                      ? i.then(function(e) {
                          return (s.lastReturnValue = e), n.callback.apply(n.scope, [t, s])
                        })
                      : i.then(function(e) {
                          return (s.lastReturnValue = e), n.callback(t, s)
                        })),
                    n.unregisterOnNextCall && r._deferUnregister(n)))
              }),
              i.then(function() {
                return t
              })
            )
          }),
          (t.prototype.notifyObserver = function(t, e, n) {
            void 0 === n && (n = -1)
            var o = this._eventState
            ;(o.mask = n), (o.skipNextObservers = !1), t.callback(e, o)
          }),
          (t.prototype.hasObservers = function() {
            return this._observers.length > 0
          }),
          (t.prototype.clear = function() {
            ;(this._observers = new Array()), (this._onObserverAdded = null)
          }),
          (t.prototype.clone = function() {
            var e = new t()
            return (e._observers = this._observers.slice(0)), e
          }),
          (t.prototype.hasSpecificMask = function(t) {
            var e, n
            void 0 === t && (t = -1)
            try {
              for (var o = i(this._observers), r = o.next(); !r.done; r = o.next()) {
                var s = r.value
                if (s.mask & t || s.mask === t) return !0
              }
            } catch (t) {
              e = { error: t }
            } finally {
              try {
                r && !r.done && (n = o.return) && n.call(o)
              } finally {
                if (e) throw e.error
              }
            }
            return !1
          }),
          (t.prototype._deferUnregister = function(t) {
            var e = this
            ;(t.unregisterOnNextCall = !1),
              (t._willBeUnregistered = !0),
              s.executeTask(function() {
                return o(e, void 0, void 0, function() {
                  return r(this, function(e) {
                    return [2, this._remove(t)]
                  })
                })
              })
          }),
          (t.prototype._remove = function(t) {
            if (!t) return !1
            var e = this._observers.indexOf(t)
            return -1 !== e && (this._observers.splice(e, 1), !0)
          }),
          t
        )
      })()
      e.Observable = l
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Vector4 = void 0)
      var o = n(2),
        r = n(6),
        i = n(3),
        s = (function() {
          function t(t, e, n, o) {
            ;(this.x = t), (this.y = e), (this.z = n), (this.w = o)
          }
          return (
            (t.Add = function(e, n) {
              return new t(e.x, e.y, e.z, e.w).addInPlace(n)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2], e[n + 3])
            }),
            (t.FromArrayToRef = function(t, e, n) {
              ;(n.x = t[e]), (n.y = t[e + 1]), (n.z = t[e + 2]), (n.w = t[e + 3])
            }),
            (t.FromFloatArrayToRef = function(e, n, o) {
              t.FromArrayToRef(e, n, o)
            }),
            (t.FromFloatsToRef = function(t, e, n, o, r) {
              ;(r.x = t), (r.y = e), (r.z = n), (r.w = o)
            }),
            (t.Zero = function() {
              return new t(0, 0, 0, 0)
            }),
            (t.One = function() {
              return new t(1, 1, 1, 1)
            }),
            (t.Normalize = function(e) {
              var n = t.Zero()
              return t.NormalizeToRef(e, n), n
            }),
            (t.NormalizeToRef = function(t, e) {
              e.copyFrom(t), e.normalize()
            }),
            (t.Minimize = function(e, n) {
              var o = new t(e.x, e.y, e.z, e.w)
              return o.minimizeInPlace(n), o
            }),
            (t.Maximize = function(e, n) {
              var o = new t(e.x, e.y, e.z, e.w)
              return o.maximizeInPlace(n), o
            }),
            (t.Distance = function(e, n) {
              return Math.sqrt(t.DistanceSquared(e, n))
            }),
            (t.DistanceSquared = function(t, e) {
              var n = t.x - e.x,
                o = t.y - e.y,
                r = t.z - e.z,
                i = t.w - e.w
              return n * n + o * o + r * r + i * i
            }),
            (t.Center = function(e, n) {
              var o = t.Add(e, n)
              return o.scaleInPlace(0.5), o
            }),
            (t.TransformNormal = function(e, n) {
              var o = t.Zero()
              return t.TransformNormalToRef(e, n, o), o
            }),
            (t.TransformNormalToRef = function(t, e, n) {
              var o = e.m,
                r = t.x * o[0] + t.y * o[4] + t.z * o[8],
                i = t.x * o[1] + t.y * o[5] + t.z * o[9],
                s = t.x * o[2] + t.y * o[6] + t.z * o[10]
              ;(n.x = r), (n.y = i), (n.z = s), (n.w = t.w)
            }),
            (t.TransformNormalFromFloatsToRef = function(t, e, n, o, r, i) {
              var s = r.m
              ;(i.x = t * s[0] + e * s[4] + n * s[8]),
                (i.y = t * s[1] + e * s[5] + n * s[9]),
                (i.z = t * s[2] + e * s[6] + n * s[10]),
                (i.w = o)
            }),
            (t.prototype.toString = function() {
              return '{X: ' + this.x + ' Y:' + this.y + ' Z:' + this.z + ' W:' + this.w + '}'
            }),
            (t.prototype.getClassName = function() {
              return 'Vector4'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.x || 0
              return (t = (397 * (t = (397 * (t = (397 * t) ^ (this.y || 0))) ^ (this.z || 0))) ^ (this.w || 0))
            }),
            (t.prototype.asArray = function() {
              var t = new Array()
              return this.toArray(t, 0), t
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), (t[e + 3] = this.w), this
            }),
            (t.prototype.addInPlace = function(t) {
              return (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
            }),
            (t.prototype.add = function(e) {
              return new t(this.x + e.x, this.y + e.y, this.z + e.z, this.w + e.w)
            }),
            (t.prototype.addToRef = function(t, e) {
              return (e.x = this.x + t.x), (e.y = this.y + t.y), (e.z = this.z + t.z), (e.w = this.w + t.w), this
            }),
            (t.prototype.subtractInPlace = function(t) {
              return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), (this.w -= t.w), this
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.x - e.x, this.y - e.y, this.z - e.z, this.w - e.w)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return (e.x = this.x - t.x), (e.y = this.y - t.y), (e.z = this.z - t.z), (e.w = this.w - t.w), this
            }),
            (t.prototype.subtractFromFloats = function(e, n, o, r) {
              return new t(this.x - e, this.y - n, this.z - o, this.w - r)
            }),
            (t.prototype.subtractFromFloatsToRef = function(t, e, n, o, r) {
              return (r.x = this.x - t), (r.y = this.y - e), (r.z = this.z - n), (r.w = this.w - o), this
            }),
            (t.prototype.negate = function() {
              return new t(-this.x, -this.y, -this.z, -this.w)
            }),
            (t.prototype.scaleInPlace = function(t) {
              return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
            }),
            (t.prototype.scale = function(e) {
              return new t(this.x * e, this.y * e, this.z * e, this.w * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.x = this.x * t), (e.y = this.y * t), (e.z = this.z * t), (e.w = this.w * t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.x += this.x * t), (e.y += this.y * t), (e.z += this.z * t), (e.w += this.w * t), this
            }),
            (t.prototype.equals = function(t) {
              return t && this.x === t.x && this.y === t.y && this.z === t.z && this.w === t.w
            }),
            (t.prototype.equalsWithEpsilon = function(t, e) {
              return (
                void 0 === e && (e = o.Epsilon),
                t &&
                  r.Scalar.WithinEpsilon(this.x, t.x, e) &&
                  r.Scalar.WithinEpsilon(this.y, t.y, e) &&
                  r.Scalar.WithinEpsilon(this.z, t.z, e) &&
                  r.Scalar.WithinEpsilon(this.w, t.w, e)
              )
            }),
            (t.prototype.equalsToFloats = function(t, e, n, o) {
              return this.x === t && this.y === e && this.z === n && this.w === o
            }),
            (t.prototype.multiplyInPlace = function(t) {
              return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this
            }),
            (t.prototype.multiply = function(e) {
              return new t(this.x * e.x, this.y * e.y, this.z * e.z, this.w * e.w)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return (e.x = this.x * t.x), (e.y = this.y * t.y), (e.z = this.z * t.z), (e.w = this.w * t.w), this
            }),
            (t.prototype.multiplyByFloats = function(e, n, o, r) {
              return new t(this.x * e, this.y * n, this.z * o, this.w * r)
            }),
            (t.prototype.divide = function(e) {
              return new t(this.x / e.x, this.y / e.y, this.z / e.z, this.w / e.w)
            }),
            (t.prototype.divideToRef = function(t, e) {
              return (e.x = this.x / t.x), (e.y = this.y / t.y), (e.z = this.z / t.z), (e.w = this.w / t.w), this
            }),
            (t.prototype.divideInPlace = function(t) {
              return this.divideToRef(t, this)
            }),
            (t.prototype.minimizeInPlace = function(t) {
              return (
                t.x < this.x && (this.x = t.x),
                t.y < this.y && (this.y = t.y),
                t.z < this.z && (this.z = t.z),
                t.w < this.w && (this.w = t.w),
                this
              )
            }),
            (t.prototype.maximizeInPlace = function(t) {
              return (
                t.x > this.x && (this.x = t.x),
                t.y > this.y && (this.y = t.y),
                t.z > this.z && (this.z = t.z),
                t.w > this.w && (this.w = t.w),
                this
              )
            }),
            (t.prototype.floor = function() {
              return new t(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z), Math.floor(this.w))
            }),
            (t.prototype.fract = function() {
              return new t(
                this.x - Math.floor(this.x),
                this.y - Math.floor(this.y),
                this.z - Math.floor(this.z),
                this.w - Math.floor(this.w)
              )
            }),
            (t.prototype.length = function() {
              return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
            }),
            (t.prototype.lengthSquared = function() {
              return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
            }),
            (t.prototype.normalize = function() {
              var t = this.length()
              return 0 === t ? this : this.scaleInPlace(1 / t)
            }),
            (t.prototype.toVector3 = function() {
              return new i.Vector3(this.x, this.y, this.z)
            }),
            (t.prototype.clone = function() {
              return new t(this.x, this.y, this.z, this.w)
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.x = t.x), (this.y = t.y), (this.z = t.z), (this.w = t.w), this
            }),
            (t.prototype.copyFromFloats = function(t, e, n, o) {
              return (this.x = t), (this.y = e), (this.z = n), (this.w = o), this
            }),
            (t.prototype.set = function(t, e, n, o) {
              return this.copyFromFloats(t, e, n, o)
            }),
            (t.prototype.setAll = function(t) {
              return (this.x = this.y = this.z = this.w = t), this
            }),
            t
          )
        })()
      e.Vector4 = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Angle = void 0)
      var o = (function() {
        function t(t) {
          ;(this._radians = t), this._radians < 0 && (this._radians += 2 * Math.PI)
        }
        return (
          (t.BetweenTwoPoints = function(e, n) {
            var o = n.subtract(e)
            return new t(Math.atan2(o.y, o.x))
          }),
          (t.FromRadians = function(e) {
            return new t(e)
          }),
          (t.FromDegrees = function(e) {
            return new t((e * Math.PI) / 180)
          }),
          (t.prototype.degrees = function() {
            return (180 * this._radians) / Math.PI
          }),
          (t.prototype.radians = function() {
            return this._radians
          }),
          t
        )
      })()
      e.Angle = o
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Arc2 = void 0)
      var o = n(22),
        r = n(15),
        i = n(2),
        s = function(t, e, n) {
          ;(this.startPoint = t), (this.midPoint = e), (this.endPoint = n)
          var s = Math.pow(e.x, 2) + Math.pow(e.y, 2),
            a = (Math.pow(t.x, 2) + Math.pow(t.y, 2) - s) / 2,
            p = (s - Math.pow(n.x, 2) - Math.pow(n.y, 2)) / 2,
            u = (t.x - e.x) * (e.y - n.y) - (e.x - n.x) * (t.y - e.y)
          ;(this.centerPoint = new r.Vector2((a * (e.y - n.y) - p * (t.y - e.y)) / u, ((t.x - e.x) * p - (e.x - n.x) * a) / u)),
            (this.radius = this.centerPoint.subtract(this.startPoint).length()),
            (this.startAngle = o.Angle.BetweenTwoPoints(this.centerPoint, this.startPoint))
          var l = this.startAngle.degrees(),
            c = o.Angle.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
            h = o.Angle.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees()
          c - l > 180 && (c -= 360),
            c - l < -180 && (c += 360),
            h - c > 180 && (h -= 360),
            h - c < -180 && (h += 360),
            (this.orientation = c - l < 0 ? i.Orientation.CW : i.Orientation.CCW),
            (this.angle = o.Angle.FromDegrees(this.orientation === i.Orientation.CW ? l - h : h - l))
        }
      e.Arc2 = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Color4 = void 0)
      var o = n(6),
        r = n(2),
        i = (function() {
          function t(t, e, n, o) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === n && (n = 0),
              void 0 === o && (o = 1),
              (this.r = t),
              (this.g = e),
              (this.b = n),
              (this.a = o)
          }
          return (
            (t.FromHexString = function(e) {
              if ('#' !== e.substring(0, 1) || 9 !== e.length) return new t(0, 0, 0, 0)
              var n = parseInt(e.substring(1, 3), 16),
                o = parseInt(e.substring(3, 5), 16),
                r = parseInt(e.substring(5, 7), 16),
                i = parseInt(e.substring(7, 9), 16)
              return t.FromInts(n, o, r, i)
            }),
            (t.Lerp = function(e, n, o) {
              var r = new t(0, 0, 0, 0)
              return t.LerpToRef(e, n, o, r), r
            }),
            (t.LerpToRef = function(t, e, n, o) {
              ;(o.r = t.r + (e.r - t.r) * n), (o.g = t.g + (e.g - t.g) * n), (o.b = t.b + (e.b - t.b) * n), (o.a = t.a + (e.a - t.a) * n)
            }),
            (t.Red = function() {
              return new t(1, 0, 0, 1)
            }),
            (t.Green = function() {
              return new t(0, 1, 0, 1)
            }),
            (t.Blue = function() {
              return new t(0, 0, 1, 1)
            }),
            (t.Black = function() {
              return new t(0, 0, 0, 1)
            }),
            (t.White = function() {
              return new t(1, 1, 1, 1)
            }),
            (t.Purple = function() {
              return new t(0.5, 0, 0.5, 1)
            }),
            (t.Magenta = function() {
              return new t(1, 0, 1, 1)
            }),
            (t.Yellow = function() {
              return new t(1, 1, 0, 1)
            }),
            (t.Gray = function() {
              return new t(0.5, 0.5, 0.5, 1)
            }),
            (t.Teal = function() {
              return new t(0, 1, 1, 1)
            }),
            (t.Clear = function() {
              return new t(0, 0, 0, 0)
            }),
            (t.FromColor3 = function(e, n) {
              return void 0 === n && (n = 1), new t(e.r, e.g, e.b, n)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2], e[n + 3])
            }),
            (t.FromInts = function(e, n, o, r) {
              return new t(e / 255, n / 255, o / 255, r / 255)
            }),
            (t.CheckColors4 = function(t, e) {
              if (t.length === 3 * e) {
                for (var n = [], o = 0; o < t.length; o += 3) {
                  var r = (o / 3) * 4
                  ;(n[r] = t[o]), (n[r + 1] = t[o + 1]), (n[r + 2] = t[o + 2]), (n[r + 3] = 1)
                }
                return n
              }
              return t
            }),
            (t.prototype.addInPlace = function(t) {
              return (this.r += t.r), (this.g += t.g), (this.b += t.b), (this.a += t.a), this
            }),
            (t.prototype.asArray = function() {
              var t = new Array()
              return this.toArray(t, 0), t
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), (t[e + 3] = this.a), this
            }),
            (t.prototype.add = function(e) {
              return new t(this.r + e.r, this.g + e.g, this.b + e.b, this.a + e.a)
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.r - e.r, this.g - e.g, this.b - e.b, this.a - e.a)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return (e.r = this.r - t.r), (e.g = this.g - t.g), (e.b = this.b - t.b), (e.a = this.a - t.a), this
            }),
            (t.prototype.scale = function(e) {
              return new t(this.r * e, this.g * e, this.b * e, this.a * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.r = this.r * t), (e.g = this.g * t), (e.b = this.b * t), (e.a = this.a * t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.r += this.r * t), (e.g += this.g * t), (e.b += this.b * t), (e.a += this.a * t), this
            }),
            (t.prototype.clampToRef = function(t, e, n) {
              return (
                void 0 === t && (t = 0),
                void 0 === e && (e = 1),
                (n.r = o.Scalar.Clamp(this.r, t, e)),
                (n.g = o.Scalar.Clamp(this.g, t, e)),
                (n.b = o.Scalar.Clamp(this.b, t, e)),
                (n.a = o.Scalar.Clamp(this.a, t, e)),
                this
              )
            }),
            (t.prototype.multiply = function(e) {
              return new t(this.r * e.r, this.g * e.g, this.b * e.b, this.a * e.a)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return (e.r = this.r * t.r), (e.g = this.g * t.g), (e.b = this.b * t.b), (e.a = this.a * t.a), e
            }),
            (t.prototype.toString = function() {
              return '{R: ' + this.r + ' G:' + this.g + ' B:' + this.b + ' A:' + this.a + '}'
            }),
            (t.prototype.getClassName = function() {
              return 'Color4'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.r || 0
              return (t = (397 * (t = (397 * (t = (397 * t) ^ (this.g || 0))) ^ (this.b || 0))) ^ (this.a || 0))
            }),
            (t.prototype.clone = function() {
              return new t(this.r, this.g, this.b, this.a)
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.r = t.r), (this.g = t.g), (this.b = t.b), (this.a = t.a), this
            }),
            (t.prototype.copyFromFloats = function(t, e, n, o) {
              return (this.r = t), (this.g = e), (this.b = n), (this.a = o), this
            }),
            (t.prototype.set = function(t, e, n, o) {
              return this.copyFromFloats(t, e, n, o)
            }),
            (t.prototype.toHexString = function() {
              var t = (255 * this.r) | 0,
                e = (255 * this.g) | 0,
                n = (255 * this.b) | 0,
                r = (255 * this.a) | 0
              return '#' + o.Scalar.ToHex(t) + o.Scalar.ToHex(e) + o.Scalar.ToHex(n) + o.Scalar.ToHex(r)
            }),
            (t.prototype.toLinearSpace = function() {
              var e = new t()
              return this.toLinearSpaceToRef(e), e
            }),
            (t.prototype.toLinearSpaceToRef = function(t) {
              return (
                (t.r = Math.pow(this.r, r.ToLinearSpace)),
                (t.g = Math.pow(this.g, r.ToLinearSpace)),
                (t.b = Math.pow(this.b, r.ToLinearSpace)),
                (t.a = this.a),
                this
              )
            }),
            (t.prototype.toGammaSpace = function() {
              var e = new t()
              return this.toGammaSpaceToRef(e), e
            }),
            (t.prototype.toGammaSpaceToRef = function(t) {
              return (
                (t.r = Math.pow(this.r, r.ToGammaSpace)),
                (t.g = Math.pow(this.g, r.ToGammaSpace)),
                (t.b = Math.pow(this.b, r.ToGammaSpace)),
                (t.a = this.a),
                this
              )
            }),
            t
          )
        })()
      e.Color4 = i
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Plane = void 0)
      var o = n(3),
        r = n(11),
        i = n(9),
        s = (function() {
          function t(t, e, n, r) {
            ;(this.normal = new o.Vector3(t, e, n)), (this.d = r)
          }
          return (
            (t.FromArray = function(e) {
              return new t(e[0], e[1], e[2], e[3])
            }),
            (t.FromPoints = function(e, n, o) {
              var r = new t(0, 0, 0, 0)
              return r.copyFromPoints(e, n, o), r
            }),
            (t.FromPositionAndNormal = function(e, n) {
              var o = new t(0, 0, 0, 0)
              return n.normalize(), (o.normal = n), (o.d = -(n.x * e.x + n.y * e.y + n.z * e.z)), o
            }),
            (t.SignedDistanceToPlaneFromPositionAndNormal = function(t, e, n) {
              var r = -(e.x * t.x + e.y * t.y + e.z * t.z)
              return o.Vector3.Dot(n, e) + r
            }),
            (t.prototype.asArray = function() {
              return [this.normal.x, this.normal.y, this.normal.z, this.d]
            }),
            (t.prototype.clone = function() {
              return new t(this.normal.x, this.normal.y, this.normal.z, this.d)
            }),
            (t.prototype.getClassName = function() {
              return 'Plane'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.normal.getHashCode()
              return (t = (397 * t) ^ (this.d || 0))
            }),
            (t.prototype.normalize = function() {
              var t = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z),
                e = 0
              return 0 !== t && (e = 1 / t), (this.normal.x *= e), (this.normal.y *= e), (this.normal.z *= e), (this.d *= e), this
            }),
            (t.prototype.transform = function(e) {
              var n = i.MathTmp.Matrix[0]
              r.Matrix.TransposeToRef(e, n)
              var o = n.m,
                s = this.normal.x,
                a = this.normal.y,
                p = this.normal.z,
                u = this.d
              return new t(
                s * o[0] + a * o[1] + p * o[2] + u * o[3],
                s * o[4] + a * o[5] + p * o[6] + u * o[7],
                s * o[8] + a * o[9] + p * o[10] + u * o[11],
                s * o[12] + a * o[13] + p * o[14] + u * o[15]
              )
            }),
            (t.prototype.dotCoordinate = function(t) {
              return this.normal.x * t.x + this.normal.y * t.y + this.normal.z * t.z + this.d
            }),
            (t.prototype.copyFromPoints = function(t, e, n) {
              var o,
                r = e.x - t.x,
                i = e.y - t.y,
                s = e.z - t.z,
                a = n.x - t.x,
                p = n.y - t.y,
                u = n.z - t.z,
                l = i * u - s * p,
                c = s * a - r * u,
                h = r * p - i * a,
                d = Math.sqrt(l * l + c * c + h * h)
              return (
                (o = 0 !== d ? 1 / d : 0),
                (this.normal.x = l * o),
                (this.normal.y = c * o),
                (this.normal.z = h * o),
                (this.d = -(this.normal.x * t.x + this.normal.y * t.y + this.normal.z * t.z)),
                this
              )
            }),
            (t.prototype.isFrontFacingTo = function(t, e) {
              return o.Vector3.Dot(this.normal, t) <= e
            }),
            (t.prototype.signedDistanceTo = function(t) {
              return o.Vector3.Dot(t, this.normal) + this.d
            }),
            t
          )
        })()
      e.Plane = s
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__assign) ||
          function() {
            return (i =
              Object.assign ||
              function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                return t
              }).apply(this, arguments)
          },
        s =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.AnimationState = void 0)
      var a = n(0),
        p = n(1),
        u = { looping: !0, speed: 1, weight: 1 },
        l = (function(t) {
          function e(e, n) {
            void 0 === n && (n = u)
            var o = t.call(this) || this
            return (
              (o.isAnimationClip = !0),
              (o.looping = u.looping),
              (o.weight = u.weight),
              (o.playing = !1),
              (o.shouldReset = !1),
              (o.speed = u.speed),
              (o.name = p.newId('AnimClip')),
              (o.clip = e),
              o.setParams(i({}, n)),
              o
            )
          }
          return (
            r(e, t),
            (e.prototype.setParams = function(t) {
              return (this.looping = void 0 !== t.looping ? t.looping : this.looping), (this.speed = t.speed || this.speed), this
            }),
            (e.prototype.toJSON = function() {
              var e = JSON.parse(JSON.stringify(t.prototype.toJSON.call(this)))
              return this.shouldReset && (this.shouldReset = !1), e
            }),
            (e.prototype.play = function() {
              this.playing = !0
            }),
            (e.prototype.pause = function() {
              this.playing = !1
            }),
            (e.prototype.reset = function() {
              this.shouldReset = !0
            }),
            (e.prototype.stop = function() {
              this.reset(), this.pause()
            }),
            s([a.ObservableComponent.readonly], e.prototype, 'clip', void 0),
            s([a.ObservableComponent.field], e.prototype, 'looping', void 0),
            s([a.ObservableComponent.field], e.prototype, 'weight', void 0),
            s([a.ObservableComponent.field], e.prototype, 'playing', void 0),
            s([a.ObservableComponent.field], e.prototype, 'shouldReset', void 0),
            s([a.ObservableComponent.field], e.prototype, 'speed', void 0),
            s([a.ObservableComponent.readonly], e.prototype, 'name', void 0),
            e
          )
        })(a.ObservableComponent)
      e.AnimationState = l
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AVATAR_OBSERVABLE = e.InputEventType = void 0),
        (function(t) {
          ;(t[(t.DOWN = 0)] = 'DOWN'), (t[(t.UP = 1)] = 'UP')
        })(e.InputEventType || (e.InputEventType = {})),
        (e.AVATAR_OBSERVABLE = 'AVATAR_OBSERVABLE')
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.PhysicsCast = void 0)
      var o,
        r = n(5),
        i = n(1),
        s = n(29)
      !(function(t) {
        ;(t.HitFirst = 'rqhf'), (t.HitAll = 'rqha')
      })(o || (o = {}))
      var a = (function() {
        function t() {
          this.queries = {}
        }
        return (
          Object.defineProperty(t, 'instance', {
            get: function() {
              return t.ensureInstance(), t._instance
            },
            enumerable: !1,
            configurable: !0
          }),
          (t.ensureInstance = function() {
            t._instance || (t._instance = new t())
          }),
          (t.prototype.getRayFromCamera = function(t) {
            var e = s.Camera.instance.rotation,
              n = r.Matrix.Identity()
            e.toRotationMatrix(n)
            var o = r.Vector3.TransformCoordinates(r.Vector3.Forward(), n)
            return { origin: s.Camera.instance.position, direction: o, distance: t }
          }),
          (t.prototype.getRayFromPositions = function(t, e) {
            var n = e.subtract(t),
              o = n.length()
            return { origin: t, direction: n.normalize(), distance: o }
          }),
          (t.prototype.hitFirst = function(t, e, n) {
            var r = 'number' == typeof n ? o.HitFirst + n : i.uuid()
            ;(this.queries[r] = e), dcl && dcl.query('raycast', { queryId: r, queryType: 'HitFirst', ray: t })
          }),
          (t.prototype.hitAll = function(t, e, n) {
            var r = 'number' == typeof n ? o.HitAll + n : i.uuid()
            ;(this.queries[r] = e), dcl && dcl.query('raycast', { queryId: r, queryType: 'HitAll', ray: t })
          }),
          (t.prototype.hitFirstAvatar = function(t, e) {
            i.log('not implemented yet')
          }),
          (t.prototype.hitAllAvatars = function(t, e) {
            i.log('not implemented yet')
          }),
          (t.prototype.handleRaycastHitFirstResponse = function(t) {
            this.queries[t.payload.queryId](t.payload.payload), delete this.queries[t.payload.queryId]
          }),
          (t.prototype.handleRaycastHitAllResponse = function(t) {
            this.queries[t.payload.queryId](t.payload.payload), delete this.queries[t.payload.queryId]
          }),
          t
        )
      })()
      e.PhysicsCast = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Camera = void 0)
      var o = n(5),
        r = (function() {
          function t() {
            var t = this
            ;(this.position = new o.Vector3()),
              (this.rotation = new o.Quaternion()),
              (this.feetPosition = new o.Vector3()),
              (this.worldPosition = new o.Vector3()),
              (this.lastEventPosition = { x: 0, y: 0, z: 0 }),
              (this.lastEventWorldPosition = { x: 0, y: 0, z: 0 }),
              (this.lastEventRotation = { x: 0, y: 0, z: 0, w: 1 }),
              (this._playerHeight = 1.6),
              'undefined' != typeof dcl &&
                (dcl.subscribe('positionChanged'),
                dcl.subscribe('rotationChanged'),
                dcl.onEvent(function(e) {
                  switch (e.type) {
                    case 'positionChanged':
                      t.positionChanged(e.data)
                      break
                    case 'rotationChanged':
                      t.rotationChanged(e.data)
                  }
                })),
              Object.defineProperty(this.position, 'x', {
                get: function() {
                  return t.lastEventPosition.x
                }
              }),
              Object.defineProperty(this.position, 'y', {
                get: function() {
                  return t.lastEventPosition.y
                }
              }),
              Object.defineProperty(this.position, 'z', {
                get: function() {
                  return t.lastEventPosition.z
                }
              }),
              Object.defineProperty(this.worldPosition, 'x', {
                get: function() {
                  return t.lastEventWorldPosition.x
                }
              }),
              Object.defineProperty(this.worldPosition, 'y', {
                get: function() {
                  return t.lastEventWorldPosition.y
                }
              }),
              Object.defineProperty(this.worldPosition, 'z', {
                get: function() {
                  return t.lastEventWorldPosition.z
                }
              }),
              Object.defineProperty(this.feetPosition, 'x', {
                get: function() {
                  return t.lastEventPosition.x
                }
              }),
              Object.defineProperty(this.feetPosition, 'y', {
                get: function() {
                  return t.lastEventPosition.y - t.playerHeight
                }
              }),
              Object.defineProperty(this.feetPosition, 'z', {
                get: function() {
                  return t.lastEventPosition.z
                }
              }),
              Object.defineProperty(this.rotation, 'x', {
                get: function() {
                  return t.lastEventRotation.x
                }
              }),
              Object.defineProperty(this.rotation, 'y', {
                get: function() {
                  return t.lastEventRotation.y
                }
              }),
              Object.defineProperty(this.rotation, 'z', {
                get: function() {
                  return t.lastEventRotation.z
                }
              }),
              Object.defineProperty(this.rotation, 'w', {
                get: function() {
                  return t.lastEventRotation.w
                }
              })
          }
          return (
            Object.defineProperty(t, 'instance', {
              get: function() {
                return t._instance || (t._instance = new t()), t._instance
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'playerHeight', {
              get: function() {
                return this._playerHeight
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.positionChanged = function(t) {
              ;(this.lastEventPosition = t.position),
                (this.lastEventWorldPosition = t.cameraPosition),
                (this._playerHeight = t.playerHeight)
            }),
            (t.prototype.rotationChanged = function(t) {
              this.lastEventRotation = t.quaternion
            }),
            t
          )
        })()
      e.Camera = r
    },
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function(t, e, n, o) {
                void 0 === o && (o = n),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function() {
                      return e[n]
                    }
                  })
              }
            : function(t, e, n, o) {
                void 0 === o && (o = n), (t[o] = e[n])
              }),
        r =
          (this && this.__exportStar) ||
          function(t, e) {
            for (var n in t) 'default' === n || Object.prototype.hasOwnProperty.call(e, n) || o(e, t, n)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.engine = void 0),
        r(n(31), e),
        r(n(17), e),
        r(n(0), e),
        r(n(12), e),
        r(n(7), e),
        r(n(19), e),
        r(n(1), e),
        r(n(20), e),
        r(n(18), e),
        r(n(8), e),
        r(n(33), e),
        r(n(34), e)
      var i = n(35),
        s = n(17),
        a = new (n(12).Entity)('scene')
      a.uuid = '0'
      var p = new s.Engine(a)
      ;(e.engine = p),
        (n(0).DisposableComponent.engine = p),
        'undefined' != typeof dcl && p.addSystem(new i.DecentralandSynchronizationSystem(dcl), 1 / 0)
      var u = n(14)
      p.addSystem(u.uuidEventSystem),
        p.addSystem(u.pointerEventSystem),
        p.addSystem(u.raycastEventSystem),
        r(n(27), e),
        r(n(4), e),
        r(n(14), e),
        r(n(13), e),
        r(n(29), e),
        r(n(5), e),
        r(n(26), e),
        r(n(16), e),
        r(n(44), e),
        r(n(45), e),
        r(n(46), e),
        r(n(47), e),
        r(n(48), e),
        r(n(49), e),
        r(n(28), e)
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Attachable = void 0)
      var o = (function() {
        function t() {}
        return (
          (t.AVATAR = {
            getEntityRepresentation: function(t) {
              return t.avatarEntity
            }
          }),
          (t.FIRST_PERSON_CAMERA = {
            getEntityRepresentation: function(t) {
              return t.firstPersonCameraEntity
            }
          }),
          t
        )
      })()
      e.Attachable = o
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.ComponentGroup = void 0)
      var o = n(0),
        r = (function() {
          function t() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
            if (((this.entities = []), (this.active = !1), (this._requiresNames = []), !t))
              throw new Error('ComponentGroup: Could not load the requires list')
            if (!(t instanceof Array)) throw new Error('ComponentGroup: requires list is not an Array')
            Object.defineProperty(this, 'requires', {
              get: function() {
                return t.slice()
              }
            }),
              Object.defineProperty(this, 'requiresNames', {
                get: function() {
                  return this._requiresNames.slice()
                }
              })
            for (
              var n = function(e) {
                  var n = t[e],
                    i = null
                  if (!n) throw new Error('ComponentGroup: the required component at location ' + e + ' is invalid')
                  try {
                    i = o.getComponentName(n)
                  } catch (t) {
                    throw new Error(
                      'ComponentGroup: the required component at location ' +
                        e +
                        ' is not registered as a @Component. Remember to provide the class of the component, not the name'
                    )
                  }
                  if (
                    r._requiresNames.some(function(t) {
                      return t === i
                    })
                  )
                    throw new Error('ComponentGroup: the required component list has a repeated name ' + i)
                  r._requiresNames.push(i)
                },
                r = this,
                i = 0;
              i < t.length;
              i++
            )
              n(i)
          }
          return (
            (t.prototype.hasEntity = function(t) {
              return !!t.isAddedToEngine() && -1 !== this.entities.indexOf(t)
            }),
            (t.prototype.addEntity = function(t) {
              if (!t.isAddedToEngine()) throw new TypeError('ComponentGroup: Cannot add a entity that is not added to the engine')
              ;-1 === this.entities.indexOf(t) && this.entities.push(t)
            }),
            (t.prototype.removeEntity = function(t) {
              var e = this.entities.indexOf(t)
              ;-1 !== e && this.entities.splice(e, 1)
            }),
            (t.prototype.componentRemoved = function(t, e) {
              ;-1 !== this._requiresNames.indexOf(e) && this.removeEntity(t)
            }),
            (t.prototype.meetsRequirements = function(t) {
              for (var e = 0; e < this._requiresNames.length; e++) {
                if (!(this._requiresNames[e] in t.components)) return !1
              }
              return !0
            }),
            t
          )
        })()
      e.ComponentGroup = r
    },
    function(t, e, n) {
      'use strict'
      var o
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.teleportTo = void 0),
        (e.teleportTo = function(t) {
          var e, n
          ;(e = 'requestTeleport'),
            (n = [t]),
            void 0 === o && 'undefined' != typeof dcl && (o = dcl.loadModule('@decentraland/UserActionModule')),
            void 0 !== o &&
              'undefined' != typeof dcl &&
              o.then(function(t) {
                dcl.callRpc(t.rpcHandle, e, n)
              })
        })
    },
    function(t, e, n) {
      'use strict'
      var o
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.movePlayerTo = void 0),
        (e.movePlayerTo = function(t, e) {
          var n, r
          ;(n = 'movePlayerTo'),
            (r = [t, e]),
            void 0 === o && 'undefined' != typeof dcl && (o = dcl.loadModule('@decentraland/RestrictedActionModule')),
            void 0 !== o &&
              'undefined' != typeof dcl &&
              o.then(function(t) {
                dcl.callRpc(t.rpcHandle, n, r)
              })
        })
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.DecentralandSynchronizationSystem = void 0)
      var o = n(0),
        r = n(7),
        i = n(13),
        s = (function() {
          function t(t) {
            ;(this.dcl = t), (this.cachedComponents = {})
          }
          return (
            (t.prototype.activate = function(t) {
              var e = this
              ;(this.engine = t),
                t.eventManager.addListener(r.ComponentAdded, this, this.componentAdded),
                t.eventManager.addListener(r.ComponentRemoved, this, this.componentRemoved),
                t.eventManager.addListener(o.DisposableComponentCreated, this, this.disposableComponentCreated),
                t.eventManager.addListener(o.DisposableComponentRemoved, this, this.disposableComponentRemoved),
                t.eventManager.addListener(o.DisposableComponentUpdated, this, this.disposableComponentUpdated),
                t.eventManager.addListener(r.ParentChanged, this, this.parentChanged)
              var n = t.rootEntity.uuid
              this.dcl.addEntity(n),
                this.dcl.onUpdate(function(n) {
                  t.update(n), e.presentEntities()
                }),
                this.dcl.onEvent(function(e) {
                  var n = e.data
                  switch (e.type) {
                    case 'uuidEvent':
                      t.eventManager.fireEvent(new i.UUIDEvent(n.uuid, n.payload))
                      break
                    case 'raycastResponse':
                      ;('HitFirst' === n.queryType || 'HitAll' === n.queryType) && t.eventManager.fireEvent(new i.RaycastResponse(n))
                      break
                    case 'pointerEvent':
                      t.eventManager.fireEvent(new i.PointerEvent(n.payload))
                  }
                })
            }),
            (t.prototype.onAddEntity = function(t) {
              if (t && t.isAddedToEngine()) {
                var e = t.uuid,
                  n = t.getParent()
                for (var r in (this.dcl.addEntity(e), n && this.dcl.setParent(e, n.uuid), (this.cachedComponents[e] = {}), t.components)) {
                  var i = t.components[r],
                    s = o.getComponentClassId(i)
                  if (null !== s)
                    if (o.isDisposableComponent(i)) this.dcl.attachEntityComponent(t.uuid, r, o.getComponentId(i))
                    else {
                      var a = JSON.stringify(i)
                      this.dcl.updateEntityComponent(e, r, s, a), (this.cachedComponents[e][r] = a)
                    }
                }
              }
            }),
            (t.prototype.onRemoveEntity = function(t) {
              if (t.isAddedToEngine()) {
                var e = t.uuid
                this.dcl.removeEntity(e), delete this.cachedComponents[e]
              }
            }),
            (t.prototype.presentEntities = function() {
              for (var t in this.engine.entities) {
                var e = this.engine.entities[t]
                for (var n in e.components) {
                  var r = e.components[n],
                    i = o.getComponentClassId(r)
                  if (null !== i && !o.isDisposableComponent(r)) {
                    var s = this.getJsonIfDirty(e.uuid, n, r)
                    s && (this.dcl.updateEntityComponent(e.uuid, n, i, s), this.clearDirty(e.uuid, n, r, s))
                  }
                }
              }
              for (var a in this.engine.disposableComponents) {
                ;(r = this.engine.disposableComponents[a]) instanceof o.ObservableComponent &&
                  r.dirty &&
                  (this.dcl.componentUpdated(a, JSON.stringify(r)), (r.dirty = !1))
              }
            }),
            (t.prototype.componentAdded = function(t) {
              if (t.entity.isAddedToEngine()) {
                var e = t.entity.components[t.componentName]
                if (o.isDisposableComponent(e)) this.dcl.attachEntityComponent(t.entity.uuid, t.componentName, o.getComponentId(e))
                else if (null !== t.classId) {
                  var n = JSON.stringify(e)
                  this.dcl.updateEntityComponent(t.entity.uuid, t.componentName, t.classId, n),
                    (this.cachedComponents[t.entity.uuid][t.componentName] = n)
                }
              }
            }),
            (t.prototype.componentRemoved = function(t) {
              t.entity.isAddedToEngine() &&
                (this.dcl.removeEntityComponent(t.entity.uuid, t.componentName),
                delete this.cachedComponents[t.entity.uuid][t.componentName])
            }),
            (t.prototype.disposableComponentCreated = function(t) {
              this.dcl.componentCreated(t.componentId, t.componentName, t.classId)
            }),
            (t.prototype.disposableComponentRemoved = function(t) {
              this.dcl.componentDisposed(t.componentId)
            }),
            (t.prototype.disposableComponentUpdated = function(t) {
              this.dcl.componentUpdated(t.componentId, JSON.stringify(t.component))
            }),
            (t.prototype.parentChanged = function(t) {
              this.dcl.setParent(t.entity.uuid, t.parent ? t.parent.uuid : '0')
            }),
            (t.prototype.getJsonIfDirty = function(t, e, n) {
              var o = JSON.stringify(n)
              return o !== this.cachedComponents[t][e] && o
            }),
            (t.prototype.clearDirty = function(t, e, n, o) {
              this.cachedComponents[t][e] = o
            }),
            t
          )
        })()
      e.DecentralandSynchronizationSystem = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Axis = void 0)
      var o = n(3),
        r = (function() {
          function t() {}
          return (t.X = new o.Vector3(1, 0, 0)), (t.Y = new o.Vector3(0, 1, 0)), (t.Z = new o.Vector3(0, 0, 1)), t
        })()
      e.Axis = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.BezierCurve = void 0)
      var o = (function() {
        function t() {}
        return (
          (t.Interpolate = function(t, e, n, o, r) {
            for (var i = 1 - 3 * o + 3 * e, s = 3 * o - 6 * e, a = 3 * e, p = t, u = 0; u < 5; u++) {
              var l = p * p
              ;(p -= (i * (l * p) + s * l + a * p - t) * (1 / (3 * i * l + 2 * s * p + a))), (p = Math.min(1, Math.max(0, p)))
            }
            return 3 * Math.pow(1 - p, 2) * p * n + 3 * (1 - p) * Math.pow(p, 2) * r + Math.pow(p, 3)
          }),
          t
        )
      })()
      e.BezierCurve = o
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Color3 = void 0)
      var o = n(2),
        r = n(24),
        i = n(6),
        s = (function() {
          function t(t, e, n) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), (this.r = t), (this.g = e), (this.b = n)
          }
          return (
            (t.FromHexString = function(e) {
              if ('#' !== e.substring(0, 1) || 7 !== e.length) return new t(0, 0, 0)
              var n = parseInt(e.substring(1, 3), 16),
                o = parseInt(e.substring(3, 5), 16),
                r = parseInt(e.substring(5, 7), 16)
              return t.FromInts(n, o, r)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2])
            }),
            (t.FromInts = function(e, n, o) {
              return new t(e / 255, n / 255, o / 255)
            }),
            (t.Lerp = function(e, n, o) {
              var r = new t(0, 0, 0)
              return t.LerpToRef(e, n, o, r), r
            }),
            (t.LerpToRef = function(t, e, n, o) {
              ;(o.r = t.r + (e.r - t.r) * n), (o.g = t.g + (e.g - t.g) * n), (o.b = t.b + (e.b - t.b) * n)
            }),
            (t.Red = function() {
              return new t(1, 0, 0)
            }),
            (t.Green = function() {
              return new t(0, 1, 0)
            }),
            (t.Blue = function() {
              return new t(0, 0, 1)
            }),
            (t.Black = function() {
              return new t(0, 0, 0)
            }),
            (t.White = function() {
              return new t(1, 1, 1)
            }),
            (t.Purple = function() {
              return new t(0.5, 0, 0.5)
            }),
            (t.Magenta = function() {
              return new t(1, 0, 1)
            }),
            (t.Yellow = function() {
              return new t(1, 1, 0)
            }),
            (t.Gray = function() {
              return new t(0.5, 0.5, 0.5)
            }),
            (t.Teal = function() {
              return new t(0, 1, 1)
            }),
            (t.Random = function() {
              return new t(Math.random(), Math.random(), Math.random())
            }),
            (t.prototype.toString = function() {
              return '{R: ' + this.r + ' G:' + this.g + ' B:' + this.b + '}'
            }),
            (t.prototype.getClassName = function() {
              return 'Color3'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.r || 0
              return (t = (397 * (t = (397 * t) ^ (this.g || 0))) ^ (this.b || 0))
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), this
            }),
            (t.prototype.toColor4 = function(t) {
              return void 0 === t && (t = 1), new r.Color4(this.r, this.g, this.b, t)
            }),
            (t.prototype.asArray = function() {
              var t = new Array()
              return this.toArray(t, 0), t
            }),
            (t.prototype.toLuminance = function() {
              return 0.3 * this.r + 0.59 * this.g + 0.11 * this.b
            }),
            (t.prototype.multiply = function(e) {
              return new t(this.r * e.r, this.g * e.g, this.b * e.b)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return (e.r = this.r * t.r), (e.g = this.g * t.g), (e.b = this.b * t.b), this
            }),
            (t.prototype.equals = function(t) {
              return t && this.r === t.r && this.g === t.g && this.b === t.b
            }),
            (t.prototype.equalsFloats = function(t, e, n) {
              return this.r === t && this.g === e && this.b === n
            }),
            (t.prototype.scale = function(e) {
              return new t(this.r * e, this.g * e, this.b * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.r = this.r * t), (e.g = this.g * t), (e.b = this.b * t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.r += this.r * t), (e.g += this.g * t), (e.b += this.b * t), this
            }),
            (t.prototype.clampToRef = function(t, e, n) {
              return (
                void 0 === t && (t = 0),
                void 0 === e && (e = 1),
                (n.r = i.Scalar.Clamp(this.r, t, e)),
                (n.g = i.Scalar.Clamp(this.g, t, e)),
                (n.b = i.Scalar.Clamp(this.b, t, e)),
                this
              )
            }),
            (t.prototype.add = function(e) {
              return new t(this.r + e.r, this.g + e.g, this.b + e.b)
            }),
            (t.prototype.addToRef = function(t, e) {
              return (e.r = this.r + t.r), (e.g = this.g + t.g), (e.b = this.b + t.b), this
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.r - e.r, this.g - e.g, this.b - e.b)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return (e.r = this.r - t.r), (e.g = this.g - t.g), (e.b = this.b - t.b), this
            }),
            (t.prototype.clone = function() {
              return new t(this.r, this.g, this.b)
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.r = t.r), (this.g = t.g), (this.b = t.b), this
            }),
            (t.prototype.copyFromFloats = function(t, e, n) {
              return (this.r = t), (this.g = e), (this.b = n), this
            }),
            (t.prototype.set = function(t, e, n) {
              return this.copyFromFloats(t, e, n)
            }),
            (t.prototype.toHexString = function() {
              var t = (255 * this.r) | 0,
                e = (255 * this.g) | 0,
                n = (255 * this.b) | 0
              return '#' + i.Scalar.ToHex(t) + i.Scalar.ToHex(e) + i.Scalar.ToHex(n)
            }),
            (t.prototype.toLinearSpace = function() {
              var e = new t()
              return this.toLinearSpaceToRef(e), e
            }),
            (t.prototype.toLinearSpaceToRef = function(t) {
              return (
                (t.r = Math.pow(this.r, o.ToLinearSpace)),
                (t.g = Math.pow(this.g, o.ToLinearSpace)),
                (t.b = Math.pow(this.b, o.ToLinearSpace)),
                this
              )
            }),
            (t.prototype.toGammaSpace = function() {
              var e = new t()
              return this.toGammaSpaceToRef(e), e
            }),
            (t.prototype.toGammaSpaceToRef = function(t) {
              return (
                (t.r = Math.pow(this.r, o.ToGammaSpace)),
                (t.g = Math.pow(this.g, o.ToGammaSpace)),
                (t.b = Math.pow(this.b, o.ToGammaSpace)),
                this
              )
            }),
            (t.prototype.toJSON = function() {
              return { r: this.r, g: this.g, b: this.b }
            }),
            t
          )
        })()
      e.Color3 = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Curve3 = void 0)
      var o = n(3),
        r = (function() {
          function t(t) {
            ;(this._length = 0), (this._points = t), (this._length = this._computeLength(t))
          }
          return (
            (t.CreateQuadraticBezier = function(e, n, r, i) {
              i = i > 2 ? i : 3
              for (
                var s = new Array(),
                  a = function(t, e, n, o) {
                    return (1 - t) * (1 - t) * e + 2 * t * (1 - t) * n + t * t * o
                  },
                  p = 0;
                p <= i;
                p++
              )
                s.push(new o.Vector3(a(p / i, e.x, n.x, r.x), a(p / i, e.y, n.y, r.y), a(p / i, e.z, n.z, r.z)))
              return new t(s)
            }),
            (t.CreateCubicBezier = function(e, n, r, i, s) {
              s = s > 3 ? s : 4
              for (
                var a = new Array(),
                  p = function(t, e, n, o, r) {
                    return (1 - t) * (1 - t) * (1 - t) * e + 3 * t * (1 - t) * (1 - t) * n + 3 * t * t * (1 - t) * o + t * t * t * r
                  },
                  u = 0;
                u <= s;
                u++
              )
                a.push(new o.Vector3(p(u / s, e.x, n.x, r.x, i.x), p(u / s, e.y, n.y, r.y, i.y), p(u / s, e.z, n.z, r.z, i.z)))
              return new t(a)
            }),
            (t.CreateHermiteSpline = function(e, n, r, i, s) {
              for (var a = new Array(), p = 1 / s, u = 0; u <= s; u++) a.push(o.Vector3.Hermite(e, n, r, i, u * p))
              return new t(a)
            }),
            (t.CreateCatmullRomSpline = function(e, n, r) {
              var i = new Array(),
                s = 1 / n,
                a = 0
              if (r) {
                for (var p = e.length, u = 0; u < p; u++) {
                  a = 0
                  for (var l = 0; l < n; l++)
                    i.push(o.Vector3.CatmullRom(e[u % p], e[(u + 1) % p], e[(u + 2) % p], e[(u + 3) % p], a)), (a += s)
                }
                i.push(i[0])
              } else {
                var c = new Array()
                c.push(e[0].clone()), Array.prototype.push.apply(c, e), c.push(e[e.length - 1].clone())
                u = 0
                for (u = 0; u < c.length - 3; u++) {
                  a = 0
                  for (l = 0; l < n; l++) i.push(o.Vector3.CatmullRom(c[u], c[u + 1], c[u + 2], c[u + 3], a)), (a += s)
                }
                u--, i.push(o.Vector3.CatmullRom(c[u], c[u + 1], c[u + 2], c[u + 3], a))
              }
              return new t(i)
            }),
            (t.prototype.getPoints = function() {
              return this._points
            }),
            (t.prototype.length = function() {
              return this._length
            }),
            (t.prototype.continue = function(e) {
              for (var n = this._points[this._points.length - 1], o = this._points.slice(), r = e.getPoints(), i = 1; i < r.length; i++)
                o.push(r[i].subtract(r[0]).add(n))
              return new t(o)
            }),
            (t.prototype._computeLength = function(t) {
              for (var e = 0, n = 1; n < t.length; n++) e += t[n].subtract(t[n - 1]).length()
              return e
            }),
            t
          )
        })()
      e.Curve3 = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Frustum = void 0)
      var o = n(25),
        r = (function() {
          function t() {}
          return (
            (t.GetPlanes = function(e) {
              for (var n = [], r = 0; r < 6; r++) n.push(new o.Plane(0, 0, 0, 0))
              return t.GetPlanesToRef(e, n), n
            }),
            (t.GetNearPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] + n[2]), (e.normal.y = n[7] + n[6]), (e.normal.z = n[11] + n[10]), (e.d = n[15] + n[14]), e.normalize()
            }),
            (t.GetFarPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] - n[2]), (e.normal.y = n[7] - n[6]), (e.normal.z = n[11] - n[10]), (e.d = n[15] - n[14]), e.normalize()
            }),
            (t.GetLeftPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] + n[0]), (e.normal.y = n[7] + n[4]), (e.normal.z = n[11] + n[8]), (e.d = n[15] + n[12]), e.normalize()
            }),
            (t.GetRightPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] - n[0]), (e.normal.y = n[7] - n[4]), (e.normal.z = n[11] - n[8]), (e.d = n[15] - n[12]), e.normalize()
            }),
            (t.GetTopPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] - n[1]), (e.normal.y = n[7] - n[5]), (e.normal.z = n[11] - n[9]), (e.d = n[15] - n[13]), e.normalize()
            }),
            (t.GetBottomPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] + n[1]), (e.normal.y = n[7] + n[5]), (e.normal.z = n[11] + n[9]), (e.d = n[15] + n[13]), e.normalize()
            }),
            (t.GetPlanesToRef = function(e, n) {
              t.GetNearPlaneToRef(e, n[0]),
                t.GetFarPlaneToRef(e, n[1]),
                t.GetLeftPlaneToRef(e, n[2]),
                t.GetRightPlaneToRef(e, n[3]),
                t.GetTopPlaneToRef(e, n[4]),
                t.GetBottomPlaneToRef(e, n[5])
            }),
            t
          )
        })()
      e.Frustum = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Path2 = void 0)
      var o = n(15),
        r = n(23),
        i = n(2),
        s = (function() {
          function t(t, e) {
            ;(this.closed = !1), (this._points = new Array()), (this._length = 0), this._points.push(new o.Vector2(t, e))
          }
          return (
            (t.StartingAt = function(e, n) {
              return new t(e, n)
            }),
            (t.prototype.addLineTo = function(t, e) {
              if (this.closed) return this
              var n = new o.Vector2(t, e),
                r = this._points[this._points.length - 1]
              return this._points.push(n), (this._length += n.subtract(r).length()), this
            }),
            (t.prototype.addArcTo = function(t, e, n, s, a) {
              if ((void 0 === a && (a = 36), this.closed)) return this
              var p = this._points[this._points.length - 1],
                u = new o.Vector2(t, e),
                l = new o.Vector2(n, s),
                c = new r.Arc2(p, u, l),
                h = c.angle.radians() / a
              c.orientation === i.Orientation.CW && (h *= -1)
              for (var d = c.startAngle.radians() + h, f = 0; f < a; f++) {
                var y = Math.cos(d) * c.radius + c.centerPoint.x,
                  v = Math.sin(d) * c.radius + c.centerPoint.y
                this.addLineTo(y, v), (d += h)
              }
              return this
            }),
            (t.prototype.close = function() {
              return (this.closed = !0), this
            }),
            (t.prototype.length = function() {
              var t = this._length
              if (!this.closed) {
                var e = this._points[this._points.length - 1]
                t += this._points[0].subtract(e).length()
              }
              return t
            }),
            (t.prototype.getPoints = function() {
              return this._points
            }),
            (t.prototype.getPointAtLengthPosition = function(t) {
              if (t < 0 || t > 1) return o.Vector2.Zero()
              for (var e = t * this.length(), n = 0, r = 0; r < this._points.length; r++) {
                var i = (r + 1) % this._points.length,
                  s = this._points[r],
                  a = this._points[i].subtract(s),
                  p = a.length() + n
                if (e >= n && e <= p) {
                  var u = a.normalize(),
                    l = e - n
                  return new o.Vector2(s.x + u.x * l, s.y + u.y * l)
                }
                n = p
              }
              return o.Vector2.Zero()
            }),
            t
          )
        })()
      e.Path2 = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Path3D = void 0)
      var o = n(3),
        r = n(2),
        i = n(6),
        s = (function() {
          function t(t, e, n) {
            void 0 === e && (e = null),
              (this.path = t),
              (this._curve = new Array()),
              (this._distances = new Array()),
              (this._tangents = new Array()),
              (this._normals = new Array()),
              (this._binormals = new Array())
            for (var o = 0; o < t.length; o++) this._curve[o] = t[o].clone()
            ;(this._raw = n || !1), this._compute(e)
          }
          return (
            (t.prototype.getCurve = function() {
              return this._curve
            }),
            (t.prototype.getTangents = function() {
              return this._tangents
            }),
            (t.prototype.getNormals = function() {
              return this._normals
            }),
            (t.prototype.getBinormals = function() {
              return this._binormals
            }),
            (t.prototype.getDistances = function() {
              return this._distances
            }),
            (t.prototype.update = function(t, e) {
              void 0 === e && (e = null)
              for (var n = 0; n < t.length; n++) (this._curve[n].x = t[n].x), (this._curve[n].y = t[n].y), (this._curve[n].z = t[n].z)
              return this._compute(e), this
            }),
            (t.prototype._compute = function(t) {
              var e = this._curve.length
              ;(this._tangents[0] = this._getFirstNonNullVector(0)),
                this._raw || this._tangents[0].normalize(),
                (this._tangents[e - 1] = this._curve[e - 1].subtract(this._curve[e - 2])),
                this._raw || this._tangents[e - 1].normalize()
              var n,
                r,
                i,
                s,
                a = this._tangents[0],
                p = this._normalVector(this._curve[0], a, t)
              ;(this._normals[0] = p),
                this._raw || this._normals[0].normalize(),
                (this._binormals[0] = o.Vector3.Cross(a, this._normals[0])),
                this._raw || this._binormals[0].normalize(),
                (this._distances[0] = 0)
              for (var u = 1; u < e; u++)
                (n = this._getLastNonNullVector(u)),
                  u < e - 1 && ((r = this._getFirstNonNullVector(u)), (this._tangents[u] = n.add(r)), this._tangents[u].normalize()),
                  (this._distances[u] = this._distances[u - 1] + n.length()),
                  (i = this._tangents[u]),
                  (s = this._binormals[u - 1]),
                  (this._normals[u] = o.Vector3.Cross(s, i)),
                  this._raw || this._normals[u].normalize(),
                  (this._binormals[u] = o.Vector3.Cross(i, this._normals[u])),
                  this._raw || this._binormals[u].normalize()
            }),
            (t.prototype._getFirstNonNullVector = function(t) {
              for (var e = 1, n = this._curve[t + e].subtract(this._curve[t]); 0 === n.length() && t + e + 1 < this._curve.length; )
                e++, (n = this._curve[t + e].subtract(this._curve[t]))
              return n
            }),
            (t.prototype._getLastNonNullVector = function(t) {
              for (var e = 1, n = this._curve[t].subtract(this._curve[t - e]); 0 === n.length() && t > e + 1; )
                e++, (n = this._curve[t].subtract(this._curve[t - e]))
              return n
            }),
            (t.prototype._normalVector = function(t, e, n) {
              var s,
                a = e.length()
              if ((0 === a && (a = 1), null == n)) {
                var p = void 0
                ;(p = i.Scalar.WithinEpsilon(Math.abs(e.y) / a, 1, r.Epsilon)
                  ? i.Scalar.WithinEpsilon(Math.abs(e.x) / a, 1, r.Epsilon)
                    ? i.Scalar.WithinEpsilon(Math.abs(e.z) / a, 1, r.Epsilon)
                      ? o.Vector3.Zero()
                      : new o.Vector3(0, 0, 1)
                    : new o.Vector3(1, 0, 0)
                  : new o.Vector3(0, -1, 0)),
                  (s = o.Vector3.Cross(e, p))
              } else (s = o.Vector3.Cross(e, n)), o.Vector3.CrossToRef(s, e, s)
              return s.normalize(), s
            }),
            t
          )
        })()
      e.Path3D = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Size = void 0)
      var o = (function() {
        function t(t, e) {
          ;(this.width = t), (this.height = e)
        }
        return (
          Object.defineProperty(t.prototype, 'surface', {
            get: function() {
              return this.width * this.height
            },
            enumerable: !1,
            configurable: !0
          }),
          (t.Zero = function() {
            return new t(0, 0)
          }),
          (t.Lerp = function(e, n, o) {
            return new t(e.width + (n.width - e.width) * o, e.height + (n.height - e.height) * o)
          }),
          (t.prototype.toString = function() {
            return '{W: ' + this.width + ', H: ' + this.height + '}'
          }),
          (t.prototype.getClassName = function() {
            return 'Size'
          }),
          (t.prototype.getHashCode = function() {
            var t = this.width || 0
            return (t = (397 * t) ^ (this.height || 0))
          }),
          (t.prototype.copyFrom = function(t) {
            ;(this.width = t.width), (this.height = t.height)
          }),
          (t.prototype.copyFromFloats = function(t, e) {
            return (this.width = t), (this.height = e), this
          }),
          (t.prototype.set = function(t, e) {
            return this.copyFromFloats(t, e)
          }),
          (t.prototype.multiplyByFloats = function(e, n) {
            return new t(this.width * e, this.height * n)
          }),
          (t.prototype.clone = function() {
            return new t(this.width, this.height)
          }),
          (t.prototype.equals = function(t) {
            return !!t && this.width === t.width && this.height === t.height
          }),
          (t.prototype.add = function(e) {
            return new t(this.width + e.width, this.height + e.height)
          }),
          (t.prototype.subtract = function(e) {
            return new t(this.width - e.width, this.height - e.height)
          }),
          t
        )
      })()
      e.Size = o
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.AudioStream = e.AudioSource = e.AudioClip = void 0)
      var s = n(0),
        a = n(4),
        p = (function(t) {
          function e(e) {
            var n = t.call(this) || this
            return (n.loop = !1), (n.volume = 1), (n.url = e), n
          }
          return (
            r(e, t),
            i([s.ObservableComponent.readonly], e.prototype, 'url', void 0),
            i([s.ObservableComponent.field], e.prototype, 'loop', void 0),
            i([s.ObservableComponent.field], e.prototype, 'loadingCompleteEventId', void 0),
            i([s.ObservableComponent.field], e.prototype, 'volume', void 0),
            (e = i([s.DisposableComponent('engine.AudioClip', a.CLASS_ID.AUDIO_CLIP)], e))
          )
        })(s.ObservableComponent)
      e.AudioClip = p
      var u = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          if (((n.audioClip = e), (n.loop = !1), (n.volume = 1), (n.playing = !1), (n.pitch = 1), !(e instanceof p)))
            throw new Error('Trying to create AudioSource(AudioClip) with an invalid AudioClip')
          return (n.audioClipId = s.getComponentId(e)), n
        }
        return (
          r(e, t),
          (e.prototype.playOnce = function() {
            return (this.playing = !0), (this.dirty = !0), (this.data.nonce = Math.random()), this
          }),
          i([s.ObservableComponent.readonly], e.prototype, 'audioClipId', void 0),
          i([s.ObservableComponent.field], e.prototype, 'loop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'volume', void 0),
          i([s.ObservableComponent.field], e.prototype, 'playing', void 0),
          i([s.ObservableComponent.field], e.prototype, 'pitch', void 0),
          (e = i([s.Component('engine.AudioSource', a.CLASS_ID.AUDIO_SOURCE)], e))
        )
      })(s.ObservableComponent)
      e.AudioSource = u
      var l = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          return (n.playing = !1), (n.volume = 1), (n.url = e), (n.playing = !0), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'url', void 0),
          i([s.ObservableComponent.field], e.prototype, 'playing', void 0),
          i([s.ObservableComponent.field], e.prototype, 'volume', void 0),
          (e = i([s.Component('engine.AudioStream', a.CLASS_ID.AUDIO_STREAM)], e))
        )
      })(s.ObservableComponent)
      e.AudioStream = l
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Gizmos = e.OnGizmoEvent = e.Gizmo = void 0)
      var s = n(0),
        a = n(4)
      !(function(t) {
        ;(t.MOVE = 'MOVE'), (t.ROTATE = 'ROTATE'), (t.SCALE = 'SCALE'), (t.NONE = 'NONE')
      })(e.Gizmo || (e.Gizmo = {}))
      var p = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.type = 'gizmoEvent'), e
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.gizmoEvent', a.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(a.OnUUIDEvent)
      e.OnGizmoEvent = p
      var u = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.position = !0), (e.rotation = !0), (e.scale = !0), (e.cycle = !0), (e.localReference = !1), e
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'position', void 0),
          i([s.ObservableComponent.field], e.prototype, 'rotation', void 0),
          i([s.ObservableComponent.field], e.prototype, 'scale', void 0),
          i([s.ObservableComponent.field], e.prototype, 'cycle', void 0),
          i([s.ObservableComponent.field], e.prototype, 'selectedGizmo', void 0),
          i([s.ObservableComponent.field], e.prototype, 'localReference', void 0),
          (e = i([s.Component('engine.gizmos', a.CLASS_ID.GIZMOS)], e))
        )
      })(s.ObservableComponent)
      e.Gizmos = u
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.UIScrollRect = e.UIImage = e.UIInputText = e.UIText = e.UIButton = e.UIContainerStack = e.UIStackOrientation = e.UIContainerRect = e.UICanvas = e.UIWorldSpace = e.UIFullScreen = e.UIShape = void 0)
      var s = n(0),
        a = n(4),
        p = n(5),
        u = (function(t) {
          function e(e) {
            var n = t.call(this) || this
            return (
              (n.name = null),
              (n.visible = !0),
              (n.opacity = 1),
              (n.hAlign = 'center'),
              (n.vAlign = 'center'),
              (n.width = '100px'),
              (n.height = '50px'),
              (n.positionX = '0px'),
              (n.positionY = '0px'),
              (n.isPointerBlocker = !0),
              e && ((n._parent = e), (n.data.parentComponent = s.getComponentId(e))),
              n
            )
          }
          return (
            r(e, t),
            Object.defineProperty(e.prototype, 'parent', {
              get: function() {
                return this._parent
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'parentComponent', {
              get: function() {
                return this.data.parentComponent
              },
              enumerable: !1,
              configurable: !0
            }),
            i([s.ObservableComponent.field], e.prototype, 'name', void 0),
            i([s.ObservableComponent.field], e.prototype, 'visible', void 0),
            i([s.ObservableComponent.field], e.prototype, 'opacity', void 0),
            i([s.ObservableComponent.field], e.prototype, 'hAlign', void 0),
            i([s.ObservableComponent.field], e.prototype, 'vAlign', void 0),
            i([s.ObservableComponent.uiValue], e.prototype, 'width', void 0),
            i([s.ObservableComponent.uiValue], e.prototype, 'height', void 0),
            i([s.ObservableComponent.uiValue], e.prototype, 'positionX', void 0),
            i([s.ObservableComponent.uiValue], e.prototype, 'positionY', void 0),
            i([s.ObservableComponent.field], e.prototype, 'isPointerBlocker', void 0),
            e
          )
        })(s.ObservableComponent)
      e.UIShape = u
      var l = (function(t) {
        function e() {
          return t.call(this, null) || this
        }
        return r(e, t), (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_FULLSCREEN_SHAPE)], e))
      })(u)
      e.UIFullScreen = l
      var c = (function(t) {
        function e() {
          return t.call(this, null) || this
        }
        return r(e, t), (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_WORLD_SPACE_SHAPE)], e))
      })(u)
      e.UIWorldSpace = c
      var h = (function(t) {
        function e() {
          return t.call(this, null) || this
        }
        return r(e, t), (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_SCREEN_SPACE_SHAPE)], e))
      })(u)
      e.UICanvas = h
      var d,
        f = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this
            return (e.adaptWidth = !1), (e.adaptHeight = !1), (e.thickness = 0), (e.color = p.Color4.Clear()), (e.alignmentUsesSize = !0), e
          }
          return (
            r(e, t),
            i([s.ObservableComponent.field], e.prototype, 'adaptWidth', void 0),
            i([s.ObservableComponent.field], e.prototype, 'adaptHeight', void 0),
            i([s.ObservableComponent.field], e.prototype, 'thickness', void 0),
            i([s.ObservableComponent.field], e.prototype, 'color', void 0),
            i([s.ObservableComponent.field], e.prototype, 'alignmentUsesSize', void 0),
            (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_CONTAINER_RECT)], e))
          )
        })(u)
      ;(e.UIContainerRect = f),
        (function(t) {
          ;(t[(t.VERTICAL = 0)] = 'VERTICAL'), (t[(t.HORIZONTAL = 1)] = 'HORIZONTAL')
        })((d = e.UIStackOrientation || (e.UIStackOrientation = {})))
      var y = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.adaptWidth = !0), (e.adaptHeight = !0), (e.color = p.Color4.Clear()), (e.stackOrientation = d.VERTICAL), (e.spacing = 0), e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'adaptWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'adaptHeight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'color', void 0),
          i([s.ObservableComponent.field], e.prototype, 'stackOrientation', void 0),
          i([s.ObservableComponent.field], e.prototype, 'spacing', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_CONTAINER_STACK)], e))
        )
      })(u)
      e.UIContainerStack = y
      var v = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.fontSize = 10),
            (e.fontWeight = 'normal'),
            (e.thickness = 0),
            (e.cornerRadius = 0),
            (e.color = p.Color4.White()),
            (e.background = p.Color4.White()),
            (e.paddingTop = 0),
            (e.paddingRight = 0),
            (e.paddingBottom = 0),
            (e.paddingLeft = 0),
            (e.shadowBlur = 0),
            (e.shadowOffsetX = 0),
            (e.shadowOffsetY = 0),
            (e.shadowColor = p.Color4.Black()),
            (e.text = 'button'),
            e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'fontSize', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontWeight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'thickness', void 0),
          i([s.ObservableComponent.field], e.prototype, 'cornerRadius', void 0),
          i([s.ObservableComponent.field], e.prototype, 'color', void 0),
          i([s.ObservableComponent.field], e.prototype, 'background', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowBlur', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetX', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetY', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'text', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_BUTTON_SHAPE)], e))
        )
      })(u)
      e.UIButton = v
      var m = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.outlineWidth = 0),
            (e.outlineColor = p.Color4.White()),
            (e.color = p.Color4.White()),
            (e.fontSize = 10),
            (e.fontAutoSize = !1),
            (e.fontWeight = 'normal'),
            (e.value = ''),
            (e.lineSpacing = 0),
            (e.lineCount = 0),
            (e.adaptWidth = !1),
            (e.adaptHeight = !1),
            (e.textWrapping = !1),
            (e.shadowBlur = 0),
            (e.shadowOffsetX = 0),
            (e.shadowOffsetY = 0),
            (e.shadowColor = p.Color4.Black()),
            (e.hTextAlign = 'left'),
            (e.vTextAlign = 'bottom'),
            (e.paddingTop = 0),
            (e.paddingRight = 0),
            (e.paddingBottom = 0),
            (e.paddingLeft = 0),
            e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'outlineWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'outlineColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'color', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontSize', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontAutoSize', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontWeight', void 0),
          i([s.ObservableComponent.component], e.prototype, 'font', void 0),
          i([s.ObservableComponent.field], e.prototype, 'value', void 0),
          i([s.ObservableComponent.field], e.prototype, 'lineSpacing', void 0),
          i([s.ObservableComponent.field], e.prototype, 'lineCount', void 0),
          i([s.ObservableComponent.field], e.prototype, 'adaptWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'adaptHeight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'textWrapping', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowBlur', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetX', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetY', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'hTextAlign', void 0),
          i([s.ObservableComponent.field], e.prototype, 'vTextAlign', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_TEXT_SHAPE)], e))
        )
      })(u)
      e.UIText = m
      var b = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.outlineWidth = 0),
            (e.outlineColor = p.Color4.Black()),
            (e.color = p.Color4.Clear()),
            (e.thickness = 1),
            (e.fontSize = 10),
            (e.fontWeight = 'normal'),
            (e.value = ''),
            (e.placeholderColor = p.Color4.White()),
            (e.placeholder = ''),
            (e.margin = 10),
            (e.maxWidth = 100),
            (e.hTextAlign = 'left'),
            (e.vTextAlign = 'bottom'),
            (e.autoStretchWidth = !0),
            (e.background = p.Color4.Black()),
            (e.focusedBackground = p.Color4.Black()),
            (e.textWrapping = !1),
            (e.shadowBlur = 0),
            (e.shadowOffsetX = 0),
            (e.shadowOffsetY = 0),
            (e.shadowColor = p.Color4.White()),
            (e.paddingTop = 0),
            (e.paddingRight = 0),
            (e.paddingBottom = 0),
            (e.paddingLeft = 0),
            (e.onTextSubmit = null),
            (e.onChanged = null),
            (e.onFocus = null),
            (e.onBlur = null),
            e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'outlineWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'outlineColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'color', void 0),
          i([s.ObservableComponent.field], e.prototype, 'thickness', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontSize', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontWeight', void 0),
          i([s.ObservableComponent.component], e.prototype, 'font', void 0),
          i([s.ObservableComponent.field], e.prototype, 'value', void 0),
          i([s.ObservableComponent.field], e.prototype, 'placeholderColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'placeholder', void 0),
          i([s.ObservableComponent.field], e.prototype, 'margin', void 0),
          i([s.ObservableComponent.field], e.prototype, 'maxWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'hTextAlign', void 0),
          i([s.ObservableComponent.field], e.prototype, 'vTextAlign', void 0),
          i([s.ObservableComponent.field], e.prototype, 'autoStretchWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'background', void 0),
          i([s.ObservableComponent.field], e.prototype, 'focusedBackground', void 0),
          i([s.ObservableComponent.field], e.prototype, 'textWrapping', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowBlur', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetX', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetY', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onTextSubmit', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onChanged', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onFocus', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onBlur', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_INPUT_TEXT_SHAPE)], e))
        )
      })(u)
      e.UIInputText = b
      var g = (function(t) {
        function e(e, n) {
          var o = t.call(this, e) || this
          return (
            (o.sourceLeft = 0),
            (o.sourceTop = 0),
            (o.sourceWidth = 1),
            (o.sourceHeight = 1),
            (o.paddingTop = 0),
            (o.paddingRight = 0),
            (o.paddingBottom = 0),
            (o.paddingLeft = 0),
            (o.sizeInPixels = !0),
            (o.onClick = null),
            (o.source = n),
            o
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'sourceLeft', void 0),
          i([s.ObservableComponent.field], e.prototype, 'sourceTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'sourceWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'sourceHeight', void 0),
          i([s.ObservableComponent.component], e.prototype, 'source', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          i([s.ObservableComponent.field], e.prototype, 'sizeInPixels', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onClick', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_IMAGE_SHAPE)], e))
        )
      })(u)
      e.UIImage = g
      var _ = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.valueX = 0),
            (e.valueY = 0),
            (e.borderColor = p.Color4.White()),
            (e.backgroundColor = p.Color4.Clear()),
            (e.isHorizontal = !1),
            (e.isVertical = !1),
            (e.paddingTop = 0),
            (e.paddingRight = 0),
            (e.paddingBottom = 0),
            (e.paddingLeft = 0),
            (e.onChanged = null),
            e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'valueX', void 0),
          i([s.ObservableComponent.field], e.prototype, 'valueY', void 0),
          i([s.ObservableComponent.field], e.prototype, 'borderColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'backgroundColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'isHorizontal', void 0),
          i([s.ObservableComponent.field], e.prototype, 'isVertical', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onChanged', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_SLIDER_SHAPE)], e))
        )
      })(u)
      e.UIScrollRect = _
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.AvatarShape = void 0)
      var s = n(0),
        a = n(4),
        p = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this
            return (e.useDummyModel = !1), (e.talking = !1), e
          }
          var n
          return (
            r(e, t),
            (n = e),
            (e.Dummy = function() {
              var t = new n()
              return (t.useDummyModel = !0), t
            }),
            i([s.ObservableComponent.field], e.prototype, 'id', void 0),
            i([s.ObservableComponent.field], e.prototype, 'name', void 0),
            i([s.ObservableComponent.field], e.prototype, 'expressionTriggerId', void 0),
            i([s.ObservableComponent.field], e.prototype, 'expressionTriggerTimestamp', void 0),
            i([s.ObservableComponent.field], e.prototype, 'bodyShape', void 0),
            i([s.ObservableComponent.field], e.prototype, 'wearables', void 0),
            i([s.ObservableComponent.field], e.prototype, 'skinColor', void 0),
            i([s.ObservableComponent.field], e.prototype, 'hairColor', void 0),
            i([s.ObservableComponent.field], e.prototype, 'eyeColor', void 0),
            i([s.ObservableComponent.field], e.prototype, 'useDummyModel', void 0),
            i([s.ObservableComponent.field], e.prototype, 'talking', void 0),
            (e = n = i([s.Component('engine.avatarShape', a.CLASS_ID.AVATAR_SHAPE)], e))
          )
        })(s.ObservableComponent)
      e.AvatarShape = p
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.OnPointerUp = e.OnPointerDown = e.OnClick = e.OnChanged = e.OnEnter = e.OnBlur = e.OnTextSubmit = e.OnFocus = void 0)
      var s = n(0),
        a = n(14),
        p = n(4),
        u = (function(t) {
          function e(e) {
            var n = t.call(this, e) || this
            return (n.type = 'onFocus'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
          }
          return (
            r(e, t),
            i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
            (e = i([s.Component('engine.onFocus', p.CLASS_ID.UUID_CALLBACK)], e))
          )
        })(p.OnUUIDEvent)
      e.OnFocus = u
      var l = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'onTextSubmit'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onTextSubmit', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnTextSubmit = l
      var c = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'onBlur'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onBlur', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnBlur = c
      var h = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'onEnter'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onEnter', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnEnter = h
      var d = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'onChange'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onChange', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnChanged = d
      var f = (function(t) {
        function e(e, n) {
          var o = t.call(this, e) || this
          return (
            (o.type = 'onClick'),
            (a.uuidEventSystem.handlerMap[o.uuid] = o),
            n &&
              ((o.showFeedback = !(!1 === n.showFeedback)),
              n.button && (o.button = n.button),
              n.hoverText && (o.hoverText = n.hoverText),
              n.distance && (o.distance = n.distance)),
            o
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onClick', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnPointerUUIDEvent)
      e.OnClick = f
      var y = (function(t) {
        function e(e, n) {
          var o = t.call(this, e) || this
          return (
            (o.type = 'pointerDown'),
            (a.uuidEventSystem.handlerMap[o.uuid] = o),
            n &&
              ((o.showFeedback = !(!1 === n.showFeedback)),
              n.button && (o.button = n.button),
              n.hoverText && (o.hoverText = n.hoverText),
              n.distance && (o.distance = n.distance)),
            o
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.pointerDown', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnPointerUUIDEvent)
      e.OnPointerDown = y
      var v = (function(t) {
        function e(e, n) {
          var o = t.call(this, e) || this
          return (
            (o.type = 'pointerUp'),
            (a.uuidEventSystem.handlerMap[o.uuid] = o),
            n &&
              ((o.showFeedback = !(!1 === n.showFeedback)),
              n.button && (o.button = n.button),
              n.hoverText && (o.hoverText = n.hoverText),
              n.distance && (o.distance = n.distance)),
            o
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.pointerUp', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnPointerUUIDEvent)
      e.OnPointerUp = v
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.MessageBus = e.getMessageObserver = void 0)
      var o = n(20),
        r = n(1),
        i = null,
        s = null,
        a = null
      function p() {
        return a || (a = new o.Observable()), a
      }
      e.getMessageObserver = p
      var u = (function() {
        function t() {
          var t = this
          ;(this.messageQueue = []),
            (this.connected = !1),
            (this.flushing = !1),
            (function() {
              if (!s) {
                ;(s = dcl.loadModule('@decentraland/CommunicationsController')).then(function(t) {
                  i = t
                })
                var t = p()
                dcl.subscribe('comms'),
                  dcl.onEvent(function(e) {
                    'comms' === e.type && t.notifyObservers(e.data)
                  })
              }
              return s
            })().then(function(e) {
              ;(t.connected = !0), t.flush()
            })
        }
        return (
          (t.prototype.on = function(t, e) {
            return p().add(function(n) {
              try {
                var o = JSON.parse(n.message)
                o.message === t && e(o.payload, n.sender)
              } catch (n) {
                dcl.error('Error parsing comms message ' + n.message, n)
              }
            })
          }),
          (t.prototype.sendRaw = function(t) {
            this.messageQueue.push(t), this.connected && this.flush()
          }),
          (t.prototype.emit = function(t, e) {
            var n = JSON.stringify({ message: t, payload: e })
            this.sendRaw(n), p().notifyObservers({ message: n, sender: 'self' })
          }),
          (t.prototype.flush = function() {
            var t = this
            if (0 !== this.messageQueue.length && this.connected && i && !this.flushing) {
              var e = this.messageQueue.shift()
              ;(this.flushing = !0),
                dcl.callRpc(i.rpcHandle, 'send', [e]).then(
                  function(e) {
                    ;(t.flushing = !1), t.flush()
                  },
                  function(e) {
                    ;(t.flushing = !1), r.error('Error flushing MessageBus', e)
                  }
                )
            }
          }),
          t
        )
      })()
      e.MessageBus = u
    }
  ])
)

// AMD
"use strict";const getGlobalThis=function(){if(typeof globalThis!=="undefined")return globalThis;if(typeof self!=="undefined")return self;if(typeof window!=="undefined")return window;if(typeof this!=="undefined")return this;throw new Error("Unable to locate global `this`")};const globalObject=getGlobalThis();var loader;(function(e){"use strict";const n=1;const t=2;let r=0;let o=[];let l=[];const i={baseUrl:""};const s={};function f(e){if(typeof e==="object"){for(let n in e){if(e.hasOwnProperty(n)){i[n]=e[n]}}}}e.config=f;function d(e,t,o){let l=null;let i={};let f=null;if(typeof e==="function"){i=e}else if(typeof e==="string"){l=e;if(typeof t==="function"){i=t}else if(t instanceof Array){f=t;i=o}}else if(e instanceof Array){f=e;if(typeof t==="function"){i=t}}f=f||["require","exports","module"];if(l===null){l=`unnamed-module-${r++}`}l=g(l);function d(e){const n=s[l];if(!n)throw new Error("Could not access registered module "+l);let t=n.exports;t=typeof i==="function"?i.apply(globalObject,e)||t:i;n.exports=t;u(l)}f=(f||[]).map((e=>m(l,e)));if(!s[l]){s[l]={name:l,parent:null,dclamd:n,dependencies:f,handlers:[],exports:{},dependants:new Set}}s[l].dependencies=f;p(f,d,(e=>{if(typeof onerror=="function"){onerror(e)}else{throw e}}),l)}e.define=d;(function(e){e.amd={};e.modules=s})(d=e.define||(e.define={}));function u(e){const n=s[e];if(!n)throw new Error("Could not access registered module "+e);n.dclamd=t;let r=n.handlers;if(r&&r.length){for(let n=0;n<r.length;n++){r[n](s[e])}}}function c(e,n,t){if(!s[e]){return null}if(e==n||t==50)return[e];const r=s[e].dependencies;for(let o=0,l=r.length;o<l;o++){let l=c(r[o],n,t+1);if(l!==null){l.push(e);return l}}return null}function a(e,n){let t=s[e];if(!t){return false}let r={};for(let e in s){r[e]=false}let o=[];o.push(t);r[e]=true;while(o.length>0){let e=o.shift();let t=e.dependencies;if(t){for(let e=0,l=t.length;e<l;e++){let l=t[e];if(l===n){return true}let i=s[l];if(i&&!r[l]){r[l]=true;o.push(i)}}}}return false}function p(e,t,r,o){let i=new Array(e.length).fill(null);let f=0;let d=false;if(typeof e==="string"){if(s[e]){if(s[e].dclamd===n){throw new Error(`Trying to load ${e} from ${o}. The first module is still loading.`)}return s[e]}throw new Error(e+" has not been defined. Please include it as a dependency in "+o+"'s define()")}const u=e.length;for(let n=0;n<u;n++){switch(e[n]){case"require":let h=function(e,n,t){return p(e,n,t,o)};h.toUrl=function(e){return b(e,o)};i[n]=h;f++;break;case"exports":if(!s[o]){throw new Error("Parent module "+o+" not registered yet")}i[n]=s[o].exports;f++;break;case"module":i[n]={id:o,uri:b(o)};f++;break;default:{const p=e[n];const h=a(p,o);const m=()=>{i[n]=s[p].exports;f++;if(f===u&&t){d=true;t(i)}};if(h){const e=c(p,o,0);if(e){e.reverse();e.push(p);l.push(e)}w(p,(()=>{}),r,o);m()}else{w(p,m,r,o)}break}}}if(!d&&f===u&&t){t(i)}}e.require=p;function h(e,n){return function(){return dcl.callRpc(e,n.name,o.slice.call(arguments,0))}}function m(e,n){return e?b(n,e):n}function w(e,t,r,o){if(s[e]){s[e].dependants.add(o);if(s[e].dclamd===n){t&&s[e].handlers.push(t)}else{t&&t(s[e])}return}else{s[e]={name:e,parent:o,dclamd:n,handlers:[t],dependencies:[],dependants:new Set([o]),exports:{}}}if(e.indexOf("@")===0){let n=s[e].exports;if(typeof dcl.loadModule==="function"){dcl.loadModule(e,n).then((t=>{for(let e in t.methods){const r=t.methods[e];n[r.name]=h(t.rpcHandle,r)}u(e)})).catch((e=>{r(e)}))}else{throw new Error("Asynchronous modules will not work because loadModule function is not present")}}}if(typeof dcl!=="undefined"){dcl.onStart((()=>{const e=new Set;const t=[];for(let r in s){if(s[r]){if(s[r].dclamd===n){t.push(s[r])}s[r].dependencies.forEach((n=>{if(n=="require"||n=="exports"||n=="module")return;if(!s[n])e.add(n)}))}}const r=[];if(l.length){r.push(`\n> Cyclic dependencies: ${l.map((e=>"\n  - "+e.join(" -> "))).join("")}`)}if(e.size){r.push(`\n> Undeclared/unknown modules: ${Array.from(e).map((e=>"\n  - "+e)).join("")}`)}if(t.length){r.push(`\n> These modules didn't load: ${t.map((e=>"\n  - "+e.name)).join("")}.\n`)}if(r.length){throw new Error(r.join("\n"))}}))}function g(e){let n=e,t;t=/\/\.\//;while(t.test(n)){n=n.replace(t,"/")}n=n.replace(/^\.\//g,"");t=/\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;while(t.test(n)){n=n.replace(t,"/")}n=n.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,"");n=n.replace(/^\//g,"");return n}function y(e,n){let t=e;if(!t.startsWith("@")){if(t.startsWith("./")||t.startsWith("../")){const e=n.split("/");e.pop();t=g(e.join("/")+"/"+t)}}return t}function b(e,n){switch(e){case"require":case"exports":case"module":return e}if(n){return y(e,n)}return g(e)}p.toUrl=b})(loader||(loader={}));globalObject.define=loader.define;globalObject.dclamd=loader;
// Builder generated code below
import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../1746d432-ba19-4b2e-819f-d16cf5a64236/src/item"
import Script2 from "../c72c3d45-0309-4834-84df-7b5f517694fa/src/item"
import Script3 from "../396e4247-6acd-406c-9272-046c65d0436c/src/item"
import Script4 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script5 from "../aff6ff37-d8c9-46f5-a9ac-14e524486ffe/src/item"
import Script6 from "../c5cbd030-54d0-4f28-9158-d27401c691b1/src/item"
import Script7 from "../f89ab04f-46ef-42ea-912b-b194eb8d2f02/src/item"
import Script8 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const squareCanopy2 = new Entity('squareCanopy2')
engine.addEntity(squareCanopy2)
squareCanopy2.setParent(_scene)
const gltfShape = new GLTFShape("bc789145-d689-4559-a1ff-71c2da79b7de/Canopy_01/Canopy_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
squareCanopy2.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(16.5, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareCanopy2.addComponentOrReplace(transform2)

const couchCurved = new Entity('couchCurved')
engine.addEntity(couchCurved)
couchCurved.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(34.5, 0, 30.5),
  rotation: new Quaternion(-3.2851078069173712e-15, -0.8819212913513184, 1.0513320347627086e-7, 0.4713967442512512),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
couchCurved.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("2079fbe2-51e5-4fdf-82bd-37374422b2e3/CurvedCouch.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
couchCurved.addComponentOrReplace(gltfShape2)

const couchCurved2 = new Entity('couchCurved2')
engine.addEntity(couchCurved2)
couchCurved2.setParent(_scene)
couchCurved2.addComponentOrReplace(gltfShape2)
const transform4 = new Transform({
  position: new Vector3(36, 1.6209433795211226e-8, 25.5),
  rotation: new Quaternion(6.280379997525634e-15, -0.41228049993515015, 4.914766904562384e-8, 0.9110569953918457),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
couchCurved2.addComponentOrReplace(transform4)

const squareCanopy5 = new Entity('squareCanopy5')
engine.addEntity(squareCanopy5)
squareCanopy5.setParent(_scene)
squareCanopy5.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(9, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareCanopy5.addComponentOrReplace(transform5)

const videoScreenStanding = new Entity('videoScreenStanding')
engine.addEntity(videoScreenStanding)
videoScreenStanding.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(29.5, 0, 28),
  rotation: new Quaternion(6.48387098101577e-16, 0.7592363357543945, -9.050800997556507e-8, 0.6508150100708008),
  scale: new Vector3(1.0000020265579224, 1, 1.0000020265579224)
})
videoScreenStanding.addComponentOrReplace(transform6)

const couchCurved3 = new Entity('couchCurved3')
engine.addEntity(couchCurved3)
couchCurved3.setParent(_scene)
couchCurved3.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(39.5, 1.6209433795211226e-8, 23),
  rotation: new Quaternion(7.582406009760002e-15, -0.3209960460662842, 3.8265717705598945e-8, 0.9470805525779724),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
couchCurved3.addComponentOrReplace(transform7)

const couchCurved4 = new Entity('couchCurved4')
engine.addEntity(couchCurved4)
couchCurved4.setParent(_scene)
couchCurved4.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(40, 0, 28),
  rotation: new Quaternion(-6.9578051850041015e-15, -0.7046929001808167, 8.400593998203476e-8, 0.7095125317573547),
  scale: new Vector3(1.0000027418136597, 1, 1.0000027418136597)
})
couchCurved4.addComponentOrReplace(transform8)

const couchCurved5 = new Entity('couchCurved5')
engine.addEntity(couchCurved5)
couchCurved5.setParent(_scene)
couchCurved5.addComponentOrReplace(gltfShape2)
const transform9 = new Transform({
  position: new Vector3(37.5, 1.6209433795211226e-8, 32.5),
  rotation: new Quaternion(-3.201806351719647e-15, -0.8966655731201172, 1.0689087304172062e-7, 0.4427086412906647),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
couchCurved5.addComponentOrReplace(transform9)

const couchCurved6 = new Entity('couchCurved6')
engine.addEntity(couchCurved6)
couchCurved6.setParent(_scene)
couchCurved6.addComponentOrReplace(gltfShape2)
const transform10 = new Transform({
  position: new Vector3(40.5, 1.6209433795211226e-8, 19.5),
  rotation: new Quaternion(7.582406009760002e-15, -0.3209960460662842, 3.8265717705598945e-8, 0.9470805525779724),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
couchCurved6.addComponentOrReplace(transform10)

const couchCurved7 = new Entity('couchCurved7')
engine.addEntity(couchCurved7)
couchCurved7.setParent(_scene)
couchCurved7.addComponentOrReplace(gltfShape2)
const transform11 = new Transform({
  position: new Vector3(43.5, 1.6209433795211226e-8, 24.5),
  rotation: new Quaternion(3.874936446880825e-15, -0.5457485914230347, 6.505830896230691e-8, 0.8379490375518799),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
couchCurved7.addComponentOrReplace(transform11)

const couchCurved8 = new Entity('couchCurved8')
engine.addEntity(couchCurved8)
couchCurved8.setParent(_scene)
couchCurved8.addComponentOrReplace(gltfShape2)
const transform12 = new Transform({
  position: new Vector3(43, 1.6209433795211226e-8, 30.5),
  rotation: new Quaternion(2.419443470015706e-16, -0.7707275152206421, 9.187788663211904e-8, 0.6371649503707886),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
couchCurved8.addComponentOrReplace(transform12)

const couchCurved9 = new Entity('couchCurved9')
engine.addEntity(couchCurved9)
couchCurved9.setParent(_scene)
couchCurved9.addComponentOrReplace(gltfShape2)
const transform13 = new Transform({
  position: new Vector3(39.5, 1.6209433795211226e-8, 35),
  rotation: new Quaternion(-5.828195693798662e-15, -0.9361882209777832, 1.116023398139987e-7, 0.3514993190765381),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238)
})
couchCurved9.addComponentOrReplace(transform13)

const squareCanopy = new Entity('squareCanopy')
engine.addEntity(squareCanopy)
squareCanopy.setParent(_scene)
squareCanopy.addComponentOrReplace(gltfShape)
const transform14 = new Transform({
  position: new Vector3(32.25, 0, 45.75),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareCanopy.addComponentOrReplace(transform14)

const squareCanopy3 = new Entity('squareCanopy3')
engine.addEntity(squareCanopy3)
squareCanopy3.setParent(_scene)
squareCanopy3.addComponentOrReplace(gltfShape)
const transform15 = new Transform({
  position: new Vector3(24.5, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareCanopy3.addComponentOrReplace(transform15)

const squareCanopy4 = new Entity('squareCanopy4')
engine.addEntity(squareCanopy4)
squareCanopy4.setParent(_scene)
squareCanopy4.addComponentOrReplace(gltfShape)
const transform16 = new Transform({
  position: new Vector3(24.837608337402344, 0, 58.45895767211914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareCanopy4.addComponentOrReplace(transform16)

const squareCanopy6 = new Entity('squareCanopy6')
engine.addEntity(squareCanopy6)
squareCanopy6.setParent(_scene)
squareCanopy6.addComponentOrReplace(gltfShape)
const transform17 = new Transform({
  position: new Vector3(32.587608337402344, 0, 58.20895767211914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareCanopy6.addComponentOrReplace(transform17)

const squareCanopy7 = new Entity('squareCanopy7')
engine.addEntity(squareCanopy7)
squareCanopy7.setParent(_scene)
squareCanopy7.addComponentOrReplace(gltfShape)
const transform18 = new Transform({
  position: new Vector3(16.837608337402344, 0, 58.45895767211914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareCanopy7.addComponentOrReplace(transform18)

const squareCanopy8 = new Entity('squareCanopy8')
engine.addEntity(squareCanopy8)
squareCanopy8.setParent(_scene)
squareCanopy8.addComponentOrReplace(gltfShape)
const transform19 = new Transform({
  position: new Vector3(9.337608337402344, 0, 58.45895767211914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareCanopy8.addComponentOrReplace(transform19)

const woodTile = new Entity('woodTile')
engine.addEntity(woodTile)
woodTile.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(36.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile.addComponentOrReplace(transform20)
const gltfShape3 = new GLTFShape("df6bc5c0-5989-4251-8d1f-38edcf9c9beb/FloorBlock_03/FloorBlock_03.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
woodTile.addComponentOrReplace(gltfShape3)

const woodTile2 = new Entity('woodTile2')
engine.addEntity(woodTile2)
woodTile2.setParent(_scene)
woodTile2.addComponentOrReplace(gltfShape3)
const transform21 = new Transform({
  position: new Vector3(36.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile2.addComponentOrReplace(transform21)

const woodTile3 = new Entity('woodTile3')
engine.addEntity(woodTile3)
woodTile3.setParent(_scene)
woodTile3.addComponentOrReplace(gltfShape3)
const transform22 = new Transform({
  position: new Vector3(34.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile3.addComponentOrReplace(transform22)

const woodTile4 = new Entity('woodTile4')
engine.addEntity(woodTile4)
woodTile4.setParent(_scene)
woodTile4.addComponentOrReplace(gltfShape3)
const transform23 = new Transform({
  position: new Vector3(34.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile4.addComponentOrReplace(transform23)

const woodTile5 = new Entity('woodTile5')
engine.addEntity(woodTile5)
woodTile5.setParent(_scene)
woodTile5.addComponentOrReplace(gltfShape3)
const transform24 = new Transform({
  position: new Vector3(32.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile5.addComponentOrReplace(transform24)

const woodTile6 = new Entity('woodTile6')
engine.addEntity(woodTile6)
woodTile6.setParent(_scene)
woodTile6.addComponentOrReplace(gltfShape3)
const transform25 = new Transform({
  position: new Vector3(32.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile6.addComponentOrReplace(transform25)

const woodTile7 = new Entity('woodTile7')
engine.addEntity(woodTile7)
woodTile7.setParent(_scene)
woodTile7.addComponentOrReplace(gltfShape3)
const transform26 = new Transform({
  position: new Vector3(30.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile7.addComponentOrReplace(transform26)

const woodTile8 = new Entity('woodTile8')
engine.addEntity(woodTile8)
woodTile8.setParent(_scene)
woodTile8.addComponentOrReplace(gltfShape3)
const transform27 = new Transform({
  position: new Vector3(30.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile8.addComponentOrReplace(transform27)

const woodTile9 = new Entity('woodTile9')
engine.addEntity(woodTile9)
woodTile9.setParent(_scene)
woodTile9.addComponentOrReplace(gltfShape3)
const transform28 = new Transform({
  position: new Vector3(22.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile9.addComponentOrReplace(transform28)

const woodTile10 = new Entity('woodTile10')
engine.addEntity(woodTile10)
woodTile10.setParent(_scene)
woodTile10.addComponentOrReplace(gltfShape3)
const transform29 = new Transform({
  position: new Vector3(22.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile10.addComponentOrReplace(transform29)

const woodTile11 = new Entity('woodTile11')
engine.addEntity(woodTile11)
woodTile11.setParent(_scene)
woodTile11.addComponentOrReplace(gltfShape3)
const transform30 = new Transform({
  position: new Vector3(24.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile11.addComponentOrReplace(transform30)

const woodTile12 = new Entity('woodTile12')
engine.addEntity(woodTile12)
woodTile12.setParent(_scene)
woodTile12.addComponentOrReplace(gltfShape3)
const transform31 = new Transform({
  position: new Vector3(24.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile12.addComponentOrReplace(transform31)

const woodTile13 = new Entity('woodTile13')
engine.addEntity(woodTile13)
woodTile13.setParent(_scene)
woodTile13.addComponentOrReplace(gltfShape3)
const transform32 = new Transform({
  position: new Vector3(26.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile13.addComponentOrReplace(transform32)

const woodTile14 = new Entity('woodTile14')
engine.addEntity(woodTile14)
woodTile14.setParent(_scene)
woodTile14.addComponentOrReplace(gltfShape3)
const transform33 = new Transform({
  position: new Vector3(26.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile14.addComponentOrReplace(transform33)

const woodTile15 = new Entity('woodTile15')
engine.addEntity(woodTile15)
woodTile15.setParent(_scene)
woodTile15.addComponentOrReplace(gltfShape3)
const transform34 = new Transform({
  position: new Vector3(28.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile15.addComponentOrReplace(transform34)

const woodTile16 = new Entity('woodTile16')
engine.addEntity(woodTile16)
woodTile16.setParent(_scene)
woodTile16.addComponentOrReplace(gltfShape3)
const transform35 = new Transform({
  position: new Vector3(28.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile16.addComponentOrReplace(transform35)

const woodTile17 = new Entity('woodTile17')
engine.addEntity(woodTile17)
woodTile17.setParent(_scene)
woodTile17.addComponentOrReplace(gltfShape3)
const transform36 = new Transform({
  position: new Vector3(20.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile17.addComponentOrReplace(transform36)

const woodTile18 = new Entity('woodTile18')
engine.addEntity(woodTile18)
woodTile18.setParent(_scene)
woodTile18.addComponentOrReplace(gltfShape3)
const transform37 = new Transform({
  position: new Vector3(20.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile18.addComponentOrReplace(transform37)

const woodTile19 = new Entity('woodTile19')
engine.addEntity(woodTile19)
woodTile19.setParent(_scene)
woodTile19.addComponentOrReplace(gltfShape3)
const transform38 = new Transform({
  position: new Vector3(18.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile19.addComponentOrReplace(transform38)

const woodTile20 = new Entity('woodTile20')
engine.addEntity(woodTile20)
woodTile20.setParent(_scene)
woodTile20.addComponentOrReplace(gltfShape3)
const transform39 = new Transform({
  position: new Vector3(18.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile20.addComponentOrReplace(transform39)

const woodTile21 = new Entity('woodTile21')
engine.addEntity(woodTile21)
woodTile21.setParent(_scene)
woodTile21.addComponentOrReplace(gltfShape3)
const transform40 = new Transform({
  position: new Vector3(16.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile21.addComponentOrReplace(transform40)

const woodTile22 = new Entity('woodTile22')
engine.addEntity(woodTile22)
woodTile22.setParent(_scene)
woodTile22.addComponentOrReplace(gltfShape3)
const transform41 = new Transform({
  position: new Vector3(14.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile22.addComponentOrReplace(transform41)

const woodTile23 = new Entity('woodTile23')
engine.addEntity(woodTile23)
woodTile23.setParent(_scene)
woodTile23.addComponentOrReplace(gltfShape3)
const transform42 = new Transform({
  position: new Vector3(14.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile23.addComponentOrReplace(transform42)

const woodTile24 = new Entity('woodTile24')
engine.addEntity(woodTile24)
woodTile24.setParent(_scene)
woodTile24.addComponentOrReplace(gltfShape3)
const transform43 = new Transform({
  position: new Vector3(16.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile24.addComponentOrReplace(transform43)

const woodTile25 = new Entity('woodTile25')
engine.addEntity(woodTile25)
woodTile25.setParent(_scene)
woodTile25.addComponentOrReplace(gltfShape3)
const transform44 = new Transform({
  position: new Vector3(10.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile25.addComponentOrReplace(transform44)

const woodTile26 = new Entity('woodTile26')
engine.addEntity(woodTile26)
woodTile26.setParent(_scene)
woodTile26.addComponentOrReplace(gltfShape3)
const transform45 = new Transform({
  position: new Vector3(10.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile26.addComponentOrReplace(transform45)

const woodTile27 = new Entity('woodTile27')
engine.addEntity(woodTile27)
woodTile27.setParent(_scene)
woodTile27.addComponentOrReplace(gltfShape3)
const transform46 = new Transform({
  position: new Vector3(12.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile27.addComponentOrReplace(transform46)

const woodTile28 = new Entity('woodTile28')
engine.addEntity(woodTile28)
woodTile28.setParent(_scene)
woodTile28.addComponentOrReplace(gltfShape3)
const transform47 = new Transform({
  position: new Vector3(12.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile28.addComponentOrReplace(transform47)

const woodTile29 = new Entity('woodTile29')
engine.addEntity(woodTile29)
woodTile29.setParent(_scene)
woodTile29.addComponentOrReplace(gltfShape3)
const transform48 = new Transform({
  position: new Vector3(6.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile29.addComponentOrReplace(transform48)

const woodTile30 = new Entity('woodTile30')
engine.addEntity(woodTile30)
woodTile30.setParent(_scene)
woodTile30.addComponentOrReplace(gltfShape3)
const transform49 = new Transform({
  position: new Vector3(6.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile30.addComponentOrReplace(transform49)

const woodTile31 = new Entity('woodTile31')
engine.addEntity(woodTile31)
woodTile31.setParent(_scene)
woodTile31.addComponentOrReplace(gltfShape3)
const transform50 = new Transform({
  position: new Vector3(8.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile31.addComponentOrReplace(transform50)

const woodTile32 = new Entity('woodTile32')
engine.addEntity(woodTile32)
woodTile32.setParent(_scene)
woodTile32.addComponentOrReplace(gltfShape3)
const transform51 = new Transform({
  position: new Vector3(8.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile32.addComponentOrReplace(transform51)

const woodTile33 = new Entity('woodTile33')
engine.addEntity(woodTile33)
woodTile33.setParent(_scene)
woodTile33.addComponentOrReplace(gltfShape3)
const transform52 = new Transform({
  position: new Vector3(2.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile33.addComponentOrReplace(transform52)

const woodTile34 = new Entity('woodTile34')
engine.addEntity(woodTile34)
woodTile34.setParent(_scene)
woodTile34.addComponentOrReplace(gltfShape3)
const transform53 = new Transform({
  position: new Vector3(2.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile34.addComponentOrReplace(transform53)

const woodTile35 = new Entity('woodTile35')
engine.addEntity(woodTile35)
woodTile35.setParent(_scene)
woodTile35.addComponentOrReplace(gltfShape3)
const transform54 = new Transform({
  position: new Vector3(4.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile35.addComponentOrReplace(transform54)

const woodTile36 = new Entity('woodTile36')
engine.addEntity(woodTile36)
woodTile36.setParent(_scene)
woodTile36.addComponentOrReplace(gltfShape3)
const transform55 = new Transform({
  position: new Vector3(4.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile36.addComponentOrReplace(transform55)

const woodTile37 = new Entity('woodTile37')
engine.addEntity(woodTile37)
woodTile37.setParent(_scene)
woodTile37.addComponentOrReplace(gltfShape3)
const transform56 = new Transform({
  position: new Vector3(2.5, 0, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile37.addComponentOrReplace(transform56)

const woodTile38 = new Entity('woodTile38')
engine.addEntity(woodTile38)
woodTile38.setParent(_scene)
woodTile38.addComponentOrReplace(gltfShape3)
const transform57 = new Transform({
  position: new Vector3(2.5, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile38.addComponentOrReplace(transform57)

const woodTile39 = new Entity('woodTile39')
engine.addEntity(woodTile39)
woodTile39.setParent(_scene)
woodTile39.addComponentOrReplace(gltfShape3)
const transform58 = new Transform({
  position: new Vector3(4.5, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile39.addComponentOrReplace(transform58)

const woodTile40 = new Entity('woodTile40')
engine.addEntity(woodTile40)
woodTile40.setParent(_scene)
woodTile40.addComponentOrReplace(gltfShape3)
const transform59 = new Transform({
  position: new Vector3(4.5, 0, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile40.addComponentOrReplace(transform59)

const woodTile41 = new Entity('woodTile41')
engine.addEntity(woodTile41)
woodTile41.setParent(_scene)
woodTile41.addComponentOrReplace(gltfShape3)
const transform60 = new Transform({
  position: new Vector3(2.5, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile41.addComponentOrReplace(transform60)

const woodTile42 = new Entity('woodTile42')
engine.addEntity(woodTile42)
woodTile42.setParent(_scene)
woodTile42.addComponentOrReplace(gltfShape3)
const transform61 = new Transform({
  position: new Vector3(2.5, 0, 43),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile42.addComponentOrReplace(transform61)

const woodTile43 = new Entity('woodTile43')
engine.addEntity(woodTile43)
woodTile43.setParent(_scene)
woodTile43.addComponentOrReplace(gltfShape3)
const transform62 = new Transform({
  position: new Vector3(4.5, 0, 43),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile43.addComponentOrReplace(transform62)

const woodTile44 = new Entity('woodTile44')
engine.addEntity(woodTile44)
woodTile44.setParent(_scene)
woodTile44.addComponentOrReplace(gltfShape3)
const transform63 = new Transform({
  position: new Vector3(4.5, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile44.addComponentOrReplace(transform63)

const woodTile45 = new Entity('woodTile45')
engine.addEntity(woodTile45)
woodTile45.setParent(_scene)
woodTile45.addComponentOrReplace(gltfShape3)
const transform64 = new Transform({
  position: new Vector3(2.5, 0, 37),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile45.addComponentOrReplace(transform64)

const woodTile46 = new Entity('woodTile46')
engine.addEntity(woodTile46)
woodTile46.setParent(_scene)
woodTile46.addComponentOrReplace(gltfShape3)
const transform65 = new Transform({
  position: new Vector3(2.5, 0, 35),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile46.addComponentOrReplace(transform65)

const woodTile47 = new Entity('woodTile47')
engine.addEntity(woodTile47)
woodTile47.setParent(_scene)
woodTile47.addComponentOrReplace(gltfShape3)
const transform66 = new Transform({
  position: new Vector3(4.5, 0, 35),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile47.addComponentOrReplace(transform66)

const woodTile48 = new Entity('woodTile48')
engine.addEntity(woodTile48)
woodTile48.setParent(_scene)
woodTile48.addComponentOrReplace(gltfShape3)
const transform67 = new Transform({
  position: new Vector3(4.5, 0, 37),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile48.addComponentOrReplace(transform67)

const woodTile49 = new Entity('woodTile49')
engine.addEntity(woodTile49)
woodTile49.setParent(_scene)
woodTile49.addComponentOrReplace(gltfShape3)
const transform68 = new Transform({
  position: new Vector3(4.5, 0, 39),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile49.addComponentOrReplace(transform68)

const woodTile50 = new Entity('woodTile50')
engine.addEntity(woodTile50)
woodTile50.setParent(_scene)
woodTile50.addComponentOrReplace(gltfShape3)
const transform69 = new Transform({
  position: new Vector3(2.5, 0, 39),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile50.addComponentOrReplace(transform69)

const woodTile51 = new Entity('woodTile51')
engine.addEntity(woodTile51)
woodTile51.setParent(_scene)
woodTile51.addComponentOrReplace(gltfShape3)
const transform70 = new Transform({
  position: new Vector3(2.5, 0, 41),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile51.addComponentOrReplace(transform70)

const woodTile52 = new Entity('woodTile52')
engine.addEntity(woodTile52)
woodTile52.setParent(_scene)
woodTile52.addComponentOrReplace(gltfShape3)
const transform71 = new Transform({
  position: new Vector3(4.5, 0, 41),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile52.addComponentOrReplace(transform71)

const woodTile53 = new Entity('woodTile53')
engine.addEntity(woodTile53)
woodTile53.setParent(_scene)
woodTile53.addComponentOrReplace(gltfShape3)
const transform72 = new Transform({
  position: new Vector3(2.5, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile53.addComponentOrReplace(transform72)

const woodTile54 = new Entity('woodTile54')
engine.addEntity(woodTile54)
woodTile54.setParent(_scene)
woodTile54.addComponentOrReplace(gltfShape3)
const transform73 = new Transform({
  position: new Vector3(2.5, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile54.addComponentOrReplace(transform73)

const woodTile55 = new Entity('woodTile55')
engine.addEntity(woodTile55)
woodTile55.setParent(_scene)
woodTile55.addComponentOrReplace(gltfShape3)
const transform74 = new Transform({
  position: new Vector3(4.5, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile55.addComponentOrReplace(transform74)

const woodTile56 = new Entity('woodTile56')
engine.addEntity(woodTile56)
woodTile56.setParent(_scene)
woodTile56.addComponentOrReplace(gltfShape3)
const transform75 = new Transform({
  position: new Vector3(4.5, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile56.addComponentOrReplace(transform75)

const woodTile57 = new Entity('woodTile57')
engine.addEntity(woodTile57)
woodTile57.setParent(_scene)
woodTile57.addComponentOrReplace(gltfShape3)
const transform76 = new Transform({
  position: new Vector3(4.5, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile57.addComponentOrReplace(transform76)

const woodTile58 = new Entity('woodTile58')
engine.addEntity(woodTile58)
woodTile58.setParent(_scene)
woodTile58.addComponentOrReplace(gltfShape3)
const transform77 = new Transform({
  position: new Vector3(2.5, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile58.addComponentOrReplace(transform77)

const woodTile59 = new Entity('woodTile59')
engine.addEntity(woodTile59)
woodTile59.setParent(_scene)
woodTile59.addComponentOrReplace(gltfShape3)
const transform78 = new Transform({
  position: new Vector3(2.5, 0, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile59.addComponentOrReplace(transform78)

const woodTile60 = new Entity('woodTile60')
engine.addEntity(woodTile60)
woodTile60.setParent(_scene)
woodTile60.addComponentOrReplace(gltfShape3)
const transform79 = new Transform({
  position: new Vector3(4.5, 0, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile60.addComponentOrReplace(transform79)

const woodTile61 = new Entity('woodTile61')
engine.addEntity(woodTile61)
woodTile61.setParent(_scene)
woodTile61.addComponentOrReplace(gltfShape3)
const transform80 = new Transform({
  position: new Vector3(4.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile61.addComponentOrReplace(transform80)

const woodTile62 = new Entity('woodTile62')
engine.addEntity(woodTile62)
woodTile62.setParent(_scene)
woodTile62.addComponentOrReplace(gltfShape3)
const transform81 = new Transform({
  position: new Vector3(4.5, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile62.addComponentOrReplace(transform81)

const woodTile63 = new Entity('woodTile63')
engine.addEntity(woodTile63)
woodTile63.setParent(_scene)
woodTile63.addComponentOrReplace(gltfShape3)
const transform82 = new Transform({
  position: new Vector3(2.5, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile63.addComponentOrReplace(transform82)

const woodTile64 = new Entity('woodTile64')
engine.addEntity(woodTile64)
woodTile64.setParent(_scene)
woodTile64.addComponentOrReplace(gltfShape3)
const transform83 = new Transform({
  position: new Vector3(2.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile64.addComponentOrReplace(transform83)

const woodTile65 = new Entity('woodTile65')
engine.addEntity(woodTile65)
woodTile65.setParent(_scene)
woodTile65.addComponentOrReplace(gltfShape3)
const transform84 = new Transform({
  position: new Vector3(2.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile65.addComponentOrReplace(transform84)

const woodTile66 = new Entity('woodTile66')
engine.addEntity(woodTile66)
woodTile66.setParent(_scene)
woodTile66.addComponentOrReplace(gltfShape3)
const transform85 = new Transform({
  position: new Vector3(4.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile66.addComponentOrReplace(transform85)

const woodTile67 = new Entity('woodTile67')
engine.addEntity(woodTile67)
woodTile67.setParent(_scene)
woodTile67.addComponentOrReplace(gltfShape3)
const transform86 = new Transform({
  position: new Vector3(4.5, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile67.addComponentOrReplace(transform86)

const woodTile68 = new Entity('woodTile68')
engine.addEntity(woodTile68)
woodTile68.setParent(_scene)
woodTile68.addComponentOrReplace(gltfShape3)
const transform87 = new Transform({
  position: new Vector3(2.5, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile68.addComponentOrReplace(transform87)

const woodTile69 = new Entity('woodTile69')
engine.addEntity(woodTile69)
woodTile69.setParent(_scene)
woodTile69.addComponentOrReplace(gltfShape3)
const transform88 = new Transform({
  position: new Vector3(4.5, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile69.addComponentOrReplace(transform88)

const woodTile70 = new Entity('woodTile70')
engine.addEntity(woodTile70)
woodTile70.setParent(_scene)
woodTile70.addComponentOrReplace(gltfShape3)
const transform89 = new Transform({
  position: new Vector3(2.5, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile70.addComponentOrReplace(transform89)

const woodTile71 = new Entity('woodTile71')
engine.addEntity(woodTile71)
woodTile71.setParent(_scene)
woodTile71.addComponentOrReplace(gltfShape3)
const transform90 = new Transform({
  position: new Vector3(2.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile71.addComponentOrReplace(transform90)

const woodTile72 = new Entity('woodTile72')
engine.addEntity(woodTile72)
woodTile72.setParent(_scene)
woodTile72.addComponentOrReplace(gltfShape3)
const transform91 = new Transform({
  position: new Vector3(2.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile72.addComponentOrReplace(transform91)

const woodTile73 = new Entity('woodTile73')
engine.addEntity(woodTile73)
woodTile73.setParent(_scene)
woodTile73.addComponentOrReplace(gltfShape3)
const transform92 = new Transform({
  position: new Vector3(4.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile73.addComponentOrReplace(transform92)

const woodTile74 = new Entity('woodTile74')
engine.addEntity(woodTile74)
woodTile74.setParent(_scene)
woodTile74.addComponentOrReplace(gltfShape3)
const transform93 = new Transform({
  position: new Vector3(6.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile74.addComponentOrReplace(transform93)

const woodTile75 = new Entity('woodTile75')
engine.addEntity(woodTile75)
woodTile75.setParent(_scene)
woodTile75.addComponentOrReplace(gltfShape3)
const transform94 = new Transform({
  position: new Vector3(4.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile75.addComponentOrReplace(transform94)

const woodTile76 = new Entity('woodTile76')
engine.addEntity(woodTile76)
woodTile76.setParent(_scene)
woodTile76.addComponentOrReplace(gltfShape3)
const transform95 = new Transform({
  position: new Vector3(8.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile76.addComponentOrReplace(transform95)

const woodTile77 = new Entity('woodTile77')
engine.addEntity(woodTile77)
woodTile77.setParent(_scene)
woodTile77.addComponentOrReplace(gltfShape3)
const transform96 = new Transform({
  position: new Vector3(6.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile77.addComponentOrReplace(transform96)

const woodTile78 = new Entity('woodTile78')
engine.addEntity(woodTile78)
woodTile78.setParent(_scene)
woodTile78.addComponentOrReplace(gltfShape3)
const transform97 = new Transform({
  position: new Vector3(8.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile78.addComponentOrReplace(transform97)

const woodTile79 = new Entity('woodTile79')
engine.addEntity(woodTile79)
woodTile79.setParent(_scene)
woodTile79.addComponentOrReplace(gltfShape3)
const transform98 = new Transform({
  position: new Vector3(10.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile79.addComponentOrReplace(transform98)

const woodTile80 = new Entity('woodTile80')
engine.addEntity(woodTile80)
woodTile80.setParent(_scene)
woodTile80.addComponentOrReplace(gltfShape3)
const transform99 = new Transform({
  position: new Vector3(10.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile80.addComponentOrReplace(transform99)

const woodTile81 = new Entity('woodTile81')
engine.addEntity(woodTile81)
woodTile81.setParent(_scene)
woodTile81.addComponentOrReplace(gltfShape3)
const transform100 = new Transform({
  position: new Vector3(12.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile81.addComponentOrReplace(transform100)

const woodTile82 = new Entity('woodTile82')
engine.addEntity(woodTile82)
woodTile82.setParent(_scene)
woodTile82.addComponentOrReplace(gltfShape3)
const transform101 = new Transform({
  position: new Vector3(12.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile82.addComponentOrReplace(transform101)

const woodTile83 = new Entity('woodTile83')
engine.addEntity(woodTile83)
woodTile83.setParent(_scene)
woodTile83.addComponentOrReplace(gltfShape3)
const transform102 = new Transform({
  position: new Vector3(14.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile83.addComponentOrReplace(transform102)

const woodTile84 = new Entity('woodTile84')
engine.addEntity(woodTile84)
woodTile84.setParent(_scene)
woodTile84.addComponentOrReplace(gltfShape3)
const transform103 = new Transform({
  position: new Vector3(14.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile84.addComponentOrReplace(transform103)

const woodTile85 = new Entity('woodTile85')
engine.addEntity(woodTile85)
woodTile85.setParent(_scene)
woodTile85.addComponentOrReplace(gltfShape3)
const transform104 = new Transform({
  position: new Vector3(18.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile85.addComponentOrReplace(transform104)

const woodTile86 = new Entity('woodTile86')
engine.addEntity(woodTile86)
woodTile86.setParent(_scene)
woodTile86.addComponentOrReplace(gltfShape3)
const transform105 = new Transform({
  position: new Vector3(18.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile86.addComponentOrReplace(transform105)

const woodTile87 = new Entity('woodTile87')
engine.addEntity(woodTile87)
woodTile87.setParent(_scene)
woodTile87.addComponentOrReplace(gltfShape3)
const transform106 = new Transform({
  position: new Vector3(16.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile87.addComponentOrReplace(transform106)

const woodTile88 = new Entity('woodTile88')
engine.addEntity(woodTile88)
woodTile88.setParent(_scene)
woodTile88.addComponentOrReplace(gltfShape3)
const transform107 = new Transform({
  position: new Vector3(16.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile88.addComponentOrReplace(transform107)

const woodTile89 = new Entity('woodTile89')
engine.addEntity(woodTile89)
woodTile89.setParent(_scene)
woodTile89.addComponentOrReplace(gltfShape3)
const transform108 = new Transform({
  position: new Vector3(20.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile89.addComponentOrReplace(transform108)

const woodTile90 = new Entity('woodTile90')
engine.addEntity(woodTile90)
woodTile90.setParent(_scene)
woodTile90.addComponentOrReplace(gltfShape3)
const transform109 = new Transform({
  position: new Vector3(20.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile90.addComponentOrReplace(transform109)

const woodTile91 = new Entity('woodTile91')
engine.addEntity(woodTile91)
woodTile91.setParent(_scene)
woodTile91.addComponentOrReplace(gltfShape3)
const transform110 = new Transform({
  position: new Vector3(20.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile91.addComponentOrReplace(transform110)

const woodTile92 = new Entity('woodTile92')
engine.addEntity(woodTile92)
woodTile92.setParent(_scene)
woodTile92.addComponentOrReplace(gltfShape3)
const transform111 = new Transform({
  position: new Vector3(18.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile92.addComponentOrReplace(transform111)

const woodTile93 = new Entity('woodTile93')
engine.addEntity(woodTile93)
woodTile93.setParent(_scene)
woodTile93.addComponentOrReplace(gltfShape3)
const transform112 = new Transform({
  position: new Vector3(18.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile93.addComponentOrReplace(transform112)

const woodTile94 = new Entity('woodTile94')
engine.addEntity(woodTile94)
woodTile94.setParent(_scene)
woodTile94.addComponentOrReplace(gltfShape3)
const transform113 = new Transform({
  position: new Vector3(20.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile94.addComponentOrReplace(transform113)

const woodTile95 = new Entity('woodTile95')
engine.addEntity(woodTile95)
woodTile95.setParent(_scene)
woodTile95.addComponentOrReplace(gltfShape3)
const transform114 = new Transform({
  position: new Vector3(22.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile95.addComponentOrReplace(transform114)

const woodTile96 = new Entity('woodTile96')
engine.addEntity(woodTile96)
woodTile96.setParent(_scene)
woodTile96.addComponentOrReplace(gltfShape3)
const transform115 = new Transform({
  position: new Vector3(24.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile96.addComponentOrReplace(transform115)

const woodTile97 = new Entity('woodTile97')
engine.addEntity(woodTile97)
woodTile97.setParent(_scene)
woodTile97.addComponentOrReplace(gltfShape3)
const transform116 = new Transform({
  position: new Vector3(22.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile97.addComponentOrReplace(transform116)

const woodTile98 = new Entity('woodTile98')
engine.addEntity(woodTile98)
woodTile98.setParent(_scene)
woodTile98.addComponentOrReplace(gltfShape3)
const transform117 = new Transform({
  position: new Vector3(24.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile98.addComponentOrReplace(transform117)

const woodTile99 = new Entity('woodTile99')
engine.addEntity(woodTile99)
woodTile99.setParent(_scene)
woodTile99.addComponentOrReplace(gltfShape3)
const transform118 = new Transform({
  position: new Vector3(26.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile99.addComponentOrReplace(transform118)

const woodTile100 = new Entity('woodTile100')
engine.addEntity(woodTile100)
woodTile100.setParent(_scene)
woodTile100.addComponentOrReplace(gltfShape3)
const transform119 = new Transform({
  position: new Vector3(28.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile100.addComponentOrReplace(transform119)

const woodTile101 = new Entity('woodTile101')
engine.addEntity(woodTile101)
woodTile101.setParent(_scene)
woodTile101.addComponentOrReplace(gltfShape3)
const transform120 = new Transform({
  position: new Vector3(26.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile101.addComponentOrReplace(transform120)

const woodTile102 = new Entity('woodTile102')
engine.addEntity(woodTile102)
woodTile102.setParent(_scene)
woodTile102.addComponentOrReplace(gltfShape3)
const transform121 = new Transform({
  position: new Vector3(28.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile102.addComponentOrReplace(transform121)

const woodTile103 = new Entity('woodTile103')
engine.addEntity(woodTile103)
woodTile103.setParent(_scene)
woodTile103.addComponentOrReplace(gltfShape3)
const transform122 = new Transform({
  position: new Vector3(34.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile103.addComponentOrReplace(transform122)

const woodTile104 = new Entity('woodTile104')
engine.addEntity(woodTile104)
woodTile104.setParent(_scene)
woodTile104.addComponentOrReplace(gltfShape3)
const transform123 = new Transform({
  position: new Vector3(34.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile104.addComponentOrReplace(transform123)

const woodTile105 = new Entity('woodTile105')
engine.addEntity(woodTile105)
woodTile105.setParent(_scene)
woodTile105.addComponentOrReplace(gltfShape3)
const transform124 = new Transform({
  position: new Vector3(32.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile105.addComponentOrReplace(transform124)

const woodTile106 = new Entity('woodTile106')
engine.addEntity(woodTile106)
woodTile106.setParent(_scene)
woodTile106.addComponentOrReplace(gltfShape3)
const transform125 = new Transform({
  position: new Vector3(32.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile106.addComponentOrReplace(transform125)

const woodTile107 = new Entity('woodTile107')
engine.addEntity(woodTile107)
woodTile107.setParent(_scene)
woodTile107.addComponentOrReplace(gltfShape3)
const transform126 = new Transform({
  position: new Vector3(30.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile107.addComponentOrReplace(transform126)

const woodTile108 = new Entity('woodTile108')
engine.addEntity(woodTile108)
woodTile108.setParent(_scene)
woodTile108.addComponentOrReplace(gltfShape3)
const transform127 = new Transform({
  position: new Vector3(30.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile108.addComponentOrReplace(transform127)

const woodTile111 = new Entity('woodTile111')
engine.addEntity(woodTile111)
woodTile111.setParent(_scene)
woodTile111.addComponentOrReplace(gltfShape3)
const transform128 = new Transform({
  position: new Vector3(46.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile111.addComponentOrReplace(transform128)

const woodTile112 = new Entity('woodTile112')
engine.addEntity(woodTile112)
woodTile112.setParent(_scene)
woodTile112.addComponentOrReplace(gltfShape3)
const transform129 = new Transform({
  position: new Vector3(46.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile112.addComponentOrReplace(transform129)

const woodTile113 = new Entity('woodTile113')
engine.addEntity(woodTile113)
woodTile113.setParent(_scene)
woodTile113.addComponentOrReplace(gltfShape3)
const transform130 = new Transform({
  position: new Vector3(44.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile113.addComponentOrReplace(transform130)

const woodTile114 = new Entity('woodTile114')
engine.addEntity(woodTile114)
woodTile114.setParent(_scene)
woodTile114.addComponentOrReplace(gltfShape3)
const transform131 = new Transform({
  position: new Vector3(44.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile114.addComponentOrReplace(transform131)

const woodTile115 = new Entity('woodTile115')
engine.addEntity(woodTile115)
woodTile115.setParent(_scene)
woodTile115.addComponentOrReplace(gltfShape3)
const transform132 = new Transform({
  position: new Vector3(42.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile115.addComponentOrReplace(transform132)

const woodTile116 = new Entity('woodTile116')
engine.addEntity(woodTile116)
woodTile116.setParent(_scene)
woodTile116.addComponentOrReplace(gltfShape3)
const transform133 = new Transform({
  position: new Vector3(42.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile116.addComponentOrReplace(transform133)

const woodTile117 = new Entity('woodTile117')
engine.addEntity(woodTile117)
woodTile117.setParent(_scene)
woodTile117.addComponentOrReplace(gltfShape3)
const transform134 = new Transform({
  position: new Vector3(40.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile117.addComponentOrReplace(transform134)

const woodTile118 = new Entity('woodTile118')
engine.addEntity(woodTile118)
woodTile118.setParent(_scene)
woodTile118.addComponentOrReplace(gltfShape3)
const transform135 = new Transform({
  position: new Vector3(40.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile118.addComponentOrReplace(transform135)

const woodTile119 = new Entity('woodTile119')
engine.addEntity(woodTile119)
woodTile119.setParent(_scene)
woodTile119.addComponentOrReplace(gltfShape3)
const transform136 = new Transform({
  position: new Vector3(38.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile119.addComponentOrReplace(transform136)

const woodTile120 = new Entity('woodTile120')
engine.addEntity(woodTile120)
woodTile120.setParent(_scene)
woodTile120.addComponentOrReplace(gltfShape3)
const transform137 = new Transform({
  position: new Vector3(38.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile120.addComponentOrReplace(transform137)

const woodTile121 = new Entity('woodTile121')
engine.addEntity(woodTile121)
woodTile121.setParent(_scene)
woodTile121.addComponentOrReplace(gltfShape3)
const transform138 = new Transform({
  position: new Vector3(36.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile121.addComponentOrReplace(transform138)

const woodTile122 = new Entity('woodTile122')
engine.addEntity(woodTile122)
woodTile122.setParent(_scene)
woodTile122.addComponentOrReplace(gltfShape3)
const transform139 = new Transform({
  position: new Vector3(36.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile122.addComponentOrReplace(transform139)

const woodTile123 = new Entity('woodTile123')
engine.addEntity(woodTile123)
woodTile123.setParent(_scene)
woodTile123.addComponentOrReplace(gltfShape3)
const transform140 = new Transform({
  position: new Vector3(44.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile123.addComponentOrReplace(transform140)

const woodTile124 = new Entity('woodTile124')
engine.addEntity(woodTile124)
woodTile124.setParent(_scene)
woodTile124.addComponentOrReplace(gltfShape3)
const transform141 = new Transform({
  position: new Vector3(44.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile124.addComponentOrReplace(transform141)

const woodTile125 = new Entity('woodTile125')
engine.addEntity(woodTile125)
woodTile125.setParent(_scene)
woodTile125.addComponentOrReplace(gltfShape3)
const transform142 = new Transform({
  position: new Vector3(42.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile125.addComponentOrReplace(transform142)

const woodTile126 = new Entity('woodTile126')
engine.addEntity(woodTile126)
woodTile126.setParent(_scene)
woodTile126.addComponentOrReplace(gltfShape3)
const transform143 = new Transform({
  position: new Vector3(42.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile126.addComponentOrReplace(transform143)

const woodTile127 = new Entity('woodTile127')
engine.addEntity(woodTile127)
woodTile127.setParent(_scene)
woodTile127.addComponentOrReplace(gltfShape3)
const transform144 = new Transform({
  position: new Vector3(40.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile127.addComponentOrReplace(transform144)

const woodTile128 = new Entity('woodTile128')
engine.addEntity(woodTile128)
woodTile128.setParent(_scene)
woodTile128.addComponentOrReplace(gltfShape3)
const transform145 = new Transform({
  position: new Vector3(40.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile128.addComponentOrReplace(transform145)

const woodTile129 = new Entity('woodTile129')
engine.addEntity(woodTile129)
woodTile129.setParent(_scene)
woodTile129.addComponentOrReplace(gltfShape3)
const transform146 = new Transform({
  position: new Vector3(38.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile129.addComponentOrReplace(transform146)

const woodTile130 = new Entity('woodTile130')
engine.addEntity(woodTile130)
woodTile130.setParent(_scene)
woodTile130.addComponentOrReplace(gltfShape3)
const transform147 = new Transform({
  position: new Vector3(38.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile130.addComponentOrReplace(transform147)

const woodTile131 = new Entity('woodTile131')
engine.addEntity(woodTile131)
woodTile131.setParent(_scene)
woodTile131.addComponentOrReplace(gltfShape3)
const transform148 = new Transform({
  position: new Vector3(46.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile131.addComponentOrReplace(transform148)

const woodTile132 = new Entity('woodTile132')
engine.addEntity(woodTile132)
woodTile132.setParent(_scene)
woodTile132.addComponentOrReplace(gltfShape3)
const transform149 = new Transform({
  position: new Vector3(46.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile132.addComponentOrReplace(transform149)

const woodTile109 = new Entity('woodTile109')
engine.addEntity(woodTile109)
woodTile109.setParent(_scene)
woodTile109.addComponentOrReplace(gltfShape3)
const transform150 = new Transform({
  position: new Vector3(42.5, 0, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile109.addComponentOrReplace(transform150)

const woodTile110 = new Entity('woodTile110')
engine.addEntity(woodTile110)
woodTile110.setParent(_scene)
woodTile110.addComponentOrReplace(gltfShape3)
const transform151 = new Transform({
  position: new Vector3(42.5, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile110.addComponentOrReplace(transform151)

const woodTile133 = new Entity('woodTile133')
engine.addEntity(woodTile133)
woodTile133.setParent(_scene)
woodTile133.addComponentOrReplace(gltfShape3)
const transform152 = new Transform({
  position: new Vector3(44.5, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile133.addComponentOrReplace(transform152)

const woodTile134 = new Entity('woodTile134')
engine.addEntity(woodTile134)
woodTile134.setParent(_scene)
woodTile134.addComponentOrReplace(gltfShape3)
const transform153 = new Transform({
  position: new Vector3(44.5, 0, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile134.addComponentOrReplace(transform153)

const woodTile135 = new Entity('woodTile135')
engine.addEntity(woodTile135)
woodTile135.setParent(_scene)
woodTile135.addComponentOrReplace(gltfShape3)
const transform154 = new Transform({
  position: new Vector3(42.5, 0, 43),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile135.addComponentOrReplace(transform154)

const woodTile136 = new Entity('woodTile136')
engine.addEntity(woodTile136)
woodTile136.setParent(_scene)
woodTile136.addComponentOrReplace(gltfShape3)
const transform155 = new Transform({
  position: new Vector3(42.5, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile136.addComponentOrReplace(transform155)

const woodTile137 = new Entity('woodTile137')
engine.addEntity(woodTile137)
woodTile137.setParent(_scene)
woodTile137.addComponentOrReplace(gltfShape3)
const transform156 = new Transform({
  position: new Vector3(44.5, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile137.addComponentOrReplace(transform156)

const woodTile138 = new Entity('woodTile138')
engine.addEntity(woodTile138)
woodTile138.setParent(_scene)
woodTile138.addComponentOrReplace(gltfShape3)
const transform157 = new Transform({
  position: new Vector3(44.5, 0, 43),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile138.addComponentOrReplace(transform157)

const woodTile139 = new Entity('woodTile139')
engine.addEntity(woodTile139)
woodTile139.setParent(_scene)
woodTile139.addComponentOrReplace(gltfShape3)
const transform158 = new Transform({
  position: new Vector3(48.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile139.addComponentOrReplace(transform158)

const woodTile140 = new Entity('woodTile140')
engine.addEntity(woodTile140)
woodTile140.setParent(_scene)
woodTile140.addComponentOrReplace(gltfShape3)
const transform159 = new Transform({
  position: new Vector3(48.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile140.addComponentOrReplace(transform159)

const woodTile141 = new Entity('woodTile141')
engine.addEntity(woodTile141)
woodTile141.setParent(_scene)
woodTile141.addComponentOrReplace(gltfShape3)
const transform160 = new Transform({
  position: new Vector3(48.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile141.addComponentOrReplace(transform160)

const woodTile142 = new Entity('woodTile142')
engine.addEntity(woodTile142)
woodTile142.setParent(_scene)
woodTile142.addComponentOrReplace(gltfShape3)
const transform161 = new Transform({
  position: new Vector3(48.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile142.addComponentOrReplace(transform161)

const woodTile143 = new Entity('woodTile143')
engine.addEntity(woodTile143)
woodTile143.setParent(_scene)
woodTile143.addComponentOrReplace(gltfShape3)
const transform162 = new Transform({
  position: new Vector3(50.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile143.addComponentOrReplace(transform162)

const woodTile144 = new Entity('woodTile144')
engine.addEntity(woodTile144)
woodTile144.setParent(_scene)
woodTile144.addComponentOrReplace(gltfShape3)
const transform163 = new Transform({
  position: new Vector3(50.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile144.addComponentOrReplace(transform163)

const woodTile145 = new Entity('woodTile145')
engine.addEntity(woodTile145)
woodTile145.setParent(_scene)
woodTile145.addComponentOrReplace(gltfShape3)
const transform164 = new Transform({
  position: new Vector3(50.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile145.addComponentOrReplace(transform164)

const woodTile146 = new Entity('woodTile146')
engine.addEntity(woodTile146)
woodTile146.setParent(_scene)
woodTile146.addComponentOrReplace(gltfShape3)
const transform165 = new Transform({
  position: new Vector3(50.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile146.addComponentOrReplace(transform165)

const woodTile147 = new Entity('woodTile147')
engine.addEntity(woodTile147)
woodTile147.setParent(_scene)
woodTile147.addComponentOrReplace(gltfShape3)
const transform166 = new Transform({
  position: new Vector3(52.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile147.addComponentOrReplace(transform166)

const woodTile148 = new Entity('woodTile148')
engine.addEntity(woodTile148)
woodTile148.setParent(_scene)
woodTile148.addComponentOrReplace(gltfShape3)
const transform167 = new Transform({
  position: new Vector3(52.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile148.addComponentOrReplace(transform167)

const woodTile149 = new Entity('woodTile149')
engine.addEntity(woodTile149)
woodTile149.setParent(_scene)
woodTile149.addComponentOrReplace(gltfShape3)
const transform168 = new Transform({
  position: new Vector3(52.5, 0, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile149.addComponentOrReplace(transform168)

const woodTile150 = new Entity('woodTile150')
engine.addEntity(woodTile150)
woodTile150.setParent(_scene)
woodTile150.addComponentOrReplace(gltfShape3)
const transform169 = new Transform({
  position: new Vector3(52.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile150.addComponentOrReplace(transform169)

const woodTile151 = new Entity('woodTile151')
engine.addEntity(woodTile151)
woodTile151.setParent(_scene)
woodTile151.addComponentOrReplace(gltfShape3)
const transform170 = new Transform({
  position: new Vector3(42.5, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile151.addComponentOrReplace(transform170)

const woodTile152 = new Entity('woodTile152')
engine.addEntity(woodTile152)
woodTile152.setParent(_scene)
woodTile152.addComponentOrReplace(gltfShape3)
const transform171 = new Transform({
  position: new Vector3(52.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile152.addComponentOrReplace(transform171)

const woodTile153 = new Entity('woodTile153')
engine.addEntity(woodTile153)
woodTile153.setParent(_scene)
woodTile153.addComponentOrReplace(gltfShape3)
const transform172 = new Transform({
  position: new Vector3(50.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile153.addComponentOrReplace(transform172)

const woodTile154 = new Entity('woodTile154')
engine.addEntity(woodTile154)
woodTile154.setParent(_scene)
woodTile154.addComponentOrReplace(gltfShape3)
const transform173 = new Transform({
  position: new Vector3(50.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile154.addComponentOrReplace(transform173)

const woodTile155 = new Entity('woodTile155')
engine.addEntity(woodTile155)
woodTile155.setParent(_scene)
woodTile155.addComponentOrReplace(gltfShape3)
const transform174 = new Transform({
  position: new Vector3(52.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile155.addComponentOrReplace(transform174)

const woodTile156 = new Entity('woodTile156')
engine.addEntity(woodTile156)
woodTile156.setParent(_scene)
woodTile156.addComponentOrReplace(gltfShape3)
const transform175 = new Transform({
  position: new Vector3(50.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile156.addComponentOrReplace(transform175)

const woodTile157 = new Entity('woodTile157')
engine.addEntity(woodTile157)
woodTile157.setParent(_scene)
woodTile157.addComponentOrReplace(gltfShape3)
const transform176 = new Transform({
  position: new Vector3(52.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile157.addComponentOrReplace(transform176)

const woodTile158 = new Entity('woodTile158')
engine.addEntity(woodTile158)
woodTile158.setParent(_scene)
woodTile158.addComponentOrReplace(gltfShape3)
const transform177 = new Transform({
  position: new Vector3(52.5, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile158.addComponentOrReplace(transform177)

const woodTile159 = new Entity('woodTile159')
engine.addEntity(woodTile159)
woodTile159.setParent(_scene)
woodTile159.addComponentOrReplace(gltfShape3)
const transform178 = new Transform({
  position: new Vector3(50.5, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile159.addComponentOrReplace(transform178)

const woodTile160 = new Entity('woodTile160')
engine.addEntity(woodTile160)
woodTile160.setParent(_scene)
woodTile160.addComponentOrReplace(gltfShape3)
const transform179 = new Transform({
  position: new Vector3(50.5, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile160.addComponentOrReplace(transform179)

const woodTile161 = new Entity('woodTile161')
engine.addEntity(woodTile161)
woodTile161.setParent(_scene)
woodTile161.addComponentOrReplace(gltfShape3)
const transform180 = new Transform({
  position: new Vector3(52.5, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile161.addComponentOrReplace(transform180)

const woodTile162 = new Entity('woodTile162')
engine.addEntity(woodTile162)
woodTile162.setParent(_scene)
woodTile162.addComponentOrReplace(gltfShape3)
const transform181 = new Transform({
  position: new Vector3(52.5, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile162.addComponentOrReplace(transform181)

const woodTile163 = new Entity('woodTile163')
engine.addEntity(woodTile163)
woodTile163.setParent(_scene)
woodTile163.addComponentOrReplace(gltfShape3)
const transform182 = new Transform({
  position: new Vector3(50.5, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile163.addComponentOrReplace(transform182)

const stairsGlassPanel = new Entity('stairsGlassPanel')
engine.addEntity(stairsGlassPanel)
stairsGlassPanel.setParent(_scene)
const transform183 = new Transform({
  position: new Vector3(13.5, 0, 18.923131942749023),
  rotation: new Quaternion(4.28236945890551e-15, 0.9999951124191284, -1.1920869980031057e-7, -0.0031727170571684837),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
stairsGlassPanel.addComponentOrReplace(transform183)
const gltfShape4 = new GLTFShape("85cc1f65-ff9b-40fc-a383-91ad7acd8d31/glassPanelStairs.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
stairsGlassPanel.addComponentOrReplace(gltfShape4)

const pillarSimpleRound = new Entity('pillarSimpleRound')
engine.addEntity(pillarSimpleRound)
pillarSimpleRound.setParent(_scene)
const transform184 = new Transform({
  position: new Vector3(7, 0, 26.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillarSimpleRound.addComponentOrReplace(transform184)
const gltfShape5 = new GLTFShape("b587438c-9430-475f-98c5-3ce680627921/SimpleRoundPillar.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
pillarSimpleRound.addComponentOrReplace(gltfShape5)

const pillarSimpleRound2 = new Entity('pillarSimpleRound2')
engine.addEntity(pillarSimpleRound2)
pillarSimpleRound2.setParent(_scene)
pillarSimpleRound2.addComponentOrReplace(gltfShape5)
const transform185 = new Transform({
  position: new Vector3(16.875, 0, 26.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillarSimpleRound2.addComponentOrReplace(transform185)

const pillarSimpleRound3 = new Entity('pillarSimpleRound3')
engine.addEntity(pillarSimpleRound3)
pillarSimpleRound3.setParent(_scene)
pillarSimpleRound3.addComponentOrReplace(gltfShape5)
const transform186 = new Transform({
  position: new Vector3(7.25, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillarSimpleRound3.addComponentOrReplace(transform186)

const pillarSimpleRound5 = new Entity('pillarSimpleRound5')
engine.addEntity(pillarSimpleRound5)
pillarSimpleRound5.setParent(_scene)
pillarSimpleRound5.addComponentOrReplace(gltfShape5)
const transform187 = new Transform({
  position: new Vector3(7, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillarSimpleRound5.addComponentOrReplace(transform187)

const roofBeigeCorner = new Entity('roofBeigeCorner')
engine.addEntity(roofBeigeCorner)
roofBeigeCorner.setParent(_scene)
const transform188 = new Transform({
  position: new Vector3(9.66146469116211, 0, 26.989246368408203),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeigeCorner.addComponentOrReplace(transform188)
const gltfShape6 = new GLTFShape("22719fc0-de52-439e-bcda-ab630cb7fd21/BeigeRoof_Corner.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
roofBeigeCorner.addComponentOrReplace(gltfShape6)

const roofBeigeEdge = new Entity('roofBeigeEdge')
engine.addEntity(roofBeigeEdge)
roofBeigeEdge.setParent(_scene)
const transform189 = new Transform({
  position: new Vector3(13.638248443603516, 0, 23.018829345703125),
  rotation: new Quaternion(-2.4039284204604083e-15, 0.7044481039047241, -8.397675088644974e-8, 0.7097554802894592),
  scale: new Vector3(0.9999998211860657, 1, 0.9999998211860657)
})
roofBeigeEdge.addComponentOrReplace(transform189)
const gltfShape7 = new GLTFShape("b1d3b76e-9996-46ab-9618-5b325e3bcfbc/BeigeRoof_1Edge.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
roofBeigeEdge.addComponentOrReplace(gltfShape7)

const roofBeigeCorner2 = new Entity('roofBeigeCorner2')
engine.addEntity(roofBeigeCorner2)
roofBeigeCorner2.setParent(_scene)
roofBeigeCorner2.addComponentOrReplace(gltfShape6)
const transform190 = new Transform({
  position: new Vector3(17.6728458404541, 0, 23.07196807861328),
  rotation: new Quaternion(2.6047798375286634e-15, 0.7018389105796814, -8.36657036984434e-8, 0.7123357653617859),
  scale: new Vector3(1.0000008344650269, 1, 1.0000008344650269)
})
roofBeigeCorner2.addComponentOrReplace(transform190)

const roofBeigeEdge2 = new Entity('roofBeigeEdge2')
engine.addEntity(roofBeigeEdge2)
roofBeigeEdge2.setParent(_scene)
roofBeigeEdge2.addComponentOrReplace(gltfShape7)
const transform191 = new Transform({
  position: new Vector3(9.662616729736328, 0, 22.972299575805664),
  rotation: new Quaternion(-2.657910190903426e-15, 0.0038437056355178356, -4.582080825876744e-10, 0.9999926090240479),
  scale: new Vector3(1.0001839399337769, 1, 3.9998481273651123)
})
roofBeigeEdge2.addComponentOrReplace(transform191)

const roofBeigeEdge4 = new Entity('roofBeigeEdge4')
engine.addEntity(roofBeigeEdge4)
roofBeigeEdge4.setParent(_scene)
roofBeigeEdge4.addComponentOrReplace(gltfShape7)
const transform192 = new Transform({
  position: new Vector3(9.601245880126953, 0, 15.068181037902832),
  rotation: new Quaternion(-2.657910190903426e-15, 0.0038437056355178356, -4.582080825876744e-10, 0.9999926090240479),
  scale: new Vector3(1.0000041723251343, 1, 1.0000041723251343)
})
roofBeigeEdge4.addComponentOrReplace(transform192)

const woodTile164 = new Entity('woodTile164')
engine.addEntity(woodTile164)
woodTile164.setParent(_scene)
woodTile164.addComponentOrReplace(gltfShape3)
const transform193 = new Transform({
  position: new Vector3(52.5, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile164.addComponentOrReplace(transform193)

const woodTile165 = new Entity('woodTile165')
engine.addEntity(woodTile165)
woodTile165.setParent(_scene)
woodTile165.addComponentOrReplace(gltfShape3)
const transform194 = new Transform({
  position: new Vector3(50.5, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile165.addComponentOrReplace(transform194)

const woodTile166 = new Entity('woodTile166')
engine.addEntity(woodTile166)
woodTile166.setParent(_scene)
woodTile166.addComponentOrReplace(gltfShape3)
const transform195 = new Transform({
  position: new Vector3(50.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile166.addComponentOrReplace(transform195)

const woodTile167 = new Entity('woodTile167')
engine.addEntity(woodTile167)
woodTile167.setParent(_scene)
woodTile167.addComponentOrReplace(gltfShape3)
const transform196 = new Transform({
  position: new Vector3(52.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile167.addComponentOrReplace(transform196)

const woodTile168 = new Entity('woodTile168')
engine.addEntity(woodTile168)
woodTile168.setParent(_scene)
woodTile168.addComponentOrReplace(gltfShape3)
const transform197 = new Transform({
  position: new Vector3(50.5, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile168.addComponentOrReplace(transform197)

const woodTile169 = new Entity('woodTile169')
engine.addEntity(woodTile169)
woodTile169.setParent(_scene)
woodTile169.addComponentOrReplace(gltfShape3)
const transform198 = new Transform({
  position: new Vector3(52.5, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile169.addComponentOrReplace(transform198)

const woodTile170 = new Entity('woodTile170')
engine.addEntity(woodTile170)
woodTile170.setParent(_scene)
woodTile170.addComponentOrReplace(gltfShape3)
const transform199 = new Transform({
  position: new Vector3(50.5, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile170.addComponentOrReplace(transform199)

const woodTile171 = new Entity('woodTile171')
engine.addEntity(woodTile171)
woodTile171.setParent(_scene)
woodTile171.addComponentOrReplace(gltfShape3)
const transform200 = new Transform({
  position: new Vector3(52.5, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile171.addComponentOrReplace(transform200)

const roofBeigeCorner3 = new Entity('roofBeigeCorner3')
engine.addEntity(roofBeigeCorner3)
roofBeigeCorner3.setParent(_scene)
roofBeigeCorner3.addComponentOrReplace(gltfShape6)
const transform201 = new Transform({
  position: new Vector3(5.533376693725586, 0, 7.210653781890869),
  rotation: new Quaternion(-4.2883190183270244e-15, -0.7076634168624878, 8.436004605982816e-8, 0.7065497040748596),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
roofBeigeCorner3.addComponentOrReplace(transform201)

const roofBeigeEdge6 = new Entity('roofBeigeEdge6')
engine.addEntity(roofBeigeEdge6)
roofBeigeEdge6.setParent(_scene)
roofBeigeEdge6.addComponentOrReplace(gltfShape7)
const transform202 = new Transform({
  position: new Vector3(9.302858352661133, 0, 7.213225841522217),
  rotation: new Quaternion(7.510757186817655e-15, 0.7086510062217712, -8.447776167486154e-8, -0.705559253692627),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
roofBeigeEdge6.addComponentOrReplace(transform202)

const woodTile172 = new Entity('woodTile172')
engine.addEntity(woodTile172)
woodTile172.setParent(_scene)
woodTile172.addComponentOrReplace(gltfShape3)
const transform203 = new Transform({
  position: new Vector3(14.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile172.addComponentOrReplace(transform203)

const woodTile173 = new Entity('woodTile173')
engine.addEntity(woodTile173)
woodTile173.setParent(_scene)
woodTile173.addComponentOrReplace(gltfShape3)
const transform204 = new Transform({
  position: new Vector3(14.5, 0, 18),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile173.addComponentOrReplace(transform204)

const woodTile174 = new Entity('woodTile174')
engine.addEntity(woodTile174)
woodTile174.setParent(_scene)
woodTile174.addComponentOrReplace(gltfShape3)
const transform205 = new Transform({
  position: new Vector3(49.152366638183594, 0, 7.068056106567383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile174.addComponentOrReplace(transform205)

const woodTile175 = new Entity('woodTile175')
engine.addEntity(woodTile175)
woodTile175.setParent(_scene)
woodTile175.addComponentOrReplace(gltfShape3)
const transform206 = new Transform({
  position: new Vector3(47.152366638183594, 0, 7.068056106567383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile175.addComponentOrReplace(transform206)

const woodTile176 = new Entity('woodTile176')
engine.addEntity(woodTile176)
woodTile176.setParent(_scene)
woodTile176.addComponentOrReplace(gltfShape3)
const transform207 = new Transform({
  position: new Vector3(47.152366638183594, 0, 5.068056106567383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile176.addComponentOrReplace(transform207)

const woodTile177 = new Entity('woodTile177')
engine.addEntity(woodTile177)
woodTile177.setParent(_scene)
woodTile177.addComponentOrReplace(gltfShape3)
const transform208 = new Transform({
  position: new Vector3(49.152366638183594, 0, 5.068056106567383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile177.addComponentOrReplace(transform208)

const verticalBluePad = new Entity('verticalBluePad')
engine.addEntity(verticalBluePad)
verticalBluePad.setParent(_scene)
const transform209 = new Transform({
  position: new Vector3(70, 0, 42),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.4916296005249023, 2.4916296005249023, 2.4916296005249023)
})
verticalBluePad.addComponentOrReplace(transform209)

const sandTile = new Entity('sandTile')
engine.addEntity(sandTile)
sandTile.setParent(_scene)
const transform210 = new Transform({
  position: new Vector3(16.607378005981445, 4.16016960144043, 25.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile.addComponentOrReplace(transform210)
const gltfShape8 = new GLTFShape("1874152b-dd3d-4890-960a-4e7719346326/FloorBlock_02/FloorBlock_02.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
sandTile.addComponentOrReplace(gltfShape8)

const sandTile2 = new Entity('sandTile2')
engine.addEntity(sandTile2)
sandTile2.setParent(_scene)
sandTile2.addComponentOrReplace(gltfShape8)
const transform211 = new Transform({
  position: new Vector3(16.607378005981445, 4.16016960144043, 23.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile2.addComponentOrReplace(transform211)

const sandTile3 = new Entity('sandTile3')
engine.addEntity(sandTile3)
sandTile3.setParent(_scene)
sandTile3.addComponentOrReplace(gltfShape8)
const transform212 = new Transform({
  position: new Vector3(14.607378005981445, 4.16016960144043, 23.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile3.addComponentOrReplace(transform212)

const sandTile4 = new Entity('sandTile4')
engine.addEntity(sandTile4)
sandTile4.setParent(_scene)
sandTile4.addComponentOrReplace(gltfShape8)
const transform213 = new Transform({
  position: new Vector3(14.607378005981445, 4.16016960144043, 25.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile4.addComponentOrReplace(transform213)

const sandTile5 = new Entity('sandTile5')
engine.addEntity(sandTile5)
sandTile5.setParent(_scene)
sandTile5.addComponentOrReplace(gltfShape8)
const transform214 = new Transform({
  position: new Vector3(12.607378005981445, 4.16016960144043, 23.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile5.addComponentOrReplace(transform214)

const sandTile6 = new Entity('sandTile6')
engine.addEntity(sandTile6)
sandTile6.setParent(_scene)
sandTile6.addComponentOrReplace(gltfShape8)
const transform215 = new Transform({
  position: new Vector3(12.607378005981445, 4.16016960144043, 25.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile6.addComponentOrReplace(transform215)

const sandTile7 = new Entity('sandTile7')
engine.addEntity(sandTile7)
sandTile7.setParent(_scene)
sandTile7.addComponentOrReplace(gltfShape8)
const transform216 = new Transform({
  position: new Vector3(10.607378005981445, 4.16016960144043, 25.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile7.addComponentOrReplace(transform216)

const sandTile8 = new Entity('sandTile8')
engine.addEntity(sandTile8)
sandTile8.setParent(_scene)
sandTile8.addComponentOrReplace(gltfShape8)
const transform217 = new Transform({
  position: new Vector3(10.607378005981445, 4.16016960144043, 23.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile8.addComponentOrReplace(transform217)

const sandTile9 = new Entity('sandTile9')
engine.addEntity(sandTile9)
sandTile9.setParent(_scene)
sandTile9.addComponentOrReplace(gltfShape8)
const transform218 = new Transform({
  position: new Vector3(8.607378005981445, 4.16016960144043, 25.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile9.addComponentOrReplace(transform218)

const sandTile10 = new Entity('sandTile10')
engine.addEntity(sandTile10)
sandTile10.setParent(_scene)
sandTile10.addComponentOrReplace(gltfShape8)
const transform219 = new Transform({
  position: new Vector3(8.607378005981445, 4.16016960144043, 23.9708194732666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile10.addComponentOrReplace(transform219)

const sandTile11 = new Entity('sandTile11')
engine.addEntity(sandTile11)
sandTile11.setParent(_scene)
sandTile11.addComponentOrReplace(gltfShape8)
const transform220 = new Transform({
  position: new Vector3(6.68123722076416, 4.16016960144043, 25.958681106567383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile11.addComponentOrReplace(transform220)

const sandTile12 = new Entity('sandTile12')
engine.addEntity(sandTile12)
sandTile12.setParent(_scene)
sandTile12.addComponentOrReplace(gltfShape8)
const transform221 = new Transform({
  position: new Vector3(6.68123722076416, 4.16016960144043, 23.958681106567383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile12.addComponentOrReplace(transform221)

const sandTile13 = new Entity('sandTile13')
engine.addEntity(sandTile13)
sandTile13.setParent(_scene)
sandTile13.addComponentOrReplace(gltfShape8)
const transform222 = new Transform({
  position: new Vector3(8.640557289123535, 4.16016960144043, 20.073104858398438),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile13.addComponentOrReplace(transform222)

const sandTile14 = new Entity('sandTile14')
engine.addEntity(sandTile14)
sandTile14.setParent(_scene)
sandTile14.addComponentOrReplace(gltfShape8)
const transform223 = new Transform({
  position: new Vector3(8.617644309997559, 4.16016960144043, 22.020341873168945),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile14.addComponentOrReplace(transform223)

const sandTile15 = new Entity('sandTile15')
engine.addEntity(sandTile15)
sandTile15.setParent(_scene)
sandTile15.addComponentOrReplace(gltfShape8)
const transform224 = new Transform({
  position: new Vector3(6.714416980743408, 4.16016960144043, 20.06096649169922),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile15.addComponentOrReplace(transform224)

const sandTile16 = new Entity('sandTile16')
engine.addEntity(sandTile16)
sandTile16.setParent(_scene)
sandTile16.addComponentOrReplace(gltfShape8)
const transform225 = new Transform({
  position: new Vector3(6.691504001617432, 4.16016960144043, 22.008203506469727),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile16.addComponentOrReplace(transform225)

const sandTile17 = new Entity('sandTile17')
engine.addEntity(sandTile17)
sandTile17.setParent(_scene)
sandTile17.addComponentOrReplace(gltfShape8)
const transform226 = new Transform({
  position: new Vector3(8.601009368896484, 4.16016960144043, 12.186963081359863),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile17.addComponentOrReplace(transform226)

const sandTile18 = new Entity('sandTile18')
engine.addEntity(sandTile18)
sandTile18.setParent(_scene)
sandTile18.addComponentOrReplace(gltfShape8)
const transform227 = new Transform({
  position: new Vector3(8.601009368896484, 4.16016960144043, 14.186963081359863),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile18.addComponentOrReplace(transform227)

const sandTile19 = new Entity('sandTile19')
engine.addEntity(sandTile19)
sandTile19.setParent(_scene)
sandTile19.addComponentOrReplace(gltfShape8)
const transform228 = new Transform({
  position: new Vector3(6.674868583679199, 4.16016960144043, 12.174824714660645),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile19.addComponentOrReplace(transform228)

const sandTile20 = new Entity('sandTile20')
engine.addEntity(sandTile20)
sandTile20.setParent(_scene)
sandTile20.addComponentOrReplace(gltfShape8)
const transform229 = new Transform({
  position: new Vector3(6.674868583679199, 4.16016960144043, 14.174824714660645),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile20.addComponentOrReplace(transform229)

const sandTile21 = new Entity('sandTile21')
engine.addEntity(sandTile21)
sandTile21.setParent(_scene)
sandTile21.addComponentOrReplace(gltfShape8)
const transform230 = new Transform({
  position: new Vector3(8.616878509521484, 4.16016960144043, 16.15873146057129),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile21.addComponentOrReplace(transform230)

const sandTile22 = new Entity('sandTile22')
engine.addEntity(sandTile22)
sandTile22.setParent(_scene)
sandTile22.addComponentOrReplace(gltfShape8)
const transform231 = new Transform({
  position: new Vector3(8.641010284423828, 4.16016960144043, 18.15314292907715),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile22.addComponentOrReplace(transform231)

const sandTile23 = new Entity('sandTile23')
engine.addEntity(sandTile23)
sandTile23.setParent(_scene)
sandTile23.addComponentOrReplace(gltfShape8)
const transform232 = new Transform({
  position: new Vector3(6.714869499206543, 4.16016960144043, 18.14100456237793),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile23.addComponentOrReplace(transform232)

const sandTile24 = new Entity('sandTile24')
engine.addEntity(sandTile24)
sandTile24.setParent(_scene)
sandTile24.addComponentOrReplace(gltfShape8)
const transform233 = new Transform({
  position: new Vector3(6.690737724304199, 4.16016960144043, 16.14659309387207),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile24.addComponentOrReplace(transform233)

const sandTile25 = new Entity('sandTile25')
engine.addEntity(sandTile25)
sandTile25.setParent(_scene)
sandTile25.addComponentOrReplace(gltfShape8)
const transform234 = new Transform({
  position: new Vector3(8.627453804016113, 4.16016960144043, 8.21133804321289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile25.addComponentOrReplace(transform234)

const sandTile26 = new Entity('sandTile26')
engine.addEntity(sandTile26)
sandTile26.setParent(_scene)
sandTile26.addComponentOrReplace(gltfShape8)
const transform235 = new Transform({
  position: new Vector3(8.627453804016113, 4.16016960144043, 10.21133804321289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile26.addComponentOrReplace(transform235)

const sandTile27 = new Entity('sandTile27')
engine.addEntity(sandTile27)
sandTile27.setParent(_scene)
sandTile27.addComponentOrReplace(gltfShape8)
const transform236 = new Transform({
  position: new Vector3(6.701313018798828, 4.16016960144043, 10.199199676513672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile27.addComponentOrReplace(transform236)

const sandTile28 = new Entity('sandTile28')
engine.addEntity(sandTile28)
sandTile28.setParent(_scene)
sandTile28.addComponentOrReplace(gltfShape8)
const transform237 = new Transform({
  position: new Vector3(6.701313018798828, 4.16016960144043, 8.199199676513672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile28.addComponentOrReplace(transform237)

const sandTile29 = new Entity('sandTile29')
engine.addEntity(sandTile29)
sandTile29.setParent(_scene)
sandTile29.addComponentOrReplace(gltfShape8)
const transform238 = new Transform({
  position: new Vector3(8.595660209655762, 4.16016960144043, 4.2568359375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile29.addComponentOrReplace(transform238)

const sandTile30 = new Entity('sandTile30')
engine.addEntity(sandTile30)
sandTile30.setParent(_scene)
sandTile30.addComponentOrReplace(gltfShape8)
const transform239 = new Transform({
  position: new Vector3(8.595660209655762, 4.16016960144043, 6.2568359375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile30.addComponentOrReplace(transform239)

const sandTile31 = new Entity('sandTile31')
engine.addEntity(sandTile31)
sandTile31.setParent(_scene)
sandTile31.addComponentOrReplace(gltfShape8)
const transform240 = new Transform({
  position: new Vector3(6.669519424438477, 4.16016960144043, 6.244697570800781),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile31.addComponentOrReplace(transform240)

const sandTile32 = new Entity('sandTile32')
engine.addEntity(sandTile32)
sandTile32.setParent(_scene)
sandTile32.addComponentOrReplace(gltfShape8)
const transform241 = new Transform({
  position: new Vector3(6.669519424438477, 4.16016960144043, 4.244697570800781),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile32.addComponentOrReplace(transform241)

const sandTile33 = new Entity('sandTile33')
engine.addEntity(sandTile33)
sandTile33.setParent(_scene)
sandTile33.addComponentOrReplace(gltfShape8)
const transform242 = new Transform({
  position: new Vector3(12.488201141357422, 4.16016960144043, 6.286691665649414),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile33.addComponentOrReplace(transform242)

const sandTile34 = new Entity('sandTile34')
engine.addEntity(sandTile34)
sandTile34.setParent(_scene)
sandTile34.addComponentOrReplace(gltfShape8)
const transform243 = new Transform({
  position: new Vector3(12.488201141357422, 4.16016960144043, 4.286691665649414),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile34.addComponentOrReplace(transform243)

const sandTile35 = new Entity('sandTile35')
engine.addEntity(sandTile35)
sandTile35.setParent(_scene)
sandTile35.addComponentOrReplace(gltfShape8)
const transform244 = new Transform({
  position: new Vector3(10.562061309814453, 4.16016960144043, 6.274553298950195),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile35.addComponentOrReplace(transform244)

const sandTile36 = new Entity('sandTile36')
engine.addEntity(sandTile36)
sandTile36.setParent(_scene)
sandTile36.addComponentOrReplace(gltfShape8)
const transform245 = new Transform({
  position: new Vector3(10.562061309814453, 4.16016960144043, 4.274553298950195),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile36.addComponentOrReplace(transform245)

const signpostDirections = new Entity('signpostDirections')
engine.addEntity(signpostDirections)
signpostDirections.setParent(_scene)
const transform246 = new Transform({
  position: new Vector3(41.057830810546875, 0, 5.82883882522583),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
signpostDirections.addComponentOrReplace(transform246)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform247 = new Transform({
  position: new Vector3(11.248296737670898, 5.5, 27.087106704711914),
  rotation: new Quaternion(2.250733745158464e-14, -0.999999463558197, 1.1920921139108032e-7, 0.0010313764214515686),
  scale: new Vector3(1.9999998807907104, 1, 0.9999999403953552)
})
imageFromURL.addComponentOrReplace(transform247)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform248 = new Transform({
  position: new Vector3(7.500003337860107, 5.5, 27.003093719482422),
  rotation: new Quaternion(2.250733745158464e-14, -0.999999463558197, 1.1920921139108032e-7, 0.0010313764214515686),
  scale: new Vector3(1.9999998807907104, 1, 0.9999999403953552)
})
imageFromURL2.addComponentOrReplace(transform248)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform249 = new Transform({
  position: new Vector3(15.059341430664062, 5.5, 27),
  rotation: new Quaternion(2.250733745158464e-14, -0.999999463558197, 1.1920921139108032e-7, 0.0010313764214515686),
  scale: new Vector3(1.9999995231628418, 1, 0.9999997615814209)
})
imageFromURL3.addComponentOrReplace(transform249)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform250 = new Transform({
  position: new Vector3(5.95681619644165, 5.5, 19.62544059753418),
  rotation: new Quaternion(1.6091874333696785e-14, -0.7156911492347717, 8.53170334380593e-8, -0.6984170079231262),
  scale: new Vector3(2.0000014305114746, 1, 1.0000007152557373)
})
imageFromURL4.addComponentOrReplace(transform250)

const imageFromURL5 = new Entity('imageFromURL5')
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
const transform251 = new Transform({
  position: new Vector3(5.824572563171387, 5.499999523162842, 15.250534057617188),
  rotation: new Quaternion(1.6091874333696785e-14, -0.7156911492347717, 8.53170334380593e-8, -0.6984170079231262),
  scale: new Vector3(2.000005006790161, 1, 1.0000025033950806)
})
imageFromURL5.addComponentOrReplace(transform251)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform252 = new Transform({
  position: new Vector3(6.04318380355835, 5.500000476837158, 23.624513626098633),
  rotation: new Quaternion(1.6091874333696785e-14, -0.7156911492347717, 8.53170334380593e-8, -0.6984170079231262),
  scale: new Vector3(2.0000016689300537, 1, 1.0000008344650269)
})
imageFromURL6.addComponentOrReplace(transform252)

const imageFromURL8 = new Entity('imageFromURL8')
engine.addEntity(imageFromURL8)
imageFromURL8.setParent(_scene)
const transform253 = new Transform({
  position: new Vector3(5.957768440246582, 5.5, 6.375486373901367),
  rotation: new Quaternion(1.6091874333696785e-14, -0.7156911492347717, 8.53170334380593e-8, -0.6984170079231262),
  scale: new Vector3(2.000002861022949, 1, 1.0000014305114746)
})
imageFromURL8.addComponentOrReplace(transform253)

const imageFromURL9 = new Entity('imageFromURL9')
engine.addEntity(imageFromURL9)
imageFromURL9.setParent(_scene)
const transform254 = new Transform({
  position: new Vector3(5.957768440246582, 5.500000476837158, 10.875486373901367),
  rotation: new Quaternion(1.6091874333696785e-14, -0.7156911492347717, 8.53170334380593e-8, -0.6984170079231262),
  scale: new Vector3(2.0000030994415283, 1, 1.0000015497207642)
})
imageFromURL9.addComponentOrReplace(transform254)

const roundGalleryLight = new Entity('roundGalleryLight')
engine.addEntity(roundGalleryLight)
roundGalleryLight.setParent(_scene)
const transform255 = new Transform({
  position: new Vector3(14.940657615661621, 7, 27),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
roundGalleryLight.addComponentOrReplace(transform255)

const roundGalleryLight2 = new Entity('roundGalleryLight2')
engine.addEntity(roundGalleryLight2)
roundGalleryLight2.setParent(_scene)
const transform256 = new Transform({
  position: new Vector3(11.019814491271973, 7, 27.090200424194336),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
roundGalleryLight2.addComponentOrReplace(transform256)

const roundGalleryLight3 = new Entity('roundGalleryLight3')
engine.addEntity(roundGalleryLight3)
roundGalleryLight3.setParent(_scene)
const transform257 = new Transform({
  position: new Vector3(7.271514892578125, 7, 27),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
roundGalleryLight3.addComponentOrReplace(transform257)

const roofBeigeEdge7 = new Entity('roofBeigeEdge7')
engine.addEntity(roofBeigeEdge7)
roofBeigeEdge7.setParent(_scene)
roofBeigeEdge7.addComponentOrReplace(gltfShape7)
const transform258 = new Transform({
  position: new Vector3(13.219563484191895, 0, 7.221412658691406),
  rotation: new Quaternion(7.510757186817655e-15, 0.7086510062217712, -8.447776167486154e-8, -0.705559253692627),
  scale: new Vector3(1.0000211000442505, 1, 1.999985694885254)
})
roofBeigeEdge7.addComponentOrReplace(transform258)

const glossyAethereaTiles = new Entity('glossyAethereaTiles')
engine.addEntity(glossyAethereaTiles)
glossyAethereaTiles.setParent(_scene)
const gltfShape9 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
glossyAethereaTiles.addComponentOrReplace(gltfShape9)
const transform259 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles.addComponentOrReplace(transform259)

const glossyAethereaTiles2 = new Entity('glossyAethereaTiles2')
engine.addEntity(glossyAethereaTiles2)
glossyAethereaTiles2.setParent(_scene)
glossyAethereaTiles2.addComponentOrReplace(gltfShape9)
const transform260 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles2.addComponentOrReplace(transform260)

const glossyAethereaTiles3 = new Entity('glossyAethereaTiles3')
engine.addEntity(glossyAethereaTiles3)
glossyAethereaTiles3.setParent(_scene)
glossyAethereaTiles3.addComponentOrReplace(gltfShape9)
const transform261 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles3.addComponentOrReplace(transform261)

const glossyAethereaTiles4 = new Entity('glossyAethereaTiles4')
engine.addEntity(glossyAethereaTiles4)
glossyAethereaTiles4.setParent(_scene)
glossyAethereaTiles4.addComponentOrReplace(gltfShape9)
const transform262 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles4.addComponentOrReplace(transform262)

const glossyAethereaTiles5 = new Entity('glossyAethereaTiles5')
engine.addEntity(glossyAethereaTiles5)
glossyAethereaTiles5.setParent(_scene)
glossyAethereaTiles5.addComponentOrReplace(gltfShape9)
const transform263 = new Transform({
  position: new Vector3(72, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles5.addComponentOrReplace(transform263)

const glossyAethereaTiles6 = new Entity('glossyAethereaTiles6')
engine.addEntity(glossyAethereaTiles6)
glossyAethereaTiles6.setParent(_scene)
glossyAethereaTiles6.addComponentOrReplace(gltfShape9)
const transform264 = new Transform({
  position: new Vector3(88, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles6.addComponentOrReplace(transform264)

const glossyAethereaTiles7 = new Entity('glossyAethereaTiles7')
engine.addEntity(glossyAethereaTiles7)
glossyAethereaTiles7.setParent(_scene)
glossyAethereaTiles7.addComponentOrReplace(gltfShape9)
const transform265 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles7.addComponentOrReplace(transform265)

const glossyAethereaTiles8 = new Entity('glossyAethereaTiles8')
engine.addEntity(glossyAethereaTiles8)
glossyAethereaTiles8.setParent(_scene)
glossyAethereaTiles8.addComponentOrReplace(gltfShape9)
const transform266 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles8.addComponentOrReplace(transform266)

const glossyAethereaTiles9 = new Entity('glossyAethereaTiles9')
engine.addEntity(glossyAethereaTiles9)
glossyAethereaTiles9.setParent(_scene)
glossyAethereaTiles9.addComponentOrReplace(gltfShape9)
const transform267 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles9.addComponentOrReplace(transform267)

const glossyAethereaTiles10 = new Entity('glossyAethereaTiles10')
engine.addEntity(glossyAethereaTiles10)
glossyAethereaTiles10.setParent(_scene)
glossyAethereaTiles10.addComponentOrReplace(gltfShape9)
const transform268 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles10.addComponentOrReplace(transform268)

const glossyAethereaTiles11 = new Entity('glossyAethereaTiles11')
engine.addEntity(glossyAethereaTiles11)
glossyAethereaTiles11.setParent(_scene)
glossyAethereaTiles11.addComponentOrReplace(gltfShape9)
const transform269 = new Transform({
  position: new Vector3(72, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles11.addComponentOrReplace(transform269)

const glossyAethereaTiles12 = new Entity('glossyAethereaTiles12')
engine.addEntity(glossyAethereaTiles12)
glossyAethereaTiles12.setParent(_scene)
glossyAethereaTiles12.addComponentOrReplace(gltfShape9)
const transform270 = new Transform({
  position: new Vector3(88, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles12.addComponentOrReplace(transform270)

const glossyAethereaTiles13 = new Entity('glossyAethereaTiles13')
engine.addEntity(glossyAethereaTiles13)
glossyAethereaTiles13.setParent(_scene)
glossyAethereaTiles13.addComponentOrReplace(gltfShape9)
const transform271 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles13.addComponentOrReplace(transform271)

const glossyAethereaTiles14 = new Entity('glossyAethereaTiles14')
engine.addEntity(glossyAethereaTiles14)
glossyAethereaTiles14.setParent(_scene)
glossyAethereaTiles14.addComponentOrReplace(gltfShape9)
const transform272 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles14.addComponentOrReplace(transform272)

const glossyAethereaTiles15 = new Entity('glossyAethereaTiles15')
engine.addEntity(glossyAethereaTiles15)
glossyAethereaTiles15.setParent(_scene)
glossyAethereaTiles15.addComponentOrReplace(gltfShape9)
const transform273 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles15.addComponentOrReplace(transform273)

const glossyAethereaTiles16 = new Entity('glossyAethereaTiles16')
engine.addEntity(glossyAethereaTiles16)
glossyAethereaTiles16.setParent(_scene)
glossyAethereaTiles16.addComponentOrReplace(gltfShape9)
const transform274 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles16.addComponentOrReplace(transform274)

const glossyAethereaTiles17 = new Entity('glossyAethereaTiles17')
engine.addEntity(glossyAethereaTiles17)
glossyAethereaTiles17.setParent(_scene)
glossyAethereaTiles17.addComponentOrReplace(gltfShape9)
const transform275 = new Transform({
  position: new Vector3(72, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles17.addComponentOrReplace(transform275)

const glossyAethereaTiles18 = new Entity('glossyAethereaTiles18')
engine.addEntity(glossyAethereaTiles18)
glossyAethereaTiles18.setParent(_scene)
glossyAethereaTiles18.addComponentOrReplace(gltfShape9)
const transform276 = new Transform({
  position: new Vector3(88, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles18.addComponentOrReplace(transform276)

const glossyAethereaTiles19 = new Entity('glossyAethereaTiles19')
engine.addEntity(glossyAethereaTiles19)
glossyAethereaTiles19.setParent(_scene)
glossyAethereaTiles19.addComponentOrReplace(gltfShape9)
const transform277 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles19.addComponentOrReplace(transform277)

const glossyAethereaTiles20 = new Entity('glossyAethereaTiles20')
engine.addEntity(glossyAethereaTiles20)
glossyAethereaTiles20.setParent(_scene)
glossyAethereaTiles20.addComponentOrReplace(gltfShape9)
const transform278 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles20.addComponentOrReplace(transform278)

const glossyAethereaTiles21 = new Entity('glossyAethereaTiles21')
engine.addEntity(glossyAethereaTiles21)
glossyAethereaTiles21.setParent(_scene)
glossyAethereaTiles21.addComponentOrReplace(gltfShape9)
const transform279 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles21.addComponentOrReplace(transform279)

const glossyAethereaTiles22 = new Entity('glossyAethereaTiles22')
engine.addEntity(glossyAethereaTiles22)
glossyAethereaTiles22.setParent(_scene)
glossyAethereaTiles22.addComponentOrReplace(gltfShape9)
const transform280 = new Transform({
  position: new Vector3(56, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles22.addComponentOrReplace(transform280)

const glossyAethereaTiles23 = new Entity('glossyAethereaTiles23')
engine.addEntity(glossyAethereaTiles23)
glossyAethereaTiles23.setParent(_scene)
glossyAethereaTiles23.addComponentOrReplace(gltfShape9)
const transform281 = new Transform({
  position: new Vector3(72, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles23.addComponentOrReplace(transform281)

const glossyAethereaTiles24 = new Entity('glossyAethereaTiles24')
engine.addEntity(glossyAethereaTiles24)
glossyAethereaTiles24.setParent(_scene)
glossyAethereaTiles24.addComponentOrReplace(gltfShape9)
const transform282 = new Transform({
  position: new Vector3(88, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles24.addComponentOrReplace(transform282)

const glossyAethereaTiles25 = new Entity('glossyAethereaTiles25')
engine.addEntity(glossyAethereaTiles25)
glossyAethereaTiles25.setParent(_scene)
glossyAethereaTiles25.addComponentOrReplace(gltfShape9)
const transform283 = new Transform({
  position: new Vector3(8, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles25.addComponentOrReplace(transform283)

const glossyAethereaTiles26 = new Entity('glossyAethereaTiles26')
engine.addEntity(glossyAethereaTiles26)
glossyAethereaTiles26.setParent(_scene)
glossyAethereaTiles26.addComponentOrReplace(gltfShape9)
const transform284 = new Transform({
  position: new Vector3(24, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles26.addComponentOrReplace(transform284)

const glossyAethereaTiles27 = new Entity('glossyAethereaTiles27')
engine.addEntity(glossyAethereaTiles27)
glossyAethereaTiles27.setParent(_scene)
glossyAethereaTiles27.addComponentOrReplace(gltfShape9)
const transform285 = new Transform({
  position: new Vector3(40, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles27.addComponentOrReplace(transform285)

const glossyAethereaTiles28 = new Entity('glossyAethereaTiles28')
engine.addEntity(glossyAethereaTiles28)
glossyAethereaTiles28.setParent(_scene)
glossyAethereaTiles28.addComponentOrReplace(gltfShape9)
const transform286 = new Transform({
  position: new Vector3(56, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles28.addComponentOrReplace(transform286)

const glossyAethereaTiles29 = new Entity('glossyAethereaTiles29')
engine.addEntity(glossyAethereaTiles29)
glossyAethereaTiles29.setParent(_scene)
glossyAethereaTiles29.addComponentOrReplace(gltfShape9)
const transform287 = new Transform({
  position: new Vector3(72, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles29.addComponentOrReplace(transform287)

const glossyAethereaTiles30 = new Entity('glossyAethereaTiles30')
engine.addEntity(glossyAethereaTiles30)
glossyAethereaTiles30.setParent(_scene)
glossyAethereaTiles30.addComponentOrReplace(gltfShape9)
const transform288 = new Transform({
  position: new Vector3(88, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles30.addComponentOrReplace(transform288)

const roundGalleryLight4 = new Entity('roundGalleryLight4')
engine.addEntity(roundGalleryLight4)
roundGalleryLight4.setParent(_scene)
const transform289 = new Transform({
  position: new Vector3(6, 7, 23.5),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
roundGalleryLight4.addComponentOrReplace(transform289)

const roundGalleryLight5 = new Entity('roundGalleryLight5')
engine.addEntity(roundGalleryLight5)
roundGalleryLight5.setParent(_scene)
const transform290 = new Transform({
  position: new Vector3(6.044447898864746, 7, 19.372745513916016),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
roundGalleryLight5.addComponentOrReplace(transform290)

const roundGalleryLight6 = new Entity('roundGalleryLight6')
engine.addEntity(roundGalleryLight6)
roundGalleryLight6.setParent(_scene)
const transform291 = new Transform({
  position: new Vector3(5.849236011505127, 7, 15.380334854125977),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
roundGalleryLight6.addComponentOrReplace(transform291)

const roundGalleryLight7 = new Entity('roundGalleryLight7')
engine.addEntity(roundGalleryLight7)
roundGalleryLight7.setParent(_scene)
const transform292 = new Transform({
  position: new Vector3(5.834300518035889, 7, 10.76944351196289),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
roundGalleryLight7.addComponentOrReplace(transform292)

const roundGalleryLight8 = new Entity('roundGalleryLight8')
engine.addEntity(roundGalleryLight8)
roundGalleryLight8.setParent(_scene)
const transform293 = new Transform({
  position: new Vector3(5.834300518035889, 7, 6.234284400939941),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
roundGalleryLight8.addComponentOrReplace(transform293)

const imageFromURL7 = new Entity('imageFromURL7')
engine.addEntity(imageFromURL7)
imageFromURL7.setParent(_scene)
const transform294 = new Transform({
  position: new Vector3(16, 5.5, 3.5),
  rotation: new Quaternion(6.789735213544009e-15, 0.012716884724795818, -1.5159419275434516e-9, -0.9999191761016846),
  scale: new Vector3(2.000000476837158, 1, 1.000000238418579)
})
imageFromURL7.addComponentOrReplace(transform294)

const roundGalleryLight9 = new Entity('roundGalleryLight9')
engine.addEntity(roundGalleryLight9)
roundGalleryLight9.setParent(_scene)
const transform295 = new Transform({
  position: new Vector3(16.133644104003906, 7, 3.6714582443237305),
  rotation: new Quaternion(8.025189174214737e-17, 0.01374817080795765, -1.6389093415725142e-9, -0.999905526638031),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
roundGalleryLight9.addComponentOrReplace(transform295)

const roundGalleryLight10 = new Entity('roundGalleryLight10')
engine.addEntity(roundGalleryLight10)
roundGalleryLight10.setParent(_scene)
const transform296 = new Transform({
  position: new Vector3(12.195626258850098, 7, 3.863145351409912),
  rotation: new Quaternion(8.025189174214737e-17, 0.01374817080795765, -1.6389093415725142e-9, -0.999905526638031),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
roundGalleryLight10.addComponentOrReplace(transform296)

const roundGalleryLight11 = new Entity('roundGalleryLight11')
engine.addEntity(roundGalleryLight11)
roundGalleryLight11.setParent(_scene)
const transform297 = new Transform({
  position: new Vector3(8.301756858825684, 7, 4.099617958068848),
  rotation: new Quaternion(8.025189174214737e-17, 0.01374817080795765, -1.6389093415725142e-9, -0.999905526638031),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
roundGalleryLight11.addComponentOrReplace(transform297)

const imageFromURL10 = new Entity('imageFromURL10')
engine.addEntity(imageFromURL10)
imageFromURL10.setParent(_scene)
const transform298 = new Transform({
  position: new Vector3(8, 5.5, 3.5),
  rotation: new Quaternion(6.789735213544009e-15, 0.012716884724795818, -1.5159419275434516e-9, -0.9999191761016846),
  scale: new Vector3(2.000000476837158, 1, 1.000000238418579)
})
imageFromURL10.addComponentOrReplace(transform298)

const sandTile37 = new Entity('sandTile37')
engine.addEntity(sandTile37)
sandTile37.setParent(_scene)
sandTile37.addComponentOrReplace(gltfShape8)
const transform299 = new Transform({
  position: new Vector3(16.406124114990234, 4.16016960144043, 4.304648399353027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile37.addComponentOrReplace(transform299)

const sandTile38 = new Entity('sandTile38')
engine.addEntity(sandTile38)
sandTile38.setParent(_scene)
sandTile38.addComponentOrReplace(gltfShape8)
const transform300 = new Transform({
  position: new Vector3(14.47998332977295, 4.16016960144043, 4.292510032653809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile38.addComponentOrReplace(transform300)

const sandTile39 = new Entity('sandTile39')
engine.addEntity(sandTile39)
sandTile39.setParent(_scene)
sandTile39.addComponentOrReplace(gltfShape8)
const transform301 = new Transform({
  position: new Vector3(14.47998332977295, 4.16016960144043, 6.292510032653809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile39.addComponentOrReplace(transform301)

const sandTile40 = new Entity('sandTile40')
engine.addEntity(sandTile40)
sandTile40.setParent(_scene)
sandTile40.addComponentOrReplace(gltfShape8)
const transform302 = new Transform({
  position: new Vector3(16.406124114990234, 4.16016960144043, 6.304648399353027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile40.addComponentOrReplace(transform302)

const sandTile41 = new Entity('sandTile41')
engine.addEntity(sandTile41)
sandTile41.setParent(_scene)
sandTile41.addComponentOrReplace(gltfShape8)
const transform303 = new Transform({
  position: new Vector3(18.346534729003906, 4.16016960144043, 4.323511123657227),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile41.addComponentOrReplace(transform303)

const sandTile42 = new Entity('sandTile42')
engine.addEntity(sandTile42)
sandTile42.setParent(_scene)
sandTile42.addComponentOrReplace(gltfShape8)
const transform304 = new Transform({
  position: new Vector3(18.346534729003906, 4.16016960144043, 6.323511123657227),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile42.addComponentOrReplace(transform304)

const sandTile43 = new Entity('sandTile43')
engine.addEntity(sandTile43)
sandTile43.setParent(_scene)
sandTile43.addComponentOrReplace(gltfShape8)
const transform305 = new Transform({
  position: new Vector3(20.272674560546875, 4.16016960144043, 6.335649490356445),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile43.addComponentOrReplace(transform305)

const sandTile44 = new Entity('sandTile44')
engine.addEntity(sandTile44)
sandTile44.setParent(_scene)
sandTile44.addComponentOrReplace(gltfShape8)
const transform306 = new Transform({
  position: new Vector3(20.272674560546875, 4.16016960144043, 4.335649490356445),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile44.addComponentOrReplace(transform306)

const roofBeigeEdge3 = new Entity('roofBeigeEdge3')
engine.addEntity(roofBeigeEdge3)
roofBeigeEdge3.setParent(_scene)
roofBeigeEdge3.addComponentOrReplace(gltfShape7)
const transform307 = new Transform({
  position: new Vector3(21.21942138671875, 0, 7.258882522583008),
  rotation: new Quaternion(7.510757186817655e-15, 0.7086510062217712, -8.447776167486154e-8, -0.705559253692627),
  scale: new Vector3(1.00001060962677, 1, 0.9484569430351257)
})
roofBeigeEdge3.addComponentOrReplace(transform307)

const stairsGlassPanel2 = new Entity('stairsGlassPanel2')
engine.addEntity(stairsGlassPanel2)
stairsGlassPanel2.setParent(_scene)
stairsGlassPanel2.addComponentOrReplace(gltfShape4)
const transform308 = new Transform({
  position: new Vector3(25, 4, 5.5),
  rotation: new Quaternion(-6.266029565333252e-15, 0.7232681512832642, -8.62202824691849e-8, -0.6905673742294312),
  scale: new Vector3(1.0000100135803223, 1, 1.0000100135803223)
})
stairsGlassPanel2.addComponentOrReplace(transform308)

const sandTile45 = new Entity('sandTile45')
engine.addEntity(sandTile45)
sandTile45.setParent(_scene)
sandTile45.addComponentOrReplace(gltfShape8)
const transform309 = new Transform({
  position: new Vector3(24.127609252929688, 4.16016960144043, 6.345663070678711),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile45.addComponentOrReplace(transform309)

const sandTile46 = new Entity('sandTile46')
engine.addEntity(sandTile46)
sandTile46.setParent(_scene)
sandTile46.addComponentOrReplace(gltfShape8)
const transform310 = new Transform({
  position: new Vector3(22.20146942138672, 4.16016960144043, 6.333524703979492),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile46.addComponentOrReplace(transform310)

const sandTile47 = new Entity('sandTile47')
engine.addEntity(sandTile47)
sandTile47.setParent(_scene)
sandTile47.addComponentOrReplace(gltfShape8)
const transform311 = new Transform({
  position: new Vector3(22.20146942138672, 4.16016960144043, 4.333524703979492),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile47.addComponentOrReplace(transform311)

const sandTile48 = new Entity('sandTile48')
engine.addEntity(sandTile48)
sandTile48.setParent(_scene)
sandTile48.addComponentOrReplace(gltfShape8)
const transform312 = new Transform({
  position: new Vector3(24.127609252929688, 4.16016960144043, 4.345663070678711),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile48.addComponentOrReplace(transform312)

const stairsGlassPanel3 = new Entity('stairsGlassPanel3')
engine.addEntity(stairsGlassPanel3)
stairsGlassPanel3.setParent(_scene)
stairsGlassPanel3.addComponentOrReplace(gltfShape4)
const transform313 = new Transform({
  position: new Vector3(40.5, 4, 3.1491923332214355),
  rotation: new Quaternion(-3.751338669766898e-15, -0.7233738899230957, 8.6232901708172e-8, -0.6904566287994385),
  scale: new Vector3(1.0000113248825073, 1, 1.0000113248825073)
})
stairsGlassPanel3.addComponentOrReplace(transform313)

const roofBeigeEdge5 = new Entity('roofBeigeEdge5')
engine.addEntity(roofBeigeEdge5)
roofBeigeEdge5.setParent(_scene)
roofBeigeEdge5.addComponentOrReplace(gltfShape7)
const transform314 = new Transform({
  position: new Vector3(29, 4.012827396392822, 7),
  rotation: new Quaternion(7.510757186817655e-15, 0.7086510062217712, -8.447776167486154e-8, -0.705559253692627),
  scale: new Vector3(1.0000109672546387, 1, 0.9484573006629944)
})
roofBeigeEdge5.addComponentOrReplace(transform314)

const roofBeigeEdge8 = new Entity('roofBeigeEdge8')
engine.addEntity(roofBeigeEdge8)
roofBeigeEdge8.setParent(_scene)
roofBeigeEdge8.addComponentOrReplace(gltfShape7)
const transform315 = new Transform({
  position: new Vector3(32.750328063964844, 4.012827396392822, 7.010700225830078),
  rotation: new Quaternion(7.510757186817655e-15, 0.7086510062217712, -8.447776167486154e-8, -0.705559253692627),
  scale: new Vector3(1.000011682510376, 1, 0.9484580159187317)
})
roofBeigeEdge8.addComponentOrReplace(transform315)

const imageFromURL12 = new Entity('imageFromURL12')
engine.addEntity(imageFromURL12)
imageFromURL12.setParent(_scene)
const transform316 = new Transform({
  position: new Vector3(19.933177947998047, 5.5, 3.4142708778381348),
  rotation: new Quaternion(6.789735213544009e-15, 0.012716884724795818, -1.5159419275434516e-9, -0.9999191761016846),
  scale: new Vector3(2.0000007152557373, 1, 1.0000003576278687)
})
imageFromURL12.addComponentOrReplace(transform316)

const roundGalleryLight12 = new Entity('roundGalleryLight12')
engine.addEntity(roundGalleryLight12)
roundGalleryLight12.setParent(_scene)
const transform317 = new Transform({
  position: new Vector3(20.066822052001953, 7, 3.5857291221618652),
  rotation: new Quaternion(8.025189174214737e-17, 0.01374817080795765, -1.6389093415725142e-9, -0.999905526638031),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
roundGalleryLight12.addComponentOrReplace(transform317)

const imageFromURL13 = new Entity('imageFromURL13')
engine.addEntity(imageFromURL13)
imageFromURL13.setParent(_scene)
const transform318 = new Transform({
  position: new Vector3(12, 5.5, 3.5),
  rotation: new Quaternion(6.789735213544009e-15, 0.012716884724795818, -1.5159419275434516e-9, -0.9999191761016846),
  scale: new Vector3(2.000000476837158, 1, 1.000000238418579)
})
imageFromURL13.addComponentOrReplace(transform318)

const imageFromURL11 = new Entity('imageFromURL11')
engine.addEntity(imageFromURL11)
imageFromURL11.setParent(_scene)
const transform319 = new Transform({
  position: new Vector3(32.93317794799805, 9.5, 2.9142704010009766),
  rotation: new Quaternion(6.789735213544009e-15, 0.012716884724795818, -1.5159419275434516e-9, -0.9999191761016846),
  scale: new Vector3(3.998713254928589, 2.25, 1.0006470680236816)
})
imageFromURL11.addComponentOrReplace(transform319)

const roundGalleryLight13 = new Entity('roundGalleryLight13')
engine.addEntity(roundGalleryLight13)
roundGalleryLight13.setParent(_scene)
const transform320 = new Transform({
  position: new Vector3(33.06682205200195, 12.5, 3.0857295989990234),
  rotation: new Quaternion(8.025189174214737e-17, 0.01374817080795765, -1.6389093415725142e-9, -0.999905526638031),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
roundGalleryLight13.addComponentOrReplace(transform320)

const imageFromURL14 = new Entity('imageFromURL14')
engine.addEntity(imageFromURL14)
imageFromURL14.setParent(_scene)
const transform321 = new Transform({
  position: new Vector3(32.93317794799805, 9.5, 2.8810107707977295),
  rotation: new Quaternion(2.3662332943735764e-14, -0.9999996423721313, 1.1920923270736239e-7, -0.0008183874888345599),
  scale: new Vector3(3.9987149238586426, 2.25, 1.0006473064422607)
})
imageFromURL14.addComponentOrReplace(transform321)

const roofBeigeEdge9 = new Entity('roofBeigeEdge9')
engine.addEntity(roofBeigeEdge9)
roofBeigeEdge9.setParent(_scene)
roofBeigeEdge9.addComponentOrReplace(gltfShape7)
const transform322 = new Transform({
  position: new Vector3(40.52525329589844, 0, 6.742011547088623),
  rotation: new Quaternion(7.510757186817655e-15, 0.7086510062217712, -8.447776167486154e-8, -0.705559253692627),
  scale: new Vector3(1.0000107288360596, 1, 0.9484570622444153)
})
roofBeigeEdge9.addComponentOrReplace(transform322)

const sandTile49 = new Entity('sandTile49')
engine.addEntity(sandTile49)
sandTile49.setParent(_scene)
sandTile49.addComponentOrReplace(gltfShape8)
const transform323 = new Transform({
  position: new Vector3(41.507301330566406, 4.16016960144043, 3.8166537284851074),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile49.addComponentOrReplace(transform323)

const sandTile51 = new Entity('sandTile51')
engine.addEntity(sandTile51)
sandTile51.setParent(_scene)
sandTile51.addComponentOrReplace(gltfShape8)
const transform324 = new Transform({
  position: new Vector3(43.433441162109375, 4.16016960144043, 5.828792095184326),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile51.addComponentOrReplace(transform324)

const sandTile53 = new Entity('sandTile53')
engine.addEntity(sandTile53)
sandTile53.setParent(_scene)
sandTile53.addComponentOrReplace(gltfShape8)
const transform325 = new Transform({
  position: new Vector3(41.507301330566406, 4.16016960144043, 5.816653728485107),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile53.addComponentOrReplace(transform325)

const sandTile55 = new Entity('sandTile55')
engine.addEntity(sandTile55)
sandTile55.setParent(_scene)
sandTile55.addComponentOrReplace(gltfShape8)
const transform326 = new Transform({
  position: new Vector3(43.433441162109375, 4.16016960144043, 3.828792095184326),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandTile55.addComponentOrReplace(transform326)

const sandTile56 = new Entity('sandTile56')
engine.addEntity(sandTile56)
sandTile56.setParent(_scene)
sandTile56.addComponentOrReplace(gltfShape8)
const transform327 = new Transform({
  position: new Vector3(35.55963134765625, 8.253853797912598, 3.9793128967285156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9278286099433899, 1, 1.018477439880371)
})
sandTile56.addComponentOrReplace(transform327)

const sandTile50 = new Entity('sandTile50')
engine.addEntity(sandTile50)
sandTile50.setParent(_scene)
sandTile50.addComponentOrReplace(gltfShape8)
const transform328 = new Transform({
  position: new Vector3(35.55963134765625, 8.253853797912598, 5.996129035949707),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9278286099433899, 1, 1.018477439880371)
})
sandTile50.addComponentOrReplace(transform328)

const sandTile52 = new Entity('sandTile52')
engine.addEntity(sandTile52)
sandTile52.setParent(_scene)
sandTile52.addComponentOrReplace(gltfShape8)
const transform329 = new Transform({
  position: new Vector3(33.69982147216797, 8.253853797912598, 5.996129035949707),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9278286099433899, 1, 1.018477439880371)
})
sandTile52.addComponentOrReplace(transform329)

const sandTile54 = new Entity('sandTile54')
engine.addEntity(sandTile54)
sandTile54.setParent(_scene)
sandTile54.addComponentOrReplace(gltfShape8)
const transform330 = new Transform({
  position: new Vector3(33.69982147216797, 8.253853797912598, 3.9793128967285156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9278286099433899, 1, 1.018477439880371)
})
sandTile54.addComponentOrReplace(transform330)

const sandTile57 = new Entity('sandTile57')
engine.addEntity(sandTile57)
sandTile57.setParent(_scene)
sandTile57.addComponentOrReplace(gltfShape8)
const transform331 = new Transform({
  position: new Vector3(31.862403869628906, 8.253853797912598, 5.996129035949707),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9278286099433899, 1, 1.018477439880371)
})
sandTile57.addComponentOrReplace(transform331)

const sandTile58 = new Entity('sandTile58')
engine.addEntity(sandTile58)
sandTile58.setParent(_scene)
sandTile58.addComponentOrReplace(gltfShape8)
const transform332 = new Transform({
  position: new Vector3(31.862403869628906, 8.253853797912598, 3.9793128967285156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9278286099433899, 1, 1.018477439880371)
})
sandTile58.addComponentOrReplace(transform332)

const sandTile59 = new Entity('sandTile59')
engine.addEntity(sandTile59)
sandTile59.setParent(_scene)
sandTile59.addComponentOrReplace(gltfShape8)
const transform333 = new Transform({
  position: new Vector3(30.033363342285156, 8.253853797912598, 5.982881546020508),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9278286099433899, 1, 1.018477439880371)
})
sandTile59.addComponentOrReplace(transform333)

const sandTile60 = new Entity('sandTile60')
engine.addEntity(sandTile60)
sandTile60.setParent(_scene)
sandTile60.addComponentOrReplace(gltfShape8)
const transform334 = new Transform({
  position: new Vector3(30.033363342285156, 8.253853797912598, 3.9660656452178955),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9278286099433899, 1, 1.018477439880371)
})
sandTile60.addComponentOrReplace(transform334)

const wallcornerPlants = new Entity('wallcornerPlants')
engine.addEntity(wallcornerPlants)
wallcornerPlants.setParent(_scene)
const transform335 = new Transform({
  position: new Vector3(40.5, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallcornerPlants.addComponentOrReplace(transform335)
const gltfShape10 = new GLTFShape("b44c0769-6ad9-48fc-885a-6b1fefcfc482/PlantCorner.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
wallcornerPlants.addComponentOrReplace(gltfShape10)

const windowMagnoliaLarge = new Entity('windowMagnoliaLarge')
engine.addEntity(windowMagnoliaLarge)
windowMagnoliaLarge.setParent(_scene)
const transform336 = new Transform({
  position: new Vector3(42.5, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowMagnoliaLarge.addComponentOrReplace(transform336)
const gltfShape11 = new GLTFShape("d0aba886-62a2-4e6c-9681-a2dd1557ca61/MagnoliaWindowLarge.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
windowMagnoliaLarge.addComponentOrReplace(gltfShape11)

const windowMagnoliaLarge2 = new Entity('windowMagnoliaLarge2')
engine.addEntity(windowMagnoliaLarge2)
windowMagnoliaLarge2.setParent(_scene)
windowMagnoliaLarge2.addComponentOrReplace(gltfShape11)
const transform337 = new Transform({
  position: new Vector3(44.5, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowMagnoliaLarge2.addComponentOrReplace(transform337)

const windowMagnoliaLarge28 = new Entity('windowMagnoliaLarge28')
engine.addEntity(windowMagnoliaLarge28)
windowMagnoliaLarge28.setParent(_scene)
windowMagnoliaLarge28.addComponentOrReplace(gltfShape11)
const transform338 = new Transform({
  position: new Vector3(68.51629638671875, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge28.addComponentOrReplace(transform338)

const windowMagnoliaLarge29 = new Entity('windowMagnoliaLarge29')
engine.addEntity(windowMagnoliaLarge29)
windowMagnoliaLarge29.setParent(_scene)
windowMagnoliaLarge29.addComponentOrReplace(gltfShape11)
const transform339 = new Transform({
  position: new Vector3(70.51480865478516, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge29.addComponentOrReplace(transform339)

const windowMagnoliaLarge30 = new Entity('windowMagnoliaLarge30')
engine.addEntity(windowMagnoliaLarge30)
windowMagnoliaLarge30.setParent(_scene)
windowMagnoliaLarge30.addComponentOrReplace(gltfShape11)
const transform340 = new Transform({
  position: new Vector3(72.5133285522461, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge30.addComponentOrReplace(transform340)

const windowMagnoliaLarge31 = new Entity('windowMagnoliaLarge31')
engine.addEntity(windowMagnoliaLarge31)
windowMagnoliaLarge31.setParent(_scene)
windowMagnoliaLarge31.addComponentOrReplace(gltfShape11)
const transform341 = new Transform({
  position: new Vector3(74.51184844970703, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge31.addComponentOrReplace(transform341)

const windowMagnoliaLarge32 = new Entity('windowMagnoliaLarge32')
engine.addEntity(windowMagnoliaLarge32)
windowMagnoliaLarge32.setParent(_scene)
windowMagnoliaLarge32.addComponentOrReplace(gltfShape11)
const transform342 = new Transform({
  position: new Vector3(76.51036071777344, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge32.addComponentOrReplace(transform342)

const windowMagnoliaLarge33 = new Entity('windowMagnoliaLarge33')
engine.addEntity(windowMagnoliaLarge33)
windowMagnoliaLarge33.setParent(_scene)
windowMagnoliaLarge33.addComponentOrReplace(gltfShape11)
const transform343 = new Transform({
  position: new Vector3(78.50888061523438, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge33.addComponentOrReplace(transform343)

const windowMagnoliaLarge34 = new Entity('windowMagnoliaLarge34')
engine.addEntity(windowMagnoliaLarge34)
windowMagnoliaLarge34.setParent(_scene)
windowMagnoliaLarge34.addComponentOrReplace(gltfShape11)
const transform344 = new Transform({
  position: new Vector3(80.50739288330078, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge34.addComponentOrReplace(transform344)

const windowMagnoliaLarge35 = new Entity('windowMagnoliaLarge35')
engine.addEntity(windowMagnoliaLarge35)
windowMagnoliaLarge35.setParent(_scene)
windowMagnoliaLarge35.addComponentOrReplace(gltfShape11)
const transform345 = new Transform({
  position: new Vector3(82.50591278076172, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge35.addComponentOrReplace(transform345)

const windowMagnoliaLarge36 = new Entity('windowMagnoliaLarge36')
engine.addEntity(windowMagnoliaLarge36)
windowMagnoliaLarge36.setParent(_scene)
windowMagnoliaLarge36.addComponentOrReplace(gltfShape11)
const transform346 = new Transform({
  position: new Vector3(84.50443267822266, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge36.addComponentOrReplace(transform346)

const windowMagnoliaLarge37 = new Entity('windowMagnoliaLarge37')
engine.addEntity(windowMagnoliaLarge37)
windowMagnoliaLarge37.setParent(_scene)
windowMagnoliaLarge37.addComponentOrReplace(gltfShape11)
const transform347 = new Transform({
  position: new Vector3(86.50294494628906, 0, 6.943878173828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992585182189941, 1, 0.9999999403953552)
})
windowMagnoliaLarge37.addComponentOrReplace(transform347)

const jungleFern = new Entity('jungleFern')
engine.addEntity(jungleFern)
jungleFern.setParent(_scene)
const transform348 = new Transform({
  position: new Vector3(17.5, 0, 25.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
jungleFern.addComponentOrReplace(transform348)
const gltfShape12 = new GLTFShape("3a4e677f-88c7-4616-bbf0-9a97055463d6/JunglePlant_01/JunglePlant_01.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
jungleFern.addComponentOrReplace(gltfShape12)

const monsteraDeliciosa = new Entity('monsteraDeliciosa')
engine.addEntity(monsteraDeliciosa)
monsteraDeliciosa.setParent(_scene)
const transform349 = new Transform({
  position: new Vector3(46.5, 0, 43.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
monsteraDeliciosa.addComponentOrReplace(transform349)
const gltfShape13 = new GLTFShape("4563ad1f-84d1-47d5-a7ac-f159ba59b3e7/JunglePlant_03/JunglePlant_03.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
monsteraDeliciosa.addComponentOrReplace(gltfShape13)

const beanbagPink = new Entity('beanbagPink')
engine.addEntity(beanbagPink)
beanbagPink.setParent(_scene)
const transform350 = new Transform({
  position: new Vector3(26, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
beanbagPink.addComponentOrReplace(transform350)
const gltfShape14 = new GLTFShape("ff6f1a6e-ea64-42ce-b657-dfda8b460382/Beanbag_Pink.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
beanbagPink.addComponentOrReplace(gltfShape14)

const lightDecor = new Entity('lightDecor')
engine.addEntity(lightDecor)
lightDecor.setParent(_scene)
const transform351 = new Transform({
  position: new Vector3(76, 0, 59),
  rotation: new Quaternion(0, -0.2902846932411194, 3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(1, 1, 1)
})
lightDecor.addComponentOrReplace(transform351)
const gltfShape15 = new GLTFShape("49f3ab80-9023-419e-aa87-87f6a49ce517/Light_Decor5.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
lightDecor.addComponentOrReplace(gltfShape15)

const lightDecor2 = new Entity('lightDecor2')
engine.addEntity(lightDecor2)
lightDecor2.setParent(_scene)
const transform352 = new Transform({
  position: new Vector3(46.5, 0, 68.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightDecor2.addComponentOrReplace(transform352)
const gltfShape16 = new GLTFShape("82680db4-c0d7-46ea-b087-eee55218f481/Light_Decor7.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
lightDecor2.addComponentOrReplace(gltfShape16)

const windowMagnoliaLarge3 = new Entity('windowMagnoliaLarge3')
engine.addEntity(windowMagnoliaLarge3)
windowMagnoliaLarge3.setParent(_scene)
windowMagnoliaLarge3.addComponentOrReplace(gltfShape11)
const transform353 = new Transform({
  position: new Vector3(22.989545822143555, 0, 3.6489779949188232),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowMagnoliaLarge3.addComponentOrReplace(transform353)

const windowMagnoliaLarge4 = new Entity('windowMagnoliaLarge4')
engine.addEntity(windowMagnoliaLarge4)
windowMagnoliaLarge4.setParent(_scene)
windowMagnoliaLarge4.addComponentOrReplace(gltfShape11)
const transform354 = new Transform({
  position: new Vector3(24.989545822143555, 0, 3.6489779949188232),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowMagnoliaLarge4.addComponentOrReplace(transform354)

const floatingDecor = new Entity('floatingDecor')
engine.addEntity(floatingDecor)
floatingDecor.setParent(_scene)
const transform355 = new Transform({
  position: new Vector3(26.5, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floatingDecor.addComponentOrReplace(transform355)
const gltfShape17 = new GLTFShape("a8750c36-cc8d-4735-b85f-201ed131e66d/Floating_Decor.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
floatingDecor.addComponentOrReplace(gltfShape17)

const woodTile178 = new Entity('woodTile178')
engine.addEntity(woodTile178)
woodTile178.setParent(_scene)
woodTile178.addComponentOrReplace(gltfShape3)
const transform356 = new Transform({
  position: new Vector3(49.14462661743164, 0, 1.1068224906921387),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile178.addComponentOrReplace(transform356)

const woodTile179 = new Entity('woodTile179')
engine.addEntity(woodTile179)
woodTile179.setParent(_scene)
woodTile179.addComponentOrReplace(gltfShape3)
const transform357 = new Transform({
  position: new Vector3(47.14462661743164, 0, 1.1068224906921387),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile179.addComponentOrReplace(transform357)

const woodTile180 = new Entity('woodTile180')
engine.addEntity(woodTile180)
woodTile180.setParent(_scene)
woodTile180.addComponentOrReplace(gltfShape3)
const transform358 = new Transform({
  position: new Vector3(47.14462661743164, 0, 3.1068224906921387),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile180.addComponentOrReplace(transform358)

const woodTile181 = new Entity('woodTile181')
engine.addEntity(woodTile181)
woodTile181.setParent(_scene)
woodTile181.addComponentOrReplace(gltfShape3)
const transform359 = new Transform({
  position: new Vector3(49.14462661743164, 0, 3.1068224906921387),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile181.addComponentOrReplace(transform359)

const wallcornerPlants2 = new Entity('wallcornerPlants2')
engine.addEntity(wallcornerPlants2)
wallcornerPlants2.setParent(_scene)
wallcornerPlants2.addComponentOrReplace(gltfShape10)
const transform360 = new Transform({
  position: new Vector3(57, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallcornerPlants2.addComponentOrReplace(transform360)

const aloevera = new Entity('aloevera')
engine.addEntity(aloevera)
aloevera.setParent(_scene)
const transform361 = new Transform({
  position: new Vector3(35, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
aloevera.addComponentOrReplace(transform361)
const gltfShape18 = new GLTFShape("0ed26898-a163-49b1-bb8c-d63c5d34bf02/aloevera.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
aloevera.addComponentOrReplace(gltfShape18)

const sansTitre = new Entity('sansTitre')
engine.addEntity(sansTitre)
sansTitre.setParent(_scene)
const transform362 = new Transform({
  position: new Vector3(54.5, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sansTitre.addComponentOrReplace(transform362)
const gltfShape19 = new GLTFShape("d5ef8ae2-744a-4873-8915-468e98d6d435/Sans titre.gltf")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
sansTitre.addComponentOrReplace(gltfShape19)

const sansTitre2 = new Entity('sansTitre2')
engine.addEntity(sansTitre2)
sansTitre2.setParent(_scene)
const transform363 = new Transform({
  position: new Vector3(51.5, 10, 65.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(16.17810821533203, 16.17810821533203, 16.17810821533203)
})
sansTitre2.addComponentOrReplace(transform363)
const gltfShape20 = new GLTFShape("4266e858-5937-42da-a981-494bf19c8df9/Sans titre.glb")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
sansTitre2.addComponentOrReplace(gltfShape20)

const roofSimple3 = new Entity('roofSimple3')
engine.addEntity(roofSimple3)
roofSimple3.setParent(_scene)
const gltfShape21 = new GLTFShape("d24cc779-03c9-40b1-ba2f-b64ca9032e20/SimpleRoof.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
roofSimple3.addComponentOrReplace(gltfShape21)
const transform364 = new Transform({
  position: new Vector3(78.51033020019531, 0, 6.687512397766113),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
roofSimple3.addComponentOrReplace(transform364)

const roofSimple4 = new Entity('roofSimple4')
engine.addEntity(roofSimple4)
roofSimple4.setParent(_scene)
roofSimple4.addComponentOrReplace(gltfShape21)
const transform365 = new Transform({
  position: new Vector3(82.51033020019531, 0, 6.687512397766113),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
roofSimple4.addComponentOrReplace(transform365)

const roofSimple5 = new Entity('roofSimple5')
engine.addEntity(roofSimple5)
roofSimple5.setParent(_scene)
roofSimple5.addComponentOrReplace(gltfShape21)
const transform366 = new Transform({
  position: new Vector3(70.51033020019531, 0, 6.687512397766113),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
roofSimple5.addComponentOrReplace(transform366)

const roofSimple6 = new Entity('roofSimple6')
engine.addEntity(roofSimple6)
roofSimple6.setParent(_scene)
roofSimple6.addComponentOrReplace(gltfShape21)
const transform367 = new Transform({
  position: new Vector3(74.51033020019531, 0, 6.687512397766113),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
roofSimple6.addComponentOrReplace(transform367)

const roofSimple = new Entity('roofSimple')
engine.addEntity(roofSimple)
roofSimple.setParent(_scene)
roofSimple.addComponentOrReplace(gltfShape21)
const transform368 = new Transform({
  position: new Vector3(66.51033020019531, 0, 6.687512397766113),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
roofSimple.addComponentOrReplace(transform368)

const ambientSound = new Entity('ambientSound')
engine.addEntity(ambientSound)
ambientSound.setParent(_scene)
const transform369 = new Transform({
  position: new Vector3(46, 0, 42.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ambientSound.addComponentOrReplace(transform369)

const lightDecor3 = new Entity('lightDecor3')
engine.addEntity(lightDecor3)
lightDecor3.setParent(_scene)
const transform370 = new Transform({
  position: new Vector3(74, 0, 48.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightDecor3.addComponentOrReplace(transform370)
const gltfShape22 = new GLTFShape("cc93be70-5b8a-4598-83a9-3822ba15539b/Light_Decor2.glb")
gltfShape22.withCollisions = true
gltfShape22.isPointerBlocker = true
gltfShape22.visible = true
lightDecor3.addComponentOrReplace(gltfShape22)

const windowMagnoliaLarge5 = new Entity('windowMagnoliaLarge5')
engine.addEntity(windowMagnoliaLarge5)
windowMagnoliaLarge5.setParent(_scene)
windowMagnoliaLarge5.addComponentOrReplace(gltfShape11)
const transform371 = new Transform({
  position: new Vector3(68.5, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowMagnoliaLarge5.addComponentOrReplace(transform371)

const windowMagnoliaLarge6 = new Entity('windowMagnoliaLarge6')
engine.addEntity(windowMagnoliaLarge6)
windowMagnoliaLarge6.setParent(_scene)
windowMagnoliaLarge6.addComponentOrReplace(gltfShape11)
const transform372 = new Transform({
  position: new Vector3(70.5, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowMagnoliaLarge6.addComponentOrReplace(transform372)

const windowMagnoliaLarge7 = new Entity('windowMagnoliaLarge7')
engine.addEntity(windowMagnoliaLarge7)
windowMagnoliaLarge7.setParent(_scene)
windowMagnoliaLarge7.addComponentOrReplace(gltfShape11)
const transform373 = new Transform({
  position: new Vector3(86.49378967285156, 0, 2.8667943477630615),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowMagnoliaLarge7.addComponentOrReplace(transform373)

const windowMagnoliaLarge8 = new Entity('windowMagnoliaLarge8')
engine.addEntity(windowMagnoliaLarge8)
windowMagnoliaLarge8.setParent(_scene)
windowMagnoliaLarge8.addComponentOrReplace(gltfShape11)
const transform374 = new Transform({
  position: new Vector3(84.56000518798828, 0, 2.868539810180664),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
windowMagnoliaLarge8.addComponentOrReplace(transform374)

const zigmoonTitre = new Entity('zigmoonTitre')
engine.addEntity(zigmoonTitre)
zigmoonTitre.setParent(_scene)
const transform375 = new Transform({
  position: new Vector3(17.75, 1, 38),
  rotation: new Quaternion(3.836964383371888e-15, 0.9569403529167175, -1.140761582973937e-7, 0.2902847230434418),
  scale: new Vector3(9.500003814697266, 9.5, 9.500003814697266)
})
zigmoonTitre.addComponentOrReplace(transform375)
const gltfShape23 = new GLTFShape("a8840adf-bf5e-4f2b-9379-250ac014e9fe/zigmoon_titre.glb")
gltfShape23.withCollisions = true
gltfShape23.isPointerBlocker = true
gltfShape23.visible = true
zigmoonTitre.addComponentOrReplace(gltfShape23)

const twitterButtonLink = new Entity('twitterButtonLink')
engine.addEntity(twitterButtonLink)
twitterButtonLink.setParent(_scene)
const transform376 = new Transform({
  position: new Vector3(51, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
twitterButtonLink.addComponentOrReplace(transform376)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform377 = new Transform({
  position: new Vector3(50, 0, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink.addComponentOrReplace(transform377)

const sansTitre3 = new Entity('sansTitre3')
engine.addEntity(sansTitre3)
sansTitre3.setParent(_scene)
const transform378 = new Transform({
  position: new Vector3(75.5, 3.5, 29.5),
  rotation: new Quaternion(-1.10062582369541e-15, 0.6343932747840881, -7.562556447737734e-8, 0.7730104327201843),
  scale: new Vector3(-65.02499389648438, -65.02500915527344, -65.02499389648438)
})
sansTitre3.addComponentOrReplace(transform378)
const gltfShape24 = new GLTFShape("32b99380-c865-4d23-9a8b-e9347a60d1b0/Sans titre.glb")
gltfShape24.withCollisions = true
gltfShape24.isPointerBlocker = true
gltfShape24.visible = true
sansTitre3.addComponentOrReplace(gltfShape24)

const sansTitre6 = new Entity('sansTitre6')
engine.addEntity(sansTitre6)
sansTitre6.setParent(_scene)
sansTitre6.addComponentOrReplace(gltfShape24)
const transform379 = new Transform({
  position: new Vector3(88, 9.5, 54.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-7.528587341308594, -7.528587341308594, -7.528587341308594)
})
sansTitre6.addComponentOrReplace(transform379)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script1.spawn(videoScreenStanding, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoScreenStanding","actionId":"toggle","values":{}}]}, createChannel(channelId, videoScreenStanding, channelBus))
script2.spawn(verticalBluePad, {"distance":15,"speed":4,"autoStart":true,"onReachEnd":[{"entityName":"verticalBluePad","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalBluePad","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalBluePad, channelBus))
script3.spawn(signpostDirections, {"textTop":"Watch films","textLower":"Expo.","fontSize":21.5}, createChannel(channelId, signpostDirections, channelBus))
script4.spawn(imageFromURL, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL, channelBus))
script4.spawn(imageFromURL2, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL2, channelBus))
script4.spawn(imageFromURL3, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL3, channelBus))
script4.spawn(imageFromURL4, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL4, channelBus))
script4.spawn(imageFromURL5, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL5, channelBus))
script4.spawn(imageFromURL6, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL6, channelBus))
script4.spawn(imageFromURL8, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL8, channelBus))
script4.spawn(imageFromURL9, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL9, channelBus))
script5.spawn(roundGalleryLight, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight, channelBus))
script5.spawn(roundGalleryLight2, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight2, channelBus))
script5.spawn(roundGalleryLight3, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight3, channelBus))
script5.spawn(roundGalleryLight4, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight4, channelBus))
script5.spawn(roundGalleryLight5, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight5, channelBus))
script5.spawn(roundGalleryLight6, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight6, channelBus))
script5.spawn(roundGalleryLight7, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight7, channelBus))
script5.spawn(roundGalleryLight8, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight8, channelBus))
script4.spawn(imageFromURL7, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL7, channelBus))
script5.spawn(roundGalleryLight9, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight9, channelBus))
script5.spawn(roundGalleryLight10, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight10, channelBus))
script5.spawn(roundGalleryLight11, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight11, channelBus))
script4.spawn(imageFromURL10, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL10, channelBus))
script4.spawn(imageFromURL12, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL12, channelBus))
script5.spawn(roundGalleryLight12, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight12, channelBus))
script4.spawn(imageFromURL13, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL13, channelBus))
script4.spawn(imageFromURL11, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL11, channelBus))
script5.spawn(roundGalleryLight13, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight13, channelBus))
script4.spawn(imageFromURL14, {"image":"https://zigmoon.com/wp-content/uploads/2022/05/gameingame-1024x533.png"}, createChannel(channelId, imageFromURL14, channelBus))
script6.spawn(ambientSound, {"sound":"City","active":true,"loop":true}, createChannel(channelId, ambientSound, channelBus))
script7.spawn(twitterButtonLink, {"url":"zigmoon","bnw":false,"name":"zigmoon"}, createChannel(channelId, twitterButtonLink, channelBus))
script8.spawn(externalLink, {"url":"https://zigmoon.com"}, createChannel(channelId, externalLink, channelBus))