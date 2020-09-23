<template>
  <div class="footer">
    <h1>{{ msg }}</h1>
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Footer',
  props: {
    msg: String
  },
  components: {
    Nav,
  },
}
</script>

<style scoped lang="scss">

</style>
