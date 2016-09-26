<script>
import { Component, Vue, Prop, p, Render} from 'av-ts'

@Component
export default class Haha extends Vue {
  @Prop prop = p(Number)
  sayHello() {
  }
  @Render
  render(h) {
    let template = this.$slots['default'][0].data.inlineTemplate
    return  h('div', [template.render(), template.render()])
  }
}
</script>
