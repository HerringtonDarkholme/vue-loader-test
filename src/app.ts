import Vue = require('vue')
import {create} from 'kilimanjaro'
import nani from './components/nani.vue'

Vue.component('v-template', {
  created() {
    this.$options.render = h => h('')
  }
})

new Vue({
    el: '#vue-container',
    components: {nani},
    render(h) {
      return h('nani')
    }
})

var store = create({test: 123})
.getter('get', s => s.test + 11)
.mutation('Cmt',  s => () => s.test += 1)
.action('s', s => ([a, b]: [number, string]) => {
  console.log(a, b)
})
.done()

window['store'] = store
