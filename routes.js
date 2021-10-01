const { Router } = require('@layer0/core/router')
const { nextRoutes } = require('@layer0/next')

module.exports = new Router().use(nextRoutes)
