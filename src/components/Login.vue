<template>
  <div class="login">
    <h1>Registrarse</h1>
    <div class="form">
      <label for>Email</label>
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="Ingresa tu email"
      />
      <label for>Contraseña</label>
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="Ingresa tu contraseña"
      />
      <button type="submit" @click="login">INGRESAR</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      /* form: { */
      email: "",
      password: "" /* }, */,
      /*       currentUser: undefined,
       */
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      /*       if (this.email === "" || this.password === "") {
       */

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          /*           this.currentUser = this.email;
           */ this.$router.push("home");
          alert("Te has registrado con éxito!");
        })
        .catch(() => {
          console.log("Usuario no autenticado");
        });
    },
  },
};
</script>

<style scoped>
.login {
  padding-bottom: 120px;
}
h1 {
  margin: 0;
  color: white;
}
.form {
  background-color: white;
  padding: 40px 40px 60px 40px;
  margin: auto;
  margin: 40px;
  display: inline-flex;
  flex-direction: column;
  flex-wrap: nowrap;
  border-radius: 10px;
}
label {
  color: #2c3e50;
  font-weight: bold;
  font-size: 20px;
}
input {
  width: 200px;
  padding: 10px 20px 10px 10px;
  margin-bottom: 20px;
}
button {
  width: 100px;
  margin: auto;
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  margin-top: 20px;
  letter-spacing: 1px;
}
button:hover {
  background-color: #0fe7a2;
  color: white;
}
</style>
