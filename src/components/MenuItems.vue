<template>
  <div id="menu">
    <img src="../assets/logo-john-lewis.png" alt="Logo" />

    <ul>
      <li><span class="material-symbols-outlined">search</span></li>
      <li>Categories<span class="material-symbols-outlined">keyboard_arrow_down</span></li>
      <li><span class="material-symbols-outlined">person</span>Sign In</li>
      <li><span class="material-symbols-outlined">favorite</span></li>
      <li><span class="material-symbols-outlined">shopping_basket</span></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
#menu {
  color: #141414;

  height: 94.03px;
  margin: 0 100px;
  padding: 31px;

  font-weight: 500;
  line-height: 160%;

  border-bottom: 0.5px dotted #a3a3a3;

  display: flex;
  justify-content: space-between;

  img {
    width: 170px;
    height: 32.03px;

    //padding: 31px 0;
  }

  ul {
    display: flex;

    li {
      margin-right: 20px;
      font-size: 20px;

      display: flex;

      cursor: pointer;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
