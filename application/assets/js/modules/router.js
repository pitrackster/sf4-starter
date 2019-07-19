/* global require module */
const Routing = require('./../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js')
// fos_js_routes.json is the output file for the fos:js-routing:dump command
const routerConfig = require('./../../../public/routes/fos_js_routes.json')

Routing.setRoutingData(routerConfig)

module.exports = Routing
