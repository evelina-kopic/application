<template>
  <div class="app-button">
    <router-link :to="path">
      <v-btn :width="width" :height="height" class="my-1" :style="{color: textColor}" :color="color">
        {{ title }}
      </v-btn>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    title: String,
    color: String,
    path: String,
    textColor: String,
    width: String,
    height: String,
  },
};
</script>

<style >
.app-buttton {
  @apply flex w-full h-full my-3 bg-red-500
}
</style>