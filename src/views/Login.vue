
<template>

  <div class="login">
    <h1 class="title"><b-icon icon="cursor-fill" shift-h="-7" shift-v="12"></b-icon> Login {{tenantTitle}}</h1>
    <form class="form" action="https://ssoia.herokuapp.com/LoginCallback" method="post">
      <label class="form-label" for="#username">
        <b-icon icon="person-fill" shift-h="-5"></b-icon>Usuario</label>
      <input
        type="text"
        name="usuario"
        v-model="username"
        class="form-input"
        id="username"
        required
        placeholder="Usuario"
      >
      <label class="form-label" for="#password">
        <b-icon icon="lock-fill" shift-h="-5"></b-icon>Contraseña</label>
      <input
        v-model="password"
        name="password"
        class="form-input"
        type="password"
        id="password"
        required
        placeholder="Contraseña"
      >
      <div class="selector">
        <input type="hidden" name="tenant" class="form-control" :value="$route.query.tenant || $route.query.TENANT">
      </div>
      <p v-if="error" class="error"><b>Usuario y/o contraseña incorrecta.</b></p>
      <input class="form-submit" type="submit" value="Login">
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: "",
    error: false,
    tenantTitle: ""
  }),
  mounted: function () {
    this.$nextTick(function () {
      if (this.$route.query.ERROR) {
        this.error = true;
      }
      switch (this.$route.query.tenant || this.$route.query.TENANT) {
        case 'Reclamos':
          this.tenantTitle = "Reclamos";
          break;
        case 'VentaPasajes':
          this.tenantTitle = "Venta de Pasajes";
          break;
        case 'ManejoItinerarios':
          this.tenantTitle = "Manejo de Itinerarios";
          break;
        case 'AlquileresAutos':
          this.tenantTitle = "Alquileres de Autos";
          break;
        default:
          this.tenantTitle="";
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
  color: white;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 1rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  border-radius: 10px;
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}

.selector {
  margin-top: 1rem;
}

.error {
  margin: 1rem 0 0;
  color: #fd0000;
}
.msg {
  margin-top: 3rem;
  text-align: center;
}
</style>
