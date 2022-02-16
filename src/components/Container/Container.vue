<template>
  <div class="container"><slot></slot></div>
</template>
<script>
export default {
  name: "Container",
};
</script>
<style scoped>
.container {
  flex-grow: 1;
  padding: 0.75em 0;
  width: 100%;
}
@media (min-width: 992px) {
  .container {
    max-width: 1200px;
  }
}
@media (min-width: 768px) {
  .container {
    padding: 0.75em;
  }
}
</style>
