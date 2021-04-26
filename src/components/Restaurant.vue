<template>
  <div>
    <Header />
    <div class="mainDiv container" v-if="!loading">
      <div class="infoRestaurant">
        <h1 class="mt-5 mb-5">Ресторан {{ item.name }}</h1>
        <h3 class="mt-3 mb-3">Адрес ресторана: {{ item.address }}</h3>
        <h3 class="mt-3 mb-5">Телефон для бронирования: {{ item.phone }}</h3>
        <div>
          <div class="actRestaurant">
            <b-button
              class="act-menu mb-5"
              variant="dark"
              @click="getMenuRestaurant"
            >
              Показать меню
            </b-button>
            <router-link to="/">
              <b-button variant="dark">Главная страница</b-button>
            </router-link>
          </div>
          <div v-show="showMenu" class="menu-block">
            <h3 class="tex-center mt-5 mb-5">Меню ресторана:</h3>
            <ul class="items row col-md-12 justify-content-center">
              <li
                class="items-item col-xl-4 d-flex flex-column justify-content-center"
                v-for="(item, i) in menu"
                :key="i"
              >
                <router-link
                  class="router-menu"
                  :to="{
                    name: 'MenuRestaurant',
                    params: { id_restarant: item.id, id_menu: item.id },
                  }"
                >
                  <ImagePlaceholder
                    width="300"
                    height="200"
                    img
                    class="itemImgMenu mt-4"
                    :src="item.img"
                  />
                  <label class="item-name">{{ item.name }}</label>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-else></div>
    <Footer />
  </div>
</template>

<script>
import ImagePlaceholder from 'vue-image-placeholder'
import server from '../service/api'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Vue from 'vue'
export const eventBus = new Vue()
export default {
  components: { Header, Footer, ImagePlaceholder },
  data() {
    return {
      id: 0,
      loading: false,
      post: null,
      error: null,
      showMenu: false,
      menu: [],
    }
  },
  async created() {
    this.id = this.$route.params.id
    this.loading = true
    try {
      this.item = await server.loadRestaurantInfo(this.id)
      this.menu = await server.loadMenu(this.id)
    } catch (e) {
      console.log(e)
    }
    if (!this.item) {
      alert('error')
    }
    this.loading = false
  },

  methods: {
    getMenuRestaurant() {
      this.showMenu = !this.showMenu
    },
    getNameRestaurant(menu) {
      eventBus.$emit('getNameRestaurant', menu)
    },
  },
}
</script>

<style scoped>
.itemImgMenu {
  width: 300px;
  height: 200px;
  border-radius: 5%;
}

ul {
  list-style-type: none;
}

.mainDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.items {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.items-item {
  margin: 10px;
}

.items-item a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #fff;
  border-radius: 10% 10% 10% 10%;
}

.items-item-card {
  text-decoration: none;
}

.actRestaurant {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.act-menu {
  margin-bottom: 10px;
}

.router-menu {
  text-decoration: none;
}
</style>
