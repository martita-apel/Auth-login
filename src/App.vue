<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link>|
      <router-link to="/login">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e3f5ef;
  background-color: #008d60;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #e3f5ef;
    padding-right: 5px;

    &.router-link-exact-active {
      color: #0fe7a2;
    }
  }
}
</style>
