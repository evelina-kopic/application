<template>
  <v-container class="nav-container">
    <div class="nav-menu">
      <AppButton
        class="nav-menu-item"
        v-for="item in items"
        :key="item.name"
        :title="item.name"
        :color="item.color"
        :path="item.link"
        :width="150"
        textColor="white"
      >
      </AppButton>
    </div>
  </v-container>
</template>

<script>
import AppButton from "../components/AppButton";
export default {
  Name: "NavMenu",
  components: {
    AppButton,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          color: "red",
          link: "/",
        },
        {
          name: "About",
          color: "red",
          link: "/about",
        },
        {
          name: "Contact",
          color: "red",
          link: "/contact",
        },
        {
          name: "Products",
          color: "red",
          link: "/auth",
        },
      ],
    };
  },
};
</script>

<style scoped>
.nav-container {
  @apply mx-0 w-auto;
}
.nav-menu {
  @apply left-0  tracking-wide;
}
.nav-menu-item {
  @apply my-24;
}
</style>