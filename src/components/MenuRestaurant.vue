<template>
  <div>
    <div class="Restaurant">
      <Header />
      <main class="container menuRestaurant">
        <h3 class="text-center mt-3 mb-3">Состав меню ресторана</h3>
        <ul
          class="d-flex bg-secondary text-light flex-column justify-content-center flex-wrap align-items-center"
          v-for="(item, i) in goods"
          :key="i"
        >
          <li class="mb-3 mt-3">{{ item.name }}</li>
          <img class="menu-img-item" :src="item.img" alt="" /><br />
          <label>Состав: {{ item.title }}</label>
          <br />
          <label>Стоимость: {{ item.price }}₽</label>
          <br />
          <b-button
            class="putBox mb-3"
            @click="addProduct(item)"
            variant="dark"
          >
            Добавить в корзину
          </b-button>
        </ul>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import server from '../service/api'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  data() {
    return {
      id: 0,
      loading: false,
      post: null,
      error: null,
      item: {},
      restaurantId: 0,
      menuId: 0,
      goodsId: 0,
      menuCategories: [],
      goods: [],
    }
  },
  components: {
    Header,
    Footer,
  },

  async created() {
    try {
      this.restaurantId = this.$route.params.id_restarant
      this.menuId = this.$route.params.id_menu
      this.goods = await server.loadGoods(this.restaurantId, this.menuId)
      this.loading = true
    } catch (e) {
      console.log(e)
    }
    if (!this.item) {
      alert('error')
    }
    this.loading = false
  },

  methods: {
    addProduct(good) {
      this.$bus.emit('add-cart', {
        goodId: good.id,
        name: good.name,
        count: 1,
        price: good.price,
      })
    },
  },
}
</script>

<style scoped>
.menu-img-item {
  max-width: 400px;
  width: 100%;
  height: 280px;
  border-radius: 15px;
}

ul {
  list-style: none;
  font-size: 18px;
  font-weight: 700;
  border-radius: 15px;
}

.putBox {
  font-size: 20px;
}
</style>
