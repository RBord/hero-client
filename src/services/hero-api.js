import axios from 'axios'

axios.defaults.baseURL = 'https://create-hero-app.herokuapp.com/api'

export async function fetchAllHeroes() {
  return await axios.get('/superheroes').then((res) => res.data.data)
}

export async function fetchHeroById(id) {
  return await axios.get(`/superheroes/${id}`).then((res) => res.data.data)
}

export async function updateHeroInfoById(id, data) {
  return await axios
    .patch(`/superheroes/${id}`, data)
    .then((res) => res.data.data)
}

export async function sendHeroToBase(data) {
  return await axios.post('/superheroes', data).then((res) => res.data.data)
}

export async function deleteHeroById(id) {
  return await axios.delete(`/superheroes/${id}`).then((res) => res.data.data)
}

export async function updateImageOfHero(id, data) {
  return await axios.post(`/images/${id}`, data).then((res) => res.data.data)
}
