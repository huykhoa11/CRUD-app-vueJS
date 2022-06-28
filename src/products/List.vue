<template>
  <div class="head">
    <h1> Products List</h1>
    <router-link to="/products/add" class="btn btn-warning ">Add Product</router-link>
  </div>
  <br><br>
  <!-- <p>{{ data }}</p> -->
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Product Name</th>
        <th scope="col">Price</th>
        <th scope="col">Description</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr  v-for="(d, index) in data" :key="d.id">
        <th scope="row">{{ index+1 }}</th>
        <td>{{d.name}}</td>
        <td>{{d.price}}</td>
        <td>{{d.description}}</td>
        <td><router-link :to="{name: 'productsEdit', params: {id: d.id},}" class="btn btn-info ">Edit</router-link>
            <button @click="delBtn(d.id)" class="btn btn-danger">Delete</button></td>
      </tr>

    </tbody>
  </table>


  <router-view/>
</template>

<script>
import {useLoadProducts, deleteProduct} from '@/firebase'
import {ref, reactive} from 'vue'

export default {
  name: 'productsList',
  async setup() {
    const data = ref(null)
    data.value = await useLoadProducts();
  
    return { data }
  },

  methods: {
    delBtn: function(id) {
      deleteProduct(id)
      window.location.href = "/"
    }
  },
  
}
</script>



<style scoped>
.head {
  flex-direction: column;
  margin-bottom: 20px;
}

.head h1 {
  color: crimson;  
}

</style>
