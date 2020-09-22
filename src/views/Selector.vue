<template>
  <div>
    <label class="form-label" for="#selector">Modulo</label>
    <b-form-select class="select-options" v-model="selected" :options="options"></b-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    name: "Selector",
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Seleccionar modulo' },
          { value: '/itinerarios.html', text: 'Itinerarios' },
          { value: '/reclamos.html', text: 'Reclamos' },
          { value: '/alquilerpasajes.html', text: 'Alquiler de pasajes' },
          { value: { D: '3PO' }, text: 'This is an option with object value' }
        ]
      }
    }
  }
</script>

<style scoped>
    .form-label {
        margin-top: 2rem;
        color: white;
        margin-bottom: 0.5rem;
        &:first-of-type {
            margin-top: 0rem;
            }
        }

</style>