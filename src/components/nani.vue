<template>
<p>
  纳尼?你再说一次.
  <haha :prop="123">
    <component is="v-template" inline-template>
      <span>, hehe, 1231232</span>
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
