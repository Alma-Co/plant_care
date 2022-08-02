<script>
export default {
  name: "HelloWorld",
  setup() {
    const plantsList = [
      {
        name: "plant 1",
        image: "../assets/logo.png",
        id: "1",
      },
      {
        name: "plant 2",
        image: "../assets/logo.png",
        id: "2",
      },
      {
        name: "plant 3",
        image: "../assets/logo.png",
        id: "3",
      },
      {
        name: "plant 3",
        image: "../assets/logo.png",
        id: "3",
      },
    ];
    return { plantsList };
  },
};
</script>
<template>
  <div class="hello">
    <ul class="list-main">
      <li class="item-main" v-for="plant in plantsList" :key="plant.id">
        <img src="../assets/logo.png" class="item-image" />
        <p class="item-text">plant name</p>
      </li>
    </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list-main {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 30px 0px;
}
.item-main {
  box-shadow: 0px 0px 18px rgb(0 0 0 / 8%);
  border-radius: 10px;

  background-color: white;
  color: black;
  padding: 10px;
  & + & {
    margin-left: 20px;
  }
}

.item-image {
  height: 20px;
  margin-bottom: 10px;
}

.item-text {
  font-size: 14px;
}
</style>
