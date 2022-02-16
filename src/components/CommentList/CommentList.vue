<template>
  <va-inner-loading class="px-3 py-3" :loading="false">
    <va-list>
      <va-list-label> Comments </va-list-label>
      <va-list-item
        class="comment"
        v-for="comment in getComments"
        :key="comment.id"
      >
        <va-list-item-section>
          <va-list-item-label>
            <h6>
              {{ comment.email }}
            </h6>
          </va-list-item-label>
          <va-list-item-label>
            {{ comment.name }}
          </va-list-item-label>
          <va-list-item-label caption :lines="10">
            {{ comment.body }}
          </va-list-item-label>
        </va-list-item-section>
      </va-list-item>
    </va-list>
  </va-inner-loading>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CommentList",
  computed: {
    ...mapGetters(["getComments", "getCommentAnswer"]),
  },
  methods: {
    ...mapActions(["fetchComments"]),
  },
  watch: {
    getCommentAnswer(newAnswer) {
      this.$vaToast.init({
        message: `id your comment: ${newAnswer.id}`,
        color: "primary",
        position: "top-right",
      });
    },
  },
  mounted() {
    this.fetchComments(this.$route.params.id);
  },
};
</script>
<style scoped></style>
