const path = require('path')
const SPA = `${__basedir}/dist/index.html`
const PubSub = require('pubsub-js')

module.exports = (app, io) => {
    app.get('/', (req, res) => { res.sendFile(path.join(SPA)) })
}