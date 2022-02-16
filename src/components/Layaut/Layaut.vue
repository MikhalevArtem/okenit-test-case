<template>
  <div class="layaut">
    <Header />
    <Container>
      <slot></slot>
    </Container>
  </div>
</template>
<script>
import Header from "../Header/Header.vue";
import Container from "../Container/Container.vue";
export default {
  name: "Layaut",
  components: {
    Header,
    Container,
  },
};
</script>
<style scoped>
.layaut {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
