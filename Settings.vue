<template>
  <div class="profile-settings">
    <SettingsCard />
  </div>
</template>

<script>
import AppButton from "../components/AppButton.vue";
import SettingsCard from "../components/profile/SettingsCard.vue";

export default {
  Name: "Settings",
  components: {
    AppButton,
    SettingsCard,
  },
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.profile-settings {
  @apply flex justify-center items-center;
  @apply w-full h-full bg-orange-500;
}
</style>