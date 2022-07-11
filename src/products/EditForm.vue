<template>
  <div id="updateNotice"></div>
  
  <h3>Edit Product</h3>
  <form @submit.prevent="onsubmit">
    <div class="form-group">
        <label for="exampleFormControlInput1">Product name</label>
        <input v-model="quiz.name" type="text" @blur="onblur()" 
        class="form-control" id="exampleFormControlInput1" placeholder="Product name"
        :class="{'is-invalid': errors.name, 'is-valid': success.name} ">

        <div v-if="errors.name == true" class="invalid-feedback" >
            Product's name must contains 6-20 character
        </div>
        <div v-else-if="success.name == true" class="valid-feedback">
            Looks good!
        </div>
    </div>

    <div class="form-group">
        <label for="exampleFormControlInput2">Price</label>
        <input v-model="quiz.price" type="text" @blur="onblur()" 
        class="form-control" id="exampleFormControlInput2" placeholder="Product price"
         :class="{'is-invalid': errors.price, 'is-valid': success.price} ">

        <div v-if="errors.price == true" class="invalid-feedback" >
            Please provide valid price number
        </div>
        <div v-else-if="success.price == true" class="valid-feedback">
            Looks good!
        </div>

    </div>

    <div class="form-group">
        <label for="exampleFormControlTextarea1">Description</label>
        <textarea v-model="quiz.description" @blur="onblur()" 
        class="form-control" id="exampleFormControlTextarea1" rows="3"
         :class="{'is-invalid': errors.description, 'is-valid': success.description} ">></textarea>

        <div v-if="errors.description == true" class="invalid-feedback" >
            Product description must require
        </div>
        <div v-else-if="success.description == true" class="valid-feedback">
            Looks good!
        </div>
    
    </div>
    
    <button type="submit" class="btn btn-primary">Save</button> &nbsp;
    <router-link to="/" class="btn btn-danger">Back</router-link>
  </form>

</template>

<script>
$('.alert').alert()
import {useRoute} from "vue-router"
import {getProduct, updateProduct} from '@/firebase'
import {reactive, ref} from 'vue'

export default {
  setup() {
    const route = useRoute();

    let form = reactive({name: "", price: "", description: ""})

    let quiz = reactive({
        name: "",
        price: "",
        description: ""
    })

    let errors = reactive({
        name: false,
        price: false,
        description: false,
    });

    let success = reactive({
        name: false,
        price: false,
        description: false,
    });

    const setDefault = () => {
      // quiz.name =  ""
      // quiz.price = ""
      // quiz.description = ""

      errors.name = false;
      errors.price = false;
      errors.description = false;

      success.name = false;
      success.price = false;
      success.description = false;
    }

    const validate = () => {

        if(quiz.name.length < 6 || quiz.name.length > 20){
            errors.name = true;
            success.name = false;
        }
        else if(quiz.name.length > 5 && quiz.name.length < 21){
            errors.name = false;
            success.name = true;
        }
  
        // console.log(this.quiz.price);
        if(/^\d{1,}$/.test(quiz.price)){
          errors.price = false;
          success.price = true; 
        }
        else {
          errors.price = true;
          success.price = false;
        }
  
        if(/^.{1,}$/.test(quiz.description)){
          errors.description = false;
          success.description = true; 
        }
        else {
          errors.description = true;
          success.description = false;
        }
    }

    const onblur = () => {
      validate();
    }


    let data = ref(null)
    let tmp = ref(null)
    let isUpdated = false
    const asyncFunc = async() => {
      tmp.value = await getProduct(route.params.id);
      quiz.name = tmp.value.name;
      quiz.price = tmp.value.price;
      quiz.description = tmp.value.description

      return tmp
    }

    asyncFunc().
      then((result) => {
        data.value = result.value
        console.log(data.value)
    })


    const onsubmit = () => {
      validate();
      form.name = quiz.name;
      form.price = quiz.price;
      form.description = quiz.description;
      console.log(form);
      if(errors.name == false && errors.price == false && errors.description == false){
        updateProduct(route.params.id, form)
        isUpdated = true
        setDefault()

        const div = document.getElementById("updateNotice")
        div.innerHTML = `
          <div class="alert alert-success" role="alert">
            Update product successfully !
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        `
      }
    }
    
    return { quiz, errors, success, validate, onsubmit, onblur, data, isUpdated };
  }
}


</script>
