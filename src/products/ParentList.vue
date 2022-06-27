<template>

  
  <Suspense>
    <template #default>
      
      <productsList />
      
    </template>

    <template #fallback>
      <span>Loading...</span>
    </template>
  </Suspense>
    <router-view/>
</template>



<script>
import productsList from "../products/List.vue"
export default {
    name: 'App',
    components: {
        productsList,
    },
}
</script>

<style>
</style>
