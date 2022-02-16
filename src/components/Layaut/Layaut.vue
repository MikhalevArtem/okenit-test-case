<template>
  <Error v-if="getUsersError || getPostsError || getCommentsError" />
  <div v-else class="layaut">
    <Header />
    <Container>
      <slot></slot>
    </Container>
  </div>
</template>
<script>
import Header from "../Header/Header.vue";
import Container from "../Container/Container.vue";
import Error from "../Error/Error.vue";
import { mapGetters } from "vuex";
export default {
  name: "Layaut",
  components: {
    Header,
    Container,
    Error,
  },
  computed: {
    ...mapGetters(["getUsersError", "getPostsError", "getCommentsError"]),
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
