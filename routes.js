const createNextPlugin = require('@layer0/next/router/createNextPlugin')

module.exports = app => {
  const { nextMiddleware, renderNext } = createNextPlugin(app)

  return new Router()
    .destination("legacy",
      new Router().fallback(({ proxy }) => proxy("legacy"))
    )
    .destination("pwa",
      new Router().use(nextMiddleware)
    )
}
