<template>
  <div class="shop-div" id="shop">
    <v-row class="dashboard">
      <v-col md="2" sm="3" class="dashboard-menu">
        <NavMenu />
      </v-col>
      <v-col md="10" sm="9" class="pa-0 w-full h-full">
        <DashboardHeader />
        <div>
        <Dashboard />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NavMenu from "../components/NavMenu";
import Dashboard from "../components/dashboard/Dashboard";
import DashboardHeader from "../components/dashboard/DashboardHeader";

export default {
  name: "Shop",
  components: {
    NavMenu,
    Dashboard,
    DashboardHeader,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.shop-div {
  @apply h-full flex flex-col justify-center items-center bg-orange-500 pt-0;
}
.dashboard {
  @apply h-full w-full m-0;
  flex: 0 0;
}
.dashboard-menu {
  @apply shadow-2xl h-full;
  @apply bg-amber-400 z-20 flex flex-col items-center justify-center;
}
</style>
