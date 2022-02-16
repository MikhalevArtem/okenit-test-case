<template>
  <va-inner-loading :loading="getUsersIsLoading">
    <va-select
      class="mb-4"
      placeholder="All users"
      label="Select user"
      v-model="value"
      :options="
        getUsersData?.map((user) => ({ value: user.id, text: user.username }))
      "
      value-by="value"
    />
  </va-inner-loading>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "UserSelect",
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    ...mapActions(["fetchPosts"]),
  },
  computed: {
    ...mapGetters(["getUsersData", "getUsersIsLoading"]),
  },
  watch: {
    value(newValue) {
      this.fetchPosts({ userId: newValue });
    },
  },
};
</script>
<style></style>
