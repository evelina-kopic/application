<template>
  <div class="register-form">
    <h1 class="title text-center pa-6">Register</h1>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="username"
          rules="required"
        >
          <v-text-field
            v-model="username"
            :error-messages="errors"
            label="Username"
            outlined
            clearable
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="password"
          :rules="{
          required : true, 
          regex : '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'
          }"
        >
          <v-text-field
            v-model="password"
            :error-messages="errors"
            label="Password"
            type="password"
            outlined
            clearable
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            outlined
            clearable
            required
          ></v-text-field>
        </validation-provider>

        <v-btn class="mr-4" type="submit" :disabled="invalid"> submit </v-btn>
      </form>
    </validation-observer>

    <br />
    <span class="subtitle pb-3">
      <a @click="$emit('registration')"> Not registered?</a>
    </span>
  </div>
</template>

<script>
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
  message: "The {_field_} must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)",
});
extend("email", {
  ...email,
  message: "Email must be valid",
});
  

export default {
  name: "RegistrationForm",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    username: "",
    email: "",
    password: "",
  }),
  methods: {
    async userRegister() {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.email,
          this.password
        )

      firebase.auth().currentUser.updateProfile({displayName: this.username})
      this.$router.push("/shop");

      return user
    },
    submit() {
      this.$refs.observer.validate();
      this.userRegister();
    },
  },
};
</script>
<codepen-resources lang="json">
  {
    "js": ["https://cdn.jsdelivr.net/npm/vee-validate@3.x/dist/vee-validate.js"]
  }
</codepen-resources>
<style scoped>
.register-form {
  @apply flex flex-col;
  @apply w-80 p-6 rounded-md shadow-lg items-center bg-white;
}
a:hover {
  color: lightcoral;
}
</style>