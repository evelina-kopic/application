<template>
  <div class="auth-div">
    <LoginForm @registration="changeForm" v-if="isLoginForm" />
    <RegistrationForm @registration="changeForm" v-if="!isLoginForm" />
  </div>
</template>

<script>
import LoginForm from "../components/authentication/LoginForm.vue";
import RegistrationForm from "../components/authentication/RegistrationForm.vue";
import firebase from "../firebase/index";

export default {
  name: "Auth",
  components: {
    LoginForm,
    RegistrationForm,
  },
  data() {
    return {
      isLoginForm: true,
    };
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    changeForm() {
      this.isLoginForm = !this.isLoginForm;
    },
    async getUserData() {
      const user = await firebase.auth.currentUser;
      console.log(user)
      if (user !== null) {
        this.$router.push("/shop");
      }
    },
  },
};
</script>
<style scoped>
.auth-div {
  @apply w-full h-full flex flex-col justify-center items-center bg-orange-500;
}
</style>
