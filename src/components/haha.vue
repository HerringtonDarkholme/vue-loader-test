<template>
<p>
Twice!
<v-outlet></v-outlet>
<v-outlet></v-outlet>
</p>
</template>
<script>
import { Component, Vue, Prop, p} from 'av-ts'

@Component
export default class Haha extends Vue {
  @Prop prop = p(Number)
  sayHello() {
  }
}
</script>
