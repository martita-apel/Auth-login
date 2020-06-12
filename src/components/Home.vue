<template>
  <div class="hello">
    <h1>
      Bienvenidos <br />
      a la página principal
    </h1>
    <hr />
    <h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nulla
      officiis maiores, aspernatur vitae, libero odio quibusdam fuga architecto
      odit mollitia voluptas. Ducimus voluptates accusamus repellendus
      voluptate! Dolorem, perferendis tempore?
    </h2>
    <button type="submit" @click="logout">CERRAR SESIÓN</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
  methods: {
    logout() {
      /*       let user = firebase.auth().currentUser;
       */ firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("login");
        });
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 80px;
  padding: 0 20px 40px 20px;
  margin: 0;
  line-height: 85px;
}
hr {
  border: 2px solid #e3f5ef;
  margin: 0 30px;
  width: 80%;
  margin: auto;
}
h2 {
  margin: 20px 120px 0 120px;
  padding: 30px 0 20px 0;
}
button {
  width: 150px;
  margin: auto;
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  margin: 20px 0 70px 0;
  letter-spacing: 1px;
}
button:hover {
  background-color: #0fe7a2;
  color: #2c3e50;
}
</style>
