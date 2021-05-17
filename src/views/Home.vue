<template>
  <div class="home">
    <Header />
    <main class="container">
      <h3 class="text-center mt-5 mb-5">Рестораны города Чебоксары</h3>
      <div class="mb-5 mt-3">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="3000"
          controls
          indicators
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333; box-shadow: 0 0 30px rgba(0,0,0,0.9);"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="Take IT Easy обновил меню"
            img-src="https://ontapsportsnetcom.files.wordpress.com/2019/12/applebees_togo_time.jpg?w=1024"
          ></b-carousel-slide>

          <b-carousel-slide
            caption="В Менуа есть возможность заказа из мобильного приложения"
            img-src="https://sun9-7.userapi.com/c854328/v854328257/ead47/9QxK_d9O4Tw.jpg"
          ></b-carousel-slide>

          <b-carousel-slide
            caption="В Toro Russo скидка 10 процентов на напитки"
            img-src="https://sun9-21.userapi.com/AJfxW_T08Ody56rD-BHchuVMoYw35hdlqKfViQ/X2HbYdR6COM.jpg"
          ></b-carousel-slide>

          <b-carousel-slide
            caption="Эллада обновила мясные блюда"
            img-src="https://sun9-46.userapi.com/impf/r5BBTCM_Jy99J0dpMTD7k9beulCaOusz_XtX1A/KMORWUsWhL4.jpg?size=1024x480&quality=96&proxy=1&sign=51207097e3baf2d9f1066ab5c7c331eb&type=share"
          ></b-carousel-slide>

          <b-carousel-slide
            caption="El Sushka проводит мастер-класс"
            img-src="https://digitark.ee/wp-content/uploads/20200103_digitark_whisk_1024x480.jpg"
          ></b-carousel-slide>
        </b-carousel>
      </div>

      <ul class="mainMenu p-0 row">
        <li
          class="cart d-flex flex-wrap justify-content-center align-items-center col-xl-4 col-md-6"
          v-for="(item, i) in allRestaraunts"
          :key="i"
        >
          <b-card
            bg-variant="dark"
            text-variant="white"
            class="text-center m-2"
            style="width: 400px; height: 300px; border-radius: 15px;"
          >
            <b-card-text>
              {{ item.name }}
            </b-card-text>
            <router-link
              class="cart-restaurant"
              :to="{
                name: 'Restarant',
                params: {
                  id: item.id,
                },
              }"
            >
              <b-card-img :src="item.logo" width="300px" height="200px">
              </b-card-img>
            </router-link>
          </b-card>
          <!-- <b-button @click="check()">Раз</b-button> -->
        </li>
      </ul>
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components: {
    Header,
    Footer,
  },
  name: 'Home',
  data() {
    return {
      allRestaraunts: [],
      id: '',
      slide: 0,
      sliding: null,
    }
  },
  created() {
    axios
      .get('https://605b03b727f0050017c05e33.mockapi.io/restaurant/')
      .then((responce) => {
        if (responce.status === 200) {
          this.allRestaraunts = responce.data
        }
      })
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
    check() {
      const list = 'orderList'
      const cart = { v1: 'a1', list: [0, 1, 2, 3] }
      let orderList = []
      try {
        orderList = JSON.parse(localStorage.getItem(list))
      } catch (e) {
        console.log(e)
      }
      debugger //eslint-disable-line
      orderList.push(cart)
      localStorage.setItem(list, JSON.stringify(orderList))
    },
  },
}
</script>

<style scoped>
.itemImg {
  background-size: cover;
  border-radius: 5%;
  width: 100%;
  height: 230px;
}

.name-restaurant {
  text-decoration: none;
  background: #000;
  color: #fff;
}

.cart-restaurant {
  text-decoration: none;
}
</style>
