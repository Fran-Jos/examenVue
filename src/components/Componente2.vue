
<template>
  <table class="table">
    <thead>
      <tr>
        <th class="nombre">Nombre</th>
        <th class="apellido">Apellido</th>
        <th class="edad">Edad</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td class="nombre">{{ item.nombre }}</td>
        <td class="apellido">{{ item.apellido }}</td>
        <td class="edad">{{ item.edad }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          nombre: "Francisco",
          apellido: "Chanataxi",
          edad: 22,
        },
   
      ],
    };
  },
};
</script>

<style>
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.table th {
  text-align: center;
}

.nombre {
  width: 20%;
}

.apellido {
  width: 30%;
}

.edad {
  width: 10%;
}
</style>
