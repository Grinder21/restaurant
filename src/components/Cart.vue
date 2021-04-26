<template>
  <div>
    <div>
      <main>
        <ul>
          <li v-for="(good, i) in items" :key="i">
            {{ good }} <button @click="deleteGoodCart(item)">Удалить</button>
          </li>
        </ul>
        <div>{{ result }}</div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [], // {goodId: , name: '', count: 1, price: 11}
      name: '',
      address: '',
      phone: '',
      total: 0,
      result: 0,
    }
  },

  created() {
    this.$bus.on('add-cart', this.addCart)

    // this.total = this.items.reduce()
  },

  methods: {
    addCart(item) {
      this.items.push(item)
      // console.log(`cart: ${JSON.stringify(this.$data)}`)
      this.$bus.emit('count-cart', this.items.length)
      this.result = this.items.reduce((accumulator, el) => {
        return (accumulator += +el.price * +el.count)
      }, 0)
      this.$bus.$emit('change-cart', this.items)
    },
    deleteGoodCart(item) {
      this.items.splice(item, 1)
    },
  },
}
</script>

<style></style>
