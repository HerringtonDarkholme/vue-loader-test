import Vue = require('vue')
import {create} from 'kilimanjaro'
import nani from './components/nani.vue'

Vue.component('v-template', {
  created() {
    this.$options.render = h => h('')
  }
})
Vue.component('v-outlet', {
  props: {
    source: {
      type: String,
      default: 'default',
    },
    $ctx: {}
  },
  created() {
    let slots = this && this.$parent && this.$parent.$slots
    let vnodes = slots && slots[this['source']]
    let vnode = vnodes && vnodes[0]
    let template = vnode && vnode.data && vnode.data.inlineTemplate
    if (!template) {
      this.$options.render = function(h) {
        let fallbacks = this.$slots['default']
        return (fallbacks && fallbacks[0]) || h('')
      }
      return
    }
    this.$options.render = template.render as any
    this.$options.staticRenderFns = template.staticRenderFns as any
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
