<template>
  <div id="nav">
      <router-link to="/">Products Management</router-link> |
      <router-link to="/users">Users Management</router-link>
  </div>
  <router-view/>
  <!-- <Suspense>
    <template #default>
      
      <productsList />
      
    </template>

    <template #fallback>
      <span>Loading...</span>
    </template>
  </Suspense> -->

</template>



<script>
// import productsList from "./products/List.vue"
export default {
  name: 'App',
  components: {
    // productsList,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
