<template>
  
  <div>
    <router-link to="/paginaUno">Página 1</router-link>
    <router-link to="/paginaDos">Página 2</router-link>

  </div>
</template>

<script>
export default {};
</script>

<style>
div a {
  color: rgb(163, 196, 164);
  margin: 0px 10px;
  font-weight: bold;
  border: solid;
  padding: 10px 10px;
  border-radius: 10px;
    background-color: #28a9dc;
}

.router-link-exact-active{
  color: white;
  background-color: #127191;
}
</style>