<template>
  <div class="edit-profile-modal mx-5">
    <v-card class="edit-card">
      <div class="back-button">
        <v-btn color="transparent" path="#" @click="$emit('closeModal')"
          >←</v-btn
        >
      </div>
      <h1 class="title text-center pa-6">Edit profile</h1>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="submit">
          <validation-provider v-slot="{ errors }" name="username">
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
              regex:
                '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})',
            }"
          >
            <v-text-field
              v-model="password"
              :error-messages="errors"
              label="Password"
              type="password"
              max-width="100"
              outlined
              clearable
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider v-slot="{ errors }" name="email" rules="email">
            <v-text-field
              v-model="email"
              :error-messages="errors"
              label="E-mail"
              outlined
              clearable
              required
            ></v-text-field>
          </validation-provider>
          <v-file-input
            truncate-length="15"
            placeholder="Update profile picture"
            @change="profilePicture"
          ></v-file-input>

          <v-btn
            class="update-profile-submit-button"
            type="submit"
            :disabled="invalid"
          >
            update profile
          </v-btn>
          <v-btn
            class="update-profile-submit-button mt-3"
            @click="$emit('closeModal')"
            >close</v-btn
          >
        </form>
      </validation-observer>
    </v-card>
  </div>
</template>

<script>
import firebase from "../../firebase/index";

import AppButton from "../AppButton.vue";
import { required, email, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

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
  name: "EditProfile",
  components: {
    ValidationProvider,
    ValidationObserver,
    AppButton,
  },
  data() {
    return {
      username: null,
      email: null,
      password: null,
      profilePicture: [
        (uploadValue = null),
        (image = null),
        (imageData = null),
      ],
      pictureUploadValue: 0,
    };
  },
  methods: {
    async updateUserProfile() {},
    submit() {
      this.$refs.observer.validate();
      this.updateProfileData();
      this.$emit("closeModal");
    },
    async updateProfileData() {
      const user = await firebase.auth.currentUser;
      await user.updateEmail(this.email);
      await user.updatePassword(this.password);
      this.uploadPicture();
      await user.updateProfile({
        displayName: this.username,
        photoURL: this.profilePicture,
      });
      console.log("UPDATED USER", user);
    },
    previewImage(event) {
      this.profilePicture.uploadValue = 0;
      this.profilePicture.image = null;
      this.profilePicture.imageData = event.target.files[0];
      this.uploadPicture();
    },
    async uploadPicture() {
      const storageRef = await firebase.storage
        .ref(`${this.profilePicture.imageData.name}`)
        .put(this.profilePicture.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.profilePicture.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.profilePicture.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.profilePicture.imageData = url;
          });
        }
      );
    },
  },
};
</script>

<style scoped>
.edit-profile-modal {
  @apply absolute w-full h-full flex justify-center items-center;
}
.edit-card {
  @apply p-6;
}
.update-profile-submit-button {
  @apply w-full;
}
.back-button {
  @apply absolute top-0 left-0 mt-2 ml-2 text-black;
}
</style>