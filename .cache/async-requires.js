// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-companies-js": () => import("./../../../src/pages/companies.js" /* webpackChunkName: "component---src-pages-companies-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-professionals-js": () => import("./../../../src/pages/professionals.js" /* webpackChunkName: "component---src-pages-professionals-js" */)
}

