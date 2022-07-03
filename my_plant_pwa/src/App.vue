<!-- Vue.Js -->
<!--App.vue -->
<script>
import FooterNav from "./components/FooterNav.vue";

export default {
  components: {
    FooterNav,
  },
  name: "App",
};
</script>

<template>
  <!-- This serves all our pages using vue router -->
  <router-view v-slot="{ Component }">
    <main class="main">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </main>

    <FooterNav />
  </router-view>
</template>

<style>
.main {
  padding: 0px 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
