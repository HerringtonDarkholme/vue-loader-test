import Vue = require('vue')
import {create} from 'kilimanjaro'

var nani = require('./components/nani.vue')
new Vue({
    el: '#vue-container',
    render(h) {
      return h(nani)
    }
})
