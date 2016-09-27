import Vue = require('vue')
import {createRenderer} from 'vue-server-renderer'
import * as fs from 'fs'
import * as path from 'path'
import App from './src/app'

global['vue'] = Vue

var layout = fs.readFileSync('./index.html', 'utf8')
var renderer = createRenderer()

import express = require('express')
var server = express()
server.use('/dist', express.static(path.resolve(process.cwd(), 'dist')))


server.get('/', (req, res) => {
  renderer.renderToString(App, (err, html) => {
    if (err) {
      res.status(500)
      .send('server derror')
      return
    }
    res.send(layout.replace('<div id="vue-container"></div>', `<div id="vue-container">${html}</div>`))
  })
})

server.listen(5000, (err) => {
  if (err) throw err
  console.log('running at localhost')
})


