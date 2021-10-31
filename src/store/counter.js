import api from 'utils/api'

export default {
  namespaced: true,
  state: () =>({
    value: 0
  }),
  getters: {
    counterValue (state) {
      return state.value
    }
  },
  mutations: {
    increment (state) {
      state.value ++
    },
    setRandcremented (state, payload) {
      state.value += payload
    }
  },
  actions: {
    async randcrement ({commit}) {  
      const rnd = await api.fake.utils.random.number.get()

      commit('setRandcremented', rnd)
    }
  }
}