<template>

  
  <Suspense>
    <template #default>
      
      <productsEdit />
      
    </template>

    <template #fallback>
      <span>Loading...</span>
    </template>
  </Suspense>
    <router-view/>
</template>



<script>
import productsEdit from "../products/EditForm.vue"

export default {

    components: {
        productsEdit,
    },
}
</script>

<style>
</style>
