<template>
  <div id="profile-menu" class="profile-menu">
    <v-row>
      <v-col md="3" lg="3" sm="3"><v-img class="profile-menu-picture" src="https://cdn-icons-png.flaticon.com/512/147/147142.png"></v-img></v-col>
      <v-col md="7" lg="7" sm="7" class="ml-0 mt-2 font-bold">{{displayName}}</v-col>
      <v-col
        md="2"
        lg="2"
        sm="2"
        class="profile-menu-dropdown-arrow"
        @click="openDropdownMenu()"
        ><i class="arrow down"></i
      ></v-col>
    </v-row>
    <ProfileMenuDropdown :isVisible="isOpenDropDown"/>
  </div>
</template>

<script>
import ProfileMenuDropdown from "../profile/ProfileMenuDropdown.vue";
import firebase from "../../firebase/index"


export default {
  Name: "ProfileMenu",
  components: {
    ProfileMenuDropdown,
  },
  data() {
    return {
      isOpenDropDown: false,
      displayName: ''
    };
  },
  mounted(){
    this.setDisplayName()
  },
  methods: {
    openDropdownMenu() {
      this.isOpenDropDown = !this.isOpenDropDown;
    },
    async setDisplayName(){
      this.displayName = await firebase.auth.currentUser.displayName
    }
  },
};
</script>

<style scoped>
.profile-menu {
  @apply w-56 h-14 p-2 mr-12 z-50;
  @apply float-right mr-3 items-center rounded-md;
  @apply bg-white;
}
.profile-menu-picture {
  @apply rounded-full w-14 h-10 bg-black;
}
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 4px;
}
.profile-menu-dropdown-arrow {
  @apply mt-1;
}
.profile-menu-dropdown-arrow:hover {
  @apply cursor-pointer;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>