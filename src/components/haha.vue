<template>
<p>
  <button @click="repeat++">+1s</button>
  {{repeat}}<br/>
  <v-outlet source="ss" :$ctx="{name: '江', i: repeat}" v-for="i in repeat">
    <span>{{i}}颗赛艇! 总共{{repeat}}颗赛艇<br/></span>
  </v-outlet>
</p>
</template>
<script>
import { Component, Vue, Prop, p} from 'av-ts'

@Component
export default class Haha extends Vue {

  repeat = 3
}
</script>
