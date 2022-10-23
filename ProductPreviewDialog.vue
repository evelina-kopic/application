<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="amber darken-2" dark text v-bind="attrs" v-on="on">
          Preview
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ title }}
        </v-card-title>
        <br />
        <v-img height="200" :src="source" contain></v-img>
        <br />
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

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    source: String,
    subtitle: String,
    title: String,
    rating: Number,
    price: Number,
    on: Boolean,
  },
};
</script>