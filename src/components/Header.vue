<template>
  <div class="home">
    <header>
      <div class="header-menu">
        <div class="header-menu-item">
          <router-link to="/" class="header-menu-main-page"
            >Главная страница</router-link
          >
        </div>
        <div class="header-menu-item">
          <router-link class="link" to="/order/restaurant"
            >Ресторанам</router-link
          >
        </div>
        <div class="header-menu-item">
          <router-link class="link" to="/courier">Курьерам</router-link>
        </div>
        <div class="header-menu-item">Контакты</div>
        <div class="header-menu-item basket-wrapper">
          <router-link class="link" to="/cart/order">
            Корзина
            <i class="counterBasket">{{ countGoodsInBasket }}</i>
          </router-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countGoodsInBasket: 0,
    }
  },
  created() {
    this.$bus.on('count-cart', (count) => {
      this.countGoodsInBasket = count
    })
  },
}
</script>

<style scoped>
header {
  background: #000;
  border-radius: 0 0 15% 15%;
}

.header-menu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #fff;
}

.header-menu-item {
  margin: 50px 10px 50px 10px;
  color: white;
  font-size: 20px;
  font-weight: 700;
}

.counterBasket {
  position: absolute;
  z-index: 5;
  border-radius: 50%;
  right: 0px;
  top: -20px;
  left: 75px;
  background: white;
  width: 30px;
  height: 30px;
  font-size: 16px;
  display: block;
  line-height: 30px;
  text-align: center;
  color: black;
}

.basket-wrapper {
  z-index: 4;
  position: relative;
}

.header-menu-main-page {
  text-decoration: none;
  color: #fff;
}

.link {
  text-decoration: none;
  color: #fff;
}
</style>
