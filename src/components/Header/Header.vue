<template>
  <header class="header mb-2">
    <Container>
      <nav class="header__nav mx-2">
        <ul class="button-list">
          <va-button to="/" color="warning" :rounded="false">Posts</va-button>
        </ul>
      </nav>
    </Container>
  </header>
</template>
<script>
import Container from "../Container/Container.vue";
export default {
  name: "Header",
  components: {
    Container,
  },
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 100%;
  background-color: var(--va-primary);
  min-height: 50px;
}
.header__nav {
  display: flex;
  justify-content: end;
}
</style>
