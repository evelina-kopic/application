<template>
  <div class="dashboard-header">
    <v-row >
      <v-col md="9" class="dashboard-col"></v-col>
      <v-col md="3" class="dashboard-col"><ProfileMenu /></v-col>
    </v-row>
    
  </div>
</template>

<script>
import ProfileMenu from "../profile/ProfileMenu.vue";

export default {
  name: "DashboardHeader",
  components: {
    ProfileMenu,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.dashboard-header {
  @apply flex items-center justify-end;
  @apply w-full h-20 bg-amber-400;
}
.dashboard-col{
  @apply z-50;
}
</style>