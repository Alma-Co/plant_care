<template>
  <div class="header-main">
    <div class="header-wrapper">
      <h3 class="header-title">My Plants</h3>
      <div>
        <font-awesome-icon
          class="header-icon"
          icon="fa-solid fa-magnifying-glass"
        />
        <button class="header-button">
          <font-awesome-icon class="header-icon" icon="fa-solid fa-plus" />
        </button>
      </div>
    </div>
  </div>
</template>
<style>
.header-main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.header-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  background-color: white;
  z-index: 2;
}
.header-title {
  color: #417d7a;
}
.header-button {
  margin-left: 30px;
  border-radius: 4px;
  background-color: transparent;
}
.header-icon {
  color: #417d7a;
}
</style>
<script>
export default {
  name: "HeaderNav",
  setup() {},
};
</script>
