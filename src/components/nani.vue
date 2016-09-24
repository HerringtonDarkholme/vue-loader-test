<template>
<p @click="sayHello">纳尼?你再说一次.
<haha></haha>
</p></template>

<script>
import { Component, Vue } from 'av-ts'
import haha from './haha.vue'

@Component({
  components: { haha }
})
export default class Nani extends Vue {
  sayHello() {
      alert(23333)
      alert('hello')
  }
}
</script>
