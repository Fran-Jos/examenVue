<template>
  <img alt="Vue logo" src="./assets/logo.png">


  <NavBar/>
  <h1>Examen Programación Web</h1>
  <router-view/>
 
</template>

<script>
import NavBar from '../src/components/NavBar.vue'


export default {
  name: 'App',
  components: {
  
   NavBar
  }
}
</script>

<style>

</style>
