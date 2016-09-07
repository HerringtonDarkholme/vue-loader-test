<template>
<p @click="sayHello">纳尼?你再说一次.
<haha></haha>
</p></template>

<script>
import {Component} from 'av-ts'
import Vue =require('vue')
import haha from './haha.vue'

@Component({
  components: { haha }
})
class Nani extends Vue {
  sayHello() {
      alert(23333)
      alert('hello')
  }
}
export default Nani
</script>
