<template>
  <va-card class="py-3 px-3" color="primary">
    <va-input
      class="textarea mb-2"
      v-model="value"
      type="textarea"
      label="Send your comment"
      autosize
    />
    <va-button
      :rounded="false"
      color="warning"
      @click="postComment({ body: value })"
      >Send</va-button
    >
  </va-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Comment",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    ...mapActions(["postComment"]),
  },
};
</script>
<style scoped></style>
