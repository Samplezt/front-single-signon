<template>
  <div class="login">
    <h1 class="title">Login</h1>
    <form class="form" action="https://ssoia.herokuapp.com/LoginCallback" method="post">
      <label class="form-label" for="#username">Usuario</label>
      <input
        type="text"
        name="usuario"
        v-model="username"
        class="form-input"
        id="username"
        required
        placeholder="Usuario"
      >
      <label class="form-label" for="#password">Password</label>
      <input
        v-model="password"
        name="password"
        class="form-input"
        type="password"
        id="password"
        placeholder="Contraseña"
      >
      <div class="selector">
        <label class="form-label" for="#selector">Modulo</label>
        <b-form-select class="select-options" v-model="selected" :options="options"></b-form-select>
        <input type="hidden" name="tenant" class="form-control" :value="selected">
      </div>
      <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
      <input class="form-submit" type="submit" value="Login">
    </form>
  </div>
</template>

<script>
import auth from "@/logic/auth";
export default {
  data: () => ({
    username: "",
    password: "",
    error: false,
    selected: null,
        options: [
          { value: null, text: 'Seleccionar modulo' },
          { value: 'AlquileresAutos', text: 'Alquiler de autos' },
          { value: 'VentaPasajes', text: 'Venta de pasajes' },
          { value: 'ManejoItinerarios', text: 'Itinerarios' },
          { value: 'Reclamos', text: 'Reclamos' },
          { value: 'DEMO', text: 'DEMO'}
        ]
  }),
  methods: {
    async login() {
      try {
        auth.loginCallback(this.username, this.password, this.selected);
        //const token = response.data.token;
        //const user = {
        //  username: this.username
        //};
        //auth.setUserLogged(user);
        //auth.setJwt(token)
        //this.$router.push("/");
      } catch (error) {
        console.log(this.selected);
        console.log(error);
        this.error = true;
      }
    }
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
