<template>
  <div class="error">
    <h5 class="display-5">
      Error:"{{ getUsersError || getPostsError || getCommentsError }}."
    </h5>
    <h6 class="display-5">try reloading the page</h6>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Error",
  computed: {
    ...mapGetters(["getUsersError", "getPostsError", "getCommentsError"]),
  },
};
</script>
<style scoped>
.error {
  text-align: center;
}
</style>
