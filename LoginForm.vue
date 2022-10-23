<template>
  <form class="login-form" @submit.prevent="submit">
    <h1 class="title text-center pa-6">Login</h1>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <validation-provider
        v-slot="{ errors }"
        name="email"
        rules="required|email"
      >
        <v-text-field
          v-model="loginEmail"
          :error-messages="errors"
          label="E-mail"
          outlined
          clearable
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="password"
        :rules="{
          required: true,
          regex:
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})',
        }"
      >
        <v-text-field
          v-model="loginPassword"
          :error-messages="errors"
          label="Password"
          type="password"
          outlined
          clearable
          required
        ></v-text-field>
      </validation-provider>

      <v-btn class="w-full" type="submit" :disabled="invalid"> submit </v-btn>
    </validation-observer>
    <br />
    <span class="subtitle pb-3">
      <a @click="$emit('registration')"> Not registered?</a>
    </span>
  </form>
</template>

<script>
import AppButton from "../AppButton.vue";
import firebase from "firebase/compat/app";
import { required, email, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});
extend("regex", {
  ...regex,
  message:
    "The {_field_} must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)",
});
extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  name: "LoginForm",
  components: {
    ValidationProvider,
    ValidationObserver,
    AppButton,
  },
  data() {
    return {
      loginEmail: null,
      loginPassword: null,
    };
  },
  methods: {
    async userLogin() {
      debugger;
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(this.loginEmail, this.loginPassword);
        if(user){
          this.$router.push('/shop')
        }else{
          alert("Invaild credentials or user does not exist");
        }
      
    },

    submit() {
      this.$refs.observer.validate();
      this.userLogin();
    },
  },
};
</script>
<style scoped>
.login-form {
  @apply flex flex-col justify-center;
  @apply w-80 p-6 rounded-md shadow-lg items-center bg-white;
}
a:hover {
  color: lightcoral;
}
</style>