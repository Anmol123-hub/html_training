<template>
    <div>
      <h1>{{ title }}</h1>
      <pre>{{ JSON.stringify(heroinfo, null, 1) }}</pre>
      <form>
          <div class="mb-3">
              <label for="htitle" class="form-label">Hero Title</label>
              <input type="text" autocomplete="off" class="form-control" id="htitle" v-model="heroinfo.title">
          </div>
          <div class="mb-3">
              <label for="hfirst" class="form-label">Hero Firstname</label>
              <input type="text" class="form-control" id="hfirst" v-model="heroinfo.firstname">
          </div>
          <div class="mb-3">
              <label for="hlast" class="form-label">Hero Lastname</label>
              <input type="text" class="form-control" id="hlast" v-model="heroinfo.lastname">
          </div>
          <div class="mb-3">
              <label for="hcity" class="form-label">Hero City</label>
              <input type="text" class="form-control" id="hcity" v-model="heroinfo.city">
          </div>
          <div class="mb-3">
              <label for="hpower" class="form-label">Hero Power</label>
              <input type="number" min="0" class="form-control" id="hpower" v-model="heroinfo.power">
          </div>
          <div class="mb-3">
              <label for="htype" class="form-label">Hero Type</label>
              <select v-model="heroinfo.type">
                <option value="" selected>Select Here</option>
                <option value="avenger">Avenger</option>
                <option value="justiceleague">Justice League</option>
                <option value="indic_hero">Indic Hero</option>
              </select>
          </div>
          <div class="mb-3">
              <label for="hcf" class="form-label">Hero Can Fly? </label>
              <input type="checkbox" true-value="Can Fly" false-value="Can't Fly"  id="hcf" v-model="heroinfo.fly">
          </div>
          <div class="mb-3">
              <label for="gender" class="form-label">Hero Can Gender: </label>
              &nbsp;<input type="radio"  id="male" name="gender" v-model="heroinfo.gender" value="Male">
             <label for="male" style="margin-left:5px ;">Male</label>
              <input type="radio" style="margin-left:5px ;"  id="female" name="gender" v-model="heroinfo.gender" value="Female">
              <label for="female" style="margin-left:5px ;">Female</label>
          </div>
        <button type="submit" class="btn btn-warning">Register</button>
      </form>
    </div>
  </template>
   
  <script>
  export default {
  data(){
    return {
      title : "Forms and Data",
      message:'', 
      heroinfo : {
        title : '',
        firstname : '',
        lastname : '',
        city : '',
        power : 0,
        type : '',
        gender:'',
        fly:''
      },
   
    }
  }
  }
  </script>
   
  <style></style>