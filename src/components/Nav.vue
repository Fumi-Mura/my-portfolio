<template>
  <div class="nav">
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">top</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">about</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">skills</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">works</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">contact</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
  }
}
</script>

<style scoped lang="scss">
  .nav {
    opacity: 0.7;
    height: 70px;
    position: fixed;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, 50%);
    background: #eee;
    border-radius: 100px;
    ul {
      line-height: 70px;
      display: flex;
      justify-content: space-between;
      li {
        margin: 0 30px;
        width: 80px;
        text-align: center;
        &:hover {
          background: linear-gradient(transparent 90%, black 0%);
        }
        a {
          color: gray;
        }
      }
    }
}
</style>
