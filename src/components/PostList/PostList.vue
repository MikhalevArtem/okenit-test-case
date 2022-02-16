<template>
  <va-inner-loading :loading="getPostsIsLoading">
    <va-list>
      <va-list-label> Posts </va-list-label>

      <va-list-item v-for="post in getPostsData" :key="post.id">
        <va-list-item-section>
          <va-list-item-label>
            {{ post.title }}
          </va-list-item-label>
          <va-list-item-label caption>
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
<style></style>
