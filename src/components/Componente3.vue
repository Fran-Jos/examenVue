
<template>
  <div class="token-form">
    <h2>ESTUDIANTE</h2>
    <form @submit.prevent="onSubmit" class="form2">
      <div class="input-group">
        <label for="token">Token:</label>
        <input v-model="token" type="text" id="token" disabled />
      </div>
      <div class="input-group">
        <label for="nombre">Nombre:</label>
        <input v-model="nombre" type="text" id="nombre" />
      </div>
      <div class="input-group">
        <label for="apellido">Apellido:</label>
        <input v-model="apellido" type="text" id="apellido" />
      </div>
      <div class="input-group">
        <label for="cedula">Cédula:</label>
        <input v-model="cedula" type="text" id="cedula" />
      </div>
      <button @click="insertar">Guardar</button>
    </form>
  </div>
</template>

<script>
import { insertarFachada } from "../assets/helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      nombre: null,
      apellido: null,
      cedula: null,
      token: null,
    };
  },
  methods: {
   async insertar() {
            const body = {
                nombre: this.nombre,
                apellido: this.apellido,
                cedula: this.cedula,
                
            };
            await insertarFachada(body);
        },
  },
};
</script>

<style scoped>
.token-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
}

h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.form2 {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.input-group {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.input-group label {
  font-size: 16px;
  margin-right: 10px;
  width: 100%; /* Adjust width as needed for different label lengths */
}

input,
button {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
</style>