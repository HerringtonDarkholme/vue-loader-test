<template>
<p>
  <haha>
    <component is="v-template" inline-template>
      <span>闷声发大财</span>
    </component>
  </haha>
</p>
</template>

<script>
import haha from './haha.vue'
export default {
  components: { haha, }
}
</script>
