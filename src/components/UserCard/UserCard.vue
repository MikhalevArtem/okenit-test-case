<template>
  <va-inner-loading :loading="getUsersIsLoading">
    <va-card class="item py-3 px-3" color="primary">
      <va-card-content
        ><h6 class="display-6">{{ user.username }}</h6>
        <p class="mt-2"><b>name: </b>{{ user.name }}</p>
        <p class="mt-2"><b>email: </b>{{ user.email }}</p>
        <p class="mt-2"><b>phone: </b>{{ user.phone }}</p>
        <p class="mt-2"><b>city: </b>{{ user.address.city }}</p>
        <p class="mt-2"><b>zipcode: </b>{{ user.address.zipcode }}</p>
      </va-card-content>
    </va-card>
  </va-inner-loading>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UserCard",
  computed: {
    ...mapGetters(["getUsersIsLoading", "getUsersData", "getPostsData"]),
    userId() {
      return this.getPostsData.find((item) => {
        return item.id == this.$route.params.id;
      }).userId;
    },
    user() {
      return this.getUsersData.find((item) => {
        return item.id == this.userId;
      });
    },
  },
};
</script>
<style></style>
