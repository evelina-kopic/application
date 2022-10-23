<template>
  <div>
    <v-card :loading="loading" class="mx-auto my-12" max-width="300">
      <template slot="progress">
        <v-progress-linear
          color="amber darken-2"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="200" :src="source" contain></v-img>

      <v-card-title>{{ title }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="rating"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">{{ rating }} (413)</div>
        </v-row>

        <div class="my-4 text-subtitle-1">{{ price }} KM</div>

        <div class="card-subtitle">
          {{ subtitle }}
        </div>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="amber darken-2" text @click="reserve"> Order </v-btn>
        <ProductPreviewDialog :on="on" attrs="test" :title="title" :subtitle="subtitle" :source="source" :price="price" :rating="rating"/>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import ProductPreviewDialog from './dashboard/ProductPreviewDialog.vue'

export default {
  components:{
    ProductPreviewDialog,
  },
  data: () => ({
    loading: false,
    selection: 1,
    on: false,
    attrs:null,
    }),
  props: {
    source: String,
    subtitle: String,
    title: String,
    rating: Number,
    price: Number,
  },
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    openPreviewModal(){
      this.on = true;
    }
  },
};
</script>

<style scoped>
.card-subtitle {
  @apply h-24 overflow-hidden;
}
.expand-arrow {
  @apply cursor-pointer text-center;
}
.expand-arrow:active {
  ::v-deep .card-subtitle {
    @apply h-auto;
  }
}
</style>