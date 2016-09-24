import Vue = require('vue')
import {create} from 'kilimanjaro'
import nani from './components/nani.vue'

new Vue({
    el: '#vue-container',
    components: {nani},
    render(h) {
      return h('nani')
    }
})
