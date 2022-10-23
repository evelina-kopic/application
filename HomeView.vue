<template>
  <div class="home-div">
    <v-row class="rowrow">
      <v-col md="2" class="nav-col-1">
        <NavMenu />
      </v-col>
      <v-col md="3" class="nav-col-2">
        <v-sheet class="logo-div-circle">
          <v-sheet class="logo-div-circle-circle">
            <v-img src="../assets/scooter.png" class="logo-img" />
          </v-sheet>
        </v-sheet>
      </v-col>
      <v-col md="7" class="nav-col-3">
        <h1 class="home-h1">Home</h1>
        <p class="home-p">Welcome to our website</p>
        <p class="home-p">Here you can purchase one of our finest scooters online and make them delivered to your address</p>
        <p class="home-p">By clicking on products button you will be navigated to our products page</p>
        <AppButton class="mt-2" title="Products" color="red" path="/auth"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NavMenu from "../components/NavMenu";
import AppButton from "../components/AppButton"

export default {
  name: "Home",

  components: {
    NavMenu,
    AppButton,
  },
};
</script>
<style scoped>
.home-div {
  @apply h-full w-full absolute;
}
.logo-div-circle {
  @apply -ml-64 pt-20 shadow-2xl;
  width: 33rem;
  height: 33rem;
  @apply rounded-full  border-black bg-amber-300;
}
.logo-div-circle-circle {
  @apply ml-32 top-48 w-64 h-64 shadow-2xl;
  @apply rounded-full  border-black bg-amber-200;
}
.logo-img {
  @apply w-32 mt-14 ml-20 top-14 ;
}
.rowrow {
  @apply h-full;
}
.nav-col-1 {
  @apply shadow-2xl;
  @apply bg-amber-400 z-20 flex flex-col items-center justify-center;
}
.nav-col-2 {
  @apply bg-orange-500 z-10 flex flex-col justify-center;
}
.nav-col-3 {
  @apply bg-orange-500 z-10 flex flex-col justify-center items-center;
}
.home-h1{
  @apply mt-12 text-3xl text-center; 
}
.home-p{
  @apply mt-12 text-xl text-center; 
}
</style>
