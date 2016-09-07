import Vue = require('vue')

var nani = require('./components/nani.vue')
new Vue({
    el: '#vue-container',
    render(h) {
      return h(nani)
    }
})
