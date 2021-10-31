<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import SwitchLocale from "ui/components/common/SwitchLocale/index.vue";
import {EXAMPLE} from 'utils/constants'
</script>

<template>
  <main class="app-main">
    <div>
      <router-link to="/">{{ $t("nav.home") }}</router-link>
      |
      <router-link to="/counter">{{ $t("nav.counter") }}</router-link>
    </div>
    ENV:
    <code>
      <pre>
        EXAMPLE={{ EXAMPLE }}
      </pre>
    </code>
    <router-view></router-view>
    <SwitchLocale></SwitchLocale>
  </main>
</template>

<style lang="scss" src="styles/globals/index.scss"></style>
