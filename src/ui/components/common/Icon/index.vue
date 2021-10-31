<script>
import sprite from "assets/icons/sprite";

export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    icon() {
      return sprite[this.name];
    },
  },
};
</script>

<template>
  <i v-bind="{ ...$attrs, ...$props }" v-html="icon" />
</template>