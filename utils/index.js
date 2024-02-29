const navConfig = require("../config/nav-config")
module.exports = function jumpTo(navName) {
  navName = navName.toLocaleLowerCase()
  const url = navConfig.outerDit[navName]
  console.log("jumpto: ", url)
  if (!url) return
  const target = url.startsWith("/") ? "_self" : "_blank"
  window.open(url, target)
}
