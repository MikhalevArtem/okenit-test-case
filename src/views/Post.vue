<template>
  <Layaut>
    <va-progress-circle
      class="loader"
      indeterminate
      v-if="getPostsIsLoading || getUsersIsLoading"
    />
    <div v-else class="layout gutter--md">
      <div class="row justify--end">
        <div class="flex xs12 md8">
          <va-card class="item py-3 px-3" color="primary">
            <va-card-content
              ><h6 class="display-6 mb-2">{{ post?.title }}</h6>
              <p>{{ post?.body }}</p></va-card-content
            >
          </va-card>
        </div>
        <div class="flex xs12 md4">
          <UserCard />
        </div>
        <div class="flex xs12">
          <Comment />
        </div>
        <div class="flex xs12">
          <CommentList />
        </div>
      </div>
    </div>
  </Layaut>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { Layaut, UserCard, Comment, CommentList } from "@/components";
export default {
  name: "Post",
  components: {
    Layaut,
    UserCard,
    Comment,
    CommentList,
  },
  methods: {
    ...mapActions(["fetchPosts", "fetchUsers"]),
  },
  computed: {
    ...mapGetters([
      "getPostsData",
      "getPostsIsLoading",
      "getUsersData",
      "getUsersIsLoading",
    ]),
    post() {
      return this?.getPostsData.find((item) => {
        return item.id == this.$route.params.id;
      });
    },
  },
  mounted() {
    this.fetchPosts({ postId: this.$route.params.id });
  },
};
</script>
<style scoped>
.item {
  color: black;
  height: 100%;
}
.loader {
  margin: auto;
}
</style>
