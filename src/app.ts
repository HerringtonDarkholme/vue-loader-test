import Vue = require('vue')
import {create} from 'av-ts/dist/src/vuex'

var nani = require('./components/nani.vue')
new Vue({
    el: '#vue-container',
    render(h) {
      return h(nani)
    }
})


var module = create()
  .state({})
  .getters({})
  .mutations({})
  .actions({})
