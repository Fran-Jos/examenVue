<!--<template>
  <div class="token-form">
    <h1>TOKEN</h1>
    <form @submit.prevent="onSubmit">
      <label for="semilla">Semilla</label>
      <text-input id="semilla" v-model="semilla" />
      <label for="tiempo">Tiempo de vigencia</label>
      <text-input id="tiempo" v-model="tiempo" />
      <label for="token">Token</label>
      <text-input id="token" v-model="token" disabled />
      <button type="submit">Generar</button>
    </form>
  </div>
</template>

<script>
export default {
  components: {
    TextInput: {

      props: {
        id: {
          type: String,
          required: true
        },
        value: {
          type: String,
          required: true
        }
      },
      template: `
        <input :id="id" v-model="value">
      `
    }
  },
  data() {
    return {
      semilla: '',
      tiempo: '',
      token: ''
    };
  },
  methods: {
    onSubmit() {
      // Enviar datos al servidor para generar el token
      // ...
      this.token = 'TOKEN_GENERADO'; // Simular la respuesta del servidor
    }
  }
};
</script>

<style scoped>
.token-form {
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
}

h1 {
  font-size: 18px;
  font-weight: bold;
}

label {
  font-size: 16px;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

button {
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>


<template>

    <div class="POST">
      <h2 id="titulo2">TOKEN:</h2>
      <form class="form2" action="">

        <p type="Semilla: "><input v-model="semilla" type="text"  /></p>
        <p type="tiempo de vigencia: "><input v-model="tiempo" type="text" /></p>
        <p type="Token: "><input v-model="token" type="text" /></p>

      </form>
      <button @click="insertar">Generar</button>
   
    </div>

</template>

<script>

import { insertarFachada } from "../assets/helpers/clienteEstudiante.js";
export default {
    data() {
        return {

        semilla: null,
        tiempo: null,
        token: null,

        };
    },
    methods: {
        async insertar() {
            const body = {
                nombre: this.nombreI,
                apellido: this.apellidoI,
                genero: this.generoI,
                fechaNacimiento: this.fechaNacimientoI,
            };
            await insertarFachada(body);
        },
    },
    };


</script>

<style>

</style>

-->
<template>
  <div class="token-form">
    <h2>TOKEN:</h2>
    <form @submit.prevent="onSubmit" class="form2">
      <div class="input-group">
        <label for="semilla">Semilla:</label>
        <input v-model="semilla" type="text" id="semilla" />
      </div>
      <div class="input-group">
        <label for="tiempo">Tiempo de vigencia:</label>
        <input v-model="tiempo" type="text" id="tiempo" />
      </div>
      <div class="input-group">
        <label for="token">Token:</label>
        <input v-model="token" type="text" id="token" disabled />
      </div>
      <button type="submit">Generar</button>
    </form>
  </div>
</template>

<script>
import { insertarFachada } from "../assets/helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      semilla: null,
      tiempo: null,
      token: null,
    };
  },
  methods: {
    async onSubmit() {
      // Send data to server for token generation (replace with actual logic)
      this.token = "GENERATED_TOKEN"; // Simulate server response

      // Insert data using insertarFachada here (assuming it handles token)
      // await insertarFachada({ token: this.token });
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