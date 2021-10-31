<script setup>
defineProps({
  msg: String,
});
</script>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";

export const name = "Counter";

export default {
  computed: {
    ...mapGetters("counter", [["counterValue"]]),
  },
  methods: {
    ...mapActions("counter", ["randcrement"]),
    ...mapMutations("counter", ["increment"]),
  },
};
</script>

<template>
  <h1>{{ msg }}</h1>

  {{ counterValue }}

  <button type="button" @click="increment">increment</button>
  <button type="button" @click="randcrement">randcrement</button>
</template>

<style lang="scss" scoped>
a {
  color: #42b983;
  &:after {
    content: " >";
  }
}

button {
  @apply p-3 bg-yellow-700 mr-2 ml-2;
}
</style>
