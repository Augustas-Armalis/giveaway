import {
  require_jsx_runtime
} from "./chunk-VE3UH75T.js";
import {
  __toESM,
  require_react
} from "./chunk-DDNM7ENY.js";

// node_modules/@calcom/embed-react/dist/Cal.es.mjs
var import_react = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var b = "https://app.cal.com/embed/embed.js";
function m(s = b) {
  (function(r, e, l) {
    let t = function(n, i) {
      n.q.push(i);
    }, o = r.document;
    r.Cal = r.Cal || function() {
      let n = r.Cal, i = arguments;
      if (n.loaded || (n.ns = {}, n.q = n.q || [], o.head.appendChild(o.createElement("script")).src = e, n.loaded = true), i[0] === l) {
        const u = function() {
          t(u, arguments);
        }, c = i[1];
        u.q = u.q || [], typeof c == "string" ? (n.ns[c] = n.ns[c] || u, t(n.ns[c], i), t(n, ["initNamespace", c])) : t(n, i);
        return;
      }
      t(n, i);
    };
  })(
    window,
    //! Replace it with "https://cal.com/embed.js" or the URL where you have embed.js installed
    s,
    "init"
  );
  return window.Cal;
}
m.toString();
function q(s) {
  const [r, e] = (0, import_react.useState)();
  return (0, import_react.useEffect)(() => {
    e(() => m(s));
  }, []), r;
}
var h = function(r) {
  const {
    calLink: e,
    calOrigin: l,
    namespace: t = "",
    config: o,
    initConfig: n = {},
    embedJsUrl: i,
    ...u
  } = r;
  if (!e)
    throw new Error("calLink is required");
  const c = (0, import_react.useRef)(false), a = q(i), f = (0, import_react.useRef)(null);
  return (0, import_react.useEffect)(() => {
    if (!a || c.current || !f.current)
      return;
    c.current = true;
    const d = f.current;
    t ? (a("init", t, {
      ...n,
      origin: l
    }), a.ns[t]("inline", {
      elementOrSelector: d,
      calLink: e,
      config: o
    })) : (a("init", {
      ...n,
      origin: l
    }), a("inline", {
      elementOrSelector: d,
      calLink: e,
      config: o
    }));
  }, [a, e, o, t, l, n]), a ? (0, import_jsx_runtime.jsx)("div", {
    ref: f,
    ...u
  }) : null;
};
var R = h;
function j(s) {
  const r = typeof s == "string" ? { embedJsUrl: s } : s ?? {}, { namespace: e = "", embedJsUrl: l } = r;
  return new Promise(function t(o) {
    const n = m(l);
    n("init", e);
    const i = e ? n.ns[e] : n;
    if (!i) {
      setTimeout(() => {
        t(o);
      }, 50);
      return;
    }
    o(i);
  });
}
export {
  R as default,
  j as getCalApi
};
/*! Bundled license information:

@calcom/embed-react/dist/Cal.es.mjs:
  (*!  Copying ends here. *)
*/
//# sourceMappingURL=@calcom_embed-react.js.map
