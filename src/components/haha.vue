<template>
<p>纳尼!我就再说咋的!</p></template>

<script>
import {Component} from 'av-ts'
import Vue =require('vue')

@Component
class Haha extends Vue {
  sayHello() {
    alert(23333)
    alert('hello')
  }
}
export default Haha
</script>
