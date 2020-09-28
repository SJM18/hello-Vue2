<template>
  <div id="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    Helló {{ Msg }}
    <md-button
      class="md-raised md-primary"
      :md-ripple="true"
      @click="Msg = 'alma'"
      >Kombájn</md-button
    >
  </div>
</template>

<script  lang="ts" src="./Home.ts">
</script>

<style scoped>
</style>