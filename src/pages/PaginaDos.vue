<template>
    <div>
        <h1>Pagina Dos</h1>
        <div class="c1">
        <Componente2/>
        </div>
        <div>
        <Componente3/>
         </div>
    </div>
</template>

<script>
import Componente2 from "../components/Componente2.vue";
import Componente3 from "../components/Componente3.vue";

export default {
  components: {
    Componente2,
    Componente3,
  },
};
</script>

<style>
.c1 {
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20%;
}

</style>