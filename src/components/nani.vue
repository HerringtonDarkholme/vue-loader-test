<template>
<p>
  <haha>
    <v-template inline-template>
      <span>{{$ctx.name}}说: 闷声发大财 +{{$ctx.i}}s<br/></span>
    </v-template>
    <v-template slot="shat" inline-template>
      <span>赛艇说:  +{{$ctx}}s<br/></span>
    </v-template>
  </haha>
</p>
</template>

<script>
import haha from './haha.vue'
export default {
  components: { haha, }
}
</script>
