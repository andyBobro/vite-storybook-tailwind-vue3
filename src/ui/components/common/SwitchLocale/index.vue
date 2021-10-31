<script setup>
import { useI18n } from "vue-i18n";

const i18n = useI18n();
</script>

<template>
  <div class="switcher">
    <div class="locale" v-for="l in $i18n.availableLocales" :key="l">
      <input type="radio" :value="l" :id="l" v-model="$i18n.locale" />
      <label :for="l">{{ l }}</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.switcher {
  @apply fixed flex flex-col bottom-6 left-6;
}
</style>