<template>
  <div
    id="profile-menu-dropdown"
    class="profile-menu-dropdown"
    v-if="isVisible"
  >
    <ul class="list">
      <li class="list-item">
        <AppButton
          color="red"
          textColor="white"
          title="Settings"
          path="/settings"
          width="100%"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import AppButton from "../AppButton.vue";

export default {
  Name: "ProfileMenuDropdown",
  components: {
    AppButton,
  },
  data() {
    return {};
  },
  props: {
    isVisible: Boolean,
  },
  methods: {},
};
</script>

<style scoped>
.profile-menu-dropdown {
  @apply items-center;

  background: rgba(0, 0, 0, 0.5);
  @apply bg-white mt-2 rounded-b-md border-x-2 border-b-2 shadow-md;
}
.list {
  @apply table table-fixed border-0 box-border w-full text-center pl-0;
  -moz-box-sizing: border-box;
}
.list-item {
  @apply table-row h-10 items-center justify-center;
}
</style>