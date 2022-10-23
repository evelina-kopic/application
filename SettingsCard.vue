<template>
  <v-container class="settings-container">
    <v-row justify="space-around">
      <v-card width="500" height="500">
        <v-img
          height="200px"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
          class="profile-banner"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        >
          <v-app-bar flat color="rgba(0, 0, 0, 0)"> </v-app-bar>
          <v-card-title class="white--text mt-14">
            <v-row>
              <v-col md="2" sm="2">
                <v-avatar size="56">
                  <img
                    alt="user"
                    :src="profileImgUrl"
                    class="profile-image"
                  />
                </v-avatar>
              </v-col>
              <v-col md="8" sm="8">
                <p class="mt-4">{{username}}</p>
              </v-col>
              <v-col md="2" sm="2" class="float-right pt-8 pl-12">
                <i class="banner-icon">≡</i>
              </v-col>
            </v-row>
          </v-card-title>
        </v-img>
        <div>
          <v-row class="list">
            <v-col md="3">
              <p class="text-3xl ml-8 mb-2 w-full list-item email-text-field">
                Username:
              </p>
            </v-col>
            <v-col md="9">
              <p class="text-md ml-8 w-full my-12 email-text-field">
                {{ username }}
              </p>
            </v-col>
          </v-row>
          <v-row class="list">
            <v-col md="2">
              <p class="text-3xl ml-8 mb-2 w-full list-item email-text-field">
                Email:
              </p>
            </v-col>
            <v-col md="10">
              <p class="text-md ml-8 w-full my-12 email-text-field">
                {{ email }}
              </p>
            </v-col>
          </v-row>
        </div>
        <div class="settings-button">
          <v-btn
            color="red"
            @click="isOpenModal = !isOpenModal"
          >
          Edit Profile
          </v-btn>
        </div>
        <v-card-text class="h2"> </v-card-text>
        <div class="back-button">
          <AppButton
            title="←"
            color="transparent"
            textColor="white"
            path="shop"
          />
        </div>
      </v-card>
    </v-row>
    <EditProfile v-if="isOpenModal" @closeModal="closeModal"/>
  </v-container>
</template>

<script>
import EditProfile from "./EditProfile.vue"
import AppButton from "../AppButton.vue";
import firebase from "../../firebase/index";

export default {
  name: "SettingsCard",
  components: {
    AppButton,
    EditProfile,
  },
  data() {
    return {
      prevRoute: null,
      username: "",
      email: "test@test.test",
      profileImgUrl: "",
      isOpenModal: false,
    };
  },
  mounted() {
    this.setDisplayName();
  },
  methods: {
    async setDisplayName() {
      const user = await firebase.auth.currentUser
      user.updateProfile({photoURL: "https://gravatar.com/avatar/847444795c4d9b946997ace736db7859?s=400&d=robohash&r=x"})
      this.profileImgUrl = user.photoURL
      this.username = user.displayName
      this.email = user.email
    },
    closeModal(){
      this.isOpenModal = false
    }
  },
};
</script>
<style scoped>
.profile-image:hover {
  @apply blur-sm cursor-pointer;
}
.settings-container{
  @apply w-full h-full justify-center items-center flex;
}
.list-item {
  @apply flex flex-1 w-full;
}
.banner-icon:hover {
  @apply cursor-pointer;
}
.list {
  @apply h-16;
}
.list-item {
  @apply font-bold my-12 !important;
}
.settings-button {
  @apply absolute bottom-0 right-0 mb-2 mr-2;
}
.back-button {
  @apply absolute top-0 left-0 mt-2 ml-2;
}
</style>