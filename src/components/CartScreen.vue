<template>
  <div>
    <div>
      <Header />
      <main class="container">
        <ul>
          <li v-for="(item, i) in cartItem" :key="i">
            {{ item.name }}
            <br />
            Цена:
            <label>{{ item.price }} ₽</label>
            <br />
            <label>
              <b-button @click="upCount(item)">+</b-button>
              {{
                item.count > 0
                  ? item.count
                  : alert('Ошибка в заказе! Такого количества не может быть')
              }}
              <b-button @click="downCount(item)">-</b-button>
            </label>
            <b-button variant="dark ml-2" @click="deleteGoodCart(item)">
              Удалить
            </b-button>
          </li>
          <div class="sum">Итого: {{ total }}₽</div>
          <div>
            <router-link to="/send/order">
              <b-button @click="check()" variant="dark mt-3">
                Оформить заказ
              </b-button>
            </router-link>
          </div>
        </ul>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Vue from 'vue'
export const eventBus = new Vue()
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      cartItem: [],
      total: 0,
    }
  },
  created() {
    this.cartItem = this.$attrs.cartItem
    this.total = this.$attrs.total
  },

  methods: {
    upCount(item) {
      item.count += 1
    },
    downCount(item) {
      if (item.count > 1) {
        item.count -= 1
      }
    },

    addScreen() {
      this.$bus.on('add-cart', this.addCart)
    },
    deleteGoodCart(item) {
      this.cartItem.splice(item, 1)
    },
    goToOrder(cartItem, total) {
      eventBus.$emit('goToOrder', cartItem, total)
    },
    goTo(cartItem) {
      eventBus.$emit('goTo', cartItem)
    },
  },
  watch: {
    cartItem: {
      deep: true,
      handler(value) {
        this.total = value
          .reduce((accumulator, el) => {
            // console.log('Текущее значение ' + accumulator)
            return (accumulator += +el.price * +el.count)
          }, 0)
          .toFixed(2)
        localStorage.setItem('total', this.total)
      },
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  font-size: 18px;
}
.sum {
  font-size: 22px;
  font-weight: 700;
}
</style>
