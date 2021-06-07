<template>
  <div class="container">
    <h3 class="text-center mt-5">Заказы ресторану</h3>
    <div class="container" v-show="visible">
      <div class="container d-flex align-items-center">
        <ul class="order-list list-unstyled mt-5">
          <li class="mb-2">Номер заказа: {{ getNumberOrder }}</li>
          <li class="mb-2">Ресторан: {{ restaurantOrder }}</li>
          <li class="mb-2" v-for="(item, i) in orderList" :key="i">
            {{
              'Название: ' +
                item.name +
                ' | ' +
                ' Количество: ' +
                item.count +
                ' | ' +
                ' Цена: ' +
                item.price +
                '₽'
            }}
          </li>
          <li class="mb-2">Сумма заказа: {{ totalOrder }}₽</li>
          <li class="mb-2">
            <b-button
              class="get-courier"
              variant="success"
              @click="visible = !visible"
              >{{
                visible ? 'Заказ получен курьером' : 'Отобразить заказ'
              }}</b-button
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- <code> {{ orders }} </code> -->
    <!-- <ul>
      <li v-for="(chack, i) in orderList" :key="i">
        {{ chack }}
      </li>
    </ul> -->
  </div>
</template>

<script>
import Vue from 'vue'
export const eventBus = new Vue()
export default {
  data() {
    return {
      getNumberOrder: 0,
      restaurantOrder: 0,
      totalOrder: 0,
      status: null,
      items: [],
      orders: [],
      orderList: [],
      visible: true,
    }
  },
  created() {
    // setInterval(() => {
    //   console.log('setIterval')
    //   const time = parseInt(Math.random(1000) * 10000)
    //   setTimeout(() => {
    //     console.log('timeout')

    //     orderNumber += 1 //
    //     this.orders.push({
    //       orderNumber: orderNumber,
    //       contact: 'Ivan',
    //       time,
    //     })
    //   }, time)
    // }, 10000)

    this.getNumberOrder = localStorage.getItem('numberOrder')
    this.restaurantOrder = localStorage.getItem('selected')
    this.totalOrder = localStorage.getItem('total')
    this.orderList = JSON.parse(localStorage.getItem('allContent'))
    console.log(typeof this.orderList)
    this.status = this.items.push({
      orderNumber: this.getNumberOrder,
      restaurant: this.restaurantOrder,
      total: this.totalOrder + '₽',
      content: this.orderList,
    })
  },
  methods: {
    seenAlert() {
      alert('Заказ передан курьеру!')
    },
  },
}
</script>

<style scoped>
.order-list {
  font-size: 18px;
  font-weight: 500;
}
.get-courier {
  font-size: 18px;
}
</style>
