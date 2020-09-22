import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH = "https://ssoia.herokuapp.com/";

export default {
  setUserLogged(userLogged) {
    Cookies.set("userLogged", userLogged);
  },
  setJwt(token) {
    Cookies.set("jwt", token);
  },
  getUserLogged() {
    return Cookies.get("userLogged");
  },
  register(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "regiser", user);
  },
  login(username, password) {
    let config = {
      headers: {
        'x-api-key': 'AB3987D8D64FC2E892'
      }
    }
    const user = { username, password };
    return axios.post(ENDPOINT_PATH + "Login", user, config);
  },

  loginCallback(usuario, password, tenant) {
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    const formData = new FormData();
    formData.append('usuario',usuario);
    formData.append('password',password);
    formData.append('tenant',tenant);
    //const datosLogin = { usuario, password, tenant };
    return axios.post(ENDPOINT_PATH + "LoginCallback", formData, config);
  }
};
