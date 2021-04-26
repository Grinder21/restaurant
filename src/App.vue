<template>
  <div id="app">
    <router-view :cartItem="cartItem" />
    <Cart v-show="false" />
  </div>
</template>
<script>
import Cart from '@/components/Cart'
export default {
  components: { Cart },
  data() {
    return {
      cartItem: {},
    }
  },
  created() {
    console.log('created App')
    this.$bus.$on('change-cart', (cart) => {
      // console.log('change-cart')
      this.cartItem = cart
    })
  },
}
</script>
