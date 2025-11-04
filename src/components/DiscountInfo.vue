<script lang="ts" setup>
</script>

<template>
  <div id="discount-info">
    <p>New Season Coming! Discount 10% for all products! Checkout Now! <span id="time">20:40</span></p>
  </div>
</template>

<style lang="scss" scoped>
#discount-info {
  color: var(--WHITE01);
  background: var(--BLACK03);

  text-align: center;
  display: flex;
  justify-content: center;

  p {
    padding: 12.5px;
    font-size: 14px;

    #time {
      background: #383838;

      padding: 3px 8px;
      margin-left: 16px;
      border-radius: 23px;
    }
  }
}
</style>
