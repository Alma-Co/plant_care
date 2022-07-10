<!-- Vue.Js -->
<!--App.vue -->
<script>
import FooterNav from "./components/FooterNav.vue";
import HeaderNav from "./components/HeaderNav.vue";

export default {
  components: {
    FooterNav,
    HeaderNav,
  },
  name: "App",
};
</script>

<template>
  <!-- This serves all our pages using vue router -->
  <router-view v-slot="{ Component }">
    <HeaderNav />
    <main class="app-main">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </main>

    <FooterNav />
  </router-view>
</template>

<style>
.app-main {
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
