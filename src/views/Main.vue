<template>
  <Layaut>
    <UserSelect></UserSelect>
    <PostList></PostList>
  </Layaut>
</template>
<script>
import { Layaut, PostList, UserSelect } from "@/components";
export default {
  name: "Main",
  components: {
    Layaut,
    PostList,
    UserSelect,
  },
};
</script>
<style></style>
