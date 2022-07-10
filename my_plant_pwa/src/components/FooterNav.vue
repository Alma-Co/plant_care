<template>
  <div class="footer-main">
    <div class="footer-wrapper">
      <div v-for="entry in entriesMenu" :key="entry.title">
        <router-link class="footer-item" :to="{ name: 'HelloWorld' }">
          <font-awesome-icon icon="entry.icon" />
          <p>{{ entry.title }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style>
.footer-main {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.footer-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 20px;
  background-color: white;
  box-shadow: 0px -4px 14px rgba(0, 0, 0, 0.1);
  z-index: 2;
}
.footer-item {
  color: #417d7a;
  font-family: "DM Sans";
  font-style: normal;
  text-decoration: none;
  text-underline-offset: none;
  text-transform: none;
}
</style>
<script>
export default {
  name: "FooterNav",
  setup() {
    const entriesMenu = [
      {
        title: "Home",
        icon: <font-awesome-icon icon="fa-solid fa-house" />,
        url: "/",
      },
      {
        title: "My plants",
        icon: <font-awesome-icon icon="fa-solid fa-house" />,
        url: " /plants",
      },
      {
        title: "Map",
        icon: <font-awesome-icon icon="fa-solid fa-house" />,
        url: "/map",
      },
      {
        title: "Profile",
        icon: <font-awesome-icon icon="fa-solid fa-house" />,
        url: "/settings",
      },
    ];
    return { entriesMenu };
  },
};
</script>
