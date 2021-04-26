<template>
  <div class="container">
    <b-table striped hover :items="items"></b-table>
    <code> {{ orders }} </code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getNumberOrder: 0,
      items: [],
      orders: [],
    }
  },
  created() {
    let orderNumber = 1
    setInterval(() => {
      console.log('setIterval')
      const time = parseInt(Math.random(1000) * 1000)
      setTimeout(() => {
        console.log('timeout')

        orderNumber += 1 //
        this.orders.push({
          orderNumber: orderNumber,
          contact: 'Ivan',
          time,
        })
      }, time)
    }, 1000)
    this.getNumberOrder = localStorage.getItem('numberOrder')
    this.items.push({
      orderNumber: 0,
      restaurant: 'Toro-Russo',
      content: 'Dickerson',
      name: 'Mcdonald',
    })
  },
}
</script>

<style></style>
