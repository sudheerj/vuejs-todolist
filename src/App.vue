<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">About</router-link>
    </div>
    <div id="todo-panel">
    <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #736AFF;
    &.router-link-exact-active {
      color: #42b983;
    }
    text-decoration: none;
  }
  border-bottom: 1px solid;
}

#todo-panel {
  width: 100%;
  height: 100%;
  background-color: cornflowerblue;

}
</style>
