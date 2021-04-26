import axios from 'axios'

const baseURL = `https://605b03b727f0050017c05e33.mockapi.io/`
const api = axios.create({ baseURL })

function loadRestaurantInfo(id) {
  return new Promise((resolve, reject) => {
    api
      .get(`/restaurant/${id}`)
      .then((r) => {
        if (r.status === 200) {
          resolve(r.data)
        }
        reject()
      })
      .catch((e) => {
        console.log(e)
        reject()
      })
  })
}

function loadMenu(restaurantId) {
  return new Promise((resolve, reject) => {
    api
      .get(`/restaurant/${restaurantId}/menu/`)
      .then((r) => {
        if (r.status === 200) {
          resolve(r.data)
        }
        reject()
      })
      .catch((e) => {
        console.log(e)
        reject()
      })
  })
}

function loadGoods(restaurantId, menuId) {
  return new Promise((resolve, reject) => {
    this.loading = true
    api
      .get(`/restaurant/${restaurantId}/menu/${menuId}/goods/`)
      .then((r) => {
        this.loading = false
        if (r.status === 200) {
          resolve(r.data)
          this.goods = r.data
        }
        reject()
      })
      .catch((e) => {
        console.log(e)
        this.loading = false
      })
  })
}

const server = {
  loadRestaurantInfo,
  loadMenu,
  loadGoods,
}
export default server
