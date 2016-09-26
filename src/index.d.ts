import Vue = require('vue')

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    what?: number
  }
}


