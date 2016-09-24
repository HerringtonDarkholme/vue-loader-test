<template>
<p>纳尼!我就再说咋的!</p></template>

<script>
import { Component, Vue } from 'av-ts'

@Component
export default class Haha extends Vue {
  sayHello() {
    alert(23333)
    alert('hello')
  }
}
</script>
