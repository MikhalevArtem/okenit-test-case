<template>
  <router-view />
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions(["fetchUsers"]),
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>
<style></style>
