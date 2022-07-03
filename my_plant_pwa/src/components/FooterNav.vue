<template>
  <div class="container">
    <router-link :to="{ name: 'HelloWorld' }">
      <h3>Home</h3>
    </router-link>
  </div>
</template>

<style>
.container {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background-color: red;
  color: white;
  z-index: 2;
}
</style>
<script>
export default {
  name: "FooterNav",
};
</script>
