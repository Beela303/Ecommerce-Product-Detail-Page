<template>
  <div id="site-nav">
    <ul>
      <li>Homepage<span class="material-symbols-outlined">keyboard_arrow_right</span></li>
      <li>Women<span class="material-symbols-outlined">keyboard_arrow_right</span></li>
      <li>Women's Shirts & Tops<span class="material-symbols-outlined">keyboard_arrow_right</span></li>
      <li>Long Sleeve Overshirt, Khaki, 6</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
#site-nav {
  margin: 33px 100px;

  font-weight: 500;

  ul {
    display: flex;

    li {
      color: #8F8F8F;
      font-size: 16px;

      span {
        margin: 7px;
        font-size: 12px;
      }

      &:last-child {
        color: #292929;
        margin: 4px;
      }
    }
  }
}
</style>
