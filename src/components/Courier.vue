<template>
  <div class="container">
    <h3 class="text-center mt-5">Заказы от ресторанов</h3>
    <div v-show="visible">
      <ul class="list-unstyled mt-5 list">
        <li class="mb-2">Номер заказа: {{ getNumberOrder }}</li>
        <li class="mb-2">Название ресторана: {{ restaurantOrder }}</li>
        <li class="mb-2">Адрес доставки: {{ addressClient }}</li>
        <li class="mb-2">Имя получателя: {{ nameClient }}</li>
        <li class="mb-2">Номер телефона получателя: {{ phoneClient }}</li>
        <li class="mb-2">Сумма: {{ totalCheck }}₽</li>
        <li class="mb-2">
          <b-button
            class="success-courier"
            variant="success"
            @click="visible = !visible"
            >{{ visible ? 'Заказ выполнен' : 'Заказ выдан' }}</b-button
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      visible: true,
    }
  },
  created() {
    this.getNumberOrder = localStorage.getItem('numberOrder')
    this.restaurantOrder = localStorage.getItem('selected')
    this.totalOrder = localStorage.getItem('total')
    this.addressClient = localStorage.getItem('address')
    this.nameClient = localStorage.getItem('name')
    this.phoneClient = localStorage.getItem('phone')
    this.totalCheck = localStorage.getItem('total')
  },
}
</script>

<style scoped>
.list {
  font-size: 18px;
  font-weight: 500;
}
.success-courier {
  font-size: 18px;
  margin-top: 20px;
}
</style>
