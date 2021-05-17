<template>
  <div class="container">
    <b-table striped hover :items="items"></b-table>
    <b-button>Вызвать курьера</b-button>
    <!-- <code> {{ orders }} </code> -->
    <ul>
      <li v-for="(chack, i) in orderList" :key="i">
        {{ chack }}
      </li>
    </ul>
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
    this.orderList = localStorage.getItem('allContent')
    this.status = this.items.push({
      orderNumber: this.getNumberOrder,
      restaurant: this.restaurantOrder,
      total: this.totalOrder + '₽',
      content: this.orderList,
    })
  },
}
</script>

<style></style>
