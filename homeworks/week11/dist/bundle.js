(() => {
  const e = {
    574: (e, t, n) => { n.d(t, { Z: () => i }); const o = n(645); const r = n.n(o)()(((e) => e[1])); r.push([e.id, 'h1,.form,.comments{margin-bottom:30px}header,.edit_content,.edit_content .btn{position:relative}*{margin:0;padding:0;color:#082f30;text-decoration:none;box-sizing:border-box}.webpage{display:flex;flex-direction:column;align-items:center;background-color:#667e79;min-height:100vh}header{display:flex;background-color:white;color:#672400;top:0px;width:100vw;justify-content:center;font-weight:bold;z-index:3}main{margin:55px 0px 30px;box-shadow:7px 7px 5px 0px #082f30c2;width:800px;background-color:#ffffff;padding:40px;position:relative}.textarea{width:99%;height:150px;margin-bottom:10px}input:nth-child(n):not(.btn){margin-bottom:15px;width:200px}.comments{display:flex;align-items:center}.headshot{width:50px;height:50px;border-radius:50%;background-color:#082f30;margin:5px}.info{width:80%;padding:10px;word-break:break-all}.nickname{padding-right:10px;color:#a03b04}.currentTime{color:#bea698}.content{margin-top:10px}.btn{width:auto;height:40px;font-size:18px;border:1px solid #667e79;background-color:white;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;transition:0.3s;padding:0px 15px}.btn_wrap{position:absolute;top:40px;right:40px}.btn:hover{background-color:#082f30;color:white}.isEmpty{color:#a03b04;font-weight:bold;padding-left:5px}.hide{display:none}.edit_content>textarea{width:350px;height:40px}.edit_content .btn{left:10px;top:-13px}.edit_content .isEmpty{white-space:nowrap;position:absolute;top:40px;left:-5px}td{padding:10px 50px}\n', '']); const i = r },
    645: (e) => { e.exports = function(e) { const t = []; return t.toString = function() { return this.map(((t) => { const n = e(t); return t[2] ? '@media '.concat(t[2], ' {').concat(n, '}') : n })).join('') }, t.i = function(e, n, o) { typeof e === 'string' && (e = [[null, e, '']]); const r = {}; if (o) for (let i = 0; i < this.length; i++) { const a = this[i][0]; a != null && (r[a] = !0) } for (let c = 0; c < e.length; c++) { const d = [].concat(e[c]); o && r[d[0]] || (n && (d[2] ? d[2] = ''.concat(n, ' and ').concat(d[2]) : d[2] = n), t.push(d)) } }, t } },
    422: (e, t, n) => {
      n.r(t), n.d(t, { default: () => a }); const o = n(379); const r = n.n(o); const i = n(574); r()(i.Z, {
        insert: 'head',
        singleton: !1
      }); const a = i.Z.locals || {}
    },
    379: (e, t, n) => {
      let o; const r = (function() { const e = {}; return function(t) { if (void 0 === e[t]) { let n = document.querySelector(t); if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try { n = n.contentDocument.head } catch (e) { n = null }e[t] = n } return e[t] } }()); const i = []; function a(e) { for (var t = -1, n = 0; n < i.length; n++) if (i[n].identifier === e) { t = n; break } return t } function c(e, t) {
        for (var n = {}, o = [], r = 0; r < e.length; r++) {
          const c = e[r]; const d = t.base ? c[0] + t.base : c[0]; const s = n[d] || 0; const l = ''.concat(d, ' ').concat(s); n[d] = s + 1; const p = a(l); const u = {
            css: c[1],
            media: c[2],
            sourceMap: c[3]
          }; p !== -1
            ? (i[p].references++, i[p].updater(u))
            : i.push({
              identifier: l,
              updater: b(u, t),
              references: 1
            }), o.push(l)
        } return o
      } function d(e) { const t = document.createElement('style'); const o = e.attributes || {}; if (void 0 === o.nonce) { const i = n.nc; i && (o.nonce = i) } if (Object.keys(o).forEach(((e) => { t.setAttribute(e, o[e]) })), typeof e.insert === 'function')e.insert(t); else { const a = r(e.insert || 'head'); if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."); a.appendChild(t) } return t } let s; const l = (s = [], function(e, t) { return s[e] = t, s.filter(Boolean).join('\n') }); function p(e, t, n, o) { const r = n ? '' : o.media ? '@media '.concat(o.media, ' {').concat(o.css, '}') : o.css; if (e.styleSheet)e.styleSheet.cssText = l(t, r); else { const i = document.createTextNode(r); const a = e.childNodes; a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i) } } function u(e, t, n) { let o = n.css; const r = n.media; const i = n.sourceMap; if (r ? e.setAttribute('media', r) : e.removeAttribute('media'), i && typeof btoa !== 'undefined' && (o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), ' */')), e.styleSheet)e.styleSheet.cssText = o; else { for (;e.firstChild;)e.removeChild(e.firstChild); e.appendChild(document.createTextNode(o)) } } let f = null; let h = 0; function b(e, t) { let n, o, r; if (t.singleton) { const i = h++; n = f || (f = d(t)), o = p.bind(null, n, i, !1), r = p.bind(null, n, i, !0) } else n = d(t), o = u.bind(null, n, t), r = function() { !(function(e) { if (e.parentNode === null) return !1; e.parentNode.removeChild(e) }(n)) }; return o(e), function(t) { if (t) { if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return; o(e = t) } else r() } }e.exports = function(e, t) { (t = t || {}).singleton || typeof t.singleton === 'boolean' || (t.singleton = (void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o)); let n = c(e = e || [], t); return function(e) { if (e = e || [], Object.prototype.toString.call(e) === '[object Array]') { for (let o = 0; o < n.length; o++) { const r = a(n[o]); i[r].references-- } for (var d = c(e, t), s = 0; s < n.length; s++) { const l = a(n[s]); i[l].references === 0 && (i[l].updater(), i.splice(l, 1)) }n = d } } }
    }
  }; const t = {}; function n(o) {
    const r = t[o]; if (void 0 !== r) return r.exports; const i = t[o] = {
      id: o,
      exports: {}
    }; return e[o](i, i.exports, n), i.exports
  }n.n = (e) => { const t = e && e.__esModule ? () => e.default : () => e; return n.d(t, { a: t }), t }, n.d = (e, t) => {
    for (const o in t) {
      n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
        enumerable: !0,
        get: t[o]
      })
    }
  }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = (e) => { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }) }, (() => { const e = n(422); console.log(e) })()
})()
