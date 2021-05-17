<template>
  <div class="container">
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          Номер_заказа: 40,
          Ресторан: 'Toro-Russo',
          Имя_получателя: 'Кирилл',
          Телефон: '8(987)-664-55-12',
          Адрес: 'Улица Петрова, дом 8, кв.45',
        },
      ],
    }
  },
}
</script>

<style></style>
