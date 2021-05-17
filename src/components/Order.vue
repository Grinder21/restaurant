<template>
  <div>
    <Header />
    <h3 class="text-center mt-3 mb-3">Размещение заказа</h3>
    <div class="container col-md-6 justify-content-center align-items-center">
      <form action="" id="app" @submit="checkForm" novalidate="true">
        <div v-if="errors.length">
          <b>Пожалуйста, исправьте указанные ошибки:</b>
          <ul>
            <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
          </ul>
        </div>
        <h4>Номер заказа: {{ orderNumber }}</h4>
        <p>
          <label for="name">Имя</label><br />
          <input
            class="w-100"
            id="name"
            v-model="name"
            name="name"
            type="text"
          />
        </p>
        <p>
          <label for="phone">Номер телефона</label><br />
          <input
            class="w-100"
            type="text"
            v-model="phone"
            id="phone"
            name="phone"
          />
        </p>
        <p>
          <label for="email">Email</label><br />
          <input
            class="w-100"
            type="email"
            v-model="email"
            id="email"
            name="email"
          />
        </p>
        <p>
          <label for="address">Адрес</label><br />
          <input
            class="w-100"
            type="text"
            v-model="address"
            id="address"
            name="address"
          />
        </p>
        <div>
          <p>Ресторан</p>
          <b-form-select
            v-model="selected"
            :options="options"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-select>
          <div class="mt-3">
            Выбран ресторан: <strong>{{ selected }}</strong>
          </div>
        </div>
        <ul class="list-group mt-3 mb-3">
          <li
            class="list-group-item bg-secondary text-white"
            v-for="(item, i) in cartItem"
            :key="i"
          >
            <p>Название: {{ item.name }}</p>
            <p>Количество: {{ item.count }}</p>
            <p>Цена: {{ item.price }}₽</p>
          </li>
          <li class="list-group-item bg-dark text-light">
            Сумма заказа: {{ localValue }}₽
          </li>
        </ul>
        <p>
          <b-button type="submit" variant="success" @click="sendData()"
            >Отправить заказ</b-button
          >
        </p>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Vue from 'vue'
export const eventBus = new Vue()
export default {
  data() {
    return {
      orderNumber: 0,
      localValue: 0,
      errors: [],
      name: null,
      address: null,
      email: null,
      phone: null,
      selected: 'Toro Russo',
      options: [
        { item: 'Toro Russo', name: 'Toro Russo' },
        { item: 'Россия', name: 'Россия' },
        { item: 'Менуа', name: 'Менуа' },
        { item: 'Take IT Easy', name: 'Take IT Easy' },
        { item: 'Эллада', name: 'Эллада' },
        { item: 'El Sushka', name: 'El Sushka' },
        { item: 'Vertel', name: 'Vertel' },
        { item: 'Al Dente', name: 'Al Dente' },
        { item: 'Шашлычный дворик', name: 'Шашлычный дворик' },
        { item: 'Sharden', name: 'Sharden' },
        { item: 'ПАРК-ОТЕЛЬ Усадьба', name: 'ПАРК-ОТЕЛЬ Усадьба' },
        { item: 'Невинные шалости', name: 'Невинные шалости' },
        { item: 'Carlsson', name: 'Carlsson' },
        { item: 'БАККАРА Холл', name: 'БАККАРА Холл' },
        { item: 'Рица', name: 'Рица' },
      ],
    }
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    payOrder() {
      alert('Оплата успешно завершена!')
      setTimeout(() => {
        window.location.href = '/'
      }, 1000)
    },
    checkForm: function(e) {
      if (this.name && this.phone && this.address) {
        return true
      }
      this.errors = []
      if (!this.name) {
        this.errors.push('Требуется указать имя!')
      }
      if (!this.phone) {
        this.errors.push('Требуется указать номер телефона!')
      }
      if (!this.address) {
        this.errors.push('Требуется указать адрес доставки!')
      }
      if (!this.mail) {
        this.errors.push('Требуется указать email!')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Укажите корректный адрес электронной почты!')
      }
      e.preventDefault()
    },
    sendData() {
      localStorage.setItem('phone', this.phone)
      localStorage.setItem('address', this.address)
      localStorage.setItem('name', this.name)
      localStorage.setItem('selected', this.selected)
      localStorage.setItem('counterBasket', 0)
    },
    validEmail: function(email) {
      let check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return check.test(email)
    },
  },
  created() {
    this.orderNumber = Math.ceil(Math.random() * 1000000000)
    localStorage.setItem('numberOrder', this.orderNumber)
    this.cartItem = this.$attrs.cartItem
    this.total = this.$attrs.total
    this.menu = this.$attrs.menu
    this.localValue = localStorage.getItem('total')
    eventBus.$on('getNameRestaurant', (e) => {
      console.log(e)
    })
    eventBus.$on('goToOrder', this.cartItem, this.total)
  },
}
</script>
<style scoped></style>
