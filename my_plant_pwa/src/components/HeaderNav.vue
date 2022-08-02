<template>
  <header class="header-main">
    <div class="header-wrapper">
      <h1 class="header-title">My Plants</h1>
      <div>
        <button class="header-button">
          <font-awesome-icon class="header-icon" icon="fa-solid fa-plus" />
        </button>
      </div>
    </div>
  </header>
</template>
<style>
.header-main {
  font-family: "Indie Flower", cursive;

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
  padding: 15px 25px 0px 25px;
  border-radius: 4px;
  background: white;
  box-shadow: rgba(76, 72, 72, 0.31) 0px 2px 10px;
  z-index: 2;
}
.header-title {
  color: #00838f;
  font-size: 24px;
}
.header-button {
  border-color: gray;
  background-color: #00838f;
  border-radius: 50px;
  padding: 2px 4px;
  margin-left: 30px;
}
.header-icon {
  color: white;
}

@media only screen and (min-width: 768px) {
  .header-main {
    position: fixed;
    top: 0;
    left: 0;
    width: 90%;
    margin-left: 10%;
  }
}
</style>
<script>
export default {
  name: "HeaderNav",
  setup() {},
};
</script>
