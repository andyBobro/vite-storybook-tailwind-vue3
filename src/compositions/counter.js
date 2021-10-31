import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default function useRepositoryNameSearch() {
  const store = useStore('counter')

  return {
    counterValue: computed(() => {
      const { value } = store.state.counter

      return value
    }),
    randcrement: () => store.dispatch('counter/randcrement'),
    increment: () => store.commit('counter/increment')
  }
}