<template>
  <va-inner-loading :loading="getPostsIsLoading">
    <va-list>
      <va-list-label> Posts </va-list-label>

      <va-list-item
        class="post"
        v-for="post in getPostsData"
        :key="post.id"
        @click="this.$router.push({ path: `/post/${post.id}` })"
      >
        <va-list-item-section>
          <va-list-item-label>
            {{ post.title }}
          </va-list-item-label>
          <va-list-item-label caption :lines="10">
            {{ post.body }}
          </va-list-item-label>
        </va-list-item-section>
      </va-list-item>
    </va-list>
  </va-inner-loading>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PostList",
  computed: {
    ...mapGetters(["getPostsData", "getPostsIsLoading"]),
  },
  methods: {
    ...mapActions(["fetchPosts"]),
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>
<style scoped>
.post:hover {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
