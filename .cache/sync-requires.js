const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Nenad/Web Development/diversify/.cache/dev-404-page.js"))),
  "component---src-pages-companies-js": hot(preferDefault(require("/Users/Nenad/Web Development/diversify/src/pages/companies.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Nenad/Web Development/diversify/src/pages/index.js"))),
  "component---src-pages-professionals-js": hot(preferDefault(require("/Users/Nenad/Web Development/diversify/src/pages/professionals.js")))
}

