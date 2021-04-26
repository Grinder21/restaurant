<template>
  <div class="home">
    <Header />
    <main class="container">
      <h3 class="text-center mt-5 mb-5">Рестораны города Чебоксары</h3>
      <div class="mb-5 mt-3">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="2000"
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
            caption="Первый ресторан"
            text="Описание ресторана."
            img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>

          <b-carousel-slide
            caption="Первый ресторан"
            text="Описание ресторана."
            img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>

          <b-carousel-slide
            caption="Первый ресторан"
            text="Описание ресторана."
            img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>
        </b-carousel>
      </div>

      <ul class="mainMenu p-0 row">
        <li
          class="cart d-flex flex-wrap justify-content-center align-items-center col-xl-4 col-md-6"
          v-for="(item, i) in allRestaraunts"
          :key="i"
        >
          <router-link
            class="cart-restaurant"
            :to="{
              name: 'Restarant',
              params: {
                id: item.id,
              },
            }"
          >
            <!-- {{ item.address }} -->
            <img class="itemImg" :src="item.logo" />
            <div class="name-restaurant text-center mt-3 mb-3">
              {{ item.name }}
            </div>
          </router-link>
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
