<template>
  <div class="head">
    <h1>User Management</h1>
    <router-link to="/Products/add" class="btn btn-outline-warning ">Add new Product</router-link>
  </div>
  <br><br>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">User Name</th>
        <th scope="col">Email</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>@mdo</td>
        <td>Otto</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>@fat</td>
        <td>Thornton</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>David</td>
        <td>@twitter</td>
        <td>Larry the bird</td>
      </tr>
    </tbody>
  </table>

  <router-view/>
</template>

<script>
// @ is an alias to /src


export default {

  components: {

  }
}
</script>

<style scoped>
.head {
  flex-direction: column;
  margin-bottom: 20px;
}

.head h1 {
  color: lightskyblue;  
}

</style>
