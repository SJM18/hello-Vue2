<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="overlap" class="app-container">
      <md-app-toolbar class="md-primary md-large">
        <div class="md-toolbar-row">
          <md-button
            class="md-icon-button"
            @click="menuVisibility = !menuVisibility"
          >
            <md-icon>menu</md-icon>
          </md-button>

          <span class="md-title">My Title</span>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisibility">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list-item to="/" @click="menuVisibility = !menuVisibility">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item href="https://google.com" target="_blank">
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item to="/about" @click="menuVisibility = !menuVisibility">
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="app-content">
        <router-view />

      </md-app-content>
    </md-app>
  </div>
</template>

<script lang="ts" src="./App.ts">

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.page-container > .app-container
{
  height: 100vh;
}
</style>
